import type { Metadata } from "next";
import { experiences } from "@/data/experience";
import { WorkExperienceBlock } from "@/components/WorkExperienceBlock";
import { AboutPageBackground } from "@/components/AboutPageBackground";

export const metadata: Metadata = {
  title: "关于 · 半夏",
  description: "关于半夏 — AI & 数据高级设计师",
};

const sectionTitleClass = "font-semibold text-white w-fit";
const sectionTitleStyle = {
  fontSize: "var(--text-h1)",
  letterSpacing: "0.02em",
} as const;
const aboutKeywordStyle = { color: "#6A6EF7", fontWeight: 500 } as const;

const TrophyIcon = () => (
  <span className="mt-0.5 shrink-0" aria-hidden style={{ color: "#d4a854" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      width={16}
      height={16}
    >
      <path
        fillRule="evenodd"
        d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.682-.513c.528.497 1.34.735 2.194.735a.75.75 0 0 0 .75-.75v-.858a48.97 48.97 0 0 0-2.25-.75V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.682-.513c.528.497 1.34.735 2.194.735.656 0 1.218-.279 1.634-.658a48.882 48.882 0 0 0 6.682-.513.75.75 0 0 0-.658-.744ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.75 15a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
        clipRule="evenodd"
      />
    </svg>
  </span>
);

export default function AboutPage() {
  return (
    <>
      <AboutPageBackground />
      <div className="relative z-20 pointer-events-none">
        <div className="pointer-events-auto mx-auto max-w-6xl px-4 sm:px-6">
          <section
            className="py-[var(--space-section)]"
            style={{ paddingBottom: "var(--space-section)" }}
          >
          {/* 1. 关于我 — 标题放大加粗 + 细下划线 */}
          <h1
            className={sectionTitleClass}
            style={sectionTitleStyle}
          >
            关于我
          </h1>
          <div
            className="mt-8 max-w-[600px] space-y-3"
            style={{
              lineHeight: 1.6,
              letterSpacing: "0.02em",
              color: "var(--color-about-body)",
            }}
          >
            <p>
              以{" "}
              <strong style={aboutKeywordStyle}>AI 原生设计思维</strong>{" "}
              为核心，聚焦数据产品与多模态交互体验创新；
            </p>
            <p>
              擅长拆解复杂业务逻辑与 AI 技术边界，通过「
              <strong style={aboutKeywordStyle}>可信设计、过程透明、数据溯源</strong>
              」降低 AI 幻觉风险；
            </p>
            <p>
              具备成熟的{" "}
              <strong style={aboutKeywordStyle}>企业级产品架构</strong>{" "}
              与系统设计能力，能够独立负责核心模块规划、体验落地与迭代优化；
            </p>
            <p>
              坚持以用户价值与业务目标为导向，让 AI 与数据真正转化为{" "}
              <strong style={aboutKeywordStyle}>可落地、可复用、可规模化</strong>{" "}
              的生产力。
            </p>
          </div>

          {/* 2. 技能与方向 — 标签填充渐变 + 小圆角 + hover */}
          <h2
            className={`mt-[60px] ${sectionTitleClass}`}
            style={{ fontSize: "var(--text-h2)", letterSpacing: "0.02em" }}
          >
            技能与方向
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3 list-none pl-0">
            {[
              "AI 产品设计",
              "数据可视化",
              "用户研究",
              "系统设计",
              "B 端 / 中后台",
            ].map((skill) => (
              <li
                key={skill}
                className="rounded-md border px-3 py-2 text-sm font-normal transition-all duration-200 hover:scale-[1.02] hover:border-[rgba(99,102,241,0.6)] hover:bg-[rgba(100,120,255,0.22)]"
                style={{
                  backgroundColor: "rgba(100, 120, 255, 0.15)",
                  borderColor: "rgba(99, 102, 241, 0.35)",
                  color: "var(--color-about-body)",
                }}
              >
                {skill}
              </li>
            ))}
          </ul>

          {/* 3. 工作经历 */}
          <h2
            className={`mt-[60px] ${sectionTitleClass}`}
            style={{ fontSize: "var(--text-h2)", letterSpacing: "0.02em" }}
          >
            工作经历
          </h2>
          <div className="mt-6 space-y-1.5">
            {experiences.map((exp, i) => (
              <WorkExperienceBlock
                key={i}
                experience={exp}
                index={i}
                isLast={i === experiences.length - 1}
              />
            ))}
          </div>

          {/* 4. 获奖记录 — 奖杯对齐、赛事/奖项区分字重与颜色 */}
          <h2
            className={`mt-[60px] ${sectionTitleClass}`}
            style={{ fontSize: "var(--text-h2)", letterSpacing: "0.02em" }}
          >
            获奖记录
          </h2>
          <ul
            className="mt-6 space-y-4 list-none pl-0"
            style={{ color: "var(--color-about-body)", lineHeight: 1.7 }}
          >
            <li className="flex items-center gap-3">
              <TrophyIcon />
              <span>
                <span className="font-normal opacity-90">即梦 AI 交互创新大赛</span>
                <span className="mx-2 opacity-50">|</span>
                <span className="font-semibold text-white">铜奖</span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <TrophyIcon />
              <span>
                <span className="font-normal opacity-90">VACAT 全球 AI 视觉创意大赛</span>
                <span className="mx-2 opacity-50">|</span>
                <span className="font-semibold text-white">优秀奖</span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <TrophyIcon />
              <span>
                <span className="font-normal opacity-90">海螺 AI 蒙太奇视频挑战赛</span>
                <span className="mx-2 opacity-50">|</span>
                <span className="font-semibold text-white">优秀奖</span>
              </span>
            </li>
          </ul>

          {/* 5. 学历 */}
          <h2
            className={`mt-[60px] ${sectionTitleClass}`}
            style={{ fontSize: "var(--text-h2)", letterSpacing: "0.02em" }}
          >
            学历
          </h2>
          <div
            className="mt-6 space-y-2"
            style={{ color: "var(--color-about-body)", lineHeight: 1.7 }}
          >
            <p>东华大学 设计管理硕士</p>
            <p>哈尔滨理工大学 工业设计学士</p>
          </div>
        </section>
        </div>
      </div>
    </>
  );
}
