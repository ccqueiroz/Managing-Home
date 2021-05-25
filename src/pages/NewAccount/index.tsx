import React, {useState} from 'react';

import { RouteComponentProps } from 'react-router-dom';
import LayoutSignIn from '../../components/Layout/LayoutSignIn';
import FormCredentials from '../../components/FormCredentials';
import InputLabel from '../../components/InputLabel';

import { Validator } from '../SignIn';
import {useAuth} from '../../providers/AuthProvider';
import AlertErro from '../../components/AlertErro';

interface IFormCreateAccountProps{
    name: string,
    email:string,
    password:string,
    password_confirmation:string
}

const NewAccount : React.FC <RouteComponentProps> = () => {
    const { createAccount } = useAuth();
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
            createAccount(dataForm);
        } catch (error) {
            setErro(!erro);
            console.log(error.message);
        }
    }
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