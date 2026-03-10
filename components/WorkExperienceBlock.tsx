"use client";

import { useRef, useEffect, useState } from "react";
import type { ExperienceItem } from "@/data/experience";

type Props = { experience: ExperienceItem; index: number; isLast?: boolean };

function highlightBold(text: string, boldList: string[] = []): React.ReactNode {
  if (boldList.length === 0) return text;
  const parts: React.ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < text.length) {
    let matched = false;
    for (const b of boldList) {
      if (text.slice(i, i + b.length) === b) {
        parts.push(<strong key={key++} className="font-semibold text-brand-text">{b}</strong>);
        i += b.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      const next = Math.min(
        ...boldList.map((b) => {
          const j = text.indexOf(b, i);
          return j === -1 ? text.length : j;
        })
      );
      parts.push(text.slice(i, next));
      i = next;
    }
  }
  return parts;
}

export function WorkExperienceBlock({ experience, index, isLast = false }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [focused, setFocused] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFocused(entry.isIntersecting),
      { threshold: 0.25, rootMargin: "-10% 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`relative flex gap-2 transition-colors duration-300 md:gap-3 ${
        focused ? "opacity-100" : "opacity-80"
      }`}
    >
      {/* 时间线左侧：圆点 + 时间 / 公司 / 角色 */}
      <div className="flex shrink-0 flex-col md:w-36">
        <div className="flex items-start gap-3">
          <span
            className={`mt-2 shrink-0 rounded-full border-2 ${
              focused
                ? "h-3 w-3 border-[var(--color-hero-accent)] bg-[var(--color-hero-accent)]"
                : "h-2.5 w-2.5 border-brand-text-muted bg-transparent"
            }`}
          />
          <div className="flex flex-col gap-1">
            <span className="text-brand-text text-sm font-medium">
              {experience.duration}
            </span>
            <span className="text-brand-text text-base font-bold">
              {experience.company}
            </span>
            <span className="text-brand-text-muted text-sm">
              {experience.title}
            </span>
          </div>
        </div>
        {!isLast && (
          <div className="ml-1.5 mt-2 h-16 w-px shrink-0 bg-brand-border md:h-24" />
        )}
      </div>

      {/* 右侧：项目名 + 条目 */}
      <div
        className={`min-w-0 flex-1 rounded-xl pt-0 pb-4 pl-4 pr-4 transition-colors md:pl-5 ${
          focused
            ? "bg-[var(--color-hero-accent)]/5"
            : "bg-brand-surface/30"
        }`}
      >
        <h3
          className="font-semibold text-brand-text"
          style={{ fontSize: "var(--text-h2)" }}
        >
          {experience.project}
        </h3>
        <ul className="mt-4 list-none space-y-2.5 pl-0">
          {experience.points.map((point, i) => (
            <li
              key={i}
              className="flex gap-2 text-brand-text-muted text-sm leading-relaxed"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-text-muted" />
              <span>
                <span className="font-medium text-brand-text">{point.label}：</span>
                {highlightBold(point.text, point.bold)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
