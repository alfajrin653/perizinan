import { ChevronDown } from "lucide-react";
import { useState } from "react";
import React from "react";

export default function VirtualOfficeFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600">
            Find answers to the most common questions about our Virtual Office
            services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold">{faq.question}</span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "Can a Virtual Office be used for company registration?",
    answer:
      "Yes. A Virtual Office can be used as a registered business address, subject to the applicable regulations and required legal documents.",
  },
  {
    question: "Is a Virtual Office suitable for startups and small businesses?",
    answer:
      "Absolutely. It is an ideal solution for startups, freelancers, remote teams, and growing businesses that need a professional business address without renting a physical office.",
  },
  {
    question: "What services are included in a Virtual Office?",
    answer:
      "Services generally include a prestigious business address, mail and package handling, receptionist support, and access to meeting rooms depending on the selected package.",
  },
  {
    question: "Can I receive business mail at my Virtual Office address?",
    answer:
      "Yes. Business correspondence and packages can be received and managed by the Virtual Office provider according to the selected service package.",
  },
  {
    question: "Is there a minimum rental period?",
    answer:
      "Most Virtual Office packages are offered with an annual contract, although payment options may vary depending on the provider and available promotions.",
  },
  {
    question: "Can I pay monthly?",
    answer:
      "Some providers offer installment or monthly payment options even when the agreement is based on an annual service period.",
  },
  {
    question: "Can foreign-owned companies (PMA) use a Virtual Office?",
    answer:
      "Yes. Virtual Office services are generally available for foreign investment companies (PMA), subject to the applicable legal requirements.",
  },
  {
    question: "Can I use meeting rooms whenever I need them?",
    answer:
      "Meeting rooms are usually available based on your package and reservation schedule during business operating hours.",
  },
  {
    question: "Can I rent a Virtual Office without an established company?",
    answer:
      "Yes. Individuals may rent a Virtual Office, although certain legal documents are required if you need official company domicile documentation.",
  },
  {
    question: "Can the provider assist with business legality?",
    answer:
      "Many Virtual Office providers also offer company incorporation and business licensing services to simplify the legal establishment process.",
  },
];