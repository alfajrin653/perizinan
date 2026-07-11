import React from "react";
import { Search, FileSignature, Scale, Briefcase, CreditCard } from "lucide-react";

export default function Proses() {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: "Pengecekan & Pengajuan Nama",
      description: "Kami akan mengecek ketersediaan nama PT pilihan Anda di sistem AHU Kemenkumham dan melakukan pemesanan nama untuk mengamankannya.",
    },
    {
      id: 2,
      icon: FileSignature,
      title: "Penandatanganan Akta Notaris",
      description: "Pembuatan draft Akta Pendirian PT. Setelah disetujui, Anda dan para pendiri perusahaan akan menandatangani Akta di hadapan Notaris.",
    },
    {
      id: 3,
      icon: Scale,
      title: "SK Pengesahan Kemenkumham",
      description: "Akta pendirian akan didaftarkan ke Kemenkumham untuk mendapatkan Surat Keputusan (SK) sebagai bukti sah PT Anda telah berdiri.",
    },
    {
      id: 4,
      icon: Briefcase,
      title: "Pengurusan NIB & Izin Usaha",
      description: "Mendaftarkan perusahaan di sistem OSS untuk mendapatkan Nomor Induk Berusaha (NIB) sebagai identitas dan izin operasional dasar.",
    },
    {
      id: 5,
      icon: CreditCard,
      title: "Pendaftaran NPWP Perusahaan",
      description: "Langkah terakhir adalah mendaftarkan Nomor Pokok Wajib Pajak (NPWP) beserta Surat Keterangan Terdaftar (SKT) di KPP domisili PT.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Proses Pendirian PT di Indonesia
          </h2>
          <p className="text-slate-600 text-lg">
            Hanya butuh 5 langkah mudah. Duduk tenang, dan biarkan tim ahli kami yang mengurus semua legalitas bisnis Anda dari awal hingga selesai.
          </p>
        </div>

        <div className="relative">
          {/* Garis Vertikal Latar Belakang (Hanya terlihat di layar agak besar) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.id} 
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Konten Teks */}
                  <div className={`flex-1 w-full ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        <span className="text-blue-600 mr-2">#{step.id}</span>
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Ikon Tengah */}
                  <div className="shrink-0 relative z-10 hidden md:flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-blue-600 text-white shadow-xl">
                    <Icon size={24} />
                  </div>

                  {/* Spacer untuk menyeimbangkan layout di Desktop */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}