import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, CheckCircle2, Globe2, Building2 } from 'lucide-react';

/* --- KOMPONEN ANIMASI ANGKA --- */
const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  const formattedCount = count.toLocaleString('id-ID');

  return (
    <span ref={countRef} className='tabular-nums'>
      {formattedCount}
      {suffix}
    </span>
  );
};

export default function Services() {
  return (
    <section className='py-24 bg-white font-sans overflow-hidden'>
      <div className='w-full max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header yang lebih Editorial / Asimetris */}
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16'>
          <div className='max-w-2xl'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4'>
              Lebih dari sekadar angka.
              <br />
              <span className='text-blue-600'>Ini adalah bukti komitmen.</span>
            </h2>
          </div>
          <p className='text-slate-600 text-lg max-w-md leading-relaxed pb-2'>Kami bangga menjadi bagian dari perjalanan kesuksesan operasional dan legalitas ribuan bisnis di Indonesia.</p>
        </div>

        {/* BENTO BOX GRID LAYOUT */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Card 1: Memanjang & Mencolok (Klien Aktif) */}
          <div className='md:col-span-2 group relative bg-blue-600 rounded-[2rem] p-10 lg:p-12 overflow-hidden hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-300'>
            {/* Ornamen Grafis Abstrak di Kanan */}
            <div className='absolute -right-10 -bottom-10 opacity-20 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700'>
              <Globe2 size={240} className='text-white' />
            </div>

            <div className='relative z-10 flex flex-col h-full justify-between'>
              <div className='mb-12'>
                <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold backdrop-blur-md'>
                  <Building2 size={16} /> Skala Operasional
                </span>
              </div>
              <div>
                <div className='text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-4 flex items-start gap-2'>
                  <AnimatedCounter end={1500} />
                  <span className='text-4xl text-blue-300 mt-2'>+</span>
                </div>
                <h3 className='text-2xl font-bold text-white mb-2'>Klien Aktif</h3>
                <p className='text-blue-100 text-lg max-w-sm leading-relaxed'>Perusahaan lokal hingga multinasional yang mempercayakan administrasinya pada kami.</p>
              </div>
            </div>
          </div>

          {/* Card 2: Kotak Minimalis (Pengalaman) */}
          <div className='md:col-span-1 group bg-slate-50 border border-slate-100 rounded-[2rem] p-10 flex flex-col justify-between hover:bg-slate-100 transition-colors duration-300'>
            <div className='w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-800 mb-8 border border-slate-100 group-hover:-translate-y-1 transition-transform'>
              <ArrowUpRight size={24} strokeWidth={2.5} />
            </div>
            <div>
              <div className='text-5xl font-extrabold text-slate-900 mb-2'>
                <AnimatedCounter end={10} suffix='+' />
              </div>
              <h3 className='text-xl font-bold text-slate-800 mb-2'>Tahun Pengalaman</h3>
              <p className='text-slate-500'>Rekam jejak teruji dalam navigasi regulasi dan birokrasi.</p>
            </div>
          </div>

          {/* Card 3: Kotak Minimalis (Kepuasan) */}
          <div className='md:col-span-1 group bg-white border border-slate-200 rounded-[2rem] p-10 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300'>
            <div className='w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:-translate-y-1 transition-transform'>
              <CheckCircle2 size={24} strokeWidth={2.5} />
            </div>
            <div>
              <div className='text-5xl font-extrabold text-slate-900 mb-2'>
                <AnimatedCounter end={99} suffix='%' />
              </div>
              <h3 className='text-xl font-bold text-slate-800 mb-2'>Tingkat Kepuasan</h3>
              <p className='text-slate-500'>Layanan responsif yang berorientasi pada solusi klien.</p>
            </div>
          </div>

          {/* Card 4: Memanjang & Gelap (Izin & Dokumen) */}
          <div className='md:col-span-2 group relative bg-slate-900 rounded-[2rem] p-10 lg:p-12 overflow-hidden flex flex-col md:flex-row md:items-end justify-between gap-8 hover:shadow-2xl transition-shadow duration-300'>
            <div className='relative z-10'>
              <div className='mb-8 md:mb-12'>
                <span className='inline-flex px-4 py-2 rounded-full border border-slate-700 text-slate-300 text-sm font-semibold'>Produktivitas Tim</span>
              </div>
              <div className='text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-2'>
                <AnimatedCounter end={3200} suffix='+' />
              </div>
              <h3 className='text-2xl font-bold text-white'>Izin & Dokumen Terbit</h3>
            </div>

            <div className='relative z-10 max-w-sm'>
              <p className='text-slate-400 text-lg leading-relaxed'>Ratusan legalitas korporasi, pendirian badan usaha, hingga dokumen perizinan industri berhasil diselesaikan tepat waktu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
