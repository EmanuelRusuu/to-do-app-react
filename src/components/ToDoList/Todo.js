import React from 'react';
import './ToDoList.css';

export default function Todo({ text, todo, setTodos, todos }) {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    return (
        <div className="todo">
            <div className={`width-till-buttons`}>
                <li
                    className={`todo-item ${
                        todo.completed ? 'completed' : ''
                    } `}
                >
                    {text}
                </li>
            </div>
            <div className="check-and-delete">
                <button onClick={completeHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    );
}
