import { Check } from "lucide-react";
import React from "react";

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  featured,
}) {
  // 1. Siapkan nomor WA dan pesan dinamis
  const waNumber = "6281288888888"; // Ganti dengan nomor WA admin
  const waMessage = `Halo, saya tertarik dengan paket *${title}* seharga ${price} ${period}. Boleh minta informasi lebih lanjut?`;
  
  // 2. Encode URL agar aman (mengubah spasi menjadi format %20 dll)
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div
      className={`
      rounded-3xl
      border
      p-8
      transition
      hover:-translate-y-2
      hover:shadow-xl

      ${
        featured
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white border-slate-200"
      }
    `}
    >
      {featured && (
        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm">
          Most Popular
        </span>
      )}

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 opacity-80">
        {description}
      </p>

      <div className="mt-8">
        <span className="text-4xl font-bold">
          {price}
        </span>

        <span className="ml-2 opacity-80">
          {period}
        </span>
      </div>

      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3"
          >
            <Check className="w-5 h-5" />

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* 3. Ubah button menjadi tag <a> dan masukkan waLink */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          mt-10
          block
          w-full
          text-center
          rounded-xl
          py-3
          font-semibold
          transition-colors

          ${
            featured
              ? "bg-white text-blue-600 hover:bg-gray-100"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }
        `}
      >
        Choose Package
      </a>
    </div>
  );
}