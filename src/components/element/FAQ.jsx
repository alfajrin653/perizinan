import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ 
  faqs, 
  title = "Frequently Asked Questions", 
  subtitle = "Pertanyaan yang sering diajukan seputar layanan kami." 
}) {
  const [openIndex, setOpenIndex] = useState(0); // Default buka item pertama

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-flex bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-slate-600 text-lg">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-blue-500 shadow-md" : "border-slate-200"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-6 transition-colors text-left ${
                    isOpen ? "bg-blue-50" : "bg-white hover:bg-slate-50"
                  }`}
                >
                  <span className={`font-bold text-lg pr-4 ${isOpen ? "text-blue-700" : "text-slate-900"}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>
                
                {/* Konten Jawaban */}
                <div 
                  className={`transition-all duration-300 ease-in-out origin-top ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 bg-blue-50">
                    <p className="text-slate-600 leading-relaxed border-t border-blue-200/60 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}