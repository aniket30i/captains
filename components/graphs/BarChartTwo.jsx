"use client";

import React, { useRef, useEffect } from "react";
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

const labels = ["January", "February", "March", "April"];

const data = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: [13, 24, 35, 54],
      borderRadius: {
        topLeft: 10,
        topRight: 10,
        bottomLeft: 0,
        bottomRight: 0,
      },
      backgroundColor: [], // Will be set dynamically in useEffect
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
  },
  scales: {
    x: {
      ticks: { color: "#fff" },
      grid: {
        drawOnChartArea: false, // Hide vertical grid lines
        drawTicks: false,
        color: "rgba(227, 189, 100, 0.4)",
        tickBorderDash: [0, 1],
      },
      border: { display: false }, // Hide x-axis line
    },
    y: {
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
  },
};

export default function BarChartTwo() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const chartArea = chart.chartArea;
    if (!chartArea) return; // ensure chart is rendered

    const dataset = chart.data.datasets[0];

    // Create individual gradient for each bar
    dataset.backgroundColor = dataset.data.map(() => {
      const gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient.addColorStop(1, "rgba(224, 184, 85, 1)"); // Start color
      gradient.addColorStop(0.5, "rgba(163, 142, 90, 1)"); // Mid color
      gradient.addColorStop(0, "rgba(48, 48, 48, 0)"); // End color
      return gradient;
    });

    chart.update();
  }, []);

  return (
    <div style={{ width: "400px", height: "250px" }}>
      <Bar
        ref={chartRef}
        data={data}
        options={{ ...options, maintainAspectRatio: false }}
      />
    </div>
  );
}

// rgba(163, 142, 90, 1)
