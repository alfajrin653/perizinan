import React from "react";

export default function KeuntunganMeetRoom() {
  return (
    <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Header */}
    <div className="mb-12">
      <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
        FACILITIES
      </span>
      <h2 className="text-4xl font-bold text-slate-900 mt-2">
        Keuntungan Meeting Room Kami
      </h2>
    </div>

    {/* Grid Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "Lokasi strategis", desc: "Berada di lokasi strategis yang mudah diakses." },
        { title: "Representatif", desc: "Memiliki desain yang representatif untuk bisnis Anda." },
        { title: "Fasilitas Lengkap", desc: "Fasilitas termasuk proyektor, smart TV, dan papan tulis." },
        { title: "Internet", desc: "Akses internet gratis untuk mendukung kebutuhan Anda." },
        { title: "Refreshment", desc: "Anda dapat mengakses pantry dan menggunakan fasilitasnya." },
      ].map((item, index) => (
        <div key={index} className="border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition">
          {/* Icon Circle */}
          <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0 mt-1">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          {/* Text Content */}
          <div>
            <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
            <p className="text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}