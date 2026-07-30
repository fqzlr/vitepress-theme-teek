# 替换 Teek 配置中个人信息为 Fqzlr 信息的计划

## 一、摘要

将 `docs/.vitepress/teek-config.ts` 中所有与个人相关的配置项（网站名称、背景图、个人签名、友链、社交链接等）替换为 Fqzlr 的信息。替换后的内容准确反映 Fqzlr 的个人信息和偏好设置。

## 二、当前状态分析

### 2.1 目标文件

- **`docs/.vitepress/teek-config.ts`** — Teek 主题主配置文件，包含全部个人相关信息

### 2.2 现有配置内容（需替换）

| 配置项                        | 当前值                                 | 来源          |
| ----------------------------- | -------------------------------------- | ------------- |
| `author`                      | `Teeker`                               | Teek 主题作者 |
| `blogger.name`                | `天客`                                 | Teek 主题作者 |
| `blogger.slogan`              | `朝圣的使徒，正在走向编程的至高殿堂！` | Teek 主题作者 |
| `blogger.avatar`              | Teeker 头像                            | Teek 主题作者 |
| `banner.name`                 | `🎉 Teek Blog`                         | Teek 主题     |
| `banner.imgSrc`               | `/blog/bg1.webp` 等                    | Teek 自带图片 |
| `banner.description`          | 三条来自不同人的签名                   | Teek 主题     |
| `friendLink.list`             | 8 个 Teek 相关友链                     | Teek 生态     |
| `footerInfo.copyright.suffix` | `Teek`                                 | Teek 主题     |
| `social`                      | Kele-Bingtang 的 GitHub/Gitee          | Teek 作者     |
| `footerGroup`                 | 示例链接                               | Teek 示例     |
| `siteAnalytics`               | Teek 的百度/Google 统计 ID             | Teek 作者     |

### 2.3 源数据（Fqzlr 信息）

| 数据项       | 值                                             | 源文件               |
| ------------ | ---------------------------------------------- | -------------------- |
| 网站名称     | `Fqzlr的博客`                                  | `siteConfig.ts`      |
| 个人签名     | `躬身入局，心为主理，行有尺度，自持本心.`      | `profileConfig.ts`   |
| 头像         | `https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640` | `profileConfig.ts`   |
| 友链数据     | 50 条友链                                      | `links/friends.json` |
| GitHub       | `https://github.com/fqzlr`                     | `profileConfig.ts`   |
| Bilibili     | `https://space.bilibili.com/2017273493`        | `profileConfig.ts`   |
| 站点描述     | `fqzlr的个人技术博客...`                       | `siteConfig.ts`      |
| 站点关键词   | `fqzlr, JAVA, AI, Astro...`                    | `siteConfig.ts`      |
| 站点开始日期 | `2026-04-12`                                   | `siteConfig.ts`      |
| 站点时区     | `Asia/Shanghai`                                | `siteConfig.ts`      |
| Umami 统计   | `websiteId: 4f4d87b0...`                       | `siteConfig.ts`      |
| 赞助链接     | `https://ifdian.net/a/fqzlr`                   | `sponsorConfig.ts`   |

## 三、具体变更清单

### 3.1 替换 `author` 配置（第 14 行）

```ts
// 修改前
author: { name: "Teeker", link: "https://github.com/Kele-Bingtang" },
// 修改后
author: { name: "Fqzlr", link: "https://github.com/fqzlr" },
```

### 3.2 替换 `blogger` 配置（第 15-28 行）

```ts
// 修改前
blogger: {
  name: "天客",
  slogan: "朝圣的使徒，正在走向编程的至高殿堂！",
  avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar1.png",
  shape: "circle-rotate",
  circleBgImg: "/blog/bg4.webp",
  color: "#ffffff",
  circleSize: 120,
  status: {
    icon: "😪",
    size: 28,
    title: "困",
  },
},
// 修改后
blogger: {
  name: "Fqzlr",
  slogan: "躬身入局，心为主理，行有尺度，自持本心.",
  avatar: "https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640",
  shape: "circle-rotate",
  circleBgImg: "/blog/bg4.webp",
  color: "#ffffff",
  circleSize: 120,
  status: {
    icon: "🍅",
    size: 28,
    title: "番茄主理人",
  },
},
```

### 3.3 替换 `banner` 配置（第 32-42 行）

```ts
// 修改前
banner: {
  name: "🎉 Teek Blog",
  bgStyle: "fullImg",
  imgSrc: ["/blog/bg1.webp", "/blog/bg2.webp", "/blog/bg3.webp"],
  description: [
    "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
    "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
    "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw",
  ],
  descStyle: "types",
},
// 修改后
banner: {
  name: "🍅 Fqzlr 的博客",
  bgStyle: "fullImg",
  imgSrc: ["/blog/bg1.webp", "/blog/bg2.webp", "/blog/bg3.webp"],
  description: [
    "躬身入局，心为主理，行有尺度，自持本心。—— Fqzlr",
  ],
  descStyle: "types",
},
```

### 3.4 替换 `friendLink` 配置（第 118-170 行）

将原有的 8 个 Teek 生态友链替换为 Fqzlr 的 50 个友链（数据源：`links/friends.json`）。每个友链格式映射：

- `name` → `title`（源数据中的标题）
- `avatar` → `imgurl`（源数据中的头像URL）
- `desc` → `desc`（源数据中的描述）
- `link` → `siteurl`（源数据中的站点URL）

### 3.5 替换 `social` 配置（第 171-182 行）

```ts
// 修改前
social: [
  { icon: "icon-github", name: "GitHub", link: "https://github.com/kele-bingtang" },
  { icon: "icon-gitee", name: "Gitee", link: "https://gitee.com/kele-bingtang" },
],
// 修改后
social: [
  { icon: "icon-github", name: "GitHub", link: "https://github.com/fqzlr" },
  { icon: "simple-icons:bilibili", name: "Bilibili", link: "https://space.bilibili.com/2017273493" },
  { icon: "simple-icons:tencentqq", name: "QQ群", link: "https://qm.qq.com/q/wrmF4FI9pu" },
],
```

### 3.6 替换 `footerInfo.copyright` 配置（第 73-76 行）

```ts
// 修改前
copyright: {
  createYear: 2025,
  suffix: "Teek",
},
// 修改后
copyright: {
  createYear: 2026,
  suffix: "Fqzlr",
},
```

### 3.7 替换 `footerGroup` 配置（第 101-117 行）

将原有的示例链接替换为 Fqzlr 的相关链接。

### 3.8 替换 `siteAnalytics` 配置（第 230-243 行）

将 Teek 的百度/Google 统计 ID 替换为 Fqzlr 的 Umami 统计配置。

### 3.9 更新 `config.ts` 中的站点信息（第 19-35 行）

- `title` → `Fqzlr 的博客`
- `description` → Fqzlr 的站点描述
- `head` 中的 `author` → `Fqzlr`
- `head` 中的 `og:title` → `Fqzlr 的博客`
- `head` 中的 `og:site_name` → `Fqzlr 的博客`
- `head` 中的 `og:url` → `https://fqzlr.com`
- 移除 Teek 特有的百度/Bing 验证和 51.la 统计
- 添加 Fqzlr 的 Umami 统计

### 3.10 更新 `docs/40.博客/目录.md` 中的 `desc`

当前 `desc: "Fqzlr 的个人博客文章"` 已正确，无需修改。

## 四、不修改的内容

- 所有 Teek 主题功能配置（如 `themeEnhance`, `markdown`, `vitePlugins`, `codeBlock`, `articleAnalyze`, `articleBanner`, `articleShare`, `post`, `wallpaper`, `docAnalysis`, `loading`, `sidebarTrigger`, `teekHome`, `vpHome` 等）
- 所有现有文章内容
- 所有文档页面内容
- 导航栏配置（仅保持已有的"博客"导航项）

## 五、实施步骤

### 步骤 1：更新 `teek-config.ts` 中的个人信息

- 替换 `author`
- 替换 `blogger`
- 替换 `banner`
- 替换 `friendLink.list`（50 个友链）
- 替换 `social`
- 替换 `footerInfo.copyright`
- 替换 `footerGroup`
- 替换 `siteAnalytics`

### 步骤 2：更新 `config.ts` 中的站点元信息

- 替换 `title`
- 替换 `description`
- 替换 `head` 中的 SEO 相关 meta
- 替换统计代码

### 步骤 3：验证

- 运行 `pnpm run docs:dev`
- 确认所有页面正常返回 200
- 确认现有内容未被破坏

## 六、注意事项

1. 友链数据量较大（50 条），需小心处理格式
2. 项目使用 `teekHome: false`（文档模式），Teek 的博客风格功能（banner、blogger 等）在文档模式下不直接显示，但配置值仍然保留供其他场景使用
3. 保留 `banner.imgSrc` 中的 `/blog/bg1.webp` 等图片路径不变（这些是项目自带的背景图）
4. 友链数据中第一条是 Fqzlr 自身（番茄主理人），需确认是否包含在友链列表中
