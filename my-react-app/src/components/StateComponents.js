// import { Component } from "react";
// import { StateLessComponent } from './StateLessComponent.js';

// export class StateComponents extends Component {

//     static defaultProps = {
//         title: 'Default props title',
//     }

// constructor(props) {
//     super(props);

//     this.state = {
//         counter: 0,
//     }
// }

    
//     //! Без конструктора теж працює
//     // state = {
//     //     counter: 0,
//     // }
    
//     //! Функція для правельного варіанту
//     Decrement = () => {
//         this.setState({
//             ...this.state,
//             counter: this.state.counter - 1
//         })
//     };

//     multiplyCounter = () => {
//     this.setState((prevState) => {
//         return { counter: prevState.counter * 2 };
//     });
//     };
    
//     clearState = () => {
//         // console.log(evt);
//         this.setState({ ...this.state, counter: 0 });
//     }

//     render() {

//         // console.log(this.counter)

//         const { title } = this.props;
//         const { counter } = this.state;

//         return (
//             <div>
//                 <h1>{title}</h1>
//                 <p>{counter}</p>
//                 <div>
//                     {/* Поганий варіант рішення */}
//                     <button onClick={() => { 
//                         this.setState({
//                             ...this.state,
//                             counter: counter + 1
//                         })
//                     }}>
//                         Increment
//                     </button>

//                     {/* Правельний варіант */}
//                     <button onClick={this.Decrement}>
//                         Decrement
//                     </button>

//                     <button onClick={this.multiplyCounter}>
//                         Multiply
//                     </button>

//                     <StateLessComponent title='Clear State' onClearClick={this.clearState} />

//                 </div>
//             </div>
//         )
//     }
// }

// export default StateComponents;

