import React, { useState, useEffect, useContext } from 'react';
import './ToDo.css';
import Form from '../Form/Form';
import ToDoList from '../ToDoList/ToDoList';
import { AppContext } from '../AppContext';

export default function ToDoContainer() {
    //State
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const { selectedDate } = useContext(AppContext);

    //one time
    useEffect(() => {
        getLocalTodos();
    }, []);

    //UseEffect
    useEffect(() => {
        const saveLocalTodos = () => {
            localStorage.setItem('todos', JSON.stringify(todos));
        };

        const filterTasksByDate = (selectedDate, todos) => {
            return todos.filter((todo) => todo.date === selectedDate);
        };

        const filterHandler = () => {
            switch (status) {
                case 'completed':
                    setFilteredTodos(
                        todos.filter((todo) => todo.completed === true)
                    );
                    break;
                case 'uncompleted':
                    setFilteredTodos(
                        todos.filter((todo) => todo.completed === false)
                    );
                    break;
                default:
                    setFilteredTodos(todos);
                    break;
            }
        };

        setFilteredTodos(filterTasksByDate(selectedDate, todos));
        filterHandler();
        saveLocalTodos();
    }, [todos, status, selectedDate]);

    //Functions

    //local save
    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
    };

    return (
        <div className="to-do-main-container">
            <div className="topoftaskscontainer">
                <h1 className="to-do-list-logo ">To Do List</h1>
            </div>
            <div className="task-form-and-tasks">
                <div className="text-box">
                    <h4 className="future-tasks-text">Add tasks</h4>
                    <Form
                        inputText={inputText}
                        todos={todos}
                        setTodos={setTodos}
                        setInputText={setInputText}
                        setStatus={setStatus}
                    />
                </div>
                <div className="task-container">
                    <h4 className="current-tasks-text">Tasks</h4>
                    <div className="tasks-container">
                        <ToDoList
                            filteredTodos={filteredTodos}
                            setTodos={setTodos}
                            todos={todos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
