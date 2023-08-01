import React, { Component } from 'react';
import './Dropdawn.css';

export class Dropdawn extends Component {

    state = {
        visible: false,
    }

    toggle = () => {
        this.setState(prevState => ({ visible: !prevState.visible }))
    }
    
    // show = () => {
    //     this.setState({visible: true})
    // }

    // hide = () => {
    //     this.setState({visible: false})
    // }

    render() {
        return (
            <div className="Dropdawn container">
                <button className="Dropdawn-toggle"
                    onClick={this.toggle}>
                    {/* Show Hide */}
                    {this.state.visible ? 'Hide' : 'Show'}
                </button>
                {/* <button className="Dropdawn-toggle" onClick={this.hide}>Hide</button> */}

                {this.state.visible && <div className="Dropdawn-menu">Випадаюче меню</div>}
            </div>
        )
    }
}