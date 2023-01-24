import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { AppContext } from './components/AppContext';

const Root = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTask, setSelectedTask] = useState(false);

    console.log(selectedTask);

    return (
        <BrowserRouter>
            <AppContext.Provider
                value={{
                    selectedDate,
                    setSelectedDate,
                    selectedTask,
                    setSelectedTask,
                }}
            >
                <App />
            </AppContext.Provider>
        </BrowserRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
