import React, { useContext,useEffect,useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

import Routes from '../routes';

import {DataContext} from '../providers/DataContext';
import Store from '../providers/ComponentProviders/Store';
import { useAuth } from '../providers/AuthProvider';
import { refreshToken } from '../Services/axiosInstances';


const App : React.FC = () => {

    const themes = useContext(DataContext);
    const [ useTheme ] = useState(themes.theme);
    const [ toggleBoolean, settoggleBoolean ] = useState(false);
    const { token } = useAuth();
    const changeToggleBoolean = () =>{
        settoggleBoolean(!toggleBoolean)
    }

    useEffect(() => {
        if(localStorage.getItem('hasTheSessionExpired') === 'true'){
            localStorage.removeItem('hasTheSessionExpired');
        }
        if(!token){
            // localStorage.clear();
        }else{
            refreshToken();
        }
    }, []);

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
