"use client";
import { useRef, useEffect } from "react";
import type { gsap as GsapType } from "gsap";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const gsapRef = useRef<typeof GsapType | null>(null);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      gsapRef.current = gsap;
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const gsap = gsapRef.current;
    const el = ref.current;
    if (!gsap || !el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.28;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.28;
    gsap.to(el, { x, y, duration: 0.35, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    const gsap = gsapRef.current;
    if (!gsap) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
