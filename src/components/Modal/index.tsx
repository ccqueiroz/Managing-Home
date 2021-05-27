import React, { useEffect, useState } from 'react';
import { Container } from './style';

import { MdClose } from 'react-icons/md';

import * as yup from 'yup';

import { IArrayData } from '../../pages/List/index';

import iconReal from '../../assets/moeda.svg';

// import master from '../../repositories/master';
import Spiner from '../Spiner';
import { axiosApi } from '../../Services/axiosInstances';

import { useAuth } from '../../providers/AuthProvider';


interface IModalProps {
    changeModal: Function;
    typeModal: string;
    data?: IArrayData
}


const Modal: React.FC<IModalProps> = ({ changeModal, typeModal, data }) => {
    const { token } = useAuth();
    const [statusSubmit, setStatusSubmit] = useState({
        id_user: JSON.parse(String(token?.usuario)).id,
        id: 0,
        description: '',
        amount: '',
        type: '',
        frequency: false,
        date: ''
    });
    useEffect(() => {
        const usuario = JSON.parse(String(localStorage.getItem('usuario')));
        const request = async () => {
            const response = await axiosApi.post('http://127.0.0.1:8000/api/list-wallet', {
                'id': usuario.id
            });
            console.log(response)
        }
        request();
    }, []);

    useEffect(() => {
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

    // const addressSchema = yup.object().shape({
    //     description: yup.string().required(),
    //     amount: yup.string().required(),
    //     type: yup.string().required(),
    //     frequency: yup.boolean().notRequired(),
    //     date: yup.date().required()
    // });

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

    const handleSubmitAdd = async (e: any) => {
        try {
            e.preventDefault();
            let data = {
                id_user: JSON.parse(String(token?.usuario)).id,
                descricao: statusSubmit.description,
                valor: statusSubmit.amount.replace(',', '.'),
                tipo: statusSubmit.type,
                frequencia: statusSubmit.frequency,
                data: statusSubmit.date
            }

            if (!data.descricao || data.descricao === '') {
                setStatusErrorDescription(true);
            } else if (!data.valor || data.valor === "") {
                setStatusErrorAmount(true);
            } else if (!data.tipo || data.tipo === "") {
                setStatusErrorType(true);
            } else if (!data.data || data.data === "") {
                setStatusErrorDate(true);
            } else {
                setIsLoading(true);
                await axiosApi.post('http://127.0.0.1:8000/api/store', data);
                data = {
                    id_user: 0,
                    descricao: '',
                    valor: '',
                    tipo: '',
                    frequencia: false,
                    data: ''
                }
            }

            setTimeout(() => {
                setStatusErrorDescription(false);
                setStatusErrorAmount(false);
                setStatusErrorType(false);
                setStatusErrorDate(false);
            }, 5000);

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }

    }
    const handleSubmitEdit = async (e: any) => {
        try {
            e.preventDefault();
            let data = {
                id_user: JSON.parse(String(token?.usuario)).id,
                id: statusSubmit.id,
                descricao: statusSubmit.description,
                valor: statusSubmit.amount.replace(',', '.'),
                tipo: statusSubmit.type,
                frequencia: statusSubmit.frequency,
                data: statusSubmit.date
            }

            if (!data.descricao || data.descricao === '') {
                setStatusErrorDescription(true);
            } else if (!data.valor || data.valor === "") {
                setStatusErrorAmount(true);
            } else if (!data.tipo || data.tipo === "") {
                setStatusErrorType(true);
            } else if (!data.data || data.data === "") {
                setStatusErrorDate(true);
            } else {
                setIsLoading(true);
                await axiosApi.post('http://127.0.0.1:8000/api/update', data);
                data = {
                    id_user: 0,
                    id: 999999999,
                    descricao: '',
                    valor: '',
                    tipo: '',
                    frequencia: false,
                    data: ''
                }
            }

            setTimeout(() => {
                setStatusErrorDescription(false);
                setStatusErrorAmount(false);
                setStatusErrorType(false);
                setStatusErrorDate(false);
            }, 5000);

        } catch (error) {

        } finally {
            setIsLoading(false);

        }
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
                                checked={statusSubmit.frequency} />
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