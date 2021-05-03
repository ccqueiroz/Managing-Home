import React, { useEffect, useState } from 'react';
import { Container } from './style';

import { MdClose } from 'react-icons/md';

import * as yup from 'yup';

import { IArrayData } from '../../pages/List/index';

import iconReal from '../../assets/moeda.svg';

import master from '../../repositories/master';
import Spiner from '../Spiner';


interface IModalProps {
    changeModal: Function;
    typeModal: string;
    data?: IArrayData
}


const Modal: React.FC<IModalProps> = ({ changeModal, typeModal, data }) => {

    const [statusSubmit, setStatusSubmit] = useState({
        id: 0,
        description: '',
        amount: '',
        type: '',
        frequency: false,
        date: ''
    });

    const verifyValuesInput = useEffect(() => {
        if (typeModal === 'Editar') {
            setStatusSubmit({
                ...statusSubmit,
                id: Number(data?.id),
                description: String(data?.description),
                amount: String(data?.amount),
                type: String(data?.type),
                frequency: Boolean(data?.frequency),
                date: String(data?.date)
            });

            console.log(statusSubmit)
        }
    }, [changeModal]);

    const [statusErrorDescription, setStatusErrorDescription] = useState(false);
    const [statusErrorAmount, setStatusErrorAmount] = useState(false);
    const [statusErrorType, setStatusErrorType] = useState(false);
    const [statusErrorDate, setStatusErrorDate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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

    const handleSubmitAdd = (e: any) => {
        console.log('handle')
        e.preventDefault();
        let data = {
            id: Math.floor(Math.random() * 1000000000),
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


                setTimeout(() => {
                    setStatusErrorDescription(false);
                    setStatusErrorAmount(false);
                    setStatusErrorType(false);
                    setStatusErrorDate(false);
                }, 5000)
            } else {
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
                        id: 0,
                        description: '',
                        amount: '',
                        type: '',
                        frequency: false,
                        date: ''
                    });
                    data = {
                        id: 0,
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
    console.log(master)
    const handleSubmitEdit = (e: any) => {
        console.log('handleEdit')
        e.preventDefault();
        let data = {
            id: statusSubmit.id,
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


                setTimeout(() => {
                    setStatusErrorDescription(false);
                    setStatusErrorAmount(false);
                    setStatusErrorType(false);
                    setStatusErrorDate(false);
                }, 5000);
            } else {
                setStatusErrorDescription(false);
                setStatusErrorAmount(false);
                setStatusErrorType(false);
                setStatusErrorDate(false);

                setIsLoading(true);
                const index = master.findIndex(e => {
                    return e.id === data.id
                });
                if(index > -1){
                    // espera a resposta do backend para salvamento
                    setTimeout(() => {
                        master.splice(index, 1, data);
                        setIsLoading(false);
                        changeModal();
                        setStatusSubmit({
                            ...statusSubmit,
                            id: 0,
                            description: '',
                            amount: '',
                            type: '',
                            frequency: false,
                            date: ''
                        });
                        data = {
                            id: 0,
                            description: '',
                            amount: '',
                            type: '',
                            frequency: false,
                            date: ''
                        }
                    }, 2000);
                    
                    
                }
            }
        });

    }


    // console.log(statusSubmit.frequency)


    return (
        <Container img={iconReal}>
            <form action="" >
                <h2>{typeModal}</h2>
                <button className="btnModal" onClick={() => changeModal()}><MdClose /></button>
                <div className="formulario">
                    <label htmlFor="description" className="labelForm  text">
                        <div className="contentInput">
                            <span>Descrição</span>
                            <input className="required" type="text" name="description" id="description"
                                placeholder='Informe a descrição' onChange={e => handleInputChange(e, 'description')}
                                required value={statusSubmit.description} />
                        </div>
                        <span className={`formField_error ${statusErrorDescription ? "requiredEl" : ""}`}>This field is required</span>
                    </label>
                    <label htmlFor="amount" className="labelForm  text">
                        <div className="contentInput">
                            <span>Valor </span>
                            <input className="required" type="text" name="amount" id="amount"
                                placeholder="R$ 9.999,99" onChange={e => handleInputChange(e, 'amount')}
                                required value={statusSubmit.amount} />
                        </div>
                        <span className={`formField_error ${statusErrorAmount ? "requiredEl" : ""}`} >This field is required</span>
                    </label>
                    <label htmlFor="type" className="labelForm select">
                        <div className="contentInput">
                            <span>Tipo</span>
                            <select name="type" id="type" onChange={e => handleInputChange(e, 'type')} required>
                                <option selected={(typeModal !== "Editar") ? true : false} disabled>Escolha o tipo</option>
                                <option selected={(typeModal === "Editar") ? (statusSubmit.type === 'entrada') ? true : false : false} value="entrada" id="vEntrada">Entrada</option>
                                <option selected={(typeModal === "Editar") ? (statusSubmit.type === 'saida') ? true : false : false} value="saida" id="vSaida">Saída</option>
                            </select>
                        </div>
                        <span className={`formField_error ${statusErrorType ? "requiredEl" : ""}`}>This field is required</span>
                    </label>
                    <label htmlFor="frequency" className="labelForm checkbox">
                        <div className="contentInput">
                            <span>Frequente</span>
                            <input type="checkbox" name="frequency" id="frequency" onChange={_ => handleCheckBox()}
                                defaultChecked={statusSubmit.frequency} />
                        </div>
                    </label>
                    <label htmlFor="date" className="labelForm date">
                        <div className="contentInput">
                            <span>Data</span>
                            <input type="date" name="date" id="date" onChange={e => handleInputChange(e, 'date')}
                                required value={statusSubmit.date} />
                        </div>
                        <span className={`formField_error ${statusErrorDate ? "requiredEl" : ""}`}>This field is required</span>
                    </label>
                    {
                        (isLoading === true) ? <Spiner />
                            :
                            <button type="submit" id="btnSubmit" onClick={(typeModal === "Editar") ? handleSubmitEdit : handleSubmitAdd}>Salvar</button>
                    }

                </div>
            </form>
        </Container>
    );
}

export default Modal;