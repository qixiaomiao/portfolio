"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import Link from "next/link";

const FAN_CARD_HEIGHT = 320;

type Props = { project: Project; isActive?: boolean; fixedSize?: boolean };

export function ProjectCard({ project, isActive = false, fixedSize = false }: Props) {
  const [hovered, setHovered] = useState(false);
  const flipped = isActive || hovered;

  return (
    <Link
      href={`/projects/${project.urlSlug}`}
      className={`block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-hero-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] rounded-xl ${fixedSize ? "w-full h-full min-h-0" : "flex-shrink-0 w-[200px] sm:w-[220px]"}`}
      style={{ perspective: "1200px" }}
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
        {/* Glow on hover */}
        <div
          className="absolute -inset-2 rounded-2xl -z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.35), transparent 70%)`,
            filter: "blur(12px)",
            opacity: flipped ? 1 : 0,
          }}
        />

        <div
          className={`relative w-full rounded-xl border bg-brand-surface shadow-lg transition-[box-shadow,border-color] duration-300 ${fixedSize ? "h-[320px]" : "h-[300px] sm:h-[330px]"}`}
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease",
            borderColor: flipped ? "rgba(99,102,241,0.5)" : "var(--color-border)",
            boxShadow: flipped ? "0 0 30px -5px rgba(99,102,241,0.4)" : "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          }}
        >
          {/* Front face: 仅中文标题，自动换行不溢出 */}
          <div
            className="absolute inset-0 flex flex-col rounded-xl overflow-hidden bg-brand-surface p-4"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
            }}
          >
            <p
              className="text-brand-text font-medium leading-snug break-words overflow-hidden hyphens-auto"
              style={{
                fontSize: fixedSize ? "var(--text-body)" : "var(--text-small)",
                lineHeight: 1.45,
                display: "-webkit-box",
                WebkitLineClamp: fixedSize ? 6 : 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {project.summary}
            </p>
          </div>

          {/* Back face */}
          <div
            className="absolute inset-0 flex flex-col rounded-xl overflow-hidden bg-brand-surface p-4"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <h3
              className="font-medium text-brand-text line-clamp-2 mb-2 break-words"
              style={{ fontSize: "var(--text-small)", lineHeight: 1.35 }}
            >
              {project.title}
            </h3>
            <p className="text-brand-text-muted text-xs leading-relaxed flex-1 min-h-0 break-words overflow-hidden hyphens-auto" style={{ display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical" }}>
              {project.summary}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-border/80 px-2 py-0.5 font-mono text-[10px] text-brand-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-3 inline-flex items-center text-[var(--color-hero-accent)] text-xs font-medium">
              查看详情 →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
