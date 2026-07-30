import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";
import { teekConfig } from "./teek-config";
// 本地 Teek 主题包引用（与 Teek 在线主题包引用 二选一）
import { version } from "../../packages/teek/version";

// Teek 在线主题包引用（需安装 Teek 在线版本）
// import { version } from "vitepress-theme-teek/es/version";

const description = "fqzlr的个人技术博客，专注NAS分享、AI实践、学习笔记与技术总结，与个人成长分享。";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  title: "Fqzlr 的博客",
  description: description,
  cleanUrls: false,
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "Fqzlr 的博客" }],
    ["meta", { property: "og:site_name", content: "Fqzlr 的博客" }],
    ["meta", { property: "og:image", content: "https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640" }],
    ["meta", { property: "og:url", content: "https://fqzlr.com" }],
    ["meta", { property: "og:description", content: description }],
    ["meta", { name: "description", content: description }],
    ["meta", { name: "author", content: "Fqzlr" }],
    ["meta", { name: "keywords", content: "fqzlr, JAVA, AI, Astro, ACGN, 博客, 技术博客, 静态博客" }],
  ],
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  sitemap: {
    hostname: "https://fqzlr.com",
    transformItems: items => {
      const permalinkItemBak: typeof items = [];
      // 使用永久链接生成 sitemap
      const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig.permalinks;
      items.forEach(item => {
        const permalink = permalinks?.map[item.url.replace(".html", "")];
        if (permalink) permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
      });
      return [...items, ...permalinkItemBak];
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "指南",
        link: "/guide/intro",
        activeMatch: "/01.指南/",
      },
      { text: "配置", link: "/reference/config", activeMatch: "/10.配置/" },
      { text: "开发", link: "/develop/intro", activeMatch: "/15.主题开发/" },
      {
        text: "资源",
        items: [
          { text: "案例", link: "/resources/case" },
          { text: "常见问题", link: "/resources/qa" },
          { text: "功能拓展", link: "/resources/expand/intro" },
        ],
      },
      {
        text: "生态",
        items: [
          { text: "Components 组件", link: "/ecosystem/components" },
          { text: "运行时 API", link: "/ecosystem/runtime-api" },
          { text: "Helper 工具", link: "/ecosystem/helper" },
          { text: "Composables 函数", link: "/ecosystem/composables" },
          { text: "Markdown 插件工具", link: "/ecosystem/md-plugin-utils" },
        ],
      },
      {
        text: "功能页",
        items: [
          { text: "归档页", link: "/archives" },
          { text: "清单页", link: "/articleOverview" },
          { text: "登录页", link: "/login" },
          { text: "风险链接提示页", link: "/risk-link?target=https://vp.teek.top" },
          { text: "分类页", link: "/categories" },
          { text: "标签页", link: "/tags" },
        ],
      },
      { text: "博客", link: "/blog/", activeMatch: "/40.博客/" },
      { text: "✨ 赞赏", link: "/personal/" },
      {
        text: version,
        items: [
          { text: "历史版本", link: "https://github.com/Kele-Bingtang/vitepress-theme-teek/releases" },
          { text: "更新日志", link: "https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/dev/CHANGELOG.md" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/fqzlr" }],
    search: {
      provider: "algolia",
      options: {
        appId: "2LFTZ9LKO9",
        apiKey: "017332fa7dc0bbe5e1637b215f92a5d1",
        indexName: "vitepress_theme_teek",
      },
    },
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern: "https://github.com/fqzlr/vitepress-theme-teek/edit/master/docs/:path",
    },
  },
  vite: {
    plugins: [llmstxt() as any],
  },
  // transformHtml: (code, id, context) => {
  //   if (context.page !== "404.md") return code;
  //   return code.replace("404 | ", "");
  // },
});
