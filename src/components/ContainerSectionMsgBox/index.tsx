import React, { ReactNode } from 'react';
import { Container } from './style';

interface IContainerSectionMsgBoxProps{
    children: ReactNode;
    justOne?: boolean;
}

const ContainerSectionMsgBox : React.FC<IContainerSectionMsgBoxProps>= ({ children, justOne }) => {
    return(
        <Container justOne={justOne}>
            {children}
        </Container>
    );
}

export default ContainerSectionMsgBox;