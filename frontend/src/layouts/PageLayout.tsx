import React, { ReactNode, useState } from 'react';
import Header from './Header';
import { SideBar } from './SideBar';
import TopHeader from './TopHeader';

interface PageLayoutProps {
    children: ReactNode;
}

/** Component to create page layout */
const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    const [isSidebarShow, setSidebarShow] = useState<boolean>(true);
    return (
        <div className="min-h-screen">
            <TopHeader {...{ isSidebarShow, setSidebarShow }} />
            {isSidebarShow && <div className={isSidebarShow ? "show" : ""}>

                <SideBar />
            </div>
            }

            <div className={isSidebarShow ? "isSidebarShow xl:ml-60" : "p-4 xl:ml-10"}>
                <Header />
                <div>

                    {children}
                </div>
            </div>
        </div>
    );
};

export default PageLayout;
