import fs from "fs";
import path from "path";

const IMAGE_EXT = /\.(png|jpg|jpeg|webp)$/i;

/** 按数字排序文件名，如 4.png, 5.png, ..., 10.png */
function sortByNumber(a: string, b: string): number {
  const numA = parseInt(a.replace(/\D/g, ""), 10) || 0;
  const numB = parseInt(b.replace(/\D/g, ""), 10) || 0;
  return numA - numB;
}

/**
 * 从 public/projects/<slug>/ 读取图片文件名列表，按数字顺序排序。
 * 仅服务端调用（build 或 request 时）。出错时返回 []，避免拖垮整站。
 */
export function getProjectImageFilenames(slug: string): string[] {
  if (!slug || slug.includes("..") || path.isAbsolute(slug)) return [];
  try {
    const dir = path.join(process.cwd(), "public", "projects", slug);
    if (!fs.existsSync(dir)) return [];
    const files = fs.readdirSync(dir).filter((f) => IMAGE_EXT.test(f));
    return files.sort(sortByNumber);
  } catch {
    return [];
  }
}
