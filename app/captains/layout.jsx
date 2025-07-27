"use client";
import React from "react";
import Highlights from "@/components/captains/Highlights";
import Stats from "@/components/captains/Stats";
import RouteTabs from "@/components/layout/RouteTabs";
import { captainData } from "@/data/captain-data";
import { usePathname } from "next/navigation";

const tabs = Object.keys(captainData);

export default function layout({ children }) {
  const pathname = usePathname();
  const activeTab = pathname.split("/")[2] || tabs[0];
  const activeCaptainData =
    captainData[activeTab.toUpperCase()] || captainData[tabs[0]];
  return (
    <div className="h-[880px] flex flex-col">
      {/* Tabs */}
      <div className="flex-shrink-0">
        <RouteTabs tabs={tabs} active={activeTab} />
      </div>

      {/* Main content area */}
      <div className="flex flex-1 pl-24 pr-24 gap-6 drop-s overflow-hidden">
        <Highlights activeCaptainData={activeCaptainData} />
        <Stats activeCaptainData={activeCaptainData} />
      </div>

      {children}
    </div>
  );
}
