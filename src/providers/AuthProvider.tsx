import React, { createContext, useState, useContext } from 'react';
import { axiosApi, refreshToken } from '../Services/axiosInstances';

interface IAuthContext {
    logged: boolean;
    token: Token | undefined,
    signIn(dataForm: IFormLogin): void;
    signOut(): void;
    createAccount(dataForm: IFormCreateAccountProps): void;
}

export type Token = {
    access_token: string;
    expires_in: number;
    validator?: Validator;
    usuario?: string;
}

export type Validator = {
    email?: string;
    password?: string;
    state?: boolean;
}

export interface IFormLogin {
    email: string,
    password: string
}

interface IFormCreateAccountProps {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@managing-home:logged');
        return !!isLogged;
    });
    const [token, setToken] = useState<Token>();

    const signIn = async (dataForm: IFormLogin) => {
        try {
            console.log('signIn')
            const response = await axiosApi.post<Token>('/auth/login', dataForm)
            const { access_token, expires_in, usuario } = response.data;
            if (!usuario) {
                console.log('!usuario')
                // setErro(!erro);
            } else {
                localStorage.setItem('@managing-home:logged', 'true');
                setToken({
                    ...token,
                    access_token: access_token,
                    expires_in: expires_in,
                    usuario: JSON.stringify(usuario)
                });
                localStorage.setItem('token-managing', access_token);
                localStorage.setItem('token-managing-expires', String(expires_in));
                localStorage.setItem('usuario', JSON.stringify(usuario));
                axiosApi.defaults.headers.common['authorization'] = `bearer ${access_token}`;
            }
        } catch (error) {
            // setErro(!erro);
            console.log(error);
        }
    }

    const createAccount = async (dataForm: IFormCreateAccountProps) => {
        try {
            console.log(dataForm);
            const response = await axiosApi.post<Token>('/auth/register-user', dataForm);
            const { access_token, expires_in, usuario, validator } = response.data;
            if (validator?.email || validator?.password) {
                if (validator.email) {
                    // setTypeError({
                    //     ...typeError,
                    //     state: true,
                    //     email: validator.email[0] 
                    // });
                } if (validator.password) {
                    // setTypeError({
                    //     ...typeError,
                    //     state: true,
                    //     password: validator.password[0]
                    // });
                }
                // setErro(!erro);
            } else {
                localStorage.setItem('@managing-home:logged', 'true');
                setToken({
                    ...token,
                    access_token: access_token,
                    expires_in: expires_in,
                    usuario: JSON.stringify(usuario)
                });
                localStorage.setItem('token-managing', access_token);
                localStorage.setItem('token-managing-expires', String(expires_in));
                localStorage.setItem('usuario', JSON.stringify(usuario));
                axiosApi.defaults.headers.common['authorization'] = `bearer ${access_token}`;
            }
        } catch (error) {
            // setErro(!erro);
            // console.log(error.message);
        }
    }

    const signOut = async () => {
        try {
            await axiosApi.post('auth/logout');
        } catch (error) {
            console.log(error)
        } finally {
            axiosApi.defaults.headers.common['authorization'] = '';
            setLogged(false);
            localStorage.clear();
            sessionStorage.clear();
            window.location.reload();
        }
    }

    return (
        <AuthContext.Provider value={{ logged, token, signIn, signOut, createAccount }}>
            {children}
        </AuthContext.Provider>
    );

}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }