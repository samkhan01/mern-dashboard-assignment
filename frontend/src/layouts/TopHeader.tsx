import React from 'react';

/** Top header */
const TopHeader = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <a href="#" className="mr-4">Sales Dashboard</a>
      </div>
      <div className="flex items-center">
        <a href="#" className="mr-4">Sameer Khan</a>
      </div>
    </header>
  );
};

export default TopHeader;
