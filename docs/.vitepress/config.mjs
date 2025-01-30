import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Binyard",
  description: "Hyebin Vitepress Blog",
  srcDir: "./pages/",
  base: "/binyard/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      { text: "Javascript", link: "/javascript" },
      { text: "Programmers", link: "/programmers-js" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "About",
        items: [{ text: "Intro", link: "/about" }],
      },
      {
        text: "Javascript",
        collapsed: true,
        items: [
          { text: "Basic", link: "/javascript" },
          // { text: "ex.js02", link: "/api-examples" },
        ],
      },
      {
        text: "Programmers",
        collapsed: true,
        items: [{ text: "Javascript.js", link: "/programmers-js" }],
      },
      {
        text: "정보처리기사",
        collapsed: true,
        items: [
          { text: "C", link: "/C" },
          { text: "Java", link: "/Java" },
          { text: "Python", link: "/Python" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/miloupark" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/hyebinparkfe" },
      { icon: "instagram", link: "https://www.instagram.com/parkjujeop/#" },
      // { icon: "naver", link: "https://blog.naver.com/binyard_" },
    ],
  },
});
