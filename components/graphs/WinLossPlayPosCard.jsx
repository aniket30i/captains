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
  const positionalData = usePlayingData();
  const [plotData, setPlotData] = useState(positionalData["captain"]);
  console.log("Positional Data:", positionalData);

  let positions = Object.keys(positionalData);

  const handleSelect = (position) => {
    setSelectedPosition(position);

    setPlotData(positionalData[position]);
  };
  console.log("Data to be sent ->", plotData);
  return (
    <div className="p-2 backdrop-blur-md bg-gray-900/35 shadow-2xl rounded-xl flex flex-col">
      <p className="text-lg text-white font-gobold uppercase">
        Wins and loses by playing position
      </p>
      <p className="text-[#AE853C]">Player Position</p>
      <div className="w-full flex justify-start">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="bg-transparent px-4 py-2 rounded-md shadow-md shadow-black/50 hover:shadow-lg hover:shadow-black/70 w-1/2 flex justify-between items-center">
              <p className="text-[#FAC515] font-gobold text-xl uppercase">
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
      <PieChart plotData={plotData} />
    </div>
  );
};

export default WinLossPlayPosCard;
