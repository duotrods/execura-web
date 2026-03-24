import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { ClipReveal } from "@/components/gsap/ClipReveal";
import { CardTilt } from "@/components/gsap/CardTilt";
import AnimatedStat from "@/components/gsap/AnimatedStat";
import ParallaxHero from "@/components/gsap/ParallaxHero";
import {
  HeroContent,
  HeroItem,
  FadeUp,
  FadeIn,
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
        className="relative min-h-[92vh] flex items-end overflow-hidden"
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
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20 lg:pb-28 will-change-transform"
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

      {/* ── Stats bar ── */}
      <section className="bg-primary-light border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {service.stats.map((stat) => (
              <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
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
      <section className="bg-brand-bg pt-20 pb-20 lg:pt-28 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <ClipReveal className="mb-12">
              <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
                Scope of Work
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight uppercase tracking-widest">
                What&apos;s Included
              </h2>
            </ClipReveal>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Dark features card */}
            <ScaleIn>
              <CardTilt className="bg-primary p-8 h-full">
                <h3 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">
                  Everything Covered
                </h3>
                <StaggerChildren className="space-y-4">
                  {service.features.map((feature, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-3 text-sm text-white/70 font-light">
                        <Check size={15} className="text-gold mt-0.5 shrink-0" />
                        {feature}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </CardTilt>
            </ScaleIn>

            {/* Right column */}
            <div className="flex flex-col gap-6">
              {service.packages && (
                <FadeIn>
                  <div>
                    <h3 className="text-brand-text font-semibold mb-4 uppercase tracking-wide text-sm">
                      Available Packages
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.packages.map((pkg, i) => (
                        <div key={i} className="border border-brand-text/10 px-4 py-3 bg-white">
                          <div className="text-sm font-semibold text-brand-text">{pkg.name}</div>
                          <div className="text-xs text-brand-text/50 mt-0.5 font-light">{pkg.detail}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}

              <FadeUp className="flex-1">
                <div className="bg-white border border-brand-text/10 p-6 h-full">
                  <h3 className="text-brand-text font-semibold mb-5 uppercase tracking-wide text-sm">
                    Every Engagement Includes
                  </h3>
                  <StaggerChildren className="space-y-3">
                    {[
                      "Dedicated point of contact",
                      "Clear onboarding and handover process",
                      "Regular progress communication",
                      "Quality review before delivery",
                      "Flexible, scalable support model",
                    ].map((item, i) => (
                      <StaggerItem key={i}>
                        <div className="flex items-start gap-2.5 text-sm text-brand-text/60 font-light">
                          <Check size={13} className="text-secondary mt-0.5 shrink-0" />
                          {item}
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </div>
              </FadeUp>

              <FadeIn>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-secondary hover:bg-secondary/90 text-white font-medium uppercase tracking-wider transition-colors duration-150 w-full"
                >
                  Start with {service.title}
                  <ArrowRight size={15} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <ClipReveal className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-3">
                How We Work
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-medium text-white leading-tight uppercase tracking-widest">
                Our Delivery Process
              </h2>
            </ClipReveal>
          </FadeUp>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.process.map((step, idx) => (
              <StaggerItem key={idx}>
                <CardTilt
                  className={`relative p-7 border transition-all duration-200 ${
                    idx === 0
                      ? "bg-secondary border-secondary/80"
                      : "border-white/10 hover:border-white/25 hover:bg-white/5"
                  }`}
                >
                  <div
                    className={`font-display text-3xl font-semibold mb-4 ${
                      idx === 0 ? "text-white/30" : "text-white/20"
                    }`}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed font-light ${
                      idx === 0 ? "text-white/80" : "text-white/60"
                    }`}
                  >
                    {step.description}
                  </p>
                </CardTilt>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Why Execura ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <ClipReveal className="mb-12">
              <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
                The Execura Difference
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight uppercase tracking-widest">
                Why Choose Execura
              </h2>
            </ClipReveal>
          </FadeUp>

          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {service.whyUs.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="border border-brand-text/10 p-7 hover:border-brand-text/20 hover:shadow-sm transition-all duration-200 h-full">
                  <div className="w-8 h-8 bg-secondary flex items-center justify-center text-white font-semibold text-xs mb-5">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-brand-text font-semibold text-base mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brand-text/60 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
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

      {/* ── FAQ ── */}
      <section className="bg-brand-bg py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Left */}
            <FadeUp className="lg:col-span-2">
              <ClipReveal>
                <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
                  FAQ
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight mb-6 uppercase tracking-widest">
                  Common Questions
                </h2>
              </ClipReveal>
              <RevealLine className="w-12 h-px bg-secondary mb-6" delay={0.2} />
              <p className="text-brand-text/60 text-sm leading-relaxed font-light mb-8">
                Have a question not answered here? We&apos;re always happy to
                talk through your specific situation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 border border-brand-text/20 hover:border-secondary hover:text-secondary text-brand-text text-sm font-medium uppercase tracking-wider transition-colors duration-150"
              >
                Ask Us Anything
                <ArrowRight size={14} />
              </Link>
            </FadeUp>

            {/* Right: FAQ list */}
            <StaggerChildren className="lg:col-span-3 divide-y divide-brand-text/10">
              {service.faqs.map((faq, idx) => (
                <StaggerItem key={idx}>
                  <div className="py-6 first:pt-0 last:pb-0">
                    <h3 className="text-brand-text font-semibold text-sm mb-3 uppercase tracking-wide">
                      {faq.question}
                    </h3>
                    <p className="text-brand-text/60 text-sm leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
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
      <section className="relative bg-secondary py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={service.overviewImage}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <RevealLine className="w-12 h-px bg-white/40 mx-auto mb-8" />
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-white mb-5 uppercase tracking-widest">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10 font-light">
              Let&apos;s discuss how we can tailor this service to your specific
              business needs. Book your free consultation — no commitment required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-semibold uppercase tracking-wider hover:bg-brand-bg transition-colors duration-150"
              >
                Book a Free Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 hover:border-white/60 text-white font-medium uppercase tracking-wider transition-colors duration-150"
              >
                View All Services
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
