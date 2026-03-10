import Image from "next/image";
import { projects } from "@/data/projects";
import { ProjectCardFan } from "@/components/ProjectCardFan";

const INTRO_LINES = [
  <>擅长深度解析<strong className="text-[var(--color-hero-accent)]">业务逻辑</strong>，将复杂流程转化为直观易用的<strong className="text-[var(--color-hero-accent)]">界面</strong>，提升企业级产品的<strong className="text-[var(--color-hero-accent)]">用户体验</strong>与运营效率；</>,
  <>具备扎实的<strong className="text-[var(--color-hero-accent)]">系统架构</strong>思维，善于跨部门协作，与团队共同打造高度定制化且具有扩展性的<strong className="text-[var(--color-hero-accent)]">解决方案</strong>；</>,
  <>持续关注设计动态，热衷于探索并应用新技术推动业务 & <strong className="text-[var(--color-hero-accent)]">设计创新</strong>，致力于让<strong className="text-[var(--color-hero-accent)]">数据</strong>可信任、可组织、可自助使用，真正转化为<strong className="text-[var(--color-hero-accent)]">业务生产力</strong>。</>,
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section
        className="relative grid gap-8 pt-[var(--space-section)] pb-[var(--space-section)] md:grid-cols-[1fr,minmax(280px,400px)] md:items-center"
        style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}
      >
        <div>
          <p className="text-brand-text-muted text-xl sm:text-2xl">
            你好，我是{" "}
            <span className="font-bold text-brand-text">齐莹</span>
          </p>
          <h1
            className="mt-3 font-bold tracking-tight text-brand-text"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--leading-tight)" }}
          >
            AI & 数据高级设计师
          </h1>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-brand-text-muted leading-relaxed [&>li]:pl-1">
            {INTRO_LINES.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-[var(--color-hero-accent)] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              查看项目 →
            </a>
            <a
              href="/portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-brand-border bg-transparent px-5 py-2.5 text-sm font-medium text-brand-text transition-colors hover:border-brand-text-muted hover:bg-brand-surface"
            >
              下载 PDF 作品集
            </a>
          </div>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-[42%_58%_52%_48%_/56%_44%_56%_44%] bg-[var(--color-hero-accent)]/10">
            <Image
              src="/projects/photo.png"
              alt="齐莹"
              fill
              className="object-cover object-top -scale-x-100"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="pb-[var(--space-section)] scroll-mt-[var(--space-section)]"
        style={{ paddingBottom: "var(--space-section)" }}
      >
        <h2
          className="mb-[var(--space-block)] font-medium text-brand-text"
          style={{ fontSize: "var(--text-h1)" }}
        >
          项目
        </h2>
        <div className="w-full">
          <ProjectCardFan projects={projects} />
        </div>
      </section>
    </div>
  );
}
