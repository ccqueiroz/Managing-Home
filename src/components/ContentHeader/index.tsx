import React, { useContext, useMemo, useState } from 'react';
import SelectInput from '../SelectInput';
import { Container, TitleController, Controllers } from './style';

import  master  from '../../repositories/master';
import { DataContext } from '../../providers/DataContext';


interface IContentHeaderProps {
    title: string,
    lineColor: string,
    valueSelectedMonth(event: React.ChangeEvent<HTMLSelectElement>) : void | undefined,
    valueSelectedYear(event : React.ChangeEvent<HTMLSelectElement>) : void | undefined,
}

const ContentHeader: React.FC<IContentHeaderProps> = ({ title, lineColor, valueSelectedMonth, valueSelectedYear }) => {

    const themes = useContext(DataContext);
    const [month, setMonth] = useState(0);

    const [ years, setYears ] = useState(2018);

    const [ date, setDate ] = useState(themes.dateCurrent);

    const monthCurrentValue = useMemo(() => {
        setMonth(date.getMonth()+1);
        themes.setDate(Number(month), Number(years));
        return date.getMonth()+1;
    }, [month, years]);

    const yearcurrentValue = useMemo(() => {
        setYears(date.getFullYear());
        themes.setDate(Number(month), Number(years));
        return date.getFullYear();
    }, [month, years]);

    const uniqueYear = useMemo(()=>{ //inserir no value do option apenas os anos que possuam implementações
        let uniqueYearArray : Array<any> = []; 
        const arrayYears = master.map(e => {
            const y = String(new Date(e.date).getFullYear())
            return y;
        }).forEach(item => {
            if(!uniqueYearArray.includes(item)){
                uniqueYearArray.push(item)
            }
        });
        return uniqueYearArray.map(e => {
            return({
                value: e,
                label: e
            })
        })
    },[years]);

    const uniqueMonth = useMemo(() => {
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', "Junho", "Julho","Agosto", "Setembro","Outubro", "Novembro","Dezembro"];
        return months.map((e, index) => {
            return {
                value: String(index + 1),
                label: e
            }
        })
    }, [month]);

    return (
        <Container>
            <TitleController lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleController>
            <Controllers>
                <SelectInput options={uniqueMonth} defaultMonth={monthCurrentValue} valueSelectedProp={(e) => valueSelectedMonth(e)}/>
                {/* <SelectInput options={listDayMonth(dayMonth, date)} defaultMonth={dayMonthcurrentValue} /> */}
                <SelectInput options={uniqueYear} defaultMonth={yearcurrentValue} valueSelectedProp={(e) => valueSelectedYear(e)}/>
            </Controllers>
        </Container>
    );
}


export default ContentHeader;