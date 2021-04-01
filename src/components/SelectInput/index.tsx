import React from 'react';

import { Container, Option } from './style';

export interface ISelectInputProps {
    options: {
        value: string | number;
        label?: string | number;
    }[],
    defaultMonth ?: string | number,
    valueSelectedProp : Function

}

const SelectInput : React.FC<ISelectInputProps> = ({ options, defaultMonth, valueSelectedProp }) => {

        return(
            <Container>
               <select onChange={ (e : any) => { valueSelectedProp(e) }}>
                  {
                      options.map(option => {
                          return (
                              <Option key={option.value} value={option.value} selected={(defaultMonth === option.value)} >{option.label}</Option>
                          );
                      })
                  }
               </select>
            </Container>
        );
}

export default SelectInput;