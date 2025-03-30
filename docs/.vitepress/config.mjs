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
        text: "About",
        items: [{ text: "Intro", link: "/about" }],
      },
      {
        text: "HTML/CSS/SASS",
        collapsed: true,
        items: [{ text: "HTML", link: "/html" },
          { text: "CSS", link: "/css" },
          { text: "SASS", link: "/sass" },
        ],
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
        text: "React",
        collapsed: true,
        items: [
          { text: "Basic", link: "/react" },
          // { text: "ex.js02", link: "/api-examples" },
        ],
      },
      {
        text: "React Native",
        collapsed: true,
        items: [
          { text: "install", link: "/react-native01" },
          { text: "basic", link: "/react-native02" },
        ],
      },
      {
        text: "Programmers",
        collapsed: true,
        items: [{ text: "Javascript.js", link: "/programmers-js" }],
      },
      {
        text: "Git",
        collapsed: true,
        items: [
          { text: "git", link: "/git" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      // {
      //   text: "Javascript",
      //   collapsed: true,
      //   items: [
      //     {
      //       text: 'basic',
      //       items: [
      //         { text: "변수 Variable", link: "/javascript"},
      //         // { text: "상수 Constant", link: "/javascript"},
      //       ]
      //     }
      //   ]
      // },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/miloupark" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/hyebinparkfe" },
      { icon: "instagram", link: "https://www.instagram.com/parkjujeop/#" },
      // { icon: "naver", link: "https://blog.naver.com/binyard_" },
    ],
  },
});
