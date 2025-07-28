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
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function BarChartTwo({ plotData }) {
  // console.log("plotData from grad chart :", plotData);

  const labels = Object.keys(plotData);
  const wins = labels.map((label) => plotData[label].wins || 0);
  const Ynames = labels.map((label) => label.toUpperCase());

  const data = {
    labels: Ynames,
    datasets: [
      {
        label: "wins",
        data: wins,
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 0,
          bottomRight: 0,
        },
        backgroundColor: [], // Will be set dynamically
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
      datalabels: {
        color: "white",
        anchor: "center",
        align: "center",
        font: {
          weight: "bold",
          size: 20,
        },
      },
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
        ticks: {
          font: {
            size: 12,
            weight: "400",
          },
        },
        // gradient consistent
        beginAtZero: true,
      },
    },
  };

  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const chartArea = chart.chartArea;
    if (!chartArea) return;

    const dataset = chart.data.datasets[0];
    const dataMax = Math.max(...dataset.data);
    const dataMin = 0; // Assuming y-axis starts from 0

    dataset.backgroundColor = dataset.data.map((value) => {
      const gradientStart = chart.scales.y.getPixelForValue(dataMax);
      const gradientEnd = chart.scales.y.getPixelForValue(dataMin);

      const gradient = ctx.createLinearGradient(
        0,
        gradientStart,
        0,
        gradientEnd
      );
      gradient.addColorStop(0, "rgb(236, 194, 89)"); // Top color
      gradient.addColorStop(0.5, "rgb(163, 136, 72)"); // Mid color

      gradient.addColorStop(1, "rgba(48, 48, 48, 0.1)");
      return gradient;
    });

    chart.update();
  }, [wins, chartRef]);

  return (
    <div style={{ width: "400px", height: "200px" }}>
      <Bar
        ref={chartRef}
        data={data}
        options={{ ...options, maintainAspectRatio: false }}
      />
    </div>
  );
}
