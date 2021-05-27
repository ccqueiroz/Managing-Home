import React, { useContext, useState } from 'react';
import { Container, ContentHeaderCardBox, ButtonsCardSupermarket } from './style';

import ContentHeader from '../../components/ContentHeader';
import ContainerSectionMsgBox from '../../components/ContainerSectionMsgBox';

import { DataContext } from '../../providers/DataContext';
import CardTotalValueForMonthSupermarket from '../../components/CardTotalValueForMonthSupermarket/indext';
import MensageBox from '../../components/MensageBox';
import ModalsMainSupermarket from '../../components/ModalsMainSupermarket';



const Supermarket: React.FC = () => {
    const themes = useContext(DataContext);

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
            <div style={{width: 'auto', height:'auto', marginTop:'15px', marginBottom: themes.resize < 500 ? '-20px' : ''}}>
                <ContainerSectionMsgBox>
                    <CardTotalValueForMonthSupermarket bgColor="#4E41F0" monthCurrent={false} />
                    <CardTotalValueForMonthSupermarket bgColor="#3ad41c" monthCurrent={true} />
                </ContainerSectionMsgBox>
            </div>
            <ContainerSectionMsgBox>
                {
                    !themes.asideShowButtons.showModal ? 
                        <MensageBox controlHeight={true}>
                            <ContentHeaderCardBox>Controle seus gastos com as compras de supermercado. 
                                <p>Você pode criar uma lista de compras, usá-la quando for ao supermercado para não esquecer nenhum item e controlar o quanto está gastando por mês.</p>
                            </ContentHeaderCardBox>
                            <ButtonsCardSupermarket>
                                <button onClick={e => themes.setShowButton(e)} id="newList" style={{backgroundColor: '#4E41F0'}}>Criar Lista</button>
                                <button onClick={e => themes.setShowButton(e)} id="purchase" style={{backgroundColor: '#E44C4E'}}>Ir às Compras</button>
                                <button onClick={e => themes.setShowButton(e)} id="buySingle" style={{backgroundColor: '#3ad41c'}}>Comprar itens Avulsos</button>
                            </ButtonsCardSupermarket>
                        </MensageBox>
                        :
                        <MensageBox controlHeight={true}>
                            <ModalsMainSupermarket/>
                        </MensageBox>
                }
            </ContainerSectionMsgBox>

        </Container>
    );
}

export default Supermarket;