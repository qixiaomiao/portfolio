import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "项目 · 半夏",
  description: "半夏的作品与项目案例",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-[var(--space-page)]">
      <section className="py-[var(--space-section)]">
        <h1
          className="font-medium text-brand-text"
          style={{ fontSize: "var(--text-h1)" }}
        >
          项目
        </h1>
        <p className="mt-[var(--space-element)] max-w-xl text-brand-text-muted">
          以下为部分项目摘要，完整内容与细节请查看 PDF 作品集。
        </p>
        <ul className="mt-[var(--space-block)] grid list-none grid-cols-1 gap-[var(--space-block)] p-0 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.urlSlug} className="min-h-0">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
