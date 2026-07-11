import React from "react";
import { Circle } from "lucide-react";


export default function Proses({ steps = [],title , subtitle  }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            HOW IT WORKS
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title }
          </h2>

          <p className="text-slate-600 text-lg">
            {subtitle }
          </p>
        </div>

        <div className="relative">
          {/* Garis Tengah */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon || Circle;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id ?? index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    !isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`flex-1 w-full ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        <span className="text-blue-600 mr-2">
                          #{step.id ?? index + 1}
                        </span>
                        {step.title}
                      </h3>

                      <p className="text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="hidden md:flex shrink-0 relative z-10 items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white border-4 border-white shadow-xl">
                    <Icon size={24} />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}