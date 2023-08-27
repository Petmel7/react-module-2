// import { useState } from 'react';
import { ColorPickerOptions } from '../App.js';
import React, { useState } from 'react';
// import classNames from 'classnames';

export default function ColorPicker() {

    const [activeOptionIdx, setActiveOptionIdx] = useState(0);

    const makeOptionClassName = index => {
        return `ColorPicker-option 
                    ${index === activeOptionIdx &&
                        'ColorPicker-option-ative'}`;
    }
        const { label } = ColorPickerOptions[activeOptionIdx];

        return (
            <div className='ColorPicker'>
                <h1 className='ColorPicker-title'>Color Picker</h1>
                <h3>Color: {label}</h3>
                <div>
                    {ColorPickerOptions.map(({ label, color }, index) => (
                        
                        <button className={(makeOptionClassName(index))} 
                            key={label}
                            style={{ backgroundColor: color }}
                            onClick={() => setActiveOptionIdx(index)}>
                        </button>
                    ))}
                    
                </div>
            </div>
        )
    }
        