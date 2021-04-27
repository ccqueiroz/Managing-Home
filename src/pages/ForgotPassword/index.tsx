import React, {useState} from 'react';
import FormCredentials from '../../components/FormCredentials';
import LayoutSignIn from '../../components/Layout/LayoutSignIn';

import InputLabel from '../../components/InputLabel';

interface IFormForgotPassword{
    email: string,
}

const ForgotPassword : React.FC = () => {
    const [ dataForm, setDataForm ] = useState<IFormForgotPassword>({
        email: ''
    });

    const handleInput = (e: any) => {
        const { value, name } = e.target;
        setDataForm({
            ...dataForm,
            [name]: value
        })
    }
    return(
        <LayoutSignIn>
            <FormCredentials contentButton='Recuperar' submit={(e: any) => e} typeForm='forgot'>
            <InputLabel onChange={handleInput}
                titleLabel='Email cadastrado'
                required={true}
                autoComplete={false}
                id="email"
                idSpan="spanEmail"
                name="email"
                type="email"
                value={dataForm.email || ''}
                dataForm={dataForm.email}
            />
            </FormCredentials>
        </LayoutSignIn>
    );
}

export default ForgotPassword;