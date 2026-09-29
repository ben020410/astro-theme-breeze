import { PUBLIC_ARTALK_ENABLED, PUBLIC_ARTALK_SERVER } from "astro:env/server";

const artalkServer = PUBLIC_ARTALK_SERVER?.trim() || "";
const artalkEnabled =
  PUBLIC_ARTALK_ENABLED === undefined
    ? Boolean(artalkServer)
    : PUBLIC_ARTALK_ENABLED;

const site = {
  // --- Site Metadata ---
  meta: {
    title: "Semin Na",
    description: "Aerospace Engineering student @ SNU - working on Autonomous Robotics and Embodied AI",
    author: "Semin Na",
    logo: "/profile.png",
    ogImage: "/og-image-2.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "en",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
navigation: [
  { name: "Home", subtitle: "Index", href: "/" },
  { name: "Projects", subtitle: "R&D & Works", href: "/posts" }, // 상세 페이지가 있는 대표 성과
  { name: "About", subtitle: "Resume & Bio", href: "/about" },   // 통합 이력서 단일 마크다운
],

  // --- Social Links ---
  social: [
    { name: "GitHub", href: "https://github.com/ben020410", icon: "mdi:github" },
    { name: "Email", href: "mailto:ben020410@snu.ac.kr", icon: "mdi:email" },
  ],

  friendCard: {
    name: "Semin Na",
    description: "A minimal Astro theme for personal websites",
    link: "https://semin-na.vercel.app",
    avatar: "https://semin-na.vercel.app/profile.png",
  },

  // --- Homepage Hero ---
  hero: {
    greeting: "Hello, I'm Semin Na",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    description:
      'I build <span class="font-medium text-foreground underline decoration-primary/30">intelligent systems</span> that perceive, reason, and act in the physical world. I study Aerospace Engineering at <span class="font-medium text-foreground underline decoration-primary/30">Seoul National University</span>, with a focus on <span class="font-medium text-foreground underline decoration-primary/30">Autonomous Robotics</span>, Embodied AI, while exploring technology entrepreneurship.',
    cards: [
      { icon: "mdi:robot", label: "Research", value: "Autonomous Robotics & AI" },
      { icon: "mdi:account-group", label: "Leadership", value: "Former Engineering Student Council President" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2026 Semin Na. All rights reserved.",
    builtWith: "Built with Astro",
  },

  // --- Comments ---
  comments: {
    enabled: artalkEnabled,
    provider: "artalk" as const,
    artalk: {
      server: artalkServer,
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
    // Auto-mark posts as "new" if published within this many days (0 to disable)
    newPostDays: 7,
  },

  // --- Tools Page Data ---
  // Each item can use either `icon` (Iconify name) or `logo` (public path or { light, dark } paths)
  tools: [
    {
      name: "development",
      items: [
        { name: "VS Code", link: "https://code.visualstudio.com", icon: "mdi:microsoft-visual-studio-code" },
        { name: "WebStorm", link: "https://www.jetbrains.com/webstorm", icon: "mdi:code-braces" },
        { name: "Terminal", icon: "mdi:terminal" },
        { name: "Git", link: "https://git-scm.com", icon: "mdi:git" },
        { name: "Docker", link: "https://www.docker.com", icon: "mdi:docker" },
        { name: "Postman", link: "https://www.postman.com", icon: "mdi:api" },
      ]
    },
    {
      name: "design",
      items: [
        { name: "Figma", link: "https://www.figma.com", icon: "mdi:vector-polygon" },
        { name: "Sketch", link: "https://www.sketch.com", icon: "mdi:vector-square" },
        { name: "Adobe XD", link: "https://www.adobe.com/products/xd.html", icon: "mdi:pencil-ruler" },
        { name: "Photoshop", link: "https://www.adobe.com/products/photoshop.html", icon: "mdi:image-edit" },
      ]
    },
    {
      name: "productivity",
      items: [
        { name: "Notion", link: "https://www.notion.so", icon: "mdi:notebook" },
        { name: "Obsidian", link: "https://obsidian.md", icon: "mdi:diamond-stone" },
        { name: "Raycast", link: "https://www.raycast.com", icon: "mdi:lightning-bolt" },
        { name: "Arc Browser", link: "https://arc.net", icon: "mdi:web" },
      ]
    },
  ],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "Projects",
    postsDescription: "Research, engineering projects, and technical prototypes.",
    projectsTitle: "None",
    projectsDescription: "Small tools built for fun or to solve real problems.",
    friendsTitle: "Friends",
    friendsDescription: "Like-minded folks around the web.",
    toolsTitle: "Stack",
    aboutTitle: "About",
    aboutDescription: "About this site and its author",
    backToPosts: "Back to posts",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription: "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Post",
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search posts, tags, or commands...",
    searchNavigate: "Navigate",
    commentSuccess: "Comment submitted",
  },

  ogImage: "/og-image-2.png",
} as const;

export default site;
