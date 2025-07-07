# HTML이란? <Badge type="info" text="250704" />

### HTML (HyperText Markup Language)

HTML은 웹 페이지의 구조와 콘텐츠를 정의하는 데 사용되는 `마크업 언어`이다. 웹 브라우저는 HTML 문서를 해석하여 사용자에게 보이는 화면을 구성한다.

- `HyperText`: 하이퍼 링크를 통해 어떤 문서에서 다른 문서로 접근할 수 있는 텍스트
- `Markup`: 콘텐츠에 의미를 부여하거나 구조를 표시하는 것
- `Language`: 컴퓨터가 이해할 수 있는 형식화된 언어

<br>

## HTML의 기본 구조

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>문서 제목</title>
  </head>
  <body>
    <h1>안녕하세요!</h1>
    <p>HTML은 웹 페이지의 구조를 담당해요.</p>
  </body>
</html>
```

<br>

### 시맨틱 태그 포함한 구조

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>문서 제목</title>
  </head>
  <body>
    <header>
      <h1>블로그</h1>
    </header>

    <main>
      <p>HTML은 웹 페이지의 구조를 담당해요.</p>
    </main>

    <footer>
      <p>footer</p>
    </footer>
  </body>
</html>
```

- HTML5에서는 구조의 의미를 명확히 하기 위해 header, main, footer, nav, section, article 등의 시맨틱 태그를 사용한다. 이는 `검색 엔진 최적화(SEO)`나 `접근성` 측면에서도 도움이 된다.

<br>

## HTML과 CSS, JavaScript

HTML은 웹 페이지의 구조를 담당하고, CSS는 디자인(색상, 레이아웃 등), JavaScript는 동적인 동작(클릭 이벤트, API 호출 등)을 담당한다. 이 세 가지는 웹 개발의 핵심 기술이며, 보통 함께 사용된다.

### CSS 연결

HTML 문서에서 CSS를 연결하는 가장 일반적인 방법은 외부 CSS 파일을 `<link>` 태그로 `<head>`에 포함하는 것이다.

```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```

- 별도의 .css 파일에 스타일을 작성하고 `<link>` 태그로 연결
- 대부분의 웹사이트에서 사용하는 방식이며, 유지보수, 재사용성, 협업에 유리하다.

### JavaScript 연결

```html
<body>
  <!-- HTML 콘텐츠 -->
  <script src="script.js"></script>
</body>
```

- .js 파일을 `<script>` 태그로 연결하여 HTML에 동작을 추가할 수 있다.

### HTML, CSS, JS 연결 한 눈에 보기

::: code-group

```html [HTML] {6,13}
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>Sample Page</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>안녕하세요!</h1>
    <p>이 페이지는 HTML, CSS, JS가 함께 작동해요.</p>
    <button onclick="greet()">클릭해보세요</button>

    <script src="script.js"></script>
  </body>
</html>
```

```css [CSS]
body {
  font-family: sans-serif;
  background-color: #f2f2f2;
  padding: 20px;
}

h1 {
  color: #007acc;
}

button {
  padding: 10px 16px;
  background-color: #007acc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

```js [JavaScript]
function greet() {
  alert("안녕하세요! 🎉");
}
```

:::

- HTML, CSS, JavaScript가 어떻게 한 페이지에서 함께 작동하는지를 보여주는 간단한 예시

<br>

::: info 💡 HTML 더 알아보기
[`📎 MDN`](https://developer.mozilla.org/ko/docs/Web/HTML) /
[`📎 W3C `](https://www.w3schools.com/html/default.asp) /
[`📎 TCP`](https://www.tcpschool.com/html/intro)
:::

<Comment/>
