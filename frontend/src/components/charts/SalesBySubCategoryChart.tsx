import React from 'react';
import ReactECharts from 'echarts-for-react';

const SalesBySubCategoryChart = () => {
  const option = {
    title: {
      text: 'Sales by sub category',
    },
    tooltip: {},
    yAxis: {
      type: 'category',
      data: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    },
    xAxis: {
      type: 'value',
    },
    series: [{
      name: 'Sample Data',
      type: 'bar',
      data: [20, 35, 15, 25, 30],
    }],
  };

  return (
    <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
  );
};

export default SalesBySubCategoryChart;
