import React, { useCallback, useEffect, useState } from 'react';
import { Container, LegendContainer, SideLeft, SideRight, Legends } from './style';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import CountUp from 'react-countup';

interface IPieChartsProps{
    amoutEntrada : number | string;
    amoutSaida : number | string;
}

interface IDataChartsProps{
    type: string,
    valueAmount: number,
    percent: number,
    color: string;

}

const PieCharts : React.FC<IPieChartsProps> = ({ amoutEntrada, amoutSaida }) => {

    const [ dataCharts, setDataCharts] = useState<Array<IDataChartsProps>>([]);

    const definePercentage = useCallback((valueEntrada: number | string, valueSaida: number | string)=>{
        const vEntrada = Number(valueEntrada);
        const vSaida = Number(valueSaida);
    
        const valueTotal = vEntrada + vSaida;
    
        if(valueTotal === 0){
            return {
                pEntrada: 0,
                pSaida: 0
            }
        }
        const pEntrada = Math.round((vEntrada * 100) / valueTotal);
        const pSaida = Math.round((vSaida * 100) / valueTotal);
    
        return {
            pEntrada,
            pSaida
        }
    }, [amoutEntrada, amoutSaida]);

    useEffect(()=>{
        const percents = definePercentage(amoutEntrada, amoutSaida);
        setDataCharts([
            {
                type: 'Entrada',
                valueAmount: Number(amoutEntrada),
                percent: Number(percents.pEntrada),
                color: '#F7931B'
            },
            {
                type: 'Saída',
                valueAmount: Number(amoutSaida),
                percent: Number(percents.pSaida),
                color: '#E44C4E'
            },
        ]);

    }, [amoutEntrada, amoutSaida]);

    return(
        <Container>
            <SideLeft>
                <h2>Relação</h2>
                <LegendContainer>
                      {
                        dataCharts.map(item => {
                            return(
                                <Legends key={item.type} typeData={item.type.toLowerCase()}>
                                    <div className="visor">
                                        <CountUp end={Number(item.percent)} duration={1.25} suffix="%"/>
                                    </div>
                                    <span>{item.type}</span>
                                </Legends>
                            );
                        })
                    }
                  </LegendContainer>
            </SideLeft>
            <SideRight>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={dataCharts} dataKey="percent" >
                            {
                                dataCharts.map( item => {
                                    return(
                                        <Cell key={item.type} fill={item.color}/>
                                    );
                                })
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    );
}

export default PieCharts;
