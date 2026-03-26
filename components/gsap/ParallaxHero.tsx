"use client";

import { useEffect } from "react";

/**
 * Renders nothing — targets data-hero-* attributes on the existing hero DOM.
 * Add to the hero section alongside other content.
 *
 * Required attributes in the parent:
 *   data-hero-section  → the <section> wrapper
 *   data-hero-grid     → the decorative grid div
 *   data-hero-content  → the text/CTA wrapper div
 */
export default function ParallaxHero() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    Promise.all([
      import("gsap").then((m) => m.gsap),
      import("gsap/ScrollTrigger").then((m) => m.ScrollTrigger),
    ]).then(([gsap, ScrollTrigger]) => {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.to("[data-hero-grid]", {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-hero-section]",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
        gsap.to("[data-hero-content]", {
          yPercent: -14,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-hero-section]",
            start: "45% top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
      cleanup = () => ctx.revert();
    });

    return () => cleanup?.();
  }, []);

  return null;
}
