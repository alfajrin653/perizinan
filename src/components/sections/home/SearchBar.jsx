import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, BriefcaseBusiness, Users, Mic2, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Virtual Office',
    description: 'Alamat bisnis profesional & legalitas perusahaan',
    icon: Building2,
    link: '/virtual-office',
  },
  {
    title: 'Coworking Space',
    description: 'Ruang kerja fleksibel dengan fasilitas lengkap',
    icon: BriefcaseBusiness,
    link: '/coworking-space',
  },
  {
    title: 'Ruang Meeting',
    description: 'Meeting room modern untuk kebutuhan bisnis',
    icon: Users,
    link: '/Room-meet',
  },
  {
    title: 'Studio Podcast',
    description: 'Studio profesional untuk podcast & konten',
    icon: Mic2,
    link: '/Podcast-studio',
  },
];

export default function ServicesList() {
  return (
    <section className='py-24 bg-white font-sans'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header - Dibuat rata kiri (Left-aligned) agar lebih editorial */}
        <div className='max-w-3xl mb-16'>
          <span className='inline-flex px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold tracking-widest uppercase mb-6'>Workspace Solutions</span>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6'>Temukan Ruang Kerja Ideal Anda.</h2>
          <p className='text-lg text-slate-500 leading-relaxed max-w-xl'>Pilih layanan yang paling sesuai untuk mendukung operasional, produktivitas, dan perkembangan bisnis Anda ke tingkat selanjutnya.</p>
        </div>

        {/* Interactive List Container */}
        <div className='flex flex-col border-t-2 border-slate-900'>
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                to={service.link}
                className='group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-slate-200 hover:bg-blue-600 transition-colors duration-500 cursor-pointer overflow-hidden relative'
              >
                {/* Bagian Kiri: Nomor & Judul */}
                <div className='flex items-center gap-8 md:w-5/12 px-6 md:px-10 z-10'>
                  <span className='text-slate-300 font-mono text-xl font-bold group-hover:text-blue-300 transition-colors duration-500'>0{index + 1}</span>
                  <h3 className='text-3xl md:text-4xl font-extrabold text-slate-900 group-hover:text-white transition-colors duration-500'>{service.title}</h3>
                </div>

                {/* Bagian Tengah: Deskripsi & Icon (Muncul saat Hover) */}
                <div className='md:w-5/12 px-6 md:px-0 mt-4 md:mt-0 flex items-center gap-6 z-10'>
                  <div className='w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 group-hover:scale-110'>
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <p className='text-slate-500 group-hover:text-blue-100 transition-colors duration-500 text-lg'>{service.description}</p>
                </div>

                {/* Bagian Kanan: Aksi / Arrow */}
                <div className='md:w-2/12 flex justify-start md:justify-end px-6 md:px-10 mt-6 md:mt-0 z-10'>
                  <div className='flex items-center justify-center w-14 h-14 rounded-full border border-slate-200 group-hover:border-transparent group-hover:bg-white transition-all duration-500'>
                    <ArrowRight size={24} className='text-slate-400 group-hover:text-blue-600 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500' />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
