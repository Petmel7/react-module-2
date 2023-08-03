import './App.css';
import './components/ColorPicker.css';
import { Component } from 'react';
import { Dropdawn } from './components/Dropdawn.js';
import { ColorPicker } from './components/ColorPicker';
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

export const ColorPikerOptions = [
  { label: 'red', color: '#ff0000' },
  { label: 'green', color: '#008000' },
  { label: 'blue', color: '#0000ff' },
  { label: 'grey', color: '#808080' },
  { label: 'pink', color: '#ffc0cb' },
  { label: 'indigo', color: '#4b0082' }
]

class App extends Component {

  render() {
    return (
    <div className="App">
        <ColorPicker />
    </div>
    )
  }
}

export default App;
