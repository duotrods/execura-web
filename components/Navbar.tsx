"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Zap, Settings, UserCog, Briefcase, Globe, Target } from "lucide-react";

const serviceItems = [
  { href: "/services/automation", label: "Automations", icon: Zap },
  { href: "/services/admin-support", label: "Administrative Support", icon: Settings },
  { href: "/services/executive-assistance", label: "Executive Assistance", icon: UserCog },
  { href: "/services/operations", label: "Business Operations", icon: Briefcase },
  { href: "/services/website", label: "Website Services", icon: Globe },
  { href: "/services/lead-generation", label: "Lead Generation", icon: Target },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-primary border-b border-white/10" : "bg-transparent border-b border-white/20"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/assets/Icon.svg" alt="Execura" width={32} height={32} className="rounded" />
            <span className="font-display uppercase text-xl text-white  tracking-tight">
              Execura
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors duration-150 uppercase tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors duration-150 uppercase tracking-wide"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="flex items-center gap-1 px-3 py-2 text-sm text-white/70 hover:text-white transition-colors duration-150 uppercase tracking-wide"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-150 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-primary border border-white/10 shadow-xl">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-150 border-b border-white/5 last:border-0"
                      onClick={() => setServicesOpen(false)}
                    >
                      <item.icon size={15} className="text-gold shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors duration-150 uppercase tracking-wide"
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 border border-white/40 hover:border-white text-white text-sm font-medium tracking-wider uppercase transition-colors duration-150"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white/70 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10 px-6 py-4">
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              className="px-3 py-2.5 text-sm text-white/70 hover:text-white transition-colors duration-150 uppercase tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3 py-2.5 text-sm text-white/70 hover:text-white transition-colors duration-150 uppercase tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-white/70 hover:text-white transition-colors duration-150 uppercase tracking-wide"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-150 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-1 border-l border-white/10 pl-4 flex flex-col gap-1">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2.5 py-2 text-sm text-white/60 hover:text-white transition-colors duration-150"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      <item.icon size={14} className="text-gold shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="px-3 py-2.5 text-sm text-white/70 hover:text-white transition-colors duration-150 uppercase tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            <div className="mt-3 pt-3 border-t border-white/10">
              <Link
                href="/contact"
                className="block px-4 py-2.5 bg-secondary hover:bg-secondary/90 text-white text-sm font-medium rounded text-center transition-colors duration-150 uppercase tracking-wider"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
