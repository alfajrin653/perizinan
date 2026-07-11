import React from 'react'
import PricingPembuatan from '../../element/PricingPembuatan';
import { 
  Clock, Wallet, Building, Scale,
} from "lucide-react";

const firmaPackages = [
    {
      name: "Firma + Virtual Office Basic",
      price: "Rp 3.500.000",
      badge: "STARTER",
      desc: "Paket hemat untuk pengusaha pemula yang ingin memulai bisnis dengan legalitas dasar.",
      featured: false,
      features: [
        "Pengecekan Nama Firma",
        "Akta Pendirian Notaris",
        "SK Terdaftar Kemenkumham",
        "NIB & Sertifikat Standar",
        "NPWP & SKT Perusahaan",
      ],
      bonuses: [
        "Virtual Office (1 Tahun)",
        "Layanan Penerimaan Surat",
        "Kuota Meeting Room (10 Jam/Bulan)",
      ],
    },
    {
      name: "Firma + Virtual Office Premium",
      price: "Rp 5.500.000",
      badge: "TERLARIS",
      desc: "Paket lengkap dengan fasilitas Virtual Office premium untuk operasional bisnis yang lebih profesional.",
      featured: true,
      features: [
        "Semua kelengkapan legalitas Firma",
        "Layanan Resepsionis Profesional",
        "Bantuan Pembukaan Rekening Bank",
      ],
      bonuses: [
        "Virtual Office Premium (1 Tahun)",
        "Nomor Telepon Perusahaan Bersama",
        "Kuota Meeting Room (10 Jam/Bulan)",
      ],
    },
    
  ];

export default function PricingFirma() {
  return (
    <div>

      {/* 4. PRICING SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Pilih Paket Pendirian Firma
            </h2>
            <p className="text-slate-600">
              Dapatkan legalitas lengkap dengan biaya transparan. Paket kami dirancang untuk mendukung operasional Anda langsung berjalan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {firmaPackages.map((pkg, index) => (
              <PricingPembuatan
                key={index}
                title={pkg.title}
                name={pkg.name}
                price={pkg.price}
                badge={pkg.badge}
                desc={pkg.desc}
                featured={pkg.featured}
                features={pkg.features}
                bonuses={pkg.bonuses}
              />
            ))}
          </div>

        </div>
      </section>
      
    </div>
  )
}
