import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-[var(--space-block)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-brand-text-muted text-sm">
          © {year} 齐莹 · AI & 数据高级设计师
        </p>
        <div className="flex gap-6 text-sm">
          <Link
            href="/#projects"
            className="text-brand-text-muted hover:text-brand-text transition-colors"
          >
            项目
          </Link>
          <Link
            href="/contact"
            className="text-brand-text-muted hover:text-brand-text transition-colors"
          >
            联系
          </Link>
        </div>
      </div>
    </footer>
  );
}
