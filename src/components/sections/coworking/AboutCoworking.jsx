import React from "react";
import PricingPembuatan from "../../element/PricingPembuatan";
import { 
  Wifi, 
  Coffee, 
  Printer, 
  Users, 
  Monitor, 
  Building2,
  CheckCircle2,
  ArrowRight
} from "lucide-react";


export default function CoworkingSpace() {
  // Data Fasilitas
  const facilities = [
    { icon: Wifi, title: "High-Speed Internet", desc: "Koneksi internet stabil dan super cepat untuk kelancaran kerja." },
    { icon: Coffee, title: "Free Flow Beverage", desc: "Kopi, teh, dan air mineral gratis sepuasnya setiap hari." },
    { icon: Printer, title: "Printing & Scanning", desc: "Akses fasilitas printer dan scanner untuk dokumen bisnis Anda." },
    { icon: Users, title: "Networking Hub", desc: "Perluas koneksi bisnis dengan komunitas profesional vOffice." },
    { icon: Monitor, title: "Ergonomic Setup", desc: "Meja dan kursi ergonomis untuk kenyamanan kerja maksimal." },
    { icon: Building2, title: "Meeting Room Access", desc: "Kuota penggunaan ruang meeting premium di berbagai lokasi." },
  ];

  // Data Paket Harga
  const pricingPlans = [
    {
      name: "Daily Pass",
      price: "Rp 150.000",
      period: "/ hari",
      desc: "Cocok untuk pekerja lepas atau pekerja remote yang butuh ruang kerja sementara.",
      features: ["Akses 1 Hari Kerja (08:00 - 18:00)", "High Speed Internet", "Free Flow Kopi & Teh", "Akses Area Lounge"],
      popular: false,
    },
    {
      name: "Monthly Pass (Hot Desk)",
      price: "Rp 1.500.000",
      period: "/ bulan",
      desc: "Pilihan fleksibel untuk bekerja di lokasi vOffice mana saja setiap hari.",
      features: ["Akses ke semua lokasi Coworking vOffice", "High Speed Internet", "Gratis Print & Scan", "Diskon Sewa Meeting Room", "Akses Komunitas Eksklusif"],
      popular: true,
    },
    {
      name: "Dedicated Desk",
      price: "Rp 2.500.000",
      period: "/ bulan",
      desc: "Meja kerja khusus milik Anda sendiri tanpa perlu bergantian dengan orang lain.",
      features: ["Meja Kerja Pribadi yang Tetap", "Loker Pribadi", "Bebas Pakai Alamat Bisnis (VO)", "Kuota Meeting Room Gratis", "Akses 24/7 (Lokasi Tertentu)"],
      popular: false,
    },
  ];

  return (
    <div className="w-full bg-white">
      
      {/* SECTION 1: HERO */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                COWORKING SPACE
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Kerja Lebih Produktif, Fleksibel & Nyaman.
              </h1>
              <p className="text-gray-600 mt-6 leading-8 text-lg">
                Tingkatkan produktivitas Anda di Coworking Space premium kami. Lingkungan kerja yang dinamis, fasilitas lengkap, dan komunitas profesional menanti Anda. Cocok untuk freelancer, startup, dan pengusaha.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition flex items-center gap-2">
                  Lihat Lokasi Kami <ArrowRight size={20} />
                </button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <img
                src="../public/img/coworkingspace.jpg" // Ganti dengan image coworking Anda
                alt="Coworking Space vOffice"
                className="rounded-3xl object-cover w-full h-[500px] shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
                <p className="text-4xl font-bold text-blue-600">40+</p>
                <p className="text-slate-600 font-medium mt-1">Lokasi Strategis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FASILITAS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Fasilitas Lengkap untuk Kebutuhan Anda
            </h2>
            <p className="text-slate-600">
              Fokus pada pekerjaan Anda, dan biarkan kami yang mengurus sisanya. Nikmati berbagai fasilitas premium tanpa biaya tambahan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: PAKET HARGA */}
      <section className="py-24 bg-slate-900 text-white rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pilih Paket Coworking Anda
            </h2>
            <p className="text-slate-400">
              Fleksibilitas tanpa batas. Pilih paket yang paling sesuai dengan gaya kerja dan kebutuhan bisnis Anda saat ini.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((pkg, index) => (
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
  );
}