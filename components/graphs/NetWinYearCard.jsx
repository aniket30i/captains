import React, { useMemo } from "react";
import VerticalBarChart from "../graphs/VerticalBarChart";
import { usePlayingData } from "@/hooks/usePlayingData";

const NetWinYearCard = ({ coachingHistory }) => {
  const { isLoading } = usePlayingData();
  const coachHistory = coachingHistory || [];

  const winLossEight1 = useMemo(() => {
    if (!coachHistory || coachHistory.length === 0) return [];
    const data = coachHistory.reduce((acc, { year, wins, losses }) => {
      if (year >= 2017 && year <= 2024) {
        if (!acc[year]) {
          acc[year] = { wins: 0, losses: 0 };
        }
        acc[year].wins += wins;
        acc[year].losses += losses;
      }
      return acc;
    }, {});

    return Object.entries(data).map(([year, stats]) => ({
      year: Number(year),
      ...stats,
    }));
  }, [coachHistory]);
  console.log("Coach history for vert bar:", winLossEight1);
  return (
    <div className="p-2 backdrop-blur-md bg-[#161A2566] content-shadow rounded-xl flex flex-col">
      <p className="text-lg text-white font-gobold uppercase p-2">
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
      {isLoading || coachHistory.length === 0 ? (
        <p>Creating graph</p>
      ) : (
        <VerticalBarChart plotData={winLossEight1} />
      )}
    </div>
  );
};

export default NetWinYearCard;
