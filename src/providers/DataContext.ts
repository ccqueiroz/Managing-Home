import React from 'react';
import colorsDefault from '../styles/Themes/colorsDefault';

const date = new Date();


export const dataThemes = {
        theme: colorsDefault,
        saldoCurrent: 0,
        date: date,
        asideShowButtons: {
            showModal: false,
            newList: false,
            purchase: false,
            buySingle: false
        },
        resize: window.innerWidth,
}

export const DataThemesProps ={
    theme: dataThemes.theme,
    saldoCurrent: dataThemes.saldoCurrent,
    dateCurrent: dataThemes.date,
    asideShowButtons: dataThemes.asideShowButtons,
    setTheme: (t: any) => {},
    setSaldoCurrent: (s: any) => {},
    setDate: (m:number, y: number) => {},
    setShowButton: (s:any, index?:any) => {},
    resize: dataThemes.resize,
}
export const DataContext = React.createContext(DataThemesProps);


