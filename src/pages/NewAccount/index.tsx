import React, {useState} from 'react';

import LayoutSignIn from '../../components/Layout/LayoutSignIn';
import FormCredentials from '../../components/FormCredentials';
import InputLabel from '../../components/InputLabel';

import {axiosApi} from '../../Services/axiosInstances';
import { useHistory } from 'react-router-dom';

interface IFormCreateAccountProps{
    name: string,
    email:string,
    password:string,
    repeatPassword:string
}

const NewAccount : React.FC = () => {
    const [dataForm, setDataForm] = useState<IFormCreateAccountProps>({
        name:'',
        email: '',
        password: '',
        repeatPassword:''
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

    return(
        <LayoutSignIn>
            <FormCredentials contentButton='Login' submit={(e: any) => onSubmit(e)} typeForm='create'>
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
                        name="repeatPassword"
                        type="repeatPassword"
                        value={dataForm.repeatPassword || ''}
                        dataForm={dataForm.repeatPassword}
                    />
                </FormCredentials>
        </LayoutSignIn>
    );
}

export default NewAccount;