import React from "react";
import VerticalBarChart from "../graphs/VerticalBarChart";
import { usePlayingData } from "@/hooks/usePlayingData";

const NetWinYearCard = () => {
  const { winLossEight } = usePlayingData();
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
      <VerticalBarChart plotData={winLossEight} />
    </div>
  );
};

export default NetWinYearCard;
