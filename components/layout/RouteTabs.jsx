"use client";
import Link from "next/link";

export default function RouteTabs({ tabs, active }) {
  return (
    <div className="flex gap-4">
      {tabs.map((tab) => (
        <Link
          key={tab}
          href={`/captains/${tab}`}
          className={`px-4 py-2 rounded ${
            active.toLowerCase() === tab.toLowerCase()
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </Link>
      ))}
    </div>
  );
}
