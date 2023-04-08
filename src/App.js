import './App.css';
import ToDoContainer from './components/ToDo/ToDoContainer';
import Calendar from './components/Calendar/Calendar';

function APP() {
    return (
        <div className="main-container">
            <Calendar />
            <ToDoContainer />
        </div>
    );
}

export default APP;
