import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import DateContext from './components/DateContextWrap';

const Root = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <BrowserRouter>
            <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
                <App />
            </DateContext.Provider>
        </BrowserRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
