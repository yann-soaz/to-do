import { useState } from "react";



const Todolist = () => {
    let [field, changeField] = useState(''); // useState [string, function ()]
    let [todos, changeTodos] = useState([]); // valeur de l'état, fonction pour une valeur de remplacement
    return (
        <main>
            <div>
                <input type="text" value={field} onChange={ (e) => changeField(e.target.value) } />
                <input type="submit" onClick={ () => {
                    changeTodos( [ ...todos, field ] );
                    changeField('');
                } } />
            </div>

            <ul>
                {
                    !!todos.length ?
                        todos.map(
                            (item, index) => <li key={index} >{item}</li> 
                        )
                    :
                        <li>j'ai rien</li>
                }
            </ul>
        </main>
    )
}

export default Todolist;