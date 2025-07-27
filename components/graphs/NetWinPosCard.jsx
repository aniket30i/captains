import React from "react";
import BarChartTwo from "../graphs/BarChartTwo";
import { usePlayingData } from "@/hooks/usePlayingData";
const NetWinPosCard = () => {
  const { positionData } = usePlayingData();
  return (
    <div className="p-2 backdrop-blur-md bg-[#161A2566] content-shadow rounded-xl flex flex-col gap-2">
      <p className="text-lg text-white font-gobold uppercase p-2">
        Net win by playing position
      </p>
      <BarChartTwo plotData={positionData} />
    </div>
  );
};

export default NetWinPosCard;
