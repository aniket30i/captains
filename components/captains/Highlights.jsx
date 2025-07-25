import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

const captainData = [
  {
    name: "NOAH TECHIE",
    position: "CAPTAIN",
    experience: "4",
    country: "IN",
    grade: "B-",
    rating: "89.2",
    score: "621+",
    netWin: "54",
    wins: "184",
    losses: "30",
    image: "/profile-picture/Coach-Avatar.png",
  },
];

const Highlights = () => {
  return (
    <div className="h-[100%] w-full backdrop-blur-sm bg-transparent shadow-2xl">
      <Card className="h-48 w-full p-2 bg-transparent">
        <div className="flex text-white">
          <div>
            <Image src={captainData[0].image} width={130} height={130} />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <div className="w-[55%] flex bg-black">
              <div className="border-b-6 border-badge-blue w-[60%]">
                <Image src={"/icons/star-icon.png"} width={40} height={36} />
              </div>
              <div className="border-b-6 border-gray-600 px-2 font-gobold flex items-center text-xl">
                {captainData[0].country}
              </div>
            </div>
            <div className="font-gobold flex gap-2">
              <span className="text-captain-yellow">
                {captainData[0].position}
              </span>
              <span className="text-gray-200 ">
                {"  "}
                {captainData[0].experience} Years
              </span>
            </div>
            <div>
              <h2 className="font-gobold text-3xl italic">
                {captainData[0].name}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex gap-1 text-white">
          <div>grade</div>
          <div>rating</div>
          <div>score</div>
          <div>net win%</div>
          <div>wins</div>
          <div>losses</div>
        </div>
      </Card>
    </div>
  );
};

export default Highlights;
