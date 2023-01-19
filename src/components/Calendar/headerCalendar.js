import './Calendar.css';

function CalendarHeader({ value, setValue }) {
    function currDayName() {
        return value.format('DD ');
    }
    function currMonthName() {
        return value.format('MMMM');
    }

    function currYearName() {
        return value.format('YYYY');
    }

    function prevMonth() {
        return value.clone().subtract(1, 'month');
    }
    function nextMonth() {
        return value.clone().add(1, 'month');
    }

    function thisMonth() {
        return value.isSame(new Date(), 'month');
    }

    return (
        <div className="header headerforcalendaronly">
            <div
                className="arrows-for-current-month previous"
                onClick={() => !thisMonth() && setValue(prevMonth())}
            >
                {!thisMonth() ? String.fromCharCode(60) : null}
            </div>
            <div className="current">
                {currDayName()}
                {currMonthName()} {currYearName()}
            </div>
            <div
                className="arrows-for-current-month next"
                onClick={() => setValue(nextMonth())}
            >
                {String.fromCharCode(62)}
            </div>
        </div>
    );
}

export default CalendarHeader;
