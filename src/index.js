import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './components/app/app';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import {reducer} from "./reducer/reducer";
import {Route} from "react-router";
import ScrollToTop from './components/scroll-to-top/scroll-to-top'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ScrollToTop>
                <Route path="/" component={App}/>
            </ScrollToTop>
        </Router>
    </Provider>,
    document.getElementById('root'));
