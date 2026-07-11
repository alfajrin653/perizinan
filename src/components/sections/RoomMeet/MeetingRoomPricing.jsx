import PricingCard from "../../element/PricingCard";
import { meetingRoomPackages } from "../../../data/meetingRoomPackages";
import React from "react";

export default function MeetingRoomPricing() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            HARGA RUANG RAPAT
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Pilih Paket Ruang Rapat Anda
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Paket ruang rapat yang fleksibel, dirancang khusus untuk wawancara,
            presentasi, lokakarya, diskusi bisnis, dan acara
            perusahaan.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {meetingRoomPackages.map((pkg) => (
            <PricingCard
              key={pkg.id}
              {...pkg}
            />
          ))}

        </div>

      </div>
    </section>
  );
}