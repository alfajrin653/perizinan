import React, { useEffect, useRef, useState } from 'react';

const FEATURES = [
  {
    id: 'cepat',
    title: 'Proses Cepat',
    desc: 'Pengurusan dokumen dan legalitas diselesaikan secara efisien dan tepat waktu. Kami memastikan bisnis Anda dapat segera beroperasi tanpa penundaan birokrasi yang berbelit.',
    icon: (
      <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2' />
      </svg>
    ),
  },
  {
    id: 'transparan',
    title: 'Transparan',
    desc: 'Semua prosedur berjalan transparan tanpa adanya biaya tersembunyi. Anda akan mendapatkan laporan progres berkala untuk setiap tahapan legalitas dan administrasi.',
    icon: (
      <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
      </svg>
    ),
  },
  {
    id: 'harga',
    title: 'Harga Kompetitif',
    desc: 'Biaya terjangkau dengan kualitas layanan premium untuk berbagai skala bisnis. Kami menyediakan paket fleksibel yang bisa disesuaikan dengan anggaran perusahaan Anda.',
    icon: (
      <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z' />
        <line x1='7' y1='7' x2='7.01' y2='7' />
      </svg>
    ),
  },
  {
    id: 'end-to-end',
    title: 'Layanan End-to-End',
    desc: 'Dari konsultasi awal, pengumpulan berkas, hingga izin resmi diterbitkan, semua ditangani di satu pintu. Anda tidak perlu mencari vendor terpisah untuk setiap kebutuhan.',
    icon: (
      <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <polygon points='12 2 2 7 12 12 22 7 12 2' />
        <polyline points='2 12 12 17 22 12' />
        <polyline points='2 17 12 22 22 17' />
      </svg>
    ),
  },
  {
    id: 'support',
    title: 'Dukungan Purna Layanan',
    desc: 'Hubungan kami tidak berhenti setelah izin terbit. Tim profesional kami selalu siap sedia membantu konsultasi tambahan dan pembaruan dokumen kapan pun dibutuhkan.',
    icon: (
      <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M3 18v-6a9 9 0 0 1 18 0v6' />
        <path d='M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z' />
      </svg>
    ),
  },
];

export default function MengapaKami() {
  const [activeIndex, setActiveIndex] = useState(0);
  const observer = useRef(null);
  const itemRefs = useRef([]);

  // Logika mendeteksi elemen saat di-scroll
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      // Root margin ini mengatur "zona pemicu" di tengah layar
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.current.observe(ref);
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return (
    <section className='split-root'>
      <style>{`
        .split-root {
          --blue: #2547D0;
          --blue-dark: #1B3399;
          --blue-tint: #EEF2FF;
          --ink: #111827;
          --muted: #6B7280;
          --line: #E5E7EB;
          
          font-family: 'Plus Jakarta Sans', sans-serif;
          background-color: #ffffff;
          padding: 6rem 0;
          color: var(--ink);
          position: relative;
        }

        .split-container {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 6%;
          display: flex;
          align-items: flex-start;
          gap: 4rem;
        }

        /* --- SISI KIRI (STICKY) --- */
        .split-left {
          flex: 1;
          position: sticky;
          top: 15vh; /* Menjaga jarak dari atas layar */
          height: max-content;
          display: flex;
          gap: 2.5rem;
        }

        /* Stepper Vertikal */
        .split-stepper {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          padding-top: 1rem;
        }

        /* Garis vertikal di belakang icon */
        .split-stepper::before {
          content: '';
          position: absolute;
          top: 2rem;
          bottom: 2rem;
          left: 20px; /* Di tengah icon */
          width: 2px;
          background: var(--line);
          z-index: 0;
        }

        .step-item {
          display: flex;
          align-items: center;
          position: relative;
          z-index: 1;
          cursor: pointer;
          transition: opacity 0.3s ease;
          opacity: 0.4;
        }

        .step-item.active {
          opacity: 1;
        }

        .step-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid var(--line);
          color: var(--muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .step-item.active .step-icon {
          border-color: var(--blue);
          background: var(--blue);
          color: #fff;
          box-shadow: 0 0 0 4px var(--blue-tint);
        }

        /* Teks Intro Kiri */
        .split-intro {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .badge-text {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--blue);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .badge-text::before {
          content: '';
          width: 16px;
          height: 2px;
          background: var(--blue);
        }

        .intro-title {
          font-weight: 800;
          font-size: clamp(2rem, 3vw, 2.6rem);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1.2rem;
          color: var(--ink);
        }

        .intro-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--muted);
        }

        /* --- SISI KANAN (SCROLLING) --- */
        .split-right {
          flex: 1.2;
          display: flex;
          flex-direction: column;
          /* Padding bawah agar elemen terakhir bisa discroll sampai ke trigger point */
          padding-bottom: 30vh; 
        }

        .scroll-section {
          min-height: 55vh; /* Memaksa area scroll panjang */
          display: flex;
          align-items: center;
        }

        .card-visual {
          width: 100%;
          background: var(--blue-tint);
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 3rem 2.5rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-visual:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -12px rgba(37, 71, 208, 0.15);
        }

        /* Efek watermark icon besar di latar belakang card */
        .card-watermark {
          position: absolute;
          top: -10%;
          right: -5%;
          width: 200px;
          height: 200px;
          color: var(--blue);
          opacity: 0.05;
          transform: rotate(-15deg);
        }

        .card-visual-icon {
          width: 56px;
          height: 56px;
          background: var(--blue);
          color: #fff;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .card-title {
          font-weight: 800;
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: var(--ink);
          position: relative;
          z-index: 2;
        }

        .card-desc {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--muted);
          position: relative;
          z-index: 2;
        }

        /* --- RESPONSIVE MEDIA QUERIES --- */
        @media (max-width: 960px) {
          .split-container {
            flex-direction: column;
            gap: 2rem;
          }
          
          /* Matikan efek sticky di mobile/tablet */
          .split-left {
            position: relative;
            top: 0;
            width: 100%;
            flex-direction: column;
          }

          .split-stepper {
            display: none; /* Sembunyikan stepper di mobile agar hemat tempat */
          }

          .split-right {
            width: 100%;
            padding-bottom: 2rem;
          }

          .scroll-section {
            min-height: auto;
            margin-bottom: 2rem;
          }

          .card-visual { padding: 2rem 1.5rem; }
        }
      `}</style>

      <div className='split-container'>
        {/* BAGIAN KIRI YANG TETAP (STICKY) */}
        <div className='split-left'>
          <div className='split-stepper'>
            {FEATURES.map((feature, idx) => (
              <div
                key={feature.id}
                className={`step-item ${activeIndex === idx ? 'active' : ''}`}
                // Opsional: Klik icon bisa scroll manual (jika butuh, bisa ditambah logika anchor)
              >
                <div className='step-icon'>{feature.icon}</div>
              </div>
            ))}
          </div>

          <div className='split-intro'>
            <span className='badge-text'>Mengapa Memilih Kami</span>
            <h2 className='intro-title'>Fokus Kembangkan Usaha Anda</h2>
            <p className='intro-desc'>Kami menghadirkan layanan bisnis terintegrasi agar Anda fokus mengembangkan usaha, sementara kebutuhan administratif ditangani oleh tim profesional.</p>
          </div>
        </div>

        {/* BAGIAN KANAN YANG BISA DI-SCROLL */}
        <div className='split-right'>
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className='scroll-section'
              ref={(el) => (itemRefs.current[idx] = el)} // Menghubungkan div ini ke Observer
            >
              <div className='card-visual'>
                {/* Ikon transparan besar sebagai dekorasi (Watermark) */}
                <div className='card-watermark'>{feature.icon}</div>

                <div className='card-visual-icon'>{feature.icon}</div>
                <h3 className='card-title'>{feature.title}</h3>
                <p className='card-desc'>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
