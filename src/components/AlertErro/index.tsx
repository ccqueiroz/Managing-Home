import React, {  useEffect } from 'react';
import './style.css';

import { HiOutlineXCircle } from 'react-icons/hi';

interface IAlertErroProps {
    title: string,
    erro: boolean
    setErro: Function,

}

const AlertErro: React.FC<IAlertErroProps> = ({ erro, setErro, title }) => {
    
    const closeModalErro = () => {
        document.querySelector('.alertErro')?.classList.remove('error');
        setErro(false);
    }

    useEffect(() => {
        if (erro) {
            document.querySelector('.alertErro')?.classList.add('error');
            setTimeout(() => {
                document.querySelector('.alertErro')?.classList.remove('error');
                setErro(false);
            }, 5000);
        }
    }, [erro]);
    return (
        <div className="alertErro">
            <button className="buttonErro" onClick={closeModalErro}><HiOutlineXCircle style={{ fontSize: '23px', color: '#ffffff' }} /></button>
            <span>{title}</span>
        </div>
    );
}

export default AlertErro;