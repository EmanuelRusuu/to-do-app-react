import { useState, useEffect } from 'react';
import moment from 'moment';
import CalendarHeader from './headerTODO';

function TopOfTasksContainer() {
    // const [value, setValue] = useState(moment());
    // useEffect(() => {
    //     const selectedDate = localStorage.getItem('selectedDate');
    //     if (selectedDate) {
    //         setValue(moment(selectedDate));
    //     }
    // }, []);

    return (
        <div className="logo-date">
            <h1 className="to-do-list-logo ">To Do List</h1>
            {/* <div className="day-selected">
                <CalendarHeader value={value} setValue={setValue} />
            </div> */}
        </div>
    );
}

export default TopOfTasksContainer;
