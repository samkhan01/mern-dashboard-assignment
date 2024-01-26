import React, { useState, useEffect, createContext, useContext, Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import api from '../api/api';
// export const DataContext = createContext({})
// export const DataContext = createContext<DataContextProps | undefined>(undefined);
export const DataContext = React.createContext<DataContextProps>({
  salesData: [],
  setSalesData: () => {}, // Provide a default function if needed
});
interface DataContextProps {
  salesData: any[]; // Adjust the type accordingly
  setSalesData: Dispatch<SetStateAction<any[]>>;
}


const TimePicker = () => {
  const [uniqueStates, setUniqueStates] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedTimeFrom, setSelectedTimeFrom] = useState<Date | null>(null);
  const [selectedTimeTo, setSelectedTimeTo] = useState<Date | null>(null);
  const [maxDate, setMaxDate] = useState<Date | null>(null);
  const [minDate, setMinDate] = useState<Date | null>(null);
  const [dates, setDates] = useState<string[]>([]);
  const [times, setTimes] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/states');
        setUniqueStates(response.data?.states);
        setSelectedState(response.data?.states[0]);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // const stateContext: any = useContext(DataContext);
  const stateContext = useContext(DataContext);
  useEffect(() => {
    const fetchDates = async () => {
      try {
        if (selectedState) {
          const response = await api.post('/getMinMaxDates', {
            state: selectedState,
          });
          setDates([response.data.minDate, response.data.maxDate]);

          // Parse the date string into a Date object
          setSelectedTimeFrom(moment(response.data?.minDate, 'YYYY-MM-DD').toDate());
          setSelectedTimeTo(moment(response.data?.maxDate, 'YYYY-MM-DD').toDate());
          setMaxDate(moment(response.data?.maxDate, 'YYYY-MM-DD').toDate());
          setMinDate(moment(response.data?.minDate, 'YYYY-MM-DD').toDate())

          // stateContext(response.data?.stateSales)
          console.log(response.data?.stateSales, "stateContext");
          
          stateContext && stateContext.setSalesData(response.data?.stateSales)
        }
      } catch (error) {
        console.error('Error fetching dates:', error);
      }
    };

    fetchDates();
  }, [selectedState]);

  return (
    <div>
      <div className="flex">
        <div className='left-heading p-4'>
          <h3>Sales Overview</h3>
        </div>

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
              {uniqueStates.map((state) => (
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
            <DatePicker selected={selectedTimeFrom} minDate={minDate} onChange={(date: Date | null) => setSelectedTimeFrom(date)} />

          </div>

          {/* Time To Dropdown */}
          <div>
            <label htmlFor="timeTo" className="text-lg font-semibold">
              Select Time To:
            </label>
            <DatePicker selected={selectedTimeTo} maxDate={maxDate} onChange={(date: Date | null) => setSelectedTimeTo(date)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
