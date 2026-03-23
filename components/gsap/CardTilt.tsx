"use client";
import { useRef } from "react";
import { gsap } from "gsap";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function CardTilt({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / (rect.height / 2)) * -7;
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 7;
    gsap.to(el, {
      rotateX: rx,
      rotateY: ry,
      transformPerspective: 900,
      duration: 0.35,
      ease: "power2.out",
    });
    const shine = el.querySelector<HTMLElement>("[data-shine]");
    if (shine) {
      gsap.to(shine, {
        x: (x / rect.width) * 20 - 10,
        y: (y / rect.height) * 20 - 10,
        opacity: 0.06,
        duration: 0.35,
      });
    }
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
    });
    const shine = el.querySelector<HTMLElement>("[data-shine]");
    if (shine) {
      gsap.to(shine, { opacity: 0, duration: 0.4 });
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {/* Shine overlay */}
      <div
        data-shine
        className="absolute inset-0 bg-white pointer-events-none z-10"
        style={{ opacity: 0 }}
      />
      {children}
    </div>
  );
}
