import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects, getProjectByUrlSlug, projectImageUrl } from "@/data/projects";
import { getProjectImageFilenames } from "@/lib/projectImages";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.urlSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectByUrlSlug(slug);
  if (!project) return { title: "项目" };
  return {
    title: `${project.title} · 半夏`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectByUrlSlug(slug);
  if (!project) notFound();

  const imageFilenames = getProjectImageFilenames(project.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="py-[var(--space-section)]">
        <header className="mt-0">
          <h1
            className="font-medium leading-tight text-brand-text"
            style={{ fontSize: "var(--text-h1)" }}
          >
            {project.title}
          </h1>
          <p className="mt-4 text-brand-text text-base leading-snug sm:text-lg">
            {project.summary}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded bg-brand-border px-2 py-0.5 font-mono text-xs text-brand-text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </header>

        <div className="mt-[var(--space-section)]">
          <h2 className="mb-[var(--space-block)] text-brand-text-muted text-sm font-medium">
            项目展示
          </h2>
          {imageFilenames.length > 0 ? (
            <ul className="flex list-none flex-col gap-[var(--space-block)] p-0">
              {imageFilenames.map((filename, i) => (
                <li key={filename}>
                  <figure className="overflow-hidden rounded-lg border border-brand-border">
                    <Image
                      src={projectImageUrl(project, filename)}
                      alt={`${project.title} - ${i + 1}/${imageFilenames.length}`}
                      width={1200}
                      height={800}
                      className="h-auto w-full object-contain"
                      unoptimized
                    />
                  </figure>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-brand-text-muted text-sm">暂无图片</p>
          )}
        </div>
      </section>
    </div>
  );
}
