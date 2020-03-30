import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Logon/Register';
import Profile from './pages/Logon/Profile';
import NewIncident from './pages/Logon/NewIncident';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </ Switch>
        </ BrowserRouter>
    );
}