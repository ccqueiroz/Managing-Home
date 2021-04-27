import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosApi } from '../../Services/axiosInstances';
import InputLabel from '../../components/InputLabel';

import AlertErro from '../../components/AlertErro';
import FormCredentials from '../../components/FormCredentials';
import LayoutSignIn from '../../components/Layout/LayoutSignIn';

export interface IFormLogin {
    email: string,
    password: string
}

const SignIn: React.FC = () => {
    const [dataForm, setDataForm] = useState<IFormLogin>({
        email: '',
        password: ''
    });

    const [erro, setErro] = useState(false);

    const history = useHistory();

    const handleInput = (e: any) => {
        const { value, name } = e.target;
        setDataForm({
            ...dataForm,
            [name]: value
        })
    }

    const chengeErro = (erroF: boolean) => {
        setErro(erroF);
    }

    const onSubmit = async (e: any) => {
        try {
            e.preventDefault();
            const data = await axiosApi.post('/auth/login', dataForm)
            console.log(data)
            if (data.data.access_token) {
                history.push('/dashboard');
            } else {
                setErro(true);
                console.log('não fez redirect')
            }
        } catch (error) {
            setErro(!erro);
            console.log(error.message);
        }
    }

    return (
        <LayoutSignIn>
            <AlertErro title={`Usuário ou Senha incorretos!`} erro={erro} setErro={chengeErro}/>
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
