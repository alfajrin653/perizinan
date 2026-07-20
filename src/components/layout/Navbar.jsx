/**
 * src/components/layout/Navbar.jsx
 * Sticky navbar with frosted glass effect on scroll
 */
import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

// ============================================================
// DATA MENU — satu sumber data, dipakai bareng oleh Desktop Mega
// Menu & Mobile Drawer supaya link-nya selalu konsisten & lengkap
// ============================================================
const MENU_LAYANAN = [
  {
    title: 'Kantor & Ruang Kerja',
    items: [
      { label: 'Virtual Office', href: '/virtual-office' },
      { label: 'Ruang Meeting', href: '/Room-meet' },
      { label: 'Studio Podcast', href: '/Podcast-studio' },
      { label: 'Coworking Space', href: '/coworking-space' },
    ],
  },
  {
    title: 'Layanan Bisnis',
    items: [
      { label: 'Pendirian PT', href: '/pendirian-pt' },
      { label: 'Pendirian CV', href: '/pendirian-cv' },
      { label: 'Pendirian Firma', href: '/pendirian-firma' },
      { label: 'HaKI', href: '/pendaftaran-haki' },
      { label: 'Pajak & Akuntansi', href: '/pajak-akuntansi' },
      { label: 'Call Answering Service', href: '/call-answering' },
    ],
  },
  {
    title: 'Foreign Services',
    items: [
      { label: 'Pendirian PMA', href: '/pendirian-pma' },
      { label: 'International Setup', href: '/internasional-business' },
      { label: 'Visa Bisnis', href: '/visa-bisnis' },
      { label: 'Visa Investor / KITAS', href: '/kitas-investor' },
      { label: 'Visa Turis', href: '/visa-turis' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // State untuk kontrol menu
  const [open, setOpen] = useState(false);
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false);

  // Deteksi scroll untuk efek glassmorphism
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mencegah scroll pada body saat mobile menu terbuka
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  return (
    <>
      {/* ============================================================ */}
      {/* HEADER — berlaku untuk semua ukuran layar                     */}
      {/* ============================================================ */}
      <header
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-md text-gray-800'
            : 'bg-transparent text-gray-700'
        }`}
      >
        <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between relative'>
          {/* --- Logo --- */}
          <a href='/' className='text-lg font-semibold tracking-tight'>
            Duduk <span className='font-bold text-blue-600'>Manis</span>
          </a>

          {/* ======================================================== */}
          {/* DESKTOP NAVIGATION (md ke atas)                          */}
          {/* ======================================================== */}
          <nav className='hidden md:flex items-center gap-6'>
            <a href='/find-location' className='text-sm font-medium hover:text-blue-600 transition-colors'>
              Cari Lokasi
            </a>
        <a href='/promo' className='text-sm font-medium hover:text-blue-600 transition-colors'>
              Promo
            </a>

            {/* Mega Menu Dropdown (Desktop) */}
            <div className='relative group py-4'>
              <button className='text-sm font-medium flex items-center gap-1 hover:text-blue-600 transition-colors'>
                Layanan <ChevronDown className='w-4 h-4 transition-transform group-hover:rotate-180' />
              </button>

              <div className='absolute left-1/2 -translate-x-1/2 top-full w-[720px] hidden group-hover:block z-50'>
                {/* Jembatan transparan agar hover tidak terputus */}
                <div className='absolute -top-6 left-0 w-full h-8 bg-transparent'></div>

                <div className='bg-white rounded-lg shadow-xl p-6 border border-gray-100 text-gray-800 relative mt-2'>
                  <div className='grid grid-cols-3 gap-6 text-sm'>
                    {MENU_LAYANAN.map((group) => (
                      <div key={group.title}>
                        <h4 className='font-bold text-blue-600 mb-3'>{group.title}</h4>
                        <ul className='space-y-2 text-gray-600'>
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <a href={item.href} className='block hover:text-blue-600 transition-colors'>
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a href='internasional-business' className='text-sm font-medium hover:text-blue-600 transition-colors'>
              International Business Setup
            </a>

            <a href='/tentang-kami' className='text-sm font-medium hover:text-blue-600 transition-colors'>
              Tentang Kami
            </a>
          </nav>

          {/* Right Actions (Desktop) */}
          <div className='hidden md:flex items-center gap-4'>
            {/* <div className='text-xs font-semibold tracking-wider text-gray-500 cursor-pointer'>
              <span className='text-blue-600 font-bold'>ID</span> | EN | CN
            </div> */}
            <a
              href='/hubungi-kami'
              className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm'
            >
              Hubungi Kami
            </a>
          </div>

          {/* ======================================================== */}
          {/* MOBILE & TABLET — tombol hamburger (di bawah md)         */}
          {/* ======================================================== */}
          <button
            className='md:hidden p-2 text-current z-50'
            onClick={() => setOpen(true)}
            aria-label='Buka menu'
          >
            <Menu className='w-6 h-6' />
          </button>
        </div>
      </header>

      {/* ============================================================ */}
      {/* MOBILE & TABLET DRAWER (di bawah md)                          */}
      {/* ============================================================ */}

      {/* Backdrop overlay gelap */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden overflow-y-auto ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header drawer (tombol close) */}
        <div className='p-4 flex justify-end border-b border-gray-100'>
          <button
            onClick={() => setOpen(false)}
            className='p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-50 transition-colors'
            aria-label='Tutup menu'
          >
            <X className='w-6 h-6' />
          </button>
        </div>

        {/* List menu mobile */}
        <div className='p-6 text-gray-800'>
          <ul className='space-y-2'>
            <li>
              <a
                href='/Find-location'
                className='block py-3 font-medium hover:text-blue-600 border-b border-gray-50'
                onClick={() => setOpen(false)}
              >
                Cari Lokasi
              </a>
            </li>
            <li>
              <a
                href='/promo'
                className='block py-3 font-medium hover:text-blue-600 border-b border-gray-50'
                onClick={() => setOpen(false)}
              >
                Promo
              </a>
            </li>

            {/* Accordion "Layanan" — sekarang lengkap & pakai href yang benar */}
            <li>
              <button
                onClick={() => setMobileLayananOpen(!mobileLayananOpen)}
                className='w-full flex items-center justify-between py-3 font-medium hover:text-blue-600 border-b border-gray-50'
              >
                Layanan
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileLayananOpen ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileLayananOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className='pl-4 py-2 space-y-3 text-sm text-gray-600 border-l-2 border-blue-100 ml-2 mt-2'>
                  {MENU_LAYANAN.map((group) => (
                    <React.Fragment key={group.title}>
                      <li className='font-semibold text-blue-600 pt-2'>{group.title}</li>
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className='block hover:text-blue-600'
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <a
                href='internasional-business'
                className='block py-3 font-medium hover:text-blue-600 border-b border-gray-50'
                onClick={() => setOpen(false)}
              >
                International Business Setup
              </a>
            </li>

            <li>
              <a
                href='/tentang-kami'
                className='block py-3 font-medium hover:text-blue-600 border-b border-gray-50'
                onClick={() => setOpen(false)}
              >
                Tentang Kami
              </a>
            </li>
          </ul>

          <div className='mt-8 space-y-4'>
            <div className='text-sm font-semibold text-gray-500 text-center'>
              {/* <span className='text-blue-600'>ID</span> | EN | CN */}
            </div>
            <a
              href='/hubungi-kami'
              className='block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full text-sm font-medium transition-colors'
              onClick={() => setOpen(false)}
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </>
  );
}