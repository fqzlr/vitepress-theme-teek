// 本地 Teek 主题包引用（与 Teek 在线主题包引用 二选一）
import { defineTeekConfig } from "../../packages/config";
import { version } from "../../packages/teek/version";

// Teek 在线主题包引用（需安装 Teek 在线版本）
// import { defineTeekConfig } from "vitepress-theme-teek/config";
// import { version } from "vitepress-theme-teek/es/version";

export const teekConfig = defineTeekConfig({
  teekHome: false,
  vpHome: true,
  loading: false,
  sidebarTrigger: true,
  author: { name: "Fqzlr", link: "https://github.com/fqzlr" },
  blogger: {
    name: "Fqzlr",
    slogan: "躬身入局，心为主理，行有尺度，自持本心.",
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640",
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
  articleAnalyze: {
    dateFormat: "yyyy-MM-dd hh:mm:ss",
  },
  banner: {
    name: "🎉 Fqzlr Blog",
    bgStyle: "fullImg",
    imgSrc: ["/blog/bg1.webp", "/blog/bg2.webp", "/blog/bg3.webp"],
    description: [
      "躬身入局，心为主理，行有尺度，自持本心.",
      "Record more, talk less!",
      "请耐心做好目前的事吧，上岸是迟早的，潮水退去以后一定会收获到贝壳。",
    ],
    descStyle: "types",
  },
  wallpaper: {
    enabled: true,
    hideBanner: true,
  },
  docAnalysis: {
    createTime: "2025-03-23",
    statistics: {
      provider: "busuanzi",
    },
  },
  codeBlock: {
    copiedDone: TkMessage => TkMessage.success("复制成功！"),
  },
  post: {
    showCapture: true,
  },
  articleBanner: {
    enabled: true,
  },
  articleShare: { enabled: true },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
      ignoreIndexMd: true,
    },
  },
  footerInfo: {
    theme: {
      name: `Theme By Teek@${version}`,
    },
    copyright: {
      createYear: 2025,
      suffix: "Fqzlr",
    },
    customHtml: `<span id="runtime"></span>`, // 需要搭配 .vitepress/theme/helper/useRuntime.ts 使用
    topMessage: [
      `<span><img alt="VitePress" src="https://liuyuyang.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanimals.65eaf6e3.webp&w=750&q=75" style="width: 750px; height: 80px"><span/>`,

      `<a title="Github release" target="_blank" href="https://github.com/Kele-Bingtang/vitepress-theme-teek/releases" style="margin-right: 10px;">
        <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/Kele-Bingtang/vitepress-theme-teek?logo=github">
      </a>

      <a title="Npm Version" target="_blank" href="https://www.npmjs.com/package/vitepress-theme-teek" style="margin-right: 10px;">
        <img src="https://img.shields.io/npm/v/vitepress-theme-teek?logo=npm&color=%09%23bf00ff" alt="https://img.shields.io/npm/v/vitepress-theme-teek?color=%09%23bf00ff">
      </a>

      <img src="https://img.shields.io/badge/v18.x-x?logo=node.js&label=node" alt="node version" style="margin-right: 10px; margin-bottom: 10px;">
      <img src="https://img.shields.io/github/languages/code-size/Kele-Bingtang/vitepress-theme-teek?logo=Visual Studio Code&logoColor=blue" alt="GitHub code size in bytes" style="margin-right: 10px; margin-bottom: 10px;">

      <a title="GitHub Discussions" target="_blank" href="https://github.com/Kele-Bingtang/vitepress-theme-teek/discussions" style="margin-right: 10px;">
        <img src="https://img.shields.io/github/discussions/Kele-Bingtang/vitepress-theme-teek?color=9cf&logo=github" alt="GitHub Discussions">
      </a>

      <a title="MIT License" target="_blank" href="https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/master/LICENSE" style="margin-right: 10px;">
        <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="MIT License">
      </a>`,
    ],
  },
  footerGroup: [
    {
      title: "相关链接",
      links: [
        { name: "Fqzlr 博客", link: "https://fqzlr.com/" },
        { name: "GitHub", link: "https://github.com/fqzlr" },
      ],
    },
    {
      title: "站点导航",
      links: [
        { name: "首页", link: "/" },
        { name: "博客", link: "/blog/" },
      ],
    },
  ],
  friendLink: {
    list: [
      {
        name: "番茄主理人",
        desc: "躬身入局，心为主理，行有尺度，自持本心.",
        avatar: "https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640",
        link: "https://fqzlr.com/",
      },
      {
        name: "MmzMing的知识库",
        desc: "哈基米，南北绿豆",
        avatar: "https://i.stardots.io/784774835/StarDots-2026052116374135506.jpg",
        link: "https://tblog.mmzhiku.xyz/",
      },
      {
        name: "团子和蛋糕",
        desc: "如果你喜欢那么欢迎来到我的世界！",
        avatar: "https://re.tsh520.cn/zl/tx.webp",
        link: "https://blog.tsh520.cn/",
      },
      {
        name: "Olinl Blog",
        desc: "分享、实践、学习",
        avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=9892214&spec=0",
        link: "https://blog.olinl.com/",
      },
      {
        name: "夏夜流萤",
        desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
        avatar: "https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
        link: "https://blog.cuteleaf.cn/",
      },
      {
        name: "椰汁の主页",
        desc: "关关难过关关过,前路漫漫亦灿灿.",
        avatar: "https://free.picui.cn/free/2026/03/23/69c12fe83f7a4.jpg",
        link: "https://home.132614.xyz/",
      },
      {
        name: "UpXuu",
        desc: "逐光而上！",
        avatar: "https://upxuu.com/images/20260214145619.jpg",
        link: "https://upxuu.com/",
      },
      {
        name: "Re.Y.Ju.hao | 个人主页",
        desc: "先活着吧，其他的再想想",
        avatar: "https://img.cdn1.vip/i/69f03a1c79908_1777351196.webp",
        link: "http://irehao.42web.io/",
      },
      {
        name: "大熊",
        desc: "日常随笔与灵感收集小角落",
        avatar: "https://halo.aizaibao.cn/upload/%E5%A4%B4%E5%83%8F-AHbr.jpg",
        link: "https://halo.aizaibao.cn/",
      },
      {
        name: "xf_blog",
        desc: "立志用 cloudflare workers，GitHub pages 和 vercel 做出整个互联网的up（虽然不会成功",
        avatar: "https://github.com/xfcnl/xfcnl.github.io/blob/main/image/MEITU_20260128_220225596.jpg?raw=true",
        link: "https://xfcnl.github.io/",
      },
      {
        name: "年华",
        desc: "分享生活和技术。",
        avatar: "https://q1.qlogo.cn/g?b=qq&nk=1323860289&s=640",
        link: "https://blog.520781.xyz/",
      },
      {
        name: "yukino",
        desc: "一个现充的个人博客网站！",
        avatar:
          "https://tu.ztyukino.com/file/1778322126543_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_2026-05-09_182135_917.jpg",
        link: "https://blog.ztyukino.com/",
      },
      {
        name: "king-blog",
        desc: "这是一个很随便的网站",
        avatar:
          "https://pan.lingview.xyz/d/%E9%9B%A8%E4%BA%91%E8%8A%82%E7%82%B9/%E5%9B%BE%E5%BA%93/%E5%A4%A9%E4%BE%9D/Image_1721230292906.png?sign=JU30z6z_RsZ3Vv7HB_5D3msYRneiga5NLjhN3EpL-3w=:0",
        link: "https://www.888721.xyz/",
      },
      {
        name: "冬月",
        desc: "分享自己的一些学习心得和生活琐事",
        avatar: "https://dongyue.org/avatar.webp",
        link: "https://dongyue.org/",
      },
      {
        name: "ZSSO",
        desc: "一步一印，自成风景。",
        avatar: "https://z.wiki/u/bV2PV5yR9",
        link: "https://www.zsso.net/",
      },
      {
        name: "versus0",
        desc: "技术个人博客",
        avatar:
          "https://img.542000.xyz/file/friend_avatar/1778931720838_f167cb95af9d881f4378b92b3e181d89_4647054993754934443.jpg",
        link: "https://blog.542000.xyz/",
      },
      {
        name: "星遐蝶梦",
        desc: "星穹漫遐，蝶携清梦。",
        avatar: "https://blog.casto.top/assets/images/icon.png",
        link: "https://blog.casto.top/",
      },
      {
        name: "晴宙",
        desc: "保持热爱，持续创造",
        avatar: "https://pilvocmbhhgywprdywkx.supabase.co/storage/v1/object/public/images/avatar/avatar.jpg",
        link: "https://qingzhou.dpdns.org/",
      },
      {
        name: "Saimen blog",
        desc: "读史可以明智,知古方能鉴今",
        avatar: "https://img.z2m.store/file/1779081943822_butterfly-icon.png",
        link: "https://com.z2m.store/",
      },
      {
        name: "miuo",
        desc: "记录文章、笔记、实验和暂时不想丢掉的内容。",
        avatar: "https://blog.miuo.me/avatar.avif",
        link: "https://miuo.me/",
      },
      {
        name: "my.vueko",
        desc: "来了",
        avatar: "https://q1.qlogo.cn/g?b=qq&nk=2710155768&s=640",
        link: "https://vuekoo.com/",
      },
      {
        name: "YFBLOG - 幻新至简",
        desc: "随手笔记，技术心得分享.",
        avatar: "https://cdn.yfblog.asia/image/favicon.ico",
        link: "https://yfblog.asia/",
      },
      {
        name: "十三",
        desc: "欲买桂花同载酒，终不似，少年游。",
        avatar: "https://img.nw177.cn/blog/100.assets/avatar.webp",
        link: "https://blog.nw177.cn/",
      },
      {
        name: "ZhiJing's Blog",
        desc: "Go with the flow.",
        avatar: "https://iwexe.top/avatar.svg",
        link: "https://iwexe.top/",
      },
      {
        name: "Sigrika-善良耙耙柑🍊",
        desc: "记录我的二次元之旅",
        avatar:
          "https://weavatar.com/avatar/bc0dba25ea5949e8290d012e081ceec669aa7784c7ad765173473c80cbaee404:tv_%E5%A4%A7%E5%93%AD",
        link: "https://qwq.sigrika.cc/",
      },
      {
        name: "L!!!!ght",
        desc: "阳光正好，慢慢前行。",
        avatar: "https://easyimg.kejk.cn/i/4484873c-c2cc-4b3d-bc35-5c72ed01cfd9.webp",
        link: "https://sunlight.kejk.cn/",
      },
      {
        name: "拾光の博客",
        desc: "拾取散落的时光碎片",
        avatar:
          "https://weavatar.com/api/avatar/ff2a232e034fb7677c9f211c5979619f3f4818302ae2cf2a11ea74af530e7758?s=50&t=1780753762637",
        link: "https://mistfly.xyz/",
      },
      {
        name: "冰汐梦",
        desc: "当所有剑都归鞘时，真正的较量才刚刚开始——那是人心与天地的对弈。",
        avatar: "https://tu.irier0023.xyz/file/1780921907488_avatar.avif",
        link: "https://blog.irier0023.xyz/",
      },
      {
        name: "ysdy~Blog",
        desc: "人生苦短，摆烂优先",
        avatar: "https://i.stardots.io/366046882645/StarDots-2026052814483375536.png",
        link: "https://ysdyblog.ccwu.cc/",
      },
      {
        name: "风起",
        desc: "无善无恶心之体，有善有恶意之动",
        avatar: "https://blog.windstart.top/_astro/xiao.DZR3cwiW_1XI6Uv.webp",
        link: "https://blog.windstart.top/",
      },
      {
        name: "小生",
        desc: "天生我材必有用，千金散尽还复来。",
        avatar: "https://t.alcy.cc/tx",
        link: "https://www.zsso.cn/",
      },
      {
        name: "Hyde Blog",
        desc: "人心中的成见是一座大山",
        avatar: "https://seasir.top/assets/avatar.avif",
        link: "https://seasir.top/",
      },
      {
        name: "gc的小站",
        desc: "综合性网站，希望对你有帮助",
        avatar: "https://www.gcweb.cc/static/img/pig.jpg",
        link: "https://gcweb.cc/",
      },
      {
        name: "他说",
        desc: "梁栋烨的博客网站。",
        avatar: "https://090909.top/assets/images/logo.ico",
        link: "https://090909.top/",
      },
      {
        name: "RAGNote",
        desc: "一堆水文的小站，记录学习过程、项目实践，以及那些让我感兴趣的事物。Life is code. I will debug it.",
        avatar: "https://ragnote.top/avatar.png",
        link: "https://ragnote.top/",
      },
      {
        name: "深渊园丁",
        desc: "这个网站是我送给互联网的一本手绘笔记。如果你在这里找到了什么让你停留的东西，那我们就已经是朋友了",
        avatar: "https://www.minedensity.top/favicon.svg",
        link: "https://www.minedensity.top/",
      },
      {
        name: "落樱大王の小窝",
        desc: "生如利刃，熔炉竟是我自己。",
        avatar: "https://aclsky.sakurafishermua.top/i/2026/05/26/6a15b692c4cb9.jpg",
        link: "https://acblog.sakurafishermua.top/",
      },
      {
        name: "xane",
        desc: "Keep going.",
        avatar: "https://cloudflare-imgbed-d88.pages.dev/file/1784102742642_%E5%A4%B4%E5%83%8F.jpg",
        link: "https://xane.eu.cc/",
      },
      {
        name: "JerryLife",
        desc: "Enjoy life",
        avatar: "https://free.picui.cn/free/2026/07/16/6a58eb63ecbd1.png",
        link: "https://jerry-nis.top/",
      },
      {
        name: "Yukihime",
        desc: "你的瞳色 是我生命苦寻的永生花",
        avatar: "https://yukihime.dev/assets/images/moments-avatar.webp?v=20260725-avatar",
        link: "https://yukihime.dev/",
      },
      {
        name: "旧梦与花",
        desc: "欲买桂花同载酒，终不似，少年游",
        avatar: "https://zhh2001.github.io/avatar.jpg",
        link: "https://zhh2001.github.io/",
      },
      {
        name: "Zero-浮生",
        desc: "浮生一刹万般皆舍.",
        avatar: "https://vtdd.vip/_astro/avatar.ryzKiMN3_19g6Gw.webp",
        link: "https://vtdd.vip/",
      },
      {
        name: "萧小晓",
        desc: "一个爱写文的菜鸡。",
        avatar: "https://www.lxlovo.top/png.png",
        link: "https://blog.lxlovo.top/",
      },
      {
        name: "Aimerting",
        desc: "「纯粹祈愿皆成真」",
        avatar: "https://blog.xuioo.com/avatar.jpg",
        link: "https://blog.xuioo.com/",
      },
      {
        name: "笔尖代码",
        desc: "笔尖代码 - 一个汇聚了前端、后端、数据库、运维、系统知识等内容的个人技术文档库",
        avatar: "https://123456l.com/assets/images/logo.png",
        link: "https://123456l.com/",
      },
      {
        name: "Pasule",
        desc: "如果等着遗忘，你又为什么歌唱\n",
        avatar: "https://pasule.com/favicon/favicon-pasule.ico",
        link: "https://pasule.com/",
      },
      {
        name: "天狗的博客",
        desc: "一个记录生活的博客",
        avatar:
          "http://tengu.l2.ink/wp-content/uploads/2026/07/cropped-Camera_XHS_17834972703201040g00831dq5qmlm0m6g5od3.jpg",
        link: "https://tengu.l2.ink/",
      },
      {
        name: "星诺的博客",
        desc: "只要热爱，太阳就会升起！",
        avatar: "https://blog.astrvow.com/_astro/logo.DuHgmi9I_1k5uPc.webp",
        link: "https://blog.astrvow.com/",
      },
      {
        name: "LQQ",
        desc: "关于设计、技术与长期主义的个人记录。",
        avatar: "https://lqq.ai/assets/avatar-128.webp",
        link: "https://lqq.ai/",
      },
      {
        name: "逸树の小屋",
        desc: "逸枝向野，静木生风。",
        avatar: "https://474029.xyz/assets/images/mmexport1766207871022.png",
        link: "https://474029.xyz/",
      },
    ],
    autoScroll: true,
  },
  social: [
    {
      icon: "icon-github",
      name: "GitHub",
      link: "https://github.com/fqzlr",
    },
  ],
  themeEnhance: {
    themeColor: {
      append: [
        {
          label: "扩展主题色板",
          tip: "扩展主题色板",
          options: [
            // --- 活力与明亮系 --
            { label: "紫罗兰", value: "violet", color: "#7166f0" }, // 经典优雅，视觉舒适
            { label: "珊瑚粉", value: "coral-pink", color: "#ff6b6b" }, // 温暖活泼，亲和力强
            { label: "天蓝", value: "sky-blue", color: "#00bbf9" }, // 清新开阔，科技感初显
            { label: "蓝绿", value: "blue-green", color: "#00f5d4" }, // 独特醒目，现代感强
            { label: "粉红", value: "pink", color: "#f15bb5" }, // 浪漫柔和，女性化倾向
            { label: "黄绿", value: "yellow-green", color: "#8ac926" }, // 生机盎然，自然清新
            { label: "橙红", value: "orange-red", color: "#ff9e6b" }, // 热情洋溢，活力四射
            // --- 沉稳与专业系 ---
            { label: "石板灰", value: "slate-gray", color: "#708090" }, // 低调内敛，极简主义
            { label: "深海蓝", value: "ocean-blue", color: "#0077be" }, // 沉稳专业，信赖感强
            { label: "科技蓝", value: "tech-blue", color: "#0056b3" }, // 经典商务，理性冷静
            { label: "靛青色", value: "indigo", color: "#4b0082" }, // 深邃神秘，高端大气
            { label: "炭灰色", value: "charcoal", color: "#36454f" }, // 极致暗黑，专注阅读
            // --- 自然与清新系 ---
            { label: "薄荷绿", value: "mint", color: "#3eb489" }, // 清新护眼，缓解疲劳
            { label: "松石绿", value: "turquoise", color: "#40e0d0" }, // 晶莹剔透，清凉夏日
            { label: "橄榄绿", value: "olive-green", color: "#808000" }, // 复古自然，大地气息
            { label: "柠檬黄", value: "lemon", color: "#ffd700" }, // 明亮欢快，警示提醒
            // --- 浪漫与柔和系 ---
            { label: "薰衣草", value: "lavender", color: "#967bb6" }, // 梦幻柔美，宁静安神
            { label: "玫瑰金", value: "rose-gold", color: "#b76e79" }, // 时尚轻奢，精致优雅
            { label: "豆沙红", value: "bean-paste-red", color: "#d27d7d" }, // 温柔知性，低调奢华
            { label: "雾霾蓝", value: "haze-blue", color: "#6699cc" }, // 莫兰迪色系，高级耐看
            // --- 霓虹与赛博系 ---
            { label: "霓虹紫", value: "neon-purple", color: "#bc13fe" }, // 赛博朋克，未来感十足
            { label: "极光绿", value: "aurora-green", color: "#00ff9d" }, // 高亮荧光，极客风格
            // --- 温暖与丰收系 ---
            { label: "日落橙", value: "sunset-orange", color: "#ff7f50" }, // 温暖热烈，黄昏意境
            { label: "琥珀色", value: "amber", color: "#ffbf00" }, // 珍贵通透，古典韵味
          ],
        },
      ],
    },
  },
  markdown: {
    demo: {
      githubUrl: "https://github.com/fqzlr/vitepress-theme-teek/blob/master/docs",
    },
  },
  siteAnalytics: [
    {
      provider: "umami",
      options: {
        id: "4f4d87b0-bf0f-403a-a7c1-71962537673a",
        src: "https://umami.fqzlr.com/script.js",
      },
    },
  ],
});
