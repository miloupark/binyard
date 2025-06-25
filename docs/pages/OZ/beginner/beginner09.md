# CSS 기초 <Badge type="tip" text="더덕마켓 클론코딩" /> <Badge type="info" text="250625" />

## 1. CSS 소개 및 기본 문법

#### <code>CSS(Cascading Style Sheets)</code>

- CSS는 HTML 문서에 스타일을 지정하기 위한 언어이다. 태그들이 중첩되어 구성된 HTML 구조에 대해, 색상, 크기, 배치 등 시각적 표현을 추가하며, 스타일이 겹칠 경우에는 우선순위 규칙에 따라(Cascading) 적용됩니다.

#### <code>문법</code>

```less
선택자 {
  속성명: 속성값;
}

// 예시
p {
  color: red;
}
```

#### <code>주석</code>

```css
/* 주석의 내용 */
```

## 2. CSS 문서 사용

HTML 문서에 CSS 문서를 적용하는 방법은 다음과 같이 3가지가 있다.

#### <code>인라인 스타일 (Inline Style)</code>

```html
<p style="color: red;">인라인 스타일 예시</p>
```

- HTML 태그의 style 속성에 직접 스타일을 작성하는 방식
- 특정 요소에 빠르게 스타일을 줄 때 사용하지만 유지보수에는 좋지 않음

<br>

#### <code>내부 스타일 시트 (Internal Style Sheet)</code>

```html
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
```

- head 안에 style 태그를 사용하여 CSS를 작성
- 별도 파일 없이 적용 가능하지만, 여러 페이지에 적용하긴 어려움

<br>

#### <code>외부 스타일 시트 (External Style Sheet)</code>

```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```

- 별도의 .css 파일에 스타일을 작성하고 link 태그로 연결
- 대부분의 웹사이트에서 많이 사용하는 방식이고 유지보수, 재사용성, 협업에 유리함

## 3. 선택자

#### <code>선택자</code>

```css
/* 1. 태그 선택자 - 모든 <p> 요소에 적용 */
p {
  color: blue;
}

/* 2. 클래스 선택자 - class="highlight"인 요소에 적용 */
.highlight {
  background-color: yellow;
}

/* 3. ID 선택자 - id="main-title"인 요소에 적용 */
#main-title {
  font-size: 30px;
  font-weight: bold;
}

/* 4. 전체 선택자 - 모든 요소에 적용 (기본 여백 제거 등) */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 5. 그룹 선택자 - 여러 요소를 한꺼번에 선택 */
h1,
h2,
h3 {
  font-weight: bold;
  color: darkslategray;
}

/* 6. 자식 선택자 - <ul>의 바로 아래 <li>만 선택 */
ul > li {
  list-style-type: none;
  padding-left: 10px;
}

/* 7. 후손 선택자 - <div> 안의 모든 <p> 선택 */
div p {
  margin-bottom: 10px;
  line-height: 1.5;
}

/* 8. 속성 선택자 - type="checkbox"인 <input> 선택 */
input[type="checkbox"] {
  width: 20px;
  height: 20px;
}

/* 9. 의사 클래스 - 마우스 올렸을 때 <a> 스타일 */
a:hover {
  color: red;
  text-decoration: underline;
}

/* 10. 의사 요소 - <p>의 첫 글자 스타일 */
p::first-letter {
  font-size: 2em;
  font-weight: bold;
  color: darkblue;
}
```

#### <code>우선순위</code>

1. !important
2. 인라인 스타일
3. ID 선택자
4. 클래스/속성/의사 클래스 선택자
5. 태그 선택자
