import React, { useState } from 'react';
import Dashboard from './dashboard/Dashboard';
import { DataContext } from './components/FilterComponent';
import './index.css'

function App() {
  const [salesData, setSalesData] = React.useState<[]>([]);
  const [darkTheme, setDarkTheme] = useState<boolean>(true)

  return (
    <DataContext.Provider value={{ salesData, setSalesData, setDarkTheme, darkTheme }}>
      <div className="App">
        <Dashboard />
      </div>
    </DataContext.Provider>
  );
}

export default App;
