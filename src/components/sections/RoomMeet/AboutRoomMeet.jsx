import FeatureSection from "./../../element/FeatureSection";
import { Building2, Mail, HeartHandshake, BadgeCheck } from "lucide-react";
import React from "react";

const RoomMeetFeatures = [
  { icon: Building2, title: "Prestigious Address" },
  { icon: Mail, title: "Mail Handling" },
  { icon: HeartHandshake, title: "Meeting Rooms" },
  { icon: BadgeCheck, title: "Professional Image" }
];

export default function AboutRoomMeet() {
  return (
    <FeatureSection 
      badge="TENTANG RUANG PERTEMUAN"
      title="Ruang Meeting Eksekutif di Lokasi Strategis"
      description="Bangun kredibilitas bisnis Anda dengan ruang pertemuan yang prestisius. Berlokasi di pusat bisnis utama, ruang meeting kami hadir dengan fasilitas premium untuk memastikan setiap diskusi Anda berjalan lancar, produktif, dan berkesan profesional."
      imageSrc="../public/img/RuangMeeting.jpg"
      statsValue="100+"
      statsLabel="Companies Trust Us"
      features={RoomMeetFeatures}
    />
  );
}