import './App.css';
import './components/ColorPicker.css';
import React, { Component } from 'react';

// import { Forms } from './components/form/Forms';
// import { RegistrationForm } from './components/form/RegistrationForm.js';

import TodoList from './components/TodoList.js';
import TodoListJson from '../src/components/TodoList.json';
import { TodoForm } from './components/TodoForm.js';
import { TodoEditor } from './components/TodoEditor.js';
import TodoFilter from './components/TodoFilter.js';
import shortid from 'shortid';

// import { Dropdawn } from './components/Dropdawn.js';
// import { ColorPicker } from './components/ColorPicker';
// import { StateComponents } from './components/StateComponents.js';

// function App() {
//   return (
//     <div className="App">
//       <StateComponents
//         title='React JS'
//       />
//     </div>
//   );
// }

// class App extends Component {

//   render() {
//     return (
//     <div className="App">
//         <Dropdawn />
//     </div>
//     )
//   }
// }

// export const ColorPickerOptions = [
//   { label: 'red', color: '#ff0000' },
//   { label: 'green', color: '#008000' },
//   { label: 'blue', color: '#0000ff' },
//   { label: 'grey', color: '#808080' },
//   { label: 'pink', color: '#ffc0cb' },
//   { label: 'indigo', color: '#4b0082' }
// ]

// class App extends Component {

//   render() {
//     return (
//     <div className="App">
//         <ColorPicker />
//     </div>
//     )
//   }
// }


class App extends Component {
  state = {
    todos: TodoListJson,
    filter:''
  }

  addTodo = text => {
    
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos]
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !==todoId)
    }))
  }

  formSubmitHandler = data => {
    console.log(data);
  }

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ?
          { ...todo, completed: !todo.completed }
          : todo,)
    }))
  }

  changeFilter = event => {
    this.setState({filter: event.currentTarget.value})
  }

  getVisibleTodos = () => {

    const {filter, todos} = this.state
    const normalizeFilter = filter.toLowerCase()
    
    return todos.filter(todo => 
      todo.text.toLowerCase().includes(normalizeFilter))
  }

  deleteAllTodos = () => {
    const { todos } = this.state;
    const todosWithoutCompleted = todos.filter(todo => !todo.completed);

    this.setState({
        todos: todosWithoutCompleted
    });
  }
  
  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce((total, todo) =>
      (todo.completed ? total + 1 : total), 0,);
  }
  
  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();

    const visibleTodosFilter = this.getVisibleTodos();

    return (
      <div className="App">
        <>
          <h1>Стан компонента</h1>

          <TodoForm onSubmit={this.formSubmitHandler} />
          
          <TodoList todos={visibleTodosFilter}
            deleteTodo={this.deleteTodo}
            toggleCompleted={this.toggleCompleted} /> {/* Передайте todos як пропс до TodoList */}
          
          <TodoEditor onSubmit={this.addTodo} />

          <TodoFilter value={filter}
            onChange={this.changeFilter} />
          
          <button onClick={this.deleteAllTodos}>Видалити все</button>

          <span>Загальна кількість: {totalTodoCount}</span>
          <span>Кількість виконаниx: {completedTodoCount}</span>
        </>
      </div>
    )
  }
}

// class App extends Component {

//   render() {
//     return (
//     <div className="App">
//         {/* <Forms /> */}
//         {/* <RegistrationForm/> */}
//     </div>
//     )
//   }
// }

export default App;
