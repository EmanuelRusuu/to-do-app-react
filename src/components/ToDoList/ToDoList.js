import React, { useContext, useEffect, useState } from 'react';
import Todo from './Todo';
import { AppContext } from '../AppContext';
import moment from 'moment';

const ToDoList = ({ setTodos, filteredTodos }) => {
    const [toDosFilteredByDate, setToDoFilteredByDate] = useState([]);
    const { selectedDate, setSelectedTask } = useContext(AppContext);

    useEffect(() => {
        const todosDisplayed = filteredTodos.filter(
            (todo) =>
                new Date(todo.date).getTime() ===
                new Date(moment(selectedDate).format('YYYY-MM-DD')).getTime()
        );
        setToDoFilteredByDate(todosDisplayed);
        setSelectedTask(null);
    }, [filteredTodos, selectedDate, setSelectedTask]);

    const handleSelection = (todoId) => {
        const selectedTask = toDosFilteredByDate.find((todo) => todo.selected);
        if (selectedTask) {
            selectedTask.selected = false;
        }

        const taskToSelect = toDosFilteredByDate.find(
            (todo) => todo.id === todoId
        );
        taskToSelect.selected = true;
        setToDoFilteredByDate([...toDosFilteredByDate]);
        setSelectedTask(taskToSelect);
    };

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {toDosFilteredByDate.length > 0 ? (
                    toDosFilteredByDate.map((todo) => (
                        <Todo
                            setTodos={setTodos}
                            todos={toDosFilteredByDate}
                            key={todo.id}
                            todo={todo}
                            text={todo.text}
                            selected={todo.selected}
                            handleSelection={handleSelection}
                            importance={todo.importance}
                        />
                    ))
                ) : (
                    <p>You have no tasks</p>
                )}
            </ul>
        </div>
    );
};

export default ToDoList;
