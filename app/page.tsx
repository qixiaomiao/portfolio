import Image from "next/image";
import { projects } from "@/data/projects";
import { ProjectCardFan } from "@/components/ProjectCardFan";
import { ContactPreloader } from "@/components/ContactPreloader";

const introKeywordClass = "font-semibold text-[#6A6EF7]";
const INTRO_LINES = [
  <>擅长<strong className={introKeywordClass}>AI 与数据</strong>驱动的<strong className={introKeywordClass}>产品设计</strong>，深度解析<strong className={introKeywordClass}>业务逻辑</strong>与<strong className={introKeywordClass}>AI 能力</strong>边界，将复杂的<strong className={introKeywordClass}>多模态</strong>交互、<strong className={introKeywordClass}>Agent</strong> 流程转化为直观易用、可信可控的<strong className={introKeywordClass}>企业级体验</strong>，提升产品落地效率与决策价值；</>,
  <>具备<strong className={introKeywordClass}>AI 产品</strong><strong className={introKeywordClass}>系统架构</strong>思维与全局视野，善于跨团队协作，共同打造可拓展、可解释、高可靠性的<strong className={introKeywordClass}>AI 解决方案</strong>；</>,
  <>持续深耕<strong className={introKeywordClass}>AIGC</strong>与<strong className={introKeywordClass}>大模型</strong>应用设计，专注通过<strong className={introKeywordClass}>可信设计</strong>、<strong className={introKeywordClass}>可控交互</strong>、<strong className={introKeywordClass}>数据可追溯</strong>机制降低 AI 幻觉风险，让<strong className={introKeywordClass}>数据</strong>可信任、可组织、可自助使用，真正转化为<strong className={introKeywordClass}>企业核心生产力</strong>。</>,
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <ContactPreloader />
      <section
        className="relative grid gap-8 pt-[var(--space-section)] pb-[var(--space-section)] md:grid-cols-[1fr,minmax(280px,400px)] md:items-center"
        style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}
      >
        <div>
          <p className="text-xl sm:text-2xl leading-relaxed" style={{ color: "#e4e4e7" }}>
            你好，我是{" "}
            <span className="font-bold text-brand-text">半夏</span>
          </p>
          <h1
            className="mt-3 font-bold tracking-tight text-brand-text"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--leading-tight)" }}
          >
            AI & 数据高级设计师
          </h1>
          <ul className="mt-10 list-disc space-y-2 pl-5 leading-relaxed [&>li]:pl-1" style={{ color: "#e4e4e7" }}>
            {INTRO_LINES.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(37,99,235,0.4)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
              style={{
                background: "linear-gradient(135deg, #5c4fd8 0%, #5c4fd8 45%, #3b5bdb 75%, #2563eb 100%)",
                boxShadow: "0 0 16px rgba(92,79,216,0.3)",
              }}
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
        className="mt-10 pb-[var(--space-section)]"
        style={{ paddingBottom: "var(--space-section)" }}
      >
        <h2
          className="text-center font-semibold text-brand-text tracking-[0.08em] uppercase"
          style={{ fontSize: "var(--text-h2)" }}
        >
          核心能力
        </h2>
        <p className="mt-3 text-center text-sm text-brand-text-muted">
          围绕 AI & 数据产品，构建可信任、可落地、可扩展的产品设计与用户体验体系
        </p>
        <div className="mt-[var(--space-block)] grid gap-5 md:gap-7 md:grid-cols-2">
          {/* 01 AI 产品设计 */}
          <div className="rounded-2xl border border-brand-border bg-brand-surface/40 px-6 py-5 backdrop-blur-sm flex items-start gap-4">
            <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.07] font-mono text-lg font-medium tabular-nums text-brand-text-muted">
              01
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-brand-text">
                AI 产品设计
              </h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-brand-text-muted leading-relaxed [&>li]:pl-1">
                <li>大模型与生成式 AI 产品设计，覆盖从 0→1 到规模化落地</li>
                <li>Copilot、Agent、多模态交互与 AI 能力边界定义</li>
                <li>预期管理与体验约束设计，让 AI 可控、可解释</li>
              </ul>
            </div>
          </div>

          {/* 02 可信 & 可控设计 */}
          <div className="rounded-2xl border border-brand-border bg-brand-surface/40 px-6 py-5 backdrop-blur-sm flex items-start gap-4">
            <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.07] font-mono text-lg font-medium tabular-nums text-brand-text-muted">
              02
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-brand-text">
                可信 &amp; 可控设计
              </h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-brand-text-muted leading-relaxed [&>li]:pl-1">
                <li>过程透明、输出可校验，建立可追溯的信任机制</li>
                <li>可编辑、可干预、可回滚的人机协同与兜底设计</li>
                <li>企业级安全、合规与隐私体验设计</li>
              </ul>
            </div>
          </div>

          {/* 03 数据产品体验 */}
          <div className="rounded-2xl border border-brand-border bg-brand-surface/40 px-6 py-5 backdrop-blur-sm flex items-start gap-4">
            <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.07] font-mono text-lg font-medium tabular-nums text-brand-text-muted">
              03
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-brand-text">
                数据驱动设计优化
              </h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-brand-text-muted leading-relaxed [&>li]:pl-1">
                <li>数据锚定设计目标，替代主观判断</li>
                <li>用行为数据定位设计卡点，反推信息架构问题</li>
                <li>建立 “设计上线→数据验证→迭代优化” 闭环</li>
              </ul>
            </div>
          </div>

          {/* 04 系统架构与产品设计 */}
          <div className="rounded-2xl border border-brand-border bg-brand-surface/40 px-6 py-5 backdrop-blur-sm flex items-start gap-4">
            <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.07] font-mono text-lg font-medium tabular-nums text-brand-text-muted">
              04
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-brand-text">
                系统架构与产品设计
              </h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-brand-text-muted leading-relaxed [&>li]:pl-1">
                <li>0→1 企业级产品架构探索与落地</li>
                <li>可扩展、可复用设计体系，支撑业务规模化与迭代</li>
                <li>跨团队协作，共同打造高可用的 AI 解决方案</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="pb-[var(--space-section)] scroll-mt-[var(--space-section)]"
        style={{ paddingBottom: "var(--space-section)" }}
      >
        <h2
          className="mb-[var(--space-block)] text-center font-semibold text-brand-text"
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
