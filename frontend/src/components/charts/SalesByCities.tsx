import React, { useContext } from 'react';
import ReactEcharts from 'echarts-for-react';
import { DataContext } from '../FilterComponent';

/** Define the type of sales value */
interface PercentageSale {
  value: number;
}

/** Component to create chart for the sales based on the cities */
const SalesByCitiesChar = () => {
  const { salesData, darkTheme } = useContext(DataContext);

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
    title: {
      text: 'Sales by City',
      textStyle: {
        color: darkTheme ? "#f8fafc" : "#000000", // Set the text color for the title
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}%',
      textStyle: {
        color: "#000000", // Set the text color for the tooltip
      },
    },
    xAxis: {
      type: 'value',
      max: 100,
      axisLabel: {
        show: true,
        color: darkTheme ? "#f8fafc" : "#000000", // Set the text color for yAxis labels
        fontSize: 12,
        padding: [0, 0, 0, 0],
        
      },
      axis: {
        axisLine: {
          show: false,
        },
      },
      splitLine: {
        show: false,
      },
      textStyle: {
        color: darkTheme ? "#f8fafc" : "#000000", // Set the text color for xAxis
      },
    },
    yAxis: {
      type: 'category',
      data: allCityName.slice(0, 8),
      axisLabel: {
        show: true,
        color: darkTheme ? "#f8fafc" : "#000000", // Set the text color for yAxis labels
        fontSize: 12,
        padding: [0, 0, 0, 0],
        
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
            color: '#a5f3fc',
          },
        },
        data: percentageSalesArray.map((data) => ({ value: 100 - data.value, name: '' })).slice(0, 10),
      },
      {
        name: 'Value 2',
        type: 'bar',
        stack: 'barStack',
        itemStyle: {
          normal: {
            color: '#ecfeff',
          },
        },
        data: percentageSalesArray.map((data) => ({ value: data.value, name: '' })).slice(0, 8),
      },
    ],
    textStyle: {
      color: "#ecfeff"
    },
    padding: [12, 12, 12, 12],
  };
  

  return <ReactEcharts option={options} style={{ height: '100vh', width: '100%', padding: 12,  }} />;
};

export default SalesByCitiesChar;