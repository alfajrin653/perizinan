import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// ==========================================
// 1. DATA FAQ KHUSUS PEMBUATAN CV
// ==========================================
const faqData = [
  {
    question: "Apa perbedaan utama mendirikan CV dibandingkan dengan PT?",
    answer: "Perbedaan utamanya ada pada status hukum dan modal. CV bukan merupakan badan hukum murni seperti PT, sehingga tidak ada pemisahan mutlak antara kekayaan pribadi dan kekayaan perusahaan. Namun, kelebihannya adalah proses pendirian CV jauh lebih cepat, biayanya lebih murah, dan sistem pengambilan keputusannya lebih fleksibel."
  },
  {
    question: "Apakah ada syarat minimal modal awal untuk membuat CV?",
    answer: "Tidak ada syarat batas minimal modal dasar yang ditetapkan oleh undang-undang untuk pendirian CV. Besaran modal disetor sepenuhnya ditentukan dan disepakati oleh para pendiri (Sekutu Aktif dan Sekutu Pasif) sesuai dengan kebutuhan awal operasional bisnis."
  },
  {
    question: "Siapa saja yang dibutuhkan untuk mendirikan CV?",
    answer: "CV minimal harus didirikan oleh 2 (dua) orang Warga Negara Indonesia (WNI). Satu orang akan bertindak sebagai Sekutu Aktif (Direktur yang menjalankan operasional perusahaan) dan satu orang lagi sebagai Sekutu Pasif (Komanditer yang hanya menyetorkan modal)."
  },
  {
    question: "Dokumen apa saja yang harus saya siapkan?",
    answer: "Persyaratannya cukup sederhana. Anda hanya perlu menyiapkan e-KTP, NPWP Pribadi, KK (Kartu Keluarga) dari seluruh pendiri, pas foto direktur, serta detail informasi perusahaan seperti nama CV, alamat, bidang usaha, dan proporsi pembagian modal."
  },
  {
    question: "Berapa lama estimasi waktu penyelesaian legalitas CV?",
    answer: "Secara umum, jika seluruh dokumen persyaratan sudah lengkap dan divalidasi, proses pengurusan Akta Notaris, SK Kemenkumham, NPWP Perusahaan, hingga NIB (Nomor Induk Berusaha) memakan waktu sekitar 3 hingga 7 hari kerja."
  },
  {
    question: "Apakah saya bisa menggunakan alamat rumah untuk alamat domisili CV?",
    answer: "Sesuai dengan peraturan tata kota (terutama di wilayah Jakarta dan kota besar lainnya), rumah tinggal tidak diizinkan untuk dijadikan domisili perusahaan. Solusi terbaik dan paling hemat adalah dengan menyewa layanan Virtual Office kami yang sudah berstatus zonasi komersial."
  }
];

export default function FaqPembuatanCV() {
  // State untuk melacak FAQ mana yang sedang terbuka (null = semua tertutup)
  const [openIndex, setOpenIndex] = useState(null);

  // Fungsi untuk toggle (buka/tutup) FAQ
  const toggleFaq = (index) => {
    // Jika yang diklik adalah FAQ yang sudah terbuka, maka tutup. Jika tidak, buka yang baru.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Bagian FAQ */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-slate-600">
            Temukan jawaban lengkap seputar proses, syarat, dan ketentuan pendirian CV di sini.
          </p>
        </div>

        {/* Daftar Accordion FAQ */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen ? "border-blue-500 bg-blue-50/50" : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {/* Tombol Pertanyaan */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-semibold text-lg pr-4 ${isOpen ? "text-blue-700" : "text-slate-800"}`}>
                    {faq.question}
                  </span>
                  
                  {/* Ikon Panah Berputar */}
                  <div className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : "text-slate-400"}`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>

                {/* Area Jawaban (Animasi Expand/Collapse) */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-blue-100/50 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}