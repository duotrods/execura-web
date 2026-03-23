"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    const ctx = gsap.context(() => {
      // Grid moves slower than scroll → sense of depth
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

      // Text content drifts up and fades as user scrolls past the fold
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

    return () => ctx.revert();
  }, []);

  return null;
}
