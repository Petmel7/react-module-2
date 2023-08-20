import React from "react";
import './TodoList.css';
import IconButton from '../components/iconButton/IconButton.js';
// import { ReactComponent as AddIcon } from '../icons/bluefrog23_Peppermint_Candy.svg';

const TodoList = ({ todos, deleteTodo, toggleCompleted }) => { // Приймайте todos як пропс

  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li key={id} className="TodoItem">
          <div className="TodoItem-content">
              <p className={completed ? 'crossed-out' : ''}>{text}</p>
          
              <input type="checkbox"
                className="TodoList-checkbox"
                checked={completed}
                onChange={() => toggleCompleted(id)} />
          
            <IconButton
              onClick={() => deleteTodo(id)}
              aria-label='Добавити todo'>Delete</IconButton>
            {/* <AddIcon /> */}
            
                {/* <button onClick={() => deleteTodo(id)}>Delete</button> */}
            </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList;
