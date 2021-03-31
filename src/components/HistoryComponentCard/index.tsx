import React from 'react';
import { Container, TagColor, ContentMain, Title, Date, Amount } from './style';

import { formatNumber } from '../../utils/functionsAuxiliares';

interface IHistoryComponentCardProps {
    tagColor: string;
    date: string | Date;
    title: string;
    amount: string | number
}

const HistoryComponentCard : React.FC<IHistoryComponentCardProps> = ({ tagColor, date, title, amount }) => {
    return(
        <Container>
            <TagColor color={tagColor}/>
            <ContentMain>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </ContentMain>
            <Amount>{formatNumber(amount)}</Amount>
        </Container>
    );
}

export default HistoryComponentCard;