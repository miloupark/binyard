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
      { text: "Frontend", link: "/frontend/index" },
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
          items: [{ text: "intro", link: "/frontend/index" }],
        },
        {
          text: "Frontend",
          collapsed: false,
          items: [
            { text: "JavaScript", link: "/javascript/basic/js00" },
            { text: "React", link: "/frontend/react" },
            { text: "React Native", link: "/frontend/react-native01" },
          ],
        },
        {
          text: "Programmers",
          collapsed: false,
          items: [{ text: "Javascript", link: "/frontend/programmers-js" }],
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
                    { text: "CSS 기초", link: "OZ/beginner/beginner09" },
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
            { text: "자바스크립트의 실행 환경", link: "javascript/basic/js00" },
            {
              text: "기초 문법",
              collapsed: false,
              items: [
                {
                  text: "정리 후 삭제 필요파일",
                  link: "javascript/basic/jsindex",
                },
                { text: "변수와 상수", link: "javascript/basic/js01" },
                { text: "자료형과 형변환", link: "javascript/basic/js02" },
                { text: "연산자", link: "javascript/basic/js03" },
                { text: "조건문", link: "javascript/basic/js04" },
                { text: "반복문", link: "javascript/basic/js05" },
              ],
            },
            {
              text: "함수와 실행 컨텍스트",
              collapsed: false,
              items: [
                { text: "함수", link: "javascript/basic/js06" },
                { text: "스코프", link: "javascript/basic/js07" },
                { text: "호이스팅", link: "javascript/basic/js08" },
                { text: "this", link: "javascript/basic/js09" },
              ],
            },
            {
              text: "데이터 구조",
              collapsed: false,
              items: [
                { text: "객체", link: "javascript/basic/js10" },
                { text: "배열", link: "javascript/basic/js11" },
                { text: "배열 메서드", link: "javascript/basic/js12" },
                { text: "생성자 함수", link: "javascript/basic/js13" },
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
    outline: {
      level: [1, 2], // On this page Heading
    },
  },
});
