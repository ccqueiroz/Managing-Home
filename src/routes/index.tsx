import React, { useEffect, useState } from 'react';

import AppRoutes from './app.routes';
import { BrowserRouter } from 'react-router-dom';
import { refreshToken } from '../Services/axiosInstances';


const Routes: React.FC = () => {
    const [token, setToken] = useState<string | null>();
    
    useEffect(() => {
        setToken(localStorage.getItem('token-managing'));
        if (token)
            refreshToken();
    }, []);

    return (
        <BrowserRouter >
            <AppRoutes isToken={token} />
        </BrowserRouter>
    );

}

export default Routes;