import React from 'react';
// Sesuaikan path import dengan struktur folder Anda
import FeatureSection from '../components/element/FeatureSection';
import FAQ from '../components/element/FAQ';

import { Globe, Briefcase, Landmark, ShieldCheck, MapPin, CheckCircle2, TrendingUp, Handshake, Building2, FileText, CreditCard } from 'lucide-react';

export default function InternationalSetup() {
  // ==========================================
  // 1. DATA HERO SECTION
  // ==========================================
  const internationalHeroFeatures = [
    { icon: Globe, title: '100% Proses Remote' },
    { icon: Landmark, title: 'Akun Bank Korporat' },
    { icon: ShieldCheck, title: 'Legalitas Terjamin' },
    { icon: Briefcase, title: 'Bebas Repot' },
  ];

  // ==========================================
  // 2. DATA KENAPA MEMILIH KAMI (WHY US)
  // ==========================================
  const whyUsFeatures = [
    {
      icon: Handshake,
      title: 'Jaringan Global yang Kuat',
      desc: 'Kami bermitra dengan agen legal dan bank internasional terpercaya di berbagai yurisdiksi untuk memastikan kelancaran proses bisnis Anda.',
    },
    {
      icon: FileText,
      title: 'Layanan All-in-One',
      desc: 'Dari pengecekan nama, pendaftaran lisensi, penyediaan alamat terdaftar, hingga bantuan pembukaan rekening bank dalam satu atap.',
    },
    {
      icon: CreditCard,
      title: 'Transparansi Biaya',
      desc: 'Tidak ada biaya tersembunyi. Kami memberikan rincian biaya setup dan biaya perpanjangan tahunan secara jelas di awal.',
    },
    {
      icon: TrendingUp,
      title: 'Ahli Pajak & Regulasi',
      desc: 'Tim kami akan memberikan panduan mengenai kewajiban pelaporan dan keuntungan sistem pajak di masing-masing negara tujuan Anda.',
    },
  ];

  const waNumber = '6281234567890';

  // ==========================================
  // DATA NEGARA (COUNTRIES) DENGAN WEB IMAGES
  // ==========================================
  const countries = [
    {
      name: 'Singapura',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1000&auto=format&fit=crop',
      highlights: ['Pusat Bisnis Asia', 'Pajak Perusahaan Rendah', 'Reputasi Global Sangat Baik'],
      desc: 'Gerbang utama menuju pasar Asia dengan sistem birokrasi yang sangat efisien dan ramah terhadap investor asing.',
    },
    {
      name: 'Hong Kong',
      image: 'https://images.unsplash.com/photo-1620015092538-e33c665fc181?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      highlights: ['Gerbang ke Tiongkok', 'Bebas Pajak Offshore', 'Pusat Keuangan Global'],
      desc: 'Cocok untuk bisnis perdagangan internasional dengan sistem perpajakan teritorial (tanpa pajak untuk pendapatan dari luar Hong Kong).',
    },
    {
      name: 'Dubai (UAE)',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop',
      highlights: ['Kawasan Free Zone', 'Bebas Pajak Penghasilan', 'Pusat Bisnis Timur Tengah'],
      desc: 'Tingkatkan prestise bisnis Anda dengan mendirikan perusahaan di kawasan bebas pajak (Free Zone) dengan 100% kepemilikan asing.',
    },
    {
      name: 'British Virgin Islands',
      image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1000&auto=format&fit=crop',
      highlights: ['Privasi Tinggi', 'Bebas Pajak 100%', 'Setup Sangat Cepat'],
      desc: 'Yurisdiksi offshore paling populer di dunia, ideal untuk holding company, perlindungan aset, dan efisiensi pajak.',
    },
    {
      name: 'Malaysia',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      highlights: ['Biaya Setup Terjangkau', 'Pajak 3% (Trading)', '100% Kepemilikan Asing'],
      desc: 'Pilihan strategis untuk perusahaan berorientasi ekspor dan teknologi yang ingin masuk ke pasar ASEAN dengan biaya rasional.',
    },
  ];
  // ==========================================
  // 4. DATA FAQ
  // ==========================================
  const internationalFaqs = [
    {
      question: 'Apakah saya harus datang langsung ke negara tersebut untuk buka perusahaan?',
      answer:
        'Tidak perlu. Hampir seluruh yurisdiksi yang kami tawarkan memungkinkan proses inkorporasi (pendirian perusahaan) secara 100% remote tanpa kehadiran fisik Anda. Semua dokumen dapat diproses secara elektronik atau dikirim via kurir internasional.',
    },
    {
      question: 'Bagaimana dengan pembukaan rekening bank korporat?',
      answer:
        'Kami bekerja sama dengan berbagai bank digital dan bank tradisional internasional (seperti di Singapura, Hong Kong, atau EMI di Eropa). Sebagian besar proses wawancara bank saat ini dapat dilakukan melalui Video Call. Kami akan mendampingi dan menyiapkan profil perusahaan Anda agar mudah disetujui oleh bank.',
    },
    {
      question: 'Apakah saya harus menyewa kantor fisik di negara tujuan?',
      answer: 'Tidak wajib. Paket pendirian perusahaan kami umumnya sudah termasuk Registered Address (Alamat Terdaftar) dan Company Secretary lokal yang diwajibkan oleh hukum setempat, sehingga Anda tidak perlu menyewa gedung atau ruko.',
    },
    {
      question: 'Apakah perusahaan di luar negeri dikenakan pajak di Indonesia?',
      answer:
        'Penghasilan perusahaan di luar negeri tunduk pada aturan pajak negara tersebut. Namun, jika dividen ditarik ke Indonesia oleh Anda sebagai Warga Negara Indonesia (Subjek Pajak Dalam Negeri), dividen tersebut harus dilaporkan di SPT Tahunan Pribadi Anda. Kami menyarankan untuk berkonsultasi lebih lanjut dengan tim pajak kami.',
    },
    {
      question: 'Berapa lama proses pendirian perusahaan internasional?',
      answer:
        'Waktu proses bervariasi. Negara seperti Singapura atau BVI bisa selesai dalam 3-5 hari kerja. Hong Kong memakan waktu sekitar 1-2 minggu, sementara Dubai (Free Zone) bisa memakan waktu 2-4 minggu. Waktu ini dihitung setelah semua dokumen persyaratan lengkap.',
    },
  ];

  return (
    <div className='w-full bg-white'>
      {/* 1. HERO SECTION */}
      <FeatureSection
        badge='GLOBAL BUSINESS GATEWAY'
        title='Ekspansi Bisnis Anda ke Kancah Internasional'
        description='Buka dan miliki perusahaan di luar negeri dengan mudah tanpa harus pindah atau berdomisili di sana. Kami mengurus seluruh legalitas, perizinan, hingga pembukaan rekening bank korporat global untuk Anda.'
        imageSrc='../public/img/internasional.png' // Ganti dengan gambar ilustrasi globe/bisnis
        statsValue='100%'
        statsLabel='Proses Online & Remote'
        features={internationalHeroFeatures}
      />

      {/* 2. WHY CHOOSE US SECTION */}
      <section className='py-24 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <span className='inline-flex bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4'>MENGAPA MEMILIH KAMI</span>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>Partner Global yang Bisa Diandalkan</h2>
            <p className='text-slate-600'>Menembus batas negara bukan hal yang sulit jika Anda dibantu oleh tim yang tepat.</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {whyUsFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className='bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
                  <div className='w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6'>
                    <Icon size={28} />
                  </div>
                  <h3 className='text-xl font-bold text-slate-900 mb-3'>{item.title}</h3>
                  <p className='text-slate-600 text-sm leading-relaxed'>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. NEGARA PILIHAN SECTION */}
      <section className='py-24 bg-white border-b border-slate-100'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          {/* Header */}
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>Pilihan Yurisdiksi Bisnis Global</h2>
            <p className='text-slate-600'>Pilih negara yang paling menguntungkan untuk model bisnis Anda. Dari pusat keuangan Asia hingga kawasan bebas pajak di Timur Tengah.</p>
          </div>

          {/* Grid Cards */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {countries.map((country, index) => {
              // Encode pesan WhatsApp agar spasi dan karakter khusus terbaca oleh URL
              const waMessage = encodeURIComponent(`Halo, saya tertarik untuk konsultasi mengenai pendirian bisnis di ${country.name}. Mohon informasinya.`);
              const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

              return (
                <div key={index} className='group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col'>
                  {/* Image Section */}
                  <div className='relative h-56 overflow-hidden'>
                    <img src={country.image} alt={country.name} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' loading='lazy' />
                    <div className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-slate-900 shadow-sm flex items-center gap-2'>
                      <MapPin size={16} className='text-blue-600' />
                      {country.name}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className='p-8 flex flex-col flex-grow'>
                    <p className='text-slate-600 mb-6 leading-relaxed flex-grow'>{country.desc}</p>

                    <div className='space-y-3'>
                      {country.highlights.map((highlight, idx) => (
                        <div key={idx} className='flex items-start gap-3'>
                          <CheckCircle2 className='w-5 h-5 text-green-500 shrink-0 mt-0.5' />
                          <span className='text-sm font-medium text-slate-700'>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* WhatsApp Button */}
                    <a
                      href={waLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mt-8 flex justify-center items-center gap-2 w-full bg-slate-50 text-blue-600 font-bold py-3 rounded-xl border border-blue-100 hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors duration-300'
                    >
                      Konsultasi via WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <FAQ faqs={internationalFaqs} title='FAQ Setup Bisnis Internasional' subtitle='Temukan jawaban atas keraguan Anda sebelum melangkah ke pasar global.' />
    </div>
  );
}
