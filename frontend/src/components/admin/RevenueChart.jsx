import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueChart = () => {
  const data = {
    labels: ['Direct', 'Social', 'Referral'],
    datasets: [
      {
        data: [50, 30, 15],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        borderColor: ['#ffffff', '#ffffff', '#ffffff'],
        borderWidth: 2
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return <Doughnut data={data} options={options} />;
};

export default RevenueChart;
