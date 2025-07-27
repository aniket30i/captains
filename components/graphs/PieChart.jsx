import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ plotData }) {
  const data = {
    labels: ["Win", "Loss"],
    datasets: [
      {
        data: [plotData.wins, plotData.losses],
        backgroundColor: ["#ECC259", "#ff0048"], // Two colors
        borderWidth: 0, // No gap between sectors
        cutout: "60%",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      datalabels: {
        color: "white",
        font: { size: 14, weight: "bold" },
      },
    },
  };
  return (
    <div style={{ width: "165px", height: "165px" }}>
      <Pie data={data} options={options} />
    </div>
  );
}
