import React from 'react';
import ReactDom from 'react-dom';

//Css Imports
import './style.css';

//Component Imports
import App from './cockpit/app';

ReactDom.render(
    <App/> , document.querySelector('#root')
)