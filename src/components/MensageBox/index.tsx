import React, { Children, ReactNode } from 'react';
import { Container } from './style';


interface IMensageBoxProps {
    children: ReactNode
}
const MensageBox : React.FC = ({ children }) =>{
    return (
        <Container>
            {children}
        </Container>
    );
}

export default MensageBox;