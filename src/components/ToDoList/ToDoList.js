import React, { useContext, useEffect, useState } from 'react';
import Todo from './Todo';
import { AppContext } from '../AppContext';
import moment from 'moment';

export default function ToDoList({ setTodos, filteredTodos }) {
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
                        />
                    ))
                ) : (
                    <p>You have no tasks</p>
                )}
            </ul>
        </div>
    );
}
