import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import './Form.css';
import moment from 'moment';

export default function Form({
    setInputText,
    todos,
    setTodos,
    inputText,
    setStatus,
}) {
    const { selectedDate } = useContext(AppContext);

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitToDoHandler = (e) => {
        e.preventDefault();
        if (inputText.trim() !== '') {
            setTodos([
                ...todos,
                {
                    text: inputText,
                    completed: false,
                    date: moment(selectedDate).format('YYYY-MM-DD'),
                    id: Math.random() * 1000,
                },
            ]);
            setInputText('');
        }
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return (
        <form>
            <div className="todo-input-todo-button-align-center-gap">
                <input
                    value={inputText}
                    onChange={inputTextHandler}
                    type="text"
                    className="todo-input"
                    placeholder="write task"
                />
                <button
                    onClick={submitToDoHandler}
                    className="todo-button"
                    type="submit"
                >
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            <div className="select">
                <select
                    onChange={statusHandler}
                    name="todos"
                    className="filter-todo"
                >
                    <option value="all">All</option>
                    <option value="completed">Done</option>
                    <option value="uncompleted">To do</option>
                </select>
            </div>
        </form>
    );
}
