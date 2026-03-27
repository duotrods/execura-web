import { Zap, Settings, UserCog, Briefcase, Globe, Target, type LucideIcon } from "lucide-react";

export interface ServiceProcess {
  number: string;
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceWhyUs {
  title: string;
  description: string;
}

export interface ServicePackage {
  name: string;
  detail: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  longDescription: string[];
  features: string[];
  benefits: string[];
  idealFor: string;
  packages?: ServicePackage[];
  process: ServiceProcess[];
  whyUs: ServiceWhyUs[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
  heroImage: string;
  overviewImage: string;
  stats: ServiceStat[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const services: Service[] = [
  {
    slug: "automation",
    icon: Zap,
    title: "Automations",
    subtitle: "Streamline with Smart Automation",
    shortDescription:
      "Eliminate repetitive tasks, reduce errors, and scale your operations with intelligent automation solutions built around your tools and workflows.",
    description:
      "We design and implement intelligent automation solutions that eliminate repetitive tasks, reduce errors, and free your team to focus on high-value work.",
    longDescription: [
      "Running a business demands constant attention — but not every task deserves yours. Manual data entry, repetitive follow-ups, disjointed tools, and fragmented workflows quietly drain your team's capacity and introduce costly errors. Intelligent automation changes everything.",
      "At Execura, we design and implement custom automation solutions that connect your tools, streamline your processes, and eliminate the friction that slows your business down. Whether you're looking to automate a single repetitive process or overhaul your entire operational pipeline, we have the expertise to make it happen.",
      "Our automation specialists work with industry-leading platforms — including Zapier, Make (formerly Integromat), n8n, and proprietary API integrations — to build solutions that fit seamlessly into your existing systems. The result: your team spends less time on low-value tasks and more time on the work that drives real growth.",
    ],
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
    idealFor:
      "Growing businesses, operations teams, and entrepreneurs looking to scale efficiently without proportionally increasing costs.",
    process: [
      {
        number: "01",
        title: "Discovery & Workflow Mapping",
        description:
          "We begin with an in-depth audit of your current workflows, tools, and pain points. We identify where time is being lost and which processes are the highest-impact candidates for automation.",
      },
      {
        number: "02",
        title: "Solution Design",
        description:
          "Our automation architects design a tailored solution for your specific needs. We create detailed workflow maps and automation logic before any configuration begins, so you can review and approve the approach.",
      },
      {
        number: "03",
        title: "Build & Integration",
        description:
          "We build and configure your automation workflows, connecting your existing tools and platforms. Every integration is developed and tested in a safe environment before it touches your live data.",
      },
      {
        number: "04",
        title: "Testing & Quality Assurance",
        description:
          "We run end-to-end tests with real data scenarios to verify reliability, catch edge cases, and validate error-handling before deployment. Nothing goes live until it's proven to work.",
      },
      {
        number: "05",
        title: "Launch & Handover",
        description:
          "We deploy your automations and provide comprehensive documentation and training so your team understands, manages, and can confidently maintain the new workflows.",
      },
      {
        number: "06",
        title: "Ongoing Optimization",
        description:
          "As your business evolves, so do your needs. We offer ongoing monitoring and optimization to ensure your automations continue to perform at their best as your tools and processes grow.",
      },
    ],
    whyUs: [
      {
        title: "Platform-Agnostic Expertise",
        description:
          "We're not tied to any single platform. We choose the right tool for the job — whether that's Zapier, Make, n8n, or custom API development — ensuring you get the best solution, not just the most convenient one for us.",
      },
      {
        title: "Business-First Thinking",
        description:
          "Our automations are designed around your business goals, not just technical possibilities. Every workflow we build has a clear purpose tied to saving time, reducing cost, or improving quality.",
      },
      {
        title: "Reliable, Documented Solutions",
        description:
          "We build automations with documentation and maintainability in mind, so you're never left with a black box. You'll always know what's running, why, and what to do if something changes.",
      },
    ],
    faqs: [
      {
        question: "What types of tasks can be automated?",
        answer:
          "Almost any repetitive, rule-based task is a candidate for automation. This includes lead routing, email sequences, data entry, report generation, invoice processing, appointment reminders, social media scheduling, CRM updates, and much more. If your team does the same thing more than a few times a week, we can almost certainly automate it.",
      },
      {
        question: "Do I need technical knowledge to manage automated workflows?",
        answer:
          "Not at all. We design automations so they run in the background without requiring technical oversight from your team. We also provide training and clear documentation so your team feels confident managing and monitoring them day to day.",
      },
      {
        question: "How long does it take to set up automations?",
        answer:
          "Simple, single-platform workflows can be deployed in a few days. More complex, multi-system automations typically take one to three weeks depending on scope and the number of integrations involved. We'll give you a clear timeline estimate after our initial discovery call.",
      },
      {
        question: "What happens if something breaks in an automated workflow?",
        answer:
          "We build error-handling and alert systems into all of our automations. If something fails, you'll be notified immediately with context about what went wrong. We also offer ongoing support packages to resolve any issues quickly and keep your workflows running smoothly.",
      },
    ],
    relatedSlugs: ["operations", "admin-support", "website"],
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    stats: [
      { value: "10+", label: "Hours Saved Per Week" },
      { value: "85%", label: "Error Reduction" },
      { value: "3x", label: "Faster Processing" },
      { value: "100%", label: "Documented & Maintained" },
    ],
    seo: {
      title: "Business Automation Services – Workflow, CRM & AI Automation | Execura",
      description:
        "Eliminate repetitive tasks with intelligent business automation. Workflow automation, CRM integrations, AI-powered tools, and custom solutions that save time, reduce errors, and scale your operations.",
      keywords:
        "business automation services, workflow automation, CRM automation, process automation, Zapier integrations, n8n automation, Make integrations, AI automation, task automation, business process automation",
    },
  },
  {
    slug: "admin-support",
    icon: Settings,
    title: "Administrative Support",
    subtitle: "Excellence in Business Operations",
    shortDescription:
      "Professional administrative support that handles the time-consuming tasks keeping your business organized — so your core team can focus on what they do best.",
    description:
      "Our administrative support services handle the essential but time-consuming tasks that keep your business organized and running smoothly.",
    longDescription: [
      "Administrative tasks are the backbone of a well-run business — but they shouldn't consume the time and energy of your highest-value people. When your executives, managers, and specialists are buried in document formatting, scheduling, and correspondence management, strategic work suffers.",
      "Execura's administrative support services take the operational load off your plate, providing professional, reliable assistance across all aspects of business administration. Our team acts as a seamless extension of yours — integrated, discreet, and always aligned with your standards.",
      "From creating polished board presentations to coordinating complex travel itineraries, we deliver administrative excellence that reflects the professionalism of your organization. Every task is handled with precision, consistency, and the attention to detail your business deserves.",
    ],
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
      "Professional quality deliverables every time",
      "Consistent processes and organized systems",
      "Reduced administrative burden on your core team",
      "More time for strategic, high-value activities",
    ],
    idealFor:
      "Business managers, department heads, professional services firms, and organizations needing dedicated administrative excellence without the cost of full-time hires.",
    process: [
      {
        number: "01",
        title: "Needs Assessment",
        description:
          "We begin by understanding your administrative requirements, existing workflows, tools, and preferred communication style. This ensures our team integrates smoothly and delivers value from day one.",
      },
      {
        number: "02",
        title: "Onboarding & Setup",
        description:
          "We establish clear processes, communication channels, and access protocols. Our structured onboarding minimizes disruption and gets us productive as quickly as possible.",
      },
      {
        number: "03",
        title: "Task Intake & Prioritization",
        description:
          "You submit tasks through your preferred channel — email, task management platform, or direct communication. We prioritize based on your deadlines and business impact.",
      },
      {
        number: "04",
        title: "Execution & Quality Review",
        description:
          "Every deliverable goes through internal quality review before it reaches you. We maintain standards that match — and often exceed — what you'd expect from an in-house team.",
      },
      {
        number: "05",
        title: "Delivery & Continuous Improvement",
        description:
          "We deliver on time, every time, and actively seek feedback to continuously refine our support. Our goal is to anticipate your needs before you have to ask.",
      },
    ],
    whyUs: [
      {
        title: "Corporate-Grade Quality",
        description:
          "Our administrative professionals have experience supporting senior leadership at major organisations. You receive the same calibre of work without the cost, overhead, and management burden of a full-time hire.",
      },
      {
        title: "Consistent, Systemized Processes",
        description:
          "We don't just complete tasks — we build systems. Your administration runs consistently regardless of volume fluctuations, so quality never dips when things get busy.",
      },
      {
        title: "Trusted Discretion",
        description:
          "We understand that administrative work often involves sensitive information. Our team operates with the highest standards of professionalism, confidentiality, and trustworthiness.",
      },
    ],
    faqs: [
      {
        question: "What types of documents can your team prepare?",
        answer:
          "We handle the full range of business documents: reports, proposals, presentations, meeting minutes, SOPs, newsletters, templates, and more. If it needs to be formatted, structured, or written professionally, we can handle it to the standard your business requires.",
      },
      {
        question: "How do I communicate tasks to your team?",
        answer:
          "We work within whatever system you prefer — email, Slack, Asana, Monday.com, or any other project management tool. We adapt to your workflow, not the other way around.",
      },
      {
        question: "Can you manage my executive's calendar?",
        answer:
          "Yes. Calendar management, meeting scheduling, and agenda preparation are core parts of our administrative support offering. For more complex executive scheduling and high-level executive support, our Executive Assistance service may be the better fit.",
      },
      {
        question: "Is there a minimum commitment required?",
        answer:
          "We offer flexible engagement models to suit different business needs and volumes. Contact us to discuss what structure works best for your situation — whether that's a set number of hours, a project basis, or ongoing retainer support.",
      },
    ],
    relatedSlugs: ["executive-assistance", "operations", "automation"],
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    stats: [
      { value: "500+", label: "Tasks Handled Monthly" },
      { value: "100%", label: "On-Time Delivery" },
      { value: "40%", label: "Cost Saving vs. Full-Time" },
      { value: "24h", label: "Average Turnaround" },
    ],
    seo: {
      title: "Virtual Administrative Support Services | Execura Support Solutions",
      description:
        "Professional virtual administrative support including document preparation, scheduling, travel coordination, and data management. Free your team from admin burden and focus on what matters most.",
      keywords:
        "virtual administrative support, administrative services, document preparation, business admin support, virtual assistant services, scheduling support, travel coordination, executive administrative support",
    },
  },
  {
    slug: "executive-assistance",
    icon: UserCog,
    title: "Executive Assistance",
    subtitle: "Strategic Support for Leaders",
    shortDescription:
      "High-calibre, discreet executive support for C-suite leaders, founders, and board members — so you can lead without the friction.",
    description:
      "Our executive assistants provide high-level support to executives, business owners, and senior leadership. We handle complex scheduling, strategic communication, and special projects.",
    longDescription: [
      "The most effective executives and business leaders share one thing in common: they protect their time fiercely. Every hour spent on coordination, correspondence, and logistics is an hour lost from strategic thinking, leadership, and driving growth.",
      "Execura's executive assistance service provides high-calibre, discreet support to the leaders who drive your organisation forward. Our executive assistants function as true strategic partners — anticipating needs, managing complexity, and ensuring that the people at the top of your business have the space to lead.",
      "We support C-suite executives, board members, founders, and senior leadership teams across a full spectrum of executive-level tasks. From orchestrating multi-timezone board retreats to managing sensitive stakeholder correspondence, our team delivers with the professionalism, judgment, and discretion that leadership demands.",
    ],
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
      "Enhanced executive productivity and focus",
      "Professional, polished representation",
      "Proactive problem-solving and anticipation",
      "Absolute discretion and confidentiality",
    ],
    idealFor:
      "C-suite executives, business owners, senior leadership, board members, and high-level decision-makers who need a trusted partner to manage complexity.",
    process: [
      {
        number: "01",
        title: "Executive Profile & Briefing",
        description:
          "We start with a detailed briefing to understand your working style, priorities, communication preferences, and the nuances of your role. The better we know you, the more effectively we can anticipate your needs.",
      },
      {
        number: "02",
        title: "Secure Access & Integration",
        description:
          "We establish secure, controlled access to the systems, calendars, and communication tools needed to support you effectively. Security and confidentiality are never an afterthought — they're the foundation.",
      },
      {
        number: "03",
        title: "Proactive Support Structure",
        description:
          "We don't wait to be asked — we anticipate. We set up monitoring and trigger points so we're ahead of your needs, managing potential issues before they reach your desk.",
      },
      {
        number: "04",
        title: "Ongoing Executive Support",
        description:
          "Day-to-day support runs seamlessly in the background. We handle correspondence, scheduling, logistics, and special projects while keeping you informed at exactly the level of detail you prefer.",
      },
      {
        number: "05",
        title: "Regular Alignment Reviews",
        description:
          "We conduct regular check-ins to ensure our support evolves alongside your priorities and that our focus always matches what matters most to you and your leadership team.",
      },
    ],
    whyUs: [
      {
        title: "True Strategic Partnership",
        description:
          "Our executive assistants understand business at a strategic level. We don't just follow instructions — we anticipate needs, flag potential issues, and bring solutions rather than problems to your attention.",
      },
      {
        title: "Discretion as a Foundation",
        description:
          "Every interaction is conducted with absolute professionalism and confidentiality. We handle sensitive information — from board strategy to personal logistics — with the care it demands.",
      },
      {
        title: "Availability Built Around Leadership",
        description:
          "Senior leadership doesn't operate on a standard schedule. Our executive support is designed to flex with the demands of your role, ensuring you have the backing you need when you need it most.",
      },
    ],
    faqs: [
      {
        question: "How is executive assistance different from standard administrative support?",
        answer:
          "Executive assistance operates at a higher level of complexity, discretion, and strategic involvement. Our executive assistants manage intricate multi-stakeholder situations, sensitive communications, and high-level projects that require sound judgement and professional credibility — well beyond standard administrative tasks.",
      },
      {
        question: "Can your team manage communications on behalf of an executive?",
        answer:
          "Yes. We can manage inbound correspondence, draft responses, and handle stakeholder communication on behalf of executives — always in the executive's voice and with their approval on sensitive or high-stakes matters.",
      },
      {
        question: "How do you ensure confidentiality?",
        answer:
          "All team members are bound by strict confidentiality agreements and operate under secure access protocols. We handle sensitive information with the same care as a trusted direct employee — with the added benefit of professional accountability structures.",
      },
      {
        question: "Can you support a board of directors?",
        answer:
          "Absolutely. We provide board coordination services including meeting preparation, agenda management, board pack compilation, and logistics coordination for board members and committees. Our team is experienced in the governance requirements that board support demands.",
      },
    ],
    relatedSlugs: ["admin-support", "operations", "automation"],
    heroImage:
      "/assets/executive.jpg",
    overviewImage:
      "/assets/executive2.jpg",
    stats: [
      { value: "C-Suite", label: "Leadership Supported" },
      { value: "100%", label: "Confidential" },
      { value: "2x", label: "Executive Productivity Gain" },
      { value: "24/7", label: "Availability" },
    ],
    seo: {
      title: "Executive Assistant Services for Business Leaders | Execura",
      description:
        "High-calibre executive assistant services for C-suite leaders, founders, and board members. Complex scheduling, stakeholder management, confidential project coordination, and strategic support.",
      keywords:
        "executive assistant services, executive assistance, C-suite support, board coordination, executive scheduling, virtual executive assistant, senior leadership support, confidential executive support, strategic assistant",
    },
  },
  {
    slug: "operations",
    icon: Briefcase,
    title: "Business Operations Support",
    subtitle: "Streamlining Your Business Functions",
    shortDescription:
      "Build the operational infrastructure your business needs to scale — with process design, vendor management, KPI tracking, and hands-on operational coordination.",
    description:
      "Our operations support services focus on improving business efficiency through process optimization, vendor management, and operational coordination.",
    longDescription: [
      "Operational inefficiency is one of the most expensive problems a growing business faces — and often one of the least visible. Unclear processes, manual tracking, vendor coordination breakdowns, and data silos quietly erode profitability and limit your ability to scale.",
      "Execura's business operations support team works to identify, systematize, and optimize the operational backbone of your organization. We develop the structures, processes, and tools that allow your business to grow smoothly without losing quality, consistency, or control.",
      "Whether you need help building your first set of standard operating procedures, require hands-on support coordinating vendors and performance tracking, or want a partner to manage operational coordination across departments, our specialists bring structured thinking and practical execution to every engagement.",
    ],
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
      "Improved operational efficiency and consistency",
      "Stronger vendor relationships and accountability",
      "Reduced operational costs and duplication",
      "Data-driven decision support through clear KPIs",
    ],
    idealFor:
      "Growing businesses, operations managers, and organizations seeking to optimize their operational efficiency and build the infrastructure to scale.",
    process: [
      {
        number: "01",
        title: "Operational Audit",
        description:
          "We begin by mapping your current operational landscape — processes, tools, vendors, data flows, and friction points. This gives us a clear baseline and reveals the highest-impact opportunities for improvement.",
      },
      {
        number: "02",
        title: "Prioritization & Roadmap",
        description:
          "Based on our findings, we work with you to prioritize improvements and create a structured action plan aligned with your business goals and resource reality.",
      },
      {
        number: "03",
        title: "Process Design & Documentation",
        description:
          "We develop clear, actionable SOPs and process documentation that codify exactly how your business operates — making it far easier to onboard, train, delegate, and scale.",
      },
      {
        number: "04",
        title: "Implementation & Coordination",
        description:
          "We execute the operational improvements — setting up tracking systems, coordinating vendor relationships, implementing new tools, and managing cross-departmental initiatives.",
      },
      {
        number: "05",
        title: "Monitoring & Performance Reporting",
        description:
          "We establish KPI tracking and regular reporting cadences so you have real-time visibility into operational performance and can make informed, data-driven decisions.",
      },
    ],
    whyUs: [
      {
        title: "Built to Scale",
        description:
          "We build for growth. Every process we design, every SOP we write is created with scalability in mind — so your operations can handle more volume without proportionally more complexity or cost.",
      },
      {
        title: "Cross-Industry Experience",
        description:
          "Our operations team has worked across diverse industries, bringing proven frameworks and best practices that we adapt intelligently to your specific context and constraints.",
      },
      {
        title: "Execution, Not Just Advice",
        description:
          "We don't just advise — we execute. Our team gets hands-on with your operations, implementing improvements and managing ongoing coordination so you see tangible results, not just recommendations.",
      },
    ],
    faqs: [
      {
        question: "What is an SOP and why does my business need one?",
        answer:
          "A Standard Operating Procedure (SOP) is a step-by-step document that outlines how a specific process should be performed consistently. SOPs ensure quality, reduce training time, protect your business against key-person dependency, and make delegation far more effective. As your business grows, well-documented processes become essential infrastructure.",
      },
      {
        question: "Can you help us select and implement new business tools?",
        answer:
          "Yes. We assist with tool evaluation, selection, implementation coordination, and team adoption. We take a platform-agnostic approach — recommending what's genuinely best for your needs rather than what's easiest for us to implement.",
      },
      {
        question: "How do you track business performance?",
        answer:
          "We work with your existing data sources and tools to establish meaningful KPI dashboards and reporting cadences. We can build tracking in tools you already use — spreadsheets, Monday.com, HubSpot, Notion — or recommend more robust solutions as your reporting needs mature.",
      },
      {
        question: "Is operations support useful for smaller businesses?",
        answer:
          "Absolutely. Smaller businesses often benefit most from operational structure precisely because they haven't yet built the formalized systems that larger organisations develop over time. Early investment in operational infrastructure makes growth significantly smoother, faster, and less chaotic.",
      },
    ],
    relatedSlugs: ["automation", "admin-support", "executive-assistance"],
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    overviewImage:
      "/assets/business.jpg",
    stats: [
      { value: "2x", label: "Efficiency Gains" },
      { value: "30%", label: "Cost Reduction" },
      { value: "50+", label: "SOPs Documented" },
      { value: "98%", label: "Process Compliance" },
    ],
    seo: {
      title: "Business Operations Support & Process Optimization | Execura",
      description:
        "Comprehensive business operations support including SOP development, vendor management, KPI tracking, and operational coordination. Streamline your business functions and build the infrastructure to scale.",
      keywords:
        "business operations support, process optimization, SOP development, vendor management, KPI tracking, operational efficiency, business process management, operations consulting, business systems",
    },
  },
  {
    slug: "website",
    icon: Globe,
    title: "Website Creation & Maintenance",
    subtitle: "Your Digital Presence, Perfected",
    shortDescription:
      "Professional, high-performing websites that reflect the quality of your business, convert visitors into clients, and keep working for you around the clock.",
    description:
      "Your website is often the first impression potential clients have of your business. Our website services deliver professional, modern websites that showcase your brand and drive results.",
    longDescription: [
      "In today's digital-first world, your website is your most important business asset — operating 24 hours a day as your primary sales representative, brand ambassador, and first impression all in one. A poorly designed or outdated website doesn't just look unprofessional; it actively costs you clients.",
      "Execura's website services deliver professional, high-performing websites that reflect the quality of your business, attract your ideal clients, and convert visitors into leads. We handle everything from initial strategy and design through to long-term maintenance and growth, so you can focus on running your business while we ensure your digital presence is always working at its best.",
      "Whether you're launching your very first website, redesigning an outdated one, or need a reliable partner to maintain and evolve your existing site, our team brings technical expertise and commercial thinking to every project — building websites that do more than just look good.",
    ],
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
      "Professional online presence that builds credibility instantly",
      "24/7 accessibility and lead generation for your business",
      "Cost-effective versus hiring full-time developers",
      "Improved search engine visibility from day one",
    ],
    idealFor:
      "New businesses, companies with outdated websites, service providers needing digital lead generation, and e-commerce businesses seeking professional online growth.",
    packages: [
      { name: "Starter Website", detail: "5-page professional website" },
      { name: "Business Website", detail: "10-page site with blog" },
      { name: "E-Commerce Website", detail: "Full online store with checkout" },
      { name: "Custom Website", detail: "Tailored to unique requirements" },
    ],
    process: [
      {
        number: "01",
        title: "Discovery & Strategy",
        description:
          "We begin by understanding your business, target audience, competitors, and goals. This strategic foundation ensures everything we build serves a clear commercial purpose — not just aesthetics.",
      },
      {
        number: "02",
        title: "Design & Wireframing",
        description:
          "We develop design concepts and wireframes for your approval before development begins. You see exactly what you're getting and have full creative input at this stage.",
      },
      {
        number: "03",
        title: "Development & Build",
        description:
          "Our developers build your site with a focus on speed, SEO, accessibility, and long-term maintainability. We write clean, well-structured code built to perform.",
      },
      {
        number: "04",
        title: "Content & SEO Setup",
        description:
          "We structure your content for search engine visibility, configure meta tags and schema markup, and integrate analytics tools — establishing a solid SEO foundation from day one.",
      },
      {
        number: "05",
        title: "Testing & Launch",
        description:
          "We test your site across devices, browsers, and screen sizes before launch. Every element is verified for performance and function before you go live.",
      },
      {
        number: "06",
        title: "Ongoing Maintenance & Growth",
        description:
          "Post-launch, we provide ongoing maintenance — updates, security monitoring, backups, performance optimization, and content changes — so your site stays fast, secure, and current.",
      },
    ],
    whyUs: [
      {
        title: "Commercial Focus, Not Just Design",
        description:
          "Beautiful websites that don't convert are expensive brochures. We build with your business goals in mind — every design decision is tied to user experience and measurable results.",
      },
      {
        title: "SEO-First Development",
        description:
          "Search engine optimization isn't an afterthought — it's baked into how we build. Site architecture, page speed, structured data, and content hierarchy are all considered from the very beginning.",
      },
      {
        title: "Full-Lifecycle Partnership",
        description:
          "We're not a build-and-disappear agency. We offer ongoing maintenance and support so your website grows alongside your business without you needing a new provider every time something changes.",
      },
    ],
    faqs: [
      {
        question: "What platforms do you build websites on?",
        answer:
          "We work with WordPress, Next.js, React, WooCommerce, and Shopify depending on your needs. For most small to mid-size businesses, WordPress provides the ideal balance of capability and ease of management. For higher-performance applications or e-commerce, we recommend Next.js or Shopify respectively.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A standard 5-page business website typically takes 2–4 weeks from kickoff to launch. More complex sites with custom functionality, e-commerce, or content-heavy pages may take 6–10 weeks. We'll provide a detailed timeline during your initial consultation.",
      },
      {
        question: "Do I own my website once it's built?",
        answer:
          "Yes, absolutely. You own everything — the design, the code, the content, and all associated accounts and credentials. We transfer full ownership to you at the point of delivery.",
      },
      {
        question: "What does your website maintenance service include?",
        answer:
          "Our maintenance service covers software and plugin updates, security monitoring, performance optimization, regular backups, uptime monitoring, and minor content updates. We proactively manage your site so issues are caught before they affect your visitors or business.",
      },
      {
        question: "Can you improve my existing website rather than rebuild it?",
        answer:
          "Yes. We offer website audits and improvement packages for existing sites. Depending on what's needed, targeted improvements are often more cost-effective than a full rebuild — and we'll always give you an honest assessment of which approach is right for your situation.",
      },
    ],
    relatedSlugs: ["automation", "admin-support", "operations"],
    heroImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1400&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    stats: [
      { value: "100+", label: "Sites Launched" },
      { value: "95+", label: "Core Web Vitals Score" },
      { value: "3x", label: "Faster Load Times" },
      { value: "SEO", label: "Optimized From Day One" },
    ],
    seo: {
      title: "Professional Website Design & Maintenance Services | Execura",
      description:
        "Custom website design and maintenance services for businesses. Responsive web design, WordPress, Next.js, e-commerce solutions, SEO optimization, and ongoing website management.",
      keywords:
        "website design services, website maintenance, web development, WordPress website, Next.js development, e-commerce website, responsive web design, SEO website, website creation, business website",
    },
  },
  {
    slug: "lead-generation",
    icon: Target,
    title: "Lead Generation",
    subtitle: "Fill Your Pipeline with Quality Prospects",
    shortDescription:
      "Targeted lead generation that identifies, qualifies, and delivers ready-to-convert prospects directly to your sales team — so you spend less time prospecting and more time closing.",
    description:
      "Our lead generation service builds a consistent pipeline of qualified prospects tailored to your ideal customer profile, using proven outreach strategies and research-backed targeting.",
    longDescription: [
      "Every business needs a steady flow of new clients — but building and managing a lead generation engine takes time, skill, and the right tools. Execura's Lead Generation service takes that burden off your plate entirely.",
      "We research, identify, and qualify prospects that match your ideal customer profile. Using a combination of outbound outreach, data enrichment, and personalized messaging, we deliver warm, interested leads directly into your pipeline — not just a list of names.",
      "Whether you're a startup looking to build your first client base or an established business scaling into new markets, our lead generation service gives you a reliable, repeatable system for growth — without the overhead of an in-house sales development team.",
    ],
    features: [
      "Ideal Customer Profile (ICP) development",
      "Prospect research and contact list building",
      "Email outreach and follow-up sequences",
      "LinkedIn prospecting and connection campaigns",
      "Lead qualification and scoring",
      "CRM data entry and pipeline management",
      "Weekly lead reports and performance tracking",
      "Market research and competitor analysis",
    ],
    benefits: [
      "Consistent flow of qualified, sales-ready leads",
      "Reduced time spent on manual prospecting",
      "Higher conversion rates through better targeting",
      "Scalable outreach without growing your headcount",
    ],
    idealFor:
      "Startups, SMEs, coaches, consultants, and service-based businesses that need a reliable pipeline of qualified prospects without the cost of a full in-house sales team.",
    process: [
      {
        number: "01",
        title: "ICP & Strategy Session",
        description:
          "We work with you to define your ideal customer profile — industry, company size, decision-maker roles, pain points, and buying triggers — to ensure every lead we deliver is genuinely relevant.",
      },
      {
        number: "02",
        title: "Research & List Building",
        description:
          "Our team manually researches and builds targeted prospect lists using LinkedIn, industry databases, and verified contact sources. Every lead is checked for accuracy before outreach begins.",
      },
      {
        number: "03",
        title: "Outreach & Engagement",
        description:
          "We launch personalized outreach campaigns via email and LinkedIn, with thoughtful follow-up sequences designed to start real conversations — not just generate opens.",
      },
      {
        number: "04",
        title: "Qualification & Handoff",
        description:
          "Interested responses are qualified against your criteria and handed off to your sales team ready for a call or demo — with full context on the prospect included.",
      },
      {
        number: "05",
        title: "Reporting & Optimization",
        description:
          "We provide weekly performance reports covering outreach volumes, response rates, and qualified leads. We continuously test and refine messaging to improve results over time.",
      },
    ],
    whyUs: [
      {
        title: "Quality Over Quantity",
        description:
          "We don't sell bulk lead lists. Every prospect is researched, verified, and matched to your ICP before outreach begins — so your team only speaks to people who are genuinely worth their time.",
      },
      {
        title: "Personalized, Not Spammy",
        description:
          "Our outreach is written to start genuine conversations, not flood inboxes. We craft messaging that reflects your brand voice and resonates with your target audience.",
      },
      {
        title: "Transparent Reporting",
        description:
          "You see exactly what's working. Weekly reports give you full visibility into outreach activity, response rates, and pipeline contribution — with actionable insights, not vanity metrics.",
      },
    ],
    faqs: [
      {
        question: "How long before I start seeing leads?",
        answer:
          "Most clients begin seeing initial responses within the first 2–3 weeks of outreach. A consistent flow of qualified leads typically builds over the first 30–60 days as campaigns are tested and optimized.",
      },
      {
        question: "Do you guarantee a certain number of leads?",
        answer:
          "We don't guarantee specific lead volumes, as results depend on your market, offer, and target audience. What we do guarantee is a professional, data-driven approach with full transparency — and continuous optimization to improve results over time.",
      },
      {
        question: "What outreach channels do you use?",
        answer:
          "We primarily use personalized email outreach and LinkedIn prospecting. Depending on your target market, we may also recommend additional channels. We always align outreach channels to where your ideal customers are most active.",
      },
      {
        question: "Can you integrate with my existing CRM?",
        answer:
          "Yes. We work with most major CRMs including HubSpot, Salesforce, Pipedrive, and Notion. Qualified leads are entered directly into your pipeline with all relevant contact information and outreach history included.",
      },
    ],
    relatedSlugs: ["admin-support", "executive-assistance", "automation"],
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    stats: [
      { value: "3x", label: "More Qualified Leads" },
      { value: "60%", label: "Less Time Prospecting" },
      { value: "2–3 wks", label: "To First Responses" },
      { value: "100%", label: "ICP-Matched Prospects" },
    ],
    seo: {
      title: "Lead Generation Services for B2B Businesses | Execura",
      description:
        "Professional lead generation services that identify, qualify, and deliver sales-ready prospects to your pipeline. Targeted outreach, LinkedIn prospecting, and CRM integration for consistent business growth.",
      keywords:
        "lead generation services, B2B lead generation, prospect research, outbound outreach, LinkedIn prospecting, sales pipeline, qualified leads, email outreach, lead qualification, business development",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
