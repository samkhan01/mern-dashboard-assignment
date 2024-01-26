import React, { ReactNode } from 'react';
import Header from './Header';
import { SideBar } from './SideBar';
import TopHeader from './TopHeader';

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50/50">
            <TopHeader />
            <SideBar />
            <div className="p-4 xl:ml-80">

                <Header />
                {children}
            </div>



        </div>
    );
};

export default PageLayout;
