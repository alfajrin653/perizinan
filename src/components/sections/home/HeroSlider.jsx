// /**
//  * src/components/sections/HeroSlider.jsx
//  * Hero slider using Swiper.js with fade effect and Ken Burns background
//  */

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';

// import { slides } from '../../../data/slides';

// export default function HeroSlider() {
//   return (
//     <section className='min-h-screen'>
//       <Swiper
//         modules={[EffectFade, Autoplay, Pagination]}
//         effect='fade'
//         loop={true}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className='relative flex min-h-screen items-center justify-center text-center text-white overflow-hidden'>
//               {/* Background */}
//               <img src={slide.image} alt={slide.headline} className='absolute inset-0 h-full w-full object-cover ken-burns' />

//               {/* Overlay */}
//               <div className='absolute inset-0 bg-gradient-to-b from-primary/30 to-dark/60'></div>

//               {/* Content */}
//               <div className='relative z-10 max-w-3xl px-6'>
//                 <span className='inline-block rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur'>ONE STOP BUSINESS HUB</span>

//                 <h1 className='mt-6 text-4xl font-bold md:text-6xl'>{slide.headline}</h1>

//                 <p className='mt-4 text-lg text-white/80'>{slide.sub}</p>

//                 <div className='mt-8 flex flex-wrap justify-center gap-4'>
//                   <a href='/' className='rounded-full bg-accent px-6 py-3 font-semibold text-dark transition hover:opacity-90'>
//                     Pelajari Lebih
//                   </a>

//                   {/* <a href='#' className='rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur transition hover:bg-white/20'>
//                     Cari Lokasi
//                   </a> */}
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }


/**
 * src/components/sections/HeroLight.jsx
 *
 * Hero terang, palet ketat: biru (primary) + putih + hitam/abu.
 * Kanan: ilustrasi kartu + blob (nuansa biru saja).
 * Bawah: tab kategori + card grid layanan (icon, judul, deskripsi, "Jelajahi →"),
 * kartu aktif berubah jadi solid biru — sesuai referensi kedua.
 *
 * Tanpa dependency tambahan — murni React state + CSS.
 */

import React, { useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------ */
/* DATA */
/* ------------------------------------------------------------------ */
const CATEGORIES = [
  {
    id: 'kantor',
    label: 'Kantor & Ruang Kerja',
    badge: 'Solusi untuk kebutuhan ruang kerja',
    services: [
      {
        name: 'Virtual Office',
        href: '/virtual-office',
        icon: 'building',
        pre: 'Alamat Bisnis Resmi Tanpa',
        highlight: 'Sewa Ruang Fisik',
        desc: 'Alamat korespondensi resmi untuk NIB dan legalitas PT/CV Anda, lengkap dengan resepsionis dan penerima surat.',
        cardDesc: 'Alamat bisnis profesional & legalitas perusahaan',
      },
      {
        name: 'Coworking Space',
        href: '/coworking-space',
        icon: 'people',
        pre: 'Tempat Kerja Fleksibel untuk',
        highlight: 'Tim Anda',
        desc: 'Kursi kerja nyaman, internet stabil, dan komunitas profesional dalam satu ruang bersama.',
        cardDesc: 'Ruang kerja fleksibel dengan fasilitas lengkap',
      },
      {
        name: 'Ruang Meeting',
        href: '/Room-meet',
        icon: 'briefcase',
        pre: 'Ruang Rapat Siap Pakai,',
        highlight: 'Kapan Saja',
        desc: 'Ruang meeting profesional dengan proyektor, whiteboard, dan internet cepat, disewa per jam.',
        cardDesc: 'Meeting room modern untuk kebutuhan bisnis',
      },
      {
        name: 'Studio Podcast',
        href: '/Podcast-studio',
        icon: 'mic',
        pre: 'Rekam Konten dengan',
        highlight: 'Kualitas Studio',
        desc: 'Ruang kedap suara dengan peralatan audio-visual profesional untuk podcast dan video bisnis Anda.',
        cardDesc: 'Studio profesional untuk podcast & konten',
      },
    ],
  },
  {
    id: 'bisnis',
    label: 'Layanan Bisnis',
    badge: 'Solusi legalitas & administrasi',
    services: [
      {
        name: 'Pendirian PT',
        href: '/pendirian-pt',
        icon: 'fileCheck',
        pre: 'Dirikan PT Anda, Legal',
        highlight: 'dalam Hitungan Hari',
        desc: 'Pengurusan akta, NIB, dan izin usaha lengkap untuk mendirikan Perseroan Terbatas tanpa bolak-balik.',
        cardDesc: 'Akta & NIB lengkap, proses tanpa ribet',
      },
      {
        name: 'Pendirian CV',
        href: '/pendirian-cv',
        icon: 'fileCheck',
        pre: 'CV Resmi, Proses',
        highlight: 'Cepat & Transparan',
        desc: 'Bentuk badan usaha CV Anda dengan pendampingan legal dari awal pengajuan hingga akta terbit.',
        cardDesc: 'Pendampingan legal dari awal sampai akta terbit',
      },
      {
        name: 'Pendirian Firma',
        href: '/pendirian-firma',
        icon: 'scale',
        pre: 'Firma untuk',
        highlight: 'Kemitraan Profesional',
        desc: 'Pendirian firma bagi praktik bersama, kantor hukum, konsultan, atau akuntan.',
        cardDesc: 'Untuk praktik bersama & kemitraan profesional',
      },
      {
        name: 'HaKI',
        href: '/pendaftaran-haki',
        icon: 'seal',
        pre: 'Lindungi Merek dan',
        highlight: 'Karya Anda',
        desc: 'Pendaftaran hak cipta dan merek dagang untuk mengamankan aset intelektual bisnis Anda.',
        cardDesc: 'Daftarkan hak cipta & merek dagang Anda',
      },
      {
        name: 'Pajak & Akuntansi',
        href: '/pajak-akuntansi',
        icon: 'calculator',
        pre: 'Laporan Rapi, Pajak',
        highlight: 'Selalu Tepat Waktu',
        desc: 'Pembukuan dan pelaporan pajak bulanan-tahunan ditangani tim ahli.',
        cardDesc: 'Pembukuan & pelaporan pajak oleh tim ahli',
      },
      {
        name: 'Call Answering',
        href: '/call-answering',
        icon: 'phone',
        pre: 'Setiap Panggilan Terjawab',
        highlight: 'Secara Profesional',
        desc: 'Tim resepsionis menjawab telepon bisnis Anda atas nama perusahaan, setiap hari kerja.',
        cardDesc: 'Resepsionis menjawab telepon atas nama Anda',
      },
    ],
  },
  {
    id: 'asing',
    label: 'Foreign Services',
    badge: 'Solution for global expansion',
    services: [
      {
        name: 'Pendirian PMA',
        href: '/pendirian-pma',
        icon: 'globe',
        pre: 'Buka Bisnis Asing di Indonesia,',
        highlight: 'Legal & Terarah',
        desc: 'Pendirian Penanaman Modal Asing lengkap dengan izin OSS dan struktur kepemilikan asing.',
        cardDesc: 'Izin OSS & struktur kepemilikan asing',
      },
      {
        name: 'International Setup',
        href: '/internasional-business',
        icon: 'globe',
        pre: 'Ekspansi Bisnis Lintas Negara,',
        highlight: 'Tanpa Tersesat Regulasi',
        desc: 'Pendampingan strategi dan legalitas bagi perusahaan internasional yang masuk ke pasar Indonesia.',
        cardDesc: 'Strategi & legalitas ekspansi ke Indonesia',
      },
      {
        name: 'Visa Bisnis',
        href: '/visa-bisnis',
        icon: 'passport',
        pre: 'Visa untuk',
        highlight: 'Urusan Bisnis',
        desc: 'Pengurusan visa kunjungan bisnis untuk rapat, negosiasi, dan penjajakan pasar.',
        cardDesc: 'Untuk rapat, negosiasi & penjajakan pasar',
      },
      {
        name: 'Visa Investor / KITAS',
        href: '/kitas-investor',
        icon: 'passport',
        pre: 'Tinggal & Berinvestasi',
        highlight: 'Tanpa Hambatan Izin',
        desc: 'KITAS investor untuk pemegang saham asing yang ingin tinggal sekaligus menjalankan bisnisnya.',
        cardDesc: 'Untuk pemegang saham asing yang menetap',
      },
      {
        name: 'Visa Turis',
        href: '/visa-turis',
        icon: 'plane',
        pre: 'Visa Wisata,',
        highlight: 'Proses Simpel',
        desc: 'Pengurusan visa turis untuk kunjungan wisata ke Indonesia, cepat dan tanpa ribet.',
        cardDesc: 'Kunjungan wisata, cepat dan tanpa ribet',
      },
    ],
  },
];

/* icon set — outline style, satu warna (mengikuti currentColor) */
const ICONS = {
  building: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
      <circle cx="17" cy="8" r="2.4" />
      <path d="M16 14.2c2.6.6 4.5 2.6 4.5 5.8" />
    </svg>
  ),
  mic: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v4" />
    </svg>
  ),
  fileCheck: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 15l2 2 4-4" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M6 7h12M4 7l3 6a3 3 0 0 1-6 0zM20 7l-3 6a3 3 0 0 0 6 0z" />
    </svg>
  ),
  seal: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14.5 7 22l5-3 5 3-2-7.5" />
    </svg>
  ),
  calculator: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M8 7h8M8 11h1M12 11h1M16 11h1M8 15h1M12 15h1M16 15h1M8 19h8" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 3a2 2 0 0 1-.4 2.1L8 10a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c1 .3 2 .5 3 .6a2 2 0 0 1 1.7 2z" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
    </svg>
  ),
  passport: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M8 17.5c.7-1.6 2.1-2.5 4-2.5s3.3.9 4 2.5" />
    </svg>
  ),
  plane: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.5 21 12 16l7-3.5c1-.5 1-2 0-2.5L12 6.5 10.5 1.5 9 3l1 5-6 3-3-1.5L0 11l3.5 2L2 17l1.5 1L6 15l3 3.5 1.5-1.5z" transform="translate(2 1) scale(0.9)"/>
    </svg>
  ),
};

/* ------------------------------------------------------------------ */

export default function HeroLight() {
  const [catIndex, setCatIndex] = useState(0);
  const [svcIndexByCat, setSvcIndexByCat] = useState({ kantor: 0, bisnis: 0, asing: 0 });
  const [fading, setFading] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const fadeTimeout = useRef(null);

  const category = CATEGORIES[catIndex];
  const service = category.services[svcIndexByCat[category.id]];

  const goTo = (nextCatIndex, nextSvcIndex) => {
    if (nextCatIndex === catIndex && nextSvcIndex === svcIndexByCat[CATEGORIES[nextCatIndex].id]) return;
    setFading(true);
    clearTimeout(fadeTimeout.current);
    fadeTimeout.current = setTimeout(() => {
      setCatIndex(nextCatIndex);
      setSvcIndexByCat((prev) => ({ ...prev, [CATEGORIES[nextCatIndex].id]: nextSvcIndex }));
      setFading(false);
    }, 180);
  };

  useEffect(() => () => clearTimeout(fadeTimeout.current), []);

  const handlePointerMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    setPointer({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };
  const resetPointer = () => setPointer({ x: 0, y: 0 });
  const depth = (d) => ({ transform: `translate3d(${pointer.x * d}px, ${pointer.y * d}px, 0)` });

  return (
    <section ref={sectionRef} onMouseMove={handlePointerMove} onMouseLeave={resetPointer} className="hl-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .hl-root {
          --blue: #2547D0;
          --blue-dark: #1B3399;
          --blue-tint: #EEF2FF;
          --blue-tint-2: #DCE4FB;
          --ink: #111827;
          --muted: #6B7280;
          --line: #E5E7EB;
          position: relative; overflow: hidden;
          background: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: var(--ink);
        }

        .hl-sparkle { position: absolute; color: var(--blue-tint-2); transition: transform 0.15s ease-out; }
        .hl-sparkle svg { animation: hl-float 5s ease-in-out infinite; }
        @keyframes hl-float { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-8px);} }

        .hl-wrap {
          max-width: 1220px; margin: 0 auto; padding: 6.5rem 6% 4rem;
          display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;
          position: relative; z-index: 2;
        }

        .hl-badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.85rem; font-weight: 500; color: var(--muted);
          background: #fff; border: 1px solid var(--line); border-radius: 9999px;
          padding: 0.5rem 1.1rem; box-shadow: 0 1px 2px rgba(0,0,0,0.04);
        }
        .hl-badge .dot { width: 7px; height: 7px; border-radius: 9999px; background: var(--blue); }

        .hl-fade { transition: opacity 0.22s ease, transform 0.22s ease; }
        .hl-fade.out { opacity: 0; transform: translateY(8px); }

        .hl-headline {
          margin-top: 1.3rem; font-weight: 800; letter-spacing: -0.02em;
          font-size: clamp(2rem, 3.6vw, 3rem); line-height: 1.15; color: var(--ink);
        }
        .hl-highlight { color: var(--blue); }

        .hl-desc { margin-top: 1.2rem; font-size: 1.05rem; line-height: 1.7; color: var(--muted); max-width: 520px; }

        .hl-actions { margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap; }
        .hl-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--blue); color: #fff; font-weight: 600; font-size: 0.95rem;
          padding: 0.9rem 1.7rem; border-radius: 9999px; text-decoration: none;
          box-shadow: 0 10px 22px -8px rgba(37,71,208,0.5);
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .hl-btn-primary:hover { transform: translateY(-2px); background: var(--blue-dark); }
        .hl-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: var(--ink); font-weight: 600; font-size: 0.95rem;
          padding: 0.9rem 1.6rem; border-radius: 9999px; border: 1px solid var(--line);
          text-decoration: none; transition: border-color 0.2s ease;
        }
        .hl-btn-secondary:hover { border-color: var(--blue); color: var(--blue); }

        .hl-visual { position: relative; height: 420px; }
        .hl-blob { position: absolute; border-radius: 42px; transition: transform 0.15s ease-out; }
        .hl-blob-a { left: 6%; bottom: 6%; width: 66%; height: 72%; background: var(--blue); transform: rotate(-3deg); }
        .hl-blob-b { right: 4%; bottom: 0; width: 58%; height: 60%; background: var(--blue-tint-2); transform: rotate(3deg); }

        .hl-card {
          position: absolute; top: 8%; left: 18%; width: 64%; height: 78%;
          background: #fff; border-radius: 32px; box-shadow: 0 24px 48px -12px rgba(17,24,39,0.16);
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem;
          padding: 2rem; text-align: center;
        }
        .hl-card-icon {
          width: 88px; height: 88px; border-radius: 20px; background: var(--blue-tint);
          color: var(--blue); display: flex; align-items: center; justify-content: center;
        }
        .hl-card-name { font-weight: 700; font-size: 1.15rem; }
        .hl-card-cat { font-size: 0.8rem; color: var(--muted); }

        .hl-float-tag {
          position: absolute; bottom: 6%; right: -2%;
          background: #fff; border-radius: 18px; box-shadow: 0 16px 32px -10px rgba(17,24,39,0.2);
          padding: 0.9rem 1.2rem; display: flex; align-items: center; gap: 10px;
          font-size: 0.85rem; font-weight: 600; transition: transform 0.15s ease-out;
        }
        .hl-float-tag .dot { width: 10px; height: 10px; border-radius: 9999px; background: var(--blue); }

        /* ---- switcher: tabs + card grid ---- */
        .hl-switcher { position: relative; z-index: 2; border-top: 1px solid var(--line); background: #F9FAFC; padding: 3rem 0 4rem; }
        .hl-switch-inner { max-width: 1220px; margin: 0 auto; padding: 0 6%; }
        .hl-tabs { display: flex; gap: 2rem; overflow-x: auto; margin-bottom: 2rem; }
        .hl-tab {
          font-size: 0.9rem; font-weight: 600; white-space: nowrap; color: var(--muted);
          background: none; border: none; cursor: pointer; padding: 0.3rem 0 0.9rem; border-bottom: 2px solid transparent;
        }
        .hl-tab.active { color: var(--blue); border-color: var(--blue); }

        .hl-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.1rem;
        }
        .hl-svc-card {
          text-align: left; cursor: pointer; border-radius: 18px; padding: 1.6rem 1.4rem;
          background: #fff; border: 1px solid var(--line);
          display: flex; flex-direction: column; gap: 1.1rem;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hl-svc-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -14px rgba(17,24,39,0.25); }
        .hl-svc-icon {
          width: 46px; height: 46px; border-radius: 12px; background: var(--blue-tint); color: var(--blue);
          display: flex; align-items: center; justify-content: center; transition: background 0.2s ease, color 0.2s ease;
        }
        .hl-svc-name { font-weight: 700; font-size: 1.02rem; color: var(--ink); }
        .hl-svc-desc { font-size: 0.85rem; line-height: 1.5; color: var(--muted); }
        .hl-svc-link { display: inline-flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 700; color: var(--ink); }

        .hl-svc-card.active {
          background: var(--blue); border-color: var(--blue);
          box-shadow: 0 16px 32px -12px rgba(37,71,208,0.45);
        }
        .hl-svc-card.active .hl-svc-icon { background: rgba(255,255,255,0.16); color: #fff; }
        .hl-svc-card.active .hl-svc-name,
        .hl-svc-card.active .hl-svc-link { color: #fff; }
        .hl-svc-card.active .hl-svc-desc { color: rgba(255,255,255,0.78); }

        @media (prefers-reduced-motion: reduce) {
          .hl-sparkle svg, .hl-fade, .hl-blob, .hl-float-tag, .hl-svc-card { animation: none !important; transition: none !important; }
        }

        @media (max-width: 900px) {
          .hl-wrap { grid-template-columns: 1fr; padding-top: 5rem; }
          .hl-visual { height: 320px; margin-top: 1rem; }
          .hl-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .hl-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {[
        { top: '10%', left: '6%', d: 8, s: 16 },
        { top: '22%', left: '46%', d: 5, s: 12 },
        { top: '68%', left: '2%', d: 10, s: 14 },
      ].map((sp, i) => (
        <div key={i} className="hl-sparkle" style={{ top: sp.top, left: sp.left, ...depth(sp.d) }}>
          <svg width={sp.s} height={sp.s} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2.2 9.8L24 12l-9.8 2.2L12 24l-2.2-9.8L0 12l9.8-2.2z" />
          </svg>
        </div>
      ))}

      <div className="hl-wrap">
        <div>
          <div className={`hl-fade ${fading ? 'out' : ''}`}>
            <span className="hl-badge"><span className="dot" />{category.badge}</span>
            <h1 className="hl-headline">
              {service.pre} <span className="hl-highlight">{service.highlight}</span>
            </h1>
            <p className="hl-desc">{service.desc}</p>
          </div>
          <div className="hl-actions">
            <a href={service.href} className="hl-btn-primary">Lihat {service.name} <span aria-hidden>→</span></a>
            <a href="/konsultasi" className="hl-btn-secondary"><span aria-hidden>▶</span> Konsultasi Gratis</a>
          </div>
        </div>

        <div className="hl-visual">
          <div className="hl-blob hl-blob-a" style={depth(10)} />
          <div className="hl-blob hl-blob-b" style={depth(14)} />
          <div className={`hl-card hl-fade ${fading ? 'out' : ''}`} style={depth(6)}>
            <div className="hl-card-icon">{ICONS[service.icon]}</div>
            <div className="hl-card-name">{service.name}</div>
            <div className="hl-card-cat">{category.label}</div>
          </div>
          <div className="hl-float-tag" style={depth(18)}>
            <span className="dot" />Layanan aktif &amp; siap diproses
          </div>
        </div>
      </div>

      <div className="hl-switcher">
        <div className="hl-switch-inner">
          <div className="hl-tabs">
            {CATEGORIES.map((c, i) => (
              <button key={c.id} className={`hl-tab ${i === catIndex ? 'active' : ''}`} onClick={() => goTo(i, svcIndexByCat[c.id])}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="hl-grid">
            {category.services.map((s, i) => {
              const active = i === svcIndexByCat[category.id];
              return (
                <button key={s.name} className={`hl-svc-card ${active ? 'active' : ''}`} onClick={() => goTo(catIndex, i)}>
                  <div className="hl-svc-icon">{ICONS[s.icon]}</div>
                  <div>
                    <div className="hl-svc-name">{s.name}</div>
                    <div className="hl-svc-desc">{s.cardDesc}</div>
                  </div>
                  <span className="hl-svc-link">Jelajahi <span aria-hidden>→</span></span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}