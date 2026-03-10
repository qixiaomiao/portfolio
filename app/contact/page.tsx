import type { Metadata } from "next";
import { SplineViewer } from "@/components/SplineViewer";

export const metadata: Metadata = {
  title: "联系 · 齐莹",
  description: "与齐莹取得联系",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="py-[var(--space-section)]">
        <h1
          className="font-medium text-brand-text"
          style={{ fontSize: "var(--text-h1)" }}
        >
          联系
        </h1>
        <p className="mt-[var(--space-block)] max-w-xl text-brand-text-muted">
          如有合作或交流意向，欢迎通过以下方式联系。
        </p>
        <div className="relative mt-[var(--space-section)]">
          <SplineViewer />
          <div className="absolute bottom-[20%] left-0 right-0 flex justify-center px-4 pointer-events-none">
            <div className="pointer-events-auto flex flex-col gap-5 sm:flex-row sm:gap-8">
              <a
                href="tel:18645921719"
                className="rounded-2xl border border-white/20 bg-white/10 px-8 py-6 shadow-lg backdrop-blur-md transition-colors hover:bg-white/15 min-w-[240px] sm:min-w-[280px]"
              >
                <p className="text-brand-text-muted text-sm">联系电话</p>
                <p className="mt-2 text-lg font-medium text-brand-text">18645921719</p>
              </a>
              <a
                href="mailto:qiying625@hotmail.com"
                className="rounded-2xl border border-white/20 bg-white/10 px-8 py-6 shadow-lg backdrop-blur-md transition-colors hover:bg-white/15 min-w-[240px] sm:min-w-[280px]"
              >
                <p className="text-brand-text-muted text-sm">联系邮箱</p>
                <p className="mt-2 text-lg font-medium text-brand-text break-all">qiying625@hotmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
