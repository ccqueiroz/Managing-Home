import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

import Routes from '../routes';

import {DataContext} from '../providers/DataContext';
import Store from '../providers/ComponentProviders/Store';


const App : React.FC = () => {

    const themes = useContext(DataContext);
    const [ useTheme, setUseTheme ] = useState(themes.theme[0]);
    const [ toggleBoolean, settoggleBoolean ] = useState(false);

    useEffect(()=>{
        setUseTheme((toggleBoolean) ? themes.theme[1] : themes.theme[0])
    }, [toggleBoolean]);


    const changeToggleBoolean = () =>{
        settoggleBoolean(!toggleBoolean)
    }

    return (
        <Store changeTheme={changeToggleBoolean}>
            <ThemeProvider theme={useTheme}>
                <GlobalStyles/>
                <Routes/>
            </ThemeProvider>
        </Store>
    );
}

export default App;
