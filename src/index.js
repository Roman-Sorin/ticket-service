import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './components/app/app';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import {reducer} from "./reducer/reducer";
import {Route} from "react-router";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root'));
