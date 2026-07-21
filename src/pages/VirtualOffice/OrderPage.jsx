import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Menangkap data LENGKAP yang dikirim dari ProductDetailPage
  const { title = 'Layanan', city = '-', address = '-', price = '-', serviceType = 'Pemesanan Umum' } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ganti dengan nomor WhatsApp Admin Anda
    const adminWhatsApp = '6282260100964';

    // Format pesan WhatsApp yang super jelas untuk Admin
    const message = `Halo Admin, saya ingin melakukan pemesanan layanan berikut:
    
*DETAIL LAYANAN*
- Tipe Layanan : ${serviceType}
- Nama Lokasi : ${title}
- Area/Kota : ${city}
- Harga : ${price}
- Alamat : ${address}

*DATA PEMESAN*
- Nama Lengkap : ${formData.name}
- No. WhatsApp : ${formData.phone}
- Rencana Mulai : ${formData.date || 'Belum ditentukan'}
- Catatan Tambahan : ${formData.notes || '-'}

Mohon informasi ketersediaan untuk layanan tersebut. Terima kasih!`;

    const waLink = `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };

  return (
    <section className='py-12 px-4 bg-gray-50 min-h-screen flex justify-center items-start'>
      <div className='max-w-xl w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
        <div className='bg-blue-600 p-6 text-center'>
          <h2 className='text-2xl font-bold text-white'>Formulir Pemesanan</h2>
          <p className='text-blue-100 text-sm mt-1'>Selesaikan pesanan Anda dalam 1 langkah</p>
        </div>

        <div className='p-6 md:p-8'>
          {/* Ringkasan Pesanan yang Lebih Detail & Elegan */}
          <div className='bg-gray-50 p-5 rounded-xl border border-gray-200 mb-8'>
            <div className='flex justify-between items-start mb-2'>
              <span className='text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 px-2 py-1 rounded'>{serviceType}</span>
              <span className='text-sm font-semibold text-gray-700'>{city}</span>
            </div>

            <h3 className='text-xl font-bold text-gray-900 mb-2'>{title}</h3>

            <div className='flex items-center text-sm text-gray-500 mb-4 line-clamp-2'>
              <svg className='w-4 h-4 mr-1 shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
              {address}
            </div>

            <div className='pt-3 border-t border-gray-200'>
              <p className='text-sm text-gray-500'>Estimasi Harga:</p>
              <p className='text-lg font-bold text-green-600'>{price}</p>
            </div>
          </div>

          {/* Form Input */}
          <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Nama Lengkap <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Masukkan nama Anda'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Nomor WhatsApp <span className='text-red-500'>*</span>
              </label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder='Contoh: 081234567890'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Rencana Mulai (Opsional)</label>
              <input
                type='date'
                name='date'
                value={formData.date}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-700'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Catatan Tambahan (Opsional)</label>
              <textarea
                name='notes'
                value={formData.notes}
                onChange={handleChange}
                rows='3'
                placeholder='Misal: Saya butuh untuk 5 orang...'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none'
              ></textarea>
            </div>

            <div className='pt-4 flex flex-col sm:flex-row gap-3'>
              <button type='button' onClick={() => navigate(-1)} className='w-full sm:w-1/3 px-4 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 font-semibold rounded-lg transition text-center'>
                Kembali
              </button>

              <button type='submit' className='w-full sm:w-2/3 px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition shadow-sm flex justify-center items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
                </svg>
                Kirim via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
