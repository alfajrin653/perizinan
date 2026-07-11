import React from "react";
import { 
  MapPin, 
  Camera, 
  User, 
  CheckCircle, 
  Tv, 
  Wifi, 
  Clapperboard, 
  MonitorPlay, 
  Coffee 
} from "lucide-react";

export default function PodcastFacilities() {
  // Data untuk Section 1: Kelebihan Sewa
  const advantages = [
    {
      icon: MapPin,
      title: "Lokasi strategis",
      desc: "Studio podcast vOffice terletak di lokasi strategis yang mudah diakses.",
      iconColor: "text-blue-600",
      iconBg: "bg-gray-100",
    },
    {
      icon: Camera,
      title: "Peralatan Lengkap",
      desc: "Fasilitas studio podcast lengkap. Anda tidak perlu membawa peralatan sendiri.",
      iconColor: "text-blue-600",
      iconBg: "bg-gray-100",
    },
    {
      icon: User,
      title: "Operator Profesional",
      desc: "Tersedia operator untuk membantu pelaksanaan acara.",
      iconColor: "text-blue-600",
      iconBg: "bg-gray-100",
    },
    {
      icon: CheckCircle,
      title: "Bebas Set-Up",
      desc: "Tata letak dapat disesuaikan sesuai dengan kebutuhan Anda.",
      iconColor: "text-blue-600",
      iconBg: "bg-gray-100",
    },
  ];

  // Data untuk Section 2: Fasilitas Icon Grid
  const facilities = [
    { icon: Tv, label: "LED TV", bgColor: "bg-indigo-700" },
    { icon: Wifi, label: "Internet Berkecepatan Tinggi", bgColor: "bg-teal-500" },
    { icon: Camera, label: "Peralatan Lengkap", bgColor: "bg-fuchsia-600" },
    { icon: Clapperboard, label: "Green Screen", bgColor: "bg-rose-700" },
    { icon: MonitorPlay, label: "Virtual Stage", bgColor: "bg-indigo-800" },
    { icon: User, label: "Operator Profesional", bgColor: "bg-teal-500" },
    { icon: Coffee, label: "Refreshment", bgColor: "bg-fuchsia-600" },
  ];

  return (
    <div className="w-full bg-white pb-24">
      
      {/* SECTION 1: Kelebihan Sewa */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <span className="inline-block bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            FACILITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Kelebihan Sewa Studio Podcast kami
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="border border-gray-200 rounded-3xl p-6 hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex gap-4">
                  <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${item.iconBg} ${item.iconColor}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: Fasilitas Icon Grid */}
      <section className="py-12 max-w-5xl mx-auto px-6 lg:px-8 mt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
          Fasilitas Studio Podcast vOffice
        </h2>

        {/* Gunakan flex-wrap dan justify-center untuk meniru layout grid terpusat seperti di gambar */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-12">
          {facilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center w-36"
              >
                <div 
                  className={`w-16 h-16 rounded-3xl flex items-center justify-center text-white mb-4 shadow-sm ${item.bgColor}`}
                >
                  <Icon size={28} />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}