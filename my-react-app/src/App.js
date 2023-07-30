import './App.css';
// import { Component } from 'react';
import { StateComponents } from './components/StateComponents.js';

function App() {
  return (
    <div className="App">
      <StateComponents
        title='React JS'
      />
    </div>
  );
}

// class App extends Component {

//   state = {
//     counter: 0,
//   }

//   render() {
//     return (
//     <div className="App">
//         <h1>FERARI</h1>
//         <div className='counter'>
//           <button>+</button>
//           <p>{this.state.counter}</p>
//           <button>-</button>
//         </div>
//     </div>
//     )
//   }
// }

export default App;
