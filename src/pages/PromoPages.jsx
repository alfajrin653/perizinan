import React, { useState, useEffect } from "react";
import { Tag, Clock, Ticket, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";


export default function PromoPages() {
  const [copiedCode, setCopiedCode] = useState(null);
  
  // State untuk menyimpan data JSON dan status loading
  const [promos, setPromos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const waNumber = "6281288888888";

  // Fungsi untuk mengambil data dari folder public tanpa build
  useEffect(() => {
    fetch("/data/promo.json")
      .then((response) => {
        if (!response.ok) throw new Error("Gagal mengambil data promo");
        return response.json();
      })
      .then((data) => {
        setPromos(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []); // Array kosong artinya hanya dijalankan sekali saat halaman pertama dibuka

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Tampilan saat data sedang dimuat (Loading state)
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      </div>
    );
  }

  // Tampilan jika file JSON gagal diambil/tidak ditemukan
  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <section className="px-4 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
          <Tag className="w-4 h-4" />
          <span>Spesial Penawaran</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Promo Eksklusif Bulan Ini
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Tingkatkan efisiensi bisnis Anda dengan berbagai penawaran hemat untuk layanan legalitas, penyewaan kantor, dan fasilitas profesional kami.
        </p>
      </section>

      <section className="px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Mapping data promo dari State yang sudah di-fetch */}
          {promos.map((promo) => {
            const waMessage = `Halo, saya tertarik menggunakan promo *${promo.title}* dengan kode voucher *${promo.promoCode}*. Boleh info lebih lanjut?`;
            const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

            return (
              <div 
                key={promo.id} 
                className={`rounded-3xl p-8 flex flex-col relative overflow-hidden shadow-lg transition-transform hover:-translate-y-2 ${promo.theme}`}
              >
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/10 backdrop-blur-sm">
                    {promo.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">{promo.title}</h3>
                <p className="opacity-90 mb-8 flex-grow text-sm leading-relaxed">{promo.description}</p>

                <div className="bg-black/10 rounded-2xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-xl">{promo.discount}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm opacity-80">
                    <Clock className="w-4 h-4" />
                    <span>Berlaku s/d {promo.validUntil}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">Kode Voucher:</p>
                  <div 
                    onClick={() => copyToClipboard(promo.promoCode)}
                    className="flex items-center justify-between bg-black/10 border border-white/20 border-dashed rounded-xl p-3 cursor-pointer hover:bg-black/20 transition-colors"
                  >
                    <div className="flex items-center gap-2 font-mono font-bold tracking-widest">
                      <Ticket className="w-5 h-5" />
                      {promo.promoCode}
                    </div>
                    {copiedCode === promo.promoCode ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-green-400">
                        <CheckCircle2 className="w-4 h-4" /> Copied
                      </span>
                    ) : (
                      <span className="text-xs font-semibold underline opacity-80">Copy</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-xl font-bold text-center transition-all ${promo.btnTheme}`}
                  >
                    Klaim via WhatsApp
                  </a>
                  
                  <Link 
                    to={promo.link}
                    className="flex items-center justify-center gap-2 py-2 text-sm font-semibold hover:opacity-70 transition-opacity"
                  >
                    Lihat Detail Layanan <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
          
        </div>
      </section>
    </div>
  );
}