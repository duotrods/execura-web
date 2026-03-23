import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, Clock, MapPin, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { ClipReveal } from "@/components/gsap/ClipReveal";

export const metadata: Metadata = {
  title: "Contact Execura Support Solutions - Schedule Your Free Consultation",
  description:
    "Get in touch with Execura Support Solutions. Schedule a free consultation to discuss how our business support services can help streamline your operations.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@execura.com",
    href: "mailto:hello@execura.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri, 8am–6pm",
    href: null,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Professional Remote Services",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ClipReveal className="max-w-2xl">
            <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-4">
              Contact Us
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-widest mb-6 uppercase">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Schedule your free consultation and discover how Execura Support
              Solutions can transform your business operations.
            </p>
          </ClipReveal>
        </div>
      </section>

      {/* Main */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="relative h-48 mb-8">
                <Image
                  src="/assets/contact.svg"
                  alt="Contact Execura"
                  fill
                  className="object-cover"
                />
              </div>
              <ClipReveal>
                <h2 className="font-display text-xl font-medium text-brand-text mb-8 uppercase tracking-widest">
                  Get In Touch
                </h2>
              </ClipReveal>
              <div className="space-y-5 mb-10">
                {contactDetails.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-brand-text/50 font-medium uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-brand-text font-medium hover:text-secondary transition-colors duration-150"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-brand-text font-medium">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-bg border border-brand-text/10 p-6">
                <h3 className="text-brand-text font-semibold mb-4 uppercase tracking-wide text-sm">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    "Free 30–60 minute consultation",
                    "No obligation or commitment required",
                    "Tailored proposal within 2–3 business days",
                    "Onboarding within 3–5 days of approval",
                    "30-day satisfaction guarantee",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-brand-text/70 font-light">
                      <CheckCircle2 size={15} className="text-secondary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-brand-bg border border-brand-text/10 p-8 lg:p-10">
                <ClipReveal>
                  <h2 className="font-display text-xl font-medium text-brand-text mb-2 uppercase tracking-widest">
                    Schedule Your Free Consultation
                  </h2>
                </ClipReveal>
                <p className="text-brand-text/60 text-sm mb-8 font-light">
                  Fill out the form and we&apos;ll be in touch within one
                  business day.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-primary-light py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { value: "Free", label: "Initial Consultation" },
              { value: "24hrs", label: "Response Time" },
              { value: "30-Day", label: "Satisfaction Guarantee" },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="font-display text-2xl font-semibold text-gold mb-1 tracking-wider">
                  {item.value}
                </div>
                <div className="text-white/60 text-sm uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
