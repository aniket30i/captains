import React from "react";
import BarChartTwo from "../graphs/BarChartTwo";
import { usePlayingData } from "@/hooks/usePlayingData";
import { getTopPositionsByWins } from "@/helpers/helperFuntions";
const NetWinPosCard = ({ coachPosNetWins }) => {
  const top4Positions = getTopPositionsByWins(coachPosNetWins);
  console.log(top4Positions);

  const { isLoading } = usePlayingData();

  return (
    <div className="p-[2px] backdrop-blur-md bg-[#161A2566] content-shadow rounded-xl flex flex-col gap-2">
      <p className="text-lg text-white font-gobold uppercase p-2">
        Net win by playing position
      </p>
      {isLoading || top4Positions.length === 0 ? (
        <p>Loading graph</p>
      ) : (
        <BarChartTwo plotData={top4Positions} />
      )}
    </div>
  );
};

export default NetWinPosCard;
