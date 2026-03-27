import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#automation", label: "Automations" },
    { href: "/services#admin-support", label: "Administrative Support" },
    { href: "/services#executive-assistance", label: "Executive Assistance" },
    { href: "/services#operations", label: "Business Operations" },
    { href: "/services#website", label: "Website Services" },
    { href: "/services/lead-generation", label: "Lead Generation" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/assets/Icon.svg" alt="Execura" width={32} height={32} className="rounded" />
              <span className="text-white font-display uppercase text-xl tracking-tight">
                Execura
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Professional business support solutions that empower organizations
              to operate more efficiently and achieve their full potential.
            </p>
            <div className="flex items-center gap-3">
              {/* <a
                href="#"
                className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-150"
              >
                <Linkedin size={14} />
              </a> */}
              <a
                href="https://www.instagram.com/execurasupportph/"
                className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-150"
              >
                <Instagram  size={14} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61577433923967"
                className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-150"
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Mail size={15} className="mt-0.5 text-gold shrink-0" />
                <a href="mailto:execurasupport@gmail.com" className="hover:text-white transition-colors duration-150">
                  execurasupport@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone size={15} className="mt-0.5 text-gold shrink-0" />
                <a href="tel:+639515305128" className="hover:text-white transition-colors duration-150">
                  +63 951 530 5128
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone size={15} className="mt-0.5 text-gold shrink-0" />
                <a href="tel:+639518441342" className="hover:text-white transition-colors duration-150">
                  +63 951 844 1342
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="mt-0.5 text-gold shrink-0" />
                <span>Davao City, Philippines</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 bg-secondary hover:bg-secondary/90 text-white text-sm font-medium uppercase tracking-wider transition-colors duration-150"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Execura Support Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-white/70 transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors duration-150">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
