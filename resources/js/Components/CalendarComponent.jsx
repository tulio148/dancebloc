import { useState } from "react";

export default function CalendarComponent({ classesData }) {
    const [currentWeekStartDate, setCurrentWeekStartDate] = useState(
        new Date()
    );
    const [activeDay, setActiveDay] = useState(new Date().getDay());
    console.log(activeDay);

    const handlePreviousWeek = () => {
        const previousWeekStartDate = new Date(currentWeekStartDate);
        previousWeekStartDate.setDate(previousWeekStartDate.getDate() - 7);
        setCurrentWeekStartDate(previousWeekStartDate);
    };

    const handleNextWeek = () => {
        const nextWeekStartDate = new Date(currentWeekStartDate);
        nextWeekStartDate.setDate(nextWeekStartDate.getDate() + 7);
        setCurrentWeekStartDate(nextWeekStartDate);
    };

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const renderClassesForDay = (dayIndex) => {
        const date = new Date(currentWeekStartDate);
        date.setDate(date.getDate() + dayIndex);
        const dateString = date.toISOString().split("T")[0];

        const classes = classesData.filter(
            (classItem) => classItem.datetime.split("T")[0] === dateString
        );

        return classes.map((classItem, index) => (
            <div key={index}>
                {new Date(classItem.datetime).toLocaleTimeString()} -{" "}
                {classItem.name}
            </div>
        ));
    };
    const today = new Date().setHours(0, 0, 0, 0);
    const currentWeekStart = new Date(currentWeekStartDate).setHours(
        0,
        0,
        0,
        0
    );
    const showPreviousWeekButton = currentWeekStart >= today;

    return (
        <div className="w-full max-w-5xl border-b bg-gradient-to-b from-white from-90% px-6 pt-10 pb-6 rounded-3xl shadow ">
            <div className="grid grid-cols-2 w-full mb-4">
                {showPreviousWeekButton && (
                    <button
                        onClick={handlePreviousWeek}
                        className="col-start-1 justify-self-start w-fit"
                    >
                        Previous Week
                    </button>
                )}
                <button
                    onClick={handleNextWeek}
                    className="col-start-2 w-fit justify-self-end"
                >
                    Next Week
                </button>
            </div>
            <div
                className="flex gap-2 w-full justify-between  border-t
             border-db-pink"
            >
                {weekdays.map((weekday, index) => {
                    const date = new Date(currentWeekStartDate);
                    date.setDate(date.getDate() + index);
                    const isNotSunday = index !== 0;
                    return (
                        isNotSunday && (
                            <>
                                <div
                                    key={index}
                                    className=" font-medium text-md tracking-wider"
                                    onClick={() => setActiveDay(index)}
                                >
                                    {weekday} {date.getDate()}
                                    <div
                                        className={`w-full border-t-2 border-db-pink  transition-transform duration-1000 transform origin-left ${
                                            index === activeDay
                                                ? "scale-x-100"
                                                : "scale-x-0"
                                        }`}
                                    ></div>
                                </div>
                            </>
                        )
                    );
                })}
            </div>
            <div className="classes">{renderClassesForDay(activeDay)}</div>
        </div>
    );
}
