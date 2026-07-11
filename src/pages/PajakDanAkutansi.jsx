import React from "react";
// Sesuaikan path import dengan struktur folder Anda
import FeatureSection from "../components/element/FeatureSection"; 
import CompanyPackageCard from "../components/element/PricingPembuatan"; 
import ProcessTimeline from "../components/element/Proses"; 
// import Requirements from "../../element/Requirements"; 
import FAQ from "../components/element/FAQ"; 

import { 
  Calculator, CalendarCheck, ShieldCheck, Award, 
  MessageSquare, FolderOpen, FileSpreadsheet, Send,
  TrendingUp
} from "lucide-react";

export default function PajakDanAkuntansi() {
  
  // ==========================================
  // 1. DATA HERO SECTION (PAJAK & AKUNTANSI)
  // ==========================================
  const taxHeroFeatures = [
    { icon: Calculator, title: "Kalkulasi Akurat" },
    { icon: CalendarCheck, title: "Lapor Tepat Waktu" },
    { icon: Award, title: "Konsultan Profesional" },
    { icon: ShieldCheck, title: "Kerahasiaan Data" },
  ];

  // ==========================================
  // 2. DATA PROSES (PAJAK & AKUNTANSI)
  // ==========================================
  const taxSteps = [
    {
      id: 1,
      icon: MessageSquare,
      title: "Konsultasi & Asesmen Awal",
      desc: "Diskusi awal untuk memahami skala bisnis, struktur transaksi, dan kebutuhan pelaporan perpajakan atau pembukuan perusahaan Anda.",
    },
    {
      id: 2,
      icon: FolderOpen,
      title: "Pengumpulan Dokumen",
      desc: "Serahkan nota, invoice, rekening koran, dan bukti transaksi lainnya secara digital melalui portal aman kami setiap bulannya.",
    },
    {
      id: 3,
      icon: FileSpreadsheet,
      title: "Rekonsiliasi & Penjurnalan",
      desc: "Tim akuntan kami akan menyusun jurnal, memproses rekonsiliasi bank, dan membuat draft Laporan Keuangan (Laba Rugi & Neraca).",
    },
    {
      id: 4,
      icon: Calculator,
      title: "Perhitungan Pajak",
      desc: "Melakukan perhitungan pajak terutang secara akurat (PPh 21, 23, 4 ayat 2, PPN) berdasarkan regulasi perpajakan terbaru.",
    },
    {
      id: 5,
      icon: Send,
      title: "Pelaporan E-SPT & E-Faktur",
      desc: "Pelaporan pajak tepat waktu ke sistem DJP (Direktorat Jenderal Pajak) dan penyerahan Bukti Penerimaan Elektronik (BPE) kepada Anda.",
    },
  ];

  // ==========================================
  // 4. DATA PAKET HARGA (PAJAK & AKUNTANSI)
  // ==========================================
  const taxPackages = [
    {
      name: "Tax Reporting (Bulanan)",
      price: "Rp 1.500.000",
      badge: "PELAPORAN PAJAK",
      desc: "Solusi tepat untuk perusahaan yang sudah memiliki laporan keuangan sendiri dan hanya butuh bantuan pelaporan pajak rutin agar terhindar dari denda.",
      featured: false,
      features: [
        "Lapor SPT Masa PPh (21, 23, 4 ayat 2)",
        "Lapor SPT Masa PPN (E-Faktur)",
        "Pembuatan ID Billing Pajak",
        "Bukti Penerimaan Elektronik (BPE)",
        "Reminder Jatuh Tempo Pajak",
      ],
      bonuses: [
        "Konsultasi Pajak Ringan",
        "Update Peraturan Pajak Terbaru",
      ],
    },
    {
      name: "Accounting & Tax (All-in)",
      price: "Rp 3.500.000",
      badge: "TERKOMPREHENSIF",
      desc: "Paket lengkap pengelolaan Laporan Keuangan dan Perpajakan. Fokus jalankan bisnis Anda, biarkan tim ahli kami yang mengurus angka-angkanya.",
      featured: true,
      features: [
        "Semua fitur Tax Reporting Bulanan",
        "Penyusunan Jurnal Transaksi Bulanan",
        "Laporan Laba/Rugi (Income Statement)",
        "Laporan Neraca (Balance Sheet)",
        "Rekonsiliasi Rekening Koran",
      ],
      bonuses: [
        "Review Kesehatan Keuangan",
        "Bantuan Draft SPT Tahunan Badan",
        "Dedicated Tax Consultant",
      ],
    },
  ];

  // ==========================================
  // 5. DATA FAQ (PAJAK & AKUNTANSI)
  // ==========================================
  const taxFaqs = [
    {
      question: "Apakah saya tetap butuh konsultan pajak jika bisnis saya belum ada omzet?",
      answer: "Tentu. Berdasarkan regulasi, perusahaan yang sudah ber-NPWP dan dikukuhkan secara legal tetap diwajibkan melapor SPT Masa (pajak bulanan) dengan status 'Nihil' meskipun belum ada transaksi. Keterlambatan pelaporan SPT Nihil tetap dikenakan denda administratif oleh DJP."
    },
    {
      question: "Apa perbedaan layanan Akuntansi (Pembukuan) dan Pajak?",
      answer: "Akuntansi berfokus pada pencatatan transaksi untuk menghasilkan Laporan Keuangan (Laba Rugi, Neraca) agar Anda tahu performa bisnis. Sedangkan Perpajakan menggunakan data dari laporan keuangan tersebut untuk menghitung, menyetor, dan melaporkan kewajiban pajak ke negara sesuai undang-undang."
    },
    {
      question: "Kapan batas waktu pelaporan SPT Masa Bulanan?",
      answer: "Batas waktu bervariasi. Untuk SPT Masa PPh (seperti PPh 21) batas lapornya adalah tanggal 20 bulan berikutnya. Sedangkan untuk PPN (E-Faktur), batas akhirnya adalah akhir bulan berikutnya."
    },
    {
      question: "Apakah data keuangan perusahaan saya dijamin kerahasiaannya?",
      answer: "Sangat dijamin. Kami memberlakukan Non-Disclosure Agreement (NDA) yang ketat. Data Anda dikelola melalui sistem terenkripsi dan hanya diakses oleh konsultan yang menangani perusahaan Anda."
    },
    {
      question: "Bagaimana cara penyerahan bukti transaksinya? Apakah harus fisik?",
      answer: "Tidak perlu dokumen fisik. Anda cukup men-scan atau memfoto dokumen transaksi (invoice, struk, rekening koran) dan mengunggahnya ke folder cloud/sistem aman yang kami sediakan setiap akhir bulan."
    }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO SECTION */}
      <FeatureSection 
        badge="PAJAK & AKUNTANSI"
        title="Fokus Pada Bisnis Anda, Biarkan Kami Urus Keuangannya"
        description="Hindari denda pajak dan laporan keuangan yang berantakan. Tim akuntan dan konsultan pajak profesional kami siap memastikan bisnis Anda patuh hukum dan terkontrol secara finansial."
        imageSrc="/images/tax-accounting-hero.jpg" // Ganti dengan gambar ilustrasi akuntan/kalkulator
        statsValue="100%"
        statsLabel="Kepatuhan Regulasi DJP"
        features={taxHeroFeatures}
        buttonText="Konsultasi Sekarang"
        buttonLink="/konsultasi"
      />

      {/* 2. PROSES LAYANAN */}
      <ProcessTimeline 
        title="Alur Kerja Layanan Pajak & Akuntansi"
        subtitle="Proses yang terstruktur untuk memastikan data keuangan Anda diproses dengan akurat, rapi, dan tepat waktu setiap bulannya."
        steps={taxSteps} 
      />

      {/* 3. PERSYARATAN (Dihilangkan sesuai struktur format yang diminta) */}
      {/* <Requirements ... /> */}

      {/* 4. PRICING SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Paket Layanan Pajak & Pembukuan
            </h2>
            <p className="text-slate-600">
              Pilih paket yang paling sesuai dengan fase bisnis Anda saat ini. Transparan, tanpa biaya tersembunyi, dan jauh lebih efisien daripada merekrut tim internal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {taxPackages.map((pkg, index) => (
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

      {/* 5. FAQ SECTION */}
      <FAQ
        faqs={taxFaqs} 
        title="FAQ Seputar Pajak & Akuntansi"
        subtitle="Temukan jawaban atas pertanyaan umum terkait kewajiban pajak perusahaan dan layanan pembukuan kami."
      />

    </div>
  );
}