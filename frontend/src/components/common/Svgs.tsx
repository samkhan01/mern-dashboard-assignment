import React from 'react'
import { JSX } from 'react/jsx-runtime'

/** File of icons */

export const TotalSalesIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg className='w-12 h-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="#22c55e" {...props}>
            <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" fill="transparent" />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fontFamily="Arial" fill="#22c55e">₹</text>
        </svg>
    )
}


export const QuantityIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg className="w-16 h-18 text-green-500 dark:text-green-300" aria-hidden="true" {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M6 14h2m3 0h5M3 7v10c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1Z" />
        </svg>
    )
}

export const DiscountIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg className="w-12 h-16 text-[#ca8a04] dark:[#ca8a04]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.5 21h13M12 21V7m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2-1.8c3 .7 2.5 2.8 5 2.8M5 8c3.4 0 2.2-2.1 5-2.8M7 9.6V7.8m0 1.8-2 4.3a.8.8 0 0 0 .4 1l.4.1h2.4a.8.8 0 0 0 .8-.7V14L7 9.6Zm10 0V7.3m0 2.3-2 4.3a.8.8 0 0 0 .4 1l.4.1h2.4a.8.8 0 0 0 .8-.7V14l-2-4.3Z" />
        </svg>
    )
}

export const ProfitIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg className="w-18 h-14 text-[#db485b] dark:text-[#db485b]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16H5a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
        </svg>
    )
}

export const SalesOverviewIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v9c0 .6.4 1 1 1Z" />
        </svg>
    )
}


export const NotificationIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.4V3m0 2.4a5.3 5.3 0 0 1 5.1 5.3v1.8c0 2.4 1.9 3 1.9 4.2 0 .6 0 1.2-.5 1.2h-13c-.5 0-.5-.6-.5-1.2 0-1.2 1.9-1.8 1.9-4.2v-1.8A5.3 5.3 0 0 1 12 5.4Zm-8.1 5.3c0-2 .8-4.1 2.2-5.7m14 5.7c0-2-.8-4.1-2.2-5.7M8.5 18a3.5 3.5 0 0 0 7 0h-7Z" />
        </svg>
    )
}


export const SettingsIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg className="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13v-2a1 1 0 0 0-1-1h-.8l-.7-1.7.6-.5a1 1 0 0 0 0-1.5L17.7 5a1 1 0 0 0-1.5 0l-.5.6-1.7-.7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.8l-1.7.7-.5-.6a1 1 0 0 0-1.5 0L5 6.3a1 1 0 0 0 0 1.5l.6.5-.7 1.7H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.8l.7 1.7-.6.5a1 1 0 0 0 0 1.5L6.3 19a1 1 0 0 0 1.5 0l.5-.6 1.7.7v.8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.8l1.7-.7.5.6a1 1 0 0 0 1.5 0l1.4-1.4a1 1 0 0 0 0-1.5l-.6-.5.7-1.7h.8a1 1 0 0 0 1-1Z" />
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
    )
}


export const DarkThemeIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 0 1-.5-18v0A9 9 0 0 0 20 15h.5a9 9 0 0 1-8.5 6Z" />
        </svg>
    )
}


export const LightThemeIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7 7 5.7 5.7m12.8 12.8L17 17M5 12H3m18 0h-2M7 17l-1.4 1.4M18.4 5.6 17 7.1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        </svg>
    )
}

