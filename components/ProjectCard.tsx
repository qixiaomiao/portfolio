"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

const FAN_CARD_HEIGHT = 336;

/** 四角细线装饰（参考图角落图标） */
function CornerDecorators() {
  const cornerClass =
    "absolute w-4 h-4 border border-[var(--color-neon-border)] opacity-60 pointer-events-none";
  return (
    <>
      <div className={`left-3 top-3 border-r-0 border-b-0 rounded-tl ${cornerClass}`} aria-hidden />
      <div className={`right-3 top-3 border-l-0 border-b-0 rounded-tr ${cornerClass}`} aria-hidden />
      <div className={`left-3 bottom-3 border-r-0 border-t-0 rounded-bl ${cornerClass}`} aria-hidden />
      <div className={`right-3 bottom-3 border-l-0 border-t-0 rounded-br ${cornerClass}`} aria-hidden />
    </>
  );
}

type Props = { project: Project; isActive?: boolean; fixedSize?: boolean };

export function ProjectCard({ project, isActive = false, fixedSize = false }: Props) {
  const [hovered, setHovered] = useState(false);
  const flipped = isActive || hovered;

  const neonStyle = {
    "--card-bg": "var(--color-card-bg)",
    "--neon-border": "var(--color-neon-border)",
    "--neon-glow": "var(--color-neon-glow)",
    "--neon-glow-strong": "var(--color-neon-glow-strong)",
  } as React.CSSProperties;

  const cardGlow = flipped
    ? "0 0 20px rgba(99,102,241,0.35), 0 0 40px rgba(56,189,248,0.15)"
    : "0 0 12px rgba(99,102,241,0.2), 0 0 24px rgba(56,189,248,0.1)";

  const gradientBorder = "linear-gradient(135deg, rgba(56,189,248,0.85) 0%, rgba(99,102,241,0.9) 50%, rgba(139,92,246,0.85) 100%)";

  return (
    <Link
      href={`/projects/${project.urlSlug}`}
      className={`block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] rounded-[1.25rem] ${fixedSize ? "w-full h-full min-h-0" : "flex-shrink-0 w-[200px] sm:w-[220px]"}`}
      style={{ ...neonStyle, perspective: "1200px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{
          transform: flipped && !fixedSize ? "scale(1.05)" : "scale(1)",
          minHeight: fixedSize ? FAN_CARD_HEIGHT : undefined,
        }}
      >
        {/* 悬停时环境光晕 */}
        <div
          className="absolute -inset-2 rounded-[1.5rem] -z-10 transition-opacity duration-300"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, var(--color-neon-glow), transparent 70%)",
            filter: "blur(14px)",
            opacity: flipped ? 0.8 : 0,
          }}
        />

        {/* 蓝紫渐变描边：外层 1px 渐变 + 内层卡片背景 */}
        <div
          className="relative w-full rounded-[1.25rem] p-[1px] transition-[box-shadow] duration-300"
          style={{
            background: gradientBorder,
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease",
            boxShadow: cardGlow,
            height: fixedSize ? "336px" : "300px",
          }}
        >
          {/* 正面：无背景色 */}
          <div
            className="absolute inset-[1px] flex flex-col items-center justify-center rounded-[calc(1.25rem-1px)] overflow-hidden p-5"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
              backgroundColor: "var(--color-card-bg)",
            }}
          >
            <CornerDecorators />
            {/* 中央图标：使用项目对应图标图，无则显示首字母 */}
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 shrink-0 relative">
              {project.icon ? (
                <Image
                  src={project.icon}
                  alt=""
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              ) : (
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-xl text-white font-bold text-xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(56,189,248,0.9) 0%, rgba(99,102,241,0.9) 100%)",
                    boxShadow: "0 0 20px rgba(56,189,248,0.4)",
                  }}
                >
                  {project.title.charAt(0)}
                </div>
              )}
            </div>
            <p
              className="text-brand-text font-medium text-center leading-snug break-words overflow-hidden hyphens-auto"
              style={{
                fontSize: fixedSize ? "var(--text-body)" : "var(--text-small)",
                lineHeight: 1.45,
                display: "-webkit-box",
                WebkitLineClamp: fixedSize ? 5 : 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {project.summary}
            </p>
            {project.cardLabel && (
              <span className="mt-3 inline-flex items-center justify-center rounded-full bg-white/5 px-[10px] py-[6px] text-center text-xs text-brand-text-muted/85">
                {project.cardLabel}
              </span>
            )}
          </div>

          {/* 背面：蓝色渐变背景，上方标题，下方标签与链接 */}
          <div
            className="absolute inset-[1px] flex flex-col rounded-[calc(1.25rem-1px)] overflow-hidden p-4"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 30%, #1e40af 60%, #2563eb 85%, #3b82f6 100%)",
            }}
          >
            <CornerDecorators />
            <h3
              className="mt-4 font-semibold text-brand-text mb-2 break-words"
              style={{
                fontSize: fixedSize ? "var(--text-h2)" : "var(--text-h2)",
                lineHeight: 1.25,
              }}
            >
              {project.cardBackTitle ?? project.title}
            </h3>
            <p
              className="text-brand-text text-sm leading-relaxed break-words overflow-hidden hyphens-auto"
              style={{
                fontSize: fixedSize ? "var(--text-body)" : "var(--text-small)",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
              }}
            >
              {project.summary}
            </p>
            <div className="mt-auto pt-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-[10px] py-[6px] font-mono text-[10px] font-semibold text-brand-text-muted/85"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-3 inline-flex items-center pl-1.5 text-xs font-medium text-white">
                查看详情 →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
