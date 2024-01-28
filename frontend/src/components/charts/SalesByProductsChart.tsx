import React, { useContext } from 'react';
import { DataContext } from '../FilterComponent';

/** Component to create a custom chart for the sales based on products */
const SalesByProductsChart = () => {
  const { salesData, darkTheme } = useContext(DataContext);
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
    <div style={{ width: '100%' }}>


      <ul className='bar-charts p-2'>
        <h3 className={darkTheme ? 'text-white' : 'text-black'}>Sales by Products</h3>
        <div className={darkTheme ? 'flex justify-between items-center w-full text-white' : 'flex justify-between items-center w-full text-black'}>
          <span className='text-left'>Product Name</span>
          <span className='text-right'>Sales in $</span>
        </div>
        {ProductsValueArray?.map((product: { productName: string, sales: number }, index: number) => (
          <li className={'barchart text-black flex justify-between items-center w-full bg-[#ecfeff] mt-2'} key={index}>
            <span className='text-left p-1'>{product?.productName}</span>
            <span className='text-right bg-[#a5f3fc] p-1 w-24'>${product?.sales}</span>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default SalesByProductsChart;