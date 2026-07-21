import React from 'react';
import { Clock, FileText, Building, Landmark, CheckCircle2 } from 'lucide-react';
import CompanyPackageCard from '../../element/PricingPembuatan';

// Data Paket (Bisa Anda pindahkan ke file data terpisah nanti)
const cvPackages = [
  {
    name: 'CV + Virtual Office Basic',
    price: 'Rp 3.500.000',
    desc: 'Paket hemat untuk pengusaha pemula yang ingin memulai bisnis dengan legalitas dasar.',
    badge: 'STARTER',
    popular: false,
    features: ['Pengecekan Nama CV', 'Akta Pendirian Notaris', 'SK Terdaftar Kemenkumham', 'NIB & Sertifikat Standar', 'NPWP & SKT Perusahaan'],
    bonuses: ['Virtual Office (1 Tahun)', 'Layanan Penerimaan Surat'],
  },
  {
    name: 'CV + Virtual Office Premium',
    price: 'Rp 5.500.000',
    desc: 'Paket lengkap dengan fasilitas Virtual Office premium untuk operasional bisnis yang lebih profesional.',
    badge: 'TERLARIS',
    popular: true,
    features: ['Semua kelengkapan legalitas CV', 'Layanan Resepsionis Profesional', 'Bantuan Pembukaan Rekening Bank', 'Virtual Office Premium (1 Tahun)', 'Nomor Telepon Perusahaan Bersama', 'Kuota Meeting Room (10 Jam/Bulan)'],
    bonuses: ['Virtual Office Premium (1 Tahun)', 'Nomor Telepon Perusahaan Bersama', 'Kuota Meeting Room (10 Jam/Bulan)'],
  },
];

export default function PricingPlansCv() {
  return (
    <section className='py-24 bg-slate-50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-slate-900'>Pilih Paket Pendirian CV Anda</h2>
          <p className='text-slate-600'>Biaya transparan, proses aman. Pilih paket hemat atau paket premium dengan fasilitas ruang meeting bulanan.</p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          {cvPackages.map((pkg, index) => (
            <CompanyPackageCard key={index} name={pkg.name} price={pkg.price} desc={pkg.desc} features={pkg.features} popular={pkg.popular} />
          ))}
        </div>
      </div>
    </section>
  );
}
