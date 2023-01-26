import './Description.css';
import { useContext } from 'react';
import { BsCup } from 'react-icons/bs';
import { CgGym } from 'react-icons/cg';
import CustomSliderWater from './SliderWater';
import CustomSliderWorkout from './SliderWorkout';
import { AppContext } from '../AppContext';

function Description() {
    const { selectedTask } = useContext(AppContext);

    // const [taskDescription, setTaskDescription] = useState(null);
    // const [printTaskDescription, setPrintTaskDescription] = useState(false);

    // function getTaskDescription(text) {
    //     setTaskDescription(text.target.value);
    // }
    return (
        <div className="description-main-container">
            <div className="description-container-principal">
                <div className="description-title">
                    <h3>Description</h3>
                    <p className="selected-task-title">
                        {selectedTask ? selectedTask.text : 'Task title'}
                    </p>
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
                                            name="checkbox"
                                        ></input>
                                    </label>
                                </div>
                            </div>
                            <div className="todo-time-select">
                                <div className="pick-hour">
                                    <p>Deadline</p>
                                    <input
                                        className="input-hour"
                                        type="number"
                                        min={0}
                                        max={24}
                                        placeholder="0-24"
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
                        <div className="todo-description">
                            <div className="p-and-input">
                                <p>Task description</p>
                                {/* <div className="input-and-button">
                                    <input
                                        type="text"
                                        onChange={getTaskDescription}
                                    ></input>
                                    <button
                                        onClick={() =>
                                            setPrintTaskDescription(true)
                                        }
                                    >
                                        OK
                                    </button>
                                </div> */}
                            </div>

                            {/* <div className="text-description-todo-box">
                                {printTaskDescription ? (
                                    <div className="">{taskDescription}</div>
                                ) : null}
                            </div> */}
                        </div>
                    </div>
                ) : (
                    <p className="no-class-selected">No task selected</p>
                )}

                {/* {selectedTask ? <p>{selectedTask.text}</p> : null}
                {!selectedTask ? (
                */}
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
