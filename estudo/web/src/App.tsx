import React from 'react';

import './App.css';

import Routes from './routes';

//JSX = sintaxe de XML dentro do JavaScript, que possibilita HTML dentro de JS
// extensão tsx = é o que permite HTML dentro de JS = typescript com XML

function App() {
  return ( // é renderizado no root - o reach tem uma div e todo o conteudo é exibido nela
      <Routes />
  );
}
// quando tem mais de uma linha de retorno usa-se parenteses no react
export default App;
