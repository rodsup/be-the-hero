import React from 'react';
import ReactDOM from 'react-dom'; //integração do react com a DOM
import App from './App'; //importando o file app.js

ReactDOM.render( //renderizando o app
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root') //inserindo no id=root
);
