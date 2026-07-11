import CompanyPackageCard from "../../element/CardPaket";
import { companyPackages } from "../../../data/CompanyPackages";
import React from "react";

export default function CompanyPackageSection() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700 text-sm font-semibold">
            BUSINESS STARTER
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Virtual Office + Company Incorporation
          </h2>

          <p className="mt-6 text-slate-600">
            Launch your business faster with an all-in-one package that
            combines a professional business address and company incorporation
            services in a single solution.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {companyPackages.map((item) => (
            <CompanyPackageCard
              key={item.id}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}



