import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Settings,
  UserCog,
  Globe,
  Briefcase,
  Shield,
  Zap,
  TrendingUp,
  Clock,
  Star,
  Target,
} from "lucide-react";
import {
  HeroContent,
  HeroItem,
  FadeUp,
  StaggerChildren,
  StaggerItem,
  RevealLine,
} from "@/components/Motion";
import AnimatedStat from "@/components/gsap/AnimatedStat";
import ParallaxHero from "@/components/gsap/ParallaxHero";
import { ClipReveal } from "@/components/gsap/ClipReveal";
import { MagneticButton } from "@/components/gsap/MagneticButton";

const services = [
  {
    slug: "automation",
    icon: Zap,
    title: "Automations",
    subtitle: "Streamline with Smart Automation",
    description:
      "Intelligent automation solutions that eliminate repetitive tasks and reduce errors. From workflow automation to AI-powered tools and integrations, we transform how your business operates.",
  },
  {
    slug: "admin-support",
    icon: Settings,
    title: "Administrative Support",
    subtitle: "Your Business, Running Smoothly",
    description:
      "From document preparation and data entry to travel arrangements and meeting coordination, our administrative specialists ensure your business runs without friction.",
  },
  {
    slug: "executive-assistance",
    icon: UserCog,
    title: "Executive Assistance",
    subtitle: "High-Level Support for Leaders",
    description:
      "High-level support for executives and business leaders including strategic scheduling, project coordination, research, and stakeholder communication.",
  },
  {
    slug: "operations",
    icon: Briefcase,
    title: "Business Operations",
    subtitle: "Operational Excellence, Delivered",
    description:
      "Operational excellence through process optimisation, vendor management, bookkeeping support, and workflow improvements that keep your business moving.",
  },
  {
    slug: "website",
    icon: Globe,
    title: "Website Services",
    subtitle: "Your Digital Presence, Perfected",
    description:
      "Professional website design and development services that establish your online presence — from custom builds to ongoing maintenance and SEO optimisation.",
  },
  {
    slug: "lead-generation",
    icon: Target,
    title: "Lead Generation",
    subtitle: "Fill Your Pipeline with Quality Prospects",
    description:
      "Targeted lead generation that identifies, qualifies, and delivers ready-to-convert prospects directly to your sales team — so you spend less time prospecting and more time closing.",
  },
];

const advantages = [
  {
    icon: Star,
    title: "Professional Excellence",
    description:
      "Our team consists of highly skilled professionals with proven track records in business support and administration across diverse industries.",
  },
  {
    icon: Zap,
    title: "Flexibility & Scalability",
    description:
      "Services that grow with your business. From part-time assistance to full-time dedicated support, we adapt to your changing needs.",
  },
  {
    icon: TrendingUp,
    title: "Cost-Effective Solutions",
    description:
      "Access top-tier business support without the overhead costs of full-time employees. Pay only for the services you need, when you need them.",
  },
  {
    icon: Shield,
    title: "Reliable & Confidential",
    description:
      "Your business information is secure with us. We maintain strict confidentiality standards and deliver consistent, dependable support.",
  },
  {
    icon: Clock,
    title: "Seamless Integration",
    description:
      "We work with your preferred tools and platforms, integrating smoothly into your existing workflows without disruption.",
  },
];

const reviews = [
  {
    text: "Execura completely transformed how I manage my inbox and calendar. I went from drowning in emails to having full control of my day. Their team is professional, responsive, and genuinely invested in your success.",
    name: "Sarah M.",
    role: "Founder & CEO",
    initials: "SM",
  },
  {
    text: "The automation solutions Execura built for us saved our team over 15 hours a week. The implementation was seamless and the ongoing support has been outstanding. I can't imagine running our business without them.",
    name: "James T.",
    role: "Operations Director",
    initials: "JT",
  },
  {
    text: "From the first consultation to ongoing support, every interaction with Execura has been exceptional. Their executive assistance service is truly high-caliber — like having a top-tier EA without the full-time cost.",
    name: "Michelle L.",
    role: "Business Owner",
    initials: "ML",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — full-bleed with overlay */}
      <section data-hero-section className="relative min-h-screen flex items-center overflow-hidden">
        <ParallaxHero />
        {/* Background image */}
        <Image
          src="/assets/hero.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/75 to-primary/40" />
        {/* Subtle grid pattern — targeted by ParallaxHero */}
        <div
          data-hero-grid
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[64px_64px] will-change-transform"
        />

        {/* Content — targeted by ParallaxHero */}
        <div data-hero-content className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32 will-change-transform">
          <HeroContent className="mx-auto text-center">
            <HeroItem>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 text-gold text-xs font-medium mb-8 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Professional Business Support Solutions
              </div>
            </HeroItem>
            <HeroItem>
              <h1 className="font-display text-3xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight tracking-widest mb-6 uppercase">
                Elevate Your Business with Expert Support Solutions
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
                Professional administrative and operational support that empowers
                businesses to focus on growth. From automations to comprehensive
                business operations, we&apos;re your trusted partner in success.
              </p>
            </HeroItem>
            <HeroItem>
              <div className="flex flex-wrap gap-4 justify-center">
                <MagneticButton className="inline-flex">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-medium uppercase tracking-wider transition-colors duration-150"
                  >
                    Get Started Today
                    <ArrowRight size={16} />
                  </Link>
                </MagneticButton>
                <MagneticButton className="inline-flex">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 hover:border-white text-white font-medium uppercase tracking-wider transition-colors duration-150"
                  >
                    View Our Services
                  </Link>
                </MagneticButton>
              </div>
            </HeroItem>
          </HeroContent>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-primary-light to-transparent" />
      </section>

      {/* Stats bar */}
      <section className="bg-primary-light border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Active Clients" },
            ].map((stat) => (
              <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-brand-bg py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp>
              <ClipReveal>
                <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
                  About Execura
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight mb-6 uppercase tracking-widest">
                  Your Strategic Partner in Business Excellence
                </h2>
              </ClipReveal>
              <RevealLine className="w-12 h-px bg-secondary mb-6" delay={0.2} />
              <p className="text-brand-text/70 leading-relaxed mb-5 font-light">
                At Execura Support Solutions, we understand that running a
                business requires focus on what matters most—your core
                operations and growth strategies. That&apos;s where we come in.
                Our team of experienced professionals provides comprehensive
                support services designed to streamline your operations, enhance
                productivity, and free up your valuable time.
              </p>
              <p className="text-brand-text/70 leading-relaxed mb-8 font-light">
                With years of expertise across various industries, we deliver
                tailored solutions that align with your unique business needs.
                Whether you&apos;re a startup founder, established entrepreneur,
                or growing enterprise, our flexible support services scale with
                your ambitions.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors duration-150 uppercase tracking-wider text-sm"
              >
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative w-full aspect-4/5 overflow-hidden">
                <Image
                  src="/assets/home.webp"
                  alt="Execura team collaborating on business solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-primary py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-14 border-b border-white/10 mb-4">
            <ClipReveal className="max-w-2xl">
              <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-5">
                What We Offer
              </p>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-[1.05] uppercase tracking-widest">
                Precision Support,<br className="hidden lg:block" /> Built Around You
              </h2>
            </ClipReveal>
            <FadeUp delay={0.2} className="max-w-sm">
              <p className="text-white/40 font-light leading-relaxed mb-6 text-sm">
                Six distinct service areas. One seamless partnership. Everything your business needs to operate at its highest level.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-gold hover:gap-4 font-medium text-sm transition-all duration-200 uppercase tracking-[3px]"
              >
                Explore All Services
                <ArrowRight size={14} />
              </Link>
            </FadeUp>
          </div>

          {/* Service rows */}
          <StaggerChildren>
            {services.map((service, idx) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex items-center gap-6 lg:gap-10 py-7 lg:py-9 border-b border-white/[0.07] hover:border-gold/30 hover:bg-gold/5 -mx-6 lg:-mx-8 px-6 lg:px-8 transition-all duration-300"
                >
                  {/* Ghost number */}
                  <span className="font-display text-5xl lg:text-7xl font-semibold leading-none select-none w-14 lg:w-20 shrink-0 text-white/[0.05] group-hover:text-gold/20 transition-colors duration-500">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Icon box */}
                  <div className="hidden sm:flex w-10 h-10 border border-white/10 group-hover:border-gold/50 items-center justify-center shrink-0 transition-colors duration-300">
                    <service.icon size={16} className="text-white/30 group-hover:text-gold transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg lg:text-2xl font-medium text-white/70 group-hover:text-white transition-colors duration-300 uppercase tracking-widest mb-1">
                      {service.title}
                    </h3>
                    <p className="text-white/30 text-sm font-light group-hover:text-white/50 transition-colors duration-300 truncate lg:whitespace-normal">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Explore label */}
                  <div className="hidden lg:flex shrink-0 items-center gap-2 text-white/20 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300">
                    <span className="text-[10px] uppercase tracking-[4px] font-medium">Explore</span>
                    <ArrowRight size={13} />
                  </div>

                  {/* Mobile arrow */}
                  <ArrowRight size={16} className="lg:hidden shrink-0 text-white/20 group-hover:text-gold transition-colors duration-300" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Bottom CTA */}
          <FadeUp delay={0.15} className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-white/10">
            <p className="text-white/30 text-sm font-light">
              Not sure which service fits? We&apos;ll help you figure it out.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-secondary hover:bg-secondary/90 text-white text-sm font-medium uppercase tracking-[3px] transition-colors duration-200"
            >
              Book a Free Consultation
              <ArrowRight size={14} />
            </Link>
          </FadeUp>

        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-brand-bg py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ClipReveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
              Our Process
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight mb-4 uppercase tracking-widest">
              Simple. Proven. 4 Steps.
            </h2>
            <p className="text-brand-text/60 font-light">
              Getting started is straightforward. Our 4-step process ensures you
              receive the right support, delivered the right way, from day one.
            </p>
          </ClipReveal>

          <StaggerChildren>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 lg:gap-0">
              {[
                {
                  number: "01",
                  title: "Free Consultation",
                  desc: "We discuss your business needs, goals, and how our support can help.",
                  icon: Clock,
                },
                {
                  number: "02",
                  title: "Tailored Proposal",
                  desc: "A custom solution is designed specifically around your requirements.",
                  icon: Settings,
                },
                {
                  number: "03",
                  title: "Seamless Onboarding",
                  desc: "Our team integrates smoothly with your workflows within 2–4 weeks.",
                  icon: UserCog,
                },
                {
                  number: "04",
                  title: "Consistent Support",
                  desc: "Dedicated professionals deliver high-quality support every day.",
                  icon: CheckCircle2,
                },
              ].map((step) => (
                <StaggerItem key={step.number}>
                  <div className="relative flex flex-col items-center text-center px-4 lg:px-6">
                    {/* Circle icon */}
                    <div className="relative w-20 h-20 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 z-10">
                      <step.icon size={28} className="text-gold" />
                    </div>
                    {/* Step label */}
                    <p className="text-secondary/70 text-[10px] font-medium uppercase tracking-[4px] mb-1.5">
                      Step {step.number}
                    </p>
                    {/* Title */}
                    <h3 className="font-display text-base font-semibold text-brand-text mb-2 uppercase tracking-wide">
                      {step.title}
                    </h3>
                    {/* Description */}
                    <p className="text-brand-text/60 text-sm leading-relaxed font-light max-w-[180px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>

          <FadeUp className="text-center mt-10" delay={0.1}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-medium uppercase tracking-wider transition-colors duration-150"
            >
              Start with a Free Consultation
              <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Why Choose Execura */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <FadeUp className="lg:col-span-2">
              <ClipReveal>
                <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-3">
                  Our Difference
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-white leading-tight mb-6 uppercase tracking-widest">
                  The Execura Advantage
                </h2>
              </ClipReveal>
              <RevealLine className="w-12 h-px bg-gold mb-6" delay={0.2} />
              <p className="text-white/60 leading-relaxed mb-8 font-light">
                We go beyond standard support to become a true strategic partner
                in your business success.
              </p>
              <MagneticButton className="inline-flex">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 hover:border-white text-white font-medium uppercase tracking-wider transition-colors duration-150"
                >
                  About Our Team
                  <ArrowRight size={15} />
                </Link>
              </MagneticButton>
            </FadeUp>

            <StaggerChildren className="lg:col-span-3 space-y-5">
              {advantages.map((adv, idx) => (
                <StaggerItem key={idx}>
                  <div className="flex gap-4 p-5 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200">
                    <div className="w-10 h-10 bg-gold/20 flex items-center justify-center shrink-0">
                      <adv.icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {adv.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed font-light">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="bg-brand-bg py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <ClipReveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-4">
              Reviews
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight uppercase tracking-widest">
              Here&apos;s What Our Clients Are Saying
            </h2>
          </ClipReveal>

          {/* Google badge */}
          <FadeUp delay={0.1} className="flex justify-center mb-12">
            <div className="flex items-center gap-3 bg-white border border-brand-text/10 px-5 py-2.5 shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" className="shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={13} fill="#c9a962" className="text-gold" />
                ))}
              </div>
              <span className="text-brand-text/50 text-sm font-light">5.0 · Google Reviews</span>
            </div>
          </FadeUp>

          {/* Review cards */}
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)] p-8 h-full flex flex-col">
                  {/* Quote icon + stars */}
                  <div className="flex items-center justify-between mb-7">
                    <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <svg width="18" height="14" viewBox="0 0 20 16" fill="none">
                        <path d="M0 16V9.6C0 6.4 1.2 3.6 3.6 1.2L5.6 3.2C4.267 4.267 3.467 5.733 3.2 7.6H6.4V16H0ZM13.6 16V9.6C13.6 6.4 14.8 3.6 17.2 1.2L19.2 3.2C17.867 4.267 17.067 5.733 16.8 7.6H20V16H13.6Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={15} fill="#c9a962" className="text-gold" />
                      ))}
                    </div>
                  </div>

                  {/* Review text */}
                  <p className="text-brand-text/70 text-sm leading-[1.9] font-light flex-1 mb-7">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Reviewer */}
                  <div className="flex items-center gap-3 pt-5 border-t border-brand-text/8">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-white text-[10px] font-semibold tracking-wide">{review.initials}</span>
                    </div>
                    <div>
                      <p className="text-brand-text font-medium text-sm">{review.name}</p>
                      <p className="text-brand-text/40 text-xs font-light">{review.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20">
        <FadeUp className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-medium text-white mb-5 uppercase tracking-widest">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Let&apos;s discuss how Execura Support Solutions can help streamline
            your workflow, reduce administrative burden, and empower your team
            to focus on strategic growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-semibold uppercase tracking-wider hover:bg-brand-bg transition-colors duration-150"
          >
            Schedule a Free Consultation
            <ArrowRight size={16} />
          </Link>
        </FadeUp>
      </section>
    </>
  );
}
