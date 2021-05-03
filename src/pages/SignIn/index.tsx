import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { axiosApi } from '../../Services/axiosInstances';
import InputLabel from '../../components/InputLabel';

import AlertErro from '../../components/AlertErro';
import FormCredentials from '../../components/FormCredentials';
import LayoutSignIn from '../../components/Layout/LayoutSignIn';

export type Token = {
    access_token: string;
    expires_in: number;
    validator?: Validator;
    usuario ?: string;
}

export type Validator = {
    email?: string;
    password?: string;
    state?:boolean;
}

export interface IFormLogin {
    email: string,
    password: string
}

const SignIn: React.FC <RouteComponentProps> = ({ history }) => {
    const [dataForm, setDataForm] = useState<IFormLogin>({
        email: '',
        password: ''
    });

    const [erro, setErro] = useState(false);

    //verificação de token
    if(localStorage.getItem('hasTheSessionExpired') === 'true'){
        console.log('Sessão expirada');
        localStorage.removeItem('hasTheSessionExpired');
    }

    const handleInput = (e: any) => {
        const { value, name } = e.target;
        setDataForm({
            ...dataForm,
            [name]: value
        })
    }

    const changeErro = (erroF: boolean) => {
        setErro(erroF);
    }

    const onSubmit = async (e: any) => {
        try {
            e.preventDefault();
            const response = await axiosApi.post<Token>('/auth/login', dataForm)
            const { access_token, expires_in, usuario } = response.data;
            if(!usuario){
                console.log('!usuario')
                setErro(!erro);
            }else{
                localStorage.setItem('token-managing', access_token);
                localStorage.setItem('token-managing-expires', String(expires_in));
                localStorage.setItem('usuario', JSON.stringify(usuario));
                 axiosApi.defaults.headers.common['authorization'] = `bearer ${access_token}`;
                history.push('/dashboard');
                window.location.reload();
            }
        } catch (error) {
            setErro(!erro);
            console.log(error.message);
        }
    }

    return (
        <LayoutSignIn>
            <AlertErro title={`Usuário ou Senha incorretos!`} erro={erro} setErro={changeErro}/>
                <FormCredentials contentButton='Login' submit={(e: any) => onSubmit(e)} typeForm='new'>
                    <InputLabel onChange={handleInput}
                        titleLabel='Username'
                        required={true}
                        autoComplete={false}
                        id="login"
                        idSpan="spanLogin"
                        name="email"
                        type="text"
                        value={dataForm.email || ''}
                        dataForm={dataForm.email}
                    />
                    <InputLabel onChange={handleInput}
                        titleLabel='Password'
                        required={true}
                        autoComplete={false}
                        id="password"
                        idSpan="spanPassword"
                        name="password"
                        type="password"
                        value={dataForm.password || ''}
                        dataForm={dataForm.password}
                    />
                </FormCredentials>
        </LayoutSignIn>
    );
}

export default SignIn;
