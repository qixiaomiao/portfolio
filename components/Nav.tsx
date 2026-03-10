"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "首页" },
  { href: "/#projects", label: "项目" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-bg/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="主导航"
      >
        <Link
          href="/"
          className="font-medium text-brand-text hover:text-brand-accent transition-colors"
        >
          portfolio
        </Link>
        <ul className="flex gap-6">
          {links.map(({ href, label }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : href === "/#projects"
                  ? pathname === "/"
                  : pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-brand-text font-medium"
                      : "text-brand-text-muted hover:text-brand-text"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
