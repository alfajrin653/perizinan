import React from "react";
import { CheckCircle2, Gift } from "lucide-react";

export default function CompanyPackageCard({
  title,
  price,
  badge,
  featured,
  features,
  bonuses,
}) {
  // 1. Siapkan nomor WA dan pesan dinamis berdasarkan 'title'
  const waNumber = "6281288888888"; 
  const waMessage = `Halo, saya tertarik dengan paket *${title}* seharga ${price}. Boleh minta informasi lebih lanjut?`;
  
  // 2. Encode URL
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div
      className={`rounded-3xl border p-8 transition hover:-translate-y-2 hover:shadow-xl ${
        featured
          ? "border-blue-600 bg-blue-600 text-white"
          : "border-slate-200 bg-white"
      }`}
    >
      {badge && (
        <span
          className={`rounded-full px-4 py-1 text-sm font-semibold ${
            featured
              ? "bg-white/20"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {badge}
        </span>
      )}

      <h3 className="mt-5 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-6 text-4xl font-bold">
        {price}
      </p>

      <div className="mt-8">
        <h4 className="font-semibold mb-4">
          Included
        </h4>
        <ul className="space-y-3">
          {features.map((item) => (
            <li
              key={item}
              className="flex gap-3"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="font-semibold flex items-center gap-2 mb-4">
          <Gift className="w-5 h-5" />
          Bonuses
        </h4>
        <ul className="space-y-2">
          {bonuses.map((item) => (
            <li key={item}>
              • {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Ubah button menjadi tag <a> dan masukkan waLink */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-10 block w-full text-center rounded-xl py-3 font-semibold transition-colors ${
          featured
            ? "bg-white text-blue-600 hover:bg-gray-100"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Get Started
      </a>

    </div>
  );
}