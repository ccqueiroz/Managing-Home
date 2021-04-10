import React, { useMemo } from 'react';
import { Container, Title } from './style';

import CountUp from 'react-countup';


interface ICardTotalValueForMonthSupermarketProps {
    bgColor: string;
    month?: string;
    monthCurrent: boolean
}


const CardTotalValueForMonthSupermarket: React.FC<ICardTotalValueForMonthSupermarketProps> = ({ bgColor, monthCurrent, month }) => {

    const textCard = useMemo(() => {
        if (monthCurrent) {
            return (
                <Title>
                    O total gasto este mês é <CountUp end={1555.55} prefix="R$ " separator="." decimal="," decimals={2} duration={1.25}/>
                </Title>
            );
        } else {
            return (
                <Title>
                    O total gasto mês passado foi <CountUp end={1000} prefix="R$ " separator="." decimal="," decimals={2} duration={1.25} />
                </Title>
            );

        }
    }, [month]);

    return (
        <Container bgColor={bgColor}>
            <Title>
                {textCard}
            </Title>
        </Container>
    );
}


export default CardTotalValueForMonthSupermarket;
