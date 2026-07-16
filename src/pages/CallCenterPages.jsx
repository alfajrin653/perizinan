import React from "react";
// Sesuaikan path import dengan struktur folder Anda
import FeatureSection from "../components/element/FeatureSection"; 
import CompanyPackageCard from "../components/element/PricingPembuatan"; 
import ProcessTimeline from "../components/element/Proses"; 
// import Requirements from "../../element/Requirements"; 
import FAQ from "../components/element/FAQ"; 

import { 
  PhoneCall, UserCheck, Forward, Mail, 
  Headphones, Voicemail, Smartphone, Clock,
  MessageSquare, Contact
} from "lucide-react";

export default function CallCenterPages() {
  
  // ==========================================
  // 1. DATA HERO SECTION (CALL ANSWERING)
  // ==========================================
  const callHeroFeatures = [
    { icon: UserCheck, title: "Resepsionis Profesional" },
    { icon: MessageSquare, title: "Personalized Greeting" },
    { icon: Forward, title: "Seamless Call Forwarding" },
    { icon: Mail, title: "Notifikasi Pesan via Email/WA" },
  ];

  // ==========================================
  // 2. DATA PROSES (CALL ANSWERING)
  // ==========================================
  const callSteps = [
    {
      id: 1,
      icon: Contact,
      title: "Setup Nomor Telepon",
      desc: "Anda akan mendapatkan nomor telepon perusahaan (Dedicated atau Shared) yang terhubung langsung dengan sistem resepsionis vOffice.",
    },
    {
      id: 2,
      icon: PhoneCall,
      title: "Panggilan Masuk",
      desc: "Klien atau mitra bisnis Anda menelepon ke nomor telepon perusahaan Anda tersebut.",
    },
    {
      id: 3,
      icon: Headphones,
      title: "Penerimaan Panggilan",
      desc: "Resepsionis profesional kami akan mengangkat telepon secara eksklusif menggunakan nama perusahaan Anda sesuai standar sapaan yang disepakati.",
    },
    {
      id: 4,
      icon: Forward,
      title: "Penyaringan & Transfer",
      desc: "Resepsionis akan menanyakan keperluan penelepon, lalu menyambungkan (transfer) panggilan tersebut langsung ke nomor HP/ekstensi Anda jika Anda bersedia menerima.",
    },
    {
      id: 5,
      icon: Voicemail,
      title: "Pencatatan Pesan",
      desc: "Jika Anda sedang sibuk atau tidak dapat menerima panggilan, resepsionis akan mencatat pesan dari penelepon dan mengirimkannya kepada Anda via Email atau WhatsApp.",
    },
  ];

  // ==========================================
  // 4. DATA PAKET HARGA (CALL ANSWERING)
  // ==========================================
  const callPackages = [
    {
      name: "Shared Call Answering",
      price: "Rp 300.000",
      badge: "PAKET DASAR",
      desc: "Solusi ekonomis dengan nomor telepon bersama. Ideal untuk bisnis skala kecil yang membutuhkan layanan penerimaan pesan.",
      featured: false,
      features: [
        "Nomor Telepon Perusahaan (Shared)",
        "Penerimaan Telepon oleh Resepsionis",
        "Pencatatan Pesan (Message Taking)",
        "Notifikasi Pesan via Email",
        "Layanan Hari Kerja (08:00 - 17:00)",
      ],
      bonuses: [
        "Free Setup Fee",
        "Akses Layanan vOffice Lainnya",
      ],
    },
    {
      name: "Dedicated Phone Number",
      price: "Rp 600.000",
      badge: "PALING PROFESIONAL",
      desc: "Tingkatkan citra korporat Anda dengan nomor telepon khusus dan sapaan yang dipersonalisasi menggunakan nama PT/CV Anda.",
      featured: true,
      features: [
        "Nomor Telepon Eksklusif (Dedicated)",
        "Sapaan Khusus (Nama Perusahaan Anda)",
        "Penyambungan Telepon (Call Transfer)",
        "Pencatatan Pesan & Voicemail",
        "Layanan Hari Kerja (08:00 - 17:00)",
      ],
      bonuses: [
        "Notifikasi Cepat via WhatsApp",
        "Pengaturan Nomor Ekstensi (Opsional)",
        "Laporan Panggilan Bulanan",
      ],
    },
  ];

  // ==========================================
  // 5. DATA FAQ (CALL ANSWERING)
  // ==========================================
  const callFaqs = [
    {
      question: "Apa yang diucapkan resepsionis saat mengangkat telepon?",
      answer: "Jika Anda menggunakan layanan Dedicated Phone Number, resepsionis kami akan menyapa penelepon dengan nama perusahaan Anda. Contoh: 'Selamat pagi, dengan PT Sukses Makmur, ada yang bisa kami bantu?' Anda juga bisa menentukan script sapaan khusus."
    },
    {
      question: "Apakah saya bisa meneruskan panggilan ke nomor HP pribadi saya?",
      answer: "Tentu. Dengan fitur Call Transfer (pada paket Dedicated), resepsionis kami akan menghubungi Anda terlebih dahulu untuk mengonfirmasi apakah Anda ingin menerima panggilan tersebut. Jika ya, panggilan langsung disambungkan ke HP Anda."
    },
    {
      question: "Bagaimana jika ada telepon masuk di luar jam kerja?",
      answer: "Panggilan yang masuk di luar jam kerja operasional (Senin-Jumat, 08:00 - 17:00) akan secara otomatis dialihkan ke sistem Voicemail khusus perusahaan Anda. Pesan suara tersebut akan dikirimkan langsung ke email Anda."
    },
    {
      question: "Apakah penelepon akan tahu kalau yang mengangkat adalah staf vOffice?",
      answer: "Tidak. Tim resepsionis kami sangat terlatih untuk bertindak seolah-olah mereka adalah in-house staf di kantor Anda. Kerahasiaan ini sangat kami jaga untuk menjaga citra profesional bisnis Anda."
    },
    {
      question: "Apakah saya memerlukan perangkat keras (telepon meja) khusus?",
      answer: "Tidak perlu. Seluruh sistem kami berbasis cloud (PABX). Panggilan dapat diteruskan langsung ke smartphone seluler Anda di mana pun Anda berada, sehingga Anda tidak terikat di satu tempat."
    }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO SECTION */}
      <FeatureSection 
        badge="LAYANAN BISNIS / CALL ANSWERING"
        title="Tingkatkan Citra Profesional Bisnis Anda"
        description="Jangan lewatkan satu pun panggilan penting. Resepsionis profesional kami siap menjawab telepon masuk menggunakan nama perusahaan Anda, menyambungkan panggilan, dan mencatat pesan untuk Anda."
        imageSrc="../public/img/call.jpeg" // Ganti dengan gambar resepsionis/telepon kantor
        statsValue="100%"
        statsLabel="Panggilan Terjawab Profesional"
        features={callHeroFeatures}
        buttonText="Hubungi Kami"
        buttonLink="/konsultasi"
      />

      {/* 2. PROSES LAYANAN */}
      <ProcessTimeline 
        title="Cara Kerja Call Answering"
        subtitle="Sistem telekomunikasi yang cerdas dan mulus, memastikan Anda tetap terhubung dengan klien tanpa harus selalu berada di depan meja."
        steps={callSteps} 
      />

      {/* 3. PERSYARATAN (Dihilangkan) */}
      {/* <Requirements ... /> */}

      {/* 4. PRICING SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Paket Layanan Call Answering
            </h2>
            <p className="text-slate-600">
              Pilih paket penjawab telepon yang sesuai dengan kebutuhan komunikasi bisnis Anda. Hemat biaya operasional dibanding merekrut resepsionis purna waktu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {callPackages.map((pkg, index) => (
              <CompanyPackageCard
                key={index}
                name={pkg.name}
                price={pkg.price}
                badge={pkg.badge}
                desc={pkg.desc}
                featured={pkg.featured}
                features={pkg.features}
                bonuses={pkg.bonuses}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <FAQ 
        faqs={callFaqs} 
        title="FAQ Seputar Call Answering"
        subtitle="Pelajari lebih lanjut tentang bagaimana layanan penjawab telepon kami dapat mengoptimalkan operasional Anda."
      />

    </div>
  );
}