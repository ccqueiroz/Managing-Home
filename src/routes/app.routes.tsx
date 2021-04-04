import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout/index';

import Dashboard from '../pages/Dashboard';
import List from '../pages/List';
import SignIn from '../pages/SignIn';
import Supermarket from '../pages/Supermarket';

const AppRoutes : React.FC = () =>{
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/dashboard" exact component={Dashboard}/>
                    <Route path="/list/:type" exact component={List}/>
                    <Route path="/" exact component={Supermarket} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default AppRoutes;
