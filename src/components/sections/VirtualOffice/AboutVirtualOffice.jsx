import FeatureSection from "./../../element/FeatureSection";
import { Building2, Mail, HeartHandshake, BadgeCheck } from "lucide-react";
import React from "react";

const virtualOfficeFeatures = [
  { icon: Building2, title: "Prestigious Address" },
  { icon: Mail, title: "Mail Handling" },
  { icon: HeartHandshake, title: "Meeting Rooms" },
  { icon: BadgeCheck, title: "Professional Image" }
];

export default function AboutVirtualOffice() {
  return (
    <FeatureSection 
      badge="ABOUT VIRTUAL OFFICE"
      title="Professional Business Address Without the Cost"
      description="A Virtual Office allows businesses to establish a presence..."
      imageSrc="../public/img/VirtualOffice.jpg"
      statsValue="100+"
      statsLabel="Companies Trust Us"
      features={virtualOfficeFeatures}
    />
  );
}