/**
 * src/components/sections/home/SearchBar.jsx
 */

import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  BriefcaseBusiness,
  Users,
  Mic2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Virtual Office",
    description: "Alamat bisnis profesional & legalitas perusahaan",
    icon: Building2,
    link: "/virtual-office",
  },
  {
    title: "Coworking Space",
    description: "Ruang kerja fleksibel dengan fasilitas lengkap",
    icon: BriefcaseBusiness,
    link: "/coworking-space",
  },
  {
    title: "Ruang Meeting",
    description: "Meeting room modern untuk kebutuhan bisnis",
    icon: Users,
    link: "/Room-meet",
  },
  {
    title: "Studio Podcast",
    description: "Studio profesional untuk podcast & konten",
    icon: Mic2,
    link: "/Podcast-studio",
  },
];

export default function SearchBar() {
  return (
    <section className="mt-12 reveal">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 lg:p-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex px-4 py-1 rounded-full bg-blue-50 text-primary text-sm font-semibold">
            WORKSPACE SOLUTIONS
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Temukan Kantor & Ruang Kerja Ideal Anda
          </h2>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Pilih layanan yang paling sesuai untuk mendukung operasional,
            produktivitas, dan perkembangan bisnis Anda.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-slate-50 hover:bg-primary hover:text-white rounded-2xl p-6 transition-all duration-300 border border-slate-200 hover:border-primary hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-5 transition">
                  <Icon
                    size={28}
                    className="text-primary group-hover:text-white"
                  />
                </div>

                <h3 className="font-bold text-xl mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 group-hover:text-blue-100 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 font-semibold">
                  Jelajahi
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}