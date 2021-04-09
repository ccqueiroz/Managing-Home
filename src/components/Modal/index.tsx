import React, { useState } from 'react';
import { Container } from './style';

import { MdClose } from 'react-icons/md';

import * as yup from 'yup';

import iconReal from '../../assets/moeda.svg';

import master from '../../repositories/master';
import Spiner from '../Spiner';


interface IModalProps {
    changeModal: Function;
    typeModal: string;
}


const Modal: React.FC<IModalProps> = ({ changeModal, typeModal }) => {

    const [statusSubmit, setStatusSubmit] = useState({
        description: '',
        amount: '',
        type: '',
        frequency: false,
        date: ''
    });

    const [ statusErrorDescription, setStatusErrorDescription ] = useState(false);
    const [ statusErrorAmount, setStatusErrorAmount ] = useState(false);
    const [ statusErrorType, setStatusErrorType ] = useState(false);
    const [ statusErrorDate, setStatusErrorDate ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    const addressSchema = yup.object().shape({
        description: yup.string().required(),
        amount: yup.string().required(),
        type: yup.string().required(),
        frequency: yup.boolean().notRequired(),
        date: yup.date().required()
    });

    const handleCheckBox = () => {
        setStatusSubmit({
            ...statusSubmit,
            frequency: !statusSubmit.frequency
        });
    }
    const handleInputChange = (e: any, key: string) => {
        setStatusSubmit({
            ...statusSubmit,
            [key]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        console.log('handle')
        e.preventDefault();
        let data = {
            description: statusSubmit.description,
            amount: statusSubmit.amount.replace(',', '.'),
            type: statusSubmit.type,
            frequency: statusSubmit.frequency,
            date: statusSubmit.date
        }
        addressSchema.isValid(data).then(valid => {
            if (!valid) {
                if (!data.description || data.description === "")
                    setStatusErrorDescription(true);
                if (!data.amount || data.amount === "")
                    setStatusErrorAmount(true);
                if (!data.type || data.type === "")
                    setStatusErrorType(true);
                if (!data.date || data.date === "")
                    setStatusErrorDate(true);


                    setTimeout(()=>{
                        setStatusErrorDescription(false);
                        setStatusErrorAmount(false);
                        setStatusErrorType(false);
                        setStatusErrorDate(false);
                    }, 5000)
            }else{
                setStatusErrorDescription(false);
                setStatusErrorAmount(false);
                setStatusErrorType(false);
                setStatusErrorDate(false);

                setIsLoading(true);

                //espera a resposta do backend para salvamento
                setTimeout(() => {
                    console.log('interval')
                    console.log(data)
                    setIsLoading(false); 
                    changeModal();
                    master.push(data);
                    setStatusSubmit({
                        ...statusSubmit,
                        description: '',
                        amount: '',
                        type: '',
                        frequency: false,
                        date: ''
                    });
                    data = {
                        description: '',
                        amount: '',
                        type: '',
                        frequency: false,
                        date: ''
                    }
                }, 2000);
            }
        });

    }

    return (
        <Container img={iconReal}>
            <form action="" >
                <h2>{typeModal}</h2>
                <button className="btnModal" onClick={() => changeModal()}><MdClose /></button>
                <div className="formulario">
                    <label htmlFor="description" className="labelForm  text">
                        <div className="contentInput">
                            <span>Descrição</span>
                            <input className="required" type="text" name="description" id="description" placeholder='Informe a descrição' onChange={e => handleInputChange(e, 'description')} required />
                        </div>
                        <span className={`formField_error ${statusErrorDescription ? "requiredEl" : ""}`}>This field is required</span>
                    </label>
                    <label htmlFor="amount" className="labelForm  text">
                        <div className="contentInput">
                            <span>Valor </span>
                            <input className="required" type="text" name="amount" id="amount" placeholder="R$ 9.999,99" onChange={e => handleInputChange(e, 'amount')} required />
                        </div>
                        <span className={`formField_error ${statusErrorAmount ? "requiredEl" : ""}`} >This field is required</span>
                    </label>
                    <label htmlFor="type" className="labelForm select">
                        <div className="contentInput">
                            <span>Tipo</span>
                            <select name="type" id="type" onChange={e => handleInputChange(e, 'type')} required>
                                <option selected disabled>Escolha o tipo</option>
                                <option value="entrada" id="vEntrada">Entrada</option>
                                <option value="saida" id="vSaida">Saída</option>
                            </select>
                        </div>
                        <span className={`formField_error ${statusErrorType ? "requiredEl" : ""}`}>This field is required</span>
                    </label>
                    <label htmlFor="frequency" className="labelForm checkbox">
                        <div className="contentInput">
                            <span>Frequente</span>
                            <input type="checkbox" name="frequency" id="frequency" onChange={_ => handleCheckBox()} defaultChecked={statusSubmit.frequency} />
                        </div>
                    </label>
                    <label htmlFor="date" className="labelForm date">
                        <div className="contentInput">
                            <span>Data</span>
                            <input type="date" name="date" id="date" onChange={e => handleInputChange(e, 'date')} required />
                        </div>
                        <span className={`formField_error ${statusErrorDate ? "requiredEl" : ""}`}>This field is required</span>
                    </label>
                    {
                        (isLoading === true) ? <Spiner/> 
                        : 
                        <button type="submit" id="btnSubmit" onClick={handleSubmit}>Salvar</button>                    
                    }
                    
                </div>
            </form>
        </Container>
    );
}

export default Modal;