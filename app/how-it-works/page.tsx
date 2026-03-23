import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare, FileText, Rocket, BarChart2, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works - Execura Support Solutions Process | Getting Started Guide",
  description:
    "Discover how easy it is to get started with Execura Support Solutions. Our simple 5-step process ensures seamless integration and exceptional service delivery.",
};

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Free Consultation & Needs Assessment",
    description:
      "Your journey with Execura begins with a comprehensive consultation where we take the time to understand your business, challenges, and support requirements.",
    details: [
      "Schedule a convenient call or meeting with our team",
      "Discuss your current business operations and pain points",
      "Identify specific tasks and responsibilities you need support with",
      "Explore your goals and how support services can help achieve them",
      "Review your preferred communication methods and tools",
      "Discuss budget and timeline considerations",
    ],
    badge: "30–60 minutes",
    note: "This consultation is completely free with no commitment required.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Tailored Solution Development",
    description:
      "Based on our consultation, we develop a customized support solution specifically designed for your business needs.",
    details: [
      "Detailed service proposal outlining recommended support services",
      "Clear scope of work and task breakdown",
      "Suggested team composition for your account",
      "Service package recommendation or custom solution design",
      "Transparent pricing structure",
      "Estimated timeline and milestones",
    ],
    badge: "2–3 business days",
    note: "We welcome feedback and will refine the proposal until it perfectly matches your requirements.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Seamless Integration with Your Business",
    description:
      "Once you approve the proposal, we begin a structured onboarding process designed to integrate our team smoothly with your operations.",
    details: [
      "Week 1: Sign agreement, set up secure channels, meet your team",
      "Week 2: In-depth training on your specific business processes",
      "Week 3–4: Soft launch with close supervision and daily check-ins",
      "Access to all required tools, platforms, and systems",
      "Review of existing workflows and documentation",
      "Gradual increase in task complexity and volume",
    ],
    badge: "2–4 weeks",
    note: "You'll have direct access to an onboarding specialist throughout this process.",
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Consistent, High-Quality Support",
    description:
      "With onboarding complete, your dedicated team delivers exceptional support while maintaining clear communication and accountability.",
    details: [
      "Execute tasks according to agreed priorities and deadlines",
      "Daily status updates in your preferred format",
      "Weekly summary reports",
      "Immediate notification of urgent matters or blockers",
      "Regular check-in calls based on your needs",
      "Time tracking and task logging for full transparency",
    ],
    badge: "Ongoing",
    note: "Adapt to changing priorities quickly, scale hours up or down as business needs change.",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Continuous Improvement & Growth",
    description:
      "We don't just maintain the status quo—we actively work to improve our service and deliver increasing value over time.",
    details: [
      "Monthly performance reviews against established metrics",
      "Identification of workflow inefficiencies and automation opportunities",
      "Quarterly business reviews with leadership",
      "Capacity planning for upcoming periods",
      "Long-term partnership development",
      "As your business grows, our support grows with you",
    ],
    badge: "Monthly reviews",
    note: "Anticipating needs before they become urgent and suggesting solutions to emerging challenges.",
  },
];

const faqs = [
  {
    q: "How quickly can we get started?",
    a: "After approval of your proposal, we can begin onboarding within 3–5 business days. Full service delivery typically starts within 2–4 weeks depending on complexity.",
  },
  {
    q: "What if we need to change our service level?",
    a: "Our services are flexible. You can scale up or down with 30 days' notice, or we can discuss immediate adjustments for urgent needs.",
  },
  {
    q: "Do you work with our existing tools and systems?",
    a: "Yes! We adapt to your technology stack. We're experienced with most common business tools and can quickly learn any specialized systems you use.",
  },
  {
    q: "How is data security handled?",
    a: "We implement strict security protocols including NDAs, secure communication channels, limited access permissions, and compliance with data protection standards.",
  },
  {
    q: "What if we're not satisfied with the service?",
    a: "We have a 30-day satisfaction guarantee. If you're not completely satisfied, we'll work to resolve issues immediately or you can terminate the agreement without penalty.",
  },
  {
    q: "Can we start with a trial period?",
    a: "Yes, we offer trial periods for many clients. This allows you to experience our service quality before committing to a long-term arrangement.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-950 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Our Process
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Getting Started is Simple and Seamless
            </h1>
            <p className="text-stone-400 text-lg leading-relaxed">
              Our proven process ensures you receive the right support, delivered
              the right way, from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-stone-50 py-10 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-stone-600 text-center max-w-3xl mx-auto leading-relaxed">
            We&apos;ve refined our process to make getting started with
            professional business support as easy and efficient as possible.
            From initial contact to ongoing service delivery, every step is
            designed with your success in mind.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                  idx % 2 !== 0 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={idx % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                      <step.icon size={20} className="text-white" />
                    </div>
                    <div className="text-4xl font-bold text-stone-100">
                      {step.number}
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 leading-tight mb-4">
                    {step.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1.5 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm italic leading-relaxed border-l-2 border-amber-300 pl-4">
                    {step.note}
                  </p>
                </div>
                <div className={`bg-stone-900 rounded-2xl p-8 ${idx % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <h3 className="text-stone-300 text-xs font-semibold uppercase tracking-widest mb-5">
                    What Happens
                  </h3>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-stone-300">
                        <span className="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-stone-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
              Common Questions About Getting Started
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-stone-200 rounded-xl p-6">
                <h3 className="text-stone-900 font-semibold mb-3">{faq.q}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-600 py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-amber-100 text-lg leading-relaxed mb-10">
            Schedule your free consultation today and discover how Execura
            Support Solutions can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-600 font-semibold rounded hover:bg-stone-100 transition-colors duration-150"
            >
              Schedule Free Consultation
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-amber-400 text-white font-semibold rounded hover:bg-amber-500 transition-colors duration-150"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
