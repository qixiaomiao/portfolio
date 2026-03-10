export type Project = {
  /** URL 里用的，无空格、小写、连字符，如 intelligent-data-integration-agent */
  urlSlug: string;
  /** public/projects/ 下文件夹名（含空格），用于读图片和图片路径 */
  slug: string;
  title: string;
  summary: string;
  role: string;
  tags: string[];
  year: string;
  image?: string;
  images: string[];
  href?: string;
}

/** 图片 URL 用文件夹名 slug（需编码） */
function projectBaseUrl(slug: string): string {
  return `/projects/${encodeURIComponent(slug)}`;
}

export function projectImageUrl(project: Project, filename: string): string {
  return `${projectBaseUrl(project.slug)}/${filename}`;
}

export function projectCoverUrl(project: Project): string | undefined {
  const file = project.image ?? project.images?.[0];
  return file ? projectImageUrl(project, file) : undefined;
}

export const projects: Project[] = [
  {
    urlSlug: "intelligent-data-integration-agent",
    slug: "Intelligent Data Integration and Management Agent",
    title: "Intelligent Data Integration and Management Agent",
    summary: "智能数据集成与管理 Agent 的设计与实现",
    role: "产品 / 数据设计",
    tags: ["AI Agent", "数据集成", "产品设计"],
    year: "2024",
    images: ["4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png"],
  },
  {
    urlSlug: "multimodal-data-processing-agent",
    slug: "Multimodal Data Processing And Analysis Agent",
    title: "Multimodal Data Processing And Analysis Agent",
    summary: "多模态数据处理与分析 Agent 的设计与实现",
    role: "产品 / 数据设计",
    tags: ["多模态", "数据分析", "AI Agent"],
    year: "2024",
    images: ["20.png", "21.png", "22.png", "23.png", "24.png", "25.png", "26.png", "27.png", "28.png", "29.png", "30.png", "31.png", "32.png", "33.png", "34.png", "35.png"],
  },
  {
    urlSlug: "ab-experiment-creation-reconstruction",
    slug: "AB Experiment  Creation and Reconstruction",
    title: "AB Experiment Creation and Reconstruction",
    summary: "AB 实验创建与重构相关设计与探索",
    role: "产品 / 实验设计",
    tags: ["AB 实验", "产品设计", "数据"],
    year: "2024",
    images: ["49.png", "50.png", "51.png", "52.png", "53.png", "54.png", "55.png", "56.png", "57.png", "58.png", "59.png", "60.png", "61.png", "62.png", "63.png", "64.png", "65.png"],
  },
  {
    urlSlug: "exploration-deepening-ab-experimental-ability",
    slug: "Exploration of  Deepening AB Experimental Ability",
    title: "Exploration of Deepening AB Experimental Ability",
    summary: "深化 AB 实验能力的探索与落地",
    role: "产品 / 实验设计",
    tags: ["AB 实验", "能力建设", "探索"],
    year: "2024",
    images: ["36.png", "37.png", "38.png", "39.png", "40.png", "41.png", "42.png", "43.png", "44.png", "45.png", "46.png", "47.png", "48.png"],
  },
  {
    urlSlug: "other-design-exploration-implementation",
    slug: "Other design  exploration and implementation",
    title: "Other Design Exploration and Implementation",
    summary: "其他设计探索与实现",
    role: "产品 / 设计",
    tags: ["设计探索", "落地实践"],
    year: "2024",
    images: ["66.png", "67.png", "68.png", "69.png", "70.png", "71.png", "72.png", "73.png", "74.png", "75.png", "76.png", "77.png", "78.png", "79.png"],
  },
]

/** 用 URL 里的 slug（无空格）查项目 */
export function getProjectByUrlSlug(urlSlug: string): Project | undefined {
  return projects.find((p) => p.urlSlug === urlSlug);
}
