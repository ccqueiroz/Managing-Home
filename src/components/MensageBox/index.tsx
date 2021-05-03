import React, { ReactNode } from 'react';
import { Container } from './style';

interface IMensageBoxProps {
    children: ReactNode,
    theLast?: boolean,
}
const MensageBox : React.FC <IMensageBoxProps>= ({ children, theLast}) =>{
    return (
        <Container theLast={theLast}>
            {children}
        </Container>
    );
}

export default MensageBox;