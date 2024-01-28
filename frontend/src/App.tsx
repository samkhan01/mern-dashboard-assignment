import React from 'react';
import Dashboard from './dashboard/Dashboard';
import { DataContext } from './components/FilterComponent';
import './index.css'

function App() {
  const [salesData, setSalesData] = React.useState<[]>([]);

  return (
    <DataContext.Provider value={{ salesData, setSalesData }}>
      <div className="App">
        <Dashboard />
      </div>
    </DataContext.Provider>
  );
}

export default App;
