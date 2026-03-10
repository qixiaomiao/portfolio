import type { Metadata } from "next";
import { experiences } from "@/data/experience";
import { WorkExperienceBlock } from "@/components/WorkExperienceBlock";

export const metadata: Metadata = {
  title: "关于 · 齐莹",
  description: "关于齐莹 — AI & 数据高级设计师",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="py-[var(--space-section)]">
        <h1
          className="font-medium text-brand-text"
          style={{ fontSize: "var(--text-h1)" }}
        >
          关于我
        </h1>
        <div className="mt-[var(--space-block)] max-w-2xl space-y-4 text-brand-text-muted">
          <p>
            擅长深度解析业务逻辑，将复杂流程转化为直观易用的界面，提升企业级产品的用户体验与运营效率；具备扎实的系统架构思维，善于跨部门协作，与团队共同打造高度定制化且具有扩展性的解决方案。
          </p>
        </div>
        <h2
          className="mt-[var(--space-section)] font-medium text-brand-text"
          style={{ fontSize: "var(--text-h2)" }}
        >
          技能与方向
        </h2>
        <ul className="mt-[var(--space-block)] flex flex-wrap gap-2">
          {[
            "AI 产品设计",
            "数据可视化",
            "Dashboard 设计",
            "用户研究",
            "体验策略",
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
          className="mt-[var(--space-section)] font-medium text-brand-text"
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
      </section>
    </div>
  );
}
