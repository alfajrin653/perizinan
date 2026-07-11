import React from 'react'
import FAQ from '../../element/FAQ'


export const faqPendirianCV = [
  {
    question: "Apa itu CV (Commanditaire Vennootschap)?",
    answer:
      "CV (Commanditaire Vennootschap) adalah badan usaha yang didirikan oleh minimal dua orang, terdiri dari sekutu aktif yang menjalankan usaha dan sekutu pasif yang bertindak sebagai penanam modal. CV bukan badan hukum seperti PT, namun tetap memiliki legalitas usaha yang sah.",
  },
  {
    question: "Berapa lama proses pendirian CV?",
    answer:
      "Proses pendirian CV umumnya memerlukan waktu sekitar 3–7 hari kerja, tergantung kelengkapan dokumen, proses notaris, dan penerbitan Nomor Induk Berusaha (NIB).",
  },
  {
    question: "Apa saja syarat mendirikan CV?",
    answer:
      "Persyaratan umumnya meliputi KTP dan NPWP para pendiri, nama CV yang akan digunakan, alamat domisili usaha, nomor telepon dan email aktif, serta informasi mengenai bidang usaha yang akan dijalankan.",
  },
  {
    question: "Apakah pendirian CV sudah termasuk Akta Notaris?",
    answer:
      "Ya. Layanan pendirian CV biasanya sudah mencakup pembuatan Akta Pendirian oleh notaris sebagai salah satu dokumen utama legalitas usaha.",
  },
  {
    question: "Apakah layanan sudah termasuk NIB?",
    answer:
      "Ya. Setelah proses pendirian selesai, kami membantu pengurusan Nomor Induk Berusaha (NIB) melalui sistem OSS sesuai dengan bidang usaha yang didaftarkan.",
  },
  {
    question: "Apakah saya harus datang ke kantor?",
    answer:
      "Tidak harus. Seluruh proses dapat dilakukan secara online dengan mengirimkan dokumen yang diperlukan melalui email atau aplikasi pesan, kecuali apabila terdapat kebutuhan khusus yang memerlukan kehadiran langsung.",
  },
  {
    question: "Apakah saya bisa menggunakan alamat rumah sebagai domisili usaha?",
    answer:
      "Bisa, selama alamat tersebut memenuhi ketentuan yang berlaku di wilayah setempat dan sesuai dengan kebijakan pemerintah daerah mengenai penggunaan alamat sebagai domisili usaha.",
  },
  {
    question: "Apakah nama CV bisa ditentukan sendiri?",
    answer:
      "Ya. Anda bebas mengusulkan nama CV sesuai keinginan, selama tidak bertentangan dengan peraturan yang berlaku dan belum digunakan pada dokumen yang memerlukan pengecekan tertentu.",
  },
  {
    question: "Apakah setelah CV berdiri saya bisa langsung menjalankan usaha?",
    answer:
      "Ya. Setelah dokumen legalitas seperti Akta Pendirian dan NIB selesai diterbitkan, Anda dapat mulai menjalankan kegiatan usaha sesuai dengan bidang usaha yang telah didaftarkan.",
  },
  {
    question: "Apakah ada biaya tambahan di luar paket?",
    answer:
      "Tidak ada biaya tambahan selama kebutuhan Anda sesuai dengan cakupan paket yang dipilih. Apabila terdapat layanan tambahan seperti perubahan data, penambahan KBLI, atau pengurusan izin tertentu, biaya tersebut akan diinformasikan terlebih dahulu.",
  },
];

export default function FaqCv() {
  return (
    <div>
      <FAQ
  faqs={faqPendirianCV}
  title="Pertanyaan Seputar Pendirian CV"
  subtitle="Temukan jawaban atas pertanyaan yang paling sering diajukan mengenai proses pendirian Commanditaire Vennootschap (CV)."
/>
    </div>
  )
}
