"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

const CARD_WIDTH = 248;
const CARD_HEIGHT = 336;
/** 横向间距：每张卡相对前一张的偏移，略小于卡宽以保留错层重叠感，整体向左右展开铺满 */
const OVERLAP_OFFSET = 208;
/** 错层：中间略高、两侧略低，形成前后层次（单位 px） */
const STAGGER_Y = [10, 2, -10, 2, 10];

type Props = { projects: Project[] };

export function ProjectCardFan({ projects }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const n = projects.length;
  const totalWidth = CARD_WIDTH + (n - 1) * OVERLAP_OFFSET;

  return (
    <div
      className="relative w-full overflow-visible py-6"
      style={{ minHeight: CARD_HEIGHT + 64 }}
    >
      <div
        className="relative mx-auto"
        style={{ width: totalWidth }}
      >
        {projects.map((project, i) => {
          const isActive = activeIndex === i;
          const isHighlight = i === 1 || i === 3;
          const isCenter = i === 2;
          const hasActive = activeIndex !== null;
          const dimmed = hasActive && !isActive;

          const left = i * OVERLAP_OFFSET;
          const baseZ = isHighlight ? 12 : isCenter ? 10 : 8;

          return (
            <div
              key={project.urlSlug}
              className="absolute transition-all duration-300 ease-out"
              style={{
                left,
                top: STAGGER_Y[i] ?? 0,
                width: CARD_WIDTH,
                transform: isActive
                  ? "scale(1.08) translateY(-12px)"
                  : isHighlight || isCenter
                    ? "scale(1.04)"
                    : "scale(1)",
                zIndex: isActive ? 30 : baseZ + i,
                opacity: dimmed ? 0.72 : 1,
                filter:
                  (isHighlight || isCenter) && !hasActive
                    ? "drop-shadow(0 6px 20px rgba(99,102,241,0.22))"
                    : undefined,
              }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <ProjectCard project={project} isActive={isActive} fixedSize />
            </div>
          );
        })}
      </div>
    </div>
  );
}
