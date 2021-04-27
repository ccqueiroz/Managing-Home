import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout/index';

import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import List from '../pages/List';
import NewAccount from '../pages/NewAccount';
import SignIn from '../pages/SignIn';
import Supermarket from '../pages/Supermarket';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/register" exact component={NewAccount} />
                <Route path="/forgot" exact component={ForgotPassword} />
                <Layout>
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/list/:type" exact component={List} />
                    <Route path="/supermarket" exact component={Supermarket} />
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRoutes;
