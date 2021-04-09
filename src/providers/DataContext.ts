import React from 'react';

import dark from '../styles/Themes/dark';
import light from '../styles/Themes/light';

const themes = [
    dark, light
]

const date = new Date();


export const dataThemes = {
        theme: themes,
        // setThemes: () =>{},
        // saldoFunc: (n:number)=>{return n},
        saldoCurrent: 0,
        date: date
}
console.log('teste DataContext')
console.log(dataThemes.date)

export const DataThemesProps ={
    theme: dataThemes.theme,
    saldoCurrent: dataThemes.saldoCurrent,
    dateCurrent: dataThemes.date,
    setTheme: (t: any) => {},
    setSaldoCurrent: (s: any) => {},
    setDate: (m:number, y: number) => {}
}
export const DataContext = React.createContext(DataThemesProps);


