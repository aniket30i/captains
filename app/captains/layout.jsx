"use client";
import React from "react";
import Highlights from "@/components/captains/Highlights";
import Stats from "@/components/captains/Stats";
import RouteTabs from "@/components/layout/RouteTabs";
import { captainData } from "@/data/captain-data";
import { usePathname } from "next/navigation";
import SearchButton from "@/components/layout/SearchButton";

function generateSlug(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}
const tabs = captainData.map((captain) => ({
  name: captain.name,
  slug: generateSlug(captain.name),
  id: Date.now() + Math.random().toString(36).substring(2, 15), // Unique ID for each tab
}));
console.log("tabs -> ", tabs);

export default function layout({ children }) {
  const pathname = usePathname();
  const currentSlug = pathname.split("/")[2] || tabs[0].slug;
  const activeCaptainData = captainData.find(
    (captain) => generateSlug(captain.name) === currentSlug
  );
  return (
    <div className="h-[880px] flex flex-col">
      {/* Tabs */}
      <div className="flex-shrink-0 px-24 py-2 flex justify-between items-center">
        <RouteTabs tabs={tabs} active={currentSlug} />
        <SearchButton />
      </div>

      {/* Main content area */}
      <div className="flex flex-1 pl-22 pr-22 gap-8 drop-s overflow-hidden">
        <div className="flex-1">
          {" "}
          <Highlights activeCaptainData={activeCaptainData} />
        </div>
        <div className="flex-1">
          <Stats activeCaptainData={activeCaptainData} />
        </div>
      </div>

      {children}
    </div>
  );
}
