import {
  BadgeCheck,
  Building2,
  DollarSign,
  Globe,
  Users,
  ShieldCheck,
} from "lucide-react";
import React from "react";

export default function VirtualOfficeBenefits() {
  const benefits = [
    {
      icon: Building2,
      title: "Alamat Bisnis Bergengsi",
      description:
        "Tingkatkan citra perusahaan dengan alamat bisnis resmi di lokasi strategis yang memberikan kesan profesional kepada klien, investor, dan mitra usaha.",
    },
    {
      icon: DollarSign,
      title: "Hemat Biaya Operasional",
      description:
        "Kurangi pengeluaran perusahaan tanpa perlu menyewa kantor fisik. Nikmati fasilitas bisnis profesional dengan biaya yang jauh lebih efisien.",
    },
    {
      icon: Globe,
      title: "Fleksibilitas Bekerja",
      description:
        "Kelola bisnis dari mana saja tanpa mengurangi profesionalisme perusahaan. Cocok untuk startup, UMKM, freelancer, maupun perusahaan yang menerapkan sistem kerja hybrid.",
    },
    {
      icon: Users,
      title: "Akses Ruang Meeting",
      description:
        "Sediakan ruang meeting yang nyaman dan representatif untuk bertemu klien, presentasi bisnis, maupun rapat tim kapan pun diperlukan.",
    },
    {
      icon: ShieldCheck,
      title: "Mendukung Legalitas Usaha",
      description:
        "Gunakan alamat kantor yang memenuhi persyaratan administrasi untuk membantu proses pendirian perusahaan, perizinan, dan kebutuhan legal lainnya.",
    },
    {
      icon: BadgeCheck,
      title: "Layanan Administrasi Profesional",
      description:
        "Nikmati layanan penerimaan surat dan paket, resepsionis profesional, serta dukungan administrasi yang membantu operasional bisnis berjalan lebih efektif.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            MANFAAT VIRTUAL OFFICE
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Keuntungan Menggunakan Virtual Office
          </h2>

          <p className="mt-5 text-lg text-slate-600 leading-8">
            Virtual Office memberikan solusi bisnis modern dengan menggabungkan
            alamat perusahaan yang profesional, efisiensi biaya, serta berbagai
            fasilitas pendukung untuk membantu bisnis berkembang tanpa harus
            memiliki kantor fisik sendiri.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}