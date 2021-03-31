import React, { useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryComponentCard from '../../components/HistoryComponentCard';

import { Filters } from './style';

import { formatTitle } from '../../utils/functionsAuxiliares';

const arrayEntrada = [
    {
        title: 'Freela 1',
        date: '21/10/2020',
        tagColor: 0,
        amount: 106.56

    },
    {
        title: 'Freela 2',
        date: '21/10/2020',
        tagColor: 1,
        amount: 690.90

    },
    {
        title: 'Freela 3',
        date: '21/10/2020',
        tagColor: 0,
        amount: 690.90

    },

]
const arraySaida= [
    {
        title: 'Conta de água',
        date: '21/10/2020',
        tagColor: 1,
        amount: 0

    },
    {
        title: 'Conta de Luz',
        date: '21/10/2020',
        tagColor: 0,
        amount: 106.56

    },
    {
        title: 'Conta de Supermercado',
        date: '21/10/2020',
        tagColor: 1,
        amount: 690.90

    },
    {
        title: 'Conta de Supermercado',
        date: '21/10/2020',
        tagColor: 0,
        amount: 690.90

    },
    {
        title: 'Conta de Supermercado',
        date: '21/10/2020',
        tagColor: 1,
        amount: 690.90

    },
    {
        title: 'Conta de Supermercado',
        date: '21/10/2020',
        tagColor: 0,
        amount: 690.90

    },
    {
        title: 'Conta de Supermercado',
        date: '21/10/2020',
        tagColor: 0,
        amount: 690.90

    },
    {
        title: 'Conta de Supermercado',
        date: '21/10/2020',
        tagColor: 1,
        amount: 690.90

    },
    {
        title: 'Conta de Supermercado',
        date: '21/10/2020',
        tagColor: 0,
        amount: 690.90

    },
 
]


interface IListProps {
    match:{
        params: any
        // params: Object
    }
}

const filterType = (array:any, value: number) => {
    let x = array.filter((e: any) => {
        return (e.tagColor === value)
    })
    return x;
}

const List : React.FC <IListProps>= ( match )  => {
    const [ stateFilter, setStateFilter ] = useState({
        recorrentes: false,
        eventuais: false,
        all: true
    });
    
    const changeStateFilter = (buttonFilter: string) => {
        if(buttonFilter === 'recorrentes'){
            if(stateFilter.all && !stateFilter.recorrentes && !stateFilter.eventuais){
                setStateFilter({
                    recorrentes: false,
                    eventuais: true,
                    all: false
                });
            }else{
                setStateFilter({
                    recorrentes: false,
                    eventuais: false,
                    all: true
                });
            }
        }else if(buttonFilter === 'eventuais'){
            if(stateFilter.all && !stateFilter.recorrentes && !stateFilter.eventuais){
                setStateFilter({
                    recorrentes: true,
                    eventuais: false,
                    all: false
                })}else{
                    setStateFilter({
                        recorrentes: false,
                        eventuais: false,
                        all: true
                    });
                }
        }
            
    }
    
    let changeTitle = match.match.params.type;
    
    const renderArrayData = (array: any) => {
        return array.map((e: any, index: number )=> {
            return (
                <HistoryComponentCard key={index} title={e.title} date={e.date} tagColor={(e.tagColor) ? '#4E41F0' : '#E44C4E'} amount={e.amount}/>
            );
        })
    }
    
    const ArrayData = (array: any) =>{
        let arrayReturn = Array;
        if(!stateFilter.eventuais && !stateFilter.recorrentes){
            arrayReturn = renderArrayData(array)
        }else if(stateFilter.eventuais || stateFilter.recorrentes){
            if(stateFilter.eventuais && !stateFilter.recorrentes){
                arrayReturn = renderArrayData(filterType(array, 1))
            }else if(!stateFilter.eventuais && stateFilter.recorrentes){
                arrayReturn = renderArrayData(filterType(array, 0))
            }
        }   
    
       return arrayReturn;
    }
    
    return (
        <React.Fragment>
            <ContentHeader title={formatTitle(changeTitle)} lineColor={(formatTitle(changeTitle) === 'Entrada') ? '#F7931B' : '#E44C4E'}/>
            <Filters>
                <button className="button" onClick={() => changeStateFilter('recorrentes')}>
                    <h4>Recorrentes</h4>
                    <span className="tag-recorrentes"></span>
                </button>
                <button className="button" onClick={() => changeStateFilter('eventuais')}>
                    <h4>Eventuais</h4>
                    <span className="tag-eventuais"></span>
                </button>
            </Filters>
            {
                (formatTitle(changeTitle) === 'Entrada') ?
                    ArrayData(arrayEntrada)
                    :
                    ArrayData(arraySaida)
            }
        </React.Fragment>
    );
}

export default List;