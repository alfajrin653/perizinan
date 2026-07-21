import React from 'react';
// Sesuaikan path import dengan struktur folder Anda
import FeatureSection from '../components/element/FeatureSection';
import CompanyPackageCard from '../components/element/PricingPembuatan';
import ProcessTimeline from '../components/element/Proses';
// import Requirements from "../../element/Requirements";
import FAQ from '../components/element/FAQ'; // import komponen FAQ dari src/components/";

import { ShieldCheck, Search, FileBadge, Scale, FileSignature, Upload, Megaphone, Award, IdCard, Image as ImageIcon, Briefcase, FileText, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';

export default function PendaftaranHaki() {
  // ==========================================
  // 1. DATA ALASAN PENTINGNYA HAKI
  // ==========================================
  const reasons = [
    {
      id: 1,
      title: 'Perlindungan Hukum Eksklusif',
      description: 'Mendapatkan hak eksklusif dari negara. Hanya Anda yang berhak menggunakan merek tersebut untuk tujuan komersial, dan Anda berhak melarang pihak lain menggunakan merek yang sama.',
      icon: ShieldCheck,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      id: 2,
      title: 'Mencegah Pembajakan & Plagiarisme',
      description: 'Tanpa pendaftaran resmi, siapa pun bisa mendaftarkan nama bisnis Anda lebih dulu. Jika itu terjadi, Anda justru bisa dituntut dan dipaksa mengganti nama bisnis yang sudah Anda bangun susah payah.',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      id: 3,
      title: 'Meningkatkan Nilai Aset Perusahaan',
      description: 'Merek yang terdaftar adalah aset tidak berwujud yang memiliki nilai ekonomi. Merek tersebut dapat diwariskan, dilisensikan (franchise), atau bahkan diperjualbelikan.',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      id: 4,
      title: 'Membangun Kepercayaan Konsumen',
      description: 'Merek yang memiliki simbol ® (Registered) memberikan kesan profesional dan kredibel. Konsumen akan lebih percaya dan merasa aman bertransaksi dengan bisnis Anda.',
      icon: Award,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
    },
  ];

  // ==========================================
  // 1. DATA HERO SECTION (HAKI)
  // ==========================================
  const hakiHeroFeatures = [
    { icon: ShieldCheck, title: 'Perlindungan Hukum' },
    { icon: Search, title: 'Pengecekan Komprehensif' },
    { icon: FileBadge, title: 'Sertifikat Resmi DJKI' },
    { icon: Scale, title: 'Konsultan Terdaftar' },
  ];

  // ==========================================
  // 2. DATA PROSES PENDAFTARAN (HAKI)
  // ==========================================
  const hakiSteps = [
    {
      id: 1,
      icon: Search,
      title: 'Penelusuran Merek',
      desc: 'Kami akan melakukan analisa dan pengecekan di database DJKI untuk memastikan merek Anda belum terdaftar dan aman untuk diajukan.',
    },
    {
      id: 2,
      icon: FileSignature,
      title: 'Persiapan Berkas',
      desc: 'Pengumpulan dokumen kelengkapan seperti logo, detail kelas barang/jasa, surat pernyataan, dan surat kuasa.',
    },
    {
      id: 3,
      icon: Upload,
      title: 'Filing ke DJKI',
      desc: 'Pendaftaran merek secara resmi melalui sistem online Direktorat Jenderal Kekayaan Intelektual (DJKI) Kemenkumham.',
    },
    {
      id: 4,
      icon: Megaphone,
      title: 'Masa Pengumuman & Pemeriksaan',
      desc: 'Merek akan dipublikasikan oleh DJKI (biasanya 2 bulan) untuk melihat adakah pihak yang keberatan, dilanjutkan dengan pemeriksaan substantif.',
    },
    {
      id: 5,
      icon: Award,
      title: 'Penerbitan Sertifikat',
      desc: 'Setelah lolos semua tahapan, DJKI akan menerbitkan Sertifikat Merek resmi yang berlaku selama 10 tahun.',
    },
  ];

  // ==========================================
  // 3. DATA PERSYARATAN (HAKI)
  // ==========================================
  const hakiRequirements = [
    {
      icon: IdCard,
      title: 'KTP & NPWP Pemohon',
      desc: 'Fotokopi/scan KTP dan NPWP (Bisa atas nama Pribadi maupun Perusahaan).',
    },
    {
      icon: ImageIcon,
      title: 'Label / Logo Merek',
      desc: 'File gambar logo merek (jika ada) dalam format JPEG/PNG berwarna.',
    },
    {
      icon: Briefcase,
      title: 'Penjelasan Kelas Barang/Jasa',
      desc: "Daftar produk atau jasa yang menggunakan merek tersebut untuk menentukan 'Kelas Merek' di DJKI.",
    },
    {
      icon: FileText,
      title: 'Surat Rekomendasi UMKM',
      desc: 'Hanya untuk pemohon kategori UMKM (Agar mendapat biaya PNBP yang lebih murah).',
      highlight: true,
    },
    {
      icon: CheckCircle2,
      title: 'Tanda Tangan Surat Kuasa',
      desc: 'Formulir surat pernyataan dan surat kuasa yang akan kami sediakan untuk Anda tandatangani.',
    },
  ];

  // ==========================================
  // 4. DATA PAKET HARGA (HAKI)
  // ==========================================
  const hakiPackages = [
    {
      title: 'Pendaftaran Merek (UMKM)',
      price: 'Rp 2.500.000',
      badge: 'KHUSUS UMKM',
      featured: false,
      features: ['Pengecekan Ketersediaan Merek', 'Pemilihan Kelas Barang/Jasa', 'Pendaftaran ke Sistem DJKI', 'Mencakup Biaya PNBP (Negara)', 'Sertifikat Digital dari DJKI'],
      bonuses: ['Monitoring Status Pendaftaran', 'Konsultasi Hak Cipta'],
    },
    {
      title: 'Pendaftaran Merek (Umum / Perusahaan)',
      price: 'Rp 3.500.000',
      badge: 'STANDAR PERUSAHAAN',
      featured: true,
      features: ['Analisa & Pengecekan Komprehensif', 'Pemilihan Kelas Barang/Jasa', 'Pendaftaran ke Sistem DJKI', 'Mencakup Biaya PNBP (Negara Umum)', 'Sertifikat Digital dari DJKI'],
      bonuses: ['Monitoring Status Prioritas', 'Drafting Surat Sanggahan (Jika Perlu)', 'Konsultasi Ekspansi Merek'],
    },
  ];

  // ==========================================
  // 5. DATA FAQ (HAKI)
  // ==========================================
  const hakiFaqs = [
    {
      question: 'Apa bedanya pendaftaran merek atas nama pribadi dan perusahaan?',
      answer:
        'Secara hukum, hak eksklusif akan jatuh kepada nama yang didaftarkan. Jika didaftarkan atas nama perusahaan, maka merek menjadi aset perusahaan (PT/CV). Jika atas nama pribadi, merek adalah aset orang tersebut meskipun perusahaannya tutup.',
    },
    {
      question: 'Berapa lama proses pendaftaran merek hingga sertifikat keluar?',
      answer: 'Proses pendaftaran dari awal hingga terbit sertifikat bisa memakan waktu 1 hingga 2 tahun tergantung antrean di DJKI. Namun, perlindungan hukum Anda sudah dimulai sejak TANGGAL PENERIMAAN (Filing Date) pendaftaran.',
    },
    {
      question: 'Apakah merek yang sudah didaftarkan pasti disetujui?',
      answer:
        'Belum tentu. DJKI berhak menolak pendaftaran jika merek dianggap terlalu mirip (memiliki persamaan pada pokoknya) dengan merek yang sudah terdaftar, atau melanggar norma tertentu. Itulah mengapa pengecekan di awal (Search) sangat penting kami lakukan.',
    },
    {
      question: 'Apa itu Kelas Merek (Nice Classification)?',
      answer:
        'Sistem klasifikasi internasional untuk mengelompokkan barang dan jasa. Misalnya, Kelas 25 untuk pakaian, Kelas 43 untuk restoran. Satu pendaftaran berlaku untuk satu kelas. Jika merek Anda digunakan untuk pakaian dan restoran, Anda harus mendaftar di 2 kelas yang berbeda.',
    },
    {
      question: 'Berapa lama masa berlaku Sertifikat Merek?',
      answer: 'Perlindungan Hak Merek berlaku selama 10 (sepuluh) tahun sejak tanggal penerimaan pendaftaran, dan dapat diperpanjang untuk jangka waktu yang sama.',
    },
  ];

  return (
    <div className='w-full bg-white'>
      {/* 1. HERO SECTION */}
      <FeatureSection
        badge='HAK KEKAYAAN INTELEKTUAL'
        title='Lindungi Identitas Bisnis Anda dari Plagiarisme'
        description='Jangan biarkan nama, logo, atau ide brilian Anda dicuri kompetitor. Amankan masa depan bisnis Anda dengan mendaftarkan Merek dan Hak Cipta secara resmi di DJKI.'
        imageSrc='../public/img/haki.jpg' // Ganti dengan gambar ilustrasi desain/legal/sertifikat
        statsValue='10 Tahun'
        statsLabel='Masa Berlaku Perlindungan'
        features={hakiHeroFeatures}
      />

      {/* 1.1 WHY HARUS DAFTAR HAKI? */}
      <section className='py-24 px-4 bg-white relative overflow-hidden'>
        {/* --- BACKGROUND ORNAMENT (Opsional untuk estetika) --- */}
        <div className='absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 left-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl opacity-50 -z-10 -translate-x-1/2 translate-y-1/2'></div>

        <div className='max-w-7xl mx-auto'>
          {/* --- HEADER SECTION --- */}
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h2 className='text-3xl md:text-5xl font-bold text-slate-900 mb-6'>
              Kenapa Mendaftar Merek Itu <span className='text-blue-600'>Penting?</span>
            </h2>
            <p className='text-lg text-slate-600'>Jangan biarkan identitas dan reputasi bisnis yang Anda bangun bertahun-tahun diambil alih oleh pihak lain. Amankan aset berharga Anda sekarang.</p>
          </div>

          {/* --- GRID KONTEN --- */}
          <div className='grid md:grid-cols-2 gap-8'>
            {reasons.map((item) => {
              const IconComponent = item.icon;

              return (
                <div key={item.id} className='group flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300'>
                  {/* Bagian Ikon */}
                  <div className='shrink-0'>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${item.color}`} />
                    </div>
                  </div>

                  {/* Bagian Teks */}
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors'>{item.title}</h3>
                    <p className='text-slate-600 leading-relaxed'>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. PROSES PENDAFTARAN */}
      <ProcessTimeline title='Alur Pendaftaran Merek' subtitle='Dari analisa awal hingga sertifikat terbit, kami mendampingi setiap langkah Anda di DJKI Kemenkumham.' steps={hakiSteps} />

      {/* 3. PERSYARATAN */}
      {/* <Requirements 
        title="Dokumen Persyaratan"
        subtitle="Hanya butuh kelengkapan identitas dan visual logo bisnis Anda."
        requirements={hakiRequirements} 
      /> */}

      {/* 4. PRICING SECTION */}
      <section className='py-24 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-slate-900'>Paket Pendaftaran Merek (HAKI)</h2>
            <p className='text-slate-600'>Biaya transparan, sudah termasuk tarif PNBP (Penerimaan Negara Bukan Pajak) ke Kas Negara. Pilih sesuai status entitas bisnis Anda.</p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {hakiPackages.map((pkg, index) => (
              <CompanyPackageCard key={index} title={pkg.title} price={pkg.price} badge={pkg.badge} featured={pkg.featured} features={pkg.features} bonuses={pkg.bonuses} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <FAQ title='FAQ Seputar HAKI & Merek' subtitle='Pahami lebih lanjut mengenai perlindungan merek, kelas barang/jasa, dan regulasi di Indonesia.' faqs={hakiFaqs} />
    </div>
  );
}
