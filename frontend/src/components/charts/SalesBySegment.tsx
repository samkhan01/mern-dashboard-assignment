import React from 'react';
import ReactECharts from 'echarts-for-react';

const SalesBySegmentChart = () => {
  const option = {
    title: {
      text: 'Sales by segment',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'horizontal',
      bottom: 10,
      data: ['Category 1', 'Category 2', 'Category 3'],
    },
    color: ['#FFA500', '#0000FF', '#008000'], // Orange, Blue, Green
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
        data: [
          { value: 335, name: 'Category 1' },
          { value: 310, name: 'Category 2' },
          { value: 234, name: 'Category 3' },
        ],
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
  );
};

export default SalesBySegmentChart;
