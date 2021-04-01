import React from 'react';
import { Container, TagColor, ContentMain, Title, Date, Amount } from './style';

import { formatCoin } from '../../utils/functionsAuxiliares';

interface IHistoryComponentCardProps {
    frequency : string ;
    date: string | Date;
    title: string;
    amount: string | number
}

const coin = {
    locale: 'pt-br',
    currency: 'brl'
}

const HistoryComponentCard : React.FC<IHistoryComponentCardProps> = ({ frequency, date, title, amount }) => {
    return(
        <Container>
            <TagColor color={frequency}/>
            <ContentMain>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </ContentMain>
            <Amount>{formatCoin(amount, coin.locale, coin.currency)}</Amount>
        </Container>
    );
}

export default HistoryComponentCard;