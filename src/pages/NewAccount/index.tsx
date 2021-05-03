import React, {useState} from 'react';

import { RouteComponentProps } from 'react-router-dom';
import LayoutSignIn from '../../components/Layout/LayoutSignIn';
import FormCredentials from '../../components/FormCredentials';
import InputLabel from '../../components/InputLabel';

import {axiosApi} from '../../Services/axiosInstances';
import { Token, Validator } from '../SignIn';
import AlertErro from '../../components/AlertErro';

interface IFormCreateAccountProps{
    name: string,
    email:string,
    password:string,
    password_confirmation:string
}

const NewAccount : React.FC <RouteComponentProps> = ({ history }) => {
    const [dataForm, setDataForm] = useState<IFormCreateAccountProps>({
        name:'',
        email: '',
        password: '',
        password_confirmation:''
    });

    const [erro, setErro] = useState<boolean>(false);
    const [typeError, setTypeError] = useState<Validator>({
        email: "",
        password: "",
        state: false
    });

    //erros: cadastro com mesmo email senhas não conferindo

    const changeErro = (erroF: boolean) => {
        setErro(erroF);
        setTypeError({
            ...typeError,
            email: "",
            password: "",
            state: false
        })
    }

    const handleInput = (e: any) => {
        const { value, name } = e.target;
        setDataForm({
            ...dataForm,
            [name]: value
        })
    }

    const onSubmit = async (e: any) => {
        try {
            e.preventDefault();
            console.log(dataForm);
            const response = await axiosApi.post<Token>('/auth/register-user', dataForm);
            const { access_token, expires_in, usuario, validator } = response.data;
            if(validator?.email || validator?.password){
                if(validator.email){
                    setTypeError({
                        ...typeError,
                        state: true,
                        email: validator.email[0] 
                    });
                }if(validator.password){
                    setTypeError({
                        ...typeError,
                        state: true,
                        password: validator.password[0]
                    });
                }
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

    console.log(typeError.email);
    console.log(typeError.password);
    return(
        <LayoutSignIn>
            <AlertErro title={typeError.state ? 
                    (typeError.password !== '')  ?
                        String(typeError.password) : String(typeError.email)
                        : ''
                    } erro={erro} setErro={changeErro}/>
            <FormCredentials contentButton='Create' submit={(e: any) => onSubmit(e)} typeForm='create'>
                    <InputLabel onChange={handleInput}
                        titleLabel='Name'
                        required={true}
                        autoComplete={false}
                        id="name"
                        idSpan="spanName"
                        name="name"
                        type="text"
                        value={dataForm.name || ''}
                        dataForm={dataForm.name}
                    />
                    <InputLabel onChange={handleInput}
                        titleLabel='Email'
                        required={true}
                        autoComplete={false}
                        id="email"
                        idSpan="spanEmail"
                        name="email"
                        type="email"
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
                    <InputLabel onChange={handleInput}
                        titleLabel='Repeate Password'
                        required={true}
                        autoComplete={false}
                        id="repeatPassword"
                        idSpan="spanrepeatPassword"
                        name="password_confirmation"
                        type="password"
                        value={dataForm.password_confirmation || ''}
                        dataForm={dataForm.password_confirmation}
                    />
                </FormCredentials>
        </LayoutSignIn>
    );
}

export default NewAccount;