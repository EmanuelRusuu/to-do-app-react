import React, { useContext, useEffect, useState } from 'react';
import Todo from './Todo';
import DateContext from '../DateContextWrap';

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    const { selectedDate } = useContext(DateContext);
    const [toDosFilteredByDate, setToDoFilteredByDate] = useState([]);

    useEffect(() => {
        const todostemporar = filteredTodos.filter(
            (todo) =>
                new Date(todo.date).getTime() ===
                new Date(selectedDate).getTime()
        );
        setToDoFilteredByDate(todostemporar);
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
