---
name: "teek-blog-developer"
description: "Teek 博客平台深度开发技能：基于 vp.teek.top 文档与源码分析，指导博客搭建部署、内容创作、功能扩展、二次开发。当用户需要搭建/扩展/定制 Teek 博客时触发。"
---

# Teek 博客平台深度开发指南

基于 [VitePress Theme Teek](https://vp.teek.top/) 官方文档和源码的系统性分析，面向博客搭建者和二次开发人员的完整技术指南。

---

## 目录

1. [平台概述与技术架构](#1-平台概述与技术架构)
2. [环境搭建与快速启动](#2-环境搭建与快速启动)
3. [配置体系深度解析](#3-配置体系深度解析)
4. [首页布局与 Banner 系统](#4-首页布局与-banner-系统)
5. [文章与内容管理系统](#5-文章与内容管理系统)
6. [Markdown 扩展语法](#6-markdown-扩展语法)
7. [主题增强面板开发](#7-主题增强面板开发)
8. [Composables 组合式函数](#8-composables-组合式函数)
9. [Helper 工具函数库](#9-helper-工具函数库)
10. [Vite 插件系统](#10-vite-插件系统)
11. [组件体系与按需引入](#11-组件体系与按需引入)
12. [国际化与多语言](#12-国际化与多语言)
13. [样式系统与 BEM 规范](#13-样式系统与-bem-规范)
14. [二次开发完整指南](#14-二次开发完整指南)
15. [部署与运维](#15-部署与运维)
16. [常见问题与最佳实践](#16-常见问题与最佳实践)

---

## 1. 平台概述与技术架构

### 1.1 项目定位

Teek 是一个基于 VitePress 的轻量、简洁高效、灵活配置、易于扩展的博客主题。它在 VitePress 默认主题基础上扩展了博客功能，包括首页 Banner、文章卡片、分类标签、壁纸模式、主题增强面板等。

### 1.2 技术栈

| 技术        | 版本要求 | 用途              |
| ----------- | -------- | ----------------- |
| Vue         | 3.x      | 前端框架          |
| VitePress   | 1.6.x    | 静态站点生成器    |
| TypeScript  | 5.x      | 类型系统          |
| SCSS        | -        | 样式预处理        |
| markdown-it | -        | Markdown 解析扩展 |
| Vite        | 6.x      | 构建工具          |

### 1.3 项目目录结构

```
packages/
├── config/                    # 配置类型定义
│   ├── types.ts              # TeekConfig 主类型（57+ 字段）
│   ├── interface/            # 各模块类型接口
│   │   ├── banner.ts         # Banner 配置类型
│   │   ├── wallpaper.ts      # 壁纸模式类型
│   │   ├── post.ts           # 文章配置类型
│   │   ├── theme-enhance.ts  # 主题增强类型
│   │   └── ...
│   └── context.ts            # 配置上下文（provide/inject）
├── components/
│   ├── common/               # 公共组件（独立于 VitePress）
│   │   ├── segmented/        # 分段控制器
│   │   ├── icon-picker/      # 图标选择器
│   │   └── ...
│   └── theme/                # 主题组件（依赖 VitePress）
│       ├── layout/           # 入口布局组件
│       ├── home-banner/      # 首页 Banner 组件
│       ├── home-main/        # 首页主内容区
│       ├── home-card/        # 首页卡片区域
│       ├── home-fullscreen-wallpaper/ # 壁纸模式
│       ├── theme-enhance/    # 布局增强面板
│       ├── config-provider/  # 配置提供者
│       ├── article-banner/   # 文章页 Banner
│       ├── code-block/       # 代码块增强
│       ├── comment/          # 评论系统
│       ├── blog-blogger/     # 博主信息
│       └── ...
├── theme-chalk/              # SCSS 样式库
│   ├── src/
│   │   ├── mixins/          # 样式混合（bem, function）
│   │   ├── components/      # 组件样式
│   │   ├── variables/       # 变量定义
│   │   └── global/          # 全局样式
│   └── tk-*.css             # 编译输出
├── composables/              # 组合式函数库
│   ├── useStorage.ts        # 本地存储
│   ├── useEventListener.ts  # 事件监听
│   ├── useMediaQuery.ts     # 媒体查询
│   ├── useSwitchData.ts     # 数据轮播
│   ├── useAnchorScroll.ts   # 锚点滚动
│   └── ...
├── helper/                   # 工具函数库
│   ├── browser.ts           # 浏览器工具
│   ├── format.ts            # 格式化工具
│   ├── shared.ts            # 通用工具
│   └── index.ts             # 导出入口
├── locale/                   # 国际化文案
│   ├── lang/
│   │   ├── zh-CN.ts         # 中文
│   │   ├── en-US.ts         # 英文
│   │   └── ...
│   └── index.ts             # 导出入口
├── markdown/                 # Markdown 扩展
│   ├── containers/          # 自定义容器
│   ├── plugins/             # markdown-it 插件
│   └── index.ts             # 导出入口
├── plugins/                  # Vite 插件
│   ├── src/
│   │   ├── vitepress-plugin-permalink/    # 永久链接
│   │   ├── vitepress-plugin-sidebar-resolve/ # 侧边栏解析
│   │   ├── vitepress-plugin-md-h1/        # H1 提取
│   │   ├── vitepress-plugin-perfect-scrollbar/ # 滚动条
│   │   ├── vitepress-plugin-file-content-loader/ # 文件内容加载
│   │   ├── vitepress-plugin-catalogue/    # 目录页生成
│   │   └── ...
│   └── index.ts
├── static/                   # 静态资源（图标等）
└── hooks/                    # 旧版 hooks（逐步迁移至 composables）

docs/                         # 文档站点源码
├── .vitepress/
│   ├── config.mts           # VitePress 配置
│   ├── teek-config.ts       # Teek 主题配置
│   └── theme/
│       └── index.ts         # 主题入口
├── guide/                   # 使用指南
├── reference/               # 参考文档
├── develop/                 # 开发文档
├── ecosystem/               # 生态文档
├── resources/               # 资源文档
└── index.md                 # 首页
```

---

## 2. 环境搭建与快速启动

### 2.1 系统要求

- **Node.js**: >= 18.0.0
- **pnpm**: >= 9.0.0（推荐）
- **操作系统**: Windows / macOS / Linux

### 2.2 从零搭建博客

#### 第一步：初始化 VitePress 项目

```bash
# 创建项目目录
mkdir my-blog && cd my-blog

# 初始化 package.json
pnpm init

# 安装 VitePress
pnpm add -D vitepress

# 初始化 VitePress
pnpm vitepress init
```

初始化时选择：

- `? Site title:` → 输入博客标题
- `? Site description:` → 输入博客描述
- `? Theme:` → 选择 `Default Theme`（后续替换为 Teek）

#### 第二步：安装 Teek 主题

```bash
pnpm install vitepress-theme-teek -D
```

#### 第三步：创建主题入口

```ts
// .vitepress/theme/index.ts
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";

export default {
  extends: Teek,
};
```

#### 第四步：创建 Teek 配置文件

```ts
// .vitepress/teek-config.ts
import { defineTeekConfig } from "vitepress-theme-teek/config";

export const teekConfig = defineTeekConfig({
  teekHome: true, // 启用博客风格首页
  banner: {
    enabled: true,
    bgStyle: "fullImg", // 全屏图片 Banner
    imgSrc: ["/bg.jpg"], // 图片放在 public 目录下
  },
  post: {
    postStyle: "list", // 文章列表样式
    showMore: true, // 显示更多按钮
  },
  blogger: {
    name: "你的名字",
    slogan: "你的签名",
    avatar: "/avatar.jpg",
    shape: "circle-rotate",
  },
});
```

#### 第五步：引入 Teek 配置到 VitePress

```ts
// .vitepress/config.mts
import { defineConfig } from "vitepress";
import { teekConfig } from "./teek-config";

export default defineConfig({
  extends: teekConfig,
  title: "我的博客",
  description: "一个基于 Teek 主题的博客",
});
```

#### 第六步：创建首页

```markdown
---
layout: home
teekHome: true
---

<!-- 此处内容会被 Teek 首页覆盖，留空即可 -->
```

#### 第七步：启动开发服务器

```bash
pnpm run docs:dev
```

访问 `http://localhost:5173` 即可看到博客首页。

### 2.3 项目目录结构

搭建完成后的项目结构：

```
my-blog/
├── .vitepress/
│   ├── config.mts          # VitePress 配置
│   ├── teek-config.ts      # Teek 主题配置
│   └── theme/
│       └── index.ts        # 主题入口
├── public/                 # 静态资源
│   ├── bg.jpg             # Banner 背景图
│   └── avatar.jpg         # 博主头像
├── posts/                  # 文章目录
│   ├── hello.md           # 示例文章
│   └── guide/
│       └── getting-started.md
├── index.md               # 首页
├── categories.md          # 分类页（可选）
├── tags.md                # 标签页（可选）
└── package.json
```

---

## 3. 配置体系深度解析

### 3.1 四层配置优先级

Teek 采用四层配置优先级机制，从高到低：

| 优先级        | 配置方式         | 位置                        | 说明                                          |
| ------------- | ---------------- | --------------------------- | --------------------------------------------- |
| **1（最高）** | `provide`        | `.vitepress/theme/index.ts` | 通过 `provide(teekConfigContext, {...})` 注入 |
| **2**         | `frontmatter.tk` | Markdown 文件 frontmatter   | 使用 `tk:` 命名空间，避免与 VitePress 冲突    |
| **3**         | `frontmatter`    | Markdown 文件 frontmatter   | 直接写在 frontmatter 顶层                     |
| **4（最低）** | `config`         | `defineTeekConfig({...})`   | 全局默认配置                                  |

#### 优先级示例

```ts
// 优先级 4：全局默认配置
const teekConfig = defineTeekConfig({
  banner: { bgStyle: "fullImg" }, // 默认全屏图片
});
```

```yaml
# 优先级 3：frontmatter（覆盖全局配置）
---
bgStyle: "partImg" # 本页面使用局部图片
---
```

```yaml
# 优先级 2：frontmatter.tk（推荐，避免冲突）
---
tk:
  banner:
    bgStyle: "pure" # 本页面使用纯色背景
---
```

```ts
// 优先级 1：provide（最高优先级）
export default {
  extends: Teek,
  setup() {
    provide(teekConfigContext, {
      banner: { bgStyle: "fullImg" },
    });
  },
};
```

### 3.2 defineTeekConfig 完整配置参考

```ts
const teekConfig = defineTeekConfig({
  // ============ 首页基础 ============
  teekHome: true, // 启用博客风格首页
  homeCardListPosition: "right", // 卡片栏位置：left | right | false
  homeCardSort: [
    // 首页卡片排序
    "topArticle",
    "category",
    "tag",
    "friendLink",
    "docAnalysis",
  ],
  vitePlugins: {}, // Vite 插件配置

  // ============ Banner 配置 ============
  banner: {
    enabled: true, // 启用 Banner
    name: "Teek", // Banner 标题
    bgStyle: "fullImg", // 背景风格：pure | partImg | fullImg
    pureBgColor: "#28282d", // 纯色背景色（pure 时生效）
    imgSrc: ["/bg.jpg"], // 图片链接数组
    imgInterval: 15000, // 图片切换间隔（毫秒）
    imgShuffle: false, // 图片是否随机切换
    imgWaves: true, // 图片波浪纹效果（fullImg 时生效）
    mask: true, // 遮罩层
    maskBg: "rgba(0,0,0,0.4)", // 遮罩颜色
    textColor: "#ffffff", // 字体颜色
    titleFontSize: "3.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    descStyle: "types", // 描述风格：default | types | switch
    description: [
      // 描述信息数组
      "第一条描述",
      "第二条描述",
    ],
    switchTime: 4000, // switch 模式切换间隔
    switchShuffle: false, // switch 模式是否随机
    typesInTime: 200, // types 模式打字速度
    typesOutTime: 100, // types 模式删字速度
    typesNextTime: 800, // types 模式字间间隔
    typesShuffle: false, // types 模式是否随机
    features: [], // 功能卡片数组
    featureCarousel: 4000, // 功能卡片轮播间隔
  },

  // ============ 壁纸模式 ============
  wallpaper: {
    enabled: false, // 启用壁纸模式
    hideBanner: false, // 壁纸模式隐藏 Banner
    hideMask: true, // 壁纸模式隐藏遮罩
  },

  // ============ 页面背景 ============
  bodyBgImg: {
    imgSrc: "/bg.jpg", // body 背景图片（设置后 banner 图片风格失效）
    imgOpacity: 1, // 图片透明度
    mask: false, // 遮罩层
    maskBg: "rgba(0,0,0,0.2)", // 遮罩颜色
  },

  // ============ 博主信息 ============
  blogger: {
    name: "博主名", // 博主名称
    slogan: "签名", // 个性签名
    avatar: "/avatar.jpg", // 头像地址
    shape: "circle-rotate", // 头像形状：square | circle | circle-rotate | circle-rotate-last
    circleBgImg: "/bg.jpg", // 头像背景图（circle-rotate 生效）
    circleBgAlt: "背景图描述", // 背景图描述
    status: {
      // 状态信息
      enabled: true,
      icon: "",
      emojis: [],
      title: "",
    },
  },

  // ============ 文章配置 ============
  post: {
    postStyle: "list", // 文章样式：list | card
    showMore: true, // 显示更多按钮
    moreRoutePath: "/archives", // 更多按钮跳转路径
    showIcon: true, // 显示文章图标
    showDate: true, // 显示发布日期
    showTop: true, // 显示置顶标记
    showCover: true, // 显示封面图
    coverImgMode: "small", // 封面模式：small | full | none
    show_excerpt: true, // 显示摘要
    excerptLength: 300, // 摘要长度（字符数）
    categories: ["分类1", "分类2"], // 默认分类
    tags: ["标签1", "标签2"], // 默认标签
    dateFormat: "yyyy-MM-dd", // 日期格式
    showReadingTime: true, // 显示阅读时间
    readingSpeed: { cn: 300, en: 200 }, // 阅读速度
    showSeparator: true, // 显示分隔线
    pagination: {
      // 分页配置
      enabled: true,
      pageSize: 10,
      currentPage: 1,
    },
  },

  // ============ 主题增强面板 ============
  themeEnhance: {
    enabled: true, // 启用主题增强面板
    position: "top", // 面板位置：top | bottom
    layoutSwitch: {
      // 布局切换
      disabled: false, // 禁用
      hidden: false, // 隐藏
      defaultMode: "original", // 默认布局模式
      disableHelp: false, // 禁用帮助
      defaultPageMaxWidth: 95, // 页面最大宽度
      defaultDocMaxWidth: 90, // 文档最大宽度
    },
    themeColor: {
      // 主题色
      disabled: false,
      hidden: false,
      defaultColorName: "vp-primary", // 默认颜色
      defaultSpread: false, // 默认展开
      colors: [], // 自定义颜色列表
    },
    spotlight: {
      // 聚光灯
      disabled: false,
      hidden: false,
      defaultStyle: "aside", // 默认样式
      defaultValue: true, // 默认开启
    },
    fullscreen: {
      // 全屏
      disabled: false,
      hidden: false,
    },
    locale: {
      // 语言切换
      disabled: false,
      hidden: false,
    },
  },

  // ============ 侧边栏公告 ============
  notice: {
    enabled: true, // 启用公告
    position: "top", // 位置：top | bottom
    title: "公告标题", // 标题
    content: "公告内容", // 内容（支持 HTML）
    contentFile: "", // 内容文件路径（优先级高于 content）
    icon: "", // 标题图标
    speed: 10000, // 滚动速度
    backgroundColor: "", // 背景色
    color: "", // 字体颜色
    height: "", // 高度
    showClose: true, // 显示关闭按钮
    initialOpen: true, // 初始展开
    mobileMinify: false, // 移动端最小化
  },

  // ============ 页脚 ============
  footer: {
    enabled: false, // 启用页脚
    copyright: {
      // 版权信息
      enable: true,
      content: "Copyright © 2024",
    },
    customize: {
      // 自定义内容
      enable: true,
      content: "Powered by Teek",
    },
    icp: {
      // 备案信息
      enable: false,
      name: "",
      link: "",
      icon: "",
    },
  },

  // ============ 评论系统 ============
  comment: {
    enabled: false, // 启用评论
    provider: "gitalk", // 评论系统：gitalk | giscus | waline
    options: {}, // 评论系统配置
  },

  // ============ 文章页 Banner ============
  articleBanner: {
    enabled: true, // 启用文章页 Banner
    show: "all", // 显示位置：all | article | page
  },

  // ============ 代码块 ============
  codeBlock: {
    enabled: true, // 启用代码块增强
    collapseHeight: 500, // 折叠高度
    maxHeight: 500, // 最大高度
    showLength: true, // 显示代码行数
    copyBtn: true, // 复制按钮
    theme: "default", // 主题
  },

  // ============ 赞赏 ============
  appreciation: {
    enabled: true, // 启用赞赏
    position: "both", // 位置：aside | both
    expand: false, // 默认展开
    btnText: "赞赏", // 按钮文本
    btnIcon: "", // 按钮图标
    ways: [], // 赞赏方式
    autoScroll: true, // 自动滚动
    scrollSpeed: 10000, // 滚动速度
    color: "", // 颜色
  },

  // ============ 版权声明 ============
  copyright: {
    enabled: true, // 启用版权声明
    license: "CC BY-NC-SA 4.0", // 许可证
    licenseLink: "", // 许可证链接
    author: "博客作者", // 作者
    authorLink: "", // 作者链接
    creationAttribution: true, // 原创声明
    forbiddenReprint: false, // 禁止转载
  },

  // ============ 社交链接 ============
  social: {
    icons: [], // 社交图标列表
  },

  // ============ 锚点滚动 ============
  anchorScroll: {
    enabled: true, // 启用锚点滚动
    offset: 80, // 偏移量
    deep: 3, // 目录深度
  },

  // ============ TOC 目录 ============
  toc: {
    enabled: true, // 启用 TOC
    position: "right", // 位置
    depth: 3, // 深度
  },
});
```

### 3.3 配置模板文件

Teek 提供了覆盖 95% 配置项的模板文件，包含所有可配置项和中文注释：

模板地址：[teekConfig.template.ts](https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/main/docs/.vitepress/teekConfig.template.ts)

直接复制到项目 `.vitepress/` 目录下修改即可。

---

## 4. 首页布局与 Banner 系统

### 4.1 首页模式切换

Teek 支持两种首页模式：

**博客风格首页**（`teekHome: true`）：

- 顶部 Banner 区域（支持全屏/局部/纯色）
- 中间文章列表区域（支持列表/卡片样式）
- 侧边栏信息区域（博主信息、公告、分类、标签）

**VitePress 默认首页**（`teekHome: false` 或不设置）：

- Hero 区域
- Features 区域

### 4.2 Banner 背景风格

| 风格     | 配置值    | 说明                                |
| -------- | --------- | ----------------------------------- |
| 纯色背景 | `pure`    | 使用 `pureBgColor` 指定颜色         |
| 局部图片 | `partImg` | Banner 区域显示图片，底部露出内容区 |
| 全屏图片 | `fullImg` | Banner 占满全屏高度，图片作为背景   |

### 4.3 Banner 描述风格

| 风格     | 配置值    | 说明                               |
| -------- | --------- | ---------------------------------- |
| 纯文字   | `default` | 直接显示第一行描述                 |
| 打字机   | `types`   | 逐字打字效果，打完后删除再打下一条 |
| 轮播切换 | `switch`  | 定时切换显示不同描述               |

### 4.4 壁纸模式

壁纸模式是在首页最顶部进入全屏后开启的特殊模式：

```ts
// 壁纸模式条件：banner.bgStyle = 'fullImg' 或 bodyBgImg.imgSrc 存在
wallpaper: {
  enabled: true,      // 启用壁纸模式
  hideBanner: false,  // 壁纸模式下是否隐藏 Banner
  hideMask: true,     // 壁纸模式下是否隐藏遮罩
}
```

**进入方式**：在首页最顶部按 `F11` 进入全屏。

**壁纸模式效果**：

- 禁止 F12 / Ctrl+Shift+I 打开开发者工具
- 禁止右键菜单
- 禁止鼠标滚动
- 隐藏页面滚动条
- 显示纯壁纸背景

### 4.5 页面背景

当需要整个页面（不仅是 Banner）都显示背景图时：

```ts
bodyBgImg: {
  imgSrc: "/bg.jpg",          // 设置后 banner 图片风格会失效
  imgOpacity: 1,              // 图片透明度
  mask: false,                // 是否显示遮罩
  maskBg: "rgba(0,0,0,0.2)", // 遮罩颜色
}
```

---

## 5. 文章与内容管理系统

### 5.1 文章 Frontmatter 规范

每篇文章的顶部 frontmatter 用于定义文章元信息：

```yaml
---
title: 文章标题
date: 2024-01-01 12:00:00
categories:
  - 分类一
  - 分类二
tags:
  - 标签一
  - 标签二
top: 1 # 置顶权重（数字越大越靠前）
cover:
  src: /cover.jpg # 封面图片
  掘金: https://juejin.cn # 掘金链接
topInfo: # 置顶信息
  desc: 置顶描述
sticky: 1 # VitePress 原生置顶
hidden: false # 是否隐藏
---
```

### 5.2 功能页面

Teek 支持多种功能页面，通过 frontmatter 标记或 layout 指定：

#### 分类页

```markdown
---
categoriesPage: true
---

# 分类

<!-- Teek 会自动渲染分类列表 -->
```

#### 标签页

```markdown
---
tagsPage: true
---

# 标签

<!-- Teek 会自动渲染标签云 -->
```

#### 归档页

```markdown
---
layout: TkArchivesPage
---

# 归档

<!-- Teek 会自动按时间线渲染文章列表 -->
```

#### 目录页

```markdown
---
catalogue:
  path: /guide
  title: 使用指南
  desc: Teek 使用指南的所有文章
  limit: 20 # 显示数量
  placeholder: 搜索
  noCatalogue: false
---

<!-- Teek 会自动渲染指定路径下的文章目录 -->
```

#### 文章清单页

```markdown
---
layout: TkArticleOverviewPage
---

# 文章清单

<!-- Teek 会渲染所有文章的清单 -->
```

### 5.3 文章样式模式

| 模式     | 配置值 | 说明                                     |
| -------- | ------ | ---------------------------------------- |
| 列表模式 | `list` | 文章以列表形式展示，支持封面图在左/右/上 |
| 卡片模式 | `card` | 文章以卡片网格形式展示                   |

#### 封面图模式（`coverImgMode`）

| 模式    | 说明                          |
| ------- | ----------------------------- |
| `small` | 小封面图，显示在标题左侧/右侧 |
| `full`  | 大封面图，显示在内容上方      |
| `none`  | 不显示封面图                  |

---

## 6. Markdown 扩展语法

### 6.1 TODO 列表

```markdown
- [ ] 未完成任务
- [x] 已完成任务
```

### 6.2 居中/右对齐容器

```markdown
::: center
居中内容
:::

::: right
右对齐内容
:::
```

### 6.3 笔记容器

```markdown
::: note
这是一个笔记框。
:::

::: note warning
这是一个警告框。
:::

::: note info
这是一个信息框。
:::

::: note success
这是一个成功框。
:::
```

### 6.4 分享卡片

````markdown
::: shareCard

```yaml
- title: Teek 主题
  desc: 一个 VitePress 博客主题
  link: https://vp.teek.top/
  avatar: /avatar.jpg
  bgColor: "#f0f0f0"
  textColor: "#333"
```
````

:::

````

### 6.5 图片卡片

```markdown
::: imgCard
```yaml
- img: /image.jpg
  link: https://example.com
  name: 图片名称
  desc: 图片描述
  author: 作者
  avatar: /avatar.jpg
  bgColor: "#f0f0f0"
  textColor: "#333"
````

:::

````

### 6.6 导航卡片

```markdown
::: navCard
```yaml
- title: VitePress
  link: https://vitepress.dev/
  icon: /icon.svg
  desc: 静态站点生成器
  bgColor: "#f0f0f0"
  textColor: "#333"
````

:::

````

---

## 7. 主题增强面板开发

### 7.1 面板架构

主题增强面板位于导航栏右侧，包含多个子模块：
- 布局切换（Layout Switch）
- 主题色（Theme Color）
- 聚光灯（Spotlight）
- 全屏（Fullscreen）
- 语言切换（Locale）

每个子模块继承 `BaseTemplate` 组件，遵循统一的开发模式。

### 7.2 新增面板项完整步骤

#### 步骤 1：定义类型接口

文件位置：`packages/config/interface/theme-enhance.ts`

```ts
export interface ThemeEnhance {
  // ... 现有字段
  myModule?: {
    disabled?: boolean;          // 禁用功能
    hidden?: boolean;            // 隐藏 UI
    disableHelp?: boolean;       // 禁用帮助提示
    defaultMode?: "list" | "fullscreen"; // 默认模式
  };
}
````

#### 步骤 2：创建组件

文件位置：`packages/components/theme/theme-enhance/src/my-switch.vue`

```vue
<script setup lang="ts" name="MySwitch">
import type { ThemeEnhance } from "@teek/config";
import { computed, watch } from "vue";
import { isClient } from "@teek/helper";
import { useStorage, useLocale } from "@teek/composables";
import { useTeekConfig } from "@teek/components/theme/config-provider";
import { TkSegmented } from "@teek/components/common/segmented";
import { ns } from "./namespace";
import BaseTemplate from "./components/base-template.vue";

defineOptions({ name: "MySwitch" });

const { getTeekConfigRef } = useTeekConfig();
const themeEnhanceConfig = getTeekConfigRef<ThemeEnhance>("themeEnhance", {});
const { t } = useLocale();

// 获取当前模块配置
const myModuleConfig = computed(() => themeEnhanceConfig.value.myModule ?? {});

// 持久化存储用户选择
const myMode = useStorage(ns.storageKey("myMode"), myModuleConfig.value.defaultMode || "list");

// 监听变化并应用到 DOM
const update = (val: string) => {
  if (!isClient) return;
  document.documentElement.setAttribute("data-my-mode", val);
};
watch(myMode, update, { immediate: true });

// 选项列表
const options = computed(() => [
  { value: "list", title: "列表", ariaLabel: "列表模式" },
  { value: "fullscreen", title: "全屏", ariaLabel: "全屏模式" },
]);

// 帮助提示
const tips = computed(() => [
  { title: "列表模式", content: "显示所有内容" },
  { title: "全屏模式", content: "只显示背景" },
]);
</script>

<template>
  <BaseTemplate
    v-if="!(myModuleConfig.hidden ?? themeEnhanceConfig.value.hidden ?? false)"
    icon="my-icon"
    :title="t('tk.themeEnhance.myModule.title')"
    :helper="!myModuleConfig.disableHelp"
    :tips
  >
    <TkSegmented v-model="myMode" :options="options" />
  </BaseTemplate>
</template>
```

#### 步骤 3：注册到主题增强面板

文件位置：`packages/components/theme/theme-enhance/src/index.vue`

```vue
<script setup>
import MySwitch from "./my-switch.vue";

// 在 disabledList 中添加
const disabledList = computed(() => ({
  // ... 现有项
  myModule: themeEnhanceConfig.value.myModule?.disabled ?? false,
}));
</script>

<template>
  <!-- 在适当位置添加 -->
  <MySwitch v-if="!disabledList.myModule" />
</template>
```

#### 步骤 4：添加国际化文案

文件位置：`packages/locale/lang/zh-CN.ts`

```ts
themeEnhance: {
  // ... 现有字段
  myModule: {
    title: "我的模块",
    listTipTitle: "列表",
    listTipContent: "显示所有内容",
    fullscreenTipTitle: "全屏",
    fullscreenTipContent: "只显示背景",
    helpDesc: "切换我的模块模式。",
  },
}
```

#### 步骤 5：添加样式

文件位置：`packages/theme-chalk/src/components/theme/theme-enhance/_my-switch.scss`

```scss
@use "../../mixins/bem" as *;

@include b(theme-enhance-my-module) {
  // 样式内容
}
```

### 7.3 用户配置示例

在 `teek-config.ts` 中配置：

```ts
themeEnhance: {
  myModule: {
    disabled: false,        // 不禁用
    hidden: false,          // 不隐藏
    disableHelp: false,     // 显示帮助
    defaultMode: "list",    // 默认列表模式
  },
}
```

---

## 8. Composables 组合式函数

### 8.1 useTeekConfig

获取 Teek 配置数据（支持四层优先级）：

```ts
import { useTeekConfig } from "vitepress-theme-teek";

const { getTeekConfig, getTeekConfigRef } = useTeekConfig();

// 非响应式获取
const bannerConfig = getTeekConfig("banner", { enabled: true });

// 响应式获取（ComputedRef）
const bannerConfigRef = getTeekConfigRef("banner", { enabled: true });
console.log(bannerConfigRef.value.enabled); // true
```

### 8.2 usePageState

获取页面状态信息：

```ts
import { usePageState } from "vitepress-theme-teek";

const {
  isHomePage, // 是否首页
  isCategoriesPage, // 是否分类页
  isTagsPage, // 是否标签页
  isArchivesPage, // 是否归档页
  isCataloguePage, // 是否目录页
  isArticleOverviewPage, // 是否文章清单页
} = usePageState();
```

### 8.3 usePosts

获取文章数据：

```ts
import { usePosts } from "vitepress-theme-teek";

const { posts } = usePosts(); // ComputedRef<PostData>

// posts.value.allPosts     - 所有文章列表
// posts.value.groupPosts   - 按分类/标签/年份分组的文章
// posts.value.categories   - 所有分类
// posts.value.tags         - 所有标签
// posts.value.currentPosts - 当前页文章（分页后）
// posts.value.totalPages   - 总页数
```

### 8.4 useSidebar

获取侧边栏状态：

```ts
import { useSidebar } from "vitepress-theme-teek";

const { hasSidebar, sidebar } = useSidebar();
console.log(hasSidebar.value); // boolean
```

### 8.5 useStorage

localStorage 持久化状态：

```ts
import { useStorage } from "@teek/composables";

// 基本用法
const themeMode = useStorage("theme-mode", "light");

// 带命名空间（推荐）
const ns = useNamespace("my-feature");
const myMode = useStorage(ns.storageKey("mode"), "list");

// 读写
console.log(myMode.value); // "list"
myMode.value = "card"; // 自动持久化到 localStorage
```

### 8.6 useEventListener

事件监听：

```ts
import { useEventListener } from "@teek/composables";

// 监听 window 事件
useEventListener(window, "resize", () => {
  console.log("窗口大小变化");
});

// 监听 DOM 事件
useEventListener(elementRef, "click", e => {
  console.log("点击事件", e);
});

// 自动清理（组件卸载时）
```

### 8.7 useMediaQuery

响应式媒体查询：

```ts
import { useMediaQuery } from "@teek/composables";

const isMobile = useMediaQuery("(max-width: 719px)");
const isTablet = useMediaQuery("(max-width: 1024px)");

// 作为 computed 使用
console.log(isMobile.value); // boolean
```

### 8.8 useSwitchData

数据轮播切换：

```ts
import { useSwitchData } from "@teek/composables";

const data = ["第一条", "第二条", "第三条"];
const { currentData, currentIndex } = useSwitchData(data, {
  interval: 4000, // 切换间隔
  shuffle: false, // 是否随机
  immediate: true, // 立即开始
});
```

### 8.9 useAnchorScroll

锚点自动滚动：

```ts
import { useAnchorScroll } from "@teek/composables";

const { scrollToAnchor, updateHash } = useAnchorScroll({
  offset: 80, // 偏移量
  behavior: "smooth", // 滚动行为
});
```

### 8.10 useLocale

国际化文案：

```ts
import { useLocale } from "@teek/composables";

const { t, locale } = useLocale();

console.log(t("tk.banner.title")); // "标题"
console.log(locale.value); // "zh-CN"
```

### 8.11 useNamespace

BEM 类名生成：

```ts
import { useNamespace } from "@teek/composables";

const ns = useNamespace("my-component");

ns.b(); // "tk-my-component"
ns.e("title"); // "tk-my-component__title"
ns.m("active"); // "tk-my-component--active"
ns.is("disabled"); // "is-disabled"
ns.is("disabled", true); // "is-disabled"（true 时返回）
ns.is("disabled", false); // ""（false 时返回空）
ns.join("my-component__title"); // "tk-my-component__title"
ns.cssVarName("bg-color"); // "--tk-my-component-bg-color"
ns.cssVar("bg-color", "#fff"); // "--tk-my-component-bg-color: #fff"
ns.storageKey("mode"); // "tk-my-component-mode"
```

### 8.12 useWindowTransition

视图渐入过渡效果：

```ts
import { useWindowTransition } from "@teek/composables";

// 在 setup 中调用
useWindowTransition(listRef); // 自动为列表添加过渡动画
```

---

## 9. Helper 工具函数库

### 9.1 类型判断

```ts
import {
  isClient,
  isFunction,
  isObject,
  isString,
  isBoolean,
  isArray,
  isEmpty,
  isExternal,
  isValidURL,
} from "@teek/helper";

isClient; // 是否客户端环境
isFunction(() => {}); // true
isObject({}); // true
isString("hello"); // true
isBoolean(true); // true
isArray([]); // true
isEmpty(null); // true
isEmpty(""); // true
isEmpty([]); // true
isExternal("https://..."); // true
isExternal("/path"); // false
isValidURL("https://..."); // true
```

### 9.2 路径处理

```ts
import { withBase } from "@teek/helper";

// 添加站点根路径前缀
withBase("/image.jpg"); // "/blog/image.jpg"（假设 base 为 /blog/）
withBase("https://..."); // "https://..."（外部链接不处理）
```

### 9.3 字符串处理

```ts
import { upperFirst, addUnit } from "@teek/helper";

upperFirst("hello"); // "Hello"
addUnit(100); // "100px"
addUnit("2rem"); // "2rem"（已有单位不处理）
addUnit(undefined); // undefined
```

### 9.4 时间格式化

```ts
import { formatDate, formatDiffDate } from "@teek/helper";

// 格式化时间
formatDate("2024-01-01"); // "2024-01-01"
formatDate(new Date(), "yyyy/MM/dd"); // "2024/01/01"
formatDate("2024-01-01", "yyyy年MM月dd日"); // "2024年01月01日"

// 计算时间差
formatDiffDate("2024-01-01"); // "x 天前" / "x 小时前" / "x 分钟前" / "刚刚"
formatDiffDate("2024-01-01", "2024-06-01"); // "5 个月"
```

---

## 10. Vite 插件系统

### 10.1 内置插件

| 插件名                | 功能                           |
| --------------------- | ------------------------------ |
| `permalink`           | 永久链接生成（支持自定义格式） |
| `sidebar-resolve`     | 自动解析侧边栏结构             |
| `md-h1`               | 自动提取 Markdown H1 标题      |
| `catalogue`           | 目录页自动生成                 |
| `perfect-scrollbar`   | 自定义滚动条样式               |
| `file-content-loader` | 文件内容加载器                 |
| `component`           | Vue 组件自动注册               |

### 10.2 插件配置

```ts
// .vitepress/teek-config.ts
const teekConfig = defineTeekConfig({
  vitePlugins: {
    // 永久链接插件
    permalink: {
      enabled: true,
      options: {
        path: "/posts/:year/:month/:day/:title",
      },
    },
    // 侧边栏解析插件
    sidebarResolve: {
      enabled: true,
    },
    // H1 提取插件
    mdH1: {
      enabled: true,
    },
    // 目录页生成插件
    catalogue: {
      enabled: true,
    },
    // 滚动条插件
    perfectScrollbar: {
      enabled: true,
    },
    // 组件自动注册插件
    component: {
      enabled: true,
    },
  },
});
```

### 10.3 自定义插件开发

```ts
// plugins/my-plugin/src/index.ts
import type { Plugin } from "vite";

export function myPlugin(options = {}): Plugin {
  return {
    name: "my-plugin",
    enforce: "pre", // "pre" | "post"

    // 配置解析完成
    configResolved(config) {
      console.log("配置解析完成", config);
    },

    // 代码转换
    transform(code, id) {
      if (id.endsWith(".md")) {
        // 处理 Markdown 文件
        return code.replace(/:::my-container/g, '<div class="my-container">');
      }
      return code;
    },

    // 构建开始
    buildStart() {
      console.log("构建开始");
    },

    // 构建结束
    buildEnd() {
      console.log("构建结束");
    },
  };
}

// 导出
export default myPlugin;
```

---

## 11. 组件体系与按需引入

### 11.1 组件分类

| 分类     | 目录                          | 说明                       | 依赖              |
| -------- | ----------------------------- | -------------------------- | ----------------- |
| 公共组件 | `packages/components/common/` | 独立使用，不依赖 VitePress | Vue 3             |
| 主题组件 | `packages/components/theme/`  | 依赖 VitePress 环境        | Vue 3 + VitePress |

### 11.2 按需引入公共组件

```ts
import { TkSegmented } from "vitepress-theme-teek";
import "vitepress-theme-teek/theme-chalk/tk-segmented.css";
```

### 11.3 按需引入主题组件

```ts
import { TkHomeBanner } from "vitepress-theme-teek";
import "vitepress-theme-teek/theme-chalk/tk-home-banner.css";
```

### 11.4 按需引入示例

```ts
// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import { TkHomeBanner, TkConfigProvider } from "vitepress-theme-teek";
import "vitepress-theme-teek/theme-chalk/tk-home-banner.css";
import { h, provide } from "vue";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "home-hero-before": () =>
        h(TkConfigProvider, null, {
          default: () => h(TkHomeBanner),
        }),
    });
  },
};
```

---

## 12. 国际化与多语言

### 12.1 默认语言

Teek 内置中文（zh-CN）和英文（en-US）支持，跟随 VitePress 语言设置。

### 12.2 自定义语言

```ts
// .vitepress/teek-config.ts
const teekConfig = defineTeekConfig({
  locale: "zh-CN", // 指定语言
});
```

### 12.3 覆盖国际化文案

```ts
// .vitepress/theme/index.ts
import { teekConfigContext } from "vitepress-theme-teek";

provide(teekConfigContext, {
  locale: {
    tk: {
      banner: {
        title: "自定义标题",
      },
    },
  },
});
```

---

## 13. 样式系统与 BEM 规范

### 13.1 BEM 命名约定

Teek 采用 BEM（Block-Element-Modifier）命名约定，通过 `useNamespace` 生成：

```ts
const ns = useNamespace("home-banner");

// Block: tk-home-banner
console.log(ns.b()); // "tk-home-banner"

// Element: tk-home-banner__title
console.log(ns.e("title")); // "tk-home-banner__title"

// Modifier: tk-home-banner--active
console.log(ns.m("active")); // "tk-home-banner--active"

// State: is-disabled
console.log(ns.is("disabled")); // "is-disabled"
```

### 13.2 CSS 变量

```scss
// 定义
.tk-home-banner {
  --tk-home-banner-bg-color: #fff;
  --tk-home-banner-text-color: #333;
}

// 使用
.tk-home-banner__title {
  color: var(--tk-home-banner-text-color);
}
```

在 JS 中：

```ts
const ns = useNamespace("home-banner");

// 生成变量名
console.log(ns.cssVarName("bg-color")); // "--tk-home-banner-bg-color"

// 生成完整变量
console.log(ns.cssVar("bg-color", "#fff")); // "--tk-home-banner-bg-color: #fff"
```

### 13.3 样式文件结构

```
packages/theme-chalk/src/
├── mixins/
│   ├── _bem.scss            # BEM 混合
│   └── _function.scss       # 功能混合
├── variables/
│   ├── _color.scss          # 颜色变量
│   └── _font.scss           # 字体变量
├── components/
│   ├── common/              # 公共组件样式
│   └── theme/               # 主题组件样式
├── global/
│   ├── _reset.scss          # 重置样式
│   └── _common.scss         # 通用样式
└── index.scss               # 入口文件
```

### 13.4 自定义样式

```scss
// 项目中覆盖 Teek 样式
.tk-home-banner {
  --tk-home-banner-bg-color: #f0f0f0;

  .tk-home-banner__title {
    font-size: 2rem;
  }
}
```

---

## 14. 二次开发完整指南

### 14.1 开发环境搭建

```bash
# 克隆 Teek 仓库
git clone https://github.com/Kele-Bingtang/vitepress-theme-teek.git
cd vitepress-theme-teek

# 安装依赖
pnpm install

# 启动文档站点开发
pnpm run docs:dev

# 构建主题
pnpm run build

# 构建文档
pnpm run docs:build
```

### 14.2 核心开发约定

#### 1. 组件命名规范

```vue
<script setup lang="ts" name="MyComponent">
// 或
defineOptions({ name: "MyComponent" });
</script>
```

#### 2. 命名空间使用

每个组件使用独立的命名空间：

```ts
const ns = useNamespace("my-component");
```

#### 3. 配置获取

使用 `useTeekConfig` 获取配置，避免直接导入配置文件：

```ts
const { getTeekConfigRef } = useTeekConfig();
const myConfig = getTeekConfigRef<MyConfig>("myModule", { enabled: true });
```

#### 4. 状态持久化

用户偏好设置使用 `useStorage` 持久化：

```ts
const ns = useNamespace("my-feature");
const myMode = useStorage(ns.storageKey("mode"), "list");
```

#### 5. disabled/hidden 双模式

每个可配置模块应支持两种控制方式：

```ts
interface MyModuleConfig {
  disabled?: boolean; // 完全禁用功能
  hidden?: boolean; // 仅隐藏 UI，保留默认值配置
}
```

在模板中：

```vue
<template>
  <!-- 通过 hidden 控制 UI 可见性 -->
  <MyComponent v-if="!(config.hidden ?? false)" />
</template>
```

#### 6. 中文注释规范

所有类型定义和配置项使用中文注释：

```ts
interface MyConfig {
  /** 是否启用 */
  enabled?: boolean;
  /** 默认模式 */
  defaultMode?: "list" | "card";
}
```

#### 7. 国际化

所有用户可见的文本使用国际化：

```ts
const { t } = useLocale();
console.log(t("tk.myModule.title")); // "我的模块"
```

### 14.3 新增功能页面

#### 步骤 1：创建页面组件

```vue
<!-- packages/components/theme/my-page/src/index.vue -->
<script setup lang="ts" name="MyPage">
import { useNamespace } from "@teek/composables";
import { useTeekConfig } from "@teek/components/theme/config-provider";

defineOptions({ name: "MyPage" });

const ns = useNamespace("my-page");
const { getTeekConfigRef } = useTeekConfig();

const config = getTeekConfigRef("myPage", { enabled: true });
</script>

<template>
  <div :class="ns.b()">
    <h1 :class="ns.e('title')">我的页面</h1>
    <!-- 页面内容 -->
  </div>
</template>
```

#### 步骤 2：创建样式

```scss
// packages/theme-chalk/src/components/theme/my-page.scss
@use "../../mixins/bem" as *;

@include b(my-page) {
  padding: 2rem;

  @include e(title) {
    font-size: 2rem;
    color: var(--vp-c-text-1);
  }
}
```

#### 步骤 3：注册组件

```ts
// packages/components/theme/index.ts
export { default as TkMyPage } from "./my-page/src/index.vue";
```

#### 步骤 4：配置入口

在 `packages/components/theme/layout/index.vue` 中添加路由判断：

```vue
<template>
  <TkMyPage v-if="myPageCondition" />
  <DefaultLayout v-else />
</template>
```

### 14.4 新增 Composable 函数

```ts
// packages/composables/useMyHook.ts
import { ref, onMounted, onUnmounted } from "vue";

export function useMyHook(options = {}) {
  const data = ref(null);
  const loading = ref(false);

  const fetchData = async () => {
    loading.value = true;
    try {
      // 获取数据
      data.value = await fetch(options.url);
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchData);

  return {
    data,
    loading,
    fetchData,
  };
}
```

导出：

```ts
// packages/composables/index.ts
export { useMyHook } from "./useMyHook";
```

### 14.5 新增 Helper 函数

```ts
// packages/helper/myUtil.ts
export function myUtil(value: any): string {
  return String(value).toUpperCase();
}
```

导出：

```ts
// packages/helper/index.ts
export { myUtil } from "./myUtil";
```

---

## 15. 部署与运维

### 15.1 构建命令

```bash
# 构建文档站点
pnpm run docs:build

# 预览构建结果
pnpm run docs:preview
```

### 15.2 输出目录

构建产物位于 `docs/.vitepress/dist/` 目录。

### 15.3 GitHub Pages 部署

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm run docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

### 15.4 Vercel 部署

```json
{
  "buildCommand": "pnpm run docs:build",
  "outputDirectory": "docs/.vitepress/dist",
  "installCommand": "pnpm install"
}
```

### 15.5 Netlify 部署

```toml
[build]
  command = "pnpm run docs:build"
  publish = "docs/.vitepress/dist"
```

---

## 16. 常见问题与最佳实践

### 16.1 常见问题

**Q: Banner 图片不显示？**
A: 检查以下几点：

1. 图片路径是否正确（应放在 `public` 目录下）
2. `banner.imgSrc` 数组是否为空
3. `banner.enabled` 是否为 `true`
4. `banner.bgStyle` 是否为 `"partImg"` 或 `"fullImg"`

**Q: 壁纸模式没有效果？**
A: 壁纸模式需要满足两个条件：

1. `wallpaper.enabled: true`
2. `banner.bgStyle === "fullImg"` 或 `bodyBgImg.imgSrc` 存在
3. 在首页最顶部按 `F11` 进入全屏

**Q: 配置项不生效？**
A: 检查配置优先级：

1. `provide` 配置是否覆盖了全局配置
2. `frontmatter` 是否覆盖了全局配置
3. 配置项名称是否拼写正确

**Q: 如何自定义样式？**
A: 使用 CSS 变量覆盖：

```css
.tk-home-banner {
  --tk-home-banner-bg-color: #f0f0f0;
}
```

**Q: 如何禁用某个功能？**
A: 设置 `disabled: true`：

```ts
themeEnhance: {
  layoutSwitch: { disabled: true },
}
```

### 16.2 最佳实践

1. **配置文件分离**：将 Teek 配置独立到 `teek-config.ts` 文件
2. **使用 TypeScript**：利用类型提示避免配置错误
3. **遵循 BEM 规范**：保持样式命名一致性
4. **按需引入**：只引入需要的组件和样式
5. **国际化**：所有用户可见的文本使用国际化
6. **状态持久化**：用户偏好设置使用 `useStorage`
7. **disabled/hidden 双模式**：每个模块支持两种控制方式
8. **中文注释**：所有类型定义和配置项使用中文注释

---

## 附录 A：VitePress 插槽列表

| 插槽名                   | 位置             | Teek 使用状态 |
| ------------------------ | ---------------- | ------------- |
| `home-hero-before`       | 首页 Hero 前     | 已占用        |
| `home-hero-after`        | 首页 Hero 后     | 未占用        |
| `home-features-before`   | 首页 Features 前 | 未占用        |
| `home-features-after`    | 首页 Features 后 | 已占用        |
| `nav-bar-title-before`   | 导航标题前       | 未占用        |
| `nav-bar-title-after`    | 导航标题后       | 未占用        |
| `nav-bar-content-before` | 导航内容前       | 未占用        |
| `nav-bar-content-after`  | 导航内容后       | 已占用        |
| `nav-bar-screen-content` | 导航屏幕内容     | 未占用        |
| `layout-top`             | 布局顶部         | 已占用        |
| `layout-bottom`          | 布局底部         | 已占用        |
| `sidebar-nav-before`     | 侧边栏导航前     | 已占用        |
| `sidebar-nav-after`      | 侧边栏导航后     | 未占用        |
| `aside-top`              | 侧边栏顶部       | 未占用        |
| `aside-bottom`           | 侧边栏底部       | 已占用        |
| `aside-outline-before`   | 侧边栏大纲前     | 未占用        |
| `aside-outline-after`    | 侧边栏大纲后     | 未占用        |
| `aside-ads-before`       | 侧边栏广告前     | 未占用        |
| `aside-ads-after`        | 侧边栏广告后     | 未占用        |
| `doc-before`             | 文档前           | 已占用        |
| `doc-after`              | 文档后           | 已占用        |
| `doc-footer-before`      | 文档页脚前       | 未占用        |
| `doc-top`                | 文档顶部         | 未占用        |
| `doc-bottom`             | 文档底部         | 未占用        |
| `page-top`               | 页面顶部         | 未占用        |
| `page-bottom`            | 页面底部         | 未占用        |
| `not-found`              | 404 页面         | 未占用        |

## 附录 B：参考资源

- [Teek 官方文档](https://vp.teek.top/)
- [Teek GitHub 仓库](https://github.com/Kele-Bingtang/vitepress-theme-teek)
- [Teek 文档模板仓库](https://github.com/Kele-Bingtang/vitepress-theme-teek-docs-template)
- [VitePress 官方文档](https://vitepress.dev/zh/)
- [Vue 3 官方文档](https://vuejs.org/)
- [Vite 官方文档](https://vitejs.dev/)
