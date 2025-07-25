import Highlights from "@/components/captains/Highlights";
import Stats from "@/components/captains/Stats";
import SearchTabs from "@/components/layout/SearchTabs";
import React from "react";

const CaptainsPage = () => {
  return (
    <div className="h-[800px]">
      <SearchTabs />
      <div className="flex pl-10 pr-10 h-full gap-6 drop-s">
        <Highlights />
        <Stats />
      </div>
    </div>
  );
};

export default CaptainsPage;
