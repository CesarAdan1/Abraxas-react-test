import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Graphics, Tasks, CompletedTasks } from './components/Views';
import  Header from './components/common/Header';

const Routes = () => {
    return (
        <>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/pendientes" component={Tasks}/>
            <Route exact path="/completadas" component={CompletedTasks}/>
            <Route exact path="/graficas" component={Graphics}/>
        </Switch>
        </>
    )
}

export default Routes;
