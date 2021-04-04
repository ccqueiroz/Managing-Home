import React, {  useContext, useState } from 'react';

import { DataContext, dataThemes } from '../DataContext';

interface IDataContextProps{
    children: React.ReactNode;
    changeTheme: Function;
}


const Store : React.FC<IDataContextProps> = ({ children, changeTheme }) =>{
    const [ state, setState ] = useState(dataThemes);

    function updateState(key:any, value:any){
        /*
            [theme] : theme[0] || theme[1]
            [saldoCurrent] : value
        */
        setState({
            ...state,
            [key]:value
        })
    }
    function updateTheme(){
        changeTheme();
    }

    return(
        <DataContext.Provider value={{
            theme: state.theme,
            saldoCurrent: state.saldoCurrent,
            setTheme: t => updateTheme(),
            setSaldoCurrent: (n:number) => updateState('saldoCurrent', n)
            }}>
            {children}
        </DataContext.Provider>
    );
}

export default Store;