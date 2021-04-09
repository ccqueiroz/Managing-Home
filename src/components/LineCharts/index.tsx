import React, { useMemo } from 'react';

import { ResponsiveContainer, LineChart, XAxis, Line, Tooltip } from 'recharts';

import { Container, MainBox, Charts, FlagBox } from './style';
interface IDateCurrent {
    yearCurrent: string;
    arrayMaster: Array<any>
}

interface IDataArray {
        entrada: number | string,
        saida: number | string,
        month: string
}
interface ILineChartsProps {
    supermarket: boolean;
}

const LineCharts: React.FC<IDateCurrent & ILineChartsProps> = ({ yearCurrent, arrayMaster, supermarket }) => {

    const dataCharts = useMemo(() => {
        const Arraymonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', "Junho", "Julho","Agosto", "Setembro","Outubro", "Novembro","Dezembro"];
        let data: Array<IDataArray> = [];
        let dataEntrada:Array<any> = [0,0,0,0,0,0,0,0,0,0,0, 0];
        const dataSaida:Array<any> = [0,0,0,0,0,0,0,0,0,0,0, 0];

        const years = arrayMaster.filter(e => {
           const y = String(new Date(e.date).getFullYear());
           if(Number(y) === Number(yearCurrent)){
               return e;
           }
        });

        Arraymonths.map((_, indexMonth) => {
            years.map((el) => {
                const months = String(new Date(el.date).getMonth());
                if(Number(months) === indexMonth){
                    if(el.type === 'entrada'){
                        dataEntrada[Number(months)] += Number(el.amount);
                    }else{
                        dataSaida[Number(months)] += Number(el.amount);
                    }
                }                
            });
        });
        
        data = Arraymonths.map((e, index)=>{
            return ({
                "month": e.slice(0, 3),
                "entrada": dataEntrada[index].toFixed(2),
                "saida": dataSaida[index].toFixed(2),
            })
        })


        return data;
    }, [yearCurrent, arrayMaster]);

    const chartTitleType = (supermarket: boolean) => {
        if(supermarket){
            return 'Histórico de Compras do supermercado';
        }else{
            return 'Histórico de Saldo'
        }
    }
    return (
        <Container>
            <MainBox>
                <h3>{chartTitleType(supermarket)} - Ano : {yearCurrent}</h3>
                <div className="contentEntradaSaida">
                    <FlagBox type="entrada">
                        <span className="flag"></span><span className="text">Entradas</span>
                    </FlagBox>
                    <FlagBox type="saida">
                        <span className="flag"></span><span className="text">Saídas</span>
                    </FlagBox>
                </div>
            </MainBox>
            <Charts>
                <div className="contentCharts">
                    <ResponsiveContainer>
                        <LineChart data={dataCharts}>
                            <XAxis dataKey="month" axisLine={false} tickLine={false}
                                tick={{ stroke: '#ffffff', strokeWidth: .15 }} interval='preserveStartEnd' />
                            <Tooltip offset={5} cursor={{ strokeWidth: 0 }} />
                            <Line type="monotone" dataKey="entrada" stroke='#F7931B' dot={{ r: 3 }}
                                activeDot={{ r: 4 }} strokeWidth={4} name="Entradas" />
                            <Line type="monotone" dataKey="saida" stroke='#E44C4E' dot={{ r: 3 }}
                                activeDot={{ r: 4 }} strokeWidth={5} name="Saídas" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Charts>
        </Container>
    );
}

export default LineCharts;