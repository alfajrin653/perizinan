import React from 'react';
// Sesuaikan path import dengan struktur folder Anda
import FeatureSection from '../components/element/FeatureSection';
import CompanyPackageCard from '../components/element/PricingPembuatan';
import ProcessTimeline from '../components/element/Proses';
// import Requirements from "../components/element/";
import FAQ from '../components/element/FAQ';
import { Clock, Wallet, Building, Scale, Search, FileSignature, Briefcase, CreditCard, IdCard, FileText, Image as ImageIcon, MapPin, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function PendirianFirma() {
  // ==========================================
  // 1. DATA HERO SECTION (FIRMA)
  // ==========================================
  const firmaHeroFeatures = [
    { icon: Clock, title: 'Proses Cepat & Praktis' },
    { icon: Users, title: 'Cocok Untuk Partnership' },
    { icon: Building, title: 'Gratis Virtual Office' },
    { icon: Scale, title: 'Legalitas Terjamin' },
  ];

  // ==========================================
  // 2. DATA PROSES PENDIRIAN (FIRMA)
  // ==========================================
  const firmaSteps = [
    {
      id: 1,
      icon: Search,
      title: 'Pengecekan Nama Firma',
      desc: 'Pengecekan ketersediaan nama Firma pilihan Anda untuk memastikan belum digunakan oleh pihak lain, dilanjutkan dengan pemesanan nama.',
    },
    {
      id: 2,
      icon: FileSignature,
      title: 'Penandatanganan Akta Notaris',
      desc: 'Pembuatan draft Akta Pendirian Firma. Seluruh sekutu (pendiri) wajib menandatangani Akta ini di hadapan Notaris.',
    },
    {
      id: 3,
      icon: Scale,
      title: 'Pendaftaran Kemenkumham',
      desc: 'Akta Pendirian didaftarkan ke Kementerian Hukum dan HAM melalui sistem AHU untuk mendapatkan Surat Keterangan Terdaftar (SKT).',
    },
    {
      id: 4,
      icon: Briefcase,
      title: 'Pengurusan NIB (OSS)',
      desc: 'Pendaftaran di sistem OSS (Online Single Submission) untuk mendapatkan Nomor Induk Berusaha (NIB) sebagai izin operasional.',
    },
    {
      id: 5,
      icon: CreditCard,
      title: 'Pendaftaran NPWP',
      desc: 'Pembuatan Nomor Pokok Wajib Pajak (NPWP) dan Surat Keterangan Terdaftar (SKT) di KPP domisili Firma.',
    },
  ];

  // ==========================================
  // 3. DATA PERSYARATAN (FIRMA)
  // ==========================================
  const firmaRequirements = [
    {
      icon: Users,
      title: 'Minimal 2 Orang Pendiri',
      desc: 'Firma wajib didirikan oleh minimal 2 orang sekutu yang akan menjalankan usaha secara bersama-sama.',
    },
    {
      icon: IdCard,
      title: 'E-KTP & NPWP',
      desc: 'Fotokopi atau hasil scan KTP dan NPWP pribadi milik seluruh pendiri/sekutu Firma.',
    },
    {
      icon: FileText,
      title: 'Kartu Keluarga (KK)',
      desc: 'Fotokopi atau hasil scan Kartu Keluarga (KK) khusus untuk pengurus yang ditunjuk.',
    },
    {
      icon: ImageIcon,
      title: 'Pas Foto',
      desc: 'Pas foto berwarna pengurus penanggung jawab ukuran 3x4 atau 4x6 (latar belakang merah).',
    },
    {
      icon: MapPin,
      title: 'Bukti Domisili Usaha',
      desc: 'Gunakan layanan Virtual Office kami agar syarat domisili Anda otomatis terpenuhi tanpa harus menyewa ruko/kantor fisik.',
      highlight: true,
    },
  ];

  // ==========================================
  // 4. DATA PAKET HARGA (FIRMA)
  // ==========================================
  const firmaPackages = [
    {
      title: 'Firma + Virtual Office Basic',
      price: 'Rp 3.500.000',
      badge: 'STARTER',
      desc: 'Paket hemat untuk pengusaha pemula yang ingin memulai bisnis dengan legalitas dasar.',
      featured: false,
      features: ['Pengecekan Nama Firma', 'Akta Pendirian Notaris', 'SK Terdaftar Kemenkumham', 'NIB & Sertifikat Standar', 'NPWP & SKT Perusahaan'],
      bonuses: ['Virtual Office (1 Tahun)', 'Layanan Penerimaan Surat'],
    },
    {
      title: 'Firma + Virtual Office Premium',
      price: 'Rp 5.500.000',
      badge: 'TERLARIS',
      desc: 'Paket lengkap dengan fasilitas Virtual Office premium untuk operasional bisnis yang lebih profesional.',
      featured: true,
      features: ['Semua kelengkapan legalitas Firma', 'Layanan Resepsionis Profesional', 'Bantuan Pembukaan Rekening Bank'],
      bonuses: ['Virtual Office Premium (1 Tahun)', 'Nomor Telepon Perusahaan Bersama', 'Kuota Meeting Room (10 Jam/Bulan)'],
    },
  ];

  // ==========================================
  // 5. DATA FAQ (FIRMA)
  // ==========================================
  const firmaFaqs = [
    {
      question: 'Apa perbedaan mendasar antara Firma dengan CV atau PT?',
      answer:
        'Perbedaan utamanya ada pada tanggung jawab. Pada Firma, seluruh sekutu (pendiri) memiliki tanggung jawab renteng yang tidak terbatas hingga ke harta pribadi jika terjadi kerugian. Sedangkan PT memiliki tanggung jawab terbatas pada modal yang disetor, dan CV memisahkan antara sekutu aktif dan pasif.',
    },
    {
      question: 'Siapa yang cocok mendirikan badan usaha Firma?',
      answer:
        'Firma sangat cocok untuk persekutuan bisnis yang mengandalkan keahlian profesi dan kepercayaan tinggi antar pendiri, seperti kantor konsultan hukum, kantor akuntan, atau agen jasa tertentu di mana para pendiri menggunakan satu nama bersama.',
    },
    {
      question: 'Berapa lama proses pendirian Firma hingga selesai?',
      answer: 'Normalnya proses pendirian memakan waktu sekitar 3-7 hari kerja setelah seluruh dokumen diserahkan secara lengkap dan nama disetujui oleh Kemenkumham.',
    },
    {
      question: 'Apakah nama Firma harus mengandung nama pendirinya?',
      answer: 'Tidak selalu wajib, namun secara tradisional banyak Firma menggunakan nama pendirinya (misal: Firma Hukum A & B). Anda bebas menggunakan nama lain selama tidak melanggar aturan Kemenkumham dan belum digunakan pihak lain.',
    },
    {
      question: 'Apakah alamat Virtual Office sah untuk mendaftarkan Firma?',
      answer: 'Ya, sah. Virtual Office kami terletak di zona komersial yang sesuai regulasi pemerintah, sehingga dapat digunakan sebagai domisili resmi dalam Akta Pendirian, NIB, dan NPWP Firma Anda.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Jasa Pendirian Firma Hukum & Bisnis - Duduk Manis</title>
        <meta name='description' content='Jasa pembuatan dan pendirian Firma secara profesional. Urus akta legalitas kemitraan bisnis Anda dengan aman, tepat, dan cepat bersama Duduk Manis.' />
      </Helmet>
      <div className='w-full bg-white'>
        {/* 1. HERO SECTION */}
        <FeatureSection
          badge='LEGALITAS BISNIS'
          title='Jasa Pendirian Firma Mudah, Aman & Terpercaya'
          description='Wujudkan kerja sama bisnis Anda dengan legalitas badan usaha Firma yang diakui negara. Cocok untuk persekutuan profesi dan kemitraan erat, sudah termasuk fasilitas Virtual Office.'
          imageSrc='../public/img/pendirian-firma.jpg' // Ganti dengan gambar yang relevan (misal: orang bersalaman/meeting)
          statsValue='100%'
          statsLabel='Legal & Terdaftar Kemenkumham'
          features={firmaHeroFeatures}
          buttonText='Konsultasi Gratis'
          buttonLink='/hubungi-kami'
        />

        {/* 2. PROSES PENDIRIAN */}
        <ProcessTimeline title='Alur Pendirian Firma' subtitle='Hanya 5 langkah praktis. Kami akan memandu Anda dari awal hingga dokumen legalitas siap di tangan.' steps={firmaSteps} />

        {/* 3. PERSYARATAN */}
        {/* <Requirements 
        title="Persyaratan Mudah"
        subtitle="Siapkan dokumen dasar pendiri, dan biarkan kami yang mengurus kerumitan birokrasinya."
        requirements={firmaRequirements} 
      /> */}

        {/* 4. PRICING SECTION */}
        <section className='py-24 bg-slate-50'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='text-center max-w-3xl mx-auto mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 text-slate-900'>Pilih Paket Pendirian Firma</h2>
              <p className='text-slate-600'>Dapatkan legalitas lengkap dengan biaya transparan. Paket kami dirancang untuk mendukung operasional Anda langsung berjalan.</p>
            </div>

            <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
              {firmaPackages.map((pkg, index) => (
                <CompanyPackageCard key={index} name={pkg.title} price={pkg.price} badge={pkg.badge} desc={pkg.desc} featured={pkg.featured} features={pkg.features} bonuses={pkg.bonuses} buttonText={pkg.buttonText} buttonLink={pkg.buttonLink} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. FAQ SECTION */}
        <FAQ title='Pertanyaan Seputar Firma' subtitle='Informasi penting mengenai legalitas dan karakteristik badan usaha Firma.' faqs={firmaFaqs} />
      </div>
    </>
  );
}
