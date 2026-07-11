import { ChevronDown } from "lucide-react";
import { useState } from "react";
import React from "react";

export default function VirtualOfficeFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="mt-4 text-slate-600">
              Temukan jawaban atas berbagai pertanyaan seputar layanan Virtual Office,
              mulai dari legalitas perusahaan, fasilitas yang tersedia, hingga proses
              penggunaan layanan kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold">{faq.question}</span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "Apa itu Virtual Office?",
    answer:
      "Virtual Office adalah layanan penyewaan alamat bisnis resmi yang memungkinkan perusahaan memiliki domisili usaha profesional tanpa harus menyewa kantor fisik. Layanan ini umumnya mencakup alamat bisnis, penerimaan surat dan paket, layanan resepsionis, serta akses ke ruang meeting sesuai paket yang dipilih.",
  },
  {
    question: "Apakah Virtual Office dapat digunakan untuk legalitas perusahaan?",
    answer:
      "Ya. Virtual Office dapat digunakan sebagai alamat domisili perusahaan untuk membantu proses pendirian badan usaha maupun pengurusan perizinan, sesuai dengan peraturan dan ketentuan yang berlaku di wilayah operasional.",
  },
  {
    question: "Siapa saja yang cocok menggunakan Virtual Office?",
    answer:
      "Virtual Office cocok digunakan oleh startup, UMKM, freelancer, konsultan, perusahaan digital, perusahaan yang menerapkan sistem kerja hybrid atau remote, hingga investor yang ingin memiliki alamat bisnis profesional dengan biaya yang lebih efisien.",
  },
  {
    question: "Fasilitas apa saja yang didapatkan dari layanan Virtual Office?",
    answer:
      "Fasilitas dapat berbeda pada setiap paket, namun umumnya meliputi alamat bisnis resmi, layanan penerimaan surat dan paket, resepsionis profesional, notifikasi surat masuk, akses ruang meeting, serta berbagai layanan administrasi pendukung lainnya.",
  },
  {
    question: "Apakah saya dapat menerima surat dan paket perusahaan?",
    answer:
      "Tentu. Seluruh surat maupun paket yang dikirim ke alamat Virtual Office akan diterima oleh petugas dan diinformasikan kepada Anda sesuai prosedur layanan yang berlaku.",
  },
  {
    question: "Apakah tersedia ruang meeting?",
    answer:
      "Ya. Sebagian besar paket Virtual Office menyediakan akses ke ruang meeting. Pengguna hanya perlu melakukan reservasi terlebih dahulu sesuai jadwal ketersediaan dan ketentuan paket yang dipilih.",
  },
  {
    question: "Berapa lama masa sewa Virtual Office?",
    answer:
      "Masa sewa biasanya tersedia dalam pilihan 6 bulan atau 12 bulan, tergantung kebijakan penyedia layanan. Beberapa paket juga menawarkan perpanjangan secara fleksibel.",
  },
  {
    question: "Apakah pembayaran dapat dilakukan secara bertahap?",
    answer:
      "Metode pembayaran bergantung pada paket dan kebijakan perusahaan. Beberapa penyedia menawarkan pembayaran sekaligus maupun cicilan untuk memudahkan pelanggan.",
  },
  {
    question: "Apakah perusahaan PMA dapat menggunakan Virtual Office?",
    answer:
      "Ya. Perusahaan Penanaman Modal Asing (PMA) dapat menggunakan layanan Virtual Office selama memenuhi persyaratan administrasi dan ketentuan hukum yang berlaku di Indonesia.",
  },
  {
    question: "Apakah penyedia Virtual Office juga membantu pendirian perusahaan?",
    answer:
      "Ya. Selain menyediakan alamat bisnis, banyak penyedia Virtual Office juga menawarkan layanan pendirian PT, CV, PMA, pengurusan NIB, NPWP, PKP, perizinan OSS, hingga konsultasi legalitas usaha sehingga proses memulai bisnis menjadi lebih mudah.",
  },
];