import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function PricingPembuatan({
  name,
  price,
  desc,
  features,
  popular,
}) {
  // 1. Siapkan nomor WA dan pesan dinamis menggunakan props 'name' dan 'price'
  const waNumber = "6281288888888"; // Ganti dengan nomor WA admin
  const waMessage = `Halo, saya tertarik dengan paket *${name}* seharga ${price}. Boleh minta informasi lebih lanjut?`;
  
  // 2. Encode URL
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div
      className={`relative flex flex-col p-8 rounded-3xl bg-blue-500 border ${
        popular
          ? "border-blue-500 shadow-2xl shadow-blue-900/50 md:-translate-y-2"
          : "border-slate-700"
      }`}
    >
      {popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider">
          TERLARIS
        </span>
      )}

      <h3 className="text-2xl font-bold text-white mb-3">{name}</h3>

      <p className="text-white text-sm mb-6 flex-grow">
        {desc}
      </p>

      <div className="mb-8 py-6 border-y border-slate-700">
        <span className="text-4xl font-bold text-white">
          {price}
        </span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-slate-300 text-sm"
          >
            <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* 3. Ubah button menjadi tag <a> dan masukkan waLink */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto block w-full text-center py-4 rounded-xl font-bold transition ${
          popular
            ? "bg-blue-600 hover:bg-blue-500 text-white"
            : "bg-slate-700 hover:bg-slate-600 text-white"
        }`}
      >
        Pilih Paket
      </a>
    </div>
  );
}