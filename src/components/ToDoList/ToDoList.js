import React, { useContext, useEffect, useState } from 'react';
import Todo from './Todo';
import { AppContext } from '../AppContext';
import moment from 'moment';

const ToggleSelectedTask = () => {
    const [selectedTask, setSelectedTask] = useState(false);
    const handleClick = () => {
        setSelectedTask(!selectedTask);
    };
    return { selectedTask, handleClick };
};

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    const [toDosFilteredByDate, setToDoFilteredByDate] = useState([]);
    const { selectedDate } = useContext(AppContext);
    const { selectedTask, handleClick } = ToggleSelectedTask();

    useEffect(() => {
        const todosDisplayed = filteredTodos.filter(
            (todo) =>
                new Date(todo.date).getTime() ===
                new Date(moment(selectedDate).format('YYYY-MM-DD')).getTime()
        );
        setToDoFilteredByDate(todosDisplayed);
    }, [filteredTodos, selectedDate]);

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {toDosFilteredByDate.length > 0 ? (
                    toDosFilteredByDate.map((todo) => (
                        <Todo
                            setTodos={setTodos}
                            todos={todos}
                            key={todo.id}
                            todo={todo}
                            text={todo.text}
                            onClick={handleClick}
                        />
                    ))
                ) : (
                    <p>You have no tasks</p>
                )}
            </ul>
        </div>
    );
};

export { ToDoList, ToggleSelectedTask };
