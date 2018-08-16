import React from 'react';
import ReactDom from 'react-dom';
//redux
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

//Css Imports
import './style.css';


//Component Imports
import App from './cockpit/app';

//Setting store

const store = createStore(reducer);


ReactDom.render(
    <Provider store={store}><App/></Provider>
    , document.querySelector('#root')
);