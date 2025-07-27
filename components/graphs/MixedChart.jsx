// import React, { useEffect, useRef } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Chart } from "react-chartjs-2";
// import ChartDataLabels from "chartjs-plugin-datalabels";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   ChartDataLabels
// );

// const labels = ["", "January", "February", "March", "April"];

// const data = {
//   labels,
//   datasets: [
//     {
//       type: "line",
//       label: "Average",
//       tension: 0,
//       yAxisID: "yLine",
//       data: [0, 2, 2, 2, 3],
//       borderColor: "#ff0048",
//       backgroundColor: "rgba(255, 0, 72, 0.3)",
//       tension: 0.4,
//       fill: false,
//       pointRadius: [0, 4, 4, 4, 4],
//       pointBackgroundColor: "#ff0048",
//       datalabels: {
//         color: "#fff",
//         anchor: "start", // Position relative to the point
//         align: "bottom", // Label below the point
//         font: { weight: "bold", size: 10 },
//         formatter: (value, context) => {
//           return context.dataIndex === 0 ? null : value;
//         },
//       },
//     },
//     {
//       type: "bar",
//       label: "Sales",
//       yAxisID: "yBar",
//       data: [null, 55, 56, 62, 65],
//       backgroundColor: [],
//       borderRadius: 6,
//       datalabels: {
//         color: "#fff",
//         anchor: "end", // <-- Anchor to the top of the bar
//         align: "end", // <-- Align the text to be inside the bar from the anchor
//         offset: -35, // <-- Add a small negative offset for padding from the top edge
//         font: { weight: "bold", size: 16 },
//         formatter: function (value) {
//           // Check for null to prevent "null%" from being displayed
//           return value !== null ? value + "%" : null;
//         },
//       },
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   plugins: {
//     legend: { display: false },
//   },
//   scales: {
//     x: {
//       ticks: { color: "#fff" },
//       grid: {
//         color: "rgba(227, 189, 100, 0.4)",
//         drawOnChartArea: false, // Hide vertical grid lines
//         drawTicks: false,
//       },
//       border: { display: false },
//     },
//     yBar: {
//       // LEFT Y-AXIS (Bar)
//       type: "linear",
//       position: "left",
//       min: 0,
//       max: 100,
//       ticks: {
//         stepSize: 50,
//         callback: (value) =>
//           value === 0 || value === 50 || value === 100 ? value : "",
//         color: "#fff",
//       },
//       grid: {
//         color: "rgba(227, 189, 100, 0.4)",
//         tickBorderDash: [0, 1],
//       },
//       border: {
//         display: true,
//         dash: [5, 3], // Dashed line style
//       },
//     },
//     yLine: {
//       // RIGHT Y-AXIS (Line)
//       type: "linear",
//       position: "right",
//       min: 0,
//       max: 10,
//       ticks: {
//         stepSize: 5,
//         callback: (value) =>
//           value === 0 || value === 5 || value === 10 ? value : "",
//         color: "#fff",
//       },
//       grid: {
//         drawOnChartArea: false, // Prevent overlapping grid lines
//       },
//       border: {
//         display: true,
//         dash: [5, 3], // Dashed line style
//       },
//     },
//   },
// };

// export default function MixedChart() {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const chart = chartRef.current;
//     if (!chart) return;

//     // Apply gradient to BAR dataset
//     const ctx = chart.ctx;
//     const yScale = chart.scales.yBar;
//     const barDataset = chart.data.datasets.find((ds) => ds.type === "bar");

//     const gradient = ctx.createLinearGradient(0, yScale.top, 0, yScale.bottom);
//     gradient.addColorStop(0, "rgb(236, 194, 89)");
//     gradient.addColorStop(0.5, "rgb(163, 136, 72)");
//     gradient.addColorStop(1, "rgba(48, 48, 48, 0.1)");

//     barDataset.backgroundColor = barDataset.data.map(() => gradient);
//     chart.update();
//   }, []);
//   return (
//     <div style={{ width: "400px", height: "200px" }}>
//       <Chart type="bar" data={data} options={options} ref={chartRef} />
//     </div>
//   );
// }
import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

// Removed the initial empty string from labels
const labels = ["January", "February", "March", "April"];

const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Average",
      tension: 0,
      yAxisID: "yLine",
      // Changed data to start directly with the first value
      data: [2, 2, 2, 3],
      borderColor: "#ff0048",
      backgroundColor: "rgba(255, 0, 72, 0.3)",
      tension: 0.4,
      fill: false,
      // Adjusted pointRadius to start with 4 for the first data point
      pointRadius: [4, 4, 4, 4],
      pointBackgroundColor: "#ff0048",
      datalabels: {
        color: "#fff",
        anchor: "start",
        align: "bottom",
        font: { weight: "bold", size: 10 },
        formatter: (value, context) => {
          // No need to check for index 0 anymore as all points will have labels
          return value;
        },
      },
    },
    {
      type: "bar",
      label: "Sales",
      yAxisID: "yBar",
      // Changed data to start directly with the first value
      data: [55, 56, 62, 65],
      backgroundColor: [],
      borderRadius: 6,
      datalabels: {
        color: "#fff",
        anchor: "end",
        align: "end",
        offset: -35,
        font: { weight: "bold", size: 16 },
        formatter: function (value) {
          return value !== null ? value + "%" : null;
        },
      },
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      ticks: { color: "#fff" },
      grid: {
        color: "rgba(227, 189, 100, 0.4)",
        drawOnChartArea: false,
        drawTicks: false,
      },
      border: { display: false },
    },
    yBar: {
      type: "linear",
      position: "left",
      min: 0,
      max: 100,
      ticks: {
        stepSize: 50,
        callback: (value) =>
          value === 0 || value === 50 || value === 100 ? value : "",
        color: "#fff",
      },
      grid: {
        color: "rgba(227, 189, 100, 0.4)",
        tickBorderDash: [0, 1],
      },
      border: {
        display: true,
        dash: [5, 3],
      },
    },
    yLine: {
      type: "linear",
      position: "right",
      min: 0,
      max: 10,
      ticks: {
        stepSize: 5,
        callback: (value) =>
          value === 0 || value === 5 || value === 10 ? value : "",
        color: "#fff",
      },
      grid: {
        drawOnChartArea: false,
      },
      border: {
        display: true,
        dash: [5, 3],
      },
    },
  },
};

export default function MixedChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const yScale = chart.scales.yBar;
    const barDataset = chart.data.datasets.find((ds) => ds.type === "bar");

    const gradient = ctx.createLinearGradient(0, yScale.top, 0, yScale.bottom);
    gradient.addColorStop(0, "rgb(236, 194, 89)");
    gradient.addColorStop(0.5, "rgb(163, 136, 72)");
    gradient.addColorStop(1, "rgba(48, 48, 48, 0.1)");

    barDataset.backgroundColor = barDataset.data.map(() => gradient);
    chart.update();
  }, []);
  return (
    <div style={{ width: "400px", height: "200px" }}>
      <Chart type="bar" data={data} options={options} ref={chartRef} />
    </div>
  );
}
