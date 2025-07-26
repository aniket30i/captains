"use client";
import React from "react";
import WinLossLineCard from "../graphs/WinLossLineCard";
import NetWinPosCard from "../graphs/NetWinPosCard";
import NetWinYearCard from "../graphs/NetWinYearCard";

const Stats = () => {
  return (
    <div className="h-full w-full">
      <WinLossLineCard />
      <div className="grid grid-cols-2 h-[70%] gap-x-2 gap-y-1 p-1">
        <div className="bg-red-200 rounded-xl">1</div>
        <NetWinYearCard />
        <div className="bg-green-200 rounded-xl">3</div>
        <NetWinPosCard />
      </div>
    </div>
  );
};

export default Stats;
