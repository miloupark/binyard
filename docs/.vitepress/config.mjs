import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Binyard",
  description: "Hyebin Vitepress Blog",
  srcDir: "./pages/",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/study/about" },
      { text: "OZ", link: "/OZ/intro" },
      { text: "Javascript", link: "/study/javascript" },
    ],

    sidebar: {
      "/study/": [
        {
          text: "About",
          items: [{ text: "Intro", link: "/study/about" }],
        },
        {
          text: "HTML/CSS/SASS",
          collapsed: true,
          items: [
            { text: "HTML", link: "/study/html" },
            { text: "CSS", link: "/study/css" },
            { text: "SASS", link: "/study/sass" },
          ],
        },
        {
          text: "Javascript",
          collapsed: true,
          items: [{ text: "Basic", link: "/study/javascript" }],
        },
        {
          text: "React",
          collapsed: true,
          items: [{ text: "Basic", link: "/study/react" }],
        },
        {
          text: "React Native",
          collapsed: true,
          items: [
            { text: "install", link: "/study/react-native01" },
            { text: "basic", link: "/study/react-native02" },
          ],
        },
        {
          text: "Programmers",
          collapsed: true,
          items: [{ text: "Javascript.js", link: "/study/programmers-js" }],
        },
        {
          text: "Git",
          collapsed: true,
          items: [{ text: "git", link: "/study/git" }],
        },
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/study/markdown-examples" },
            { text: "Runtime API Examples", link: "/study/api-examples" },
          ],
        },
      ],
      "/OZ/": [
        {
          text: "OZ초격차캠프 FE",
          collapsed: false,
          items: [
            { text: "Intro", link: "/OZ/intro" },
            {
              text: "워밍업 칼럼",
              items: [
                { text: "01. 뇌 가소성", link: "/OZ/warmingup01" },
                // { text: "02. 메타인지", link: "OZ//warmingup02" },
                // { text: "03. 아토믹 해빗", link: "OZ//warmingup03" },
                // { text: "04. 그릿(Grit)", link: "OZ//warmingup04" },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/miloupark" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/hyebinparkfe" },
      { icon: "instagram", link: "https://www.instagram.com/parkjujeop/#" },
    ],
  },
});
