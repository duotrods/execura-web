import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Shield, Clock, Zap, TrendingUp } from "lucide-react";
import { ClipReveal } from "@/components/gsap/ClipReveal";
import { CardTilt } from "@/components/gsap/CardTilt";

export const metadata: Metadata = {
  title: "About Execura Support Solutions - Our Mission, Vision & Team",
  description:
    "Learn about Execura Support Solutions' commitment to business excellence. Discover our mission, values, and the experienced team dedicated to your success.",
};

const values = [
  {
    icon: Star,
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we do, from communication to task execution. Quality is never compromised.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Trust is the foundation of our client relationships. We operate with complete transparency, honesty, and ethical practices.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "Our clients depend on us, and we deliver consistently. Deadlines are met, commitments are honored, and support is always available.",
  },
  {
    icon: Zap,
    title: "Adaptability",
    description:
      "Every business is unique. We customize our approach to fit your specific needs, workflows, and objectives.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "We invest in our team's development and stay current with industry best practices, ensuring you always receive cutting-edge support.",
  },
];

const process = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your business, challenges, objectives, and specific support needs through detailed consultation.",
  },
  {
    number: "02",
    title: "Customized Solution Design",
    description:
      "Based on your requirements, we develop a tailored support plan that addresses your unique needs and integrates with your existing operations.",
  },
  {
    number: "03",
    title: "Seamless Onboarding",
    description:
      "Our structured onboarding process ensures smooth integration with minimal disruption to your workflow.",
  },
  {
    number: "04",
    title: "Consistent Delivery",
    description:
      "Your dedicated support team executes tasks with excellence, maintaining open communication and adhering to your standards.",
  },
  {
    number: "05",
    title: "Ongoing Optimization",
    description:
      "We regularly review our performance and processes, making continuous improvements to enhance efficiency and value delivery.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-4">
              About Us
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-widest mb-6 uppercase">
              Empowering Businesses Through Exceptional Support
            </h1>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Built on expertise, driven by excellence, committed to your
              success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <ClipReveal>
                <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
                  Our Story
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight mb-6 uppercase tracking-widest">
                  Who We Are
                </h2>
              </ClipReveal>
              <div className="space-y-4 text-brand-text/70 leading-relaxed font-light">
                <p>
                  Execura Support Solutions was founded with a simple yet
                  powerful vision: to help businesses thrive by providing
                  world-class support services that remove operational barriers
                  and unlock growth potential.
                </p>
                <p>
                  We recognized that many businesses struggle with
                  administrative overload, operational inefficiencies, and the
                  challenge of maintaining focus on core business activities.
                  Talented entrepreneurs and executives were spending valuable
                  time on tasks that, while necessary, didn&apos;t leverage
                  their unique expertise and vision.
                </p>
                <p>
                  From this insight, Execura was born. We&apos;ve built a team
                  of dedicated professionals who excel at the critical support
                  functions that keep businesses running smoothly.
                </p>
                <p>
                  Today, we proudly serve businesses across multiple industries,
                  from innovative startups to established enterprises, helping
                  them achieve operational excellence and sustainable growth.
                </p>
              </div>
            </div>
            <div>
              <div className="relative h-56 mb-5">
                <Image
                  src="/assets/about-story.svg"
                  alt="About Execura"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-brand-bg border border-brand-text/10 p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-brand-text font-semibold text-lg mb-3">
                    Our Mission
                  </h3>
                  <p className="text-brand-text/70 text-sm leading-relaxed font-light">
                    To deliver professional business support solutions that
                    empower organizations to operate more efficiently, grow
                    strategically, and achieve their full potential.
                  </p>
                </div>
                <div className="border-t border-brand-text/10 pt-8">
                  <h3 className="text-brand-text font-semibold text-lg mb-3">
                    Our Vision
                  </h3>
                  <p className="text-brand-text/70 text-sm leading-relaxed font-light">
                    To be the most trusted partner for businesses seeking
                    operational excellence through expert support services—where
                    every business has access to professional support that drives
                    success.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-bg py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ClipReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
              What Drives Us
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight uppercase tracking-widest">
              Our Values
            </h2>
          </ClipReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <CardTilt
                key={idx}
                className="relative bg-white border border-brand-text/10 p-7 hover:border-brand-text/20 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-11 h-11 bg-primary/10 flex items-center justify-center mb-5">
                  <value.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-brand-text font-semibold text-lg mb-3">
                  {value.title}
                </h3>
                <p className="text-brand-text/60 text-sm leading-relaxed font-light">
                  {value.description}
                </p>
              </CardTilt>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-56 mb-5">
                <Image
                  src="/assets/about-team.svg"
                  alt="The Execura Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: "Diverse Expertise",
                    text: "Our professionals come from varied backgrounds including corporate administration, executive assistance, project management, operations, and customer service.",
                  },
                  {
                    title: "Continuous Training",
                    text: "We invest in ongoing professional development, ensuring our team stays current with the latest tools, technologies, and best practices.",
                  },
                  {
                    title: "Client-Centric Approach",
                    text: "Every team member is selected not just for skills, but for their dedication to service excellence and ability to build strong, productive client relationships.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-5 bg-brand-bg border border-brand-text/10"
                  >
                    <div className="w-8 h-8 bg-secondary flex items-center justify-center text-white font-semibold text-xs shrink-0 mt-0.5">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="text-brand-text font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-brand-text/60 text-sm leading-relaxed font-light">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ClipReveal>
                <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-3">
                  Our Team
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight mb-6 uppercase tracking-widest">
                  Meet the Professionals Behind Your Success
                </h2>
              </ClipReveal>
              <p className="text-brand-text/70 leading-relaxed mb-8 font-light">
                Our team is our greatest asset. Each member of Execura Support
                Solutions brings specialized expertise, professional credentials,
                and a genuine commitment to client success.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-medium uppercase tracking-wider transition-colors duration-150"
              >
                Work With Us
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ClipReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-3">
              How We Work
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-white leading-tight uppercase tracking-widest">
              Our Process
            </h2>
          </ClipReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, idx) => (
              <CardTilt
                key={idx}
                className={`relative p-7 border ${
                  idx === 0
                    ? "bg-secondary border-secondary/80"
                    : "border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200"
                }`}
              >
                <div
                  className={`font-display text-3xl font-semibold mb-4 ${
                    idx === 0 ? "text-white/30" : "text-white/20"
                  }`}
                >
                  {step.number}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-medium text-white mb-5 uppercase tracking-widest">
            Experience the Execura Difference
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Partner with a team that&apos;s invested in your success. Let&apos;s
            explore how we can support your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-semibold uppercase tracking-wider hover:bg-brand-bg transition-colors duration-150"
          >
            Contact Us Today
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
