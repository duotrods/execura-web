"use client";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ClipReveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    let cleanup: (() => void) | undefined;

    Promise.all([
      import("gsap").then((m) => m.gsap),
      import("gsap/ScrollTrigger").then((m) => m.ScrollTrigger),
    ]).then(([gsap, ScrollTrigger]) => {
      gsap.registerPlugin(ScrollTrigger);
      if (!ref.current) return;
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ref.current,
          { clipPath: "inset(0 0 100% 0)", y: 18, opacity: 0 },
          {
            clipPath: "inset(0 0 0% 0)",
            y: 0,
            opacity: 1,
            duration: 0.85,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 88%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }, ref);
      cleanup = () => ctx.revert();
    });

    return () => cleanup?.();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
    >
      {children}
    </div>
  );
}
