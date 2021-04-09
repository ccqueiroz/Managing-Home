import React from 'react';
import HistoryComponentCard from '../HistoryComponentCard';
import { Container } from './style';

import { IArrayData } from '../../pages/List/index';

import { formatDate } from '../../utils/functionsAuxiliares';


interface IListCardsInputOutputProps {
    arrayData: Array<IArrayData>,
    delItem : Function,
    editItem: Function,
}

const ListCardsInputOutput : React.FC <IListCardsInputOutputProps> = ({ arrayData, delItem, editItem }) => {
    return(
        <Container>
            {
                arrayData.map( ( e: IArrayData, index: number) => {
                    return(
                        <div>
                            <HistoryComponentCard key={index} id={e.id} title={e.description} date={formatDate(e.date)} frequency={(e.frequency) ? '#4E41F0' : '#E44C4E'} amount={e.amount} delItem={delItem} editItem={editItem}/>
                        </div>
                        
                    );
                } )
            }
        </Container>
    );  
}

export default ListCardsInputOutput;

