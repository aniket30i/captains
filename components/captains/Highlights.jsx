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
import { usePlayingData } from "@/hooks/usePlayingData";

function formatLevel(level) {
  if (level === "International") return "INT";
  if (level === "Domestic") return "DOM";
  if (level === "Academy") return "ACA";
  if (level === "Youth International") return "YOI";
  return level;
}

const SkeletonRow = () => {
  return (
    <TableRow className="bg-black">
      {Array(5)
        .fill("")
        .map((_, i) => (
          <TableCell key={i} className="p-2">
            <div className="h-4 w-full bg-gray-700 animate-pulse rounded"></div>
          </TableCell>
        ))}
    </TableRow>
  );
};

const Highlights = ({ activeCoachData }) => {
  const { isLoading } = usePlayingData();
  const coachingHistory = activeCoachData?.coaching_history || [];

  return (
    <div className="h-full w-full backdrop-blur-sm rounded-xl flex flex-col bg-[#161A2566] content-shadow">
      <CareerCard activeCoachData={activeCoachData} />

      <div className="mt-5 px-6">
        <div className="bg-black h-12 flex justify-center items-center">
          <h3 className="font-gobold text-white">PLAYER HISTORY</h3>
        </div>

        <div className="h-[68%] overflow-y-scroll no-scrollbar">
          <Table className="w-full">
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

            <TableBody>
              {isLoading ? (
                Array(6)
                  .fill("")
                  .map((_, i) => <SkeletonRow key={i} />)
              ) : coachingHistory.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-gray-400">
                    No coaching history available.
                  </TableCell>
                </TableRow>
              ) : (
                coachingHistory.map((item, i) => (
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
                      {formatLevel(item.level)}
                    </TableCell>
                    <TableCell className="table-border-dsg">
                      {item.coach_position?.split("/")[0]}
                    </TableCell>
                    <TableCell className="table-border-dsg border-r-0">
                      {item.wins} - {item.losses}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
