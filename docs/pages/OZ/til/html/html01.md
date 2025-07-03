# HTML vs HTML5 <Badge type="info" text="250703" />

```less {1}
HTML vs HTML5
├── HTML
├── HTML5
└── HTML vs HTML5
```

::: info 💡 HTML 더 알아보기
[`📎 MDN`](https://developer.mozilla.org/ko/docs/Web/HTML) /
[`📎 W3C `](https://www.w3schools.com/html/default.asp) /
[`📎 TCP`](https://www.tcpschool.com/html/intro)
:::
<br>

## HTML (HyperText Markup Language)

HTML은 웹 페이지의 구조와 콘텐츠를 정의하는 데 사용되는 `마크업 언어`이다. 웹 브라우저는 HTML 문서를 해석하여 사용자에게 보이는 화면을 구성한다.

- `HyperText`: 하이퍼 링크를 통해 어떤 문서에서 다른 문서로 접근할 수 있는 텍스트
- `Markup`: 콘텐츠에 의미를 부여하거나 구조를 표시하는 것
- `Language`: 컴퓨터가 이해할 수 있는 형식화된 언어

<br>

## HTML5 웹 개발 표준

`HTML5`는 2014년 W3C의 권고안으로 완성된 HTML의 `최신 표준 버전`이다.

#### HTML5의 목표

- 웹앱 플랫폼으로의 진화
- 플러그인 없는 멀티미디어 지원
- 시맨틱 마크업 강화
- 모바일/반응형 웹 대응
- 브라우저 간 호환성 개선

<br>

## HTML(4.01 이하) vs HTML5 — 기능별 핵심 비교

#### `시맨틱 태그(Semantic Tags)`

```html
<header></header>
<nav></nav>
<main></main>
<section></section>
<article></article>
<footer></footer>
```

- `HTML`: div와 span만 사용해 구조를 표현해 의미 파악이 어려움
- `HTML5`: div 남용을 줄이고, 코드의 가독성과 접근성(웹 표준) 향상

<br>

#### `멀티미디어 지원`

```html
<video src="movie.mp4" controls></video>
<audio src="music.mp3" controls></audio>
```

- `HTML`: 오디오/비디오 삽입 시 Flash 등의 외부 플러그인 필요
- `HTML5`: video, audio 태그로 직접 재생 가능

<br>

#### `폼 기능 강화`

```html
<input type="date" />
<input type="email" />
<input type="range" />
```

- `HTML`: type="text" 중심의 제한된 입력 타입
- `HTML5`: 다양한 입력 타입을 제공하여 브라우저가 자동 유효성 검사를 수행

<br>

#### `웹 API 기능`

```less {1}
기본 내장 지원
├── Web Storage API       : localStorage, sessionStorage
├── Canvas API            : 그래픽, 게임, 데이터 시각화
├── WebSocket API         : 실시간 통신
├── Geolocation API       : 위치 정보
└── Drag & Drop API       : 드래그 기능 구현

```

- `HTML`: 구조만 담당하고 기능 제공이 거의 없음
- `HTML5`: 다양한 웹 API 내장으로 웹앱처럼 동작 가능

<br>

#### `문서 선언과 구문`

```html
<!-- HTML -->
<!DOCTYPE html PUBLIC …>

<!-- HTML5 -->
<!DOCTYPE html>
```

- `HTML`: 복잡한 선언과 엄격한 문법 요구
- `HTML5`: 한 줄로 간단하게 선언 가능, 유연한 문법 허용(닫는 태그 없어도 동작)

<Comment/>
