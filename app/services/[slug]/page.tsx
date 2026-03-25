import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ArrowLeft, Clock, Settings, UserCog, CheckCircle2 } from "lucide-react";
import { ClipReveal } from "@/components/gsap/ClipReveal";
import AnimatedStat from "@/components/gsap/AnimatedStat";
import ParallaxHero from "@/components/gsap/ParallaxHero";
import {
  HeroContent,
  HeroItem,
  FadeUp,
  ScaleIn,
  StaggerChildren,
  StaggerItem,
  RevealLine,
} from "@/components/Motion";
import { services, getServiceBySlug } from "../data";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => service.relatedSlugs.includes(s.slug));

  return (
    <>
      {/* ── Hero ── full-bleed image with parallax */}
      <section
        data-hero-section
        className="relative min-h-[72vh] flex items-end overflow-hidden"
      >
        <ParallaxHero />

        {/* Background image */}
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/88 to-primary/40" />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/30 to-transparent" />

        {/* Subtle grid */}
        <div
          data-hero-grid
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[64px_64px] will-change-transform"
        />

        {/* Content */}
        <div
          data-hero-content
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-32 pb-12 lg:pb-20 will-change-transform"
        >
          <HeroContent className="max-w-3xl">
            <HeroItem>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-xs uppercase tracking-wider transition-colors duration-150 mb-10"
              >
                <ArrowLeft size={13} />
                All Services
              </Link>
            </HeroItem>

            <HeroItem>
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-7">
                <service.icon size={26} className="text-gold" />
              </div>
              <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-4">
                {service.subtitle}
              </p>
              <h1 className="font-display text-4xl lg:text-6xl font-semibold text-white leading-tight tracking-widest mb-6 uppercase">
                {service.title}
              </h1>
            </HeroItem>

            <HeroItem>
              <p className="text-white/70 text-lg leading-relaxed mb-10 font-light max-w-2xl">
                {service.shortDescription}
              </p>
            </HeroItem>

            <HeroItem>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-medium uppercase tracking-wider transition-colors duration-150"
                >
                  Get Started
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/25 hover:border-white/50 text-white/70 hover:text-white font-medium uppercase tracking-wider transition-colors duration-150"
                >
                  See What&apos;s Included
                </a>
              </div>
            </HeroItem>
          </HeroContent>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-primary to-transparent" />
      </section>

      {/* ── Overview ── */}
      <section id="overview" className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: text */}
            <FadeUp>
              <ClipReveal>
                <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
                  Overview
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight mb-6 uppercase tracking-widest">
                  What This Service Delivers
                </h2>
              </ClipReveal>
              <RevealLine className="w-12 h-px bg-secondary mb-8" delay={0.2} />
              <div className="space-y-5 mb-8">
                {service.longDescription.map((para, i) => (
                  <p key={i} className="text-brand-text/70 leading-relaxed font-light">
                    {para}
                  </p>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium text-sm uppercase tracking-wider transition-colors duration-150"
              >
                Book a Free Consultation
                <ArrowRight size={15} />
              </Link>
            </FadeUp>

            {/* Right: image + floating card */}
            <ScaleIn className="relative">
              <div className="relative h-[480px] overflow-hidden">
                <Image
                  src={service.overviewImage}
                  alt={`${service.title} at Execura`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-br from-secondary/15 to-primary/30" />
              </div>

              {/* Floating "Ideal For" card */}
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 max-w-xs shadow-2xl">
                <p className="text-gold text-xs uppercase tracking-[5px] font-light mb-3">
                  Ideal For
                </p>
                <p className="text-white/70 text-sm leading-relaxed font-light">
                  {service.idealFor}
                </p>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header row */}
          <FadeUp>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-3">
              <ClipReveal>
                <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-3">
                  Scope of Work
                </p>
                <h2 className="font-display text-3xl lg:text-5xl font-medium text-white leading-tight uppercase tracking-widest">
                  What&apos;s Included
                </h2>
              </ClipReveal>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white uppercase tracking-wider text-sm transition-colors duration-150 shrink-0"
              >
                Get Started
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="w-full h-px bg-white/10 mt-8 mb-0" />
          </FadeUp>

          {/* Features — numbered editorial rows */}
          <StaggerChildren>
            <div className="grid md:grid-cols-2 gap-px bg-white/6 mt-px mb-14">
              {service.features.map((feature, i) => (
                <StaggerItem key={i}>
                  <div className="group flex items-start gap-5 bg-primary hover:bg-white/5 px-6 py-5 transition-colors duration-200">
                    <div className="font-display text-xl font-bold text-white/10 group-hover:text-white/20 shrink-0 w-8 leading-none mt-0.5 transition-colors duration-200">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex items-start gap-3 flex-1">
                      <Check size={13} className="text-gold mt-1 shrink-0" />
                      <span className="text-white/65 group-hover:text-white/85 text-sm font-light leading-relaxed transition-colors duration-200">
                        {feature}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>

          {/* Every Engagement Includes — pill strip */}
          <FadeUp>
            <div className="border-t border-white/10 pt-10">
              <p className="text-gold/70 text-[10px] font-medium uppercase tracking-[5px] mb-6">
                Every Engagement Includes
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Dedicated point of contact",
                  "Clear onboarding process",
                  "Regular progress updates",
                  "Quality review before delivery",
                  "Flexible, scalable model",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-2.5 bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-gold/5 px-4 py-2.5 transition-colors duration-200"
                  >
                    <div className="w-1 h-1 rounded-full bg-gold shrink-0" />
                    <span className="text-white/55 group-hover:text-white/80 text-xs font-light transition-colors duration-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

        </div>
      </section>

     

      {/* ── Why Execura ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">

            <FadeUp>
              <ClipReveal>
                <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
                  The Execura Difference
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight uppercase tracking-widest">
                  Why Leading Businesses Choose Execura
                </h2>
              </ClipReveal>
              <RevealLine className="w-12 h-px bg-secondary mb-6" delay={0.2} />
              <p className="text-brand-text/65 leading-relaxed font-light mb-8">
                We don&apos;t just complete tasks — we think like your business partner,
                anticipate your needs, and deliver results that move the needle every time.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-brand-text/20 hover:border-secondary hover:text-secondary text-brand-text text-sm font-medium uppercase tracking-wider transition-colors duration-200"
              >
                Talk to Our Team
                <ArrowRight size={14} />
              </Link>
            </FadeUp>

            <StaggerChildren>
              <div className="space-y-px bg-brand-text/8">
                {service.whyUs.map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="group flex gap-5 items-start bg-white hover:bg-primary px-6 py-6 transition-colors duration-300">
                      <div className="font-display text-3xl font-bold text-brand-text/8 group-hover:text-white/10 shrink-0 leading-none mt-0.5 transition-colors duration-300 w-10">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="text-brand-text group-hover:text-white font-semibold text-sm mb-2 uppercase tracking-wide transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-brand-text/60 group-hover:text-white/55 text-sm leading-relaxed font-light transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerChildren>

          </div>
        </div>
      </section>

       {/* ── How It Works ── same 4-step process as services page */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <ClipReveal className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-3">
                How It Works
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-medium text-white leading-tight uppercase tracking-widest">
                From Discovery to Delivery
              </h2>
              <p className="text-white/50 font-light mt-4">
                A clear, proven path — from your first conversation to lasting business impact.
              </p>
            </ClipReveal>
          </FadeUp>

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
                    <p className="text-gold/70 text-[10px] font-medium uppercase tracking-[4px] mb-1.5">
                      Step {step.number}
                    </p>
                    <h3 className="font-display text-base font-semibold text-white mb-2 uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed font-light max-w-[180px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>

          <FadeUp className="text-center mt-12">
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

      
      {/* ── FAQ ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <FadeUp>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-14">
              <ClipReveal>
                <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
                  Common Questions
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight uppercase tracking-widest">
                  Everything You Need<br />to Know
                </h2>
              </ClipReveal>
              <div>
                <RevealLine className="w-12 h-px bg-secondary mb-5" delay={0.2} />
                <p className="text-brand-text/60 text-sm leading-relaxed font-light mb-6">
                  Have a question not answered here? We&apos;re always happy to
                  talk through your specific situation — no obligation.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-secondary hover:bg-secondary/90 text-white text-sm font-medium uppercase tracking-wider transition-colors duration-150"
                >
                  Ask Us Anything
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* FAQ rows — numbered, hover turns dark */}
          <StaggerChildren>
            <div className="space-y-px bg-brand-text/6">
              {service.faqs.map((faq, idx) => (
                <StaggerItem key={idx}>
                  <div className="group flex gap-6 items-start bg-brand-bg hover:bg-primary px-7 py-7 transition-colors duration-300">
                    <div className="font-display text-2xl font-bold text-brand-text/8 group-hover:text-white/10 shrink-0 leading-none mt-1 transition-colors duration-300 w-10">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-brand-text group-hover:text-white font-semibold text-sm mb-3 uppercase tracking-wide transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <p className="text-brand-text/60 group-hover:text-white/55 text-sm leading-relaxed font-light transition-colors duration-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>

        </div>
      </section>

      {/* ── Full-width image pull-quote ── */}
      <section className="relative h-72 lg:h-80 overflow-hidden">
        <Image
          src={service.heroImage}
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <FadeUp className="text-center max-w-3xl">
            <RevealLine className="w-12 h-px bg-gold mx-auto mb-6" />
            <p className="font-display text-2xl lg:text-4xl font-medium text-white uppercase tracking-widest leading-tight">
              &ldquo;Execution is everything. <span className="text-gold">We make it effortless.&rdquo;</span>
            </p>
            <RevealLine className="w-12 h-px bg-gold mx-auto mt-6" delay={0.3} />
          </FadeUp>
        </div>
      </section>


      {/* ── Related Services ── */}
      {related.length > 0 && (
        <section className="bg-white py-16 border-t border-brand-text/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeUp>
              <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-8">
                Explore More Services
              </p>
            </FadeUp>
            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((s) => (
                <StaggerItem key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group relative overflow-hidden flex flex-col border border-brand-text/10 hover:border-secondary/40 transition-all duration-200 h-full"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={s.heroImage}
                        alt={s.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/50 transition-colors duration-200" />
                      <div className="absolute bottom-3 left-3">
                        <div className="w-8 h-8 bg-white/10 flex items-center justify-center">
                          <s.icon size={15} className="text-gold" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between flex-1">
                      <div>
                        <h3 className="text-brand-text font-semibold text-sm group-hover:text-secondary transition-colors duration-150">
                          {s.title}
                        </h3>
                        <p className="text-brand-text/50 text-xs font-light mt-0.5">
                          {s.subtitle}
                        </p>
                      </div>
                      <ArrowRight
                        size={15}
                        className="text-brand-text/30 group-hover:text-secondary group-hover:translate-x-0.5 transition-all duration-150 shrink-0 ml-3"
                      />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="relative bg-primary py-24 lg:py-32 overflow-hidden">
        {/* Dim background image */}
        <div className="absolute inset-0 opacity-8">
          <Image src={service.overviewImage} alt="" fill className="object-cover" />
        </div>
        {/* Architectural grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] pointer-events-none" />
        {/* Gold glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-gold/6 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <RevealLine className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-4">
              Start Today
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-medium text-white mb-6 uppercase tracking-widest leading-tight">
              Ready to Elevate Your<br />
              <span className="text-gold">{service.title}?</span>
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-10 font-light max-w-xl mx-auto">
              Let&apos;s build a tailored solution around your exact business needs.
              Book your free, no-obligation consultation and take the first step forward.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-semibold uppercase tracking-wider transition-colors duration-150"
              >
                Book Your Free Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white/60 hover:text-white font-medium uppercase tracking-wider transition-colors duration-150"
              >
                View All Services
              </Link>
            </div>
            <RevealLine className="w-12 h-px bg-gold/30 mx-auto mt-10" delay={0.3} />
          </FadeUp>
        </div>
      </section>
    </>
  );
}
