import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './App';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'unistore/react';
import { store } from './Store';

// import AppContact from './AppContact';
// import AppGallery from './AppGallery';

const rootEl = document.getElementById("root");
const render = Componet =>
ReactDOM.render(
    <Provider store = {store}>
    <BrowserRouter>
    <Componet />
    </BrowserRouter>
    </Provider>,
    rootEl
);
render(AppRouter);
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<AppGallery />, document.getElementById('root'));
// ReactDOM.render(<AppContact />, document.getElementById('root'));
// ReactDOM.render(<AppContact />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
