"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { XCircle } from "lucide-react";

export default function RouteTabs({ tabs, active }) {
  console.log("Tabs", tabs);
  console.log("Active Tab name:", active);
  return (
    <div className="flex gap-4">
      {tabs.map((tab) => (
        <Link href={`/captains/${tab.slug}`} key={tab.id}>
          <button
            className={cn(
              "relative p-[1px] rounded-sm w-36 cursor-pointer tab-shadow",
              active === tab.slug
                ? "bg-gradient-to-b from-[#AE853C] to-[#15191B]"
                : "bg-gradient-to-b from-[#707070] to-[#15191B]"
            )}
          >
            <span
              className={cn(
                "block bg-gray-900 px-2 py-[4px] rounded-sm font-gobold text-md uppercase",
                active === tab.slug ? "text-captain-yellow" : "text-[#707070]"
              )}
            >
              <p className="flex justify-center items-center gap-2">
                {tab.name}
                <XCircle className="w-3 h-3" />
              </p>
            </span>
          </button>
        </Link>
      ))}
    </div>
  );
}

// className={cn(
//   "bg-gray-900/70 font-gobold text-lg px-4 py-2 rounded-md hover:bg-captain-yellow/20 transition-colors duration-200 w-36",
//   active === tab.slug ? "text-captain-yellow" : "text-white"
// )}
