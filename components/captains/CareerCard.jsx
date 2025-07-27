"use client";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import Badge from "./Badge";

const CareerCard = ({ activeCaptainData }) => {
  // console.log("Active Captain Data:", activeCaptainData);
  return (
    <Card className="h-48 w-full p-6 bg-transparent border-none">
      <div className="flex text-white -mb-5 gap-4 pl-2">
        <div>
          <Image
            src={activeCaptainData.image}
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
              {activeCaptainData.country}
            </div>
          </div>
          <div className="font-gobold flex gap-2 text-xl">
            <span className="text-captain-yellow">
              {activeCaptainData.position}
            </span>
            <span className="text-gray-200 ">
              {"  "}
              {activeCaptainData.experience} Years
            </span>
          </div>
          <div>
            <h2 className="font-gobold text-4xl italic">
              {activeCaptainData.name}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex gap-[2px] text-white px-2">
        <Badge
          text={"GRADE"}
          content={activeCaptainData.grade}
          lowerBg={"bg-captain-green"}
        />
        <Badge
          text={"RATING"}
          content={activeCaptainData.rating}
          lowerBg={"bg-captain-yellow"}
        />
        <Badge
          text={"SCORE"}
          content={activeCaptainData.score}
          lowerBg={"bg-captain-green"}
          trend="up"
        />
        <Badge
          text={"NET WIN %"}
          content={activeCaptainData.netWin}
          lowerBg={"bg-captain-yellow"}
        />
        <Badge
          text={"WINS"}
          content={activeCaptainData.wins}
          upperBg="bg-black"
          lowerBg={"bg-captain-green"}
          trend="up"
        />
        <Badge
          text={"LOSSES"}
          content={activeCaptainData.losses}
          upperBg="bg-black"
          lowerBg={"bg-captain-red"}
          trend="down"
        />
      </div>
    </Card>
  );
};

export default CareerCard;
