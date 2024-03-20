import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
const MyChart = ({ chartData, chartWidth, chartHeight }) => {
  const chartRef = useRef(null);
  const myChartRef = useRef(null); // Mutable reference for myChart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy any existing chart to prevent canvas reuse error
    if (myChartRef.current) {
      myChartRef.current.destroy();
    }

    // Create new chart and assign to myChartRef
    myChartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartData.labels,
        datasets: [{
          label: chartData.datasetLabel,
          data: chartData.data,
          backgroundColor: chartData.data.map((value) => {
            // Dynamically set green background color only for bars within safe limit
            const safeLimit = value >= chartData.lowerBound && value <= chartData.upperBound;
            return safeLimit ? 'rgba(0, 128, 0, 0.2)' : 'rgba(255, 99, 132, 0.2)';
          }),
          borderColor: chartData.data.map((value) => {
            // Dynamically set green border color only for bars within safe limit
            const safeLimit = value >= chartData.lowerBound && value <= chartData.upperBound;
            return safeLimit ? 'rgba(0, 128, 0, 1)' : 'rgba(255, 99, 132, 1)';
          }),
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function
    return () => {
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }
    };
  }, [chartData]);

  return (
    <div>
      <canvas ref={chartRef} width={chartWidth} height={chartHeight}></canvas>
    </div>
  );
};

export default MyChart;

