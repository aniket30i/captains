import React, { useState } from "react";
import PieChart from "../graphs/PieChart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { usePlayingData } from "@/hooks/usePlayingData";

const WinLossPlayPosCard = () => {
  const [selectedPosition, setSelectedPosition] = useState("captain");
  const { positionData } = usePlayingData();
  const [plotData, setPlotData] = useState(positionData["captain"]);
  // console.log("Positional Data:", positionData);

  let positions = Object.keys(positionData);

  const handleSelect = (position) => {
    setSelectedPosition(position);

    setPlotData(positionData[position]);
  };
  // console.log("Data to be sent ->", plotData);
  return (
    <div className="p-2 backdrop-blur-md bg-[#161A2566] content-shadow rounded-xl flex flex-col">
      <p className="text-lg text-white font-gobold uppercase pb-4 p-2">
        Wins and loses by playing position
      </p>
      <p className="text-[#AE853C] font-gobold text-sm px-2">Player Position</p>
      <div className="w-full flex justify-start mb-3 px-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="bg-transparent px-4 py-1 rounded-md shadow-md shadow-black/50 hover:shadow-lg hover:shadow-black/70 w-1/2 flex justify-between items-center">
              <p className="text-[#FAC515] font-gobold text-lg uppercase">
                {selectedPosition}
              </p>
              <p className="text-[#FAC515]">&#9660;</p>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-black text-[#ddd] font-gobold text-lg rounded-md p-2 shadow-lg shadow-black/70">
            <DropdownMenuLabel className="text-sm text-gray-400">
              Select Position
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-700" />
            {positions.map((position) => (
              <DropdownMenuItem
                className=" hover:text-[#FAC515] cursor-pointer rounded-md px-2 py-1"
                onClick={() => handleSelect(position)}
                key={position}
              >
                <p>{position}</p>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-8 justify-center">
        <PieChart plotData={plotData} />
        <div className="flex flex-col gap-1 font-gobold text-white text-md">
          <p>
            <span className="text-2xl text-[#FAC515]">&#9679;</span> win
          </p>
          <p>
            <span className="text-2xl text-[#FF0048]">&#9679;</span> losses
          </p>
        </div>
      </div>
    </div>
  );
};

export default WinLossPlayPosCard;
