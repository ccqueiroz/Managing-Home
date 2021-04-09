import React, { useState } from 'react';

import { DataContext, dataThemes } from '../DataContext';

interface IDataContextProps {
    children: React.ReactNode;
    changeTheme: Function;
}


const Store: React.FC<IDataContextProps> = ({ children, changeTheme }) => {
    const [state, setState] = useState(dataThemes);

    console.log(state)
    function updateState(key: any, value: any) {
        /*
            [theme] : theme[0] || theme[1]
            [saldoCurrent] : value
        */
        setState({
            ...state,
            [key]: value
        })
    }
    function setDateProvider(mes: number = state.date.getMonth() + 1, ano: number = state.date.getFullYear()) {
        setState({
            ...state,
            date: new Date(`${Number(mes)}-1-${Number(ano)}`)
        })
    }
    function updateTheme() {
        changeTheme();
    }

    return (
        <DataContext.Provider value={{
            theme: state.theme,
            saldoCurrent: state.saldoCurrent,
            dateCurrent: state.date,
            setTheme: _ => updateTheme(),
            setSaldoCurrent: (n: number) => updateState('saldoCurrent', n),
            setDate: (m: number, y: number) => setDateProvider(m, y)
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default Store;