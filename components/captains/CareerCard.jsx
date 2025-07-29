"use client";
import React, { use } from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import Badge from "./Badge";
import { usePlayingData } from "@/hooks/usePlayingData";

const CareerCard = ({ activeCoachData }) => {
  return (
    <Card className="h-48 w-full p-6 bg-transparent border-none">
      <div className="flex text-white -mb-5 gap-4 w-96">
        <div className="h-[130px] w-[130px] overflow-clip rounded-sm">
          <Image
            src={
              activeCoachData?.photo_url || "/profile-picture/Coach-Avatar.png"
            }
            width={130}
            height={130}
            alt="profile-picture"
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <div className="w-28 flex bg-black">
            <div
              className={`border-b-6 w-1/2`}
              style={{
                borderColor:
                  activeCoachData?.team_details?.team_primary_color || "#000",
              }}
            >
              <Image
                src={
                  activeCoachData?.team_details?.team_logo ||
                  "/images/star-icon.png"
                }
                width={40}
                height={36}
                alt="star-icon"
              />
            </div>
            <div
              className={`border-b-6 px-2 font-gobold flex items-center text-xl w-1/2 justify-center`}
              style={{
                borderColor:
                  activeCoachData?.team_details?.team_secondary_color || "#000",
              }}
            >
              <p>{activeCoachData?.team_details?.team_code}</p>
            </div>
          </div>
          <div className="font-gobold flex gap-2 text-xl">
            <span className="text-captain-yellow">
              {activeCoachData?.coach_position}
            </span>
            <span className="text-gray-200 ">
              {"  "}
              {activeCoachData?.coach_position_exp} Years
            </span>
          </div>
          <div>
            <h2 className="font-gobold text-4xl italic">
              {activeCoachData?.name}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex gap-[2px] text-white ">
        <Badge
          text={"GRADE"}
          content={activeCoachData?.coach_score?.grade}
          lowerBg={"bg-captain-green"}
        />
        <Badge
          text={"RATING"}
          content={activeCoachData?.coach_score?.ratings?.toFixed(1)}
          lowerBg={"bg-captain-yellow"}
        />
        <Badge
          text={"SCORE"}
          content={activeCoachData?.coach_score?.score}
          lowerBg={"bg-captain-green"}
          trend="up"
        />
        <Badge
          text={"NET WIN %"}
          content={activeCoachData?.coach_score?.net_win?.toFixed(0) + "%"}
          lowerBg={"bg-captain-yellow"}
        />
        <Badge
          text={"WINS"}
          content={activeCoachData?.coach_score?.total_wins}
          upperBg="bg-black"
          lowerBg={"bg-captain-green"}
          trend="up"
        />
        <Badge
          text={"LOSSES"}
          content={activeCoachData?.coach_score?.total_losses}
          upperBg="bg-black"
          lowerBg={"bg-captain-red"}
          trend="down"
        />
      </div>
    </Card>
  );
};

export default CareerCard;
