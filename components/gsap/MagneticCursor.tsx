"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MagneticCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // Center transform origin
    gsap.set([ring, dot], { xPercent: -50, yPercent: -50 });

    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        isVisible = true;
        gsap.to([ring, dot], { opacity: 1, duration: 0.3 });
      }
      // Dot follows instantly
      gsap.set(dot, { x: e.clientX, y: e.clientY });
      // Ring follows with lag
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    const onEnter = () => {
      gsap.to(ring, {
        scale: 2.2,
        borderColor: "rgba(201,169,98,0.9)",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };

    const onLeave = () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: "rgba(201,169,98,0.45)",
        duration: 0.4,
        ease: "elastic.out(1,0.6)",
      });
      gsap.to(dot, { scale: 1, duration: 0.3 });
    };

    document.addEventListener("mousemove", onMouseMove);

    const targets = document.querySelectorAll("a, button");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    document.documentElement.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold/45 pointer-events-none z-[999]"
        style={{ opacity: 0 }}
        aria-hidden
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold pointer-events-none z-[999]"
        style={{ opacity: 0 }}
        aria-hidden
      />
    </>
  );
}
