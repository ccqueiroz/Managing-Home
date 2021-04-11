import React from 'react';

import dark from '../styles/Themes/dark';
import light from '../styles/Themes/light';

const themes = [
    dark, light
]

const date = new Date();


export const dataThemes = {
        theme: themes,
        saldoCurrent: 0,
        date: date,
        asideShowButtons: {
            showModal: false,
            newList: false,
            purchase: false,
            buySingle: false
        }
}
console.log('teste DataContext')
console.log(dataThemes.date)

export const DataThemesProps ={
    theme: dataThemes.theme,
    saldoCurrent: dataThemes.saldoCurrent,
    dateCurrent: dataThemes.date,
    asideShowButtons: dataThemes.asideShowButtons,
    setTheme: (t: any) => {},
    setSaldoCurrent: (s: any) => {},
    setDate: (m:number, y: number) => {},
    setShowButton: (s:any, index?:any) => {},
}
export const DataContext = React.createContext(DataThemesProps);


