import React, { useState } from 'react';
import CardSaldo from '../CardSaldo';

import { Container } from './style';
interface IContentCardsFlexProps {
    valueAmountSaldo : number | string;
    valueAmountEntrada : number | string;
    valueAmountSaida : number | string;
}
const ContentCardsFlex : React.FC<IContentCardsFlexProps>= ( { valueAmountSaldo, valueAmountEntrada, valueAmountSaida } ) => {

    return(
        <Container>
            <CardSaldo amout={valueAmountSaldo} typeCard="saldo" hours="11h40" date="18/07/2020"/>
            <CardSaldo amout={valueAmountEntrada} typeCard="entrada" hours="11h40" date="18/07/2020"/>
            <CardSaldo amout={valueAmountSaida} typeCard="saida" hours="11h40" date="18/07/2020"/>
        </Container>
    );

}

export default ContentCardsFlex;