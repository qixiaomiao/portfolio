import Image from "next/image";
import { projects } from "@/data/projects";
import { ProjectCardFan } from "@/components/ProjectCardFan";

const INTRO_LINES = [
  <>擅长<strong className="text-[var(--color-hero-accent)]">AI 与数据</strong>驱动的<strong className="text-[var(--color-hero-accent)]">产品设计</strong>，深度解析<strong className="text-[var(--color-hero-accent)]">业务逻辑</strong>与<strong className="text-[var(--color-hero-accent)]">AI 能力</strong>边界，将复杂的<strong className="text-[var(--color-hero-accent)]">多模态</strong>交互、<strong className="text-[var(--color-hero-accent)]">Agent</strong> 流程转化为直观易用、可信可控的<strong className="text-[var(--color-hero-accent)]">企业级体验</strong>，提升产品落地效率与决策价值；</>,
  <>具备<strong className="text-[var(--color-hero-accent)]">AI 产品</strong><strong className="text-[var(--color-hero-accent)]">系统架构</strong>思维与全局视野，善于跨团队协作，共同打造可拓展、可解释、高可靠性的<strong className="text-[var(--color-hero-accent)]">AI 解决方案</strong>；</>,
  <>持续深耕<strong className="text-[var(--color-hero-accent)]">AIGC</strong>与<strong className="text-[var(--color-hero-accent)]">大模型</strong>应用设计，专注通过<strong className="text-[var(--color-hero-accent)]">可信设计</strong>、<strong className="text-[var(--color-hero-accent)]">可控交互</strong>、<strong className="text-[var(--color-hero-accent)]">数据可追溯</strong>机制降低 AI 幻觉风险，让<strong className="text-[var(--color-hero-accent)]">数据</strong>可信任、可组织、可自助使用，真正转化为<strong className="text-[var(--color-hero-accent)]">企业核心生产力</strong>。</>,
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
            <span className="font-bold text-brand-text">半夏</span>
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
              alt="半夏"
              fill
              className="object-cover object-top -scale-x-100"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      <section
        className="pb-[var(--space-section)]"
        style={{ paddingBottom: "var(--space-section)" }}
      >
        <h2
          className="text-center font-medium text-brand-text"
          style={{ fontSize: "var(--text-h2)" }}
        >
          核心能力
        </h2>
        <p className="mt-3 text-center text-sm text-brand-text-muted">
          围绕AI&数据产品 构建可信任、可落地、可扩展的产品设计&用户体验
        </p>
        <div className="mt-[var(--space-block)] grid gap-4 md:gap-6 md:grid-cols-2">
          {/* AI 产品设计 */}
          <div className="rounded-2xl border border-brand-border bg-brand-surface/40 px-5 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #60a5fa 0%, #6366f1 50%, #a855f7 100%)",
                }}
                aria-hidden
              />
              <h3 className="text-sm font-semibold text-brand-text">
                AI 产品设计
              </h3>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-brand-text-muted leading-relaxed">
              <li>大模型应用 / 生成式 AI 产品设计</li>
              <li>Copilot、Agent、多模态交互设计</li>
              <li>AI 能力边界定义与预期管理</li>
            </ul>
          </div>

          {/* 可信 & 可控设计 */}
          <div className="rounded-2xl border border-brand-border bg-brand-surface/40 px-5 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #60a5fa 0%, #6366f1 50%, #a855f7 100%)",
                }}
                aria-hidden
              />
              <h3 className="text-sm font-semibold text-brand-text">
                可信 &amp; 可控设计
              </h3>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-brand-text-muted leading-relaxed">
              <li>过程透明化、输出可校验的信任建立</li>
              <li>可编辑、可干预、可回滚的人机协同机制</li>
              <li>企业级安全、合规、隐私设计</li>
            </ul>
          </div>

          {/* 数据产品体验 */}
          <div className="rounded-2xl border border-brand-border bg-brand-surface/40 px-5 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #60a5fa 0%, #6366f1 50%, #a855f7 100%)",
                }}
                aria-hidden
              />
              <h3 className="text-sm font-semibold text-brand-text">
                数据产品体验
              </h3>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-brand-text-muted leading-relaxed">
              <li>自然语言驱动自助式数据分析</li>
              <li>多模态数据标准化处理&结构化展示</li>
              <li>洞察发现与决策支持设计</li>
            </ul>
          </div>

          {/* 系统 & 架构思维 */}
          <div className="rounded-2xl border border-brand-border bg-brand-surface/40 px-5 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #60a5fa 0%, #6366f1 50%, #a855f7 100%)",
                }}
                aria-hidden
              />
              <h3 className="text-sm font-semibold text-brand-text">
                系统 &amp; 架构思维
              </h3>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-brand-text-muted leading-relaxed">
              <li>0→1 企业级产品架构与系统设计</li>
              <li>高可用、可扩展、可复用设计体系</li>
              <li>跨团队协同</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="pb-[var(--space-section)] scroll-mt-[var(--space-section)]"
        style={{ paddingBottom: "var(--space-section)" }}
      >
        <h2
          className="mb-[var(--space-block)] text-center font-medium text-brand-text"
          style={{ fontSize: "var(--text-h2)" }}
        >
          项目展示
        </h2>
        <div className="w-full">
          <ProjectCardFan projects={projects} />
        </div>
      </section>
    </div>
  );
}
