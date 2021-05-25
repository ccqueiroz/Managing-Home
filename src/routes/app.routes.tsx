import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../components/Layout/index';

import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import List from '../pages/List';
import Logout from '../pages/Logout';
import NewAccount from '../pages/NewAccount';
import SignIn from '../pages/SignIn';
import Supermarket from '../pages/Supermarket';

type Props = {
    isToken?: string | null | undefined;
};
const AppRoutes: React.FC <Props> = ({ isToken }) => {
    return isToken ?
        (
            <Switch>
                <Layout>
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/list/:type" exact component={List} />
                    <Route path="/supermarket" exact component={Supermarket} />
                    <Route path="/logout" exact component={Logout} />
                    <Redirect exact to="/dashboard" />
                </Layout>
            </Switch>
        )
        :
        (
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/register" exact component={NewAccount} />
                <Route path="/forgot" exact component={ForgotPassword} />
                <Redirect exact to="/"/>
            </Switch>
        )
}

export default AppRoutes;
