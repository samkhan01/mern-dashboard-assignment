import React, { useState } from 'react';

const TimePicker = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedTimeFrom, setSelectedTimeFrom] = useState('');
  const [selectedTimeTo, setSelectedTimeTo] = useState('');

  // Replace with your list of states and time options
  const states = ['State 1', 'State 2', 'State 3'];
  const times = ['9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM'];

  return (
    <div className="flex">
      {/* Left Container for Heading */}
      <div className='left-heading p-4'>
        <h3>Sales Overview</h3>
      </div>

      {/* Right Container for Filter */}
      <div className='right-container filter flex flex-row space-x-4 p-4'>
        {/* State Dropdown */}
        <div>
          <label htmlFor="state" className="text-lg font-semibold">
            Select State:
          </label>
          <select
            id="state"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Time From Dropdown */}
        <div>
          <label htmlFor="timeFrom" className="text-lg font-semibold">
            Select Time From:
          </label>
          <select
            id="timeFrom"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={selectedTimeFrom}
            onChange={(e) => setSelectedTimeFrom(e.target.value)}
          >
            <option value="">Select time</option>
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        {/* Time To Dropdown */}
        <div>
          <label htmlFor="timeTo" className="text-lg font-semibold">
            Select Time To:
          </label>
          <select
            id="timeTo"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={selectedTimeTo}
            onChange={(e) => setSelectedTimeTo(e.target.value)}
          >
            <option value="">Select time</option>
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
