import React from 'react';
import { AppContext } from '../AppContext';
import { useContext } from 'react';

const Todo = ({ text, todo, todos, setTodos, onClick }) => {
    const { selectedTask, handleClick } = useContext(AppContext);
    //Events
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
            <li
                onClick={handleClick}
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
                {text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;
