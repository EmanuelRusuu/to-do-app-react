import React, { useContext, useEffect, useState } from 'react';
import Todo from './Todo';
import { AppContext } from '../AppContext';
import moment from 'moment';

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    const [toDosFilteredByDate, setToDoFilteredByDate] = useState([]);
    const { selectedDate } = useContext(AppContext);

    useEffect(() => {
        const todosDisplayed = filteredTodos.filter(
            (todo) =>
                new Date(todo.date).getTime() ===
                new Date(moment(selectedDate).format('YYYY-MM-DD')).getTime()
        );
        setToDoFilteredByDate(todosDisplayed);
    }, [filteredTodos, selectedDate]);

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
