"use client";
import React from "react";
import Highlights from "@/components/captains/Highlights";
import Stats from "@/components/captains/Stats";
import RouteTabs from "@/components/layout/RouteTabs";
import { usePathname } from "next/navigation";
import SearchButton from "@/components/layout/SearchButton";
import { usePlayingData } from "@/hooks/usePlayingData";

export default function layout({ children }) {
  const pathname = usePathname();
  const { coachDataUnified, isLoading } = usePlayingData();
  /////////////////////////
  // console.log(coachDataResponse?.map((captain) => captain?.name));
  const tabs = coachDataUnified.map((coach) => ({
    name: coach?.name,
    slug: coach?.uid,
    id: coach?.birth_date, // Unique ID for each tab
  }));
  /////////////////////////
  const currentSlug = pathname.split("/")[2] || tabs[0].slug;
  const activeCoachData = coachDataUnified?.find(
    (coach) => coach?.uid === currentSlug
  );

  console.log("Active Coach Data:", activeCoachData);

  return (
    <div className="h-[880px] flex flex-col">
      {/* Tabs */}
      {isLoading || coachDataUnified.length === 0 ? (
        <div className="w-full h-screen p-2 flex justify-center text-2xl text-gray-500 items-center flex-col gap-4">
          <div className="loader"></div>
          <h2 className="font-gobold">Loading Data</h2>
        </div>
      ) : (
        <>
          <div className="flex-shrink-0 px-24 py-2 flex justify-between items-center">
            <RouteTabs tabs={tabs} active={currentSlug} />
            <SearchButton />
          </div>

          {/* Main content area */}
          <div className="flex flex-1 pl-22 pr-22 gap-8 drop-s overflow-hidden">
            <div className="flex-1">
              {" "}
              <Highlights activeCoachData={activeCoachData} />
            </div>
            <div className="flex-1">
              <Stats activeCoachData={activeCoachData} />
            </div>
          </div>
        </>
      )}

      {children}
    </div>
  );
}
