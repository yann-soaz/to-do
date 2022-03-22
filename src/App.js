import logo from './logo.svg';
import './App.css'; // chaque composant importe son propre css, de sorte que si un composant n'est plus importé dans un projet le css qui lui ai été assigné disparraisse également de ce projet
import { Fragment } from 'react';
import Header from './components/Header';
import Todolist from './components/Todolist';

function App() {
  // attention : maximum un élément html parent par composant !
  // le return se fait entre parenthèse (moyen d'indiquer ou commence le html et ou il se termine pour reactjs)
  return (
    <Fragment> { /* le fragment est un élément "vide" il peut servir d'enveloppe pour le composant mais ne génère aucun HTML sur le rendu de la page, il doit être importer depuis la library React */ }
      <Header titre="To-Do List" /> { /* nous pouvons ajouter des informations a chaque composant elles lui seront transmisent sous forme de propriétés (props) */ }
      <Todolist />
    </Fragment>
  );
}

export default App; // a la fin de chaque fichier de composant nous exportons ce projet afin de pouvoir l'importer dans d'autre fichiers
