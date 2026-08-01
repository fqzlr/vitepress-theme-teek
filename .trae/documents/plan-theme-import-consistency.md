# 计划：统一主题导入方式为本地包

## Summary

将 `docs/.vitepress/theme/index.ts` 中的主题导入从 npm 包 (`vitepress-theme-teek`) 改为本地包 (`../../packages/`)，使整个文档站点统一使用本地主题源码。

## Current State Analysis

### 当前导入方式（不一致）

| 文件                             | 导入方式                                                   | 来源   |
| -------------------------------- | ---------------------------------------------------------- | ------ |
| `docs/.vitepress/theme/index.ts` | `import Teek from "vitepress-theme-teek"`                  | npm 包 |
| `docs/.vitepress/teek-config.ts` | `import { defineTeekConfig } from "../../packages/config"` | 本地   |
| `docs/.vitepress/config.ts`      | `import { version } from "../../packages/teek/version"`    | 本地   |

### `docs/.vitepress/theme/` 目录结构

```
theme/
├── index.ts                    # 主题入口（需要修改）
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
    ├── iframe.scss            # iframe 样式
    └── sidebar-icon.scss      # 侧边栏图标样式
```

**重要**：这些文件是文档站点的自定义扩展，不是 Teek 主题本身的一部分，必须保留。

## Proposed Changes

### 修改文件：`docs/.vitepress/theme/index.ts`

**当前代码**：

```ts
import Teek from "vitepress-theme-teek";
```

**修改为**：

```ts
import Teek from "../../../packages/teek";
```

同时需要检查其他从 npm 包导入的内容，统一改为本地包路径。

## Assumptions & Decisions

1. `docs/.vitepress/theme/` 目录保留 - 它是文档站点的自定义层
2. 只修改导入来源，不改变功能逻辑
3. 本地包路径使用相对路径 `../../../packages/`

## Verification Steps

1. 修改后运行 `pnpm run docs:dev` 确认站点正常启动
2. 检查首页、文章页、功能页是否正常显示
3. 确认主题增强面板、公告等功能正常工作
