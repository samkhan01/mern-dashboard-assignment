import React, { useContext } from 'react';
import ReactEcharts from 'echarts-for-react';
import { DataContext } from '../FilterComponent';

/** Define the type of sales value */
interface PercentageSale {
  value: number;
}

/** Component to create chart for the sales based on the cities */
const SalesByCitiesChar = () => {
  const { salesData } = useContext(DataContext);

  const percentageSalesArray: PercentageSale[] = [];

  /** Create a Map to store total sales for each city */
  const citySalesMap = new Map<string, number>();

  /** Calculate total sales for each city */
  salesData.forEach(entry => {
    const city = entry["City"];
    const sales = entry["Sales"];

    if (citySalesMap.has(city)) {
      citySalesMap.set(city, citySalesMap.get(city)! + sales);
    } else {
      citySalesMap.set(city, sales);
    }
  });

  const totalSalesAllCities = Array.from(citySalesMap.values()).reduce((sum, sales) => sum + sales, 0);

  /** alculate the percentage of sales for each city and push into the array */
  const allCityName: string[] = []
  citySalesMap.forEach((sales, city) => {
    allCityName.push(city)
    const percentage = (sales / totalSalesAllCities) * 100;
    percentageSalesArray.push({ value: percentage });
  });


  const options = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}%',
    },
    xAxis: {
      type: 'value',
      max: 100,
      axis: {
        axisLine: {
          show: false,
        },
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'category',
      data: allCityName.slice(0, 8),
      axisLabel: {
        show: true,
        color: '#fff', // Text color
        fontSize: 12,
      },
      axisLine: {
        show: false, // Hide y-axis line
      },
      splitLine: {
        show: false, // Hide y-axis grid lines
      },
    },
    series: [
      {
        name: 'Value 1',
        type: 'bar',
        stack: 'barStack',
        itemStyle: {
          normal: {
            color: '#409eff',
          },
        },
        data: percentageSalesArray
          .map((data) => ({ value: 100 - data.value, name: '' })).slice(0, 10),
      },
      {
        name: 'Value 2',
        type: 'bar',
        stack: 'barStack',
        itemStyle: {
          normal: {
            color: '#b0b0b0',
          },
        },
        data: percentageSalesArray
          .map((data) => ({ value: data.value, name: '' })).slice(0, 8),
      },
    ],
    textStyle: {
      color: '#000',
    },
    backgroundColor: '#808080',
  };

  return <ReactEcharts option={options} style={{ height: '300px', width: '100%' }} />;
};

export default SalesByCitiesChar;