import React from "react";
import './TodoList.css';


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
          
                <button onClick={() => deleteTodo(id)}>Delete</button>
           </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList;
