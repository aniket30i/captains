import React, { useMemo } from "react";
import MixedChart from "../graphs/MixedChart";
import { usePlayingData } from "@/hooks/usePlayingData";
import {
  getTopExperience,
  getTopPositionsByWins,
} from "@/helpers/helperFuntions";

const NetWinPercPlayPosCard = ({ coachingHistory }) => {
  const coachHistory = coachingHistory || [];

  console.log("Coach percentage data", coachHistory);

  const positionData1 = useMemo(() => {
    return coachHistory.reduce((acc, { coach_position, wins, losses }) => {
      const key = coach_position?.toLowerCase();

      if (!acc[key]) {
        acc[key] = { wins: 0, losses: 0 };
      }

      acc[key].wins += wins;
      acc[key].losses += losses;

      return acc;
    }, {});
  }, [coachHistory]);

  const posDuration = useMemo(() => {
    return coachHistory.reduce((acc, { coach_position, year }) => {
      const key = coach_position?.toLowerCase();
      if (!acc[key]) {
        acc[key] = new Set();
      }
      acc[key].add(year);
      return acc;
    }, {});
  }, [coachHistory]);

  // To convert sets to counts:
  const durationCounts = Object.fromEntries(
    Object.entries(posDuration).map(([pos, yearsSet]) => [pos, yearsSet.size])
  );
  const experienceByPos1 = durationCounts;
  console.log("experience data", experienceByPos1);
  console.log("mixed plot data", positionData1);
  const top4positions = getTopPositionsByWins(positionData1);
  const top4exp = getTopExperience(experienceByPos1);

  console.log("top data for win percentage", top4positions);

  return (
    <div className="p-[2px] backdrop-blur-md bg-[#161A2566] content-shadow rounded-xl flex flex-col">
      <p className="text-lg text-white font-gobold uppercase p-2 mb-2">
        Net win % by playing position
      </p>
      <MixedChart plotData={top4positions} secondaryData={top4exp} />
    </div>
  );
};

export default NetWinPercPlayPosCard;
