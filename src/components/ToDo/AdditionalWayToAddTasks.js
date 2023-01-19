import React from 'react';
import { BiMicrophone, BiFileBlank, BiCalendar, BiAlarm } from 'react-icons/bi';

function AdditionalWayOfAddingTasks() {
    return (
        <div className="other-way-of-adding-tasks">
            <div className="other-way-of-adding-tasks-button voiceRecorder">
                <div className="icoons-todo">
                    <BiMicrophone />
                </div>
            </div>
            <div className="other-way-of-adding-tasks-button attachFile">
                <div className="icoons-todo">
                    <BiFileBlank />
                </div>
            </div>
            <div className="other-way-of-adding-tasks-button addToCalendar">
                <div className="icoons-todo">
                    <BiCalendar />
                </div>
            </div>
            <div className="other-way-of-adding-tasks-button addAlarm">
                <div className="icoons-todo">
                    <BiAlarm />
                </div>
            </div>
        </div>
    );
}

export default AdditionalWayOfAddingTasks;
