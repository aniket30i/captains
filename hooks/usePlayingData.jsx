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

  return positionData;
}
