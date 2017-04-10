import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function changeView(view){
  ReactDOM.render(
    <App changeView={changeView} view={view} />,
    document.getElementById('root')
  );
}

ReactDOM.render(
  <App changeView={changeView} view="default" />,
  document.getElementById('root')
);
