import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Zap, Settings, UserCog, Briefcase, Globe } from "lucide-react";
import { ClipReveal } from "@/components/gsap/ClipReveal";
import { CardTilt } from "@/components/gsap/CardTilt";

export const metadata: Metadata = {
  title: "Business Support Services - Automations, Admin, Executive & Web Services | Execura",
  description:
    "Comprehensive business support services including automations, administrative support, executive services, website creation & maintenance, and operations management.",
};

const services = [
  {
    id: "automation",
    icon: Zap,
    title: "Automations",
    subtitle: "Streamline with Smart Automation",
    description:
      "We design and implement intelligent automation solutions that eliminate repetitive tasks, reduce errors, and free your team to focus on high-value work. From workflow automation to AI-powered tools and integrations, we transform how your business operates.",
    features: [
      "Workflow automation and process mapping",
      "CRM and email marketing automation",
      "Automated reporting and data pipelines",
      "AI-powered task routing and responses",
      "Tool integrations (Zapier, Make, n8n)",
      "Automated invoicing and follow-up sequences",
      "Lead capture and nurturing workflows",
      "Custom automation consulting and setup",
    ],
    benefits: [
      "Save hours of manual work every week",
      "Reduce human error in repetitive processes",
      "Scale operations without adding headcount",
      "Real-time visibility into business workflows",
    ],
    idealFor: "Growing businesses, operations teams, and entrepreneurs looking to scale efficiently without proportionally increasing costs.",
  },
  {
    id: "admin-support",
    icon: Settings,
    title: "Administrative Support",
    subtitle: "Excellence in Business Operations",
    description:
      "Our administrative support services handle the essential but time-consuming tasks that keep your business organized and running smoothly. From document preparation to travel coordination.",
    features: [
      "Professional document creation and formatting",
      "Presentation development and report compilation",
      "Meeting scheduling, agendas, and minutes",
      "Flight and accommodation booking",
      "Expense report preparation and tracking",
      "Vendor communication and coordination",
      "Template creation and maintenance",
      "File organization and management systems",
    ],
    benefits: [
      "Professional quality deliverables",
      "Consistent processes and systems",
      "Reduced administrative burden on core team",
      "More time for strategic activities",
    ],
    idealFor: "Business managers, department heads, professional services firms, and organizations needing dedicated administrative excellence.",
  },
  {
    id: "executive-assistance",
    icon: UserCog,
    title: "Executive Assistance",
    subtitle: "Strategic Support for Leaders",
    description:
      "Our executive assistants provide high-level support to executives, business owners, and senior leadership. We handle complex scheduling, strategic communication, and special projects.",
    features: [
      "Complex multi-party scheduling and optimization",
      "Executive correspondence management",
      "Board meeting and retreat preparation",
      "Special project coordination and research",
      "Stakeholder relationship management",
      "Confidential document handling",
      "Conference and event arrangements",
      "VIP guest coordination",
    ],
    benefits: [
      "Enhanced executive productivity",
      "Professional representation",
      "Proactive problem-solving",
      "Discretion and confidentiality",
    ],
    idealFor: "C-suite executives, business owners, senior leadership, board members, and high-level decision-makers.",
  },
  {
    id: "operations",
    icon: Briefcase,
    title: "Business Operations Support",
    subtitle: "Streamlining Your Business Functions",
    description:
      "Our operations support services focus on improving business efficiency through process optimization, vendor management, and operational coordination.",
    features: [
      "Standard operating procedure (SOP) development",
      "Vendor relationship coordination and tracking",
      "Cross-department communication facilitation",
      "Invoice processing and expense tracking",
      "Documentation review and quality control",
      "Software and tool coordination",
      "KPI tracking and reporting",
      "Audit preparation support",
    ],
    benefits: [
      "Improved operational efficiency",
      "Better vendor relationships",
      "Reduced operational costs",
      "Data-driven decision support",
    ],
    idealFor: "Growing businesses, operations managers, and organizations seeking to optimize their operational efficiency.",
  },
  {
    id: "website",
    icon: Globe,
    title: "Website Creation & Maintenance",
    subtitle: "Your Digital Presence, Perfected",
    description:
      "Your website is often the first impression potential clients have of your business. Our website services deliver professional, modern websites that showcase your brand, attract customers, and drive results.",
    features: [
      "Custom responsive website design and development",
      "WordPress, React, and Next.js solutions",
      "E-commerce platforms (WooCommerce, Shopify)",
      "SEO-optimized structure and meta setup",
      "Regular content updates and plugin maintenance",
      "Security monitoring and backup management",
      "Performance optimization and speed improvements",
      "Google Analytics and Search Console integration",
    ],
    benefits: [
      "Professional online presence that builds credibility",
      "24/7 accessibility for your customers",
      "Cost-effective compared to hiring full-time developers",
      "Improved search engine visibility",
    ],
    idealFor: "New businesses, companies with outdated websites, service providers needing lead generation, and e-commerce businesses.",
    packages: [
      { name: "Starter Website", detail: "5-page professional website" },
      { name: "Business Website", detail: "10-page site with blog functionality" },
      { name: "E-Commerce Website", detail: "Full online store with checkout" },
      { name: "Custom Website", detail: "Tailored to unique requirements" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-4">
                Our Services
              </p>
              <h1 className="font-display text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-widest mb-6 uppercase">
                Professional Support Services Tailored to Your Business Needs
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-10 font-light">
                From daily administrative tasks to strategic executive support and
                professional web solutions, we provide comprehensive services that
                drive efficiency and growth.
              </p>
              <div className="flex flex-wrap gap-3">
                {services.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="px-4 py-2 border border-white/20 hover:border-gold text-white/70 hover:text-gold text-sm transition-colors duration-150 uppercase tracking-wide"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative h-120">
              <Image
                src="/assets/services.svg"
                alt="Execura Services"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-brand-bg py-12 border-b border-brand-text/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-text/70 text-center max-w-3xl mx-auto leading-relaxed font-light">
            At Execura Support Solutions, we offer a complete suite of business
            support services designed to alleviate operational burdens and
            enhance your productivity. Each service is customizable to your
            specific requirements, ensuring you receive exactly the support you
            need.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-28 ${idx % 2 === 0 ? "bg-white" : "bg-brand-bg"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon size={22} className="text-primary" />
                </div>
                <ClipReveal>
                  <p className="text-secondary text-sm font-light uppercase tracking-[6px] mb-2">
                    {service.subtitle}
                  </p>
                  <h2 className="font-display text-3xl lg:text-4xl font-medium text-brand-text leading-tight mb-5 uppercase tracking-widest">
                    {service.title}
                  </h2>
                </ClipReveal>
                <p className="text-brand-text/70 leading-relaxed mb-8 font-light">
                  {service.description}
                </p>

                <h3 className="text-brand-text font-semibold mb-4 uppercase tracking-wide text-sm">Key Benefits</h3>
                <ul className="space-y-2.5 mb-8">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brand-text/70 font-light">
                      <Check size={16} className="text-secondary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="bg-brand-bg border border-brand-text/10 px-5 py-4 text-sm text-brand-text/70 font-light">
                  <span className="font-semibold text-brand-text">Ideal for: </span>
                  {service.idealFor}
                </div>

                {service.packages && (
                  <div className="mt-8">
                    <h3 className="text-brand-text font-semibold mb-4 uppercase tracking-wide text-sm">Available Packages</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {service.packages.map((pkg, i) => (
                        <div key={i} className="border border-brand-text/10 px-4 py-3">
                          <div className="text-sm font-semibold text-brand-text">{pkg.name}</div>
                          <div className="text-xs text-brand-text/50 mt-0.5 font-light">{pkg.detail}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-medium uppercase tracking-wider transition-colors duration-150"
                  >
                    Get Started
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <CardTilt className="relative bg-primary p-8">
                <h3 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70 font-light">
                      <Check size={15} className="text-gold mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardTilt>
            </div>
          </div>
        </section>
      ))}

      {/* Custom Solutions */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ClipReveal>
                <p className="text-gold text-sm font-light uppercase tracking-[6px] mb-3">
                  Custom Solutions
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-white leading-tight mb-5 uppercase tracking-widest">
                  Need Something Specific?
                </h2>
              </ClipReveal>
              <p className="text-white/70 leading-relaxed mb-8 font-light">
                We understand that every business has unique needs. If your
                requirements don&apos;t fit neatly into our standard service
                categories, we&apos;re happy to discuss custom support solutions
                tailored specifically to your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-medium uppercase tracking-wider transition-colors duration-150"
              >
                Discuss Custom Solutions
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Industry-specific support services",
                "Specialized project-based assistance",
                "Hybrid service packages",
                "Seasonal or campaign-based support",
                "Department-specific solutions",
                "White-label options available",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 border border-white/10 px-4 py-3 hover:border-white/20 transition-colors duration-150"
                >
                  <Check size={14} className="text-gold shrink-0" />
                  <span className="text-white/70 text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-medium text-white mb-5 uppercase tracking-widest">
            Ready to Optimize Your Business Operations?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 font-light">
            Let&apos;s create a customized support solution that fits your
            business perfectly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-semibold uppercase tracking-wider hover:bg-brand-bg transition-colors duration-150"
          >
            Get Your Free Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
