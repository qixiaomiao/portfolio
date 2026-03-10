"use client";

type Props = { className?: string };

export function SplineViewer({ className }: Props) {
  return (
    <div
      className={`relative h-[400px] w-full overflow-hidden rounded-xl border border-brand-border sm:h-[500px] ${className ?? ""}`}
    >
      <iframe
        src="/spline-embed.html"
        title="Spline 3D"
        className="h-full w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
