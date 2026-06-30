import {
  BadgeCheck,
  Building2,
  DollarSign,
  Globe,
  Users,
  ShieldCheck,
} from "lucide-react";
import React from "react";

export default function VirtualOfficeBenefits() {
  const benefits = [
    {
      icon: Building2,
      title: "Professional Business Address",
      description:
        "Enhance your company's credibility with a prestigious business address that strengthens customer and partner confidence.",
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description:
        "Reduce operational expenses by eliminating the need for office rent, utilities, and maintenance costs.",
    },
    {
      icon: Globe,
      title: "Flexible Work Environment",
      description:
        "Operate your business from anywhere while maintaining a professional corporate identity.",
    },
    {
      icon: Users,
      title: "Meeting Room Access",
      description:
        "Reserve fully equipped meeting rooms whenever you need to meet clients, partners, or your team.",
    },
    {
      icon: ShieldCheck,
      title: "Business Compliance",
      description:
        "Support your business registration with a recognized office address that complies with applicable regulations.",
    },
    {
      icon: BadgeCheck,
      title: "Professional Business Support",
      description:
        "Benefit from mail handling, receptionist services, and administrative support to improve daily business operations.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            BENEFITS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Benefits of a Virtual Office
          </h2>

          <p className="mt-5 text-lg text-slate-600 leading-8">
            A Virtual Office helps businesses establish a professional
            presence while reducing operational costs and providing
            flexibility to grow efficiently.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}