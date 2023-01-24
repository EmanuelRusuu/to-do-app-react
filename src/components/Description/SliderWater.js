import React, { useState } from 'react';
import './CustomSlider.css';

const CustomSliderWater = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="slider-container">
            <div className="slider-quantity">
                <div className="slider-value">{`Status: ${value} ml`}</div>
                <div className="slider-value-right">Ideal: 2000ml</div>
            </div>
            <div>
                <input
                    type="range"
                    min={0}
                    max={2500}
                    step={250}
                    value={value}
                    onChange={handleChange}
                    className="slider"
                />
            </div>
        </div>
    );
};

export default CustomSliderWater;
