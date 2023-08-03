import './App.css';
import './components/ColorPicker.css';
import React, { Component } from 'react';
import TodoList from './components/TodoList.js';
import TodoListJson from '../src/components/TodoList.json';

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
  
  }

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId )
    }))
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <>
          <h1>Стан компонента</h1>
          <TodoList todos={todos} /> {/* Передайте todos як пропс до TodoList */}
        </>
      </div>
    )
  }
}

export default App;
