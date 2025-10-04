import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Binyard",
  description: "FE Growth Log by Hyebin Park",
  head: [
    ["link", { rel: "icon", href: "https://binyard.me/favicon/favicon.ico" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "https://binyard.me/favicon/apple-touch-icon.png",
      },
    ],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],

    // Open Graph
    ["meta", { property: "og:title", content: "Binyard" }],
    [
      "meta",
      { property: "og:description", content: "FE Growth Log by Hyebin Park" },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://binyard.me/favicon/twitter-card.png",
      },
    ],
    ["meta", { property: "og:url", content: "https://binyard.me/" }],

    // Twitter Card
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "Binyard" }],
    [
      "meta",
      { name: "twitter:description", content: "FE Growth Log by Hyebin Park" },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://binyard.me/favicon/twitter-card.png",
      },
    ],
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
      {
        text: "About",
        items: [
          { text: "About", link: "/hyebin/about" },
          { text: "Resume", link: "/hyebin/resume" },
        ],
      },
      { text: "Frontend", link: "/frontend/reference" },
      { text: "OZ", link: "/OZ/fe/intro" },
      {
        text: "Javascript",
        items: [
          { text: "Javascript", link: "/javascript/basic/js00" },
          { text: "Core Javascript", link: "/javascript/corejs/cjs01" },
          { text: "Functional JavaScript", link: "/javascript/funcjs/fjs01" },
        ],
      },
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
          items: [
            { text: "Reference Docs", link: "/frontend/reference" },
            { text: "My Cheatsheet", link: "/frontend/cheatsheet" },
          ],
        },
        {
          text: "Frontend",
          collapsed: false,
          items: [
            {
              text: "JavaScript",
              collapsed: false,
              items: [
                { text: "JavaScript", link: "/javascript/basic/js00" },
                { text: "Core JavaScript", link: "/javascript/corejs/cjs01" },
                {
                  text: "Functional JavaScript",
                  link: "/javascript/funcjs/fjs01",
                },
              ],
            },
            { text: "TypeScript", link: "/frontend/typescript/basic/ts00" },
            { text: "React", link: "/react/re00" },
            { text: "React Native", link: "/frontend/fe/react-native01" },
            { text: "Git & GitHub", link: "/frontend/fe/git-github" },
            { text: "DSA", link: "/frontend/dsa/dsa00" },
            { text: "Styling", link: "/frontend/styling/tailwindcss/tc00" },
          ],
        },
        {
          text: "Be for Frontend",
          collapsed: false,
          items: [
            { text: "Node.js", link: "/backend/nodejs/node00" },
            { text: "Database", link: "/backend/database/db00" },
            { text: "Network", link: "/backend/network/network00" },
            { text: "Cloud", link: "/backend/cloud/cloud00" },
            { text: "AWS", link: "/backend/aws/aws00" },
          ],
        },
        {
          text: "Programmers",
          collapsed: true,
          items: [{ text: "Javascript", link: "/frontend/programmers/js" }],
        },
        {
          text: "Unclear to Clear",
          collapsed: true,
          items: [
            { text: "Git", link: "/frontend/untoc/git" },
            { text: "JavaScript", link: "/frontend/untoc/js" },
            { text: "HTML", link: "/frontend/untoc/html" },
            { text: "CSS", link: "/frontend/untoc/css" },
          ],
        },
      ],

      "/javascript/basic": [
        {
          text: "JavaScript",
          collapsed: false,
          items: [
            {
              text: "자바스크립트의 실행 환경",
              link: "/javascript/basic/js00",
            },
            {
              text: "기초 문법",
              collapsed: true,
              items: [
                { text: "변수와 상수", link: "/javascript/basic/js01" },
                { text: "자료형과 형변환", link: "/javascript/basic/js02" },
                { text: "연산자", link: "/javascript/basic/js03" },
                { text: "조건문", link: "/javascript/basic/js04" },
                { text: "반복문", link: "/javascript/basic/js05" },
              ],
            },
            {
              text: "내장 객체와 메서드",
              collapsed: true,
              items: [
                { text: "Math", link: "/javascript/basic/js34" },
                // { text: "Date", link: "javascript/basic/js35" },
                // { text: "JSON", link: "javascript/basic/js36" },
                // { text: "Global 함수", link: "javascript/basic/js37" },
                // { text: "console", link: "javascript/basic/js38" },
              ],
            },
            {
              text: "함수와 실행 컨텍스트",
              collapsed: false,
              items: [
                { text: "함수", link: "/javascript/basic/js06" },
                { text: "스코프", link: "/javascript/basic/js07" },
                { text: "호이스팅", link: "/javascript/basic/js08" },
                {
                  text: "this",
                  collapsed: false,
                  items: [
                    { text: "기본 개념", link: "/javascript/basic/js09" },
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
              collapsed: false,
              items: [
                { text: "객체", link: "/javascript/basic/js10" },
                { text: "배열", link: "/javascript/basic/js11" },
                { text: "생성자 함수", link: "/javascript/basic/js12" },
                { text: "구조 분해 할당", link: "/javascript/basic/js13" },
                { text: "Spread / Rest", link: "/javascript/basic/js14" },
              ],
            },
            {
              text: "비동기와 API",
              collapsed: false,
              items: [
                { text: "비동기 처리", link: "/javascript/basic/js15" },
                { text: "Promise 객체", link: "/javascript/basic/js16" },
                { text: "async / await", link: "/javascript/basic/js17" },
                { text: "API 호출", link: "/javascript/basic/js18" },
                { text: "Local Storage", link: "/javascript/basic/js19" },
              ],
            },
            {
              text: "DOM과 DOM API",
              collapsed: false,
              items: [
                {
                  text: "웹과 브라우저 객체 모델",
                  link: "/javascript/basic/js20",
                },
                { text: "DOM API", link: "/javascript/basic/js21" },
                { text: "form 조작", link: "/javascript/basic/js22" },
              ],
            },
            {
              text: "모듈과 컴포넌트",
              collapsed: false,
              items: [
                { text: "모듈 시스템", link: "/javascript/basic/js24" },
                { text: "컴포넌트", link: "/javascript/basic/js25" },
              ],
            },
            {
              text: "상태 관리와 SPA",
              collapsed: false,
              items: [
                { text: "상태 관리", link: "/javascript/basic/js26" },
                { text: "MPA와 SPA", link: "/javascript/basic/js27" },
                { text: "SPA와 라우팅", link: "/javascript/basic/js28" },
              ],
            },
            {
              text: "Node.js와 Express",
              collapsed: false,
              items: [
                { text: "Node.js", link: "/javascript/basic/js29" },
                { text: "npm과 패키지 관리", link: "/javascript/basic/js30" },
                {
                  text: "CommonJS와 모듈 시스템",
                  link: "/javascript/basic/js31",
                },
                { text: "Express.js", link: "/javascript/basic/js32" },
                { text: "라우팅과 미들웨어", link: "/javascript/basic/js33" },
              ],
            },
          ],
        },
      ],
      "/javascript/corejs": [
        {
          text: "Core JavaScript",
          collapsed: false,
          items: [
            { text: "데이터 타입", link: "/javascript/corejs/cjs01" },
            { text: "실행 컨텍스트", link: "/javascript/corejs/cjs02" },
            { text: "this", link: "/javascript/corejs/cjs03" },
            { text: "콜백 함수", link: "/javascript/corejs/cjs04" },
            { text: "클로저", link: "/javascript/corejs/cjs05" },
            { text: "프로토타입", link: "/javascript/corejs/cjs06" },
            { text: "클래스", link: "/javascript/corejs/cjs07" },
          ],
        },
      ],
      "/javascript/funcjs": [
        {
          text: "Functional JavaScript",
          collapsed: false,
          items: [
            { text: "함수형 프로그래밍", link: "/javascript/funcjs/fjs01" },
            { text: "draft", link: "/javascript/funcjs/fjs02" },
          ],
        },
      ],
      "frontend/typescript/": [
        {
          text: "TypeScript",
          collapsed: false,
          items: [
            { text: "TypeScript", link: "/frontend/typescript/basic/ts00" },
            { text: "Intro", link: "/frontend/typescript/basic/ts01" },
            {
              text: "다양한 타입",
              collapsed: false,
              items: [
                { text: "Array", link: "/frontend/typescript/basic/ts02" },
                { text: "Object", link: "/frontend/typescript/basic/ts03" },
                { text: "Function", link: "/frontend/typescript/basic/ts04" },
                { text: "Union", link: "/frontend/typescript/basic/ts05" },
                {
                  text: "Intersection",
                  link: "/frontend/typescript/basic/ts06",
                },
                {
                  text: "Interfaces",
                  link: "/frontend/typescript/basic/ts07",
                },
                { text: "Tuple", link: "/frontend/typescript/basic/ts08" },
                { text: "Enum", link: "/frontend/typescript/basic/ts09" },
              ],
            },
          ],
        },
      ],
      "/react/": [
        { text: "React를 위한 Node.js", link: "/react/re00" },
        { text: "React", link: "/react/re01" },
        { text: "Component", link: "/react/re02" },
        { text: "JSX", link: "/react/re03" },
        { text: "State & Props", link: "/react/re04" },
        { text: "SPA", link: "/react/re05" },
        { text: "Props", link: "/react/re06" },
        {
          text: "React Router",
          collapsed: false,
          items: [
            { text: "React Router", link: "/react/reactrouter/router00" },
            { text: "React Router Hooks", link: "/react/reactrouter/router01" },
            {
              text: "Route 설정 분리 패턴",
              link: "/react/reactrouter/router02",
            },
          ],
        },
        {
          text: "State Management",
          collapsed: false,
          items: [
            { text: "Zustand", link: "/react/state/zustand/zs00" },
            { text: "Store Basics", link: "/react/state/zustand/zs01" },
            { text: "Design & Patterns", link: "/react/state/zustand/zs02" },
          ],
        },
      ],
      "/frontend/dsa/": [
        {
          text: "Data Structures",
          collapsed: false,
          items: [{ text: "draft", link: "/frontend/dsa/dsa00" }],
        },
        {
          text: "Algorithms",
          collapsed: false,
          items: [{ text: "draft", link: "/frontend/dsa/dsa00" }],
        },
      ],
      "/frontend/styling/": [
        {
          text: "SCSS",
          collapsed: false,
          items: [{ text: "scss", link: "/frontend/styling/scss00" }],
        },
        {
          text: "Tailwind CSS",
          collapsed: false,
          items: [
            { text: "About", link: "/frontend/styling/tailwindcss/tc00" },
            {
              text: "Installation",
              link: "/frontend/styling/tailwindcss/tc01",
            },
          ],
        },
        {
          text: "styled-components",
          collapsed: false,
          items: [
            { text: "styled-components", link: "/frontend/styling/sc00" },
          ],
        },
      ],
      "backend/nodejs/": [
        {
          text: "Node.js",
          collapsed: false,
          items: [
            { text: "Node.js 소개", link: "/backend/nodejs/node00" },
            { text: "Summary", link: "/backend/nodejs/node99" },
            {
              text: "Module System",
              collapsed: false,
              items: [
                { text: "CommonJS", link: "/backend/nodejs/node01" },
                { text: "ES Modules", link: "/backend/nodejs/node02" },
              ],
            },
            {
              text: "File System",
              collapsed: false,
              items: [
                { text: "CommonJS", link: "/backend/nodejs/node03" },
                { text: "ES Modules", link: "/backend/nodejs/node04" },
              ],
            },
          ],
        },
      ],
      "backend/database/": [
        {
          text: "Database",
          collapsed: false,
          items: [
            { text: "Database", link: "/backend/database/db00" },
            { text: "SQL", link: "/backend/database/db01" },
            { text: "SQL 데이터 타입", link: "/backend/database/db02" },
            { text: "SQL 데이터 CRUD", link: "/backend/database/db03" },
            { text: "데이터 모델링 기초", link: "/backend/database/db04" },
            { text: "서버와 데이터베이스", link: "/backend/database/db05" },
          ],
        },
      ],
      "backend/network/": [
        {
          text: "Network",
          collapsed: false,
          items: [
            { text: "IP / Port", link: "/backend/network/network00" },
            { text: "CIDR", link: "/backend/network/network01" },
            { text: "OSI 7계층", link: "/backend/network/network02" },
            { text: "TCP/IP 프로토콜", link: "/backend/network/network03" },
          ],
        },
      ],
      "backend/cloud": [
        {
          text: "Cloud",
          collapsed: false,
          items: [
            { text: "Cloud", link: "/backend/cloud/cloud00" },
            {
              text: "Infrastructure",
              link: "/backend/cloud/cloud01",
            },
            {
              text: "Service Layers",
              link: "/backend/cloud/cloud02",
            },
            {
              text: "Cloud Network",
              link: "/backend/cloud/cloud03",
            },
            { text: "VPC와 Subnet", link: "/backend/cloud/cloud04" },
            {
              text: "Computing Models",
              link: "/backend/cloud/cloud05",
            },
            { text: "AWS Compute", link: "/backend/cloud/cloud06" },
            { text: "CI/CD", link: "/backend/cloud/cloud07" },
          ],
        },
      ],
      "backend/aws": [
        {
          text: "AWS",
          collapsed: false,
          items: [
            { text: "AWS", link: "/backend/aws/aws00" },
            {
              text: "Amazon S3",
              link: "/backend/aws/aws01",
            },
            { text: "CloudFront CDN", link: "/backend/aws/aws02" },
            { text: "Route 53 DNS", link: "/backend/aws/aws03" },
            {
              text: "정적 사이트 배포 실습",
              link: "/backend/aws/aws04",
            },
            {
              text: "배포 운영 및 관리",
              link: "/backend/aws/aws05",
            },
            {
              text: "CI/CD with GitHub Actions",
              link: "/backend/aws/aws06",
            },
            {
              text: "Frontend CI/CD & Git Flow",
              link: "/backend/aws/aws07",
            },
          ],
        },
      ],
      "/OZ/": [
        {
          text: "OZ Front-end",
          collapsed: false,
          items: [
            { text: "Frontend", link: "/OZ/fe/intro" },
            { text: "Daily Mission", link: "/OZ/fe/mission" },
            { text: "↳ Feedback Reference", link: "/OZ/fe/feedback" },
            { text: "Reflection", link: "/OZ/fe/reflection" },
          ],
        },
        {
          text: "Learning Log",
          collapsed: false,
          items: [
            { text: "JavaScript", link: "/OZ/llog/js" },
            { text: "Calculator", link: "/OZ/llog/calculator" },
            { text: "React SPA Basic", link: "/OZ/llog/animal-info" },
            { text: "UQuiz", link: "/OZ/llog/uquiz" },
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
                { text: "02. 메타인지", link: "/OZ/warmingup/warmingup02" },
              ],
            },
            {
              text: "비기너 트랙",
              collapsed: true,
              items: [
                { text: "CLI 환경 알아보기", link: "/OZ/beginner/beginner01" },
                { text: "Git과 GitHub", link: "/OZ/beginner/beginner02" },
                { text: "HTML 이론", link: "/OZ/beginner/beginner03" },
                { text: "CSS 이론", link: "/OZ/beginner/beginner04" },
                { text: "JavaScript 이론", link: "/OZ/beginner/beginner05" },
                { text: "언어의 기초", link: "/OZ/beginner/beginner06" },
                { text: "간단한 코드", link: "/OZ/beginner/beginner07" },
                {
                  text: "더덕마켓 클론코딩",
                  collapsed: false,
                  items: [
                    { text: "HTML 기초", link: "/OZ/beginner/beginner08" },
                    { text: "CSS 기초", link: "/OZ/beginner/beginner09" },
                  ],
                },
              ],
            },
          ],
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
