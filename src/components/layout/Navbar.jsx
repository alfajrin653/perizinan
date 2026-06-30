/**
 * src/components/layout/Navbar.jsx
 * Sticky navbar with frosted glass effect on scroll
 */
import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

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
      <header className={`fixed w-full top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md text-gray-800' : 'bg-transparent text-gray-700'}`}>
        <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between relative'>
          {/* Logo */}
          <div className='text-lg font-semibold tracking-tight'>
            OneStop <span className='font-bold text-blue-600'>Business Hub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-6'>
            <a href='#' className='text-sm font-medium hover:text-blue-600 transition-colors'>
              Cari Lokasi
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
                    <div>
                      <h4 className='font-bold text-blue-600 mb-3'>Kantor & Ruang Kerja</h4>
                      <ul className='space-y-2 text-gray-600'>
                        <li>
                          <a href='/virtual-office' className='block hover:text-blue-600 transition-colors'>
                            Virtual Office
                          </a>
                        </li>
                        <li>
                          <a href='#' className='block hover:text-blue-600 transition-colors'>
                            Ruang Meeting
                          </a>
                        </li>
                        <li>
                          <a href='#' className='block hover:text-blue-600 transition-colors'>
                            Studio Podcast
                          </a>
                        </li>
                        <li>
                          <a href='#' className='block hover:text-blue-600 transition-colors'>
                            Coworking Space
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className='font-bold text-blue-600 mb-3'>Layanan Bisnis</h4>
                      <ul className='space-y-2 text-gray-600'>
                        <li>
                          <a href='#' className='block hover:text-blue-600 transition-colors'>
                            Pendirian PT
                          </a>
                        </li>
                        <li>
                          <a href='#' className='block hover:text-blue-600 transition-colors'>
                            Pendirian CV
                          </a>
                        </li>
                        <li>
                          <a href='#' className='block hover:text-blue-600 transition-colors'>
                            Pendirian Firma
                          </a>
                        </li>
                        <li>
                          <a href='#' className='block hover:text-blue-600 transition-colors'>
                            HaKI
                          </a>
                        </li>
                        <li>
                          <a href='#' className='block hover:text-blue-600 transition-colors'>
                            Pajak & Akuntansi
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className='font-bold text-blue-600 mb-3'>Foreign Services</h4>
                      <ul className='space-y-2 text-gray-600'>
                        <li>
                          <a href='#' className='block hover:text-blue-600 transition-colors'>
                            Pendirian PMA
                          </a>
                        </li>
                        <li>
                          <a href='#' className='block hover:text-blue-600 transition-colors'>
                            International Setup
                          </a>
                        </li>
                        <li>
                          <a href='#' className='block hover:text-blue-600 transition-colors'>
                            Visa
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href='#' className='text-sm font-medium hover:text-blue-600 transition-colors'>
              International Business Setup
            </a>
            <a href='#' className='text-sm font-medium hover:text-blue-600 transition-colors'>
              Tentang Kami
            </a>
          </nav>

          {/* Right Actions (Desktop) */}
          <div className='hidden md:flex items-center gap-4'>
            <div className='text-xs font-semibold tracking-wider text-gray-500 cursor-pointer'>
              <span className='text-blue-600 font-bold'>ID</span> | EN | CN
            </div>
            <a href='#' className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm'>
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button className='md:hidden p-2 text-current z-50' onClick={() => setOpen(true)} aria-label='Buka menu'>
            <Menu className='w-6 h-6' />
          </button>
        </div>
      </header>

      {/* --- MOBILE DRAWER SECTION --- */}

      {/* 1. Backdrop Overlay Gelap */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setOpen(false)}></div>

      {/* 2. Drawer Panel */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden overflow-y-auto ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header Drawer (Tombol Close) */}
        <div className='p-4 flex justify-end border-b border-gray-100'>
          <button onClick={() => setOpen(false)} className='p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-50 transition-colors'>
            <X className='w-6 h-6' />
          </button>
        </div>

        {/* List Menu Mobile */}
        <div className='p-6 text-gray-800'>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='block py-3 font-medium hover:text-blue-600 border-b border-gray-50' onClick={() => setOpen(false)}>
                Cari Lokasi
              </a>
            </li>

            {/* Mobile Accordion untuk Layanan */}
            <li>
              <button onClick={() => setMobileLayananOpen(!mobileLayananOpen)} className='w-full flex items-center justify-between py-3 font-medium hover:text-blue-600 border-b border-gray-50'>
                Layanan
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileLayananOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {/* Sub-menu Layanan (Buka Tutup Smooth) */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileLayananOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className='pl-4 py-2 space-y-3 text-sm text-gray-600 border-l-2 border-blue-100 ml-2 mt-2'>
                  <li className='font-semibold text-blue-600 pt-1'>Kantor & Ruang Kerja</li>
                  <li>
                    <a href='#' className='block hover:text-blue-600' onClick={() => setOpen(false)}>
                      Virtual Office
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block hover:text-blue-600' onClick={() => setOpen(false)}>
                      Ruang Meeting
                    </a>
                  </li>

                  <li className='font-semibold text-blue-600 pt-2'>Layanan Bisnis</li>
                  <li>
                    <a href='#' className='block hover:text-blue-600' onClick={() => setOpen(false)}>
                      Pendirian PT & CV
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block hover:text-blue-600' onClick={() => setOpen(false)}>
                      Pajak & Akuntansi
                    </a>
                  </li>

                  <li className='font-semibold text-blue-600 pt-2'>Foreign Services</li>
                  <li>
                    <a href='#' className='block hover:text-blue-600' onClick={() => setOpen(false)}>
                      Pendirian PMA & Visa
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a href='#' className='block py-3 font-medium hover:text-blue-600 border-b border-gray-50' onClick={() => setOpen(false)}>
                International Business Setup
              </a>
            </li>

            <li>
              <a href='#' className='block py-3 font-medium hover:text-blue-600 border-b border-gray-50' onClick={() => setOpen(false)}>
                Tentang Kami
              </a>
            </li>
          </ul>

          <div className='mt-8 space-y-4'>
            <div className='text-sm font-semibold text-gray-500 text-center'>
              <span className='text-blue-600'>ID</span> | EN | CN
            </div>
            <a href='#' className='block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full text-sm font-medium transition-colors' onClick={() => setOpen(false)}>
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
