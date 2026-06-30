import {
  Landmark,
  Wallet,
  Globe,
  MapPin,
  Mail,
  Users,
} from "lucide-react";
import React from "react";

export default function VirtualOfficeEducation() {

  const cards = [
    {
      icon: Landmark,
      title: "Professional Business Image",
      desc: "Strengthen customer confidence with a recognized and credible business address.",
    },
    {
      icon: Wallet,
      title: "Lower Operational Costs",
      desc: "Reduce expenses by eliminating the need for long-term office rental and maintenance.",
    },
    {
      icon: Globe,
      title: "Work From Anywhere",
      desc: "Operate your business remotely while maintaining a professional company identity.",
    },
    {
      icon: MapPin,
      title: "Expand Your Presence",
      desc: "Establish your business in strategic locations without relocating your entire team.",
    },
    {
      icon: Mail,
      title: "Mail Management",
      desc: "Receive and manage company correspondence securely through our office services.",
    },
    {
      icon: Users,
      title: "Meeting Facilities",
      desc: "Access fully equipped meeting rooms whenever you need to meet clients or partners.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-6 text-slate-900">
            Why Choose a Virtual Office?
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            Enjoy the flexibility of remote work while maintaining a
            professional business presence that supports growth,
            credibility, and operational efficiency.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {cards.map((card, index) => {

            const Icon = card.icon;

            return (

              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

                  <Icon className="text-blue-600 w-7 h-7" />

                </div>

                <h3 className="text-xl font-semibold mt-6 text-slate-900">
                  {card.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {card.desc}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}