import Highlights from "@/components/captains/Highlights";
import Stats from "@/components/captains/Stats";
import SearchTabs from "@/components/layout/SearchTabs";
import React from "react";
const CaptainsPage = () => {
  return (
    <div className="h-[850px] flex flex-col">
      {/* Top Search Tabs Section */}
      <div className="flex-shrink-0">
        <SearchTabs />
      </div>

      {/* Highlights + Stats */}
      <div className="flex flex-1 pl-24 pr-24 gap-6 drop-s overflow-hidden">
        <Highlights />
        <Stats />
      </div>
    </div>
  );
};

export default CaptainsPage;
