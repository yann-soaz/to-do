import { useState } from "react";
import './Todolist.css';


const Todolist = () => {
    let [field, changeField] = useState(''); // useState [string, function ()]
    let [todos, changeTodos] = useState([]); // valeur de l'état, fonction pour une valeur de remplacement

    function changeItemdState (index) { // je me suis rendu compte que j'avais besoin de savoir quel index changer
        let newArray = [...todos]; // je créer un nouveau tableau qui est une copie de l'ancien
        // modifications
            // exemple de données ==> [{name: task1, done: true}, {name: task2, done: false}];
            // impossible newArray.done
            // impossible mais trop restrictif newArray[0].done l'index doit etre dynamique
            // possible newArray[index].done -> création du paramètre
            if (index < newArray.length && index >= 0) {
                newArray[index].done = !newArray[index].done;
            }
        // end modifs
        changeTodos(newArray); // j'enregistre le nouveau tableau
        return; // je mets fin à la fonction
    }
    return (
        <main>
            <div>
                <input type="text" value={field} onChange={ (e) => changeField(e.target.value) } />
                <input type="submit" onClick={ () => {
                    changeTodos( [ ...todos, {name: field, done: false} ] );
                    changeField('');
                } } />
            </div>

            <ul>
                {
                    !!todos.length ?
                        todos.map(
                            ({name, done}, index) => <li key={index} onClick={ () => changeItemdState(index) } className={done ? 'item-done' : 'item'} >{name}</li> 
                        )
                    :
                        <li>j'ai rien</li>
                }
            </ul>
        </main>
    )
}

export default Todolist;