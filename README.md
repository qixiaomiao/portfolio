# 齐莹 · 作品集网站

Next.js 作品集站点，含首页、关于、项目、联系；设计基于 CSS 变量（design tokens），便于统一调整风格。

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

若出现 **Cannot find module './xxx.js'** 或页面错乱，先清理构建缓存再启动：

```bash
rm -rf .next && npm run dev
```

## 使用你的 PDF 作品集

1. 将你的 PDF 文件复制到 **`public/`** 目录。
2. 命名为 **`portfolio.pdf`**（或任意文件名，见下）。
3. 若使用其他文件名，在 **`app/page.tsx`** 中把「下载 PDF 作品集」按钮的 `href` 改为 `/你的文件名.pdf`。

例如当前项目根目录的 `AI&数据高级设计师-齐莹.pdf`，可复制为：

```bash
cp "AI&数据高级设计师-齐莹.pdf" public/portfolio.pdf
```

## 填写内容

- **项目列表**：编辑 **`data/projects.ts`**，按现有格式增删改项目（标题、摘要、角色、标签、年份等）。
- **关于页**：编辑 **`app/about/page.tsx`** 中的自我介绍与技能标签。
- **联系页**：编辑 **`app/contact/page.tsx`**，填入邮箱与其它链接。

## 设计令牌

颜色、间距、字号在 **`app/globals.css`** 的 `:root` 中定义。修改这些变量即可全局生效；如需浅色主题，可使用根元素 class `theme-light`。

## 构建与部署

```bash
npm run build
npm start
```

可部署到 [Vercel](https://vercel.com)（关联本仓库即可自动构建与发布）。
