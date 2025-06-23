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
                { text: "01. 뇌 가소성", link: "/OZ/warmingup/warmingup01" },
                { text: "02. 메타인지", link: "OZ/warmingup/warmingup02" },
              ],
            },
            {
              text: "비기너 트랙",
              items: [
                { text: "CLI 환경 알아보기", link: "/OZ/beginner/beginner01" },
                { text: "Git과 GitHub", link: "OZ/beginner/beginner02" },
                { text: "HTML 이론", link: "OZ/beginner/beginner03" },
                // { text: "CSS 이론", link: "OZ/beginner/beginner04" },
                // { text: "JavaScript 이론", link: "OZ/beginner/beginner05" },
                // { text: "언어의 기초 & 코드", link: "OZ/beginner/beginner06" },
                // { text: "더덕마켓", link: "OZ/beginner/beginner07" },
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
    lastUpdated: {
      text: "마지막 업데이트 날짜",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
  },
});
