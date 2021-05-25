import React, { ReactNode } from 'react';
import { Container } from './style';

interface IMensageBoxProps {
    children: ReactNode,
    theLast?: boolean,
    controlHeight?: boolean
}
const MensageBox : React.FC <IMensageBoxProps>= ({ children, theLast, controlHeight}) =>{
    return (
        <Container theLast={theLast} controlHeightProp={controlHeight}>
            {children}
        </Container>
    );
}

export default MensageBox;