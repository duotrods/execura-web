import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { ClipReveal } from "@/components/gsap/ClipReveal";
import { CardTilt } from "@/components/gsap/CardTilt";
import {
  HeroContent,
  HeroItem,
  FadeUp,
  ScaleIn,
  StaggerChildren,
  StaggerItem,
  RevealLine,
} from "@/components/Motion";
import { services } from "./data";

export const metadata: Metadata = {
  title: "Business Support Services – Automations, Admin, Executive & Web | Execura",
  description:
    "Comprehensive business support services including workflow automations, administrative support, executive assistance, operations management, and website creation. Tailored to your business needs.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero — full-bleed image */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1800&q=80"
          alt="Execura business support services"
          fill
          className="object-cover"
          priority
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/88 to-primary/55" />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20 lg:pb-28">
          <HeroContent className="max-w-3xl">
            <HeroItem>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 text-gold text-xs font-medium mb-8 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Professional Business Support Solutions
              </div>
            </HeroItem>
            <HeroItem>
              <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-4">
                Our Services
              </p>
              <h1 className="font-display text-4xl lg:text-6xl font-semibold text-white leading-tight tracking-widest mb-6 uppercase">
                Tailored Support For Every Layer of Your Business
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="text-white/70 text-lg leading-relaxed mb-10 font-light">
                From intelligent automation and daily administration to executive-level
                support and professional web solutions — a complete suite of services
                designed to remove operational burden and unlock growth.
              </p>
            </HeroItem>
            <HeroItem>
              <div className="flex flex-wrap gap-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="px-4 py-2 border border-white/20 hover:border-gold text-white/70 hover:text-gold text-sm transition-colors duration-150 uppercase tracking-wide"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </HeroItem>
          </HeroContent>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-primary to-transparent" />
      </section>

      {/* Intro strip */}
      <section className="bg-primary border-b border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-white/60 text-center max-w-3xl mx-auto leading-relaxed font-light">
              At Execura Support Solutions, every service is fully customizable to your
              specific requirements — ensuring you receive exactly the support you need,
              at the level you need it.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <ClipReveal className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
                What We Offer
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight uppercase tracking-widest">
                Our Core Services
              </h2>
            </ClipReveal>
          </FadeUp>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <CardTilt className="group relative bg-white border border-brand-text/10 overflow-hidden hover:border-brand-text/20 hover:shadow-md transition-all duration-300 flex flex-col h-full">
                  {/* Card image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-primary/40 to-primary/80" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <service.icon size={18} className="text-gold" />
                      </div>
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <p className="text-secondary text-xs font-light uppercase tracking-[5px] mb-2">
                      {service.subtitle}
                    </p>
                    <h3 className="font-display text-2xl font-medium text-brand-text mb-3 uppercase tracking-wider leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-brand-text/60 text-sm leading-relaxed font-light mb-5 flex-1">
                      {service.shortDescription}
                    </p>
                    <ul className="space-y-1.5 mb-6">
                      {service.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-brand-text/50 font-light">
                          <Check size={13} className="text-secondary mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                      <li className="text-xs text-brand-text/35 font-light pl-5">
                        + {service.features.length - 3} more included
                      </li>
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 uppercase tracking-wider transition-colors duration-150"
                    >
                      Explore Service
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-150" />
                    </Link>
                  </div>
                </CardTilt>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Agency image band */}
      <section className="relative h-80 lg:h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80"
          alt="Execura team at work"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="absolute inset-0 flex items-center justify-center">
          <FadeUp className="text-center px-6">
            <RevealLine className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="font-display text-3xl lg:text-5xl font-medium text-white uppercase tracking-widest leading-tight max-w-3xl mx-auto">
              We don&apos;t just support your business.<br />
              <span className="text-gold">We help it grow.</span>
            </p>
            <RevealLine className="w-12 h-px bg-gold mx-auto mt-8" delay={0.3} />
          </FadeUp>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerChildren className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                number: "01",
                title: "Free Consultation",
                description:
                  "We begin with a no-obligation discovery call to understand your business, challenges, and support needs.",
              },
              {
                number: "02",
                title: "Tailored Proposal",
                description:
                  "We design a customized service plan that addresses your specific requirements and integrates with your workflows.",
              },
              {
                number: "03",
                title: "Seamless Execution",
                description:
                  "Your dedicated support team delivers with consistency, professionalism, and a commitment to your success.",
              },
            ].map((step) => (
              <StaggerItem key={step.number}>
                <div className="flex gap-5">
                  <div className="font-display text-3xl font-semibold text-white/20 shrink-0 leading-none pt-1">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp>
              <ClipReveal>
                <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
                  Custom Solutions
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight mb-5 uppercase tracking-widest">
                  Need Something Specific?
                </h2>
              </ClipReveal>
              <RevealLine className="w-12 h-px bg-secondary mb-6" delay={0.2} />
              <p className="text-brand-text/70 leading-relaxed mb-8 font-light">
                Every business is different. If your requirements don&apos;t fit neatly
                into our standard service categories, we&apos;re happy to design a custom
                support solution built specifically around your business, your tools, and
                your goals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-medium uppercase tracking-wider transition-colors duration-150"
              >
                Discuss Custom Solutions
                <ArrowRight size={15} />
              </Link>
            </FadeUp>

            <ScaleIn>
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                  alt="Custom business solutions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/30" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Industry-specific support services",
                  "Specialised project-based assistance",
                  "Hybrid service packages",
                  "Seasonal or campaign-based support",
                  "Department-specific solutions",
                  "White-label options available",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 border border-brand-text/10 px-4 py-3 hover:border-brand-text/20 transition-colors duration-150 bg-white"
                  >
                    <Check size={14} className="text-secondary shrink-0" />
                    <span className="text-brand-text/70 text-sm font-light">{item}</span>
                  </div>
                ))}
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-white mb-5 uppercase tracking-widest">
              Ready to Optimize Your Business Operations?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10 font-light">
              Let&apos;s create a customized support solution that fits your business
              perfectly. Book a free consultation today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-semibold uppercase tracking-wider hover:bg-brand-bg transition-colors duration-150"
            >
              Get Your Free Consultation
              <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
