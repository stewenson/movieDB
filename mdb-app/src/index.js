import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,  applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import {HashRouter as Router} from "react-router-dom";
import rootReducer from './redux/rootReducer/rootReducer';
import {Provider} from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk))

const app = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root')
);