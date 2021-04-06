import React from 'react';
import { Container } from './style';

import { MdClose } from 'react-icons/md';

import iconReal from '../../assets/moeda.svg';


interface IModalProps {
    changeModal: Function;
    typeModal: string;
}

const Modal: React.FC<IModalProps> = ({ changeModal, typeModal }) => {

    return (
        <Container img={iconReal}>
            <form action="">
                <h2>{typeModal}</h2>
                <button className="btnModal" onClick={() => changeModal()}><MdClose /></button>
                <div className="formulario">
                    <label htmlFor="" className="labelForm">
                        <span>Descrição</span>
                        <input type="text" name="description" id="description" placeholder='Informe a descrição' />
                    </label>
                    <label htmlFor="" className="labelForm">
                        <span>Valor </span>
                        <input type="text" name="amount" id="amount" placeholder="R$ 9.999,99" />
                    </label>
                    <label htmlFor="" className="labelForm">
                        <span>Tipo</span>
                        <select name="type" id="type">
                            <option selected disabled>Escolha o tipo</option>
                            <option value="entrada" id="vEntrada">Entrada</option>
                            <option value="saida" id="vSaida">Saída</option>
                        </select>
                    </label>
                    <label htmlFor="" className="labelForm">
                        <span>Frequente</span>
                        <input type="checkbox" name="frequency" id="frequency" />
                    </label>
                    <label htmlFor="" className="labelForm">
                        <span>Data</span>
                        <input type="date" name="date" id="date" />
                    </label>
                    <button type="submit" id="btnSubmit">Salvar</button>
                </div>
            </form>
        </Container>
    );
}

export default Modal;