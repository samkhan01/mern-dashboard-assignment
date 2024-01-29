import React, { useContext, useEffect } from 'react'
import { DataContext } from '../components/FilterComponent'
import { DarkThemeIcon, LightThemeIcon, NotificationIcon, SalesOverviewIcon, SettingsIcon } from '../components/common/Svgs';

/** Component of the static side bar  */
export const SideBar = () => {
   const { setDarkTheme, darkTheme } = useContext(DataContext);

   function themeController() {

      const bodyElement = document.body;
      setDarkTheme && setDarkTheme(!darkTheme)
      bodyElement.classList.toggle('dark-theme')

   }

   return (
      <aside className="sidebar-container from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 h-[calc(100vh-32px)] w-52 transition-transform duration-300 xl:translate-x-0 mt-16" id={!darkTheme ? "darkTheme" : ""}>

         <div className="">
            <ul className="mb-4 flex flex-col gap-1">
               <li>
                     <a className="" href="#">
                        <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                           <SalesOverviewIcon />
                           <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Sales Overview</p>
                        </button>
                     </a>

               </li>
               <li>
                  <a className="" href="#">
                     <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12c.3 0 .5 0 .8-.2.2 0 .4-.3.6-.5l.4-.7.2-.9c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6 0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6a2.5 2.5 0 0 0 .6 1.6l.6.5a1.8 1.8 0 0 0 1.6 0l.6-.5.4-.7.2-.9c0-1-1.1-3.8-1.6-5a1 1 0 0 0-1-.7h-11a1 1 0 0 0-.9.6A29 29 0 0 0 4 9.7c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7Zm0 0c.3 0 .7 0 1-.3l.7-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7.2.2.6.3.9.3.4 0 .7-.1 1-.4M6 12a2 2 0 0 1-1.2-.5m.2.5v7c0 .6.4 1 1 1h2v-5h3v5h7c.6 0 1-.4 1-1v-7m-5 3v2h2v-2h-2Z" />
                        </svg>
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Stores</p>
                     </button>
                  </a>
               </li>
               <li>
                  <a className="" href="#">
                     <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                        <NotificationIcon />
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Notification</p>
                     </button>
                  </a>
               </li>
               <li>
                  <a className="" href="#">
                     <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                        <SettingsIcon />
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Setting</p>
                     </button>
                  </a>
               </li>
               <li>
                  <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button" onClick={themeController}>
                     {darkTheme ? <><DarkThemeIcon />
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Dark Theme</p></> :

                        <>
                           <LightThemeIcon />
                           <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Light Theme</p></>
                     }

                  </button>


               </li>
            </ul>

         </div>
      </aside>
   )
}