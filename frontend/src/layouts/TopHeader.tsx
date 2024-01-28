import React from 'react';

interface propsData {
  setSidebarShow: (value: boolean) => void;
  isSidebarShow: boolean
}
/** Top header */
const TopHeader = (props: propsData) => {
  const { setSidebarShow, isSidebarShow } = props;
  return (
    <header className="top-header-main text-white p-2 flex justify-between items-center">
      <div className="flex items-center">
        <button onClick={() => setSidebarShow(!isSidebarShow)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>


        <a href="#" className="mr-4">Sales Dashboard</a>
      </div>
      <div className="flex items-center">
        <a href="#" className="mr-4">Hello Joan</a>
        <span className="h-12 w-12 rounded-full">
          <img src={"https://demo.tailadmin.com/src/images/user/user-01.png"} alt="User" />
        </span>
      </div>
    </header>
  );
};

export default TopHeader;
