import React from 'react';

import './global.css';

import Routes from './routes';

function App() { //componente no react - uma função que retorna HTML

  return (
    <Routes />
  );
}

export default App;

/*
//componente no react - uma função que retorna HTML
//JSX (Javascript XML) - HTML integrado dentro do JS
//props - variavel do JS - {}
//props.children

import React, { useState } from 'react';

import Logon from './pages/Logon';

function App() { //componente no react - uma função que retorna HTML
  const [count, setCount] = useState(0); //transforma a variavel num State

  //retorna um Array [valor, funcaoAtualizacao] //imutabilidade do State

  function increment() {
    setCount(count + 1);
  }

  return ( //state reflete as alterações imediatamente no react
    <div> 
      <Header>Contador: {count}</Header> 
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}
*/