import React, { useState } from 'react';
import { Container, Alt } from './style';

import { FaPlus } from 'react-icons/fa';

interface INovoProps{
    changeModal: Function;
}
const Novo: React.FC<INovoProps> = ({ changeModal }) => {

    return (
        <Container>
            <button onClick={_ => changeModal()}>
                <FaPlus />
            </button>
            <Alt className="teste">Adicionar Nova Entrada</Alt>
        </Container>
    );
}

export default Novo;