import React, { useContext } from 'react';
import { DataContext } from '../FilterComponent';

/** Component to create a custom chart for the sales based on products */
const SalesByProductsChart = () => {
  const { salesData } = useContext(DataContext);
  const productSalesMap: { [key: string]: { productName: string; sales: number } } = {};

  /** Iterate through the data array */
  salesData.forEach(item => {
    const productName = item["Product Name"];
    const sales = Math.floor(item.Sales);

    /**  Check if the product name already exists in the map */
    if (productSalesMap[productName]) {
      productSalesMap[productName].sales += sales;
    } else {
      productSalesMap[productName] = {
        productName: productName,
        sales: sales
      };
    }
  });

  /** Convert the map values to an array */
  const resultArray = Object.values(productSalesMap);

  /**  Sort the array based on sales in descending order */
  resultArray.sort((a, b) => b.sales - a.sales);

  const top10Products = resultArray.slice(0, 10);

  const ProductsValueArray = top10Products.sort((a, b) => a.sales - b.sales);



  return (
    <div style={{ width: '100%' }} className='bg-[#0f172a]'>


      <ul className='bar-charts p-6'>
        <h3 className='text-white'>Sales by Products</h3>
        <div className='flex justify-between items-center w-full text-white'>
          <span className='text-left'>Product Name</span>
          <span className='text-right'>Sales in $</span>
        </div>
        {ProductsValueArray?.map((product: { productName: string, sales: number }) => (
          <li className='barchart flex justify-between items-center w-full bg-[#e2e8f0] mt-2'>
            <span className='text-left p-2'>{product?.productName}</span>
            <span className='text-right bg-[#a5f3fc] p-2'>${product?.sales}</span>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default SalesByProductsChart;