"use client";
import React from "react";
import WinLossLineCard from "../graphs/WinLossLineCard";

const Stats = () => {
  return (
    <div className="h-full w-full">
      <WinLossLineCard />
      <div className="grid grid-cols-2 h-[70%] gap-x-2 gap-y-1 p-1">
        <div className="bg-red-200 rounded-xl">1</div>
        <div className="bg-blue-200 rounded-xl">2</div>
        <div className="bg-green-200 rounded-xl">3</div>
        <div className="bg-yellow-200 rounded-xl">4</div>
      </div>
    </div>
  );
};

export default Stats;
