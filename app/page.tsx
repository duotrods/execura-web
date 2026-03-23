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
import { CardTilt } from "@/components/gsap/CardTilt";
import { MagneticButton } from "@/components/gsap/MagneticButton";

const services = [
  {
    icon: Zap,
    title: "Automations",
    description:
      "Intelligent automation solutions that eliminate repetitive tasks and reduce errors. From workflow automation to AI-powered tools and integrations, we transform how your business operates.",
  },
  {
    icon: Settings,
    title: "Administrative Support",
    description:
      "From document preparation and data entry to travel arrangements and meeting coordination, our administrative specialists ensure your business runs smoothly.",
  },
  {
    icon: UserCog,
    title: "Executive Assistance",
    description:
      "High-level support for executives and business leaders including strategic scheduling, project coordination, research, and stakeholder communication.",
  },
  {
    icon: Briefcase,
    title: "Business Operations Support",
    description:
      "Operational excellence through process optimization, vendor management, basic bookkeeping support, and operational workflow improvements.",
  },
  {
    icon: Globe,
    title: "Website Creation & Maintenance",
    description:
      "Professional website design and development services that establish your online presence. From custom website creation to ongoing maintenance and updates.",
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

const trustIndicators = [
  "5+ Years of Industry Experience",
  "500+ Projects Successfully Completed",
  "98% Client Satisfaction Rate",
  "Dedicated Support Team",
  "Confidentiality Guaranteed",
  "Flexible Service Packages",
];

export default function HomePage() {
  return (
    <>
      {/* Hero — full-bleed with overlay */}
      <section data-hero-section className="relative min-h-screen flex items-center overflow-hidden">
        <ParallaxHero />
        {/* Background image */}
        <Image
          src="/assets/hero.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/92 to-primary/60" />
        {/* Subtle grid pattern — targeted by ParallaxHero */}
        <div
          data-hero-grid
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[64px_64px] will-change-transform"
        />

        {/* Content — targeted by ParallaxHero */}
        <div data-hero-content className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32 will-change-transform">
          <HeroContent className="max-w-3xl">
            <HeroItem>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 text-gold text-xs font-medium mb-8 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Professional Business Support Solutions
              </div>
            </HeroItem>
            <HeroItem>
              <h1 className="font-display text-4xl lg:text-6xl font-semibold text-white leading-tight tracking-widest mb-6 uppercase">
                Elevate Your Business with Expert Support Solutions
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl font-light">
                Professional administrative and operational support that empowers
                businesses to focus on growth. From automations to comprehensive
                business operations, we&apos;re your trusted partner in success.
              </p>
            </HeroItem>
            <HeroItem>
              <div className="flex flex-wrap gap-4">
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

            <StaggerChildren className="grid grid-cols-2 gap-4">
              {[
                { number: "01", text: "Discovery & Consultation" },
                { number: "02", text: "Customized Solution" },
                { number: "03", text: "Seamless Onboarding" },
                { number: "04", text: "Consistent Delivery" },
              ].map((item) => (
                <StaggerItem key={item.number}>
                  <div className="bg-white border border-brand-text/10 p-6 hover:border-brand-text/20 hover:shadow-sm transition-all duration-200 h-full">
                    <div className="font-display text-2xl font-semibold text-brand-text/20 mb-2">
                      {item.number}
                    </div>
                    <div className="text-sm font-medium text-brand-text">
                      {item.text}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ClipReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
              What We Offer
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight mb-4 uppercase tracking-widest">
              Comprehensive Support Solutions for Modern Businesses
            </h2>
            <p className="text-brand-text/60 font-light">
              A complete suite of business support services designed to
              alleviate operational burdens and enhance your productivity.
            </p>
          </ClipReveal>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <StaggerItem key={idx}>
                <CardTilt className="relative bg-brand-bg border border-brand-text/10 p-7 hover:border-brand-text/20 hover:shadow-sm transition-all duration-200 h-full">
                  <div className="w-11 h-11 bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-brand-text font-semibold text-lg mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-text/60 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </CardTilt>
              </StaggerItem>
            ))}
            <StaggerItem>
              <div className="bg-secondary p-7 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">
                    Need a Custom Solution?
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed font-light">
                    Every business has unique needs. Let us design a tailored
                    support solution specifically for you.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-white font-medium text-sm hover:gap-3 transition-all duration-150 uppercase tracking-wider"
                >
                  Discuss Your Needs
                  <ArrowRight size={15} />
                </Link>
              </div>
            </StaggerItem>
          </StaggerChildren>

          <FadeUp className="text-center mt-10" delay={0.1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-brand-text/20 hover:border-brand-text text-brand-text font-medium uppercase tracking-wider transition-colors duration-150"
            >
              View All Services
              <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-brand-bg py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ClipReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
              Our Process
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight mb-4 uppercase tracking-widest">
              Getting Started is Simple and Seamless
            </h2>
            <p className="text-brand-text/60 font-light">
              Our proven 5-step process ensures you receive the right support,
              delivered the right way, from day one.
            </p>
          </ClipReveal>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                number: "01",
                title: "Free Consultation",
                desc: "We discuss your business needs, goals, and how our support can help.",
              },
              {
                number: "02",
                title: "Tailored Proposal",
                desc: "A custom solution is designed specifically around your requirements.",
              },
              {
                number: "03",
                title: "Seamless Onboarding",
                desc: "Our team integrates smoothly with your workflows within 2–4 weeks.",
              },
              {
                number: "04",
                title: "Consistent Support",
                desc: "Dedicated professionals deliver high-quality support every day.",
              },
              {
                number: "05",
                title: "Continuous Growth",
                desc: "We review, improve, and scale our service as your business evolves.",
              },
            ].map((step) => (
              <StaggerItem key={step.number}>
                <div className="bg-white border border-brand-text/10 p-6 hover:border-brand-text/20 hover:shadow-sm transition-all duration-200 h-full">
                  <div className="font-display text-4xl font-semibold text-brand-text/10 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-brand-text font-semibold text-sm uppercase tracking-wide mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brand-text/60 text-sm leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
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

      {/* Trust Indicators */}
      <section className="bg-brand-bg py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl font-medium text-brand-text uppercase tracking-widest">
              Trusted by Businesses Across Industries
            </h2>
          </FadeUp>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustIndicators.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="flex items-center gap-3 bg-white border border-brand-text/10 px-5 py-3.5">
                  <CheckCircle2 size={16} className="text-secondary shrink-0" />
                  <span className="text-brand-text/70 text-sm">{item}</span>
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
