import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Landmark, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Cta() {
  return (
    <section className='py-12 mt-8'>
      {/* Banner Container */}
      <div className='relative rounded-[2.5rem] bg-slate-900 overflow-hidden px-8 py-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl shadow-slate-900/20'>
        {/* Latar Belakang Dekoratif (Glow) */}
        <div className='absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none'></div>
        <div className='absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none'></div>

        {/* --- Bagian Kiri: Teks Utama --- */}
        <div className='relative z-10 lg:w-5/12'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-md'>
            <span className='w-2 h-2 rounded-full bg-blue-400 animate-pulse'></span>
            Promo Bundling
          </div>
          <h2 className='text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight'>
            Duduk Manis, Biar Kami Yang Urus <span className='text-blue-400'>Legalitasnya.</span>
          </h2>
          <p className='text-slate-300 text-lg leading-relaxed mb-8'>Dirikan perusahaan Anda (PT/CV) dengan mudah tanpa proses yang ribet. Sudah termasuk layanan Virtual Office premium selama 1 tahun.</p>

          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3 text-slate-300'>
              <CheckCircle2 className='text-green-400 w-5 h-5 shrink-0' />
              <span>Proses Cepat & Transparan</span>
            </div>
            <div className='flex items-center gap-3 text-slate-300'>
              <CheckCircle2 className='text-green-400 w-5 h-5 shrink-0' />
              <span>Gratis Konsultasi Hukum</span>
            </div>
          </div>
        </div>

        {/* --- Bagian Kanan: Kartu Pilihan PT / CV --- */}
        <div className='relative z-10 lg:w-7/12 flex flex-col sm:flex-row gap-6 w-full'>
          {/* Kartu Pendirian PT */}
          <Link
            to='/pendirian-pt'
            className='group flex-1 bg-white/10 hover:bg-blue-600 border border-white/20 hover:border-blue-500 rounded-3xl p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/40'
          >
            <div className='w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500'>
              <Building2 size={28} strokeWidth={1.5} />
            </div>
            <h3 className='text-2xl font-bold text-white mb-2'>Pendirian PT</h3>
            <p className='text-slate-400 group-hover:text-blue-100 mb-8 leading-relaxed transition-colors'>Paket pendirian Perseroan Terbatas + Virtual Office.</p>
            <div className='flex items-center text-white font-semibold gap-2 mt-auto'>
              Lihat Detail
              <ArrowRight size={18} className='transform group-hover:translate-x-2 transition-transform duration-300' />
            </div>
          </Link>

          {/* Kartu Pendirian CV */}
          <Link
            to='/pendirian-cv'
            className='group flex-1 bg-white/10 hover:bg-blue-600 border border-white/20 hover:border-blue-500 rounded-3xl p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/40'
          >
            <div className='w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500'>
              <Landmark size={28} strokeWidth={1.5} />
            </div>
            <h3 className='text-2xl font-bold text-white mb-2'>Pendirian CV</h3>
            <p className='text-slate-400 group-hover:text-blue-100 mb-8 leading-relaxed transition-colors'>Solusi badan usaha hemat biaya + Virtual Office.</p>
            <div className='flex items-center text-white font-semibold gap-2 mt-auto'>
              Lihat Detail
              <ArrowRight size={18} className='transform group-hover:translate-x-2 transition-transform duration-300' />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
