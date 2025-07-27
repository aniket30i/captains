import React from "react";
import MixedChart from "../graphs/MixedChart";

const NetWinPercPlayPosCard = () => {
  return (
    <div className="p-2 backdrop-blur-md bg-[#161A2566] content-shadow rounded-xl flex flex-col">
      <p className="text-lg text-white font-gobold uppercase p-2 mb-2">
        Net win % by playing position
      </p>
      <MixedChart />
    </div>
  );
};

export default NetWinPercPlayPosCard;
