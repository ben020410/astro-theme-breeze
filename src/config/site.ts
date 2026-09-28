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
    description: "Undergraduate student @ Seoul Nat'l Univ.",
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
    name: "Breeze",
    description: "A minimal Astro theme for personal websites",
    link: "https://your-domain.com",
    avatar: "https://your-domain.com/logo.svg",
  },

  // --- Homepage Hero ---
  hero: {
    greeting: "Hello, I'm Semin Na",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    description:
      'Undergraduate student at <span class="font-medium text-foreground underline decoration-primary/30">Seoul National University</span> focused on <span class="font-medium text-foreground underline decoration-primary/30">Autonomous Robotics</span>, Embodied AI, and tech entrepreneurship.',
    cards: [
      { icon: "mdi:robot", label: "Research", value: "Autonomous Robotics & AI" },
      { icon: "mdi:rocket-launch", label: "Status", value: "Tech Entrepreneurship" },
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

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "Projects",
    postsDescription: "Research & Development works, personal projects, and open-source contributions.",
    projectsTitle: "d",
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

  ogImage: "/og-image.png",
} as const;

export default site;
