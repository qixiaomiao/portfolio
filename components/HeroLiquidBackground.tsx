"use client";

import dynamic from "next/dynamic";

const LiquidEther = dynamic(() => import("@/components/LiquidEther"), {
  ssr: false,
});

export function HeroLiquidBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <LiquidEther
        mouseForce={13}
        cursorSize={110}
        isViscous={false}
        viscous={30}
        colors={["#5227FF", "#5898fd", "#ac94f0"]}
        autoDemo
        autoSpeed={0.6}
        autoIntensity={2.2}
        isBounce={false}
        resolution={0.5}
        className="!h-full !w-full"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
