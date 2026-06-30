import {
  Building2,
  Mail,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";
import React from "react";

export default function AboutVirtualOffice() {
  const features = [
    {
      icon: Building2,
      title: "Prestigious Business Address",
    },
    {
      icon: Mail,
      title: "Mail & Package Handling",
    },
    {
      icon: HeartHandshake,
      title: "Meeting Room Access",
    },
    {
      icon: BadgeCheck,
      title: "Professional Business Presence",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div className="relative">

            <img
              src="/images/virtual-office.jpg"
              alt="Virtual Office"
              className="rounded-3xl object-cover w-full h-[520px]"
            />

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">

              <p className="text-4xl font-bold text-blue-600">
                100+
              </p>

              <p className="text-gray-500 mt-1">
                Companies Trust Our Services
              </p>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="inline-flex bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              ABOUT VIRTUAL OFFICE
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-6 leading-tight">
              Professional Business Address Without the Cost of a Physical Office
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              A Virtual Office allows businesses to establish a professional
              company presence without renting a permanent office space.
              Gain a prestigious business address, mail handling,
              and meeting room access while keeping operational costs efficient.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-slate-50 rounded-2xl p-5"
                  >

                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                      <Icon className="w-6 h-6 text-blue-600" />

                    </div>

                    <span className="font-medium text-slate-800">
                      {item.title}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}