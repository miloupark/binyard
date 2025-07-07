# CSS 기초 <Badge type="tip" text="더덕마켓 클론코딩" /> <Badge type="info" text="250625" />

::: info 💡
CSS는 사실 이론보다 직접 코드를 작성하는 것이 가장 큰 도움이 된다! 눈으로 결과를 확인하고 수정하는 연습이 필요하다.
:::

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

```less
선택자
├── 기본 선택자
│   ├── 전체 선택자: *
│   ├── 태그 선택자: div, p, h1 등
│   ├── 클래스 선택자: .classname
│   └── ID 선택자: #id
│
├── 결합자 (Combinators)
│   ├── 후손 선택자: A B (A 요소의 모든 후손 B)
│   ├── 자식 선택자: A > B (A 요소의 직계 자식 B)
│   ├── 인접 형제 선택자: A + B (A 요소 바로 뒤에 오는 형제 B)
│   └── 일반 형제 선택자: A ~ B (A 요소 뒤에 나오는 형제 B들)
│
├── 속성 선택자
│   ├── [attr]               : 특정 속성이 존재하는 요소
│   ├── [attr="value"]       : 속성값이 정확히 일치하는 요소
│   ├── [attr~="value"]      : 공백으로 구분된 속성값 중 하나가 일치
│   ├── [attr|="value"]      : 하이픈(-)으로 구분된 접두어가 일치
│   ├── [attr^="value"]      : 특정 값으로 시작하는 속성값
│   ├── [attr$="value"]      : 특정 값으로 끝나는 속성값
│   └── [attr*="value"]      : 특정 값을 포함하는 속성값
│
└── 기타 선택자 (의사 클래스 등)
    ├── 상태 선택자: :hover, :focus, :checked, :disabled, :enabled, :active 등
    ├── 구조 선택자: :first-child, :last-child, :nth-child(n), :not() 등
    └── 의사 요소 선택자: ::before, ::after 등

```

#### <code>선택자</code>

```css
/* 태그 선택자 */
p {
  color: blue;
}

/* 클래스 선택자 */
.highlight {
  background-color: yellow;
}

/* ID 선택자 */
#main-title {
  font-size: 30px;
  font-weight: bold;
}

/* 전체 선택자 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 그룹 선택자 */
h1,
h2,
h3 {
  font-weight: bold;
  color: darkslategray;
}

/* 자식 선택자 */
ul > li {
  list-style-type: none;
  padding-left: 10px;
}

/* 후손 선택자 */
div p {
  margin-bottom: 10px;
  line-height: 1.5;
}

/* 속성 선택자 */
input[type="checkbox"] {
  width: 20px;
  height: 20px;
}
a[href^="https"] {
  color: green;
}
img[src$=".png"] {
  border: 2px solid red;
}
[title*="cat"] {
  background-color: yellow;
}

/* 의사 클래스 */
a:hover {
  color: red;
  text-decoration: underline;
}

/* 의사 요소 */
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
5. 태그 선택자, 의사 요소
6. 전체 선택자 \*

## 4. 박스 모델 (Box Model)

CSS 박스 모델(Box Model)은 HTML 요소가 화면에 표시될 때, 그 요소가 차지하는 공간을 네 가지 영역으로 나누어 설명하는 개념이다. CSS에서 모든 요소는 실제로 하나의 직사각형 박스 형태로 렌더링되며, width와 height를 명시하지 않더라도 박스 모델은 항상 적용된다.

```css
┌───────────────────────────────┐
│            Margin             │
│  ┌───────────────────────────┐│
│  │          Border           ││
│  │   ┌─────────────────────┐ ││
│  │   │       Padding       │ ││
│  │   │   ┌───────────────┐ │ ││
│  │   │   │    Content    │ │ ││
│  │   │   └───────────────┘ │ ││
│  │   └─────────────────────┘ ││
│  └───────────────────────────┘│
└───────────────────────────────┘
```

- <code>Content</code>: 실제 내용이 들어가는 영역 (텍스트, 이미지 등)
- <code>Padding</code>: 콘텐츠와 테두리 사이의 내부 여백
- <code>Border</code>: 요소의 테두리,
- <code>Margin</code>: 요소 바깥 여백, 다른 요소와의 거리 조절

<br>

#### `박스 모델 확인 방법 (chrome)`

1. 웹 페이지에서 확인하고 싶은 요소에 마우스 오른쪽 클릭 -> 검사 선택
2. 개발자 도구 패널에서 해당 요소를 선택한 상태로 보면, 하단에 박스 모델 시각화 영역이 나온다.

<br>

### 테두리 스타일

CSS 테두리(Border)는 요소의 박스 모델 중 padding과 margin 사이에 위치하며,
요소를 시각적으로 감싸거나 강조하는 데 사용되는 시각적 구분선이다.

#### `border를 설정하는 속성들`

```css
border: 2px solid black;
border-width: 2px;
border-style: solid;
border-color: red;
```

- `border`: width, style, color를 한 줄로 축약하여 지정
- `border-width`: 테두리의 두께를 지정
- `border-style`: 테두리의 스타일을 지정
- `border-color`: 테두리의 색상을 지정
- `border-top`, `border-right`, `border-bottom`, `border-left`: 각 방향의 테두리를 따로 지정

<br>

#### `요소의 모서리를 둥글게`

```css
border-radius: 20px;
border-radius: 20%;

/* 방향별로 다르게 지정 */
border-radius: 10px 20px 30px 40px;
```

- 요소의 모서리(corner)를 둥글게 만들기 위해 사용하는 속성이다.
  값을 주면 각 모서리가 해당 반지름만큼 둥글게 처리된다.

<br>

### 여백

CSS에서 여백은 요소의 안팎에 존재하는 공간을 의미하며,
margin은 바깥 여백, padding은 안쪽 여백을 조절하는 속성이다.

<br>

#### `여백 지정`

```css
/* 모든 면에 동일한 값을 지정 */
margin: 10px;

/* 위아래 여백, 왼오 여백의 값 따로 지정 */
margin: 10px 20px;

/* 위, 왼오, 아래 여백의 값 따로 지정 */
margin: 10px 20px 15px;

/* 위, 오, 아래, 왼 여백의 값 따로 지정 */
margin: 10px 20px 30px 40px;
```

- 박스 모델의 여백에는 네 개의 면이 존재하고, 속성값 사용 개수에 따라 네 면의 여백 크기를 다르게 지정할 수 있다.

<br>

#### `box-sizing`

요소의 width와 height가 어떤 영역까지 포함하는지를 결정하는 CSS 속성이다.
기본값은 `content-box`이다.

```css
box-sizing: content-box | border-box;
```

- `content-box`: width, height는 content 영역만 포함한다. padding과 border는 별도로 더해져 최종 크기가 커진다.
- `border-box`: width, height가 content + padding + border 전체를 포함한다.
  박스의 총 크기가 지정한 값 안에 딱 맞게 유지된다.

<br>

```css
* {
  box-sizing: border-box;
}
```

- `border-box`를 리셋 스타일로 지정하고 많이 사용한다. 예상한 대로 레이아웃이 유지되고, grid, flex 등 레이아웃 구성 시 크기 계산이 편리하기 때문이다.

<br>

### 배경

CSS에서 background는 요소의 배경을 설정하는 데 사용하는 속성이다.<br>
박스 모델 기준으로, 배경에 설정된 색상이나 이미지는 margin(바깥 여백)을 제외한 border, padding, content 영역 안에서만 표시된다.
배경은 단순한 색상부터 이미지, 그라데이션, 반복, 위치 설정 등 다양한 시각 효과를 지정할 수 있다.

```css
.box {
  /* 배경 색상 지정 */
  background-color: #f0f0f0;

  /* 요소의 배경 이미지 지정 */
  background-image: url("/");

  /* 요소 내 배경의 적용 범위  */
  background-clip: padding-box;

  /* 요소 내 배경의 시작 위치 */
  background-origin: content-box;

  /* 배경 이미지의 크기 */
  background-size: cover;
  background-size: 100px 100px;

  /* 배경 이미지의 위치 */
  background-position: center;

  /* 배경 이미지의 반복 패턴 */
  background-repeat: no-repeat;
}
```

## 5. 색상 지정 방법

#### `color`

글자 색을 지정할 때는 color 속성을 사용하며, 색상을 지정하는 방법은 글자 색, 테두리 색, 배경 색 모두 동일하게 적용된다.

```css
/* 16진수 */
color: #ff0000;

/* RGB(red, green, blue) */
color: rgb(255, 0, 0);

/* rgba(투명도를 추가 지정) */
color: rgba(255, 0, 0, 0.8);

/* HSL(색조, 채도, 조도) */
color: hsl(0, 100%, 50%);
```

## 6. 텍스트 꾸미기

#### `글꼴 바꾸기`

```css
font-family: Arial, Helvetica, sans-serif;
```

- font-family는 CSS에서 글꼴(폰트) 종류를 지정하는 속성이다.
- 한 개 이상의 글꼴을 지정할 수 있고, 가장 먼저 쓰여진 글꼴부터 우선적으로 요소에 적용된다.

<br>

#### `웹 폰트 사용하기`

```html
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
  rel="stylesheet"
/>
```

```css
font-family: "Noto Sans KR", sans-serif;
```

- 웹폰트는 사용자의 컴퓨터에 해당 글꼴이 설치되어 있지 않더라도, 웹 서버로부터 글꼴 파일을 불러와 적용할 수 있는 폰트이다.
- 사용 방법은 간단하며, HTML의 head 태그에 link 태그를 추가하고, CSS에서 font-family 속성으로 적용하면 된다.

<br>

#### `텍스트 꾸미기`

```css
/* 글자 크기 */
font-size: 18px;

/* 글자 두께 */
font-weight: 600;

/* 줄 간격 */
line-height: 1.6;

/* 텍스트 정렬 */
text-align: center;

/* 텍스트 장식 */
text-decoration: underline;
```

<br>

#### `텍스트 단위`

- `rem`: 루트 요소의 글자 크기를 배수로 계산해 적용하는 상대 단위
- `em`: 부모 요소의 글자 크기를 배수로 계산해 적용하는 상대 단위

## 7. 요소의 유형 display

- `블록 요소`: 자신이 속한 부모 요소의 가로 너비 전체를 차지하며, 항상 새 줄에서 시작해 하나의 블록을 형성한다.
- `인라인 요소`: 자신의 콘텐츠 크기만큼만 공간을 차지하며, 줄바꿈 없이 다른 요소들과 한 줄에 나란히 배치된다.

#### `display`

- display 속성은 박스 유형을 정의하는 속성으로, 해당 요소가 블록, 인라인, 플렉스, 그리드 등 어떤 레이아웃 흐름을 따를지를 결정한다.

```css
/* 블록 요소로 표시 */
.box {
  display: block;
}

/* 인라인 요소로 표시 */
.inline-text {
  display: inline;
}

/* 요소를 인라인처럼 나란히 배치하면서도, 블록 요소처럼 width와 height 설정이 가능하게 함*/
.card {
  display: inline-block;
}

/* 자식 요소들을 가로로 유연하게 배치 */
.navbar {
  display: flex;
}
```

## 8. 문서의 흐름 float

CSS의 float 속성은 요소를 문서의 흐름에서 띄워서 부모 요소 또는 루트 요소를 기준으로 위치를 변경한다.
최근에는 flex, grid를 많이 사용한다.

```css
img {
  float: left | right | none | inherit;
}
```

#### `float의 역효과를 방지하기`

```html
<div class="container clearfix">
  <div class="left" style="float: left;">왼쪽</div>
  <div class="right" style="float: right;">오른쪽</div>
</div>
```

```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

- float 속성이 적용된 요소를 흔히 "플로팅 요소" 또는 "부동 요소"라고 부른다.
- 플로팅 요소는 문서 흐름에서 벗어나며, 다른 요소의 공간까지 침범하게 되어 예상치 못한 레이아웃 문제를 일으킬 수 있다.
- 이러한 문제를 방지하기 위해 사용하는 속성이 `clear`이며,
  `clear: both`를 적용하면 플로팅 요소의 영향을 받지 않고 아래쪽에 정상적으로 배치된다.

## 위치 지정하기 position

HTML 요소의 위치 지정 방식을 정의하는 속성이다. top, right, bottom, left 속성과 함께 사용하여
기준 위치로부터 얼마나 떨어진 위치에 배치할지를 결정한다.

```css
/* 1. 기본값 - 문서 흐름에 따라 자동 배치 */
.static-box {
  position: static;
  background: #eee;
}

/* 2. 상대 위치 - 원래 위치를 기준으로 이동 (공간은 그대로 차지) */
.relative-box {
  position: relative;
  top: 20px;
  left: 20px;
}

/* 3. 절대 위치 - 가장 가까운 position이 지정된 조상 요소 기준 */
.absolute-container {
  position: relative; /* 기준이 되는 부모 요소 */
  height: 200px;
}
.absolute-box {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* 4. 고정 위치 - 브라우저 화면 기준으로 고정 (스크롤해도 고정) */
.fixed-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

/* 5. 스티키 - 스크롤 시 특정 위치에서 고정됨 (부모 안에서만 동작) */
.sticky-box {
  position: sticky;
  top: 0;
}
```

## 겹치거나 넘치는 요소 다루기 z-index, overflow

#### `z-index`

```css
.box1 {
  position: absolute;
  z-index: 1; /* 아래에 깔림 */
}

.box2 {
  position: absolute;
  z-index: 10; /* 더 위로 올라옴 */
}
```

- z-index 속성은 요소의 쌓임 순서를 정의할 수 있다. 겹치는 요소들 사이에서 누가 위에 올 것인지를 결정한다.
  position 속성이 relative, absolute, fixed, sticky 등으로 지정된 요소에만 적용된다.
- 숫자가 클수록 위로 올라가고, 동일한 z-index 값이면, HTML 구조상 나중에 선언된 요소가 위에 나온다.

<br>

#### `overflow`

```css
.container {
  width: 300px;
  height: 100px;
  overflow: auto;
}
```

- 요소 안의 내용이 width나 height보다 많아질 경우, 넘치는 콘텐츠를 어떻게 처리할지를 지정한다.
- `auto`: 내용이 넘칠 경우에만 스크롤바 표시
- `scroll`: 항상 스크롤바 표시 (내용이 넘치지 않아도)
- `visible`: 기본값. 넘치는 콘텐츠 그대로 보임 (잘리지 않음)
- `hidden`: 넘치는 콘텐츠는 숨김 (잘려서 안 보임)

<br>
