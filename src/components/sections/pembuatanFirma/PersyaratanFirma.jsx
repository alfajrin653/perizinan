import React from 'react'
import { 
  Search, FileSignature, Scale, Briefcase, CreditCard
} from "lucide-react";
import Proses from '../../element/Proses';


const firmaSteps = [
    {
      id: 1,
      icon: Search,
      title: "Pengecekan Nama Firma",
      description: "Pengecekan ketersediaan nama Firma pilihan Anda untuk memastikan belum digunakan oleh pihak lain, dilanjutkan dengan pemesanan nama.",
    },
    {
      id: 2,
      icon: FileSignature,
      title: "Penandatanganan Akta Notaris",
      description: "Pembuatan draft Akta Pendirian Firma. Seluruh sekutu (pendiri) wajib menandatangani Akta ini di hadapan Notaris.",
    },
    {
      id: 3,
      icon: Scale,
      title: "Pendaftaran Kemenkumham",
      description: "Akta Pendirian didaftarkan ke Kementerian Hukum dan HAM melalui sistem AHU untuk mendapatkan Surat Keterangan Terdaftar (SKT).",
    },
    {
      id: 4,
      icon: Briefcase,
      title: "Pengurusan NIB (OSS)",
      description: "Pendaftaran di sistem OSS (Online Single Submission) untuk mendapatkan Nomor Induk Berusaha (NIB) sebagai izin operasional.",
    },
    {
      id: 5,
      icon: CreditCard,
      title: "Pendaftaran NPWP",
      description: "Pembuatan Nomor Pokok Wajib Pajak (NPWP) dan Surat Keterangan Terdaftar (SKT) di KPP domisili Firma.",
    },
  ];

export default function PersyaratanFirma() {
  return (
    <div>
      {/* 2. PROSES PENDIRIAN */}
      <Proses 
        title="Alur Pendirian Firma"
        subtitle="Hanya 5 langkah praktis. Kami akan memandu Anda dari awal hingga dokumen legalitas siap di tangan."
        steps={firmaSteps} 
      />
    </div>
  )
}
