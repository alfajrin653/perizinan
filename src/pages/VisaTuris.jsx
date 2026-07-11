import React from "react";
// Sesuaikan path import dengan struktur folder Anda
import FeatureSection from "../components/element/FeatureSection"; 
import CompanyPackageCard from "../components/element/PricingPembuatan"; 
import FAQ from "../components/element/FAQ"; 

import { 
  PlaneTakeoff, Users, Clock, ShieldCheck, 
  CheckCircle2 
} from "lucide-react";

export default function VisaTuris() {
  
  // ==========================================
  // 1. DATA HERO SECTION (VISA TURIS)
  // ==========================================
  const turisHeroFeatures = [
    { icon: PlaneTakeoff, title: "Tujuan Liburan & Wisata" },
    { icon: Users, title: "Kunjungan Sosial/Keluarga" },
    { icon: Clock, title: "Bisa Diperpanjang" },
    { icon: ShieldCheck, title: "Sponsor Resmi Terjamin" },
  ];

  // ==========================================
  // 2. DATA PERSYARATAN (SIMPLE LIST)
  // ==========================================
  const turisRequirements = [
    "Scan atau Fotokopi Sampul Paspor bagian depan.",
    "Scan Halaman Biodata Paspor (Masa berlaku paspor minimal 6 bulan saat kedatangan).",
    "Pas foto berwarna terbaru (ukuran bebas, wajah terlihat jelas).",
    "Bukti tiket penerbangan pulang atau tiket lanjutan ke negara lain.",
    "Bukti ketersediaan dana/rekening koran (minimal USD 2.000 atau setara) untuk menjamin biaya hidup selama di Indonesia.",
    "Sertifikat Vaksinasi (jika masih dipersyaratkan oleh regulasi kedatangan terbaru).",
  ];

  // ==========================================
  // 3. DATA PAKET HARGA (VISA TURIS)
  // ==========================================
  const turisPackages = [
    {
      title: "Visa Turis Standard (B211A)", // Sesuai prop 'title' di komponen Anda
      price: "Rp 2.500.000",
      badge: "STANDARD",
      desc: "Pengurusan visa kunjungan wisata standar dengan estimasi waktu normal. Cocok untuk liburan yang sudah direncanakan jauh hari.",
      featured: false,
      features: [
        "E-Visa Kunjungan (Index B211A)",
        "Masa Tinggal 60 Hari",
        "Penyediaan Dokumen Sponsor",
        "Proses Normal (7-10 Hari Kerja)",
      ],
      bonuses: [
        "Customer Support Dedicated",
        "Bantuan Ekstensi / Perpanjangan",
      ],
    },
    {
      title: "Visa Turis Express (B211A)",
      price: "Rp 3.500.000",
      badge: "PALING CEPAT",
      desc: "Layanan prioritas untuk Anda yang membutuhkan visa dalam waktu singkat atau memiliki jadwal penerbangan mendadak.",
      featured: true,
      features: [
        "E-Visa Kunjungan (Index B211A)",
        "Masa Tinggal 60 Hari",
        "Penyediaan Dokumen Sponsor",
        "Proses Kilat (3-5 Hari Kerja)",
      ],
      bonuses: [
        "Layanan Prioritas VIP",
        "Customer Support Dedicated",
        "Bantuan Ekstensi / Perpanjangan",
      ],
    },
  ];

  // ==========================================
  // 4. DATA FAQ (VISA TURIS)
  // ==========================================
  const turisFaqs = [
    {
      question: "Apa itu Visa Turis B211A?",
      answer: "Visa B211A adalah visa kunjungan sekali masuk (single entry) yang diberikan kepada Warga Negara Asing (WNA) untuk tujuan wisata, kunjungan sosial budaya, atau mengunjungi keluarga dan kerabat di Indonesia."
    },
    {
      question: "Berapa lama saya bisa tinggal di Indonesia dengan Visa Turis?",
      answer: "Izin tinggal awal yang diberikan adalah 60 hari sejak tanggal kedatangan Anda di Indonesia. Visa ini dapat diperpanjang maksimal 2 kali perpanjangan (masing-masing 60 hari). Total maksimal Anda bisa tinggal adalah 180 hari (6 bulan)."
    },
    {
      question: "Berapa lama izin kerja dengan Visa Turis?",
      answer: "Nol hari. Berdasarkan undang-undang imigrasi Indonesia, Visa Turis (B211A) SANGAT DILARANG digunakan untuk bekerja atau menerima penghasilan dari perusahaan di Indonesia. Jika Anda bermaksud untuk bekerja, Anda diwajibkan menggunakan Visa Kerja (KITAS) dan perusahaan sponsor wajib mengurus RPTKA (Rencana Penggunaan Tenaga Kerja Asing). Melanggar aturan ini dapat berakibat deportasi, denda, hingga daftar cekal (blacklist)."
    },
    {
      question: "Apakah saya bisa keluar-masuk Indonesia (Multiple Entry) dengan visa ini?",
      answer: "Tidak. Visa Turis B211A adalah Single Entry (sekali masuk). Jika Anda keluar dari wilayah Indonesia (misalnya ke Singapura atau Malaysia), maka visa tersebut akan otomatis hangus, dan Anda harus membuat visa baru jika ingin masuk kembali ke Indonesia."
    },
    {
      question: "Kapan saya harus memperpanjang visa saya?",
      answer: "Kami sangat menyarankan Anda untuk mulai memproses perpanjangan (ekstensi) visa setidaknya 7 hingga 10 hari sebelum masa berlaku 60 hari pertama Anda habis. Keterlambatan perpanjangan (Overstay) akan dikenakan denda sebesar Rp 1.000.000 per hari oleh pihak Imigrasi."
    }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO SECTION */}
      <FeatureSection 
        badge="LAYANAN EKSPATRIAT / VISA TURIS"
        title="Pengurusan Visa Turis Indonesia (B211A) Praktis & Cepat"
        description="Nikmati keindahan alam Indonesia atau lakukan kunjungan keluarga tanpa repot memikirkan birokrasi. Kami bantu pengurusan Visa Kunjungan Wisata (B211A) Anda dengan proses yang aman, legal, dan transparan."
        imageSrc="/images/visa-turis-hero.jpg" // Ganti dengan gambar ilustrasi liburan/wisata
        statsValue="60 Hari"
        statsLabel="Masa Tinggal Awal"
        features={turisHeroFeatures}
        buttonText="Urus Visa Sekarang"
        buttonLink="/konsultasi-visa"
      />

      {/* 2. PERSYARATAN (SIMPLE LISTING UI) */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Persyaratan Dokumen Visa Turis
            </h2>
            <p className="text-slate-600">
              Persiapkan dokumen digital berikut, dan kami akan menangani seluruh proses pengajuannya ke sistem Imigrasi.
            </p>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {turisRequirements.map((item, index) => (
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
              Paket Pengurusan Visa Turis
            </h2>
            <p className="text-slate-600">
              Pilih layanan reguler atau kilat. Semua paket sudah termasuk biaya resmi ke negara dan penyediaan dokumen sponsor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {turisPackages.map((pkg, index) => (
              <CompanyPackageCard
                key={index}
                title={pkg.title}
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
        faqs={turisFaqs} 
        title="FAQ Seputar Visa Turis Indonesia"
        subtitle="Temukan jawaban penting mengenai izin tinggal wisata dan batasan kegiatannya."
      />

    </div>
  );
}