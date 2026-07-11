/**
 * src/components/layout/Footer.jsx
 * Footer with 6 columns and bottom bar
 */
import React from 'react';
// import { Facebook, Instagram, Youtube, Globe } from 'lucide-react';

// ============================================================
// DATA LINK — satu sumber data per kolom, biar gampang ditambah
// atau diubah tanpa harus utak-atik markup-nya
// ============================================================
const FOOTER_COLUMNS = [
  {
    title: 'Layanan',
    links: [
      { label: 'Virtual Office', href: '/virtual-office' },
      { label: 'Coworking Space', href: '/coworking-space' },
      { label: 'Ruang Meeting', href: '/Room-meet' },
      { label: 'Studio Podcast', href: '/Podcast-studio' },
    ],
  },
  // {
  //   title: 'Lokasi',
  //   links: [
  //     { label: 'Jakarta Selatan', href: '/lokasi/jakarta-selatan' },
  //     { label: 'Jakarta Pusat', href: '/lokasi/jakarta-pusat' },
  //     { label: 'Jakarta Utara', href: '/lokasi/jakarta-utara' },
  //     { label: 'Bekasi', href: '/lokasi/bekasi' },
  //   ],
  // },
  {
    title: 'Menu',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Kebijakan Privasi', href: '/kebijakan-privasi' },
      { label: 'S&K', href: '/syarat-ketentuan' },
      { label: 'Karir', href: '/karir' },
    ],
  },
  {
    title: 'Lainnya',
    links: [
      { label: 'Beranda', href: '/' },
      { label: 'Tentang Kami', href: '/tentang-kami' },
      // { label: 'Lokasi', href: '/lokasi' },
      { label: 'Kontak Kami', href: '/hubungi-kami' },
    ],
  },
];

// const SOCIAL_LINKS = [
//   { label: 'Facebook', href: 'https://facebook.com', Icon: Facebook },
//   { label: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
//   { label: 'Youtube', href: 'https://youtube.com', Icon: Youtube },
//   { label: 'Website', href: '/', Icon: Globe },
// ];

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white mt-12'>
      <div className='max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'>
        {/* --- Brand & kontak singkat --- */}
        <div className='sm:col-span-2 lg:col-span-1'>
          <div className='text-lg font-semibold'>
            OneStop <span className='font-bold'>Business Hub</span>
          </div>
          <p className='text-sm text-gray-400 mt-2'>
            Solusi bisnis terpadu untuk kebutuhan perusahaan lokal dan internasional.
          </p>
          <a href='tel:02129222999' className='block mt-3 text-sm hover:text-blue-400 transition-colors'>
            Hotline: 021 29 222 999
          </a>
          {/* <div className='flex gap-3 mt-4'>
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                className='text-gray-400 hover:text-white transition-colors'
              >
                <Icon size={18} />
              </a>
            ))}
          </div> */}
        </div>

        {/* --- Hubungi Kami --- */}
        <div>
          <h4 className='font-semibold'>Hubungi Kami</h4>
          <p className='text-sm text-gray-400 mt-2'>
            Sen-Jum 08-18
            <br />
            CS:{' '}
            <a href='mailto:cs@domain.co.id' className='hover:text-white transition-colors'>
              cs@domain.co.id
            </a>
          </p>
        </div>

        {/* --- Kolom link (Layanan, Lokasi, Menu, Lainnya) --- */}
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className='font-semibold'>{col.title}</h4>
            <ul className='text-sm text-gray-400 mt-2 space-y-1'>
              {col.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className='hover:text-white transition-colors'>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='bg-black/40 text-sm text-center py-3'>
        Copyright © 2026 One Stop Business Hub. All rights reserved.
      </div>
    </footer>
  );
}