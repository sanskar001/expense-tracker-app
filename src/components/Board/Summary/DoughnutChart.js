import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Now Lets register chart feature
ChartJS.register(ArcElement, Tooltip, Legend);

// Setting chart configuration options.
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const DoughnutChart = (props) => {
  const data = {
    labels: Object.keys(props.data),
    datasets: [
      {
        label: "My First Dataset",
        data: Object.values(props.data),
        backgroundColor: [
          "rgba(231, 127, 103, 1)",
          "rgba(189, 195, 199, 1)",
          "rgba(255, 221, 89, 1)",
          "rgba(243, 156, 18, 1)",
          "rgba(52, 152, 219, 1)",
          "rgba(245, 205, 121, 1)",
          "rgba(231, 76, 60, 1)",
          "rgba(46, 204, 113, 1)",
          "rgba(61, 193, 211, 1)",
          "rgba(230, 126, 34, 1)",
          "rgba(149, 165, 166, 1)",
          "rgba(241, 196, 15, 1)",
          "rgba(41, 128, 185, 1)",
          "rgba(26, 188, 156, 1)",
        ],
        hoverOffset: 5,
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
};

export default DoughnutChart;
