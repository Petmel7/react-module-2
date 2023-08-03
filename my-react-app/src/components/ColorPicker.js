import { Component } from 'react';
import { ColorPikerOptions } from '../App.js';
// import './ColorPicker.css';

export class ColorPicker extends Component {

    state = {
        activeOptionIdx: 0,
    }

    setActiveIdx = index => {
        this.setState({activeOptionIdx: index});
    }

    render() {

        const { activeOptionIdx } = this.state
        const { label } = ColorPikerOptions[activeOptionIdx];

        return (
            <div className='ColorPicker'>
                <h1 className='ColorPicker-title'>Color Picer</h1>
                <h3>Color: {label}</h3>
                <div>
                    {ColorPikerOptions.map(({ label, color }, index) => (

                        <button className={`ColorPicker-option 
                            ${index === activeOptionIdx &&
                                'ColorPicker-option-ative'}`}
                                    key={label}
                            style={{ backgroundColor: color }}
                            onClick={() => this.setActiveIdx(index)}>
                        
                        </button>
                    ))}
                    
                </div>
            </div>
        )
    }
}
        