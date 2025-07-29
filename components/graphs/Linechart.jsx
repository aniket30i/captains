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
  const labels = plotData?.map((item) => item.year);
  const wins = plotData?.map((item) => item.wins);
  const losses = plotData?.map((item) => item.losses);
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: wins,
        borderColor: "#e3be65",
        backgroundColor: "rgba(227, 189, 100, 0.3)",
        fill: true,
        pointRadius: 2,
      },
      {
        label: "Dataset 2",
        data: losses,
        borderColor: "#ff0048",
        backgroundColor: "rgba(166, 17, 60, 0.3)",
        fill: true,
        pointRadius: 2,
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
