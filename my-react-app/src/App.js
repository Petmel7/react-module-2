import './App.css';
import { Component } from 'react';
import { Dropdawn } from './components/Dropdawn.js';
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

class App extends Component {

  render() {
    return (
    <div className="App">
        <Dropdawn />
    </div>
    )
  }
}

export default App;
