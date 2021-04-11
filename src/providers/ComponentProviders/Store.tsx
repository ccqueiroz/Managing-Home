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
    function setAsideShowButtons(show: any, index: any) {
        let type = '';
        if (index === 0)
            type = 'newList'
        else if (index === 1)
            type = 'purchase'
        else if (index === 2)
            type = 'buySingle'
        else if (index === 'close')
            type = 'close'

        if (show.target.id === 'newList' || type === 'newList') {
            setState({
                ...state,
                asideShowButtons: {
                    showModal: true,
                    newList: false,
                    purchase: true,
                    buySingle: true
                }
            });
        } else if (String(show.target.id) === 'purchase' || type === 'purchase') {
            setState({
                ...state,
                asideShowButtons: {
                    showModal: true,
                    newList: true,
                    purchase: false,
                    buySingle: true
                }
            });

        } else if (String(show.target.id) === 'buySingle' || type === 'buySingle') {
            setState({
                ...state,
                asideShowButtons: {
                    showModal: true,
                    newList: true,
                    purchase: true,
                    buySingle: false
                }
            });

        } else if (type === 'close') {
            setState({
                ...state,
                asideShowButtons: {
                    showModal: false,
                    newList: false,
                    purchase: false,
                    buySingle: false
                }
            });
        }
    }
    function updateTheme() {
        changeTheme();
    }

    return (
        <DataContext.Provider value={{
            theme: state.theme,
            saldoCurrent: state.saldoCurrent,
            dateCurrent: state.date,
            asideShowButtons: state.asideShowButtons,
            setTheme: _ => updateTheme(),
            setSaldoCurrent: (n: number) => updateState('saldoCurrent', n),
            setDate: (m: number, y: number) => setDateProvider(m, y),
            setShowButton: (s: any, index?: any) => setAsideShowButtons(s, index)
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default Store;