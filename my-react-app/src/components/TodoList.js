import React from "react";
import './TodoList.css';


const TodoList = ({ todos, deleteTodo, toggleCompleted }) => { // Приймайте todos як пропс

  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <li key={id}>
            <p className={completed ? 'crossed-out' : ''}>{text}</p>
          <button onClick={() => deleteTodo(id)}>Delete</button>
          
          <input type="checkbox"
            className="TodoList-checkbox"
            checked={completed}
            onChange={() => toggleCompleted(id)} />
        </li>
      ))}
    </ul>
  )
}

export default TodoList;
