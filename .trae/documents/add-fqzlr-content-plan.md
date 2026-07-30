# 添加 Fqzlr 个人信息与文章内容到 Teek 文档站点的计划

## 一、摘要

将 `E:\AItool\zzwork\fqzlr-bk\.trae\fq` 下的个人信息文件和博客文章内容，按照 Teek 文档（https://vp.teek.top/）的操作指南，添加到当前 `vitepress-theme-teek` 项目（VitePress + Teek 主题文档站点）中。保留项目中原有的所有文章和页面内容不变。

## 二、当前状态分析

### 2.1 目标项目（vitepress-theme-teek）

- **框架**：VitePress + Teek 主题
- **文档目录**：`docs/`
- **配置**：
  - `docs/.vitepress/config.ts` — VitePress 配置
  - `docs/.vitepress/teek-config.ts` — Teek 主题配置（`teekHome: false`，文档模式）
- **内容结构**：按序号分区的文档（`01.指南/`, `10.配置/`, `15.主题开发/`, `20.资源/`, `30.生态/`）
- **导航**：首页、指南、配置、开发、资源、生态、功能页、赞赏
- **作者信息**：Teeker（Teek 主题作者）

### 2.2 源内容（fqzlr-bk\.trae\fq）

- **框架**：Astro（非 VitePress）
- **配置文件目录**：`config/` — 包含 Astro 格式的站点配置（`siteConfig.ts`, `profileConfig.ts`, `navBarConfig.ts`, `sidebarConfig.ts` 等）
- **文章目录**：`articles/posts/blog/` 及 `articles/posts/blog/博客相关/`
- **文章列表**（共 13 篇）：
  1. `blog-beauty-or-simple.md` — 博客好看还是简单好
  2. `01-域名注册教程.md` — 域名注册教程
  3. `02-零成本搭建个人博客.md` — 零成本搭建个人博客
  4. `03-Cloudflare-IP优选及文章编写.md` — Cloudflare IP 优选
  5. `04-搭建个人图床.md` — 搭建个人图床
  6. `05-Mizuki与Firefly主题对比.md` — 主题对比
  7. `06-Obsidian联动图床写博客.md` — Obsidian 联动图床
  8. `07-Obsidian轻量化笔记博客.md` — Obsidian 轻量化笔记
  9. `08-AI工具二改博客.md` — AI 工具二改博客
  10. `09-友链自动检测与截图.md` — 友链自动检测
  11. `10-Waline评论图床接入.md` — Waline 评论图床
  12. `obsidian-astro.md` — Obsidian + Astro
  13. `Twikoo 评论完整迁移 Waline 教程.mdx` — Twikoo 迁移 Waline 教程（含配套代码文件）
- **资源目录**：`assets/` — 头像、封面图、图标等图片资源
- **链接目录**：`links/` — 友链配置

### 2.3 关键差异

| 维度             | 源内容（Astro）                                             | 目标项目（VitePress + Teek）                                           |
| ---------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| 配置文件格式     | `config/*.ts`（Astro 类型）                                 | `teek-config.ts`（Teek 配置类型）                                      |
| 文章格式         | MDX（Astro frontmatter）                                    | Markdown（Teek frontmatter）                                           |
| 内容组织         | `src/content/posts/`                                        | `docs/` 下按序号分区                                                   |
| 文章 frontmatter | `published`, `tags`, `category`, `draft`, `pinned`, `image` | `title`, `date`, `permalink`, `categories`, `tags`, `top`, `sticky` 等 |

## 三、方案选项

### 方案 A：新增独立博客分区（推荐）

在现有 `docs/` 下新增一个独立的博客分区，将文章转化为 Teek 兼容的 Markdown 格式，保持现有文档结构不变。

**优点**：

- 完全不影响现有内容
- 符合 Teek 的结构化目录规范
- 便于维护和管理

**缺点**：

- 新增一个分区

### 方案 B：启用 Teek 博客模式

将 `teekHome` 设为 `true`，启用博客模式，将文章作为博客文章列表显示。

**优点**：

- 更接近博客体验
- 自动生成文章列表、分类、标签页

**缺点**：

- 会改变首页外观，影响现有文档站点的展示
- 需要大量配置调整

**选择方案 A**，原因：保持现有文档站点完整性，新增内容作为独立分区存在。

## 四、具体变更清单

### 4.1 新增文章目录（`docs/40.博客/`）

在 `docs/` 下创建新的博客分区，按照 Teek 结构化目录规范：

```
docs/40.博客/
├── 目录.md                  # 目录页（catalogue: true）
├── 01.建站随笔/
│   ├── 01.博客，是好看好，还是简单好？.md
│   ├── 02.域名注册教程.md
│   ├── 03.零成本搭建个人博客.md
│   ├── 04.Cloudflare-IP优选及文章编写.md
│   ├── 05.搭建个人图床.md
│   ├── 06.Mizuki与Firefly主题对比.md
│   ├── 07.Obsidian联动图床写博客.md
│   ├── 08.Obsidian轻量化笔记博客.md
│   ├── 09.AI工具二改博客.md
│   ├── 10.友链自动检测与截图.md
│   ├── 11.Waline评论图床接入.md
│   └── 12.Obsidian+Astro笔记博客.md
├── 02.教程/
│   └── 01.Twikoo评论完整迁移Waline教程.md
```

**每篇文章的 frontmatter 格式**（以第 1 篇为例）：

```yaml
---
title: 博客，是好看好，还是简单好？
date: 2026-07-23
permalink: /blog/build-beauty-or-simple
categories:
  - 博客
  - 建站随笔
tags:
  - 个人站点
  - 博客搭建
top: false
sticky: 0
description: 客观对比精致颜值风与极简风博客的优缺点，分析不同内容适合的页面风格，找到适合自己的博客设计方案。
---
```

### 4.2 复制资源文件

将 `assets/` 中的图片资源复制到 `docs/public/fqzlr/` 目录：

| 源文件                        | 目标路径                         |
| ----------------------------- | -------------------------------- |
| `assets/avatar.webp`          | `docs/public/fqzlr/avatar.webp`  |
| `assets/avatar2.webp`         | `docs/public/fqzlr/avatar2.webp` |
| `assets/avatar.gif`           | `docs/public/fqzlr/avatar.gif`   |
| `assets/cover.avif`           | `docs/public/fqzlr/cover.avif`   |
| `assets/favicon.svg`          | `docs/public/fqzlr/favicon.svg`  |
| `assets/firefly*.png`         | `docs/public/fqzlr/firefly*.png` |
| `assets/logo.png`             | `docs/public/fqzlr/logo.png`     |
| `assets/shangban.png`         | `docs/public/fqzlr/shangban.png` |
| `assets/xiaban.gif`           | `docs/public/fqzlr/xiaban.gif`   |
| `assets/avatar_sb/`           | `docs/public/fqzlr/avatar_sb/`   |
| `articles/posts/blog/images/` | `docs/public/fqzlr/images/`      |

### 4.3 更新导航栏

在 `docs/.vitepress/config.ts` 的 `nav` 配置中添加"博客"导航项：

```ts
{ text: "博客", link: "/blog/", activeMatch: "/40.博客/" },
```

### 4.4 更新 Teek 配置（可选）

在 `docs/.vitepress/teek-config.ts` 中，基于 fq 的 `profileConfig.ts` 和 `siteConfig.ts` 信息，可选地添加作者信息：

```ts
// 添加作者信息（可选，不影响现有内容）
author: {
  name: "Fqzlr",
  link: "https://github.com/fqzlr",
},
```

### 4.5 不修改的文件

以下文件**保持不变**：

- `docs/.vitepress/config.ts`（仅添加导航项）
- `docs/.vitepress/teek-config.ts`（仅可选添加作者信息）
- `docs/index.md`
- `docs/personal.md`
- `docs/01.指南/` 下所有内容
- `docs/10.配置/` 下所有内容
- `docs/15.主题开发/` 下所有内容
- `docs/20.资源/` 下所有内容
- `docs/30.生态/` 下所有内容
- `docs/@pages/` 下所有内容
- `docs/@fragment/` 下所有内容
- `docs/examples/` 下所有内容

## 五、具体实施步骤

### 步骤 1：创建博客分区目录结构

- 创建 `docs/40.博客/` 目录
- 创建 `docs/40.博客/目录.md`（目录页）
- 创建 `docs/40.博客/01.建站随笔/` 子目录
- 创建 `docs/40.博客/02.教程/` 子目录

### 步骤 2：转换并添加文章

将 13 篇 Astro 格式文章转换为 Teek 兼容的 Markdown 格式：

- 修改 frontmatter 格式（Astro → Teek/VitePress）
- 保持文章正文内容不变
- 处理图片路径引用（指向 `/fqzlr/images/`）

### 步骤 3：复制资源文件

将 `assets/` 和 `articles/posts/blog/images/` 中的图片资源复制到 `docs/public/fqzlr/`。

### 步骤 4：更新导航配置

在 `docs/.vitepress/config.ts` 的 `nav` 数组中添加"博客"导航项。

### 步骤 5：可选更新 Teek 配置

在 `docs/.vitepress/teek-config.ts` 中可选添加作者信息。

### 步骤 6：验证

- 运行 `pnpm run docs:dev` 启动开发服务器
- 确认导航栏显示"博客"链接
- 确认博客目录页正常显示
- 确认每篇文章可以正常访问
- 确认图片正常显示
- 确认现有所有页面内容未被修改

## 六、注意事项

1. **文章格式转换**：Astro 的 MDX 文件中的 frontmatter 字段（如 `published`, `draft`, `pinned`, `image`, `category`）需要转换为 Teek 兼容的字段（如 `date`, `categories`, `tags`, `description`, `top` 等）
2. **图片路径**：文章中引用的图片需要从 `images/` 目录复制到 `docs/public/fqzlr/images/`，并更新引用路径为 `/fqzlr/images/xxx`
3. **MDX 内容**：`Twikoo 评论完整迁移 Waline 教程.mdx` 是 MDX 格式，包含 Astro 组件（`TwikooToWalineTool.astro`）和 TypeScript 代码（`twikoo-to-waline-code.ts`），需要将 Astro 组件转换为 Vue 组件或纯 HTML/JS 实现
4. **永久链接**：每篇文章应设置 `permalink` 字段，避免 URL 包含序号
5. **侧边栏**：Teek 会自动根据目录结构生成侧边栏，新文章将自动出现在侧边栏中
