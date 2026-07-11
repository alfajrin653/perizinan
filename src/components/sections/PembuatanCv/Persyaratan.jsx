import React from "react";
import { Users, IdCard, FileText, ImageIcon, MapPin } from "lucide-react";
import { CheckCircle2 } from "lucide-react";


export default function PersyaratanCv() {
  const requirements = [
    {
      icon: Users,
      title: "Minimal 2 Orang Pendiri",
      desc: "Harus ada minimal 1 Sekutu Aktif (Direktur/Pengurus) dan 1 Sekutu Pasif (Pemberi Modal).",
    },
    {
      icon: IdCard,
      title: "E-KTP & NPWP",
      desc: "Fotokopi/scan KTP dan NPWP pribadi milik seluruh pendiri CV.",
    },
    {
      icon: FileText,
      title: "Kartu Keluarga (KK)",
      desc: "Fotokopi/scan Kartu Keluarga (KK) khusus untuk Sekutu Aktif (Direktur).",
    },
    {
      icon: ImageIcon,
      title: "Pas Foto",
      desc: "Pas foto berwarna Direktur ukuran 3x4 atau 4x6 (latar belakang merah).",
    },
    {
      icon: MapPin,
      title: "Bukti Domisili Usaha",
      desc: "Sewa Virtual Office di kami? Syarat domisili otomatis SELESAI tanpa perlu repot cari surat PBB/sewa gedung.",
      highlight: true, 
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Bagian Kiri: Teks & Informasi */}
          <div>
            <span className="inline-flex bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              SYARAT DOKUMEN
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Persyaratan Mudah, Tanpa Ribet.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Banyak yang mengira mendirikan PT itu rumit. Bersama kami, Anda hanya perlu menyiapkan dokumen pribadi dasar. Sisanya, biar tim legal kami yang memproses semuanya.
            </p>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4 items-start">
              <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Semua Bisa Online</h4>
                <p className="text-slate-600 mt-1">
                  Kirimkan dokumen persyaratan via WhatsApp atau Email. Anda tidak perlu bolak-balik ke kantor kami.
                </p>
              </div>
            </div>
          </div>

          {/* Bagian Kanan: Checklist Syarat */}
          <div className="space-y-4">
            {requirements.map((req, index) => {
              const Icon = req.icon;
              return (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl flex gap-5 transition-all ${
                    req.highlight 
                      ? "bg-blue-600 text-white shadow-xl transform hover:-translate-y-1" 
                      : "bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md"
                  }`}
                >
                  <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${
                    req.highlight ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"
                  }`}>
                    <Icon size={24} />
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-bold mb-1 ${req.highlight ? "text-white" : "text-slate-900"}`}>
                      {req.title}
                    </h3>
                    <p className={req.highlight ? "text-blue-100" : "text-slate-500"}>
                      {req.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}