/**
 * src/components/layout/Footer.jsx
 * Footer with 6 columns and bottom bar
 */
import React from 'react';
import { Facebook, Instagram, Youtube, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-dark text-white mt-12'>
      <div className='max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6'>
        <div>
          <div className='text-lg font-semibold'>
            OneStop <span className='font-bold'>Business Hub</span>
          </div>
          <p className='text-sm text-muted mt-2'>Solusi bisnis terpadu untuk kebutuhan perusahaan lokal dan internasional.</p>
          <div className='mt-3'>Hotline: 021 29 222 999</div>
          <div className='flex gap-2 mt-3'>
            <Facebook size={18} /> <Instagram size={18} /> <Youtube size={18} /> <Globe size={18} />
          </div>
        </div>
        <div>
          <h4 className='font-semibold'>Hubungi Kami</h4>
          <p className='text-sm text-muted mt-2'>
            Sen-Jum 08-18
            <br />
            CS: cs@domain.co.id
          </p>
        </div>
        <div>
          <h4 className='font-semibold'>Layanan</h4>
          <ul className='text-sm text-muted mt-2 space-y-1'>
            <li>Virtual Office</li>
            <li>Coworking Space</li>
            <li>Ruang Meeting</li>
            <li>Studio Podcast</li>
          </ul>
        </div>
        <div>
          <h4 className='font-semibold'>Lokasi</h4>
          <ul className='text-sm text-muted mt-2 space-y-1'>
            <li>Jakarta Selatan</li>
            <li>Jakarta Pusat</li>
            <li>Jakarta Utara</li>
            <li>Bekasi</li>
          </ul>
        </div>
        <div>
          <h4 className='font-semibold'>Menu</h4>
          <ul className='text-sm text-muted mt-2 space-y-1'>
            <li>FAQ</li>
            <li>Kebijakan Privasi</li>
            <li>S&amp;K</li>
            <li>Karir</li>
          </ul>
        </div>
        <div>
          <h4 className='font-semibold'>Lainnya</h4>
          <ul className='text-sm text-muted mt-2 space-y-1'>
            <li>Beranda</li>
            <li>Tentang Kami</li>
            <li>Lokasi</li>
            <li>Kontak Kami</li>
          </ul>
        </div>
      </div>
      <div className='bg-black/40 text-sm text-center py-3'>Copyright © 2026 One Stop Business Hub. All rights reserved.</div>
    </footer>
  );
}
