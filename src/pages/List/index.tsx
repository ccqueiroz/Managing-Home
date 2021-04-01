import React, { useMemo, useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryComponentCard from '../../components/HistoryComponentCard';

import { Filters } from './style';

import { formatTitle, filterType, formatDate } from '../../utils/functionsAuxiliares';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';

export interface IArrayData {
     
        description: string;
        date: string | Date;
        frequency: boolean;
        amount: number;
}


const arrayEntrada : IArrayData[] = [
     {
        description: 'Freela 1',
        date: '21/10/2020',
        frequency: false,
        amount: 106.56

    },
    {
        description: 'Freela 2',
        date: '21/10/2020',
        frequency: true,
        amount: 690.90

    },
    {
        description: 'Freela 3',
        date: '21/10/2020',
        frequency: true,
        amount: 690.90

    },

]
const arraySaida= [
    {
        description: 'Conta de água',
        date: '21/10/2020',
        frequency: true,
        amount: 0

    },
    {
        description: 'Conta de Luz',
        date: '21/10/2020',
        frequency: false,
        amount: 106.56

    },
    {
        description: 'Conta de Supermercado',
        date: '21/10/2020',
        frequency: false,
        amount: 690.90

    },
    {
        description: 'Conta de Supermercado',
        date: '21/10/2020',
        frequency: false,
        amount: 690.90

    },
    {
        description: 'Conta de Supermercado',
        date: '21/10/2020',
        frequency: true,
        amount: 690.90

    },
    {
        description: 'Conta de Supermercado',
        date: '21/10/2020',
        frequency: true,
        amount: 690.90

    },
    {
        description: 'Conta de Supermercado',
        date: '21/10/2020',
        frequency: true,
        amount: 690.90

    },
    {
        description: 'Conta de Supermercado',
        date: '21/10/2020',
        frequency: true,
        amount: 690.90

    },
    {
        description: 'Conta de Supermercado',
        date: '21/10/2020',
        frequency: true,
        amount: 690.90

    },
 
]

interface IListProps {
    match:{
        params: {
            type: string //chave de acesso da rota /list/:type
        }
    }
}



const List : React.FC <IListProps>= ( match )  => {
    const [ stateFilter, setStateFilter ] = useState({
        recorrentes: false,
        eventuais: false,
        all: true
    });

    const changeTitle = match.match.params.type;
    const title = useMemo(()=>{
       return (formatTitle(changeTitle) === "Entrada") ? "Entrada" : "Saída" 
    }, [changeTitle]);
    
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
   
    const renderArrayData = (array: any) => {
        return array.map((e: any, index: number )=> {
            return (
                <HistoryComponentCard key={index} title={e.description} date={formatDate(e.date)} frequency={(e.frequency) ? '#4E41F0' : '#E44C4E'}  amount={e.amount}/>
            );
        })
    }
    
    const ArrayData = (array: any) =>{
        let arrayReturn = Array;
        if(!stateFilter.eventuais && !stateFilter.recorrentes){
            arrayReturn = renderArrayData(array)
        }else if(stateFilter.eventuais || stateFilter.recorrentes){
            if(stateFilter.eventuais && !stateFilter.recorrentes){
                arrayReturn = renderArrayData(filterType(array, true))
            }else if(!stateFilter.eventuais && stateFilter.recorrentes){
                arrayReturn = renderArrayData(filterType(array, false))
            }
        }   
    
       return arrayReturn;
    }
    
    
/* TESTE DE FUNÇÕES */

const dateN = '2027-02-09';
const dateN2 = new Date();
formatDate(dateN2)
formatDate(dateN)

/* ----------------------------- */
    return (
        <React.Fragment>
            <ContentHeader title={title} lineColor={(title === 'Entrada') ? '#F7931B' : '#E44C4E'}/>
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
                (title === 'Entrada') ?
                    ArrayData(gains)
                    :
                    ArrayData(expenses)
            }
        </React.Fragment>
    );
}

export default List;