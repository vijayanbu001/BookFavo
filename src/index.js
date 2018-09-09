import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import clients from './clientList';
import { createStore, applyMiddleware } from 'redux';
import {multiClientMiddleware}  from 'redux-axios-middleware';
import reducer from './reducers';
import { Provider } from 'react-redux';
const store = createStore(reducer, applyMiddleware(multiClientMiddleware(clients)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
