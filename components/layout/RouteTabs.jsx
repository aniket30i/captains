"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function RouteTabs({ tabs, active }) {
  console.log("Tabs", tabs);
  console.log("Active Tab name:", active);
  return (
    <div className="flex gap-4">
      {tabs.map((tab) => (
        <Link
          href={`/captains/${tab.slug}`}
          className={cn(
            "bg-gray-900/70 font-gobold text-lg px-4 py-2 rounded-md hover:bg-captain-yellow/20 transition-colors duration-200 w-36",
            active === tab.slug ? "text-captain-yellow" : "text-white"
          )}
          key={tab.id}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}
