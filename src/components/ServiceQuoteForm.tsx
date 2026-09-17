"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { waLink } from "@/lib/data";
import type { QuoteService } from "@/lib/quoteServices";

const PROPERTY_TYPES = ["Residential", "Commercial", "Industrial"];

const COUNTRIES = ["Nigeria", "Ghana", "United Kingdom", "United States", "Other"];

const CITIES = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Benin City",
  "Kano",
  "Enugu",
  "Abeokuta",
  "Warri",
  "Uyo",
];

const TOWNS = [
  "Satellite Town",
  "Ajah",
  "Lekki",
  "Ikeja",
  "Surulere",
  "Festac",
  "Yaba",
  "Victoria Island",
  "Gwarinpa",
  "Wuse",
];

export default function ServiceQuoteForm({ service }: { service: QuoteService }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [propertyType, setPropertyType] = useState(PROPERTY_TYPES[0]);
  const [area, setArea] = useState("");
  const [town, setTown] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [interest, setInterest] = useState(service.interestOptions[0]);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const location = [area, town, city, country].filter(Boolean).join(", ");
    const message = `Hi NMC Technology, my name is ${name}. I'm interested in ${service.label} — specifically ${interest}, for a ${propertyType.toLowerCase()} property. My phone number is ${phone}${
      email ? `, my email is ${email}` : ""
    }. My location is ${location}.`;
    setSent(true);
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-paper/70">
          Full name
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Adaeze Okafor"
            className="rounded-xl border border-paper/15 bg-paper/[0.06] px-4 py-3 text-[15px] text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-gold"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-paper/70">
          Phone number
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="080X XXX XXXX"
            className="rounded-xl border border-paper/15 bg-paper/[0.06] px-4 py-3 text-[15px] text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-gold"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-paper/70">
          Email address
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="rounded-xl border border-paper/15 bg-paper/[0.06] px-4 py-3 text-[15px] text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-gold"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-paper/70">
          Property type
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="rounded-xl border border-paper/15 bg-paper/[0.06] px-4 py-3 text-[15px] text-paper outline-none transition-colors focus:border-gold [&>option]:bg-ink-2"
          >
            {PROPERTY_TYPES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-paper/70">
          Area
          <input
            required
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="e.g. Amuwo Odofin"
            className="rounded-xl border border-paper/15 bg-paper/[0.06] px-4 py-3 text-[15px] text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-gold"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-paper/70">
          Town
          <input
            list="quote-town-options"
            required
            value={town}
            onChange={(e) => setTown(e.target.value)}
            placeholder="e.g. Satellite Town"
            className="rounded-xl border border-paper/15 bg-paper/[0.06] px-4 py-3 text-[15px] text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-gold"
          />
          <datalist id="quote-town-options">
            {TOWNS.map((option) => (
              <option key={option} value={option} />
            ))}
          </datalist>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-paper/70">
          City
          <input
            list="quote-city-options"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Lagos"
            className="rounded-xl border border-paper/15 bg-paper/[0.06] px-4 py-3 text-[15px] text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-gold"
          />
          <datalist id="quote-city-options">
            {CITIES.map((option) => (
              <option key={option} value={option} />
            ))}
          </datalist>
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-paper/70">
          Country
          <input
            list="quote-country-options"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g. Nigeria"
            className="rounded-xl border border-paper/15 bg-paper/[0.06] px-4 py-3 text-[15px] text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-gold"
          />
          <datalist id="quote-country-options">
            {COUNTRIES.map((option) => (
              <option key={option} value={option} />
            ))}
          </datalist>
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-paper/70">
        {service.interestLabel}
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="rounded-xl border border-paper/15 bg-paper/[0.06] px-4 py-3 text-[15px] text-paper outline-none transition-colors focus:border-gold [&>option]:bg-ink-2"
        >
          {service.interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-gold-light"
      >
        {sent ? (
          <>
            Opened on WhatsApp <CheckCircle2 className="h-4 w-4" />
          </>
        ) : (
          <>
            Get my free quote <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="text-center text-[13px] text-paper/45">
        We reply on WhatsApp within minutes during business hours.
      </p>
    </form>
  );
}
