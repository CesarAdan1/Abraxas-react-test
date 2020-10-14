import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { store } from './redux/store';
import './styles.css';

import { history } from './redux/store';
import Routes from './Route';



const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes/>
            </ConnectedRouter>
        </Provider>
    )
}

export default App;
