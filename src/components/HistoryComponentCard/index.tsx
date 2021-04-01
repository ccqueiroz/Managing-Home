import React from 'react';
import { Container, TagColor, ContentMain, Title, Date, Amount } from './style';

import { formatNumber } from '../../utils/functionsAuxiliares';

interface IHistoryComponentCardProps {
    frequency : string ;
    date: string | Date;
    title: string;
    amount: string | number
}

const HistoryComponentCard : React.FC<IHistoryComponentCardProps> = ({ frequency, date, title, amount }) => {
    return(
        <Container>
            <TagColor color={frequency}/>
            <ContentMain>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </ContentMain>
            <Amount>{formatNumber(amount)}</Amount>
        </Container>
    );
}

export default HistoryComponentCard;