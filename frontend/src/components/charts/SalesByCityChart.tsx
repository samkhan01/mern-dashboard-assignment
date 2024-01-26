import React from 'react';
import ReactECharts from 'echarts-for-react';

const HorizontalBarChart = () => {
  const option = {
    title: {
      text: 'Sales by city',
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

export default HorizontalBarChart;
