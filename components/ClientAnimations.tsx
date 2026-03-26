"use client";

import dynamic from "next/dynamic";

const ScrollProgress = dynamic(() => import("@/components/gsap/ScrollProgress"), { ssr: false });
const MagneticCursor = dynamic(() => import("@/components/gsap/MagneticCursor"), { ssr: false });

export default function ClientAnimations() {
  return (
    <>
      <ScrollProgress />
      <MagneticCursor />
    </>
  );
}
