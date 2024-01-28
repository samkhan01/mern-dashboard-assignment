import React, { useContext, useState } from 'react'
import { DataContext } from './FilterComponent';
import { DiscountIcon, ProfitIcon, QuantityIcon, TotalSalesIcon } from './common/Svgs';

/** Component for display total sales, discount, quentity, profit & loss */
const SalesInformation = () => {
    /** Get data from contex */
    const { salesData, darkTheme } = useContext(DataContext);

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
            <div className={darkTheme ? "information-card relative flex justify-center items-center bg-clip-border text-gray-700 shadow-md" : "information-card-light relative flex justify-center items-center bg-clip-border text-gray-700 shadow-md"}>

                <TotalSalesIcon />

                <div className="p-4">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Sales</p>
                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">${totalSales}</h4>
                </div>

            </div>
            <div className={darkTheme ? "information-card relative flex justify-center items-center bg-clip-border text-gray-700 shadow-md" : "information-card-light relative flex justify-center items-center bg-clip-border text-gray-700 shadow-md"}>
                <QuantityIcon />
                <div className="p-4">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Quantity</p>
                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{totalQuantity}</h4>
                </div>

            </div>
            <div className={darkTheme ? "information-card relative flex justify-center items-center bg-clip-border text-gray-700 shadow-md" : "information-card-light relative flex justify-center items-center bg-clip-border text-gray-700 shadow-md"}>
                <DiscountIcon />
                <div className="p-4">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Discount%</p>
                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{totalDiscount}</h4>
                </div>

            </div>
            <div className={darkTheme ? "information-card relative flex justify-center items-center bg-clip-border text-gray-700 shadow-md" : "information-card-light relative flex justify-center items-center bg-clip-border text-gray-700 shadow-md"}>
                <ProfitIcon />
                <div className="p-4">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">{(parseInt(totalProfit) as unknown as number) >= 0 ? "Profit" : "Loss"}</p>
                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">${totalProfit}</h4>
                </div>

            </div>
        </div>
    )
}

export default SalesInformation