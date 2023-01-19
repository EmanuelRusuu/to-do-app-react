import './headerTODO.css';

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

    return (
        <div className="header">
            <div className="current">
                {currDayName()}
                {currMonthName()} {currYearName()}
            </div>
        </div>
    );
}

export default CalendarHeader;
