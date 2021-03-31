import React from 'react';

import dark from '../styles/Themes/dark';
import light from '../styles/Themes/light';

const themes = [
    dark, light
]



export const dataThemes = {
        theme: themes,
        setThemes: () =>{}
    }

export const DataContext = React.createContext(dataThemes);


