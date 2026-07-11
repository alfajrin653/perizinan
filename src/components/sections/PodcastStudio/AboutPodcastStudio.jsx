import FeatureSection from "../../element/FeatureSection";
import { Mic, Mic2, MonitorPlay, } from "lucide-react";
import React from "react";

const podcastFeatures = [
  { icon: Mic, title: "Professional Mics" },
  { icon: Mic2, title: "Soundproof Room" },
  { icon: MonitorPlay, title: "Video Recording" },
//   { icon: Headset, title: "Audio Mixing" },
];

export default function AboutPodcastStudio() {
  return (
    <FeatureSection 
      badge="PODCAST STUDIO"
      title="Record Your Professional Podcast with Ease"
      description="Create high-quality audio and video content in our fully-equipped podcast studio. Designed for creators who need professional soundproofing, top-tier microphones, and a comfortable atmosphere to bring their ideas to life."
      imageSrc="../public/img/podcastStudio.jpg"
      statsValue="Pro"
      statsLabel="Studio Equipment"
      features={podcastFeatures}
      buttonText="Choose Plan"  // <-- Teks tombol yang diminta
      buttonLink="/pricing-podcast" // <-- Sesuaikan dengan link tujuan
    />
  );
}