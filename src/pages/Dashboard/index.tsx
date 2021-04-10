import React, { useEffect, useState, useContext } from 'react';

import { IArrayData } from '../List/index';

import ContentHeader from '../../components/ContentHeader';
import {Container } from './style';

import ContentCardsFlex from '../../components/ContentCardsFlex';
import ContainerSectionMsgBox from '../../components/ContainerSectionMsgBox';
import  MensageBox from '../../components/MensageBox';

import master from '../../repositories/master';
import {DefineTypeOut, populatingArrayByDate } from '../../utils/functionsAuxiliares'
import { DataContext } from '../../providers/DataContext';
import MsgSaldo from '../../components/MsgSaldo';
import PieCharts from '../../components/PieCharts';
import LineCharts from '../../components/LineCharts';
import Novo from '../../components/Novo';
import Modal from '../../components/Modal';

// função genérica para definir valores de saldo | entrada | saída
const defineBalance = (array : Array<IArrayData>, setState : React.Dispatch<React.SetStateAction<number>>, typeData : string) => {
    if(array.length === 0){
        setState(0);
    }else{
        if(typeData.toLocaleLowerCase() === 'saldo'){
            let x = array.map(e => {
                return Number(e.amount);
            });
            const value = x.reduce((acumulator, element) => {
                return acumulator += element;
            })
            setState(value);
        }else{
            let x = array.filter(el => {
                return el.type === typeData.toLocaleLowerCase();
            }).map(elem => {
                return Number(elem.amount);
            });
            const value = x.reduce((acumulator, element) => {
                return acumulator += element;
            })
            setState(value);
            
        }
    }
} 
const Dashboard : React.FC = () => {
    const themes = useContext(DataContext);

    const [ valueSelectMonth, setValueSelectMonth ] = useState<string>(String(themes.dateCurrent.getMonth() + 1));
    const [ valueSelectYear, setValueSelectYear ] = useState<string>(String(themes.dateCurrent.getFullYear()));

    const [ saldo, setSaldo ] = useState(0);
    const [ saldoEntrada, setSaldoEntrada ] = useState(0);
    const [ saldoSaida, setSaldoSaida ] = useState(0);

    const [ modal, setModal ] = useState(false);
    
    useEffect(() =>{
        const currentSaldoEntrada = currentSaldoEntradaFunc();
        const currentSaldoSaida =currentSaldoSaidaFunc();
        defineBalance(currentSaldoEntrada, setSaldoEntrada, 'entrada');
        defineBalance(currentSaldoSaida, setSaldoSaida, 'saida');
        setSaldo(currentSaldo(currentSaldoEntrada, currentSaldoSaida));
    }, [valueSelectMonth, valueSelectYear]);

    const currentSaldo = (saldoE: Array<IArrayData>, saldoS: Array<IArrayData>) => {
        const k = saldoE.map(e => Number(e.amount));
        const u = saldoS.map(s => Number(s.amount));
        let redE = 0;
        let redS = 0;

        if(k.length === 0){
            redE = 0;
        }else{
            redE = k.reduce((acumulator, element) => {
                return acumulator += element;
            });
        };

        if(u.length === 0){
            redS = 0;
        }else{
            redS = u.reduce((acumulator, element) => {
                return acumulator += element;
            });
        }

        themes.setSaldoCurrent((redE - redS))

        return redE - redS;
    }
    const currentSaldoEntradaFunc = () => {
        const e = populatingArrayByDate(DefineTypeOut(master, 'entrada'), valueSelectMonth, valueSelectYear);
        return e;
    };

    const currentSaldoSaidaFunc = () => {
        const s = populatingArrayByDate(DefineTypeOut(master, 'saida'), valueSelectMonth, valueSelectYear);
        return s;
  
    };

    const valueSelectMonthFunc = (e: any) => {
        setValueSelectMonth(String(e.target.value));
        themes.setDate(Number(e.target.value), Number(valueSelectYear));
    }
    const valueSelecYearFunc = (e: any) => {
        setValueSelectYear(String(e.target.value));
        themes.setDate(Number(valueSelectMonth), Number(e.target.value));

    }

    const changeModal = () =>{
        setModal(!modal);
    }
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#4E41F0" valueSelectedMonth={valueSelectMonthFunc} valueSelectedYear={valueSelecYearFunc}></ContentHeader>
            <ContentCardsFlex valueAmountSaldo={saldo} valueAmountEntrada={saldoEntrada} valueAmountSaida={saldoSaida}/>
            <ContainerSectionMsgBox>
                <MensageBox><MsgSaldo amount={saldo}/></MensageBox>
                <MensageBox>
                    <PieCharts amoutEntrada={saldoEntrada} amoutSaida={saldoSaida}/>
                </MensageBox>
            </ContainerSectionMsgBox>
            <ContainerSectionMsgBox>
                <MensageBox>
                    <LineCharts yearCurrent={valueSelectYear} arrayMaster={master} supermarket={false}/>
                </MensageBox>
            </ContainerSectionMsgBox>
            <ContainerSectionMsgBox> {/* gráfico para o supermercado */}
                <MensageBox>
                    <LineCharts yearCurrent={valueSelectYear} arrayMaster={master} supermarket={true}/>
                </MensageBox>
            </ContainerSectionMsgBox>
            <Novo changeModal={changeModal}/>
            {
                (modal) ? <Modal changeModal={changeModal} typeModal="Adicionar"/> : null
            }
        </Container>
    );
}


export default Dashboard;