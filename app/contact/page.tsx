import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { ClipReveal } from "@/components/gsap/ClipReveal";
import { FadeUp, RevealLine, HeroContent, HeroItem } from "@/components/Motion";

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
      <section className="relative min-h-[72vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1800&q=80"
          alt="Contact Execura Support Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/88 to-primary/40" />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[64px_64px]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-32 pb-14 lg:pb-20">
          {/* <ClipReveal className="max-w-2xl">
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
          </ClipReveal> */}
           <HeroContent className="max-w-3xl">
                                
                                <HeroItem>
                                  <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-4">
                                     Contact Us
                                  </p>
                                  <h1 className="font-display text-4xl lg:text-6xl font-semibold text-white leading-tight tracking-widest mb-6 uppercase">
                                     Let&apos;s Start a Conversation
                                  </h1>
                                </HeroItem>
                                <HeroItem>
                                  <p className="text-white/70 text-lg leading-relaxed mb-10 font-light">
                                   Schedule your free consultation and discover how Execura Support
              Solutions can transform your business operations.
                                  </p>
                                </HeroItem>
                                
                              </HeroContent>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-primary to-transparent" />
      </section>

      {/* Main — split panel */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5">

            {/* Left: light info panel */}
            <div className="lg:col-span-2 bg-white relative overflow-hidden py-16 lg:py-20 pr-0 lg:pr-12">

              <div className="relative z-10">
                {/* Header */}
                <FadeUp>
                  <ClipReveal>
                    <p className="text-secondary text-[10px] font-medium uppercase tracking-[7px] mb-4">
                      Get in Touch
                    </p>
                    <h2 className="font-display text-3xl lg:text-4xl font-semibold text-brand-text leading-tight uppercase tracking-widest mb-5">
                      Start the<br />
                      <span className="text-primary">Conversation</span>
                    </h2>
                  </ClipReveal>
                  <RevealLine className="w-12 h-px bg-brand-text/25 mb-6" delay={0.15} />
                  <p className="text-brand-text/65 text-sm leading-relaxed font-light">
                    Whether you&apos;re ready to delegate or simply exploring
                    your options — we&apos;re here with zero pressure and no
                    commitment required.
                  </p>
                </FadeUp>

                {/* Contact details */}
                <FadeUp delay={0.08}>
                  <div className="mt-10 mb-10 border-t border-brand-text/12">
                    {contactDetails.map((item, idx) => (
                      <div
                        key={idx}
                        className="group flex items-center gap-4 border-b border-brand-text/12 py-4 hover:bg-brand-text/4 px-3 -mx-3 transition-colors duration-200 cursor-default"
                      >
                        <div className="w-8 h-8 border border-brand-text/18 group-hover:border-secondary/50 flex items-center justify-center shrink-0 transition-colors duration-200">
                          <item.icon size={13} className="text-brand-text/45 group-hover:text-secondary transition-colors duration-200" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-brand-text/45 text-[9px] uppercase tracking-[4px] font-medium mb-0.5">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-brand-text text-sm font-medium tracking-wide hover:text-secondary transition-colors duration-150 truncate block"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-brand-text text-sm font-medium tracking-wide">
                              {item.value}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeUp>

                {/* What to expect */}
                <FadeUp delay={0.14}>
                  <p className="text-brand-text/50 text-[9px] font-medium uppercase tracking-[6px] mb-4">
                    What to Expect
                  </p>
                  <div className="space-y-0 pl-4 border-l-2 border-brand-text/10">
                    {[
                      { step: "01", text: "Free 30–60 min consultation" },
                      { step: "02", text: "No obligation or commitment" },
                      { step: "03", text: "Tailored proposal in 2–3 days" },
                      { step: "04", text: "Onboarding within 3–5 days" },
                      { step: "05", text: "30-day satisfaction guarantee" },
                    ].map((item, i) => (
                      <div key={i} className="group flex items-baseline gap-3 py-2.5 border-b border-brand-text/8 last:border-0">
                        <span className="text-secondary/60 text-[9px] font-medium tabular-nums shrink-0 group-hover:text-secondary transition-colors duration-200">
                          {item.step}
                        </span>
                        <span className="text-brand-text/75 text-xs font-light leading-relaxed group-hover:text-brand-text transition-colors duration-200">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </FadeUp>
              </div>
            </div>

            {/* Right: form panel */}
            <div className="lg:col-span-3 bg-white py-16 lg:py-20 lg:pl-14 px-6 lg:px-0 border-l border-brand-text/8">
              <FadeUp>
                <p className="text-secondary text-xs font-light uppercase tracking-[6px] mb-2">
                  Free Consultation
                </p>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-brand-text mb-2 uppercase tracking-widest">
                  Schedule Your Call
                </h2>
                <p className="text-brand-text/45 text-sm font-light mb-10">
                  Fill out the form below and we&apos;ll be in touch within one business day.
                </p>
              </FadeUp>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
