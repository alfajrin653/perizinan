import React from "react";
// ... (import komponen lainnya seperti FeatureSection, CompanyPackageCard, dll)
import FAQ from "../../element/FAQ"; // Import komponen FAQ

export default function FaqPt() {
  
  // ... (Data hero, proses, requirements, pricing yang sudah ada sebelumnya)

  // ==========================================
  // DATA FAQ UNTUK PT
  // ==========================================
  const ptFaqs = [
    {
      question: "Berapa lama proses pendirian PT hingga selesai?",
      answer: "Normalnya, proses pendirian PT memakan waktu sekitar 3-7 hari kerja setelah seluruh dokumen persyaratan lengkap dan nama PT disetujui oleh Kemenkumham."
    },
    {
      question: "Berapa modal dasar minimum untuk mendirikan PT saat ini?",
      answer: "Berdasarkan UU Cipta Kerja terbaru, tidak ada lagi syarat minimal modal dasar Rp 50 juta. Besaran modal dasar kini ditentukan sepenuhnya oleh kesepakatan para pendiri PT."
    },
    {
      question: "Apakah saya harus datang langsung ke kantor untuk tanda tangan akta?",
      answer: "Idealnya iya, karena Notaris perlu membacakan akta secara langsung. Namun, jika Anda berhalangan, kami memiliki layanan penjemputan dokumen (document pickup) atau mekanisme lain yang sesuai dengan regulasi notariat."
    },
    {
      question: "Apakah Virtual Office ini sah untuk Pengukuhan Pengusaha Kena Pajak (PKP)?",
      answer: "Ya, sangat sah. Layanan Virtual Office kami berada di zona zonasi komersial yang diakui pemerintah dan banyak dari klien kami yang telah berhasil mendapatkan status PKP menggunakan alamat kami."
    },
    {
      question: "Apa bedanya PT Biasa dan PT Perorangan?",
      answer: "PT Biasa wajib didirikan oleh minimal 2 orang (sebagai direktur dan komisaris). Sedangkan PT Perorangan bisa didirikan oleh 1 orang saja, namun terbatas untuk kriteria usaha mikro dan kecil (UMK) dengan omzet tertentu."
    }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO SECTION */}
      {/* <FeatureSection ... /> */}

      {/* 2. PROSES PENDIRIAN */}
      {/* <ProcessTimeline ... /> */}

      {/* 3. PERSYARATAN */}
      {/* <Requirements ... /> */}

      {/* 4. PRICING SECTION */}
      {/* <section className="py-24 bg-slate-50"> ... </section> */}

      {/* 5. FAQ SECTION (TAMBAHAN BARU) */}
      <FAQ 
        title="Pertanyaan Seputar Pendirian PT"
        subtitle="Temukan jawaban cepat untuk keraguan Anda mengenai legalitas dan proses pembuatan PT."
        faqs={ptFaqs} 
      />

    </div>
  );
}