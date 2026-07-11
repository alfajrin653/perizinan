import {
  Landmark,
  Wallet,
  Globe,
  MapPin,
  Mail,
  Users,
} from "lucide-react";
import React from "react";

export default function VirtualOfficeEducation() {
  const cards = [
    {
      icon: Landmark,
      title: "Meningkatkan Citra Bisnis",
      desc: "Gunakan alamat bisnis yang profesional dan bergengsi untuk meningkatkan kepercayaan pelanggan, investor, serta mitra bisnis terhadap perusahaan Anda.",
    },
    {
      icon: Wallet,
      title: "Menghemat Biaya Operasional",
      desc: "Kurangi pengeluaran perusahaan tanpa harus menyewa kantor fisik. Nikmati fasilitas bisnis profesional dengan biaya yang lebih efisien.",
    },
    {
      icon: Globe,
      title: "Bekerja dari Mana Saja",
      desc: "Kelola bisnis secara fleksibel dari rumah, coworking space, maupun lokasi lainnya tanpa kehilangan identitas perusahaan yang profesional.",
    },
    {
      icon: MapPin,
      title: "Alamat Bisnis Strategis",
      desc: "Miliki alamat perusahaan di kawasan bisnis prestisius untuk meningkatkan reputasi perusahaan dan mempermudah kebutuhan legalitas usaha.",
    },
    {
      icon: Mail,
      title: "Pengelolaan Surat & Paket",
      desc: "Seluruh surat, dokumen, dan paket perusahaan akan diterima, dikelola, serta diinformasikan kepada Anda dengan aman dan tepat waktu.",
    },
    {
      icon: Users,
      title: "Akses Ruang Meeting",
      desc: "Gunakan ruang meeting yang nyaman dan representatif untuk bertemu klien, melakukan presentasi, maupun mengadakan rapat bisnis kapan pun dibutuhkan.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            MENGAPA MEMILIH KAMI
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-6 text-slate-900">
            Mengapa Memilih Virtual Office?
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            Virtual Office adalah solusi ideal bagi startup, UMKM, freelancer,
            hingga perusahaan yang ingin memiliki alamat bisnis resmi dengan
            biaya yang lebih hemat. Dapatkan citra profesional, kemudahan
            legalitas, layanan administrasi, serta berbagai fasilitas bisnis
            untuk mendukung pertumbuhan usaha Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Icon className="text-blue-600 w-7 h-7" />
                </div>

                <h3 className="text-xl font-semibold mt-6 text-slate-900">
                  {card.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}