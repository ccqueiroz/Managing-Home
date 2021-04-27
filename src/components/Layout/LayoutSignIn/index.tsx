import React from 'react';
import { Container, ContentForm, LoginImage } from './style';

import ImageSignIn from '../../../assets/loginImage.jpg';

interface ILayoutSignInProps {
    children: React.ReactNode,
}

const LayoutSignIn: React.FC<ILayoutSignInProps> = ({ children }) => {
    return (
        <Container>
            <ContentForm>
                {children}
            </ContentForm>
            <LoginImage>
                <img src={ImageSignIn} alt="banner SigIn" />
            </LoginImage>
        </Container>
    );

}


export default LayoutSignIn;