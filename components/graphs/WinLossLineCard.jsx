import React from "react";
import LineChart from "../graphs/Linechart";

const WinLossLineCard = () => {
  return (
    <div className="p-2 backdrop-blur-md bg-[#161A2566] rounded-xl content-shadow">
      <p className="text-lg text-white font-gobold uppercase">
        Win and losses by year
      </p>
      <div className="flex gap-4 font-gobold text-white text-sm">
        <p>
          <span className="text-2xl text-captain-yellow">&#9679;</span> win
        </p>
        <p>
          <span className="text-2xl text-captain-red">&#9679;</span> losses
        </p>
      </div>
      <LineChart />
    </div>
  );
};

export default WinLossLineCard;
