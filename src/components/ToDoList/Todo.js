import React from 'react';
import './ToDoList.css';

const Todo = ({ text, todo, todos, setTodos, handleSelection }) => {
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

    const onClickBgChange = (event) => {
        handleSelection(todo.id);
    };

    return (
        <div className="todo">
            <div
                className={`width-till-buttons ${
                    todo.selected ? 'selected-task' : ''
                }`}
                onClick={onClickBgChange}
            >
                <li
                    className={`todo-item ${todo.completed ? 'completed' : ''}`}
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
};

export default Todo;
