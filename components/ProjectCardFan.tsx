"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

const CARD_WIDTH = 220;
const CARD_HEIGHT = 320;
const FAN_OFFSET_X = 140;
const FAN_ROTATION = 8;

type Props = { projects: Project[] };

export function ProjectCardFan({ projects }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const n = projects.length;
  const half = (n - 1) / 2;

  return (
    <div
      className="relative w-full overflow-visible"
      style={{ height: CARD_HEIGHT + 64 }}
    >
      {projects.map((project, i) => {
        const isActive = activeIndex === i;
        const offsetX = (i - half) * FAN_OFFSET_X;
        const rotation = (i - half) * FAN_ROTATION;

        const hasActive = activeIndex !== null;
        const dimmed = hasActive && !isActive;

        return (
          <div
            key={project.urlSlug}
            className="absolute transition-all duration-300 ease-out"
            style={{
              left: `calc(50% - ${CARD_WIDTH / 2}px + ${offsetX}px)`,
              bottom: 0,
              width: CARD_WIDTH,
              transformOrigin: "50% 100%",
              transform: isActive
                ? "translateY(-24px) rotate(0deg) scale(1.08)"
                : `rotate(${rotation}deg)`,
              zIndex: isActive ? 30 : 5 + i,
              opacity: dimmed ? 0.72 : 1,
            }}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <ProjectCard project={project} isActive={isActive} fixedSize />
          </div>
        );
      })}
    </div>
  );
}
