import React from "react";
// Pastikan path import disesuaikan dengan struktur folder Anda
import FeatureSection from "../components/element/FeatureSection"; 
import CompanyPackageCard from "../components/element/PricingPembuatan"; 
import { Clock, FileText, Building, Landmark } from "lucide-react";
import Proses from "../components/sections/pembuatanPt/Proses"; // Pastikan path import disesuaikan dengan struktur folder Anda
import Persyaratan from "../components/sections/pembuatanPt/Persyaratan";
import FaqPt from "../components/sections/pembuatanPt/FaqPt"; // Pastikan path import disesuaikan dengan struktur folder Anda

// 1. Data untuk FeatureSection (Hero)
const ptFeatures = [
  { icon: Clock, title: "Proses Cepat & Transparan" },
  { icon: FileText, title: "Dokumen Legal Lengkap" },
  { icon: Building, title: "Gratis Virtual Office" },
  { icon: Landmark, title: "Bantuan Buka Rekening" },
];

// 2. Data untuk CompanyPackageCard (Pricing)
const ptPackages = [
  {
    title: "PT + Virtual Office Basic",
    price: "Rp 4.900.000",
    badge: "STARTER",
    featured: false,
    features: [
      "Pengecekan & Pemesanan Nama PT",
      "Akta Pendirian Notaris",
      "SK Pengesahan Kemenkumham",
      "NIB & Sertifikat Standar",
      "NPWP & SKT Perusahaan",
    ],
    bonuses: [
      "Virtual Office (1 Tahun)",
      "Layanan Penerimaan Surat",
    ],
  },
  {
    title: "PT + Virtual Office Premium",
    price: "Rp 6.500.000",
    badge: "TERLARIS",
    featured: true, // Akan otomatis mengubah background menjadi biru
    features: [
      "Semua kelengkapan legalitas PT",
      "Layanan Resepsionis Profesional",
      "Bantuan Pembukaan Rekening Bank",
    ],
    bonuses: [
      "Virtual Office Premium (1 Tahun)",
      "Nomor Telepon Perusahaan Bersama",
      "Kuota Meeting Room (10 Jam/Bulan)",
    ],
  },
];

export default function PembuatanPT() {
  return (
    <div className="w-full bg-white">
      
      {/* BAGIAN 1: HERO SECTION */}
      <FeatureSection 
        badge="LEGALITAS BISNIS"
        title="Jasa Pembuatan PT Cepat, Mudah & Terpercaya"
        description="Mulai langkah bisnis Anda dengan legalitas yang sah. Kami mengurus seluruh dokumen pendirian PT Anda plus memberikan fasilitas Virtual Office di lokasi prestisius."
        imageSrc="../public/img/pendirian-pt.png" // Sesuaikan dengan folder public Anda
        statsValue="100%"
        statsLabel="Legal & Sesuai Regulasi"
        features={ptFeatures}
        buttonText="Konsultasi Gratis"
        buttonLink="/konsultasi"
      />

        <Persyaratan />
    <Proses />


      {/* BAGIAN 2: PRICING SECTION */}
      {/* Menggunakan background abu-abu terang agar border card putih lebih terlihat */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Pilih Paket Pendirian PT Anda
            </h2>
            <p className="text-slate-600">
              Harga transparan tanpa biaya tersembunyi. Dapatkan bonus ekstra untuk mendukung kelancaran operasional bisnis Anda.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ptPackages.map((pkg, index) => (
              <CompanyPackageCard
                key={index}
                name={pkg.title}
                price={pkg.price}
                badge={pkg.badge}
                featured={pkg.featured}
                features={pkg.features}
                bonuses={pkg.bonuses}
              />
            ))}
          </div>

        </div>
      </section>
        <FaqPt />

    </div>
  );
}