import React from 'react';
import { Container, ContentCard, HeaderCard, FooterCard } from './style';

import Dolar from '../../assets/dollar.svg';
import ArrowUp from '../../assets/arrow-up.svg';
import ArrowDown from '../../assets/arrow-down.svg';
import { formatCoin } from '../../utils/functionsAuxiliares';


interface ICardSaldoProps{
    typeCard : string;
    amout : string | number;
    date: string;
    hours : string;
}

const defaultType = ( typeDefault : string, value1: string, value2: string, value3: string, defaultValue : string ) => {
    typeDefault = typeDefault.toLowerCase();
    switch(typeDefault){
        case('saldo'):
            return typeDefault = value1;
            break;
        case('entrada'):
            return typeDefault = value2;
            break;
        case('saida'):  
            return typeDefault = value3;
            break;
        default:
            return typeDefault = defaultValue;
            break;

    }
}
const CardSaldo : React.FC<ICardSaldoProps>= ({ typeCard, amout, hours, date }) =>{

    const bgColorCard = (type : string) =>{
        return defaultType(type, "#4E41F0", "#F7931B", "#E44C4E", "#313862");
    }
    const titleCard = (title : string) => {
        return defaultType(title, "Saldo", "Entrada", "Saída", "Card Inválido");
    }

    const msgFooterCard = (type: string, date: string, hours : string) => {
        const msgInOu = `Última movimentação em ${date} às ${hours}`;
        const msgSaldo = "Atualizado com base nas entradas e saídas";
        return defaultType(type,  msgSaldo, msgInOu, msgInOu, 'Card inválido');
    }
    const setImage = (type: string) => {
        if(type ===  "saldo"){
            return Dolar;
        }else{
            if(type === "entrada"){
                return ArrowUp;
            }else{
                return ArrowDown;
            }
        }
    }
    return(
        <Container color={bgColorCard(typeCard)}>
            <img src={setImage(typeCard)}></img>
            <ContentCard>
                <HeaderCard>
                    <span>{titleCard(typeCard)}</span>
                    <h2>{formatCoin(amout, 'pt-br', 'brl')}</h2>
                </HeaderCard>
                <FooterCard>
                    <span>{msgFooterCard(typeCard, date, hours)}</span>
                </FooterCard>
            </ContentCard>
        </Container>
    );
}

export default CardSaldo;