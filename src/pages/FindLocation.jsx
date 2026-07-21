import React, { useState, useMemo } from 'react';
import { Search, MapPin, Building2, Mic, Coffee, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// ==========================================
// 1. IMPORT DATA DARI MASING-MASING FILE
// ==========================================
// Anggap ini import dari file data aslimu. Sesuaikan path-nya!
import { locations as dataCoworking } from '../data/Coworking';
import { locations as dataVO } from '../data/Locations';
import { meetingRooms as dataMeeting } from '../data/meetingRoomLocation';
// import { locations as dataPodcast } from "../data/";

// ==========================================
// 2. GABUNGKAN DATA & TAMBAHKAN LABEL LAYANAN
// ==========================================
// Kita map masing-masing data untuk memberi tahu sistem ini layanan apa
const masterLocations = [
  ...dataCoworking.map((item) => ({
    ...item,
    serviceType: 'Coworking Space',
    icon: Coffee,
    basePath: '/coworking-space/detail', // <- Tambahkan ini
  })),
  ...dataVO.map((item) => ({
    ...item,
    serviceType: 'Virtual Office',
    icon: Building2,
    basePath: '/virtual-office/detail', // <- Tambahkan ini
  })),
  ...dataMeeting.map((item) => ({
    ...item,
    serviceType: 'Meeting Room',
    icon: MapPin,
    basePath: '/Room-meet/detail', // <- Tambahkan ini
  })),
  //   ...dataPodcast.map(item => ({
  //     ...item,
  //     serviceType: "Podcast Studio",
  //     icon: Mic,
  //     basePath: "/Podcast-studio/detail" // <- Tambahkan ini
  //   })),
];

// Ambil daftar kota secara unik (dinamis dari data yang ada)
const uniqueCities = ['Semua', ...new Set(masterLocations.map((item) => item.city).filter(Boolean))];

// Ambil daftar layanan secara unik
const serviceTypes = ['Semua', 'Virtual Office', 'Meeting Room', 'Coworking Space'];

export default function FindLocationPage() {
  // ==========================================
  // 1. IMPORT DATA DARI coworking location
  // ==========================================

  // ==========================================
  // 3. STATE UNTUK FILTER
  // ==========================================
  const [searchQuery, setSearchQuery] = useState('');
  const [activeService, setActiveService] = useState('Semua');
  const [activeCity, setActiveCity] = useState('Semua');

  // ==========================================
  // 4. LOGIKA FILTERING (BERJALAN BERSAMAAN)
  // ==========================================
  const filteredData = useMemo(() => {
    return masterLocations.filter((item) => {
      // SAFE CHECK: Pastikan title dan address adalah string
      // Jika pakai key lain di file berbeda (misal item.name atau item.description), tambahkan di sini
      const titleStr = item.title || item.name || '';
      const addressStr = item.address || item.description || '';
      const searchLower = searchQuery.toLowerCase();

      // Cek pencarian teks
      const matchSearch = titleStr.toLowerCase().includes(searchLower) || addressStr.toLowerCase().includes(searchLower);

      // Cek filter layanan
      const matchService = activeService === 'Semua' || item.serviceType === activeService;

      // Cek filter kota
      // SAFE CHECK: Pastikan item.city tidak undefined
      const itemCity = item.city || '';
      const matchCity = activeCity === 'Semua' || itemCity === activeCity;

      // Harus lolos ketiga syarat di atas
      return matchSearch && matchService && matchCity;
    });
  }, [searchQuery, activeService, activeCity]);
  return (
    <div className='min-h-screen bg-slate-50 pt-24 pb-16'>
      {/* --- HEADER & SEARCH SECTION --- */}
      <section className='px-4 max-w-7xl mx-auto mb-12 text-center'>
        <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'>Temukan Lokasi Ideal Anda</h1>
        <p className='text-lg text-slate-600 max-w-2xl mx-auto mb-10'>Dari SCBD hingga Mega Kuningan, jelajahi berbagai pilihan Virtual Office, Coworking Space, dan fasilitas bisnis lainnya.</p>

        {/* Global Search Bar */}
        <div className='max-w-3xl mx-auto relative flex items-center'>
          <Search className='absolute left-4 w-6 h-6 text-slate-400' />
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Cari nama gedung atau alamat... (Contoh: Menara Rajawali)'
            className='w-full pl-14 pr-4 py-4 rounded-2xl text-lg text-slate-700 shadow-md border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all'
          />
        </div>
      </section>

      {/* --- TABS FILTER SECTION --- */}
      <section className='px-4 max-w-7xl mx-auto mb-10'>
        <div className='bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-4'>
          {/* Baris 1: Filter Layanan (Service) */}
          <div className='flex flex-wrap gap-2 items-center'>
            <span className='text-sm font-semibold text-slate-500 uppercase tracking-wider mr-2 w-full md:w-auto'>Layanan:</span>
            {serviceTypes.map((service) => (
              <button
                key={service}
                onClick={() => setActiveService(service)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeService === service ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {service}
              </button>
            ))}
          </div>

          {/* Baris 2: Filter Kota (City) */}
          <div className='flex flex-wrap gap-2 items-center pt-4 border-t border-slate-100'>
            <span className='text-sm font-semibold text-slate-500 uppercase tracking-wider mr-2 w-full md:w-auto'>Area:</span>
            {uniqueCities.map((city) => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCity === city ? 'bg-slate-800 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- RESULTS GRID SECTION --- */}
      <section className='px-4 max-w-7xl mx-auto'>
        {/* Info Jumlah Hasil */}
        <div className='mb-6 text-slate-500 font-medium'>
          Menampilkan <span className='text-blue-600 font-bold'>{filteredData.length}</span> lokasi ditemukan
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredData.map((loc) => {
            const Icon = loc.icon; // Icon spesifik per layanan

            return (
              <div key={`${loc.serviceType}-${loc.id}`} className='bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col'>
                {/* Gambar Lokasi */}
                <div className='h-56 w-full bg-slate-200 relative overflow-hidden'>
                  <img src={loc.image} alt={loc.title} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
                  {/* Badge Kota */}
                  <div className='absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700'>{loc.city}</div>
                </div>

                {/* Info Konten */}
                <div className='p-6 flex flex-col flex-grow'>
                  {/* Badge Layanan */}
                  <div className='flex items-center gap-2 text-blue-600 text-sm font-bold mb-3'>
                    <Icon className='w-4 h-4' />
                    {loc.serviceType}
                  </div>

                  <h3 className='text-xl font-bold text-slate-900 mb-2'>{loc.title}</h3>
                  <p className='text-slate-500 text-sm mb-6 flex-grow line-clamp-2'>{loc.address}</p>

                  <hr className='border-slate-100 mb-4' />

                  {/* Harga & Tombol */}
                  <div className='flex items-end justify-between mt-auto'>
                    <div>
                      <span className='text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1'>Mulai Dari</span>
                      <span className='text-xl font-bold text-slate-900 block'>{loc.pricing?.price}</span>
                      <span className='text-xs text-slate-500'>{loc.pricing?.period}</span>
                    </div>

                    <Link
                      // Gabungkan basePath dengan id produk secara dinamis
                      to={`${loc.basePath}/${loc.id}`}
                      className='w-12 h-12 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors'
                    >
                      <ArrowRight className='w-5 h-5 group-hover:-rotate-45 transition-transform' />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State Jika Hasil Tidak Ditemukan */}
        {filteredData.length === 0 && (
          <div className='text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-sm'>
            <Search className='w-12 h-12 text-slate-300 mx-auto mb-4' />
            <h3 className='text-xl font-bold text-slate-700 mb-2'>Lokasi Tidak Ditemukan</h3>
            <p className='text-slate-500'>Maaf, kami tidak menemukan lokasi yang sesuai dengan filter atau pencarian Anda. Coba gunakan kata kunci lain atau hapus filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveService('Semua');
                setActiveCity('Semua');
              }}
              className='mt-6 px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full hover:bg-blue-200 transition'
            >
              Reset Semua Filter
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
