import React from "react";
import { cn } from "@/lib/utils";

const Badge = ({ text, content, upperBg = "", lowerBg, trend = "" }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full h-full",
        upperBg === "" ? "bg-stat-background" : upperBg
      )}
    >
      <div className=" text-xl font-semibold">
        <p className="flex justify-center items-center gap-2">
          {trend === "up" ? (
            <span className="text-xs text-captain-green flex items-center">
              &#9650;
            </span>
          ) : trend === "down" ? (
            <span className="text-xs text-captain-red flex items-center">
              &#9660;
            </span>
          ) : null}
          {content}
        </p>
      </div>
      <p
        className={cn(
          "font-gobold italic text-black w-full flex justify-center text-xs",
          lowerBg
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default Badge;
