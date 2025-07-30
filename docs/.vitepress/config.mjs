import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Binyard",
  description: "FE Growth Log by Hyebin Park",
  head: [
    ["link", { rel: "icon", href: "/favicon/favicon.ico" }],
    ["meta", { property: "og:title", content: "Binyard" }],
    ["meta", { property: "og:description", content: "FE Growth Log by Hyebin Park" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://binyard.me/favicon/favicon.png",
      },
    ],
    ["meta", { property: "og:url", content: "https://binyard.me/" }],
  ],
  srcDir: "./pages/",
  base: "/",
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("shiki")) return "shiki";
            if (id.includes("vitepress")) return "vitepress";
            if (id.includes("@vue")) return "vue";
            if (id.includes("highlight.js")) return "highlight";
            return "vendor";
          }
        },
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/hyebin/about" },
      { text: "Frontend", link: "/frontend/reference" },
      { text: "OZ", link: "/OZ/fe/intro" },
      { text: "Javascript", link: "/javascript/basic/js00" },
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
          items: [{ text: "Reference Docs", link: "/frontend/reference" }],
        },
        {
          text: "Frontend",
          collapsed: false,
          items: [
            { text: "JavaScript", link: "/javascript/basic/js00" },
            { text: "TypeScript", link: "/typescript/basic/ts00" },
            { text: "React", link: "/frontend/react" },
            { text: "React Native", link: "/frontend/react-native01" },
            { text: "DSA", link: "/dsa/dsa00" },
            { text: "CLI Commands", link: "/frontend/cli" },
          ],
        },
        {
          text: "Unclear to Clear",
          collapsed: false,
          items: [
            { text: "Git", link: "/frontend/untoc/git" },
            { text: "JavaScript", link: "/frontend/untoc/js" },
            { text: "HTML", link: "/frontend/untoc/html" },
            { text: "CSS", link: "/frontend/untoc/css" },
          ],
        },
        {
          text: "Programmers",
          collapsed: false,
          items: [{ text: "Javascript", link: "/frontend/programmers/js" }],
        },

        {
          text: "Vitepress",
          collapsed: false,
          items: [{ text: "Markdown Examples", link: "/frontend/markdown-examples" }],
        },
      ],
      "/OZ/": [
        {
          text: "OZ Front-end",
          collapsed: false,
          items: [
            { text: "Frontend", link: "/OZ/fe/intro" },
            { text: "Daily Mission", link: "/OZ/fe/mission" },
            { text: "Reflection", link: "/OZ/fe/reflection" },
          ],
        },
        {
          text: "Learning Log",
          collapsed: false,
          items: [
            { text: "JavaScript", link: "/OZ/llog/js" },
            { text: "Calculator", link: "/OZ/llog/calculator" },
            { text: "Draft", link: "/OZ/llog/jsdraft" },
          ],
        },
        {
          text: " Blog",
          collapsed: true,
          items: [
            {
              text: "HTML",
              collapsed: true,
              items: [
                { text: "HTML5", link: "/OZ/blog/html/html01" },
                { text: "HTML이란?", link: "/OZ/blog/html/html02" },
                { text: "시맨틱 태그", link: "/OZ/blog/html/html03" },
                {
                  text: "meta, head 태그",
                  link: "/OZ/blog/html/html04",
                },
              ],
            },
            {
              text: "CSS",
              collapsed: true,
              items: [
                { text: "CSS Cascading", link: "/OZ/blog/css/css01" },
                { text: "시멘틱 마크업", link: "/OZ/blog/css/css02" },
                { text: "Flex vs Grid", link: "/OZ/blog/css/css03" },
                { text: "inline vs block", link: "/OZ/blog/css/css04" },
                { text: "display", link: "/OZ/blog/css/css05" },
                { text: "margin 겹침 현상", link: "/OZ/blog/css/css06" },
                { text: "Box Model", link: "/OZ/blog/css/css07" },
                { text: "Reset vs Normalize.css", link: "/OZ/blog/css/css08" },
              ],
            },
          ],
        },
        // {
        //   text: "Core JavaScript",
        //   collapsed: true,
        //   items: [
        //     { text: "데이터 타입", link: "/OZ/corejs/corejs01" },
        //     { text: "실행 컨텍스트", link: "/OZ/corejs/corejs02" },
        //     { text: "this", link: "/OZ/corejs/corejs03" },
        //     { text: "콜백 함수", link: "/OZ/corejs/corejs04" },
        //     { text: "클로저", link: "/OZ/corejs/corejs05" },
        //     { text: "프로토타입", link: "/OZ/corejs/corejs06" },
        //     { text: "클래스", link: "/OZ/corejs/corejs07" },
        //   ],
        // },
        {
          text: "베이스 캠프 미션",
          collapsed: true,
          items: [
            { text: "사전 미션", link: "/OZ/intro" },
            {
              text: "워밍업 칼럼",
              collapsed: true,
              items: [
                { text: "01. 뇌 가소성", link: "/OZ/warmingup/warmingup01" },
                { text: "02. 메타인지", link: "OZ/warmingup/warmingup02" },
              ],
            },
            {
              text: "비기너 트랙",
              collapsed: true,
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
      ],
      "/javascript/": [
        {
          text: "JavaScript",
          collapsed: false,
          items: [
            { text: "자바스크립트의 실행 환경", link: "javascript/basic/js00" },
            {
              text: "기초 문법",
              collapsed: true,
              items: [
                { text: "변수와 상수", link: "javascript/basic/js01" },
                { text: "자료형과 형변환", link: "javascript/basic/js02" },
                { text: "연산자", link: "javascript/basic/js03" },
                { text: "조건문", link: "javascript/basic/js04" },
                { text: "반복문", link: "javascript/basic/js05" },
              ],
            },
            {
              text: "내장 객체와 메서드",
              collapsed: true,
              items: [
                { text: "Math", link: "javascript/basic/js34" },
                // { text: "Date", link: "javascript/basic/js35" },
                // { text: "JSON", link: "javascript/basic/js36" },
                // { text: "Global 함수", link: "javascript/basic/js37" },
                // { text: "console", link: "javascript/basic/js38" },
              ],
            },
            {
              text: "함수와 실행 컨텍스트",
              collapsed: true,
              items: [
                { text: "함수", link: "javascript/basic/js06" },
                { text: "스코프", link: "javascript/basic/js07" },
                { text: "호이스팅", link: "javascript/basic/js08" },
                {
                  text: "this",
                  collapsed: false,
                  items: [
                    { text: "기본 개념", link: "javascript/basic/js09" },
                    {
                      text: "화살표 함수와 this",
                      link: "javascript/basic/js23",
                    },
                  ],
                },
              ],
            },
            {
              text: "데이터 구조",
              collapsed: true,
              items: [
                { text: "객체", link: "javascript/basic/js10" },
                { text: "배열", link: "javascript/basic/js11" },
                { text: "생성자 함수", link: "javascript/basic/js12" },
                { text: "구조 분해 할당", link: "javascript/basic/js13" },
                { text: "Spread / Rest", link: "javascript/basic/js14" },
              ],
            },
            {
              text: "비동기와 API",
              collapsed: true,
              items: [
                { text: "비동기 처리", link: "javascript/basic/js15" },
                { text: "Promise 객체", link: "javascript/basic/js16" },
                { text: "async / await", link: "javascript/basic/js17" },
                { text: "API 호출", link: "javascript/basic/js18" },
                { text: "Local Storage", link: "javascript/basic/js19" },
              ],
            },
            {
              text: "DOM과 DOM API",
              collapsed: true,
              items: [
                { text: "웹과 DOM", link: "javascript/basic/js20" },
                { text: "DOM API", link: "javascript/basic/js21" },
                { text: "form 조작", link: "javascript/basic/js22" },
              ],
            },
            {
              text: "모듈과 컴포넌트",
              collapsed: true,
              items: [
                { text: "모듈 시스템", link: "javascript/basic/js24" },
                { text: "컴포넌트", link: "javascript/basic/js25" },
              ],
            },
            {
              text: "상태 관리와 SPA",
              collapsed: true,
              items: [
                { text: "상태 관리", link: "javascript/basic/js26" },
                { text: "MPA와 SPA", link: "javascript/basic/js27" },
                { text: "SPA와 라우팅", link: "javascript/basic/js28" },
              ],
            },
            {
              text: "Node.js와 Express",
              collapsed: true,
              items: [
                { text: "Node.js", link: "javascript/basic/js29" },
                { text: "npm과 패키지 관리", link: "javascript/basic/js30" },
                {
                  text: "CommonJS와 모듈 시스템",
                  link: "javascript/basic/js31",
                },
                { text: "Express.js", link: "javascript/basic/js32" },
                { text: "라우팅과 미들웨어", link: "javascript/basic/js33" },
              ],
            },
          ],
        },
        {
          text: "Core JavaScript",
          collapsed: false,
          items: [
            { text: "데이터 타입", link: "javascript/corejs/cjs01" },
            { text: "실행 컨텍스트", link: "javascript/corejs/cjs02" },
            { text: "this", link: "javascript/corejs/cjs03" },
            { text: "콜백 함수", link: "javascript/corejs/cjs04" },
            { text: "클로저", link: "javascript/corejs/cjs05" },
            { text: "프로토타입", link: "javascript/corejs/cjs06" },
            { text: "클래스", link: "javascript/corejs/cjs07" },
          ],
        },
      ],
      "/typescript/": [
        {
          text: "TypeScript",
          collapsed: false,
          items: [
            { text: "소개", link: "typescript/basic/ts00" },
            {
              text: "기초 문법",
              collapsed: true,
              items: [
                { text: "변수 선언", link: "typescript/basic/ts01" },
                { text: "타입 주석", link: "typescript/basic/ts02" },
              ],
            },
          ],
        },
      ],
      "/dsa/": [
        {
          text: "Data Structures",
          collapsed: false,
          items: [{ text: "draft", link: "dsa/dsa00" }],
        },
        {
          text: "Algorithms",
          collapsed: false,
          items: [{ text: "draft", link: "dsa/dsa00" }],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/miloupark" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/hyebinparkfe" },
      // { icon: "instagram", link: "https://www.instagram.com/parkjujeop/#" },
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
