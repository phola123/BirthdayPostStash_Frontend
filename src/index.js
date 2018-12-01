import React from 'react';
import ReactDom from 'react-dom';
//redux
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import popupReducer from './store/reducers/popupReducer';
import loginReducer from './store/reducers/loginReducer';
import loaderReducer from './store/reducers/loaderReducer';

//React Router
import {BrowserRouter} from 'react-router-dom';

//Css Imports
import './style.css';


//Component Imports
import App from './cockpit/app';

//combining redudcers

const rootReducer = combineReducers({
    preLoader: loaderReducer,
    login: loginReducer,
    popup: popupReducer
});

//Setting store

const store = createStore(rootReducer);


ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root')
);