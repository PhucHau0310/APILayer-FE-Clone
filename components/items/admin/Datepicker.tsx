'use client';

import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Datepicker: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState('December 2020');
    const [selectedDate, setSelectedDate] = useState<number | null>(null);

    const handleDateClick = (date: number) => {
        setSelectedDate(date);
    };

    return (
        <div className="max-w-sm bg-[#111C44] rounded-lg shadow-md p-[22px] mt-4">
            <div className="mb-4">
                <div className="flex flex-wrap mb-4 -mt-2">
                    <button className="mr-2 mt-2 bg-[#0B1437] rounded-lg px-2 py-1 font-semibold">
                        Today
                    </button>
                    <button className="mr-2 mt-2 bg-[#0B1437] text-base rounded-lg px-2 py-1 font-semibold">
                        Tomorrow
                    </button>
                    <button className="mr-2 mt-2 bg-[#0B1437] text-base rounded-lg px-2 py-1 font-semibold">
                        In 2 days
                    </button>
                </div>
                <div className="flex justify-between items-center">
                    <button className="flex items-center justify-center bg-white rounded-full w-8 h-8 shadow-md">
                        <FontAwesomeIcon
                            icon={faCaretLeft}
                            size="1x"
                            color="#0B1437"
                        />
                    </button>
                    <span className="font-semibold">{currentMonth}</span>
                    <button className="flex items-center justify-center bg-white rounded-full w-8 h-8 shadow-md">
                        <span className="material-icons">
                            <FontAwesomeIcon
                                icon={faCaretRight}
                                size="1x"
                                color="#0B1437"
                            />
                        </span>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-y-4">
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
                    <span
                        key={day}
                        className="text-gray-500 text-sm font-medium text-center"
                    >
                        {day}
                    </span>
                ))}
                {[
                    30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
                    1, 2, 3,
                ].map((date, index) => (
                    <button
                        key={index}
                        className={`w-7 h-7 flex items-center justify-center rounded-md font-semibold border-2 focus:outline-none ${
                            selectedDate === date
                                ? 'bg-blue-500 text-white border-blue-500'
                                : index < 6 || index > 30
                                ? 'text-gray-400'
                                : 'text-white hover:bg-gray-200'
                        }`}
                        onClick={() => handleDateClick(date)}
                    >
                        {date}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Datepicker;
