"use client";
import React from "react";
import WinLossLineCard from "../graphs/WinLossLineCard";
import NetWinPosCard from "../graphs/NetWinPosCard";
import VerticalBarChart from "../graphs/VerticalBarChart";

const Stats = () => {
  return (
    <div className="h-full w-full">
      <WinLossLineCard />
      <div className="grid grid-cols-2 h-[70%] gap-x-2 gap-y-1 p-1">
        <div className="bg-red-200 rounded-xl">1</div>
        <div className="p-2 backdrop-blur-md bg-gray-900/35 shadow-2xl rounded-xl flex flex-col">
          <p className="text-lg text-white font-gobold uppercase">
            Net win by year
          </p>
          <div className="flex gap-4 font-gobold text-white text-sm">
            <p>
              <span className="text-2xl text-[#FAC515]">&#9679;</span> win
            </p>
            <p>
              <span className="text-2xl text-[#FF0048]">&#9679;</span> losses
            </p>
          </div>
          <VerticalBarChart />
        </div>
        <div className="bg-green-200 rounded-xl">3</div>
        <NetWinPosCard />
      </div>
    </div>
  );
};

export default Stats;
