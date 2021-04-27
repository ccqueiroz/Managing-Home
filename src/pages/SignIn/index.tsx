import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosApi } from '../../Services/axiosInstances';
import { Container, FormSignIn, Label, Input, ContentForm, LoginImage } from './style';

import { Link } from 'react-router-dom';

import ImageSignIn from '../../assets/loginImage.jpg'
import Logo from '../../assets/logo.svg';

interface IFormLogin {
    email: string,
    password: string
}
interface IStatusFocusInput{
    login: boolean | undefined,
    password: boolean | undefined
}

const SignIn: React.FC = () => {
    const [dataForm, setDataForm] = useState<IFormLogin>({
        email: '',
        password: ''
    });

    const [statusFocusInput, setStatusFocusInput] = useState<IStatusFocusInput>({
        login: false,
        password: false
    });
    const history = useHistory();

    const handleInput = (e: any) => {
        const { value, name } = e.target;
        setDataForm({
            ...dataForm,
            [name]: value
        })
    }

    useEffect(() => {
        clickedInput();
        changePositionSpan()
    }, [statusFocusInput]);

    const onSubmit = async (e: any) => {
        e.preventDefault();

        const data = await axiosApi.post('/auth/login', dataForm);
        console.log(data)
        if (data.data.access_token) {
            history.push('/dashboard');
        } else {
            console.log('não fez redirect')
        }

    }
    const clickedInput = () => {
        const inputLogin = document.getElementById('login');
        const inputPassword = document.getElementById('password')
        inputLogin?.addEventListener('focus', () => {
            setStatusFocusInput({
                ...statusFocusInput,
                login: true
            })
        });
        inputLogin?.addEventListener('focusout', () => {
            setStatusFocusInput({
                ...statusFocusInput,
                login: false
            })
        });
        inputPassword?.addEventListener('focus', () => {
            setStatusFocusInput({
                ...statusFocusInput,
                password: true
            })
        });
        inputPassword?.addEventListener('focusout', () => {
            setStatusFocusInput({
                ...statusFocusInput,
                password: false
            })
        });
    }
    const changePositionSpan = () => {
        const spanLogin = document.getElementById('spanLogin');
        const spanPassword = document.getElementById('spanPassword');
        
        if(dataForm.email !== '' || statusFocusInput.login)
            spanLogin?.classList.add('spanFocus');
        
        if(!statusFocusInput.login && dataForm.email === '')
            spanLogin?.classList.remove('spanFocus');
        
        if(dataForm.password !== '' || statusFocusInput.password)
            spanPassword?.classList.add('spanFocus');
        
        if(!statusFocusInput.password && dataForm.password === '')
            spanPassword?.classList.remove('spanFocus');

        
    }
    return (
        <Container>
            <ContentForm>
                <FormSignIn action="" onSubmit={onSubmit}>
                    <div className="contentLogo">
                        <img src={Logo} alt=""/>
                        <h1>Managing Home</h1>
                    </div>
                    <h2>Seu Sistema de administração das finanças pessoais</h2>
                    <Label htmlFor="" className="Label">
                        <span className="spanLabel" id="spanLogin">Username</span>
                        <Input type="text" name="email" id="login" onChange={handleInput} value={dataForm.email || ''} autoComplete="off"/>
                    </Label>
                    <Label htmlFor="" className="Label">
                        <span className="spanLabel" id="spanPassword">Password</span>
                        <Input type="password" name="password" id="password" onChange={handleInput} value={dataForm.password || ''} autoComplete="off"/>
                    </Label>
                    <div className="credentials">
                        <Link to="#" className="Link"><span className="crendentialsLinks">Create new Account</span></Link>
                        <Link to="#" className="Link"><span className="crendentialsLinks">Forgot password</span></Link>
                    </div>
                    <button type="submit">Login</button>
                </FormSignIn>
            </ContentForm>
            <LoginImage>
                <img src={ImageSignIn} alt="" />
            </LoginImage>

        </Container>
    );
}

export default SignIn;