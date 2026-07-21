import React from 'react';
import FeatureSection from '../components/element/FeatureSection';
import CompanyPackageCard from '../components/element/PricingPembuatan';
import ProcessTimeline from '../components/element/Proses';
import Persyaratan from '../components/sections/pembuatanPt/Persyaratan';
import { Helmet } from 'react-helmet-async';
import { Clock, Wallet, Building, Scale, Search, FileSignature, Briefcase, CreditCard, IdCard, FileText, Image as ImageIcon, MapPin, Users } from 'lucide-react';
import FaqPembuatanCV from '../components/sections/PembuatanCv/FaqPembuatanCv';

export default function PendirianCV() {
  // ==========================================
  // 1. DATA HERO SECTION (CV)
  // ==========================================
  const cvHeroFeatures = [
    { icon: Clock, title: 'Proses Lebih Cepat' },
    { icon: Wallet, title: 'Biaya Lebih Terjangkau' },
    { icon: Building, title: 'Gratis Virtual Office' },
    { icon: Scale, title: 'Pendampingan Legalitas' },
  ];

  // ==========================================
  // 2. DATA PROSES PENDIRIAN (CV)
  // ==========================================
  const cvSteps = [
    {
      id: 1,
      icon: Search,
      title: 'Pengecekan Nama CV',
      desc: 'Mengecek dan mendaftarkan nama CV Anda di Sistem Administrasi Badan Usaha (SABU) Kemenkumham.',
    },
    {
      id: 2,
      icon: FileSignature,
      title: 'Penandatanganan Akta Notaris',
      desc: 'Pembuatan Akta Pendirian CV yang ditandatangani oleh Sekutu Aktif (Direktur) dan Sekutu Pasif (Komanditer).',
    },
    {
      id: 3,
      icon: Scale,
      title: 'Pendaftaran Kemenkumham',
      desc: 'Akta didaftarkan ke Kemenkumham untuk mendapatkan Surat Keterangan Terdaftar (SKT) sebagai legalitas resmi CV.',
    },
    {
      id: 4,
      icon: Briefcase,
      title: 'Pengurusan NIB (OSS)',
      desc: 'Mendaftarkan CV di sistem OSS untuk mendapatkan Nomor Induk Berusaha (NIB) sebagai izin operasional.',
    },
    {
      id: 5,
      icon: CreditCard,
      title: 'Pendaftaran NPWP CV',
      desc: 'Pembuatan Nomor Pokok Wajib Pajak (NPWP) dan Surat Keterangan Terdaftar (SKT) di KPP domisili.',
    },
  ];

  // ==========================================
  // 4. DATA PAKET HARGA (CV)
  // ==========================================
  const cvPackages = [
    {
      title: 'CV + Virtual Office Basic',
      price: 'Rp 3.500.000',
      badge: 'STARTER',
      featured: false,
      features: ['Pengecekan Nama CV', 'Akta Pendirian Notaris', 'SK Terdaftar Kemenkumham', 'NIB & Sertifikat Standar', 'NPWP & SKT Perusahaan'],
      bonuses: ['Virtual Office (1 Tahun)', 'Layanan Penerimaan Surat'],
    },
    {
      title: 'CV + Virtual Office Premium',
      price: 'Rp 5.500.000',
      badge: 'TERLARIS',
      featured: true,
      features: ['Semua kelengkapan legalitas CV', 'Layanan Resepsionis Profesional', 'Bantuan Pembukaan Rekening Bank', 'Virtual Office Premium (1 Tahun)', 'Nomor Telepon Perusahaan Bersama', 'Kuota Meeting Room (10 Jam/Bulan)'],
      bonuses: ['Virtual Office Premium (1 Tahun)', 'Nomor Telepon Perusahaan Bersama', 'Kuota Meeting Room (10 Jam/Bulan)'],
    },
  ];

  // ==========================================
  // 1. DATA FAQ KHUSUS PEMBUATAN CV
  // ==========================================
  const faqData = [
    {
      question: 'Apa perbedaan utama mendirikan CV dibandingkan dengan PT?',
      answer:
        'Perbedaan utamanya ada pada status hukum dan modal. CV bukan merupakan badan hukum murni seperti PT, sehingga tidak ada pemisahan mutlak antara kekayaan pribadi dan kekayaan perusahaan. Namun, kelebihannya adalah proses pendirian CV jauh lebih cepat, biayanya lebih murah, dan sistem pengambilan keputusannya lebih fleksibel.',
    },
    {
      question: 'Apakah ada syarat minimal modal awal untuk membuat CV?',
      answer:
        'Tidak ada syarat batas minimal modal dasar yang ditetapkan oleh undang-undang untuk pendirian CV. Besaran modal disetor sepenuhnya ditentukan dan disepakati oleh para pendiri (Sekutu Aktif dan Sekutu Pasif) sesuai dengan kebutuhan awal operasional bisnis.',
    },
    {
      question: 'Siapa saja yang dibutuhkan untuk mendirikan CV?',
      answer:
        'CV minimal harus didirikan oleh 2 (dua) orang Warga Negara Indonesia (WNI). Satu orang akan bertindak sebagai Sekutu Aktif (Direktur yang menjalankan operasional perusahaan) dan satu orang lagi sebagai Sekutu Pasif (Komanditer yang hanya menyetorkan modal).',
    },
    {
      question: 'Dokumen apa saja yang harus saya siapkan?',
      answer:
        'Persyaratannya cukup sederhana. Anda hanya perlu menyiapkan e-KTP, NPWP Pribadi, KK (Kartu Keluarga) dari seluruh pendiri, pas foto direktur, serta detail informasi perusahaan seperti nama CV, alamat, bidang usaha, dan proporsi pembagian modal.',
    },
    {
      question: 'Berapa lama estimasi waktu penyelesaian legalitas CV?',
      answer: 'Secara umum, jika seluruh dokumen persyaratan sudah lengkap dan divalidasi, proses pengurusan Akta Notaris, SK Kemenkumham, NPWP Perusahaan, hingga NIB (Nomor Induk Berusaha) memakan waktu sekitar 3 hingga 7 hari kerja.',
    },
    {
      question: 'Apakah saya bisa menggunakan alamat rumah untuk alamat domisili CV?',
      answer:
        'Sesuai dengan peraturan tata kota (terutama di wilayah Jakarta dan kota besar lainnya), rumah tinggal tidak diizinkan untuk dijadikan domisili perusahaan. Solusi terbaik dan paling hemat adalah dengan menyewa layanan Virtual Office kami yang sudah berstatus zonasi komersial.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Jasa Pembuatan CV Usaha Terpercaya - Duduk Manis</title>
        <meta name='description' content='Butuh legalitas usaha? Kami melayani jasa pembuatan CV dengan syarat mudah, harga terjangkau, dan dokumen lengkap. Hubungi Duduk Manis sekarang!' />
      </Helmet>

      <div className='w-full bg-white'>
        {/* 1. HERO SECTION */}
        <FeatureSection
          badge='LEGALITAS BISNIS'
          title='Jasa Pendirian CV Mudah, Cepat & Hemat'
          description='Solusi legalitas yang tepat untuk usaha menengah dan berkembang. Dirikan CV Anda dengan proses yang lebih sederhana dan biaya yang lebih terjangkau, sudah termasuk fasilitas Virtual Office.'
          imageSrc='../public/img/Pembuatan-Cv.jpg' // Ganti dengan gambar CV Anda
          statsValue='100%'
          statsLabel='Legal & Terdaftar Kemenkumham'
          features={cvHeroFeatures}
          buttonText='Konsultasi Gratis'
          buttonLink='/hubungi-kami'
        />

        {/* 2. PROSES PENDIRIAN */}
        {/* Asumsi: Anda sudah modif ProcessTimeline agar menerima props `steps={cvSteps}` */}
        <ProcessTimeline title='Proses Pendirian CV di Indonesia' subtitle='Lebih cepat dari PT. Duduk tenang, biarkan kami yang mengurus legalitasnya.' steps={cvSteps} />

        {/* 4. PRICING SECTION */}
        <section className='py-24 bg-slate-50'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='text-center max-w-3xl mx-auto mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 text-slate-900'>Pilih Paket Pendirian CV Anda</h2>
              <p className='text-slate-600'>Biaya transparan, proses aman. Pilih paket hemat atau paket premium dengan fasilitas ruang meeting bulanan.</p>
            </div>

            <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
              {cvPackages.map((pkg, index) => (
                <CompanyPackageCard key={index} name={pkg.title} price={pkg.price} badge={pkg.badge} featured={pkg.featured} features={pkg.features} bonuses={pkg.bonuses} buttonText='Pilih Paket' buttonLink='/pendirian-cv' />
              ))}
            </div>
          </div>
        </section>
        <FaqPembuatanCV />
      </div>
    </>
  );
}
