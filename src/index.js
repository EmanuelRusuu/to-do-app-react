import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { AppContext } from './components/AppContext';

const Root = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTask, setSelectedTask] = useState(null);
    const [todos, setTodos] = useState([]);
    const [importance, setImportance] = useState(false);

    // useEffect(() => {
    //     if (selectedTask) {
    //         const updatedTask = todos.find(
    //             (task) => task.id === selectedTask.id
    //         );
    //         if (updatedTask) {
    //             setSelectedTask(updatedTask);
    //         }
    //     }
    // }, [todos, selectedTask, setSelectedTask]);

    return (
        <BrowserRouter>
            <AppContext.Provider
                value={{
                    selectedDate,
                    setSelectedDate,
                    selectedTask,
                    setSelectedTask,
                    importance,
                    setImportance,
                    todos,
                    setTodos,
                }}
            >
                <App />
            </AppContext.Provider>
        </BrowserRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
