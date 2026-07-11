import React from "react";
// Sesuaikan path import dengan struktur folder Anda
import FeatureSection from "../components/element/FeatureSection"; 
import CompanyPackageCard from "../components/element/PricingPembuatan"; 
import FAQ from "../components/element/FAQ"; 

import { 
  PlaneTakeoff, Globe, FileCheck, Building, 
  ShieldCheck, Clock, UserCheck
} from "lucide-react";

export default function VisaBusinesspages() {
  
  // ==========================================
  // 1. DATA HERO SECTION (VISA BISNIS)
  // ==========================================
  const visaHeroFeatures = [
    { icon: PlaneTakeoff, title: "Proses Cepat & Tepat" },
    { icon: Globe, title: "Layanan Ekspatriat Global" },
    { icon: FileCheck, title: "Bantuan Sponsor Lokal" },
    { icon: Clock, title: "Perpanjangan Mudah" },
  ];

  // ==========================================
  // 2. DATA PAKET HARGA (VISA BISNIS)
  // ==========================================
  const visaPackages = [
    {
      name: "Single Entry Business Visa",
      price: "Rp 3.500.000",
      badge: "SEKALI MASUK",
      desc: "Cocok untuk kunjungan bisnis singkat, menghadiri seminar, atau riset pasar. Masa berlaku awal 60 hari dan dapat diperpanjang.",
      featured: false,
      features: [
        "Masa Tinggal 60 Hari",
        "Dokumen Sponsor Perusahaan",
        "Penyusunan Surat Undangan",
        "Pengurusan di Imigrasi",
        "Dukungan Dokumen Terjemahan",
      ],
      bonuses: [
        "Konsultasi Ekspatriat",
        "Bantuan Ekstensi Visa",
      ],
    },
    {
      name: "Multiple Entry Business Visa",
      price: "Rp 6.000.000",
      badge: "PALING FLEKSIBEL",
      desc: "Ideal bagi Anda yang sering bepergian dan perlu mengunjungi Indonesia beberapa kali dalam setahun tanpa harus mengajukan visa baru.",
      featured: true,
      features: [
        "Berlaku hingga 1 Tahun",
        "Bebas Keluar-Masuk Indonesia",
        "Dokumen Sponsor Perusahaan",
        "Penyusunan Surat Undangan",
        "Jalur Cepat Imigrasi (Opsional)",
      ],
      bonuses: [
        "Layanan Antar-Jemput Dokumen",
        "Konsultasi Rencana Investasi",
        "Prioritas Customer Support",
      ],
    },
  ];

  // ==========================================
  // 3. DATA FAQ (VISA BISNIS)
  // Berdasarkan data yang Anda berikan
  // ==========================================
  const visaFaqs = [
    {
      question: "Kapan Anda memerlukan Visa Bisnis di Indonesia?",
      answer: "Anda memerlukannya jika ingin melakukan aktivitas berikut: menghadiri pertemuan/konferensi bisnis, negosiasi atau tanda tangan kontrak, riset pasar/studi kelayakan, menghadiri pameran dagang, mengikuti program pelatihan/workshop, atau mendirikan/menjalankan kegiatan usaha di Indonesia."
    },
    {
      question: "Siapa yang bisa mendapatkan Visa Bisnis Indonesia?",
      answer: "Mayoritas warga negara asing dapat memperolehnya. Namun, perlu diingat bahwa ada sejumlah negara terlarang (Calling Visa) yang permohonannya mungkin ditolak, antara lain: Afghanistan, Kamerun, Guinea, Israel, Irak, Liberia, Nigeria, Uzbekistan, Korea Utara, dan Somalia."
    },
    {
      question: "Berapa lama Anda bisa tinggal di Indonesia dengan Visa Bisnis?",
      answer: "Durasi awalnya biasanya dikeluarkan selama 60 hari. Namun, ini dapat diperpanjang hingga 180 hari (6 bulan) atau lebih lama tergantung pada keadaan khusus dan persetujuan dari otoritas imigrasi terkait."
    },
    {
      question: "Apa saja jenis Visa Bisnis Indonesia?",
      answer: "Terdapat dua jenis utama: (1) Visa Bisnis Sekali Masuk (Single Entry) yang memungkinkan masuk 1 kali dan akan hangus setelah Anda meninggalkan Indonesia. (2) Visa Bisnis Banyak Masuk (Multiple Entry) yang memungkinkan Anda masuk dan keluar Indonesia beberapa kali selama masa berlaku tanpa perlu mengajukan visa baru."
    },
    {
      question: "Apa saja persyaratan untuk pengajuan Visa Bisnis Indonesia?",
      answer: "Syarat utama meliputi: Paspor yang sah, Formulir Permohonan, Foto seukuran paspor, Surat Undangan, Dokumen Bisnis (Sponsor), Rencana Perjalanan Penerbangan, Sarana Keuangan (Bukti Rekening), Asuransi Perjalanan, dan Surat Keterangan Kerja."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk mendapatkan Visa Bisnis?",
      answer: "Waktu pemrosesan umumnya memakan waktu sekitar 5 hingga 10 hari kerja tergantung pada kedutaan atau konsulat tempat Anda mengajukan. Sangat disarankan untuk mengajukan permohonan jauh sebelum tanggal perjalanan yang diinginkan."
    },
    {
      question: "Bagaimana cara mengajukan Visa Bisnis Indonesia?",
      answer: "Alurnya adalah: Kumpulkan dokumen yang diperlukan, ajukan permohonan, bayar biaya visa yang ditentukan, tunggu proses aplikasi (verifikasi data), lalu koleksi (pengumpulan) visa setelah diterbitkan."
    },
    {
      question: "Bagaimana cara memperpanjang Visa Bisnis di Indonesia?",
      answer: "Kunjungi kantor imigrasi setidaknya satu minggu sebelum visa habis. Isi formulir perpanjangan, siapkan dokumen pendukung (paspor, visa, surat sponsor), bayar biaya perpanjangan, serahkan ke petugas imigrasi, dan tunggu persetujuan selesai."
    }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO SECTION */}
      <FeatureSection 
        badge="LAYANAN EKSPATRIAT / VISA"
        title="Urus Visa Bisnis Indonesia Tanpa Hambatan"
        description="Perlancar aktivitas komersial dan investasi Anda di Indonesia. Kami menyediakan layanan pengurusan Visa Bisnis yang cepat, aman, dan mematuhi seluruh regulasi imigrasi yang berlaku."
        imageSrc="/images/visa-bisnis-hero.jpg" // Ganti dengan gambar ilustrasi paspor/airport/bisnis
        statsValue="100%"
        statsLabel="Bantuan Surat Sponsor"
        features={visaHeroFeatures}
        buttonText="Konsultasi Visa"
        buttonLink="/konsultasi-visa"
      />

      {/* 2. PRICING SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Paket Layanan Visa Bisnis
            </h2>
            <p className="text-slate-600">
              Solusi pengurusan izin masuk (Entry Permit) yang disesuaikan dengan intensitas kunjungan dan kebutuhan operasional perusahaan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {visaPackages.map((pkg, index) => (
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
        faqs={visaFaqs} 
        title="FAQ Seputar Visa Bisnis Indonesia"
        subtitle="Panduan lengkap dan jawaban untuk kelancaran mobilitas bisnis Anda ke Indonesia."
      />

    </div>
  );
}