import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Clock, Settings, UserCog, CheckCircle2 } from "lucide-react";
import { ClipReveal } from "@/components/gsap/ClipReveal";
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
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-primary">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20 lg:pb-28">
          <HeroContent className="max-w-3xl">
            
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
            
          </HeroContent>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-primary to-transparent" />
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

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-text/8">
            {services.map((service, idx) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative bg-white flex flex-col h-full overflow-hidden hover:bg-primary transition-colors duration-500"
                >
                  {/* Large background number */}
                  <div className="absolute top-4 right-5 font-display text-7xl font-bold text-brand-text/4 group-hover:text-white/4 leading-none select-none transition-colors duration-500">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    {/* Icon */}
                    <div className="w-12 h-12 border border-brand-text/15 group-hover:border-white/20 flex items-center justify-center mb-7 transition-colors duration-500">
                      <service.icon size={22} className="text-secondary group-hover:text-gold transition-colors duration-500" />
                    </div>
                    {/* Subtitle */}
                    <p className="text-secondary group-hover:text-gold/80 text-xs font-light uppercase tracking-[5px] mb-2 transition-colors duration-500">
                      {service.subtitle}
                    </p>
                    {/* Title */}
                    <h3 className="font-display text-xl font-medium text-brand-text group-hover:text-white mb-4 uppercase tracking-wider leading-tight transition-colors duration-500">
                      {service.title}
                    </h3>
                    {/* Description */}
                    <p className="text-brand-text/60 group-hover:text-white/65 text-sm leading-relaxed font-light mb-6 flex-1 transition-colors duration-500">
                      {service.shortDescription}
                    </p>
                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      {service.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-brand-text/45 group-hover:text-white/50 font-light transition-colors duration-500">
                          <Check size={11} className="text-secondary group-hover:text-gold/80 mt-0.5 shrink-0 transition-colors duration-500" />
                          {f}
                        </div>
                      ))}
                    </div>
                    {/* CTA row */}
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-secondary group-hover:text-gold border-t border-brand-text/8 group-hover:border-white/10 pt-5 transition-colors duration-500">
                      Explore Service
                      <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

     {/* Custom Solutions */}
      <section className="relative bg-primary py-24 lg:py-32 overflow-hidden">
        {/* Subtle architectural grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] pointer-events-none" />
        {/* Gold glow top-left */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            {/* Left: editorial text */}
            <FadeUp>
              <ClipReveal>
                <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-4">
                  Custom Solutions
                </p>
                <h2 className="font-display text-4xl lg:text-5xl font-medium text-white leading-tight uppercase tracking-widest">
                  Need Something<br />
                  <span className="text-gold">Specific?</span>
                </h2>
              </ClipReveal>
              <RevealLine className="w-12 h-px bg-gold mb-8" delay={0.2} />
              <p className="text-white/65 leading-relaxed mb-4 font-light">
                Every business is different. If your requirements don&apos;t fit neatly
                into our standard service categories, we design a completely custom
                support solution built around your business, your tools, and your goals.
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-10 font-light">
                From specialised project-based work to fully bespoke ongoing support —
                we design it around you, not the other way around.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-secondary hover:bg-secondary/90 text-white uppercase tracking-wider transition-colors duration-150"
                >
                  Discuss Custom Solutions
                  <ArrowRight size={15} />
                </Link>
                
              </div>
            </FadeUp>

            {/* Right: image + feature list */}
            <ScaleIn className="relative">
              {/* Image */}
              <div className="relative h-80 lg:h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                  alt="Custom business solutions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/50" />
                {/* Inset gold frame */}
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold/20 pointer-events-none" />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-primary/90 backdrop-blur-sm border border-white/10 px-5 py-3">
                  <p className="text-gold text-[10px] uppercase tracking-[4px] font-light mb-0.5">Built for you</p>
                  <p className="text-white font-semibold text-sm">100% Bespoke Solutions</p>
                </div>
              </div>

              {/* Feature tiles */}
              <StaggerChildren>
                <div className="grid grid-cols-2 gap-px bg-white/6 mt-px">
                  {[
                    "Industry-specific services",
                    "Project-based assistance",
                    "Hybrid service packages",
                    "Seasonal support",
                    "Department solutions",
                    "White-label options",
                  ].map((item, idx) => (
                    <StaggerItem key={idx}>
                      <div className="group flex items-center gap-3 bg-primary px-5 py-4 hover:bg-white/5 transition-colors duration-200 cursor-default">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 group-hover:scale-125 transition-transform duration-200" />
                        <span className="text-white/55 group-hover:text-white/80 text-sm font-light transition-colors duration-200">
                          {item}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerChildren>
            </ScaleIn>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-brand-bg py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ClipReveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
              How It Works
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight mb-4 uppercase tracking-widest">
              From Discovery to Delivery
            </h2>
            <p className="text-brand-text/60 font-light">
              A clear, proven path — from your first conversation to lasting business impact.
            </p>
          </ClipReveal>

          <StaggerChildren>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 lg:gap-0">
              {[ 
                {
                  number: "01",
                  title: "Free Consultation",
                  desc: "We begin with a free call to understand your business, goals, and biggest challenges.",
                  icon: Clock,
                },
                {
                  number: "02",
                  title: "Tailored Proposal",
                  desc: "We design a custom service plan built precisely around your business, tools, and requirements.",
                  icon: Settings,
                },
                {
                  number: "03",
                  title: "Seamless Onboarding",
                  desc: "Our team integrates into your workflows quickly and professionally, minimising disruption.",
                  icon: UserCog,
                },
                {
                  number: "04",
                  title: "Ongoing Excellence",
                  desc: "Dedicated professionals deliver consistent, high-quality support to your business every day.",
                  icon: CheckCircle2,
                },
              ].map((step) => (
                <StaggerItem key={step.number}>
                  <div className="relative flex flex-col items-center text-center px-4 lg:px-6">
                    <div className="relative w-20 h-20 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 z-10">
                      <step.icon size={28} className="text-gold" />
                    </div>
                    <p className="text-secondary/70 text-[10px] font-medium uppercase tracking-[4px] mb-1.5">
                      Step {step.number}
                    </p>
                    <h3 className="font-display text-base font-semibold text-brand-text mb-2 uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-brand-text/60 text-sm leading-relaxed font-light max-w-[180px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>

          <FadeUp className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium uppercase tracking-wider transition-colors duration-150"
            >
              Start with a Free Consultation
              <ArrowRight size={15} />
            </Link>
          </FadeUp>
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
