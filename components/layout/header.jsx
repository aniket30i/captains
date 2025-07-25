"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";

const navItems = [
  { name: "DASHBOARD", href: "/" },
  { name: "CAPTAINS", href: "/captains" },
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT US", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 bg-navbar-bg p-4 shadow justify-between px-8">
      <Link href={"/"}>
        <Image
          src={"/logos/branding.png"}
          width={150}
          height={150}
          alt="branding logo"
        />
      </Link>
      <div className="flex gap-6 p-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-md font-medium transition-colors hover:text-primary",
              pathname === item.href ? "text-primary" : "text-muted-foreground"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex ">
        {/* <Image
          src={"/icons/AI-Button.png"}
          width={50}
          height={1}
          alt="AI Icon"
        /> */}
        <div className="flex gap-[12px]">
          <Avatar className="w-[40px] h-[40px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <div className="">
            <p className="text-white">Ethan Dev</p>
            <p className="text-gray-600">Admin</p>
          </div>
          {/* <Image
            height={10}
            width={10}
            src={"/icons/chevron-down.png"}
            className="bg-white"
          /> */}
        </div>
      </div>
    </nav>
  );
}
