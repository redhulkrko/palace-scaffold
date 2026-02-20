import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import './ChartsSection.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const EarningsChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Earnings',
        data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000],
        fill: true,
        backgroundColor: 'rgba(78, 115, 223, 0.05)',
        borderColor: 'rgba(78, 115, 223, 1)',
        tension: 0.3
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgb(234, 236, 244)',
          drawBorder: false,
          drawTicks: false,
          borderDash: [2],
          drawOnChartArea: false
        },
        ticks: {
          color: '#858796',
          padding: 20
        }
      },
      y: {
        grid: {
          color: 'rgb(234, 236, 244)',
          drawBorder: false,
          drawTicks: false,
          borderDash: [2]
        },
        ticks: {
          color: '#858796',
          padding: 20
        }
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default EarningsChart;
