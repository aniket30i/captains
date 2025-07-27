import { useMemo } from "react";
import { playingHistory } from "@/data/match-data";

export function usePlayingData() {
  const positionData = useMemo(() => {
    return playingHistory.reduce((acc, { playerPosition, record }) => {
      const key = playerPosition.toLowerCase();
      const [wins, losses] = record.split("-").map(Number);

      if (!acc[key]) {
        acc[key] = { wins: 0, losses: 0 };
      }

      acc[key].wins += wins;
      acc[key].losses += losses;

      return acc;
    }, {});
  }, []);

  const winLossEight = useMemo(() => {
    return playingHistory.reduce((acc, { year, record }) => {
      if (year >= 2017 && year <= 2024) {
        const [wins, losses] = record.split("-").map(Number);
        if (!acc[year]) {
          acc[year] = { wins: 0, losses: 0 };
        }
        acc[year].wins += wins;
        acc[year].losses += losses;
      }
      return acc;
    }, {});
  }, []);

  const winLossSixteen = useMemo(() => {
    return playingHistory.reduce((acc, { year, record }) => {
      if (year >= 2009 && year <= 2024) {
        const [wins, losses] = record.split("-").map(Number);
        if (!acc[year]) {
          acc[year] = { wins: 0, losses: 0 };
        }
        acc[year].wins += wins;
        acc[year].losses += losses;
      }
      return acc;
    }, {});
  }, []);

  const posDuration = useMemo(() => {
    return playingHistory.reduce((acc, { playerPosition, year }) => {
      const key = playerPosition.toLowerCase();
      if (!acc[key]) {
        acc[key] = new Set();
      }
      acc[key].add(year);
      return acc;
    }, {});
  }, [playingHistory]);

  // To convert sets to counts:
  const durationCounts = Object.fromEntries(
    Object.entries(posDuration).map(([pos, yearsSet]) => [pos, yearsSet.size])
  );
  const experienceByPos = JSON.parse(JSON.stringify(durationCounts));

  return { positionData, winLossEight, winLossSixteen, experienceByPos };
}
