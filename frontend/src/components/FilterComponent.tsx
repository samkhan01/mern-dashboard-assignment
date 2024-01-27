import React, { useState, useEffect, createContext, useContext, Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import api from '../api/api';

/** Create interface for contextdata */
interface DataContextProps {
  salesData: any[];
  setSalesData: Dispatch<SetStateAction<[]>>;
}

/** Create a contex to get the data for the charts & relevent components */
export const DataContext = React.createContext<DataContextProps>({
  salesData: [],
  setSalesData: () => { },
});



/** Component for the filter data | Fetching data based on user input | Requesting to server   */
const FilterComponent = () => {
  /** Initilize states */
  const [uniqueStates, setUniqueStates] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedTimeFrom, setSelectedTimeFrom] = useState<Date | null>(null);
  const [selectedTimeTo, setSelectedTimeTo] = useState<Date | null>(null);
  const [maxDate, setMaxDate] = useState<Date | null>(null);
  const [minDate, setMinDate] = useState<Date | null>(null);

  /** Use contex to set result based on filters */
  const stateContext = useContext(DataContext);

  /** Side effect to fetch the data on first load  */
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

  /** Side effect to fetch data when the filters apply */
  useEffect(() => {
    const fetchDates = async () => {
      try {
        if (selectedState) {
          const response = await api.post('/getMinMaxDates', {
            state: selectedState,
            selectedTimeFrom: selectedTimeFrom ? selectedTimeFrom : minDate,

            selectedTimeTo: selectedTimeTo ? selectedTimeTo : maxDate
          });

          /** Set min & max date */
          setMaxDate(new Date(response.data?.maxDate));
          setMinDate(new Date(response.data?.minDate));

          stateContext && stateContext.setSalesData(response.data?.stateSales);
        }
      } catch (error) {
        console.error('Error fetching dates:', error);
      }
    };

    fetchDates();
  }, [selectedState, selectedTimeTo, selectedTimeFrom]);


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
            <DatePicker selected={selectedTimeFrom ? selectedTimeFrom : minDate} minDate={minDate} onChange={(date: Date | null) => setSelectedTimeFrom(date)} />

          </div>

          {/* Time To Dropdown */}
          <div>
            <label htmlFor="timeTo" className="text-lg font-semibold">
              Select Time To:
            </label>
            <DatePicker selected={selectedTimeTo ? selectedTimeTo : maxDate} maxDate={maxDate} onChange={(date: Date | null) => setSelectedTimeTo(date)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
