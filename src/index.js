import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import { allReducers } from "./reducers/index";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

export const store=createStore(allReducers);



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <MuiThemeProvider>
                <App/>
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
