import './App.css';

import ToDoContainer from './components/ToDo/ToDoContainer';
import Calendar from './components/Calendar/Calendar';
import Description from './components/Description/Description';
import { Link, Route, Routes } from 'react-router-dom';
import { MdNavigateBefore } from 'react-icons/md';

// import Info from './components/Info/Info';

function APP() {
    return (
        <div className="screen-with-navbar">
            <div className="navbar">
                <div className="logo">
                    <h2>TODO</h2>
                </div>
                <div className="links">
                    <Link className="link" to="/">
                        Calendar
                    </Link>
                    <Link className="link" to="/todo">
                        ToDo
                    </Link>
                    <Link className="link link-responsive" to="/description">
                        Description
                    </Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Calendar />}></Route>
                <Route
                    path="/todo"
                    element={
                        <div className="before-and-todo-desc-wrap">
                            <Link to="/">
                                <div className="before-page-icoon">
                                    <MdNavigateBefore />
                                </div>
                            </Link>
                            <div className="todo-desc">
                                <div className="todo-resp">
                                    <ToDoContainer />
                                </div>
                                <div className="desc-resp">
                                    <Description />
                                </div>
                            </div>
                        </div>
                    }
                ></Route>
                <Route path="/description" element={<Description />}></Route>
            </Routes>
        </div>
    );
}

export default APP;
