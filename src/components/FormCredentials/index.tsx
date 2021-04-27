import React from 'react';
import {FormSignIn} from './style';

import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

interface IFormCredentialsProps{
    contentButton?:String,
    children?:React.ReactNode,
    submit?:(e:any) => void,
    typeForm:string,
}

const FormCredentials : React.FC <IFormCredentialsProps> = ({contentButton, children, submit, typeForm}) =>{
   console.log(typeForm)
    return(
        <FormSignIn onSubmit={submit}>
            <div className="contentLogo">
                <img src={Logo} alt="" />
                <h1>Managing Home</h1>
            </div>
            <h2>Seu Sistema de administração das finanças pessoais</h2>
                {children}
             {
                typeForm === 'new' || typeForm === 'create' ?
                    (
                        <div className="credentials">
                            {
                                typeForm === 'new' ? 
                                    <Link to="/register" className="Link"><span className="crendentialsLinks">Create new Account</span></Link>
                                :
                                <Link to="/" className="Link"><span className="crendentialsLinks">Sign In</span></Link>
                            }
                            <Link to="/forgot" className="Link"><span className="crendentialsLinks">Forgot password</span></Link>
                        </div>
                    )
                    :
                    (
                        <div className="credentials">
                            <Link to="/" className="Link"><span className="crendentialsLinks">Sign In</span></Link>
                            <Link to="/register" className="Link"><span className="crendentialsLinks">Create new Account</span></Link>
                        </div>
                    )
                
            }
            <button type="submit">{contentButton}</button>
        </FormSignIn>
    );
}

export default FormCredentials;