import React from 'react';
import MyChart from './MyChart.jsx';
import './GraphBar.css';

const GraphBar = ({}) => {
  // Sample data for the charts
  const chartData1 = {
    labels: ['Lower Bound', 'Value', 'Upper Bound'],
    datasetLabel: 'Test Result',
    data: [12, 19, 16],
    lowerBound: 12, // Adjust lower bound as needed
    upperBound: 16, // Adjust upper bound as needed
  };

  

  return (
    <div className="container">
      <div className="masterChart">
        <div className="chart-container">
          <MyChart chartData={chartData1} chartWidth={200} chartHeight={100} />
        </div>
      </div>
    </div>
  );
};

export default GraphBar;
