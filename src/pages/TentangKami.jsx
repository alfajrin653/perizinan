import React from "react";
import { 
  Target, 
  Compass, 
  Users, 
  ShieldCheck, 
  Lightbulb, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

export default function TentangKami() {
  
  // ==========================================
  // DATA STATISTIK PERUSAHAAN
  // ==========================================
  const companyStats = [
    { value: "50.000+", label: "Klien Terdaftar" },
    { value: "35+", label: "Lokasi Strategis" },
    { value: "20+", label: "Tahun Pengalaman" },
    { value: "100%", label: "Kepatuhan Hukum" },
  ];

  // ==========================================
  // DATA NILAI INTI (CORE VALUES)
  // ==========================================
  const coreValues = [
    {
      icon: Users,
      title: "Customer Centric",
      desc: "Kesuksesan klien adalah prioritas utama kami. Kami memberikan layanan yang personal dan responsif untuk setiap kebutuhan bisnis Anda.",
    },
    {
      icon: ShieldCheck,
      title: "Integritas & Kepercayaan",
      desc: "Kami menjunjung tinggi etika profesional, transparansi penuh dalam biaya, dan menjaga kerahasiaan data perusahaan Anda.",
    },
    {
      icon: Lightbulb,
      title: "Inovatif & Fleksibel",
      desc: "Kami terus beradaptasi dengan teknologi dan tren bisnis terbaru untuk memberikan solusi kerja yang modern dan efisien.",
    },
    {
      icon: TrendingUp,
      title: "Berorientasi pada Pertumbuhan",
      desc: "Bukan sekadar penyedia layanan, kami adalah mitra strategis yang merancang ekosistem agar bisnis Anda terus berkembang.",
    },
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO SECTION (TENTANG KAMI) */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900">
        {/* Background Pattern / Image overlay */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/about-hero.jpg" // Ganti dengan gambar suasana kantor vOffice atau tim
            alt="Office Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-flex bg-white/10 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm border border-white/20">
            TENTANG KAMI
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto">
            Membangun Ekosistem Bisnis yang Mendorong Kesuksesan Anda.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Kami hadir untuk menghapus batasan birokrasi dan biaya tinggi dalam memulai usaha. Menjadi rumah bagi puluhan ribu pengusaha, startup, dan perusahaan multinasional di Indonesia.
          </p>
        </div>
      </section>

      {/* 2. STATS SECTION (OVERLAPPING) */}
      <section className="relative -mt-12 z-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-100">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-sm md:text-base font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISI & MISI SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Gambar Kiri */}
            <div className="relative">
              {/* <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/vision-mission.jpg" // Ganti dengan gambar meeting / profesional
                  alt="Visi dan Misi" 
                  className="w-full h-auto object-cover"
                />
              </div> */}
              {/* Floating Element */}
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <Target size={40} className="mb-4 opacity-80" />
                <p className="text-xl font-bold">Fokus pada Solusi</p>
                <p className="text-blue-200 text-sm mt-2">Bukan sekadar layanan administrasi.</p>
              </div>
            </div>

            {/* Teks Kanan */}
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <Target size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Visi Kami</h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed pl-16 border-l-2 border-slate-100">
                  Menjadi katalisator pertumbuhan ekonomi terdepan di Asia Tenggara dengan menyediakan ekosistem kerja cerdas, infrastruktur bisnis yang fleksibel, dan layanan legalitas yang tanpa cela.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <Compass size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Misi Kami</h2>
                </div>
                <ul className="space-y-4 pl-16 border-l-2 border-slate-100">
                  <li className="flex items-start gap-3 text-slate-600 leading-relaxed">
                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></div>
                    Memberikan kemudahan bagi setiap individu untuk memulai dan menjalankan bisnis secara legal.
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 leading-relaxed">
                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></div>
                    Menyediakan ruang kerja berstandar internasional yang mendongkrak citra profesional klien.
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 leading-relaxed">
                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></div>
                    Membangun komunitas bisnis yang inklusif untuk mendorong kolaborasi antar pengusaha.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nilai yang Kami Pegang Teguh
            </h2>
            <p className="text-slate-600 text-lg">
              Prinsip-prinsip ini adalah fondasi dari setiap layanan yang kami berikan dan setiap keputusan yang kami ambil.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex gap-6">
                  <div className="shrink-0 w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Perjalanan Bisnis Anda Bersama Kami?
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Bergabunglah dengan puluhan ribu pengusaha sukses lainnya. Konsultasikan kebutuhan perusahaan Anda secara gratis hari ini.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/hubungi-kami" 
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-slate-50 transition shadow-xl flex items-center justify-center gap-2"
            >
              Hubungi Tim Kami <ArrowRight size={20} />
            </a>
            <a 
              href="/" 
              className="bg-transparent border border-blue-400 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition flex items-center justify-center"
            >
              Lihat Semua Layanan
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}