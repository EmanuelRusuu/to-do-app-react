import React, { useContext } from 'react';
import './ToDoList.css';

import { AppContext } from '../AppContext';

const Todo = ({ text, todo, todos, setTodos, handleSelection }) => {
    const { importance } = useContext(AppContext);
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

    const onClickTaskSelection = (event) => {
        handleSelection(todo.id);
    };

    return (
        <div className="todo">
            <div
                className={`width-till-buttons ${
                    todo.selected ? 'selected-task' : ''
                }`}
                onClick={onClickTaskSelection}
            >
                <li
                    className={`todo-item ${
                        todo.completed ? 'completed' : ''
                    } ${todo.importance ? 'important' : ''}`}
                >
                    {text}
                </li>
                {importance && <p>IMPORTANT</p>}
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
};

export default Todo;
