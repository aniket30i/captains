import Highlights from "@/components/captains/Highlights";
import Stats from "@/components/captains/Stats";
import SearchTabs from "@/components/layout/SearchTabs";
import React from "react";
const CaptainsPage = () => {
  return (
    <div className="h-[880px] flex flex-col">
      <div className="flex-shrink-0">
        <SearchTabs />
      </div>

      <div className="flex flex-1 pl-24 pr-24 gap-6 drop-s overflow-hidden">
        <Highlights />
        <Stats />
      </div>
    </div>
  );
};

export default CaptainsPage;
