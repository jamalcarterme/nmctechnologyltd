"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { waLink } from "@/lib/data";
import type { QuoteService } from "@/lib/quoteServices";

export default function ServiceQuoteForm({ service }: { service: QuoteService }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(service.interestOptions[0]);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const message = `Hi NMC Technology, my name is ${name}. I'm interested in ${service.label} — specifically ${interest}. My phone number is ${phone}.`;
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
