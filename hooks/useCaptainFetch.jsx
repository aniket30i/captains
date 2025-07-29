import { useQuery } from "@tanstack/react-query";

export function useCaptainFetch() {
  return useQuery({
    queryKey: ["captains"],
    queryFn: async () => {
      const res = await fetch(
        "https://nextjs-interview-production.up.railway.app/"
      );
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
  });
}
