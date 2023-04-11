import React, { useContext, useEffect, useState } from 'react';
import Todo from './Todo';
import { AppContext } from '../AppContext';
import moment from 'moment';

export default function ToDoList({ setTodos, filteredTodos, todos }) {
    const { selectedDate, setSelectedTask } = useContext(AppContext);
    const [toDosFilteredByDate, setToDoFilteredByDate] = useState([]);

    useEffect(() => {
        const todosDisplayed = filteredTodos.filter(
            (todo) =>
                new Date(todo.date).getTime() ===
                new Date(moment(selectedDate).format('YYYY-MM-DD')).getTime()
        );
        setToDoFilteredByDate(todosDisplayed);
        setSelectedTask(null);
    }, [filteredTodos, selectedDate, setSelectedTask]);

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {toDosFilteredByDate.length > 0 ? (
                    toDosFilteredByDate.map((todo) => (
                        <Todo
                            setTodos={setTodos}
                            key={todo.id}
                            todo={todo}
                            text={todo.text}
                            todos={todos}
                        />
                    ))
                ) : (
                    <p>You have no tasks</p>
                )}
            </ul>
        </div>
    );
}
