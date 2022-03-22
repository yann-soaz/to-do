import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// le tout premier rendu de notre site : la fonction render contient 2 paramètre : le composant de premier niveau de notre application et la div qui devra l'accueillir
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// Le report web vitals vous permets de surveiller les performances de votre application afin de tester l'usage de votre code
reportWebVitals(function (stats) {
  console.table(stats.entries[0]);
});
