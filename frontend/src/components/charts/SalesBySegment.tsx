import React, { useContext } from 'react';
import ReactECharts from 'echarts-for-react';
import { DataContext } from '../FilterComponent';
interface SegmentData {
  value: number;
  name: string;
}

/** Component to create a chart based on the segment of products */
const SalesBySegmentPieChart = () => {
  const { salesData, darkTheme } = useContext(DataContext);

  const SegmentSalesMap: { [key: string]: number } = {};

  salesData.forEach(item => {
    const Segment = item["Segment"];
    const sales = item.Sales;

    /** Check if the Segment already exists in the map */
    if (SegmentSalesMap[Segment]) {
      SegmentSalesMap[Segment] += sales;
    } else {
      SegmentSalesMap[Segment] = sales;
    }
  });

  /**  Convert the map keys to an array to get unique categories */
  const uniqueSegment = Object.keys(SegmentSalesMap);


  /** Get the corresponding sales for each unique Segment and format into an array */
  const resultArray: SegmentData[] = uniqueSegment.map(Segment => ({
    value: SegmentSalesMap[Segment],
    name: Segment
  }));

  const option = {
    title: {
      text: 'Sales by Segment',
      // left: 'center',
      textStyle: {
        color:  darkTheme ? '#f1f5f9' : '#000000', // Set the text color for legend items
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'horizontal',
      bottom: 10,
      data: uniqueSegment,
      textStyle: {
        color: darkTheme ? '#f1f5f9' : '#000000', // Set the text color for legend items
      },
    },
    color: ['#0284c7', '#f87171', '#fbbf24'],
    series: [
      {
        name: 'Segment',
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
    <ReactECharts option={option} style={{ width: '100%' }} />
  );
};

export default SalesBySegmentPieChart;
