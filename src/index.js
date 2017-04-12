import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './data';

function changeView(view){
  ReactDOM.render(
    <App store={store} changeView={changeView} view={view} />,
    document.getElementById('root')
  );
}

ReactDOM.render(
  <App store={store} changeView={changeView} view="default" />,
  document.getElementById('root')
);
