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
      { text: "Javascript", link: "/javascript/basic/js01" },
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
          collapsed: false,
          items: [
            { text: "자바스크립트의 실행 환경", link: "" },
            {
              text: "기초 문법",
              collapsed: false,
              items: [
                { text: "변수와 상수", link: "javascript/basic/js01" },
                { text: "자료형과 형변환", link: "" },
                { text: "연산자", link: "" },
                { text: "조건문", link: "" },
                { text: "반복문", link: "" },
              ],
            },
            {
              text: "함수와 실행 컨텍스트",
              collapsed: false,
              items: [
                { text: "함수", link: "" },
                { text: "함수 표현식", link: "" },
                { text: "화살표 함수", link: "" },
                { text: "스코프", link: "" },
                { text: "호이스팅", link: "" },
                { text: "this", link: "" },
              ],
            },
            {
              text: "데이터 구조",
              collapsed: false,
              items: [
                { text: "객체", link: "" },
                { text: "배열", link: "" },
                { text: "배열 내장함수", link: "" },
                { text: "생성자 함수", link: "" },
                { text: "구조 분해 할당", link: "" },
                { text: "Spread / Rest 문법", link: "" },
              ],
            },
            {
              text: "비동기와 API",
              collapsed: false,
              items: [
                { text: "비동기 처리", link: "" },
                { text: "Promise 객체", link: "" },
                { text: "async / await", link: "" },
                { text: "API 호출", link: "" },
              ],
            },
            {
              text: "DOM과 DOM API",
              collapsed: false,
              items: [
                { text: "웹과 DOM", link: "" },
                { text: "DOM API", link: "" },
                { text: "이벤트 처리", link: "" },
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
