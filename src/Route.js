import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Graphics, Tasks } from './components/Views';
import { Header } from './components/common';

const Routes = () => {
    return (
        <>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/tareasencurso" component={Tasks}/>
            <Route exact path="/graficas" component={Graphics}/>
            <Route exact path="/notfound" component={Stories}/>
        </Switch>
        </>
    )
}

export default Routes;
