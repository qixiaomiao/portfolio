"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const SPLINE_PRELOAD_DELAY_MS = 1500;

/**
 * 在主页挂载后于后台预加载联系页路由与 Spline 机器人动效，
 * 减少进入联系页时的等待时间。
 */
export function ContactPreloader() {
  const router = useRouter();
  const iframeAdded = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => {
      router.prefetch("/contact");

      if (typeof document === "undefined" || iframeAdded.current) return;
      const iframe = document.createElement("iframe");
      iframe.src = "/spline-embed.html";
      iframe.setAttribute("aria-hidden", "true");
      iframe.style.cssText =
        "position:fixed;left:-9999px;width:1px;height:1px;visibility:hidden;pointer-events:none;";
      document.body.appendChild(iframe);
      iframeAdded.current = true;
    }, SPLINE_PRELOAD_DELAY_MS);

    return () => clearTimeout(t);
  }, [router]);

  return null;
}
