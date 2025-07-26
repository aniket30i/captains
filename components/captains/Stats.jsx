"use client";
import React from "react";
import WinLossLineCard from "../graphs/WinLossLineCard";
import BarChartTwo from "../graphs/BarChartTwo";

const Stats = () => {
  return (
    <div className="h-full w-full">
      <WinLossLineCard />
      <div className="grid grid-cols-2 h-[70%] gap-x-2 gap-y-1 p-1">
        <div className="bg-red-200 rounded-xl">1</div>
        <div className="bg-blue-200 rounded-xl">2</div>
        <div className="bg-green-200 rounded-xl">3</div>
        <div className="p-2 backdrop-blur-md bg-gray-900/35 shadow-2xl rounded-xl flex flex-col gap-4">
          <p className="text-lg text-white font-gobold uppercase">
            Net win by playing position
          </p>
          <BarChartTwo />
        </div>
      </div>
    </div>
  );
};

export default Stats;
