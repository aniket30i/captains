"use client";
import React, { useMemo } from "react";
import WinLossLineCard from "../graphs/WinLossLineCard";
import NetWinPosCard from "../graphs/NetWinPosCard";
import NetWinYearCard from "../graphs/NetWinYearCard";
import WinLossPlayPosCard from "../graphs/WinLossPlayPosCard";
import NetWinPercPlayPosCard from "../graphs/NetWinPercPlayPosCard";

/////////////////////

const Stats = ({ activeCoachData }) => {
  const coachingHistory = activeCoachData?.coaching_history || [];

  const positionDataResponse1 = useMemo(() => {
    if (!coachingHistory || coachingHistory.length === 0) return {};
    return coachingHistory.reduce((acc, { coach_position, wins, losses }) => {
      const key = coach_position.toLowerCase().trim();
      if (!acc[key]) acc[key] = { wins: 0, losses: 0 };
      acc[key].wins += wins;
      acc[key].losses += losses;
      return acc;
    }, {});
  }, [coachingHistory]);

  const winLossSixteen1 = useMemo(() => {
    const result = coachingHistory.reduce((acc, { year, wins, losses }) => {
      if (year >= 2009 && year <= 2024) {
        if (!acc[year]) {
          acc[year] = { year, wins: 0, losses: 0 };
        }
        acc[year].wins += wins;
        acc[year].losses += losses;
      }
      return acc;
    }, {});

    return Object.values(result);
  }, [coachingHistory]);

  console.log("Univ position", positionDataResponse1);

  return (
    <div className="h-full w-full">
      <WinLossLineCard coachLossWinsxt={winLossSixteen1} />
      <div className="grid grid-cols-2 h-[70%] gap-x-2 gap-y-1 py-1">
        <WinLossPlayPosCard coachingHistory={positionDataResponse1} />
        <NetWinYearCard coachingHistory={coachingHistory} />
        <NetWinPercPlayPosCard coachingHistory={coachingHistory} />
        <NetWinPosCard coachPosNetWins={positionDataResponse1} />
      </div>
    </div>
  );
};

export default Stats;
