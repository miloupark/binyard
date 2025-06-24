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
      { text: "About", link: "/hyebin/about" },
      { text: "Frontend", link: "/frontend/javascript" },
      { text: "OZ", link: "/OZ/intro" },
      { text: "Javascript", link: "/javascript/javascript" },
    ],

    sidebar: {
      "/hyebin/": [
        {
          text: "Hyebin Park",
          items: [
            { text: "About", link: "/hyebin/about" },
            { text: "Resume", link: "/hyebin/resume" },
          ],
        },
      ],
      "/frontend/": [
        {
          text: "JavaScript",
          items: [{ text: "Basic", link: "/frontend/javascript" }],
        },
        {
          text: "React",
          collapsed: false,
          items: [{ text: "Basic", link: "/frontend/react" }],
        },
        {
          text: "React Native",
          collapsed: false,
          items: [
            { text: "install", link: "/frontend/react-native01" },
            { text: "basic", link: "/frontend/react-native02" },
          ],
        },
        {
          text: "Programmers",
          collapsed: false,
          items: [{ text: "Javascript.js", link: "/frontend/programmers-js" }],
        },
        {
          text: "Git",
          collapsed: false,
          items: [{ text: "git", link: "/frontend/git" }],
        },
        {
          text: "Vitepress",
          collapsed: false,
          items: [
            { text: "Markdown Examples", link: "/frontend/markdown-examples" },
          ],
        },
      ],
      "/OZ/": [
        {
          text: "OZ초격차캠프 FE",
          collapsed: true,
          items: [{ text: "TIL", link: "OZ/til/til01" }],
        },
        {
          text: "베이스 캠프 미션",
          collapsed: false,
          items: [
            { text: "사전 미션", link: "/OZ/intro" },
            {
              text: "워밍업 칼럼",
              collapsed: false,
              items: [
                { text: "01. 뇌 가소성", link: "/OZ/warmingup/warmingup01" },
                { text: "02. 메타인지", link: "OZ/warmingup/warmingup02" },
              ],
            },
            {
              text: "비기너 트랙",
              collapsed: false,
              items: [
                { text: "CLI 환경 알아보기", link: "/OZ/beginner/beginner01" },
                { text: "Git과 GitHub", link: "OZ/beginner/beginner02" },
                { text: "HTML 이론", link: "OZ/beginner/beginner03" },
                { text: "CSS 이론", link: "OZ/beginner/beginner04" },
                { text: "JavaScript 이론", link: "OZ/beginner/beginner05" },
                { text: "언어의 기초", link: "OZ/beginner/beginner06" },
                { text: "간단한 코드", link: "OZ/beginner/beginner07" },
                {
                  text: "더덕마켓 클론코딩",
                  collapsed: false,
                  items: [
                    { text: "HTML 기초", link: "OZ/beginner/beginner08" },
                  ],
                },
              ],
            },
          ],
        },
        {
          text: "회고",
          collapsed: true,
          items: [{ text: "01", link: "OZ/reflection/reflection01" }],
        },
      ],
      "/javascript/": [
        {
          text: "JavaScript",
          items: [
            {
              text: "Basic",
              collapsed: false,
              items: [{ text: "Basic", link: "javascript/javascript" }],
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
