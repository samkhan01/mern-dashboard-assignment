import React, { useState, useEffect, createContext, useContext, Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import api from '../api/api';
// import { FaLongArrowAltDown, FaLongArrowAltRight } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';

/** Create interface for contextdata */
interface DataContextProps {
  salesData: any[];
  setSalesData: Dispatch<SetStateAction<[]>>;
  setDarkTheme?: (value: boolean) => void;
  darkTheme?: boolean
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

    /** Set them dark bydefault */
    const bodyElement = document.body;

    bodyElement.classList.add('dark-theme');
    /** Cleanup function to remove the default theme class on unmount */
   
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

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
    console.log(options, 'options');

    return new Intl.DateTimeFormat('en-GB', options).format(date);
  };
  
  console.log(stateContext.darkTheme, "darkTheme");
  
  return (
    <div>
      <div className="flex filter-section">

        <div className='left-heading filter-left-section'>
          <h2 className={stateContext.darkTheme ? "text-white" : "text-black"}>Sales Overview</h2>
        </div>

        <div className='section-right-container filter flex flex-row justify-content: flex-end;'>
          
          <div>
            <label className={stateContext.darkTheme ? "text-white" : "text-black"}>
              Select State:
            </label>
            <select
              id="state"
              className={stateContext.darkTheme ?"p-2 focus:outline-none focus:border-blue-500 state-select" : "p-2 border focus:outline-none focus:border-blue-500 light-theme-input text-black"}
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
            <label className={stateContext.darkTheme ? 'text-white' : 'text-black'}>
              Select Time From:
            </label>
            <DatePicker selected={selectedTimeFrom ? selectedTimeFrom : minDate} minDate={minDate} onChange={(date: Date | null) => setSelectedTimeFrom(date)} className='date-picker'
              customInput={
                <div className={stateContext.darkTheme ? "custom-datepicker-input date-picker flex" : "custom-datepicker-input-light date-picker-light flex" }>
                  <input
                    type="text"
                    value={selectedTimeFrom ? moment(selectedTimeFrom).format('DD-MMMM-YYYY') : minDate ? moment(minDate).format('DD-MMMM-YYYY') : ""}
                    readOnly
                  />
                  <AiOutlineDown className="array-icon margin-auto" onClick={(e) => e.stopPropagation()} />

                </div>
              }
            />

          </div>

          {/* Time To Dropdown */}
          <div>
            <label className={stateContext.darkTheme ? 'text-white' : 'text-black'}>
              Select Time To:
            </label>
            <DatePicker selected={selectedTimeTo ? selectedTimeTo : maxDate} maxDate={maxDate} onChange={(date: Date | null) => setSelectedTimeTo(date)} className="date-picker-to date-picker" customInput={
              <div className={stateContext.darkTheme ? "custom-datepicker-input date-picker flex" : "custom-datepicker-input-light date-picker-light flex" }>
                <input
                  type="text"
                  value={selectedTimeTo ? moment(selectedTimeTo).format('DD-MMMM-YYYY') : maxDate ? moment(maxDate).format('DD-MMMM-YYYY') : ""}
                  readOnly
                />
                <AiOutlineDown className="array-icon" onClick={(e) => e.stopPropagation()} />

              </div>
            } />

          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
