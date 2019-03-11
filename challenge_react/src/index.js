import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import AppContact from './AppContact';
// import AppGallery from './AppGallery';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<AppGallery />, document.getElementById('root'));
// ReactDOM.render(<AppContact />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
