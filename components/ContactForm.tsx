"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  "Automations",
  "Administrative Support",
  "Executive Assistance",
  "Business Operations Support",
  "Website Creation & Maintenance",
  "Custom Solution",
  "Not Sure Yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 429) {
        setError("Too many requests. Please wait a minute and try again.");
        return;
      }
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Failed to send");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gold/10 border border-gold/25 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={28} className="text-gold" />
        </div>
        <p className="text-gold text-xs font-light uppercase tracking-[5px] mb-3">Message Received</p>
        <h3 className="font-display text-brand-text font-medium text-2xl mb-3 uppercase tracking-widest">
          Thank You for Reaching Out
        </h3>
        <p className="text-brand-text/55 text-sm leading-relaxed max-w-sm mx-auto font-light">
          We&apos;ve received your enquiry and a member of our team will be in
          touch within one business day to schedule your free consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-medium text-brand-text/45 uppercase tracking-[4px] mb-2">
            First Name <span className="text-gold">*</span>
          </label>
          <input
            name="firstName"
            type="text"
            required
            placeholder="Jane"
            className="w-full px-4 py-3.5 border border-brand-text/15 bg-white text-brand-text placeholder-brand-text/25 text-sm focus:outline-none focus:border-primary transition-colors duration-150"
          />
        </div>
        <div>
          <label className="block text-[10px] font-medium text-brand-text/45 uppercase tracking-[4px] mb-2">
            Last Name <span className="text-gold">*</span>
          </label>
          <input
            name="lastName"
            type="text"
            required
            placeholder="Smith"
            className="w-full px-4 py-3.5 border border-brand-text/15 bg-white text-brand-text placeholder-brand-text/25 text-sm focus:outline-none focus:border-primary transition-colors duration-150"
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-medium text-brand-text/45 uppercase tracking-[4px] mb-2">
          Email Address <span className="text-gold">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
          className="w-full px-4 py-3.5 border border-brand-text/15 bg-white text-brand-text placeholder-brand-text/25 text-sm focus:outline-none focus:border-primary transition-colors duration-150"
        />
      </div>

      <div>
        <label className="block text-[10px] font-medium text-brand-text/45 uppercase tracking-[4px] mb-2">
          Phone Number
        </label>
        <input
          name="phone"
          type="tel"
          placeholder="+1 (234) 567-890"
          className="w-full px-4 py-3.5 border border-brand-text/15 bg-white text-brand-text placeholder-brand-text/25 text-sm focus:outline-none focus:border-primary transition-colors duration-150"
        />
      </div>

      <div>
        <label className="block text-[10px] font-medium text-brand-text/45 uppercase tracking-[4px] mb-2">
          Company Name
        </label>
        <input
          name="company"
          type="text"
          placeholder="Acme Inc."
          className="w-full px-4 py-3.5 border border-brand-text/15 bg-white text-brand-text placeholder-brand-text/25 text-sm focus:outline-none focus:border-primary transition-colors duration-150"
        />
      </div>

      <div>
        <label className="block text-[10px] font-medium text-brand-text/45 uppercase tracking-[4px] mb-2">
          Service of Interest <span className="text-gold">*</span>
        </label>
        <select
          name="service"
          required
          defaultValue=""
          className="w-full px-4 py-3.5 border border-brand-text/15 bg-white text-brand-text text-sm focus:outline-none focus:border-primary transition-colors duration-150"
        >
          <option value="" disabled>
            Select a service...
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-[10px] font-medium text-brand-text/45 uppercase tracking-[4px] mb-2">
          Tell Us About Your Needs <span className="text-gold">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Describe your business support needs, current challenges, and what you're looking to achieve..."
          className="w-full px-4 py-3.5 border border-brand-text/15 bg-white text-brand-text placeholder-brand-text/25 text-sm focus:outline-none focus:border-primary transition-colors duration-150 resize-none"
        />
      </div>

      {error && (
        <p className="text-sm text-red-500 font-light">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2.5 py-4 bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium uppercase tracking-[3px] text-sm transition-colors duration-200"
      >
        {loading ? "Sending…" : "Schedule Free Consultation"}
        {!loading && <ArrowRight size={15} />}
      </button>

      <p className="text-[11px] text-brand-text/35 text-center font-light leading-relaxed">
        By submitting this form you agree to our privacy policy. Your
        information is kept confidential and never shared with third parties.
      </p>
    </form>
  );
}
