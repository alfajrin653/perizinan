/**
 * src/components/sections/AboutStats.jsx
 * About text and stats grid using StatCounter
 */
import React from 'react';
import { stats } from '../../data/stats';
import StatCounter from '../ui/StatCounter';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function AboutStats() {
  useScrollReveal();
  return (
    <section className='mt-10 reveal'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
        <div>
          <h2 className='text-2xl font-bold'>Solusi bisnis terpadu untuk Perorangan, Freelancer, UMKM, Startup, Korporasi</h2>
          <p className='text-muted mt-3'>Kami menyediakan layanan lengkap: alamat bisnis, coworking, pendirian perusahaan, pajak & akuntansi, dan dukungan ekspansi internasional.</p>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {stats.map((s, idx) => (
            <StatCounter key={idx} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
