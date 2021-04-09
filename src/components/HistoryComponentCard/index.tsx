import React from 'react';
import { Container, TagColor, ContentMain, Title, Date, Amount, Actions } from './style';

import { formatCoin } from '../../utils/functionsAuxiliares';

import { MdDeleteForever, MdModeEdit } from 'react-icons/md';

interface IHistoryComponentCardProps {
    id: number,
    frequency: string;
    date: string | Date;
    title: string;
    amount: string | number,
    delItem: Function,
    editItem: Function
}

const coin = {
    locale: 'pt-br',
    currency: 'brl'
}


const HistoryComponentCard: React.FC<IHistoryComponentCardProps> = ({ frequency, date, title, amount, id, delItem, editItem }) => {

    return (
        <Container>
            <TagColor color={frequency} />
            <ContentMain>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </ContentMain>
            <Amount>{formatCoin(amount, coin.locale, coin.currency)}</Amount>
            <Actions>
                <button id="edit" onClick={()=> editItem(id)}>
                    <MdModeEdit />
                </button>
                <button id="del" onClick={() => delItem(id)}>
                    <MdDeleteForever />
                </button>
            </Actions>
        </Container>
    );
}

export default HistoryComponentCard;