import React, { useContext, useState } from 'react';
import { Container, ContentHeaderCardBox, ButtonsCardSupermarket } from './style';

import ContentHeader from '../../components/ContentHeader';
import ContainerSectionMsgBox from '../../components/ContainerSectionMsgBox';




import { DataContext } from '../../providers/DataContext';
import CardTotalValueForMonthSupermarket from '../../components/CardTotalValueForMonthSupermarket/indext';
import MensageBox from '../../components/MensageBox';



const Supermarket: React.FC = () => {
    const themes = useContext(DataContext);
    console.log(themes)
    const [valueSelectMonth, setValueSelectMonth] = useState<string>(String(themes.dateCurrent.getMonth() + 1));
    const [valueSelectYear, setValueSelectYear] = useState<string>(String(themes.dateCurrent.getFullYear()));

    const valueSelectMonthFunc = (e: any) => {
        setValueSelectMonth(String(e.target.value));
        themes.setDate(Number(e.target.value), Number(valueSelectYear));
    }
    const valueSelecYearFunc = (e: any) => {
        setValueSelectYear(String(e.target.value));
        themes.setDate(Number(valueSelectMonth), Number(e.target.value));

    }




    return (
        <Container>
            <ContentHeader title="Supermercado" lineColor="#3ad41c" valueSelectedMonth={valueSelectMonthFunc} valueSelectedYear={valueSelecYearFunc}></ContentHeader>
            <ContainerSectionMsgBox>
                <CardTotalValueForMonthSupermarket bgColor="#4E41F0" monthCurrent={false} />
                <CardTotalValueForMonthSupermarket bgColor="#3ad41c" monthCurrent={true} />
            </ContainerSectionMsgBox>
            <ContainerSectionMsgBox>
                <MensageBox>
                    <ContentHeaderCardBox>Controle seus gastos com as compras de supermercado. 
                        <p>Você pode criar uma lista de compras, usá-la quando for ao supermercado para não esquecer nenhum item e controlar o quanto está gastando por mês com comida.</p>
                    </ContentHeaderCardBox>
                    <ButtonsCardSupermarket>
                        <button style={{backgroundColor: '#4E41F0'}}>Criar Lista</button>
                        <button style={{backgroundColor: '#F7931B'}}>Ir às Compras</button>
                        <button style={{backgroundColor: '#3ad41c'}}>Comprar itens Cotidianos</button>
                    </ButtonsCardSupermarket>
                </MensageBox>
            </ContainerSectionMsgBox>
        </Container>
    );
}

export default Supermarket;