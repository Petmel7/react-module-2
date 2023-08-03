import { Component } from 'react';
import { ColorPickerOptions } from '../App.js';

export class ColorPicker extends Component {

    state = {
        activeOptionIdx: 0,
    }

    setActiveIdx = index => {
        this.setState({activeOptionIdx: index});
    }

    render() {

        const { activeOptionIdx } = this.state
        const { label } = ColorPickerOptions[activeOptionIdx];

        return (
            <div className='ColorPicker'>
                <h1 className='ColorPicker-title'>Color Picker</h1>
                <h3>Color: {label}</h3>
                <div>
                    {ColorPickerOptions.map(({ label, color }, index) => (

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
        