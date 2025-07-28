import React from "react";
import CareerCard from "./CareerCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { playingHistory } from "@/data/match-data";

const Highlights = ({ activeCaptainData }) => {
  return (
    <div className="h-full w-full backdrop-blur-sm rounded-xl flex flex-col bg-[#161A2566] content-shadow">
      <CareerCard activeCaptainData={activeCaptainData} />

      <div className="mt-5 px-6">
        <div className="bg-black h-12 flex justify-center items-center">
          <h3 className="font-gobold text-white">PLAYER HISTORY</h3>
        </div>

        {/* Scrollable Table */}
        <div className="h-[68%] overflow-y-scroll no-scrollbar">
          <Table className="w-full">
            {/* Table Header */}
            <TableHeader className="sticky top-0 z-10">
              <TableRow className="bg-captain-yellow text-black font-gobold italic text-sm uppercase">
                <TableHead className="p-1 text-center border-black border-2">
                  Year
                </TableHead>
                <TableHead className="p-1 text-center border-black border-2">
                  Team
                </TableHead>
                <TableHead className="p-1 text-center border-black border-2">
                  Level
                </TableHead>
                <TableHead className="p-1 text-center border-black border-2">
                  Player Position
                </TableHead>
                <TableHead className="p-1 text-center border-black border-2 border-r-0">
                  Record
                </TableHead>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody>
              {playingHistory.map((item, i) => (
                <TableRow
                  key={item.year}
                  className={`${
                    i % 2 === 0 ? "bg-black" : "bg-[#141619]"
                  } text-white font-gobold text-sm`}
                >
                  <TableCell className="table-border-dsg border-l-0">
                    {item.year}
                  </TableCell>
                  <TableCell className="table-border-dsg">
                    {item.team}
                  </TableCell>
                  <TableCell className="table-border-dsg">
                    {item.level}
                  </TableCell>
                  <TableCell className="table-border-dsg">
                    {item.playerPosition}
                  </TableCell>
                  <TableCell className="table-border-dsg border-r-0">
                    {item.record}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
