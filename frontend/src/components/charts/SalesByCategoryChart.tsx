import React, { useContext } from 'react';
import ReactECharts from 'echarts-for-react';
import { DataContext } from '../FilterComponent';

/** define categories data type  */
interface CategoryData {
  value: number;
  name: string;
}

/** Compoenent to create the pie chart for the sales by category */
const SalesByCategoryPieChart = () => {
  const { salesData } = useContext(DataContext);

  const categorySalesMap: { [key: string]: number } = {};

  /** Iterate through the data array */
  salesData.forEach(item => {
    const category = item["Category"];
    const sales = item.Sales;

    /** Calculate sales */
    if (categorySalesMap[category]) {
      categorySalesMap[category] += sales as number;
    } else {
      categorySalesMap[category] = sales as number;
    }
  });

  /** Convert the map keys to an array to get unique categories */
  const uniqueCategories = Object.keys(categorySalesMap);


  /**  Get the corresponding sales for each unique category and format into an array */
  const resultArray: CategoryData[] = uniqueCategories.map(category => ({
    value: categorySalesMap[category],
    name: category
  }));

  /** Options for the Chart  */
  const option = {
    title: {
      text: 'Sales by Category',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'horizontal',
      bottom: 10,
      data: uniqueCategories,
    },
    color: ['#0284c7', '#f87171', '#fbbf24'],
    series: [
      {
        name: 'Category',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '25',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: resultArray
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
  );
};

export default SalesByCategoryPieChart;
