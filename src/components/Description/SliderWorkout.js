import React, { useState } from 'react';
import './CustomSlider.css';

const CustomSliderWorkout = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="slider-container">
            <div className="slider-quantity">
                <div className="slider-value">{`Status: ${value} min`}</div>
                <div className="slider-value-right">Ideal: 30min</div>
            </div>
            <div>
                <input
                    type="range"
                    min={0}
                    max={60}
                    step={5}
                    value={value}
                    onChange={handleChange}
                    className="slider"
                />
            </div>
        </div>
    );
};

export default CustomSliderWorkout;
