import type { Metadata } from "next";
import { experiences } from "@/data/experience";
import { WorkExperienceBlock } from "@/components/WorkExperienceBlock";
import { AboutPageBackground } from "@/components/AboutPageBackground";

export const metadata: Metadata = {
  title: "关于 · 齐莹",
  description: "关于齐莹 — AI & 数据高级设计师",
};

export default function AboutPage() {
  return (
    <>
      {/* 背景：fixed 铺满视口，z-10，叠在内容后面 */}
      <AboutPageBackground />
      {/* 内容层：相对定位、参与文档流，从顶部开始无空白；z-20 叠在背景上；pointer-events 让空白处点击穿透到背景 */}
      <div className="relative z-20 pointer-events-none mx-auto max-w-6xl px-4 sm:px-6">
        <section className="pointer-events-auto py-[var(--space-section)]">
        <h1
          className="font-medium text-brand-text"
          style={{ fontSize: "var(--text-h1)" }}
        >
          关于我
        </h1>
        <div className="mt-[var(--space-block)] max-w-2xl space-y-4 text-brand-text-muted">
          <p>
            以 AI 原生设计思维为核心，聚焦数据产品与多模态交互体验创新；擅长拆解复杂业务逻辑与 AI 技术边界，通过可信设计、过程透明、数据溯源降低 AI 幻觉风险；具备成熟的企业级产品架构与系统设计能力，能够独立负责核心模块规划、体验落地与迭代优化；坚持以用户价值与业务目标为导向，让 AI 与数据真正转化为可落地、可复用、可规模化的生产力。
          </p>
        </div>
        <h2
          className="mt-[72px] font-medium text-brand-text"
          style={{ fontSize: "var(--text-h2)" }}
        >
          技能与方向
        </h2>
        <ul className="mt-[var(--space-block)] flex flex-wrap gap-2">
          {[
            "AI 产品设计",
            "数据可视化",
            "用户研究",
            "系统设计",
            "B 端 / 中后台",
          ].map((skill) => (
            <li
              key={skill}
              className="rounded border border-brand-border px-3 py-1.5 text-sm text-brand-text-muted"
            >
              {skill}
            </li>
          ))}
        </ul>

        <h2
          className="mt-[60px] font-medium text-brand-text"
          style={{ fontSize: "var(--text-h2)" }}
        >
          获奖记录
        </h2>
        <ul className="mt-[var(--space-block)] space-y-2 text-brand-text-muted list-none pl-0">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0" aria-hidden style={{ color: "#d4a854" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" width={16} height={16}>
                <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.682-.513c.528.497 1.34.735 2.194.735a.75.75 0 0 0 .75-.75v-.858a48.97 48.97 0 0 0-2.25-.75V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.682-.513c.528.497 1.34.735 2.194.735.656 0 1.218-.279 1.634-.658a48.882 48.882 0 0 0 6.682-.513.75.75 0 0 0-.658-.744ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.75 15a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
              </svg>
            </span>
            即梦AI交互创新大赛【 铜奖 】
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0" aria-hidden style={{ color: "#d4a854" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" width={16} height={16}>
                <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.682-.513c.528.497 1.34.735 2.194.735a.75.75 0 0 0 .75-.75v-.858a48.97 48.97 0 0 0-2.25-.75V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.682-.513c.528.497 1.34.735 2.194.735.656 0 1.218-.279 1.634-.658a48.882 48.882 0 0 0 6.682-.513.75.75 0 0 0-.658-.744ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.75 15a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
              </svg>
            </span>
            VACAT全球AI视觉创意大赛 【优秀奖】 ｜ 海螺AI蒙太奇视频挑战赛 【优秀奖】
          </li>
        </ul>

        <h2
          className="mt-[60px] font-medium text-brand-text"
          style={{ fontSize: "var(--text-h2)" }}
        >
          工作经历
        </h2>
        <div className="mt-[var(--space-block)] space-y-1.5">
          {experiences.map((exp, i) => (
            <WorkExperienceBlock
              key={i}
              experience={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>

        <h2
          className="mt-[60px] font-medium text-brand-text"
          style={{ fontSize: "var(--text-h2)" }}
        >
          学历
        </h2>
        <div className="mt-[var(--space-block)] space-y-2 text-brand-text-muted">
          <p>东华大学 设计管理硕士</p>
          <p>哈尔滨理工大学 工业设计学士</p>
        </div>
        </section>
      </div>
    </>
  );
}
