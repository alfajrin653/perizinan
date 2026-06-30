import PricingCard from "../../element/PricingCard";
import { virtualOfficePackages } from "../../../data/virtualOffice";
import React from "react";

export default function PricingSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Choose Your Virtual Office
          </h2>

          <p className="mt-5 text-slate-600">
            Flexible plans for every business.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {virtualOfficePackages.map((item) => (
            <PricingCard
              key={item.id}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}