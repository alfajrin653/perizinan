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
  badge="TENTANG VIRTUAL OFFICE"
  title="Bangun Citra Bisnis Profesional dengan Virtual Office"
  description="Virtual Office merupakan solusi ideal bagi perusahaan yang membutuhkan alamat bisnis resmi, legal, dan bergengsi tanpa harus menanggung biaya operasional kantor fisik. Layanan ini memberikan kemudahan dalam pengurusan legalitas usaha, penerimaan surat dan dokumen, layanan resepsionis profesional, serta akses ke ruang meeting dan berbagai fasilitas pendukung bisnis. Dengan Virtual Office, Anda dapat menjalankan bisnis secara fleksibel dari mana saja sambil tetap menjaga kepercayaan klien, investor, maupun mitra usaha."
  imageSrc="../public/img/VirtualOffice.jpg"
  statsValue="100+"
  statsLabel="Perusahaan Memilih Layanan Kami"
  features={virtualOfficeFeatures}
/>
  );
}