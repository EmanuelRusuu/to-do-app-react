import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import './Calendar.css';
import buildCalendar from './build';
import CalendarHeader from './headerCalendar';
import { AppContext } from '../AppContext';

function Calendar() {
    const { setSelectedDate } = useContext(AppContext);

    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value]);

    useEffect(() => {
        const selectedDate = localStorage.getItem('selectedDate');
        if (selectedDate) {
            setSelectedDate(moment(selectedDate).format('YYYY-MM-DD'));
            setValue(moment(selectedDate));
        }
    }, [setSelectedDate]);

    const handleDateClick = (day) => {
        setValue(day);
        localStorage.setItem('selectedDate', day.format());
        setSelectedDate(day.format('YYYY-MM-DD'));
    };

    function isSelected(day) {
        return value.isSame(day, 'day');
    }

    function beforeToday(day) {
        return day.isBefore(new Date(), 'day');
    }

    function isToday(day) {
        return day.isSame(new Date(), 'day');
    }

    function dayStyles(day) {
        if (beforeToday(day)) return 'before';
        if (isSelected(day)) return 'selected';
        if (isToday(day)) return 'today';
        return '';
    }

    return (
        <div className="calendar">
            <div className="calendar-container-top">
                <CalendarHeader value={value} setValue={setValue} />
            </div>

            <div className="calendar-container-bottom">
                <div className="day-names">
                    {[
                        'Sunday',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                    ].map((d) => (
                        <div className="week">{d}</div>
                    ))}
                </div>

                <div className="day-names-resize1">
                    {['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'].map(
                        (d) => (
                            <div className="week">{d}</div>
                        )
                    )}
                </div>

                <div className="day-names-resize2">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                        <div className="week">{d}</div>
                    ))}
                </div>

                {calendar.map((week) => (
                    <div>
                        {week.map((day) => (
                            <div
                                className={`day`}
                                onClick={() =>
                                    !beforeToday(day) && handleDateClick(day)
                                }
                            >
                                <div className="neata">
                                    <div className={dayStyles(day)}>
                                        {`${day.format('D').toString()}`}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Calendar;
