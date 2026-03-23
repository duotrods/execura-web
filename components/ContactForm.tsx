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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={28} className="text-secondary" />
        </div>
        <h3 className="font-display text-brand-text font-medium text-xl mb-3 uppercase tracking-widest">
          Thank You for Reaching Out!
        </h3>
        <p className="text-brand-text/60 text-sm leading-relaxed max-w-sm mx-auto font-light">
          We&apos;ve received your message and will be in touch within one
          business day to schedule your free consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-brand-text/60 uppercase tracking-wider mb-1.5">
            First Name <span className="text-secondary">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Jane"
            className="w-full px-4 py-3 border border-brand-text/20 bg-white text-brand-text placeholder-brand-text/30 text-sm focus:outline-none focus:border-secondary transition-colors duration-150"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-brand-text/60 uppercase tracking-wider mb-1.5">
            Last Name <span className="text-secondary">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Smith"
            className="w-full px-4 py-3 border border-brand-text/20 bg-white text-brand-text placeholder-brand-text/30 text-sm focus:outline-none focus:border-secondary transition-colors duration-150"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-brand-text/60 uppercase tracking-wider mb-1.5">
          Email Address <span className="text-secondary">*</span>
        </label>
        <input
          type="email"
          required
          placeholder="jane@company.com"
          className="w-full px-4 py-3 border border-brand-text/20 bg-white text-brand-text placeholder-brand-text/30 text-sm focus:outline-none focus:border-secondary transition-colors duration-150"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-brand-text/60 uppercase tracking-wider mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="+1 (234) 567-890"
          className="w-full px-4 py-3 border border-brand-text/20 bg-white text-brand-text placeholder-brand-text/30 text-sm focus:outline-none focus:border-secondary transition-colors duration-150"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-brand-text/60 uppercase tracking-wider mb-1.5">
          Company Name
        </label>
        <input
          type="text"
          placeholder="Acme Inc."
          className="w-full px-4 py-3 border border-brand-text/20 bg-white text-brand-text placeholder-brand-text/30 text-sm focus:outline-none focus:border-secondary transition-colors duration-150"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-brand-text/60 uppercase tracking-wider mb-1.5">
          Service of Interest <span className="text-secondary">*</span>
        </label>
        <select
          required
          defaultValue=""
          className="w-full px-4 py-3 border border-brand-text/20 bg-white text-brand-text text-sm focus:outline-none focus:border-secondary transition-colors duration-150"
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
        <label className="block text-xs font-semibold text-brand-text/60 uppercase tracking-wider mb-1.5">
          Tell Us About Your Needs <span className="text-secondary">*</span>
        </label>
        <textarea
          required
          rows={4}
          placeholder="Describe your business support needs, current challenges, and what you're looking to achieve..."
          className="w-full px-4 py-3 border border-brand-text/20 bg-white text-brand-text placeholder-brand-text/30 text-sm focus:outline-none focus:border-secondary transition-colors duration-150 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-3.5 bg-secondary hover:bg-secondary/90 text-white font-semibold uppercase tracking-wider transition-colors duration-150"
      >
        Send Message
        <ArrowRight size={16} />
      </button>

      <p className="text-xs text-brand-text/40 text-center font-light">
        By submitting this form, you agree to our privacy policy. We respect
        your privacy and will never share your information.
      </p>
    </form>
  );
}
