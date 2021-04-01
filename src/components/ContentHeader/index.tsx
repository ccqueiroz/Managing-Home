import React, { useMemo, useState } from 'react';
import SelectInput from '../SelectInput';
import { Container, TitleController, Controllers } from './style';

import { dataSelect, yearsArray } from '../SelectInput/dataSelect';

import { addYear } from '../../utils/functionsAuxiliares';

interface IContentHeaderProps {
    title: string,
    lineColor: string,
    valueSelectedMonth : Function,
    valueSelectedYear : Function,
}

const ContentHeader: React.FC<IContentHeaderProps> = ({ title, lineColor, valueSelectedMonth, valueSelectedYear }) => {

    const [month, setMonth] = useState(0);
    // const [dayWeek, setdayWeek] = useState(0);
    const [ years, setYears ] = useState(2018);

    const date = new Date();

    const monthCurrentValue = useMemo(() => {
        setMonth(date.getMonth() + 1);
        return month;
    }, [month]);

    // const dayMonthcurrentValue = useMemo(() => {

    //     setdayWeek(date.getDate());
    //     return dayWeek;
    // }, [dayWeek]);

    const yearcurrentValue = useMemo(() => {
        setYears(date.getFullYear());
        return years;
    }, [years]);

    return (
        <Container>
            <TitleController lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleController>
            <Controllers>
                <SelectInput options={dataSelect} defaultMonth={monthCurrentValue} valueSelectedProp={valueSelectedMonth}/>
                {/* <SelectInput options={listDayMonth(dayMonth, date)} defaultMonth={dayMonthcurrentValue} /> */}
                <SelectInput options={addYear(date, yearsArray)} defaultMonth={yearcurrentValue} valueSelectedProp={valueSelectedYear}/>
            </Controllers>
        </Container>
    );
}


export default ContentHeader;