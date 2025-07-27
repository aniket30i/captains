"use client";
import React from "react";
import WinLossLineCard from "../graphs/WinLossLineCard";
import NetWinPosCard from "../graphs/NetWinPosCard";
import NetWinYearCard from "../graphs/NetWinYearCard";
import WinLossPlayPosCard from "../graphs/WinLossPlayPosCard";
import NetWinPercPlayPosCard from "../graphs/NetWinPercPlayPosCard";

/////////////////////

const Stats = () => {
  return (
    <div className="h-full w-full">
      <WinLossLineCard />
      <div className="grid grid-cols-2 h-[70%] gap-x-2 gap-y-1 py-1">
        <WinLossPlayPosCard />
        <NetWinYearCard />
        <NetWinPercPlayPosCard />
        <NetWinPosCard />
      </div>
    </div>
  );
};

export default Stats;
