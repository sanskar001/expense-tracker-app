import React from "react";
import styles from "./ExpenseChart.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  TimeScale,
  TimeSeriesScale,
} from "chart.js";

// Now Lets register chart feature
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  TimeScale,
  TimeSeriesScale
);

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
  scales: {
    x: {
      ticks: {
        font: {
          family: "Inter",
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        font: {
          family: "Inter",
        },
        // Include a dollar sign in the ticks
        callback: function (value, index, ticks) {
          return "$" + value;
        },
      },
      grid: {
        display: true,
      },
    },
  },
};

const ExpenseChart = (props) => {
  const expenseItems = [...props.items];

  // Sorting expense data as per date (latest date on right)
  expenseItems.sort((prev, next) => {
    return Date.parse(prev.date) - Date.parse(next.date);
  });

  const labels = expenseItems.map((item) =>
    new Date(item.date).toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  );

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Expenses",
        data: expenseItems.map((item) => item.amount),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        // tension: 0.2,
      },
    ],
  };
  return (
    <div className={styles.expense_chart}>
      {expenseItems.length > 0 ? (
        <div className={styles.lineChart}>
          <Line data={data} options={options} />
        </div>
      ) : (
        <div className={styles.not_found}>No Expenses Found!</div>
      )}
    </div>
  );
};

export default ExpenseChart;
