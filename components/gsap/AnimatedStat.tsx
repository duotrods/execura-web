"use client";
import { useEffect, useRef } from "react";

interface Props {
  value: string; // e.g. "500+", "98%", "5+"
  label: string;
}

export default function AnimatedStat({ value, label }: Props) {
  const numRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!numRef.current) return;

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return;
    const target = parseInt(match[1], 10);
    const suffix = match[2] ?? "";
    const el = numRef.current;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let stInstance: any = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let tween: any = null;

    Promise.all([
      import("gsap").then((m) => m.gsap),
      import("gsap/ScrollTrigger").then((m) => m.ScrollTrigger),
    ]).then(([gsap, ScrollTrigger]) => {
      gsap.registerPlugin(ScrollTrigger);
      if (!el) return;
      const counter = { val: 0 };
      stInstance = ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        onEnter: () => {
          tween = gsap.to(counter, {
            val: target,
            duration: 1.8,
            ease: "power3.out",
            onUpdate() { el.textContent = Math.round(counter.val) + suffix; },
            onComplete() { el.textContent = value; },
          });
        },
        onLeaveBack: () => {
          tween?.kill();
          counter.val = 0;
          el.textContent = "0";
        },
      });
    });

    return () => {
      tween?.kill();
      stInstance?.kill();
    };
  }, [value]);

  return (
    <div className="text-center">
      <div
        ref={numRef}
        className="font-display text-2xl lg:text-3xl font-semibold text-gold mb-1 tracking-wider tabular-nums"
      >
        0
      </div>
      <div className="text-sm text-white/60 uppercase tracking-widest">{label}</div>
    </div>
  );
}
