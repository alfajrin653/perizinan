import React from "react";
import { Link } from "react-router-dom";

export default function ProductDetailPage({ data, backLink = "/" }) {
  // Tampilan jika data belum siap atau tidak ditemukan
  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Data tidak ditemukan
        </h2>
        <Link 
          to={backLink} 
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Kembali
        </Link>
      </div>
    );
  }

  // Template WA text (jika sewaktu-waktu ingin dipakai/opsional)
  // Tapi di sini kita fokuskan tombol utamanya mengarah ke /hubungi-kami sesuai requesmu
  
  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        
        {/* Banner Gambar */}
        <div className="h-64 md:h-96 w-full bg-gray-200">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Area Konten */}
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            
            {/* Info Kiri (Deskripsi & Fasilitas) */}
            <div className="flex-1">
              {data.city && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                  {data.city}
                </span>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-2">
                {data.title}
              </h1>
              
              <p className="text-gray-600 text-lg mb-8">
                {data.address || data.description}
              </p>

              {data.features && data.features.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Fasilitas Termasuk:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {data.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Info Kanan (Card Harga & CTA Hubungi Kami) */}
            <div className="w-full md:w-80 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm shrink-0">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Harga Mulai Dari
              </h3>
              
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  {data.pricing?.price || data.price}
                </span>
                {(data.pricing?.period || data.period) && (
                  <span className="text-gray-500 ml-1">
                    /{data.pricing?.period || data.period}
                  </span>
                )}
              </div>
              
              {/* Tombol mengarah ke Hubungi Kami dengan membawa State data produk */}
              <Link 
                to="/hubungi-kami" 
                state={{ 
                  fromPage: data.title,
                  category: data.city || "Layanan"
                }}
                className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 mb-4"
              >
                Pesan Sekarang
              </Link>
              
              <Link 
                to={backLink} 
                className="block text-center text-sm text-gray-500 hover:text-blue-600 transition underline"
              >
                Kembali
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}