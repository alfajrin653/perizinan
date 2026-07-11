import React from "react";
// Sesuaikan path import dengan struktur folder Anda
import FeatureSection from "../components/element/FeatureSection"; 
import CompanyPackageCard from "../components/element/PricingPembuatan"; 
import FAQ from "../components/element/FAQ"; 

import { 
  Globe, Briefcase, Landmark, ShieldCheck, 
  CheckCircle2 
} from "lucide-react";

export default function KitasInvestor() {
  
  // ==========================================
  // 1. DATA HERO SECTION (KITAS INVESTOR)
  // ==========================================
  const kitasHeroFeatures = [
    { icon: Landmark, title: "Bebas Dana DPKK" },
    { icon: Globe, title: "Masa Tinggal 1-2 Tahun" },
    { icon: Briefcase, title: "Tanpa Perlu RPTKA" },
    { icon: ShieldCheck, title: "Legalitas Terjamin" },
  ];

  // ==========================================
  // 2. DATA PERSYARATAN (SIMPLE LIST)
  // ==========================================
  const kitasRequirements = [
    "Paspor asli dengan masa berlaku minimal 18 bulan (untuk 1 Tahun) atau 30 bulan (untuk 2 Tahun).",
    "Akta Pendirian PT PMA beserta perubahannya (jika ada).",
    "SK Kemenkumham Pendirian Perusahaan.",
    "Nomor Induk Berusaha (NIB) dan Izin Operasional.",
    "NPWP Perusahaan PT PMA.",
    "Rekening koran perusahaan (Bukti ketersediaan dana operasional minimum).",
    "Pas foto berwarna terbaru latar merah (ukuran 3x4 dan 4x6).",
    "Surat Keterangan Domisili Perusahaan / Virtual Office.",
  ];

  // ==========================================
  // 3. DATA PAKET HARGA (KITAS INVESTOR)
  // ==========================================
  const kitasPackages = [
    {
      name: "KITAS Investor 1 Tahun (Index 313)",
      price: "Rp 12.000.000",
      badge: "INDEX 313",
      desc: "Izin tinggal terbatas selama 1 tahun untuk penanam modal asing. Ideal untuk evaluasi bisnis awal di Indonesia.",
      featured: false,
      features: [
        "E-Visa Investor (Index 313)",
        "E-KITAS (Izin Tinggal Terbatas 1 Tahun)",
        "Multiple Exit Re-entry Permit (MERP)",
        "Laporan Keberadaan Kepolisian (STM)",
        "Surat Keterangan Tempat Tinggal (SKTT)",
      ],
      bonuses: [
        "Bebas Biaya DPKK / Pajak TKA",
        "Pengurusan Tanpa RPTKA",
      ],
    },
    {
      name: "KITAS Investor 2 Tahun (Index 314)",
      price: "Rp 18.000.000",
      badge: "PALING EFISIEN",
      desc: "Pilihan terbaik untuk stabilitas bisnis jangka panjang. Menghemat waktu dan biaya perpanjangan tahunan.",
      featured: true,
      features: [
        "E-Visa Investor (Index 314)",
        "E-KITAS (Izin Tinggal Terbatas 2 Tahun)",
        "Multiple Exit Re-entry Permit (MERP)",
        "Laporan Keberadaan Kepolisian (STM)",
        "Surat Keterangan Tempat Tinggal (SKTT)",
      ],
      bonuses: [
        "Bebas Biaya DPKK / Pajak TKA",
        "Pengurusan Tanpa RPTKA",
        "Prioritas Dokumen Imigrasi",
      ],
    },
  ];

  // ==========================================
  // 4. DATA FAQ (KITAS INVESTOR)
  // ==========================================
  const kitasFaqs = [
    {
      question: "Apa keuntungan utama menggunakan KITAS Investor dibandingkan KITAS Kerja?",
      answer: "Keuntungan terbesarnya adalah pemegang KITAS Investor dibebaskan dari kewajiban membayar Dana Kompensasi Penggunaan Tenaga Kerja Asing (DPKK) sebesar $1.200 per tahun. Selain itu, prosesnya lebih cepat karena tidak memerlukan pengesahan RPTKA (Rencana Penggunaan Tenaga Kerja Asing) dari Kementerian Ketenagakerjaan."
    },
    {
      question: "Siapa saja yang berhak mengajukan KITAS Investor?",
      answer: "WNA yang tercatat sebagai pemegang saham di Akta Perusahaan PT PMA dan menjabat sebagai Direktur atau Komisaris. WNA yang hanya menjadi pemegang saham (tanpa jabatan direksi) juga bisa mengajukan, asalkan nilai saham yang disetor minimum Rp 1.125.000.000 (Satu Miliar Seratus Dua Puluh Lima Juta Rupiah)."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk proses pengurusan KITAS Investor?",
      answer: "Normalnya, proses pengurusan E-Visa Investor hingga E-KITAS terbit memakan waktu sekitar 2 hingga 4 minggu kerja setelah seluruh dokumen perusahaan dan dokumen pribadi investor dinyatakan lengkap."
    },
    {
      question: "Apakah pemegang KITAS Investor diperbolehkan untuk bekerja?",
      answer: "Pemegang KITAS Investor yang menjabat sebagai Direktur diperbolehkan melakukan kegiatan manajerial sesuai jabatannya. Namun, bagi pemegang KITAS Investor yang menjabat sebagai Komisaris atau hanya pemegang saham, mereka tidak diizinkan untuk bekerja secara operasional di Indonesia."
    },
    {
      question: "Apakah keluarga investor (istri/anak) bisa ikut ke Indonesia?",
      answer: "Tentu. Setelah KITAS Investor disetujui, anggota keluarga (suami/istri dan anak di bawah usia 18 tahun yang belum menikah) dapat mengajukan KITAS Pengikut (Dependent KITAS) dengan masa berlaku yang mengikuti KITAS utama (Investor)."
    }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO SECTION */}
      <FeatureSection 
        badge="LAYANAN EKSPATRIAT / KITAS"
        title="KITAS Investor: Solusi Izin Tinggal Bisnis Anda"
        description="Dapatkan izin tinggal resmi (1 atau 2 tahun) khusus bagi penanam modal asing di Indonesia. Nikmati keistimewaan tanpa perlu membayar pajak TKA dan tanpa proses RPTKA yang panjang."
        imageSrc="/images/kitas-investor-hero.jpg" // Ganti dengan gambar ilustrasi paspor/investor
        statsValue="100%"
        statsLabel="Kepatuhan Imigrasi"
        features={kitasHeroFeatures}
        buttonText="Konsultasi KITAS"
        buttonLink="/konsultasi-kitas"
      />

      {/* 2. PERSYARATAN (SIMPLE LISTING UI) */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Persyaratan Dokumen
            </h2>
            <p className="text-slate-600">
              Siapkan dokumen dasar berikut, dan tim ahli kami akan memproses sisanya ke Imigrasi.
            </p>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {kitasRequirements.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. PRICING SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Paket Pengurusan KITAS Investor
            </h2>
            <p className="text-slate-600">
              Pilih masa berlaku E-Visa dan E-KITAS sesuai dengan kebutuhan rencana jangka panjang investasi Anda di Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {kitasPackages.map((pkg, index) => (
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

      {/* 4. FAQ SECTION */}
      <FAQ 
        faqs={kitasFaqs} 
        title="FAQ Seputar KITAS Investor"
        subtitle="Pertanyaan yang sering diajukan mengenai izin tinggal bagi penanam modal asing di Indonesia."
      />

    </div>
  );
}