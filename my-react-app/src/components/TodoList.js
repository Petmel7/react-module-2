import React from "react";

const TodoList = ({ todos, deleteTodo }) => { // Приймайте todos як пропс

  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li key={id}>
            <p>{text}</p>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList;
