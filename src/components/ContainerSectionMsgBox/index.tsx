import React, { ReactNode } from 'react';
import MensageBox from '../MensageBox';
import { Container } from './style';

interface IContainerSectionMsgBoxProps{
    // chilfren: ReactNode;
}

const ContainerSectionMsgBox : React.FC<IContainerSectionMsgBoxProps>= ({ children }) => {
    return(
        <Container>
            {children}
        </Container>
    );
}

export default ContainerSectionMsgBox;