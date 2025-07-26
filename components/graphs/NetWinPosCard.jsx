import React from "react";
import BarChartTwo from "../graphs/BarChartTwo";
const NetWinPosCard = () => {
  return (
    <div className="p-2 backdrop-blur-md bg-gray-900/35 shadow-2xl rounded-xl flex flex-col gap-4">
      <p className="text-lg text-white font-gobold uppercase">
        Net win by playing position
      </p>
      <BarChartTwo />
    </div>
  );
};

export default NetWinPosCard;
