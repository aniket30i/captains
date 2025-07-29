import { useMemo } from "react";
import { playingHistory } from "@/data/match-data";
import { useCaptainFetch } from "./useCaptainFetch";

export function usePlayingData() {
  const { data, error, isLoading } = useCaptainFetch();

  const coachingHistory = data?.coaching_history || [];

  const coachDataUnified = useMemo(() => {
    if (!data) return [];

    // If data is an array, map through it to extract coach objects
    if (Array.isArray(data)) {
      return data.map((coachObj) => ({
        ...coachObj.coach,
        coaching_history: coachObj.coaching_history,
        team_details: coachObj.team_details,
        coach_score: coachObj.coach_score,
      }));
    }
    // If data is a single object, return it as an array
    return [
      {
        ...data.coach,
        coaching_history: data.coaching_history,
        team_details: data.team_details,
        coach_score: data.coach_score,
      },
    ];
  }, [data]);

  return {
    coachingHistory,
    coachDataUnified,
    isLoading,
    error,
  };
}
