import React from 'react';

import dark from '../styles/Themes/dark';
import light from '../styles/Themes/light';

const themes = [
    dark, light
]



export const dataThemes = {
        theme: themes,
        // setThemes: () =>{},
        // saldoFunc: (n:number)=>{return n},
        saldoCurrent: 0
}


export const DataThemesProps ={
    theme: dataThemes.theme,
    saldoCurrent: dataThemes.saldoCurrent,
    setTheme: (t: any) => {},
    setSaldoCurrent: (s: any) => {}
}
export const DataContext = React.createContext(DataThemesProps);


