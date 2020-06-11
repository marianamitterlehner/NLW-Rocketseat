import React from 'react';
import ReactDOM from 'react-dom'; // arvore de elementos do projeto 
import App from './App';


ReactDOM.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // pedindo para o reach renderizar o componente app na div root 
);


