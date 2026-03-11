"use client";

import dynamic from "next/dynamic";

const PixelBlast = dynamic(() => import("@/components/PixelBlast"), { ssr: false });

/**
 * 关于页背景：fixed 铺满视口、不占文档流，叠在内容后面。
 * 直接渲染 PixelBlast 根节点为固定层，保证点击能传到 canvas。
 */
export function AboutPageBackground() {
  return (
    <PixelBlast
      variant="circle"
      pixelSize={4}
      color="#320bb1"
      patternScale={2}
      patternDensity={1}
      enableRipples
      rippleSpeed={0.3}
      rippleThickness={0.1}
      rippleIntensityScale={1}
      speed={0.5}
      transparent
      edgeFade={0.25}
      className="fixed inset-0 w-full h-full"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 10,
      }}
    />
  );
}
