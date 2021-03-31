import React from 'react';

import { Container, Option } from './style';

export interface ISelectInputProps {
    options: {
        value: string | number;
        label?: string | number;
    }[],
    defaultMonth ?: string | number

}

const SelectInput : React.FC<ISelectInputProps> = ({ options, defaultMonth }) => {

        return(
            <Container>
               <select>
                  {
                      options.map(option => {
                          return (
                              <Option key={option.value} value={option.value} selected={(defaultMonth == option.value)} >{option.label}</Option>
                          );
                      })
                  }
               </select>
            </Container>
        );
}

export default SelectInput;