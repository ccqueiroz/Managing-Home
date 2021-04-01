import React, { useEffect, useMemo, useState } from 'react';
import ContentHeader from '../../components/ContentHeader';

import { Filters } from './style';

import { formatTitle, filterType  } from '../../utils/functionsAuxiliares';

import masterArray from '../../repositories/master';
import ListCardsInputOutput from '../../components/listCardsInputOutput';

export interface IArrayData {
     
        description: string;
        date: string | Date;
        frequency: boolean;
        amount: number | string;
        type: string
}

interface IListProps {
    match:{
        params: {
            type: string //chave de acesso da rota /list/:type
        }
    }
}

const List : React.FC <IListProps>= ( match )  => {
    const dateCurrent = new Date();
    /* Hook de filtro */
    const [ stateFilter, setStateFilter ] = useState({
        recorrentes: false,
        eventuais: false,
        all: true
    });

    /* Hook dos arrays que serão modificados pelo BD */
    const [ arrayData, setArrayData ] = useState<Array<IArrayData>>([]);

    const [ valueSelectMonth, setValueSelectMonth ] = useState<string>(String(dateCurrent.getMonth() + 1));
    const [ valueSelectYear, setValueSelectYear ] = useState<string>(String(dateCurrent.getFullYear()));

    /* Memo para verificação do tipó de tela que será entregue */
    const changeTitle = match.match.params.type;
    const title : string = useMemo(()=>{
       return (formatTitle(changeTitle) === "Entrada") ? "Entrada" : "Saída" 
    }, [changeTitle]);

    /* separação dos dados por tipo -> entrada || saída */ 
    const typeDataArray =  useMemo<Array<IArrayData>>(()=>{
        return masterArray.filter((e : IArrayData ) => {
            return e.type === title.toLowerCase();
        });
    }, [changeTitle]);

    /* populando a tela com filtro por Ano e mês -> ao carregar a tela */
    useEffect(()=>{
        const array = typeDataArray.filter((el : any) => {
            const array = el.date.toString().split('-');
            const month = String((+valueSelectMonth < 10) ? `0${valueSelectMonth}` : valueSelectMonth);

             if(array[0] === valueSelectYear){
                if(array[1] === month){
                    return el
                }
            }
        });
        setArrayData(array);
    }, []);

    /* populando a tela com filtro por Ano e mês -> ao mudar os campos nos selects ou alterar o match */
    useEffect(()=>{
        const array = typeDataArray.filter((el : any) => {
            const array = el.date.toString().split('-');
            const month = String((+valueSelectMonth < 10) ? `0${valueSelectMonth}` : valueSelectMonth);
            if(array[0] === valueSelectYear){
               if(array[1] === month){
                   return el
               }
           }
       });
       setArrayData(array);
    }, [changeTitle, valueSelectMonth, valueSelectYear])

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

    const valueSelectMonthFunc = (e: any) => {
        setValueSelectMonth(String(e.target.value));
    }
    const valueSelecYearFunc = (e: any) => {
        setValueSelectYear(String(e.target.value));
    }

    const ArrayData = (array: any) =>{
        let arrayReturn = [];
        if(!stateFilter.eventuais && !stateFilter.recorrentes){
            arrayReturn = array
        }else if(stateFilter.eventuais || stateFilter.recorrentes){
            if(stateFilter.eventuais && !stateFilter.recorrentes){
                arrayReturn = filterType(array, true)
            }else if(!stateFilter.eventuais && stateFilter.recorrentes){
                arrayReturn = filterType(array, false)
            }
        }   
    
       return arrayReturn;
    }
    
/* TESTE DE FUNÇÕES */


/* ----------------------------- */
    return (
        <React.Fragment>
            <ContentHeader title={title} lineColor={(title === 'Entrada') ? '#F7931B' : '#E44C4E'} valueSelectedMonth={valueSelectMonthFunc} valueSelectedYear={valueSelecYearFunc}/>
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
                <ListCardsInputOutput arrayData={ArrayData(arrayData)}/>
         </React.Fragment>
    );
}

export default List;