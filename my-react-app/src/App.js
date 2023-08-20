import './App.css';

import './components/ColorPicker.css';
import React, { Component } from 'react';

// import { Forms } from './components/form/Forms';
// import { RegistrationForm } from './components/form/RegistrationForm.js';

import TodoList from './components/TodoList.js';
// import TodoListJson from '../src/components/TodoList.json';
import { TodoForm } from './components/TodoForm.js';
import { TodoEditor } from './components/TodoEditor.js';
import TodoFilter from './components/TodoFilter.js';
import Modal from '../src/components/modal/Modal.js';
// import IconButton from './components/iconButton/IconButton.js';
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
    showModal: false,
    todos: [],
    filter: ''
  }

  componentDidMount() {
    // console.log('App componentDidMount')

    const todos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(todos)

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate')

    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
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
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  formSubmitHandler = data => {
    console.log(data);

    setTimeout(() => {
      this.toggleModal()
    },1000)
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
    this.setState({ filter: event.currentTarget.value })
  }

  getVisibleTodos = () => {

    const { filter, todos } = this.state
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }
  
  render() {
    // console.log('Render');
    const { showModal } = this.state;
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();

    const visibleTodosFilter = this.getVisibleTodos();

    return (
      <div className="App">
        <>
          <h1>Стан компонента</h1>

          <div>
            <button type="button"
              onClick={this.toggleModal}>Відкрити форму</button>
        
            {showModal && (
              <Modal onClose={this.toggleModal}>
                <TodoForm onSubmit={this.formSubmitHandler} />
              </Modal>
            )}

            <TodoFilter value={filter} onChange={this.changeFilter} />
          
            <TodoEditor onSubmit={this.addTodo} />
          
            <TodoList todos={visibleTodosFilter} deleteTodo={this.deleteTodo} toggleCompleted={this.toggleCompleted} />
          
            <h3>Загальна кількість: {totalTodoCount}</h3>
            <h3>Кількість виконаниx: {completedTodoCount}</h3>

            <button onClick={this.deleteAllTodos}>Видалити все</button>
          </div>
        </>
      </div>
    );
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
