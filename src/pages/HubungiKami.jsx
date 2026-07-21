import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, PhoneCall, Mail, MessageCircle, Clock, Send, Loader2, CheckCircle } from 'lucide-react';

export default function HubungiKami() {
  // Referensi ke elemen form untuk EmailJS
  const form = useRef();

  // State untuk melacak status pengiriman (loading, success, error)
  const [status, setStatus] = useState('idle');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    // GANTI STRING DI BAWAH DENGAN KODE DARI AKUN EMAILJS ANDA
    const SERVICE_ID = 'service_w7lr0qr';
    const TEMPLATE_ID = 'template_qae2zsc';
    const PUBLIC_KEY = 'FWu3JlxU3beHV50Gh';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log('Success:', result.text);
        setStatus('success');
        e.target.reset(); // Mengosongkan form setelah berhasil

        // Kembalikan tombol ke keadaan semula setelah 5 detik
        setTimeout(() => setStatus('idle'), 5000);
      },
      (error) => {
        console.log('Error:', error.text);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    );
  };

  // Data Informasi Kontak
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Kantor Pusat',
      desc: 'Grand Kb. Sirih, Jl. Kebon Sirih No.35, RT.14/RW.2, Dukuh Atas, Kb. Sirih, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10340',
    },
    {
      icon: PhoneCall,
      title: 'Telepon',
      desc: '+62 822-6010-0964',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      desc: '+62 822-6010-0964',
    },
    {
      icon: Mail,
      title: 'Email',
      desc: 'info@dudukmanis.com',
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      desc: 'Senin - Jumat: 08:00 - 17:00 WIB',
    },
  ];

  return (
    <div className='w-full bg-slate-50 min-h-screen py-24'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* HEADER SECTION */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='inline-flex bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4'>BANTUAN & DUKUNGAN</span>
          <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'>Hubungi Kami</h1>
          <p className='text-lg text-slate-600'>Punya pertanyaan seputar layanan kami atau butuh konsultasi khusus? Jangan ragu untuk menghubungi tim ahli kami. Kami siap membantu membesarkan bisnis Anda.</p>
        </div>

        <div className='grid lg:grid-cols-5 gap-12 items-start'>
          {/* BAGIAN KIRI: INFORMASI KONTAK */}
          <div className='lg:col-span-2 space-y-8'>
            <div className='bg-white p-8 rounded-3xl border border-slate-200 shadow-sm'>
              <h3 className='text-2xl font-bold text-slate-900 mb-8'>Informasi Kontak</h3>

              <div className='space-y-6'>
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className='flex gap-4 items-start'>
                      <div className='w-12 h-12 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center'>
                        <Icon size={24} />
                      </div>
                      <div>
                        <p className='font-bold text-slate-900 mb-1'>{info.title}</p>
                        <p className='text-slate-600 leading-relaxed text-sm'>{info.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* BAGIAN KANAN: FORMULIR KONTAK DENGAN EMAILJS */}
          <div className='lg:col-span-3'>
            <div className='bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50'>
              <h3 className='text-2xl font-bold text-slate-900 mb-2'>Kirim Pesan</h3>
              <p className='text-slate-500 mb-8'>Isi formulir di bawah ini dan perwakilan kami akan segera menghubungi Anda.</p>

              {/* Tambahkan ref={form} dan onSubmit={sendEmail} */}
              <form ref={form} onSubmit={sendEmail} className='space-y-6'>
                {/* Baris 1: Nama & Telepon */}
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-semibold text-slate-900 mb-2'>Nama Lengkap *</label>
                    <input
                      type='text'
                      name='name' // PENTING: Atribut 'name' ini harus sesuai dengan variabel di EmailJS Template
                      placeholder='Masukkan nama Anda'
                      className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition bg-slate-50 focus:bg-white'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-semibold text-slate-900 mb-2'>Nomor WhatsApp *</label>
                    <input
                      type='tel'
                      name='telepon' // PENTING
                      placeholder='Contoh: 0812xxxxxx'
                      className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition bg-slate-50 focus:bg-white'
                      required
                    />
                  </div>
                </div>

                {/* Baris 2: Email & Perusahaan */}
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-semibold text-slate-900 mb-2'>Email *</label>
                    <input
                      type='email'
                      name='email' // PENTING
                      placeholder='email@perusahaan.com'
                      className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition bg-slate-50 focus:bg-white'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-semibold text-slate-900 mb-2'>Nama Perusahaan (Opsional)</label>
                    <input
                      type='text'
                      name='company' // PENTING
                      placeholder='PT / CV Anda'
                      className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition bg-slate-50 focus:bg-white'
                    />
                  </div>
                </div>

                {/* Baris 3: Layanan yang Diminati */}
                <div>
                  <label className='block text-sm font-semibold text-slate-900 mb-2'>Layanan yang Diminati *</label>
                  <select
                    name='service' // PENTING
                    className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition bg-slate-50 focus:bg-white appearance-none'
                    required
                    defaultValue=''
                  >
                    <option value='' disabled>
                      Pilih layanan...
                    </option>
                    <option value='Virtual Office'>Virtual Office</option>
                    <option value='Pendirian PT / CV / Firma'>Pendirian PT / CV / Firma</option>
                    <option value='PMA Setup'>PMA Setup (Foreign Investment)</option>
                    <option value='Pendaftaran Merek'>Pendaftaran Merek (HAKI)</option>
                    <option value='Pajak & Akuntansi'>Pajak & Akuntansi</option>
                    <option value='Visa & KITAS'>Visa & KITAS</option>
                    <option value='Lainnya'>Lainnya</option>
                  </select>
                </div>

                {/* Baris 4: Pesan */}
                <div>
                  <label className='block text-sm font-semibold text-slate-900 mb-2'>Pesan Tambahan</label>
                  <textarea
                    name='message' // PENTING
                    rows='4'
                    placeholder='Ceritakan detail kebutuhan bisnis Anda di sini...'
                    className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition bg-slate-50 focus:bg-white resize-none'
                  ></textarea>
                </div>

                {/* Status Message (Pesan berhasil/gagal) */}
                {status === 'success' && (
                  <div className='p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3'>
                    <CheckCircle size={20} />
                    <p className='text-sm font-medium'>Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className='p-4 bg-red-50 text-red-700 rounded-xl'>
                    <p className='text-sm font-medium'>Maaf, terjadi kesalahan. Silakan coba beberapa saat lagi atau hubungi via WhatsApp.</p>
                  </div>
                )}

                {/* Tombol Submit Dinamis */}
                <button
                  type='submit'
                  disabled={status === 'loading' || status === 'success'}
                  className={`w-full font-bold py-4 rounded-xl transition shadow-lg flex items-center justify-center gap-2 ${
                    status === 'success' ? 'bg-green-600 text-white shadow-green-200' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={20} className='animate-spin' />
                      Mengirim...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle size={20} />
                      Terkirim
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* MAP SECTION */}
        <div className='mt-16'>
          <div className='bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden'>
            <div className='px-8 py-6 border-b border-slate-200'>
              <h3 className='text-2xl font-bold text-slate-900'>Lokasi Kantor Kami</h3>
              <p className='text-slate-600 mt-2'>Kunjungi kantor kami atau gunakan Google Maps untuk mendapatkan petunjuk arah.</p>
            </div>

            <iframe
              title='Lokasi Kantor'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6073296678765!2d106.82945885!3d-6.18327665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42e28bb5771%3A0x801425a3bec8eb58!2sGrand%20Kb.%20Sirih%2C%20Jl.%20Kebon%20Sirih%20No.35%2C%20RT.14%2FRW.2%2C%20Dukuh%20Atas%2C%20Kb.%20Sirih%2C%20Kec.%20Menteng%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010340!5e0!3m2!1sid!2sid!4v1783419039821!5m2!1sid!2sid'
              className='w-full h-[500px]'
              loading='lazy'
              allowFullScreen
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
