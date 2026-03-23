"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  value: string; // e.g. "500+", "98%", "5+"
  label: string;
}

export default function AnimatedStat({ value, label }: Props) {
  const numRef = useRef<HTMLDivElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!numRef.current) return;

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return;
    const target = parseInt(match[1], 10);
    const suffix = match[2] ?? "";
    const el = numRef.current;
    const counter = { val: 0 };
    let tween: gsap.core.Tween | null = null;

    stRef.current = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      onEnter: () => {
        tween = gsap.to(counter, {
          val: target,
          duration: 1.8,
          ease: "power3.out",
          onUpdate() {
            el.textContent = Math.round(counter.val) + suffix;
          },
          onComplete() {
            el.textContent = value;
          },
        });
      },
      onLeaveBack: () => {
        tween?.kill();
        counter.val = 0;
        el.textContent = "0";
      },
    });

    return () => {
      tween?.kill();
      stRef.current?.kill();
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
