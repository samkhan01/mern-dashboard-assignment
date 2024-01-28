import React, { useContext } from 'react';
import { DataContext } from '../FilterComponent';

/** Initilize component to create a pie chart based on the sub categories of products */
const SalesBySubCategories = () => {
  const { salesData } = useContext(DataContext);
  const subCategorySalesMap: { [key: string]: { subCategoryName: string; sales: number } } = {};

  /** Iterate through the data array */
  salesData.forEach(item => {
    const subCategoryName = item["Sub-Category"];
    /** Remove decimal places using Math.floor */
    const sales = Math.floor(item.Sales);

    /** Check if the subCat name already exists in the map */
    if (subCategorySalesMap[subCategoryName]) {
      /** If yes, add the sales to the existing sum */
      subCategorySalesMap[subCategoryName].sales += sales;
    } else {
      /** If no, create a new entry for the subCat with the current sales */
      subCategorySalesMap[subCategoryName] = {
        subCategoryName: subCategoryName,
        sales: sales
      };
    }
  });

  const resultArray = Object.values(subCategorySalesMap);

  resultArray.sort((a, b) => b.sales - a.sales);

  /** Tase the top 10 subCat */
  const top10subCat = resultArray.slice(0, 10);

  console.log(top10subCat);

  const subCatValueArray = top10subCat.sort((a, b) => a.sales - b.sales);

  return (
    <div style={{ width: '100%' }} >


      <ul className='bar-charts p-2'>
        <h3 className='text-white'>Sales by sub Category</h3>
        <div className='flex justify-between items-center w-full text-white'>
          <span className='text-left'>sub Category Name</span>
          <span className='text-right'>Sales in $</span>
        </div>
        {subCatValueArray?.map((subCategory: { subCategoryName: string, sales: number }, index:number) => (
          <li className='barchart flex justify-between items-center w-full bg-[#ecfeff] mt-2' key={index}>
            <span className='text-left p-1 text-black'>{subCategory?.subCategoryName}</span>
            <span className='text-right bg-[#a5f3fc] p-1 text-black w-24'>${subCategory?.sales}</span>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default SalesBySubCategories;