"use client";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import Badge from "./Badge";

const captainData = [
  {
    name: "NOAH TECHIE",
    position: "CAPTAIN",
    experience: "4",
    country: "IN",
    grade: "B-",
    rating: "89.2",
    score: "621+",
    netWin: "54%",
    wins: "184",
    losses: "30",
    image: "/profile-picture/Coach-Avatar.png",
  },
];
const CareerCard = () => {
  return (
    <Card className="h-48 w-full p-6 bg-transparent border-none">
      <div className="flex text-white -mb-5 gap-4 pl-2">
        <div>
          <Image
            src={captainData[0].image}
            width={130}
            height={130}
            alt="profile-picture"
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <div className="w-[55%] flex bg-black">
            <div className="border-b-6 border-badge-blue w-[60%]">
              <Image
                src={"/icons/star-icon.png"}
                width={40}
                height={36}
                alt="star-icon"
              />
            </div>
            <div className="border-b-6 border-gray-600 px-2 font-gobold flex items-center text-xl w-[40%]">
              {captainData[0].country}
            </div>
          </div>
          <div className="font-gobold flex gap-2 text-xl">
            <span className="text-captain-yellow">
              {captainData[0].position}
            </span>
            <span className="text-gray-200 ">
              {"  "}
              {captainData[0].experience} Years
            </span>
          </div>
          <div>
            <h2 className="font-gobold text-4xl italic">
              {captainData[0].name}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex gap-[2px] text-white px-2">
        <Badge
          text={"GRADE"}
          content={captainData[0].grade}
          lowerBg={"bg-captain-green"}
        />
        <Badge
          text={"RATING"}
          content={captainData[0].rating}
          lowerBg={"bg-captain-yellow"}
        />
        <Badge
          text={"SCORE"}
          content={captainData[0].score}
          lowerBg={"bg-captain-green"}
          trend="up"
        />
        <Badge
          text={"NET WIN %"}
          content={captainData[0].netWin}
          lowerBg={"bg-captain-yellow"}
        />
        <Badge
          text={"WINS"}
          content={captainData[0].wins}
          upperBg="bg-black"
          lowerBg={"bg-captain-green"}
          trend="up"
        />
        <Badge
          text={"LOSSES"}
          content={captainData[0].losses}
          upperBg="bg-black"
          lowerBg={"bg-captain-red"}
          trend="down"
        />
      </div>
    </Card>
  );
};

export default CareerCard;
