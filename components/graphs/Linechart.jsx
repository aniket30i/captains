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

export default function MyLineChart({ plotData }) {
  const labels = Object.keys(plotData);
  const wins = labels.map((year) => plotData[year].wins || 0);
  const losses = labels.map((year) => plotData[year].losses || 0);
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: wins,
        borderColor: "#e3be65",
        backgroundColor: "rgba(227, 189, 100, 0.3)",
        fill: true,
        pointRadius: 0,
      },
      {
        label: "Dataset 2",
        data: losses,
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
  return (
    <div style={{ height: "180px" }}>
      <Line data={data} options={options} />
    </div>
  );
}
