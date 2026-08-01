# docs/.vitepress/theme 目录作用说明

## 架构概述

VitePress 的配置体系分为两个层面：

| 文件/目录        | 作用                                     | 类比               |
| ---------------- | ---------------------------------------- | ------------------ |
| `config.ts`      | VitePress 站点配置（标题、导航、SEO 等） | 网站的"身份证"     |
| `teek-config.ts` | Teek 主题配置（Banner、公告、卡片等）    | 网站的"装修方案"   |
| `theme/`         | 主题扩展层（自定义组件、样式、逻辑）     | 网站的"个性化定制" |

## 详细说明

### 1. `teek-config.ts` - 配置层

**作用**：定义 Teek 主题的各种功能开关和参数

```ts
export const teekConfig = defineTeekConfig({
  teekHome: true, // 启用博客风格首页
  banner: { enabled: true }, // Banner 配置
  notice: { enabled: true }, // 公告配置
  // ... 更多配置
});
```

**特点**：纯配置，不包含任何 UI 组件或逻辑代码

### 2. `theme/` - 扩展层

**作用**：在 Teek 主题基础上添加自定义功能

```
theme/
├── index.ts                    # 主题入口（扩展 Teek）
├── components/
│   ├── 404.vue                # 自定义 404 页面
│   ├── calendar-card.vue      # 日历卡片组件
│   ├── contribute-chart.vue   # 贡献图表组件
│   ├── teek-layout-provider.vue # 布局提供者（核心）
│   └── theme-config.vue       # 主题配置面板
├── composables/
│   ├── use-ribbon.ts          # 彩带效果
│   └── use-runtime.ts         # 运行时间
└── styles/
    ├── code-bg.scss           # 代码背景样式
    └── iframe.scss            # iframe 样式
```

### 3. 核心文件 `teek-layout-provider.vue`

这是整个扩展层的核心，它：

1. **继承 Teek 布局**：`<Teek.Layout>`
2. **通过插槽注入自定义组件**：
   - `#teek-theme-enhance-bottom` → 主题配置面板
   - `#teek-home-card-my-after` → 日历卡片
   - `#teek-archives-top-before` → 贡献图表
   - `#not-found` → 自定义 404 页面
3. **提供运行时功能**：
   - 彩带背景效果
   - 页脚运行时间显示
   - 主题配置动态切换

### 4. 关系图

```
config.ts
  └── extends: teekConfig (配置层)

theme/index.ts
  └── extends: Teek (主题层)
      └── Layout: TeekLayoutProvider (扩展层)
          ├── Teek.Layout (继承 Teek 布局)
          ├── ThemeConfig (主题配置面板)
          ├── CalendarCard (日历卡片)
          ├── ContributeChart (贡献图表)
          └── NotFound (404 页面)
```

## 总结

| 问题                      | 答案                             |
| ------------------------- | -------------------------------- |
| `teek-config.ts` 是什么？ | 配置文件，定义功能开关和参数     |
| `theme/` 是什么？         | 扩展层，添加自定义组件和功能     |
| 两者能合并吗？            | 不能，它们职责不同               |
| `theme/` 能删除吗？       | 不能，删除会丢失所有自定义功能   |
| `theme/` 是多余的吗？     | 不是，它是文档站点的个性化定制层 |

## 类比说明

- `teek-config.ts` = 买房子时的**装修清单**（选什么风格、什么配置）
- `theme/` = 装修完成后的**个性化布置**（挂什么画、放什么家具）

两者缺一不可，共同构成完整的博客站点。
