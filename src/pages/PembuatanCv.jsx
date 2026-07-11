import React from "react";
// Pastikan path import disesuaikan dengan struktur folder Anda
import FeatureSection from "../components/element/FeatureSection"; 
import CompanyPackageCard from "../components/element/PricingPembuatan";
// Asumsi: ProcessTimeline dan Requirements sudah di-update menerima props
import ProcessTimeline from "../components/element/Proses"; 
import Persyaratan from "../components/sections/pembuatanPt/Persyaratan";
// import Requirements from "../components/element/Requirements"; 

import { 
  Clock, Wallet, Building, Scale, 
  Search, FileSignature, Briefcase, CreditCard,
  IdCard, FileText, Image as ImageIcon, MapPin, Users
} from "lucide-react";
// import Persyaratan from "../components/sections/pembuatanPt/Persyaratan";

export default function PendirianCV() {
  
  // ==========================================
  // 1. DATA HERO SECTION (CV)
  // ==========================================
  const cvHeroFeatures = [
    { icon: Clock, title: "Proses Lebih Cepat" },
    { icon: Wallet, title: "Biaya Lebih Terjangkau" },
    { icon: Building, title: "Gratis Virtual Office" },
    { icon: Scale, title: "Pendampingan Legalitas" },
  ];

  // ==========================================
  // 2. DATA PROSES PENDIRIAN (CV)
  // ==========================================
  const cvSteps = [
    {
      id: 1,
      icon: Search,
      title: "Pengecekan Nama CV",
      desc: "Mengecek dan mendaftarkan nama CV Anda di Sistem Administrasi Badan Usaha (SABU) Kemenkumham.",
    },
    {
      id: 2,
      icon: FileSignature,
      title: "Penandatanganan Akta Notaris",
      desc: "Pembuatan Akta Pendirian CV yang ditandatangani oleh Sekutu Aktif (Direktur) dan Sekutu Pasif (Komanditer).",
    },
    {
      id: 3,
      icon: Scale,
      title: "Pendaftaran Kemenkumham",
      desc: "Akta didaftarkan ke Kemenkumham untuk mendapatkan Surat Keterangan Terdaftar (SKT) sebagai legalitas resmi CV.",
    },
    {
      id: 4,
      icon: Briefcase,
      title: "Pengurusan NIB (OSS)",
      desc: "Mendaftarkan CV di sistem OSS untuk mendapatkan Nomor Induk Berusaha (NIB) sebagai izin operasional.",
    },
    {
      id: 5,
      icon: CreditCard,
      title: "Pendaftaran NPWP CV",
      desc: "Pembuatan Nomor Pokok Wajib Pajak (NPWP) dan Surat Keterangan Terdaftar (SKT) di KPP domisili.",
    },
  ];

 

  // ==========================================
  // 4. DATA PAKET HARGA (CV)
  // ==========================================
  const cvPackages = [
    {
      title: "CV + Virtual Office Basic",
      price: "Rp 3.500.000",
      badge: "STARTER",
      featured: false,
      features: [
        "Pengecekan Nama CV",
        "Akta Pendirian Notaris",
        "SK Terdaftar Kemenkumham",
        "NIB & Sertifikat Standar",
        "NPWP & SKT Perusahaan",
        
      ],
      bonuses: [
        "Virtual Office (1 Tahun)",
        "Layanan Penerimaan Surat",
      ],
    },
    {
      title: "CV + Virtual Office Premium",
      price: "Rp 5.500.000",
      badge: "TERLARIS",
      featured: true,
      features: [
        "Semua kelengkapan legalitas CV",
        "Layanan Resepsionis Profesional",
        "Bantuan Pembukaan Rekening Bank",
        "Virtual Office Premium (1 Tahun)",
        "Nomor Telepon Perusahaan Bersama",
        "Kuota Meeting Room (10 Jam/Bulan)",
      ],
      bonuses: [
        "Virtual Office Premium (1 Tahun)",
        "Nomor Telepon Perusahaan Bersama",
        "Kuota Meeting Room (10 Jam/Bulan)",
      ],
    },
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO SECTION */}
      <FeatureSection 
        badge="LEGALITAS BISNIS"
        title="Jasa Pendirian CV Mudah, Cepat & Hemat"
        description="Solusi legalitas yang tepat untuk usaha menengah dan berkembang. Dirikan CV Anda dengan proses yang lebih sederhana dan biaya yang lebih terjangkau, sudah termasuk fasilitas Virtual Office."
        imageSrc="/images/pendirian-cv.jpg" // Ganti dengan gambar CV Anda
        statsValue="100%"
        statsLabel="Legal & Terdaftar Kemenkumham"
        features={cvHeroFeatures}
        buttonText="Konsultasi Gratis"
        buttonLink="/konsultasi"
      />


      {/* 2. PROSES PENDIRIAN */}
      {/* Asumsi: Anda sudah modif ProcessTimeline agar menerima props `steps={cvSteps}` */}
      <ProcessTimeline 
        title="Proses Pendirian CV di Indonesia"
        subtitle="Lebih cepat dari PT. Duduk tenang, biarkan kami yang mengurus legalitasnya."
        steps={cvSteps} 
      />

      {/* 4. PRICING SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Pilih Paket Pendirian CV Anda
            </h2>
            <p className="text-slate-600">
              Biaya transparan, proses aman. Pilih paket hemat atau paket premium dengan fasilitas ruang meeting bulanan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {cvPackages.map((pkg, index) => (
              <CompanyPackageCard
                key={index}
                name={pkg.title}
                price={pkg.price}
                badge={pkg.badge}
                featured={pkg.featured}
                features={pkg.features}
                bonuses={pkg.bonuses}
                buttonText="Pilih Paket"
                buttonLink="/pendirian-cv"
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}