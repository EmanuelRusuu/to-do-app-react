import './Description.css';
import { useContext } from 'react';
import { BsCup } from 'react-icons/bs';
import { CgGym } from 'react-icons/cg';
import CustomSliderWater from './SliderWater';
import CustomSliderWorkout from './SliderWorkout';
import { AppContext } from '../AppContext';

function Description() {
    const { selectedTask, importance, setImportance, todos, setTodos } =
        useContext(AppContext);

    const importanceHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === selectedTask.id) {
                    return {
                        ...item,
                        importance: !item.importance,
                    };
                }
                return item;
            })
        );
    };

    return (
        <div className="description-main-container">
            <div className="description-container-principal">
                <div className="description-title">
                    <h3>Description</h3>
                    <span className="selected-task-title">
                        <span className="important-class-task">
                            {importance && <p>Important task!</p>}
                        </span>

                        {selectedTask && selectedTask.completed
                            ? 'Task completed'
                            : selectedTask
                            ? selectedTask.text
                            : 'Task title'}
                    </span>
                </div>
                {selectedTask ? (
                    <div className="description-container">
                        <div className="importance-and-time">
                            <div className="todo-importance">
                                <div className="checkboxes">
                                    <label className="container">
                                        <p>Important task</p>
                                        <input
                                            type="checkbox"
                                            checked={importance}
                                            onChange={() => {
                                                importanceHandler();
                                                setImportance(!importance);
                                            }}
                                        ></input>
                                    </label>
                                </div>
                            </div>
                            <div className="todo-time-select">
                                <div className="pick-hour">
                                    <p>Deadline</p>
                                    <div className="deadline-and-butons">
                                        <input
                                            className="input-hour"
                                            type="number"
                                            min={0}
                                            max={24}
                                            placeholder="0-24h"
                                            onKeyDown={(event) => {
                                                event.preventDefault();
                                            }}
                                        ></input>
                                        <button
                                            className="submit-button"
                                            type="submit"
                                        >
                                            OK
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="todo-description">
                            <div className="p-and-input">
                                <p>Task description</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="no-class-selected">No task selected</p>
                )}
            </div>
            <div className="additional-elements">
                <div className="additional">
                    <h3 className="keep-evidence-title">Keep evidence</h3>
                    <div className="keep-evidence-elements">
                        <div className="element">
                            <p>Drink your water</p>
                            <div className="element-and-slidebar">
                                <div className="element-icoon">
                                    <BsCup />
                                </div>
                                <div className="slidebar-component">
                                    <CustomSliderWater />
                                </div>
                            </div>
                        </div>
                        <div className="element">
                            <p>Do your workout</p>
                            <div className="element-and-slidebar">
                                <div className="element-icoon">
                                    <CgGym />
                                </div>
                                <div className="slidebar-component">
                                    <CustomSliderWorkout />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;
