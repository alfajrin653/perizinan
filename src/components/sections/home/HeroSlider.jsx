import React, { useEffect, useRef, useState, useMemo } from 'react';

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

/* icon set */
const ICONS = {
  building: (
    <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
      <rect x='5' y='3' width='14' height='18' rx='1.5' />
      <path d='M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1' />
    </svg>
  ),
  briefcase: (
    <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
      <rect x='3' y='7' width='18' height='13' rx='2' />
      <path d='M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18' />
    </svg>
  ),
  people: (
    <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
      <circle cx='9' cy='8' r='3' />
      <path d='M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6' />
      <circle cx='17' cy='8' r='2.4' />
      <path d='M16 14.2c2.6.6 4.5 2.6 4.5 5.8' />
    </svg>
  ),
  mic: (
    <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
      <rect x='9' y='2' width='6' height='12' rx='3' />
      <path d='M5 11a7 7 0 0 0 14 0M12 18v4' />
    </svg>
  ),
  fileCheck: (
    <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
      <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
      <path d='M14 2v6h6M9 15l2 2 4-4' />
    </svg>
  ),
  scale: (
    <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
      <path d='M12 3v18M6 7h12M4 7l3 6a3 3 0 0 1-6 0zM20 7l-3 6a3 3 0 0 0 6 0z' />
    </svg>
  ),
  seal: (
    <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
      <circle cx='12' cy='9' r='6' />
      <path d='M9 14.5 7 22l5-3 5 3-2-7.5' />
    </svg>
  ),
  calculator: (
    <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
      <rect x='4' y='2' width='16' height='20' rx='2' />
      <path d='M8 7h8M8 11h1M12 11h1M16 11h1M8 15h1M12 15h1M16 15h1M8 19h8' />
    </svg>
  ),
  phone: (
    <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
      <path d='M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 3a2 2 0 0 1-.4 2.1L8 10a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c1 .3 2 .5 3 .6a2 2 0 0 1 1.7 2z' />
    </svg>
  ),
  globe: (
    <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
      <circle cx='12' cy='12' r='9' />
      <path d='M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z' />
    </svg>
  ),
  passport: (
    <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
      <rect x='5' y='2' width='14' height='20' rx='2' />
      <circle cx='12' cy='10' r='3' />
      <path d='M8 17.5c.7-1.6 2.1-2.5 4-2.5s3.3.9 4 2.5' />
    </svg>
  ),
  plane: (
    <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
      <path d='M10.5 21 12 16l7-3.5c1-.5 1-2 0-2.5L12 6.5 10.5 1.5 9 3l1 5-6 3-3-1.5L0 11l3.5 2L2 17l1.5 1L6 15l3 3.5 1.5-1.5z' transform='translate(2 1) scale(0.9)' />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */

// Daftar kata untuk animasi ngetik (diambil dari nama-nama service)
const TYPE_WORDS = ['Virtual Office', 'Pendirian PT', 'Coworking Space', 'Pajak & Akuntansi', 'Pendaftaran HaKI', 'Visa Bisnis'];

export default function HeroLight() {
  const [catIndex, setCatIndex] = useState(0);
  const [svcIndexByCat, setSvcIndexByCat] = useState({ kantor: 0, bisnis: 0, asing: 0 });

  // State untuk efek Typewriter
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Background Sparkles Parallax
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const category = CATEGORIES[catIndex];

  // Logic Typewriter Effect
  useEffect(() => {
    const word = TYPE_WORDS[currentWordIndex];
    // Kecepatan ngetik dan hapus
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        // Jeda bentar pas kata udah komplit sebelum dihapus
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        // Ganti ke kata selanjutnya
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % TYPE_WORDS.length);
      } else {
        // Proses ngetik / hapus huruf per huruf
        setCurrentText((prev) => (isDeleting ? word.substring(0, prev.length - 1) : word.substring(0, prev.length + 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  const goTo = (nextCatIndex, nextSvcIndex) => {
    setCatIndex(nextCatIndex);
    setSvcIndexByCat((prev) => ({ ...prev, [CATEGORIES[nextCatIndex].id]: nextSvcIndex }));
  };

  const handlePointerMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setPointer({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };
  const resetPointer = () => setPointer({ x: 0, y: 0 });
  const depth = (d) => ({ transform: `translate3d(${pointer.x * d}px, ${pointer.y * d}px, 0)` });

  return (
    <section ref={sectionRef} onMouseMove={handlePointerMove} onMouseLeave={resetPointer} className='hl-root'>
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
          position: relative; 
          overflow: hidden;
          background: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: var(--ink);
          padding: 4rem 0 2rem; 
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .hl-sparkle { position: absolute; color: var(--blue-tint-2); transition: transform 0.15s ease-out; }
        .hl-sparkle svg { animation: hl-float 5s ease-in-out infinite; }
        @keyframes hl-float { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-8px);} }

        .hl-container {
          max-width: 1220px;
          margin: 0 auto;
          width: 100%;
          padding: 0 6%;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center; /* Meratakan semua konten di tengah */
        }

        /* --- HERO CENTERED (NEW) --- */
        .hl-hero-centered {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 4rem;
          max-width: 800px;
        }

        .hl-badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.75rem; font-weight: 700; color: var(--blue); letter-spacing: 0.05em;
          background: var(--blue-tint); border: 1px solid var(--blue-tint-2); 
          border-radius: 9999px; padding: 0.4rem 1rem; text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .hl-badge .dot { width: 6px; height: 6px; border-radius: 9999px; background: var(--blue); }

        .hl-headline {
          font-weight: 800; letter-spacing: -0.03em;
          font-size: clamp(2.5rem, 5vw, 4.5rem); line-height: 1.1; color: var(--ink);
          margin-bottom: 1.5rem;
        }
        
        .hl-highlight-wrapper {
          display: block; /* Memaksa ke baris baru */
          color: var(--blue);
        }

        /* Efek Cursor Berkedip */
        .hl-cursor {
          border-right: 4px solid var(--blue);
          padding-right: 4px;
          animation: blink 0.75s step-end infinite;
        }
        @keyframes blink { 
          from, to { border-color: transparent } 
          50% { border-color: var(--blue); } 
        }

        .hl-desc { 
          font-size: 1.1rem; line-height: 1.6; color: var(--muted); 
          max-width: 600px; margin-bottom: 2.5rem;
        }

        .hl-actions { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; margin-bottom: 2rem;}
        
        .hl-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--blue); color: #fff; font-weight: 600; font-size: 1rem;
          padding: 1rem 2rem; border-radius: 12px; text-decoration: none;
          box-shadow: 0 10px 22px -8px rgba(37,71,208,0.5);
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .hl-btn-primary:hover { transform: translateY(-2px); background: var(--blue-dark); }
        
        .hl-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: var(--ink); font-weight: 600; font-size: 1rem;
          padding: 1rem 2rem; border-radius: 12px; border: 1px solid var(--line);
          text-decoration: none; transition: border-color 0.2s ease;
        }
        .hl-btn-secondary:hover { border-color: var(--blue); color: var(--blue); }

        .hl-features-row {
          display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;
          font-size: 0.85rem; font-weight: 600; color: var(--muted);
        }
        .hl-feature-item { display: flex; align-items: center; gap: 6px; }
        .hl-feature-icon { color: #10B981; /* Warna hijau untuk checkmark */ }


        /* --- TABS & CARDS SECTION --- */
        .hl-switcher-inline {
          width: 100%;
          position: relative;
          z-index: 2;
          padding-top: 2rem;
          border-top: 1px solid var(--line);
        }
        
        .hl-section-title {
          font-weight: 800; letter-spacing: -0.02em; color: var(--ink);
          font-size: clamp(1.4rem, 2vw, 1.8rem); text-align: center;
          margin-bottom: 2rem;
        }

        .hl-tabs { display: flex; gap: 2rem; overflow-x: auto; margin-bottom: 1.5rem; justify-content: center; }
        .hl-tab {
          font-size: 0.95rem; font-weight: 600; white-space: nowrap; color: var(--muted);
          background: none; border: none; cursor: pointer; padding: 0.3rem 0 0.7rem; border-bottom: 2px solid transparent;
        }
        .hl-tab.active { color: var(--blue); border-color: var(--blue); }

        .hl-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        
        .hl-svc-card {
          text-align: left; cursor: pointer; border-radius: 14px; padding: 1.2rem 1rem;
          background: #fff; border: 1px solid var(--line);
          display: flex; flex-direction: column; gap: 0.8rem;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hl-svc-card:hover { transform: translateY(-3px); box-shadow: 0 10px 20px -10px rgba(17,24,39,0.15); }
        .hl-svc-icon {
          width: 42px; height: 42px; border-radius: 10px; background: var(--blue-tint); color: var(--blue);
          display: flex; align-items: center; justify-content: center; transition: background 0.2s ease, color 0.2s ease;
        }
        .hl-svc-name { font-weight: 700; font-size: 0.95rem; color: var(--ink); }
        .hl-svc-desc { font-size: 0.75rem; line-height: 1.4; color: var(--muted); }
        .hl-svc-link { display: inline-flex; align-items: center; gap: 6px; font-size: 0.75rem; font-weight: 700; color: var(--ink); margin-top: auto; }

        .hl-svc-card.active {
          background: var(--blue); border-color: var(--blue);
          box-shadow: 0 14px 28px -10px rgba(37,71,208,0.45);
        }
        .hl-svc-card.active .hl-svc-icon { background: rgba(255,255,255,0.16); color: #fff; }
        .hl-svc-card.active .hl-svc-name,
        .hl-svc-card.active .hl-svc-link { color: #fff; }
        .hl-svc-card.active .hl-svc-desc { color: rgba(255,255,255,0.85); }

        @media (prefers-reduced-motion: reduce) {
          .hl-sparkle svg, .hl-cursor, .hl-svc-card { animation: none !important; transition: none !important; }
        }

        @media (max-width: 900px) {
          .hl-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .hl-headline { font-size: 2.2rem; }
          .hl-grid { grid-template-columns: 1fr; }
          .hl-features-row { flex-direction: column; gap: 0.8rem; }
        }
      `}</style>

      {/* Sparkles Decorative Background */}
      {[
        { top: '15%', left: '10%', d: 8, s: 20 },
        { top: '25%', left: '80%', d: 5, s: 16 },
        { top: '70%', left: '5%', d: 10, s: 14 },
        { top: '60%', left: '90%', d: 12, s: 24 },
      ].map((sp, i) => (
        <div key={i} className='hl-sparkle' style={{ top: sp.top, left: sp.left, ...depth(sp.d) }}>
          <svg width={sp.s} height={sp.s} viewBox='0 0 24 24' fill='currentColor'>
            <path d='M12 0l2.2 9.8L24 12l-9.8 2.2L12 24l-2.2-9.8L0 12l9.8-2.2z' />
          </svg>
        </div>
      ))}

      <div className='hl-container'>
        {/* --- HERO CENTERED BERDASARKAN GAMBAR --- */}
        <div className='hl-hero-centered'>
          <span className='hl-badge'>
            <span className='dot' />
            Satu Atap Untuk Semua Kebutuhan
          </span>

          <h1 className='hl-headline'>
            Solusi Terbaik Untuk
            <span className='hl-highlight-wrapper'>
              <span className='hl-cursor'>{currentText}</span>
            </span>
          </h1>

          <p className='hl-desc'>Kami menggabungkan layanan legalitas, ruang kerja profesional, hingga pengurusan administrasi asing ke dalam satu ekosistem yang dirancang untuk mempercepat pertumbuhan bisnis Anda.</p>

          <div className='hl-actions'>
            <a href='/get-started' className='hl-btn-primary'>
              <svg viewBox='0 0 24 24' width='18' height='18' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'></polygon>
              </svg>
              Mulai Sekarang
            </a>
            <a href='/konsultasi' className='hl-btn-secondary'>
              <svg viewBox='0 0 24 24' width='18' height='18' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <polygon points='5 3 19 12 5 21 5 3'></polygon>
              </svg>
              Konsultasi Gratis
            </a>
          </div>

          <div className='hl-features-row'>
            <div className='hl-feature-item'>
              <svg className='hl-feature-icon' viewBox='0 0 24 24' width='16' height='16' fill='none' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'>
                <polyline points='20 6 9 17 4 12'></polyline>
              </svg>
              Layanan Aktif & Cepat
            </div>
            <div className='hl-feature-item'>
              <svg className='hl-feature-icon' viewBox='0 0 24 24' width='16' height='16' fill='none' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'>
                <polyline points='20 6 9 17 4 12'></polyline>
              </svg>
              Harga Transparan
            </div>
            <div className='hl-feature-item'>
              <svg className='hl-feature-icon' viewBox='0 0 24 24' width='16' height='16' fill='none' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'>
                <polyline points='20 6 9 17 4 12'></polyline>
              </svg>
              Tim Ahli Tersertifikasi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
