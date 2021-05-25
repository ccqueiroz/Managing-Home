import React from 'react';

import AppRoutes from './app.routes';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

const Routes: React.FC = () => {

    const { token } = useAuth();

    return (
        <BrowserRouter >
            <AppRoutes isToken={token?.access_token} />
        </BrowserRouter>
    );

}

export default Routes;