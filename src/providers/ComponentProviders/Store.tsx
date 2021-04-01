import React, {  useContext } from 'react';

import { DataContext } from '../DataContext';

interface IDataContextProps{
    children: React.ReactNode;
    changeTheme: Function
}


const Store : React.FC<IDataContextProps> = ({ children, changeTheme }) =>{
    const themes = useContext(DataContext);

    function updateState(){
        changeTheme();
    }

    return(
        <DataContext.Provider value={{
            theme: themes.theme,
            setThemes: () => updateState()
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default Store;