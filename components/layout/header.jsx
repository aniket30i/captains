"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "DASHBOARD", href: "/" },
  { name: "CAPTAINS", href: "/captains" },
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT US", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

const userDrop = ["Profile", "Settings", "Logout"];

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="flex gap-6 bg-none p-2 justify-between px-42 items-center relative">
      {/* Branding */}
      <Link href={"/"}>
        <Image
          src={"/logos/branding.png"}
          width={180}
          height={180}
          alt="branding logo"
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6 p-4 font-gobold">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[16px] font-medium transition-colors hover:text-captain-yellow",
                isActive ? "text-captain-yellow" : "text-muted-foreground"
              )}
            >
              <span
                className={cn(
                  "px-2 py-2",
                  isActive ? "border-b-1 border-captain-yellow" : ""
                )}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* User Dropdown */}
      <div className="flex select-none">
        <div className="flex gap-[12px]">
          <div className="border-1 border-captain-yellow rounded-full w-[40px] h-[40px] overflow-clip">
            <Image
              src={"/icons/ai-button.svg"}
              width={5}
              height={5}
              alt="AI Icon"
              className="w-[36px] h-[38px] duration-200 hover:cursor-pointer hover:bg-white/20 p-1.5 ml-[1px]"
            />
          </div>
          <Avatar className="w-[40px] h-[40px]">
            <AvatarImage src="/profile-picture/Coach-Photo.png" alt="@shadcn" />
          </Avatar>
          <div>
            <p className="text-white text-[16px]">Ethan Dev</p>
            <p className="text-gray-600 text-md">Admin</p>
          </div>
          <ChevronDown
            className="text-white w-4 h-4 mt-2 hover:bg-white/20"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="absolute right-25 top-10 text-gray-400 bg-navbar-bg shadow-lg rounded-md p-2 z-50 select-none cursor-pointer border-1 border-gray-800 h-24 w-28">
              <ul>
                {userDrop.map((item) => (
                  <li key={item} className="hover:text-gray-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
