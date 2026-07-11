import React from 'react'
import Proses from '../../element/Proses'
import { Users, IdCard, FileText, Image as ImageIcon, MapPin } from 'lucide-react'

export default function ProsesCv() {
  return (
    <div>
        <Proses
        title="Proses Pembuatan CV"
        subtitle="Kami mempermudah proses pembuatan CV Anda dengan langkah-langkah yang jelas dan transparan."
        steps={[
           {
      icon: Users,
      title: "Minimal 2 Orang Pendiri",
      desc: "Harus ada minimal 1 Sekutu Aktif (Direktur/Pengurus) dan 1 Sekutu Pasif (Pemberi Modal).",
    },
    {
      icon: IdCard,
      title: "E-KTP & NPWP",
      desc: "Fotokopi/scan KTP dan NPWP pribadi milik seluruh pendiri CV.",
    },
    {
      icon: FileText,
      title: "Kartu Keluarga (KK)",
      desc: "Fotokopi/scan Kartu Keluarga (KK) khusus untuk Sekutu Aktif (Direktur).",
    },
    {
      icon: ImageIcon,
      title: "Pas Foto",
      desc: "Pas foto berwarna Direktur ukuran 3x4 atau 4x6 (latar belakang merah).",
    },
    {
      icon: MapPin,
      title: "Bukti Domisili Usaha",
      desc: "Sewa Virtual Office di kami? Syarat domisili otomatis SELESAI tanpa perlu repot cari surat PBB/sewa gedung.",
      highlight: true, 
    },
        ]}
        />
            
       
      
    </div>
  )
}
