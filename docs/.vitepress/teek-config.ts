// 本地 Teek 主题包引用（与 Teek 在线主题包引用 二选一）
import { defineTeekConfig } from "../../packages/config";
import { version } from "../../packages/teek/version";

// Teek 在线主题包引用（需安装 Teek 在线版本）
// import { defineTeekConfig } from "vitepress-theme-teek/config";
// import { version } from "vitepress-theme-teek/es/version";

export const teekConfig = defineTeekConfig({
  teekTheme: true, // 是否启用 Teek 主题
  teekHome: true, // 是否启用 Teek 的首页风格（博客风格），如果为 false，则还原到 VitePress 的默认首页
  vpHome: true, // 是否启用 VitePress 首页风格，支持 teekHome 和 vpHome 同时存在
  loading: false, // 页面加载 Loading 动画配置，如果为 boolean，则控制是否启用，如果为字符串，则指定加载 Loading 动画的文案
  homeCardListPosition: "left", // 首页卡片栏列表位置，当为 left 则在文章列表左侧，当为 right 则在文章列表右侧
  sidebarTrigger: true, // 是否启用侧边栏展开/折叠触发器，点击触发器可以展开/折叠侧边栏。
  anchorScroll: true, // 是否启用锚点滚动功能，即阅读文章时，自动将 h1 ~ h6 标题添加到地址栏 # 后面
  // 深色、浅色模式切换时是否开启过渡动画
  viewTransition: {
    enabled: true, // 是否启用深浅色切换动画效果
    mode: "out-in", // 动画模式，out 始终从点击点往全屏扩散，out-in 第一次从点击点往全屏扩散，再次点击从全屏回到点击点
    duration: 300, // 动画持续时间，当 mode 为 out 时，默认为 300ms，mode 为 out-in 时，默认为 600ms
    easing: "ease-in", // 缓动函数
  },
  themeSize: "large", // 站点尺寸，默认为 medium
  // 右下角回到顶部配置
  backTop: {
    enabled: true, // 是否启动回到顶部功能
    content: "progress", // 回到顶部按钮的显示内容，可选配置 progress | icon
    done: TkMessage => TkMessage.success("返回顶部成功"), // 回到顶部后的回调
  },
  // 滚动到评论区配置
  toComment: {
    enabled: true, // 是否启动滚动到评论区功能
    done: TkMessage => TkMessage.success("滚动到评论区成功"), // 滚动到评论区后的回调
  },
  // 代码块配置
  codeBlock: {
    enabled: true, // 是否启用新版代码块
    collapseHeight: 700, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    overlay: false, // 代码块底部是否显示展开/折叠遮罩层
    overlayHeight: 400, // 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
    langTextTransform: "uppercase", // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
    copiedDone: TkMessage => TkMessage.success("复制成功！"), // 复制代码完成后的回调
  },
  windowTransition: true, // 是否全局给部分元素启用视图渐入过渡效果，当为 boolean 类型，则控制全局是否启用，当为 object 类型，则控制部分元素是否启用
  // body 背景图片配置，将整个网站的背景色改为图片。
  // bodyBgImg: {
  //   imgSrc: ["/blog/bj1.jpg"], // body 背景图片链接。单张图片 string | 多张图片 string[], 多张图片时每隔 imgInterval 秒换一张
  //   imgOpacity: 1, // body 背景图透明度，选值 0.1 ~ 1.0
  //   imgInterval: 15000, //  body 当多张背景图时（imgSrc 为数组），设置切换时间，单位：毫秒
  //   imgShuffle: false, // body 背景图是否随机切换，为 false 时按顺序切换
  //   mask: true, // body 背景图遮罩
  //   maskBg: "rgba(0, 0, 0, 0.2)", // body 背景图遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。mask 为 true 时生效
  // },
  // 主题增强配置，当开启后，右上角将有主题增强面板出现。
  themeEnhance: {
    enabled: true, // 启用主题增强功能
    position: "top", // 位置，top 为导航栏右侧，bottom 为右下角
    // 布局切换配置
    layoutSwitch: {
      disabled: false, // 禁用布局切换
      defaultMode: "original", // 布局切换的默认模式
      disableHelp: false, // 禁用帮助提示
      disableAnimation: false, // 禁用布局切换动画
      defaultDocMaxWidth: 90, // 内容布局最大宽度的默认百分比，仅限 0-100
      disableDocMaxWidthHelp: false, // 禁用帮助提示
      defaultPageMaxWidth: 95, // 页面布局最大宽度的默认百分比，仅限 0-100
      disablePageMaxWidthHelp: false, // 禁用帮助提示
    },
    // 布局主题色配置
    themeColor: {
      disabled: false, // 禁用布局主题色切换
      defaultColorName: "vp-primary", // 布局默认主题色
      defaultSpread: false, // 是否将主题色扩散到其他元素（根据主题色计算其他元素需要的颜色）
      disableHelp: false, // 禁用帮助提示
      disabledInMobile: false, // 是否在移动端禁用
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
    // 聚光灯配置
    spotlight: {
      disabled: false, // 禁用聚光灯
      defaultStyle: "aside", //  聚光灯默认样式
      disableHelp: false, // 禁用帮助提示
      defaultValue: true, // 聚光灯默认开关状态
    },
  },
  // 文章默认的作者信息
  author: { name: "Fqzlr", link: "https://github.com/fqzlr" },
  // 公告配置
  notice: {
    enabled: false, // 是否启用公告功能
    title: "公告", // 公告标题，支持函数式：需要和国际化搭配使用，根据不同语言环境返回不同标题
    initOpen: true,
    duration: 0, // 弹框定时自动关闭，0 不自动消失
    mobileMinify: false, // 移动端自动最小化
    reopen: true,
    useStorage: true, // 是是否使用 localStorage 存储公告状态，如：当打开公告弹框后，下次进来则自动打开弹框
    twinkle: false, // 公告图标是否打开闪烁提示
    position: "top", // 公告弹框出现位置
    // ...
  },
  // 站点分析配置
  siteAnalytics: [
    { provider: "google", options: { id: "******" } },
    { provider: "baidu", options: { id: "******" } },
    {
      provider: "umami",
      options: { id: "4f4d87b0-bf0f-403a-a7c1-71962537673a", src: "https://umami.fqzlr.com/script.js" },
    },
  ],
  // 首页 Banner 配置，位于首页顶部
  banner: {
    enabled: true, // 是否启用 Banner
    name: "Teek", // Banner 标题，默认读取 vitepress 的 title 属性
    bgStyle: "fullImg", // Banner 背景风格：pure 为纯色背景，partImg 为局部图片背景，fullImg 为全屏图片背景
    pureBgColor: "#28282d", // Banner 背景色，bgStyle 为 pure 时生效
    imgSrc: ["/blog/bj13.jpg", "/blog/bj11.jpg"], // Banner 图片链接。bgStyle 为 partImg 或 fullImg 时生效
    imgInterval: 15000, // 当多张图片时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: false, // 图片是否随机切换，为 false 时按顺序切换，bgStyle 为 partImg 或 fullImg 时生效
    imgWaves: true, // 是否开启 Banner 图片波浪纹，bgStyle 为 fullImg 时生效
    mask: true, // Banner 图片遮罩，bgStyle 为 partImg 或 fullImg 时生效
    maskBg: "rgba(0, 0, 0, 0.4)", // Banner 遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。bgStyle 为 partImg 或 fullImg 且 mask 为 true 时生效
    textColor: "#ffffff", // Banner 字体颜色，bgStyle 为 pure 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "3.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    descStyle: "types", // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
    description: [
      "躬身入局，心为主理，行有尺度，自持本心.",
      "Record more, talk less!",
      "请耐心做好目前的事吧，上岸是迟早的，潮水退去以后一定会收获到贝壳。",
    ], // 描述信息
    switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
    typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
    typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
    features: [{ title: "", details: "", link: "", image: "" }], // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
    featureCarousel: 4000, // feature 轮播间隔时间，单位：毫秒。仅在移动端生效（屏幕小于 719px）
  },
  // 壁纸模式，在首页 最顶部 进入全屏后开启，仅当 banner.bgStyle = 'fullImg' 或 bodyBgImg.imgSrc 存在才生效。
  wallpaper: {
    enabled: false, // 是否启用壁纸模式
    hideBanner: false, // 开启壁纸模式后，是否隐藏 Banner
    hideMask: true, // 开启壁纸模式后，是否隐藏 Banner 或 bodyBgImage 的遮罩层，则确保 banner.mask 和 bodyBgImage.mask 为 true 才生效
  },
  // 文章配置
  post: {
    postStyle: "list", // 文章列表风格
    excerptPosition: "top", // 文章摘要位置
    showMore: true, // 是否显示更多按钮
    moreLabel: "阅读全文 >", // 更多按钮文字
    emptyLabel: "暂无文章", // 文章列表为空时的标签
    coverImgMode: "small", // 文章封面图模式
    showCapture: true, // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
    splitSeparator: false, // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
    transition: true, // 是否开启过渡动画
    transitionName: "tk-slide-fade", // 自定义过渡动画名称
    listStyleTitleTagPosition: "right", // 列表模式下的标题标签位置（postStyle 为 list）
    cardStyleTitleTagPosition: "left", // 卡片模式下的标题标签位置（postStyle 为 card）
    defaultCoverImg: [], // 默认封面图地址，如果不设置封面图则使用默认封面图地址
  },
  page: {
    disabled: false, // 是否禁用
    pageSize: 20, // 每页显示条目数
    pagerCount: 7, // 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
    layout: "prev, pager, next, jumper, ->, total", // 组件布局，子组件名用逗号分隔
    size: "default", // 分页大小
    background: false, // 是否为分页按钮添加背景色
    hideOnSinglePage: false, // 只有一页时是否隐藏
    // ...
  },
  homeCardSort: ["topArticle", "category", "tag", "friendLink", "docAnalysis"], // 首页卡片的位置排序，当设置了 homeCardSort 但没有全部补全内容，Teek 会将剩余内容按照 homeCardSort 的顺序进行添加。
  // 标签背景色
  tagColor: [
    { border: "#bfdbfe", bg: "#eff6ff", text: "#2563eb" },
    { border: "#e9d5ff", bg: "#faf5ff", text: "#9333ea" },
    { border: "#fbcfe8", bg: "#fdf2f8", text: "#db2777" },
    { border: "#a7f3d0", bg: "#ecfdf5", text: "#059669" },
    { border: "#fde68a", bg: "#fffbeb", text: "#d97706" },
    { border: "#a5f3fc", bg: "#ecfeff", text: "#0891b2" },
    { border: "#c7d2fe", bg: "#eef2ff", text: "#4f46e5" },
  ],
  // 博主信息，显示在首页左边第一个卡片。
  blogger: {
    name: "Fqzlr", // 博主昵称
    slogan: "躬身入局，心为主理，行有尺度，自持本心.", // 博主签名
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640", // 博主头像
    shape: "circle-rotate", // 头像风格：square 为方形头像，circle 为圆形头像，circle-rotate 可支持鼠标悬停旋转，circle-rotate-last 将会持续旋转 59s
    circleBgImg: "/blog/bj6.jpg", // 背景图片
    circleBgMask: true, // 遮罩层是否显示，仅当 shape 为 circle 且 circleBgImg 配置时有效
    circleSize: 120, // 头像大小
    color: "#ffffff", // 字体颜色
    // 状态，仅当 shape 为 circle 相关值时有效
    status: {
      icon: "😪", // 状态图标
      size: 28, // 图标大小
      title: "困", // 鼠标悬停图标的提示语
    },
  },
  // 精选文章卡片配置
  topArticle: {
    enabled: true, // 是否启用精选文章卡片
    title: "${icon}精选文章", // 卡片标题
    emptyLabel: "暂无精选文章", // 精选文章为空时的标签
    limit: 5, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
    dateFormat: "yyyy-MM-dd hh:mm:ss", // 精选文章的日期格式
    dateUTC: true, // 是否使用 UTC 时间
  },
  // 分类卡片配置
  category: {
    enabled: true, // 是否启用分类卡片
    path: "/categories", // 分类页访问地址
    pageTitle: "${icon}全部分类", // 分类页卡片标题
    homeTitle: "${icon}文章分类", // 卡片标题
    moreLabel: "更多 ...", // 查看更多分类标签
    emptyLabel: "暂无文章分类", // 分类为空时的标签
    limit: 5, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  },
  // 标签卡片配置
  tag: {
    enabled: true, // 是否启用标签卡片
    path: "/tags", // 标签页访问地址
    pageTitle: "${icon}全部标签", // 标签页页卡片标题
    homeTitle: "${icon}热门标签", // 卡片标题
    moreLabel: "更多 ...", //  查看更多分类标签
    emptyLabel: "暂无标签", // 标签为空时的标签
    limit: 21, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  },
  // 站点信息卡片配置
  docAnalysis: {
    enabled: true, // 是否启用站点信息卡片
    createTime: "2025-03-23", // 站点创建时间
    wordCount: true, // 是否开启文章页的字数统计
    readingTime: true, // 是否开启文章页的阅读时长统计
    // 访问量、访客数统计配置
    statistics: {
      provider: "busuanzi", // 网站流量统计提供商
      siteView: true, // 是否开启首页的访问量和排名统计
      pageView: true, // 是否开启文章页的浏览量统计
      tryRequest: false, // 如果请求网站流量统计接口失败，是否重试
      tryCount: 5, // 重试次数，仅当 tryRequest 为 true 时有效
      tryIterationTime: 2000, // 重试间隔时间，单位：毫秒，仅当 tryRequest 为 true 时有效
      permalink: true, // 是否只统计永久链接的浏览量，如果为 false，则统计 VitePress 默认的文档目录链接
    },
    // 自定义现有信息
    overrideInfo: [
      {
        key: "lastActiveTime",
        label: "活跃时间",
        value: (_, currentValue) => (currentValue + "").replace("前", ""),
        show: true,
      },
    ],
    // 自定义额外信息
    appendInfo: [{ key: "index", label: "站点作者", value: "Fqzlr" }],
  },
  articleAnalyze: {
    showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
    dateFormat: "yyyy-MM-dd hh:mm:ss", // 文章日期格式，首页和文章页解析日期时使用
    dateUTC: true, // 是否使用 UTC 时间
    showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
    showAuthor: true, // 是否展示作者
    showCreateDate: true, // 是否展示创建日期
    showUpdateDate: false, // 是否展示更新日期，仅在文章页显示
    showCategory: false, // 是否展示分类
    showTag: false, // 是否展示标签
  },
  // 面包屑配置
  breadcrumb: {
    enabled: true, // 是否启用面包屑
    showCurrentName: false, // 面包屑最后一列是否显示当前文章的文件名
    separator: "/", // 面包屑分隔符
    homeLabel: "首页", // 鼠标悬停首页图标的提示文案
  },
  // 文章页的样式风格，default 为 VitePress 原生风格，card 为单卡片风格，segment 为片段卡片风格，card-nav 和 segment-nav 会额外修改导航栏样式。
  pageStyle: "default",
  // 赞赏功能配置
  appreciation: {
    position: "doc-after", // 赞赏位置
    // 赞赏配置
    options: {
      icon: "weChatPay", // 赞赏图标，内置 weChatPay 和 alipay
      expandTitle: "打赏支持", // 展开标题，支持 HTML
      collapseTitle: "下次一定", // 折叠标题，支持 HTML
      content: `<img src='/teek-logo-large.png'>`, // 赞赏内容，支持 HTML
      expand: false, // 是否默认展开，默认 false
    },
  },
  // 文章分享配置
  articleShare: {
    enabled: true, // 是否开启文章链接分享功能
    text: "分享此页面", // 分享按钮文本
    copiedText: "链接已复制", // 复制成功文本
    query: false, // 是否包含查询参数
    hash: false, // 是否包含哈希值
  },
  articleBanner: {
    enabled: true, // 是否启用单文章页 Banner
    showCategory: true, // 是否展示分类
    showTag: true, // 是否展示标签
    defaultCoverImg: "", // 默认封面图
    defaultCoverBgColor: "", // 默认封面背景色，优先级低于 defaultCoverImg
  },
  // 文章页底部的最近更新栏配置
  articleUpdate: {
    enabled: true, // 是否启用文章最近更新栏
    limit: 3, // 文章最近更新栏显示数量
  },
  // 友情链接卡片配置
  friendLink: {
    enabled: true, // 是否启用友情链接卡片
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
    ], // 友情链接数据列表
    title: "${icon}友情链接", // 卡片标题
    emptyLabel: "暂无友情链接", // 友情链接为空时的标签
    limit: 5, // 一页显示的数量
    autoScroll: true, // 是否自动滚动
    scrollSpeed: 2500, // 滚动间隔时间，单位：毫秒。autoScroll 为 true 时生效
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  },
  // 社交信息配置，通常为一个社交图标，点击后将会跳转到社交软件的个人主页
  social: [
    {
      icon: "icon-github",
      name: "GitHub",
      link: "https://github.com/fqzlr",
    },
  ],
  // 页脚信息组配置
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
  // 页脚配置
  footerInfo: {
    // 页脚信息，支持 HTML 格式（位于主题版权上方）
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
    // 页脚信息，支持 HTML 格式（位于主题版权下方）
    bottomMessage: [""],
    // 主题版权配置
    theme: {
      show: true, // 是否显示主题版权，建议显示
      name: `Theme By Teek@${version}`, // 自定义名称
      link: "", // 自定义链接
    },
    // 博客版权配置
    copyright: {
      show: true, // 是否显示博客版权
      createYear: 2025, // 创建年份
      suffix: "Fqzlr", // 后缀
    },
    // ICP 备案信息配置
    icpRecord: {
      name: "",
      link: "",
    },
    // 网络安全备案信息配置
    securityRecord: {
      name: "",
      link: "",
    },
    customHtml: `<span id="runtime"></span>`, // 需要搭配 .vitepress/theme/helper/useRuntime.ts 使用
  },
  markdown: {
    demo: {
      githubUrl: "https://github.com/fqzlr/vitepress-theme-teek/blob/master/docs",
    },
  },
  vitePlugins: {
    sidebar: true, // 是否启用 sidebar 插件
    sidebarOption: {
      initItems: false,
      ignoreIndexMd: true,
    }, // sidebar 插件配置项
    permalink: true, // 是否启用 permalink 插件
    permalinkOption: {}, // permalinks 插件配置项
    mdH1: true, // 是否启用 mdH1 插件
    catalogueOption: {}, // catalogues 插件配置项
    docAnalysis: true, // 是否启用 docAnalysis 插件
    docAnalysisOption: {}, // docAnalysis 插件配置项
    fileContentLoaderIgnore: [], // fileContentLoader 插件扫描 markdown 文档时，指定忽略路径，格式为 glob 表达式，如 **/test/**
    autoFrontmatter: true, // 是否启用 autoFrontmatter 插件
    // autoFrontmatter 插件配置项
    autoFrontmatterOption: {
      permalink: true, // 是否开启生成永久链接
      recoverTransform: false, // 是否开启同名 key 覆盖
      categories: true, // 是否开启自动生成 categories
      coverImg: false, // 是否开启添加文档封面图
      forceCoverImg: false, // 是否开启强制覆盖封面图
      coverImgList: [], // 封面图列表
      // 处理永久链接的规则
      permalinkRules: [
        //{ folderName: "01.指南/01.简介/", prefix: "/$path/$uuid", removeLevel: 99 }, // 添加前缀
      ],
    },
  },
});
