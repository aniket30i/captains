import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Filler
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "#e3be65",
      backgroundColor: "rgba(227, 189, 100, 0.3)",
      fill: true,
      pointRadius: 0,
    },
    {
      label: "Dataset 2",
      data: [28, 48, 40, 19, 86, 27, 90],

      borderColor: "#ff0048",
      backgroundColor: "rgba(166, 17, 60, 0.3)",
      fill: true,
      pointRadius: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: false,
  },
  scales: {
    x: {
      grid: {
        color: "rgba(227, 189, 100, 0.4)",
        tickBorderDash: [0, 1],
      },
      border: {
        dash: [5, 5],
        dashOffset: 1,
      },
      ticks: {
        color: "#fff",
      },
    },
    y: {
      grid: {
        color: "rgba(227, 189, 100, 0.4)",
        tickBorderDash: [0, 1],
      },
      border: {
        dash: [5, 5],
        dashOffset: 1,
      },
      ticks: {
        color: "#fff",
      },
    },
  },
};

export default function MyLineChart() {
  return (
    <div style={{ height: "180px" }}>
      <Line data={data} options={options} />
    </div>
  );
}
