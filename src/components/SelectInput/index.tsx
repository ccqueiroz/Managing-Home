import React from 'react';

import { Container, Option } from './style';

export interface ISelectInputProps {
    options: {
        value: string | number;
        label?: string | number;
    }[],
    defaultMonth?: string | number,
    valueSelectedProp(event: React.ChangeEvent<HTMLSelectElement>): void | undefined

}

const SelectInput: React.FC<ISelectInputProps> = ({ options, defaultMonth, valueSelectedProp }) => {

    return (
        <Container>
            <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { valueSelectedProp(e) }}>
                {
                    options.map((option, index) => {
                        return (
                            <Option key={index} value={option.value} selected={(Number(defaultMonth) === Number(option.value))} >{option.label}</Option>
                        );
                    })
                }
            </select>
        </Container>
    );
}

export default SelectInput;