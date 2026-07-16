import React from "react";
// Sesuaikan path import dengan struktur folder Anda
import FeatureSection from "../components/element/FeatureSection"; 
import CompanyPackageCard from "../components/element/PricingPembuatan"; 
import FAQ from "../components/element/FAQ"; 

import { 
  Globe, Building2, Briefcase, Scale, 
  CheckCircle2
} from "lucide-react";

export default function PendirianPma() {
  
  // ==========================================
  // 1. DATA HERO SECTION (PMA)
  // ==========================================
  const pmaHeroFeatures = [
    { icon: Globe, title: "100% Foreign Ownership" },
    { icon: Building2, title: "Gratis Virtual Office" },
    { icon: Scale, title: "Kepatuhan Regulasi BKPM" },
    { icon: Briefcase, title: "Konsultan Berpengalaman" },
  ];

  // ==========================================
  // 2. DATA PAKET HARGA (PMA)
  // ==========================================
  const pmaPackages = [
    {
      name: "PMA Setup Basic",
      price: "Rp 15.000.000",
      badge: "STANDAR LEGALITAS",
      desc: "Solusi pendirian perusahaan penanaman modal asing dengan kelengkapan dokumen dasar untuk memulai operasional di Indonesia.",
      featured: false,
      features: [
        "Pengecekan & Pemesanan Nama PT PMA",
        "Akta Pendirian Notaris (Bilingual)",
        "SK Pengesahan Kemenkumham",
        "NIB (Nomor Induk Berusaha) via OSS",
        "NPWP & SKT Perusahaan PMA",
      ],
      bonuses: [
        "Virtual Office (1 Tahun)",
        "Layanan Penerimaan Surat",
      ],
    },
    {
      name: "PMA Setup Premium",
      price: "Rp 25.000.000",
      badge: "ALL-INCLUSIVE",
      desc: "Paket ekspansi lengkap yang dirancang khusus untuk investor asing, mencakup izin tinggal dan pendampingan pembukaan rekening bank.",
      featured: true,
      features: [
        "Semua kelengkapan legalitas PMA Dasar",
        "Pengurusan 1 KITAS Investor / Direktur",
        "Penyusunan RPTKA (Tenaga Kerja Asing)",
        "Pendampingan Pembukaan Rekening Bank",
        "Konsultasi Regulasi Daftar Positif Investasi",
      ],
      bonuses: [
        "Virtual Office Premium (1 Tahun)",
        "Nomor Telepon Perusahaan Khusus",
        "Kuota Meeting Room (15 Jam/Bulan)",
      ],
    },
  ];

  // ==========================================
  // 3. DATA FAQ (PMA)
  // ==========================================
  const pmaFaqs = [
    {
      question: "Berapa syarat minimum nilai investasi untuk mendirikan PMA?",
      answer: "Berdasarkan regulasi BKPM terbaru, minimum nilai rencana investasi untuk PT PMA adalah Rp 10 Miliar (belum termasuk harga tanah dan bangunan). Dari jumlah tersebut, minimum modal disetor dan ditempatkan adalah Rp 10 Miliar."
    },
    {
      question: "Apakah orang asing bisa memiliki 100% saham di PMA?",
      answer: "Ya, bisa. Berdasarkan Daftar Positif Investasi (DPI) terbaru, banyak sektor usaha di Indonesia yang kini terbuka untuk 100% kepemilikan asing. Namun, beberapa sektor tertentu mungkin masih mewajibkan adanya kepemilikan saham lokal (Joint Venture)."
    },
    {
      question: "Berapa lama proses pendirian PMA di Indonesia?",
      answer: "Normalnya, proses pendirian PT PMA (mulai dari pemesanan nama hingga terbitnya NIB) memakan waktu sekitar 2 hingga 4 minggu kerja setelah seluruh dokumen pendiri dan struktur permodalan dinyatakan lengkap."
    },
    {
      question: "Apakah direktur perusahaan PMA wajib warga negara Indonesia?",
      answer: "Tidak. Warga Negara Asing (WNA) diperbolehkan menjadi Direktur Utama di sebuah PT PMA, dengan syarat mereka harus mengurus izin tinggal dan kerja yang sah (KITAS/KITAP) di Indonesia."
    },
    {
      question: "Apakah PMA wajib memiliki kantor fisik?",
      answer: "Untuk keperluan administrasi domisili dan pendaftaran NIB, Anda bisa menggunakan layanan Virtual Office di zona komersial yang sah (seperti yang kami sediakan). Namun, untuk aktivitas produksi atau operasional tertentu, pemerintah mungkin mewajibkan keberadaan kantor fisik atau pabrik."
    }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO SECTION */}
      <FeatureSection 
        badge="FOREIGN DIRECT INVESTMENT"
        title="Jasa Pendirian PT PMA Profesional di Indonesia"
        description="Buka peluang bisnis tanpa batas di pasar Indonesia. Kami membantu investor asing mendirikan PT PMA dengan proses yang aman, transparan, dan sepenuhnya mematuhi regulasi BKPM."
        imageSrc="../public/img/pendirian-pt.png" // Ganti dengan gambar ilustrasi gedung/investasi/global
        statsValue="10 Miliar"
        statsLabel="Minimum Syarat Investasi"
        features={pmaHeroFeatures}
        buttonText="Konsultasi Investor"
        buttonLink="/konsultasi-pma"
      />

      {/* 2. PRICING SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Paket Pendirian Perusahaan PMA
            </h2>
            <p className="text-slate-600">
              Pilih layanan pendirian investasi asing yang sesuai dengan rencana ekspansi bisnis Anda di Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pmaPackages.map((pkg, index) => (
              <CompanyPackageCard
                key={index}
                name={pkg.name}
                price={pkg.price}
                badge={pkg.badge}
                desc={pkg.desc}
                featured={pkg.featured}
                features={pkg.features}
                bonuses={pkg.bonuses}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <FAQ 
        faqs={pmaFaqs} 
        title="FAQ Pendirian PT PMA"
        subtitle="Informasi krusial yang perlu diketahui oleh investor asing sebelum mendirikan perusahaan di Indonesia."
      />

    </div>
  );
}