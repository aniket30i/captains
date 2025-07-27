import React from "react";
import MixedChart from "../graphs/MixedChart";

const NetWinPercPlayPosCard = () => {
  return (
    <div className="p-2 backdrop-blur-md bg-gray-900/35 shadow-2xl rounded-xl flex flex-col">
      <p className="text-lg text-white font-gobold uppercase p-2 mb-2">
        Net win % by playing position
      </p>
      <MixedChart />
    </div>
  );
};

export default NetWinPercPlayPosCard;
