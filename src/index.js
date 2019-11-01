import React from 'react';
import {render} from 'react-dom';
import App from './app';
import {BrowserRouter} from 'react-router-dom';
import './styles.styl';
import {Provider} from 'react-redux';
import store from './store';

const root = document.querySelector('#root');

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    root
);
