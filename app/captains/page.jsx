"use client";
import { usePlayingData } from "@/hooks/usePlayingData";
import { redirect } from "next/navigation";

export default function CaptainsPage() {
  const { coachDataUnified, isLoading } = usePlayingData();

  if (!isLoading && coachDataUnified.length > 0) {
    const firstCaptainSlug = coachDataUnified.uid;
    redirect(`/captains/${firstCaptainSlug}`);
  }
}
