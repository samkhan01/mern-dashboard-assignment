import React, { useContext, useState } from 'react'
import { DataContext } from './FilterComponent';

/** Component for display total sales, discount, quentity, profit & loss */
const SalesInformation = () => {
    /** Get data from contex */
    const { salesData } = useContext(DataContext);

    /** Function to calculate the result */
    const calculateAndFormatTotal = (property: string): string => {
        const total = salesData.reduce((accumulator, currentValue) => accumulator + currentValue[property], 0);
        return total.toLocaleString('en-US', {
            style: 'decimal',
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
        });
    };

    const totalSales = calculateAndFormatTotal('Sales');
    const totalQuantity = calculateAndFormatTotal('Quantity');
    const totalDiscount = calculateAndFormatTotal('Discount');
    const totalProfit = calculateAndFormatTotal('Profit');

    return (
        <div className="grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4 mt-2">
            <div className=" information-card relative flex justify-center items-center bg-clip-border text-gray-700 shadow-md">

                <svg className='w-12 h-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="#22c55e">
                    <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" fill="transparent" />
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fontFamily="Arial" fill="#22c55e">₹</text>
                </svg>

                <div className="p-4">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Sales</p>
                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">${totalSales}</h4>
                </div>

            </div>
            <div className=" information-card relative flex justify-center items-center bg-clip-border text-gray-700 shadow-md">
                <svg className="w-16 h-18 text-green-500 dark:text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M6 14h2m3 0h5M3 7v10c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1Z" />
                </svg>
                <div className="p-4">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Quantity</p>
                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{totalQuantity}</h4>
                </div>

            </div>
            <div className=" information-card relative flex justify-center items-center bg-clip-border text-gray-700 shadow-md">
                <svg className="w-12 h-16 text-[#ca8a04] dark:[#ca8a04]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.5 21h13M12 21V7m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2-1.8c3 .7 2.5 2.8 5 2.8M5 8c3.4 0 2.2-2.1 5-2.8M7 9.6V7.8m0 1.8-2 4.3a.8.8 0 0 0 .4 1l.4.1h2.4a.8.8 0 0 0 .8-.7V14L7 9.6Zm10 0V7.3m0 2.3-2 4.3a.8.8 0 0 0 .4 1l.4.1h2.4a.8.8 0 0 0 .8-.7V14l-2-4.3Z" />
                </svg>
                <div className="p-4">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Discount%</p>
                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{totalDiscount}</h4>
                </div>

            </div>
            <div className=" information-card relative flex justify-center items-center bg-clip-border text-gray-700 shadow-md">
                <svg className="w-18 h-14 text-[#db485b] dark:text-[#db485b]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 16H5a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
                </svg>
                <div className="p-4">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">{(parseInt(totalProfit) as unknown as number) >= 0 ? "Profit" : "Loss"}</p>
                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">${totalProfit}</h4>
                </div>

            </div>
        </div>
    )
}

export default SalesInformation