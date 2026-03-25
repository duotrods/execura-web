import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Star,
  Shield,
  Clock,
  Zap,
  TrendingUp,
  Users,
  Settings,
  UserCog,
  CheckCircle2,
  Heart,
} from "lucide-react";
import { ClipReveal } from "@/components/gsap/ClipReveal";
import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
  RevealLine,
  HeroContent,
  HeroItem
} from "@/components/Motion";

export const metadata: Metadata = {
  title: "About Execura Support Solutions — Our Mission, Vision & Team",
  description:
    "Learn about Execura Support Solutions' commitment to business excellence. Discover our mission, values, and the experienced team dedicated to your success.",
  keywords:
    "about execura, business support team, virtual assistant company, professional support solutions, executive assistance team, business operations support",
};

const values = [
  {
    icon: Star,
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we do — from communication to execution. Quality is never an afterthought; it is our baseline.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Trust is the foundation of every client relationship we build. We operate with complete transparency, honesty, and unwavering ethical principles.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "Our clients depend on us, and we deliver — consistently. Deadlines are met, commitments are honored, and support is always available when it matters.",
  },
  {
    icon: Zap,
    title: "Adaptability",
    description:
      "Every business is unique. We tailor our approach to fit your specific workflows, culture, and objectives — never a one-size-fits-all solution.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description:
      "We invest in our team's development and stay ahead of industry best practices, so our clients always benefit from cutting-edge support capabilities.",
  },
  {
    icon: Heart,
    title: "Client-Centricity",
    description:
      "You are at the centre of every decision we make. We listen deeply, act thoughtfully, and measure our success by the impact we create for you.",
  },
];

const team = [
  {
    name: "Ley Jazzie Alicaway",
    role: "CEO & Founder",
    bio: "With over a 3 years of experience in executive operations and business strategy, Ley founded Execura with a vision to give every business access to world-class support — without the overhead of full-time hires.",
    image: "/assets/ley jazzie.jpeg",
    initials: "LA",
    linkedin: "https://www.linkedin.com/in/alicaway-ley-jazzie/", // ← replace with Ley Jazzie's LinkedIn URL
  },
  {
    name: "Rod Olinor Du-ot",
    role: "Co-Founder & COO",
    bio: "Rod brings deep expertise in website, process design, and automation. He leads Execura's service delivery and ensures every client engagement is backed by rigorous systems and a high-performing team.",
    image: "/assets/rr 1.png",
    initials: "RD",
    linkedin: "https://www.linkedin.com/in/rod-olinor-du-ot-87a912278/", // ← replace with Rod's LinkedIn URL
  },
];

const processSteps = [
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
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80"
          alt="Execura Support Solutions team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/88 to-primary/40" />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[64px_64px]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-32 pb-14 lg:pb-20">
          {/* <FadeUp className="max-w-3xl">
            <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-4">
              About Us
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-widest mb-5 uppercase">
              Empowering Businesses Through Exceptional Support
            </h1>
            <p className="text-white/65 text-lg leading-relaxed font-light max-w-2xl">
              Built on expertise, driven by excellence, and committed to your success — every step of the way.
            </p>
          </FadeUp> */}
          <HeroContent className="max-w-3xl">
                      
                      <HeroItem>
                        <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-4">
                           About Us
                        </p>
                        <h1 className="font-display text-4xl lg:text-6xl font-semibold text-white leading-tight tracking-widest mb-6 uppercase">
                           Built Different. Proven Daily.
                        </h1>
                      </HeroItem>
                      <HeroItem>
                        <p className="text-white/70 text-lg leading-relaxed mb-10 font-light">
                          Built on expertise, driven by excellence, and committed to your success — every step of the way.
                        </p>
                      </HeroItem>
                      
                    </HeroContent>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-primary to-transparent" />
      </section>

      {/* ── Our Story ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Text */}
            <div>
              <ClipReveal>
                <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-4">
                  Our Story
                </p>
                <h2 className="font-display text-4xl lg:text-5xl font-medium text-brand-text leading-tight mb-6 uppercase tracking-widest">
                  Who We Are
                </h2>
              </ClipReveal>
              <RevealLine className="w-12 h-px bg-secondary mb-8" delay={0.2} />
              <div className="space-y-5 text-brand-text/65 leading-[1.85] font-light">
                <p>
                  Execura Support Solutions was founded with a clear and powerful vision: to help businesses thrive by removing operational barriers and unlocking their true growth potential.
                </p>
                <p>
                  We saw talented entrepreneurs and executives spending valuable hours on tasks that — while necessary — didn&apos;t leverage their unique skills or vision. Administrative overload, operational inefficiencies, and fragmented workflows were quietly costing businesses the focus they needed to grow.
                </p>
                <p>
                  From that insight, Execura was born. We built a team of dedicated specialists who excel at the critical support functions that keep modern businesses running — and growing — smoothly.
                </p>
                <p>
                  Today, we proudly serve businesses across multiple industries: from ambitious startups to established enterprises, all benefiting from Execura&apos;s commitment to operational excellence and exceptional service.
                </p>
              </div>
            </div>

            {/* Image + Mission/Vision */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  src="/assets/aboutus.JPG"
                  alt="The Execura team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-0 border border-brand-text/10">
                <div className="p-7 border-b sm:border-b-0 sm:border-r border-brand-text/10">
                  <p className="text-secondary text-[10px] font-medium uppercase tracking-[4px] mb-3">Our Mission</p>
                  <p className="text-brand-text/70 text-sm leading-relaxed font-light">
                    To deliver professional business support that empowers organisations to operate more efficiently, grow strategically, and achieve their full potential.
                  </p>
                </div>
                <div className="p-7">
                  <p className="text-secondary text-[10px] font-medium uppercase tracking-[4px] mb-3">Our Vision</p>
                  <p className="text-brand-text/70 text-sm leading-relaxed font-light">
                    To be the most trusted partner for businesses seeking operational excellence — where every organisation has access to the support it needs to succeed.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Core Values ───────────────────────────────────────────────── */}
      <section className="bg-primary py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-14 border-b border-white/10 mb-10">
            <ClipReveal className="max-w-2xl">
              <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-5">
                What Drives Us
              </p>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-[1.05] uppercase tracking-widest">
                Our Core Values
              </h2>
            </ClipReveal>
            <FadeUp delay={0.2} className="max-w-sm">
              <p className="text-white/35 font-light leading-relaxed text-sm">
                These six principles are not slogans — they are the standards our team holds itself to, in every interaction and every deliverable.
              </p>
            </FadeUp>
          </div>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
            {values.map((value, idx) => (
              <StaggerItem key={idx}>
                <div className="group bg-primary p-8 lg:p-10 hover:bg-gold/4 transition-colors duration-300 h-full flex flex-col gap-6 border border-transparent hover:border-gold/20">
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 border border-white/10 group-hover:border-gold/40 flex items-center justify-center transition-colors duration-300">
                      <value.icon size={18} className="text-white/30 group-hover:text-gold transition-colors duration-300" />
                    </div>
                    <span className="font-display text-5xl font-semibold text-white/4 group-hover:text-gold/10 leading-none transition-colors duration-500 select-none">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-white/80 group-hover:text-white transition-colors duration-300 uppercase tracking-widest mb-3">
                      {value.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-[1.85] font-light group-hover:text-white/55 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Our Team ──────────────────────────────────────────────────── */}
      <section className="bg-brand-bg py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <ClipReveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-4">
              Our Team
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-medium text-brand-text leading-tight uppercase tracking-widest mb-4">
              The People Behind Your Success
            </h2>
            <p className="text-brand-text/50 font-light text-sm leading-relaxed">
              Led by experienced professionals who built Execura from the ground up with one purpose: to be the business partner they wished theyd had.
            </p>
          </ClipReveal>

          <StaggerChildren className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <StaggerItem key={idx}>
                <div className="group bg-white overflow-hidden shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_40px_0px_rgba(0,0,0,0.10)] transition-shadow duration-300">
                  {/* Photo */}
                  <div className="relative w-full aspect-4/5 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent" />
                    {/* Name overlay on photo */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-gold text-[10px] font-medium uppercase tracking-[4px] mb-1">{member.role}</p>
                      <h3 className="font-display text-2xl font-medium text-white uppercase tracking-wide">{member.name}</h3>
                    </div>
                  </div>
                  {/* Bio */}
                  <div className="p-7 border-t border-brand-text/8">
                    <p className="text-brand-text/65 text-sm leading-[1.85] font-light mb-5">
                      {member.bio}
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 border border-brand-text/10 flex items-center justify-center hover:border-primary hover:bg-primary transition-colors duration-200 group/icon"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-brand-text/30 group-hover/icon:text-white transition-colors duration-200">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-primary py-24 lg:py-32 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/4" />
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/4" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-6">
              Partner With Us
            </p>
          </FadeUp>
          <ClipReveal>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium text-white mb-6 uppercase tracking-widest leading-[1.05]">
              Experience the<br />Execura Difference
            </h2>
          </ClipReveal>
          <FadeUp delay={0.2}>
            <p className="text-white/45 text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              Partner with a team that is genuinely invested in your success. Let&apos;s explore how we can support your business goals — starting today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-medium uppercase tracking-[3px] text-sm transition-colors duration-200"
              >
                Book a Free Consultation
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-medium uppercase tracking-[3px] text-sm transition-colors duration-200"
              >
                Explore Our Services
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Our Process ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ClipReveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-4">
              Our Process
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight mb-4 uppercase tracking-widest">
              Simple. Proven. 4 Steps.
            </h2>
            <p className="text-brand-text/60 font-light">
              Getting started is straightforward. Our 4-step process ensures you receive the right support, delivered the right way, from day one.
            </p>
          </ClipReveal>

          <StaggerChildren>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 lg:gap-0">
              {processSteps.map((step) => (
                <StaggerItem key={step.number}>
                  <div className="relative flex flex-col items-center text-center px-4 lg:px-6">
                    {/* Circle icon */}
                    <div className="relative w-20 h-20 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-5 z-10">
                      <step.icon size={28} className="text-secondary" />
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

          <FadeUp className="text-center mt-14" delay={0.1}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary hover:bg-secondary/90 text-white font-medium uppercase tracking-[3px] text-sm transition-colors duration-200"
            >
              Start with a Free Consultation
              <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>

      
    </>
  );
}
