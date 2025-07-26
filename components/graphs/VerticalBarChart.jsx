import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"];

// Example wins and losses per year
const wins = [30, 21, 20, 23, 31, 36, 30, 20];
const losses = [20, 35, 22, 28, 20, 25, 29, 32];

const data = {
  labels,
  datasets: [
    {
      data: losses.map((l) => -l), // Negative values to go below X-axis
      backgroundColor: "#FF0048", // Red
    },
    {
      data: wins,
      backgroundColor: "#FAC515", // Yellow
    },
  ],
};

const maxAbsValue = Math.max(Math.max(...wins), Math.max(...losses));

const options = {
  min: -maxAbsValue,
  max: maxAbsValue,
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
    datalabels: false,
  },
  scales: {
    x: {
      ticks: { color: "#fff" },
      grid: {
        color: "rgba(227, 189, 100, 0.4)", // Horizontal grid lines
        tickBorderDash: [0, 1],
      },
      border: {
        display: true,
        dash: [5, 3], // Dashed line style
      },
    },
    y: {
      ticks: {
        color: "#fff",
        callback: function (value) {
          const max = this.chart.scales.y.max;
          const min = this.chart.scales.y.min;
          return value === 0 || value === max || value === min
            ? Math.abs(value)
            : "";
        },
      },
      grid: {
        drawOnChartArea: false, // Hide vertical grid lines
        drawTicks: false,
        color: "rgba(227, 189, 100, 0.4)",
        tickBorderDash: [0, 1],
      },
      border: { display: false },
    },
  },
};

export default function VerticalWinLossChart() {
  return (
    <div style={{ width: "400px", height: "200px" }}>
      <Bar data={data} options={{ ...options, maintainAspectRatio: false }} />
    </div>
  );
}
