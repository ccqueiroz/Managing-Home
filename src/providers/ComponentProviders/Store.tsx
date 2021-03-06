import React, { useState } from 'react';

import { DataContext, dataThemes } from '../DataContext';

// import { axiosApi } from '../../Services/axiosInstances';

interface IDataContextProps {
    children: React.ReactNode;
    changeTheme: Function;
}

const Store: React.FC<IDataContextProps> = ({ children, changeTheme }) => {
    const [state, setState] = useState(dataThemes);

    function updateState(key: any, value: any) {
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
                    showModalToggle: true,
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
                    showModalToggle: true,
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
                    showModalToggle: true,
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
                    showModalToggle: false,
                    showModal: false,
                    newList: false,
                    purchase: false,
                    buySingle: false
                }
            });
        }
    }
    function closeModalStandBy() {
        setState({
            ...state,
            asideShowButtons: {
                ...state.asideShowButtons,
                showModalToggle: false,
            }
        });
    }
    function openModalStandBy() {
        if (state.asideShowButtons.showModalToggle &&
            (
                state.asideShowButtons.buySingle ||
                state.asideShowButtons.newList ||
                state.asideShowButtons.purchase
            )
        ) {
            setState({
                ...state,
                asideShowButtons: {
                    ...state.asideShowButtons,
                    showModalToggle: false
                }
            });
        } else if (!state.asideShowButtons.showModalToggle &&
            (
                state.asideShowButtons.buySingle ||
                state.asideShowButtons.newList ||
                state.asideShowButtons.purchase
            )) {
            setState({
                ...state,
                asideShowButtons: {
                    ...state.asideShowButtons,
                    showModalToggle: true
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
            resize: state.resize,
            setTheme: _ => updateTheme(),
            setSaldoCurrent: (n: number) => updateState('saldoCurrent', n),
            setDate: (m: number, y: number) => setDateProvider(m, y),
            setShowButton: (s: any, index?: any) => setAsideShowButtons(s, index),
            closeModalStandBy: () => closeModalStandBy(),
            openModalStandBy: () => openModalStandBy(),
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default Store;