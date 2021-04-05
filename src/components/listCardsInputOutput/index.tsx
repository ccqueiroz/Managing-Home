import React from 'react';
import HistoryComponentCard from '../HistoryComponentCard';
import { Container } from './style';

import { IArrayData } from '../../pages/List/index';

import { formatDate } from '../../utils/functionsAuxiliares';


interface IListCardsInputOutputProps {
    arrayData: Array<IArrayData>
}

const ListCardsInputOutput : React.FC <IListCardsInputOutputProps> = ({ arrayData }) => {
    console.log(arrayData)
    return(
        <Container>
            {
                arrayData.map( ( e: IArrayData, index: number) => {
                    return(
                        <HistoryComponentCard key={index} title={e.description} date={formatDate(e.date)} frequency={(e.frequency) ? '#4E41F0' : '#E44C4E'} amount={e.amount}/>
                    );
                } )
            }
        </Container>
    );  
}

export default ListCardsInputOutput;

