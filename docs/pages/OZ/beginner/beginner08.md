# HTML 기초 <Badge type="tip" text="더덕마켓 클론코딩" /> <Badge type="info" text="250624" />

## 1. 웹개발과 HTML

### (1) 웹 개발

#### <code>인터넷</code>

- 여러 대의 컴퓨터를 하나로 연결해주는 거대한 통신망. 이 연결을 통해 우리는 전 세계의 정보에 접근할 수 있다.

#### <code>웹(Web)</code>

- 인터넷 상의 컴퓨터들 간에 정보를 공유할 수 있도록 해주는 네트워크 시스템.
  즉, 웹은 인터넷 위에서 정보가 오가도록 도와주는 일종의 정보 공유 플랫폼이라 할 수 있다.

#### <code>웹 개발</code>

- 웹 사이트를 만들고, 이를 서비스하기 위해 필요한 모든 작업을 수행하는 것을 말한다.
- 프론트엔드(화면 구현), 백엔드(서버/데이터 처리), 배포 환경 구축 등 다양한 분야가 포함된다.

#### <code>웹 페이지와 웹 사이트</code>

- HTML과 CSS로 만든 하나의 화면을 "웹 페이지"라고 부른다.
- 여러 개의 웹 페이지가 서로 연결되면, 하나의 웹 사이트를 구성하게 된다.
- 서버에 저장된 웹 페이지를 사용자가 URL을 통해 요청하고, 브라우저는 이를 받아 화면에 보여주는 것이 웹 사이트의 기본 동작 원리이다.

<br>

### (2) HTML (HyperText Markup Language)

- HTML은 웹 페이지의 구조와 콘텐츠를 정의하는 데 사용되는 마크업 언어이다. 웹 브라우저는 HTML 문서를 해석하여 사용자에게 보이는 화면을 구성한다.
- <code>HyperText</code>: 하이퍼 링크를 통해 어떤 문서에서 다른 문서로 접근할 수 있는 텍스트
- <code>Markup</code>: 콘텐츠에 의미를 부여하거나 구조를 표시하는 것을 뜻한다.
- <code>Language</code>: 컴퓨터가 이해할 수 있는 형식화된 언어라는 뜻

## 2. 개발환경 구축 및 문서 만들기

#### <code>웹 브라우저(Web Browser)</code>

- 사용자가 웹 사이트를 볼 수 있도록 도와주는 프로그램. 즉, 우리가 입력한 URL을 해석하고,
  서버로부터 받은 HTML, CSS, JavaScript 등의 파일을 화면에 시각적으로 표현해주는 도구이다.
- 대표적인 웹 브라우저는 Google Chrome, Safari (macOS, iOS), Mozilla Firefox, Microsoft Edge, Opera

#### <code>코드 에디터(Code Editor)</code>

- 웹 페이지를 만들기 위해 작성하는 HTML, CSS, JavaScript 등의 코드를 입력하고 편집하는 도구이다.
- 대표적인 코드 에디터는 VS Code (Visual Studio Code), Sublime Text, Brackets

## 3. HTML 기본 문법

### (1) 태그 (Tag)

#### <code>태그</code>

```less
// 열리는 태그<tagname>와 닫히는 태그</tagname>로 구성
<tagname>내용</tagname>
```

- HTML 태그는 웹 페이지의 구조와 내용을 정의하는 데 사용되는 기본 단위이다.
- 태그는 콘텐츠에 의미를 부여하고, 브라우저가 그 콘텐츠를 어떻게 표시할지 알려주는 역할을 한다.
- 태그 사이에 들어간 내용이 실제 화면에 출력되는 텍스트나 요소이다.

<br>

#### <code>단일 태그(Single Tag) / 빈 태그(Self-closing Tag)</code>

```less
// 단일 태그 형태 1
<tagname>

// 단일 태그 형태 2
<tagname/>
```

- 내용 없이 사용하는 HTML 태그
- 콘텐츠 생략이 가능할 때는 단일 태그를 사용

<br>

#### <code>올바른 태그 작성</code>

- 태그 이름은 소문자로 작성한다.
- 여는 태그와 닫는 태그를 정확히 입력한다.
- 태그 안에 또 다른 태그가 포함될 수 있다. (중첩 가능)
- 들여쓰기를 사용해 구조를 명확히 한다.

<br>

### (2) 속성 (Attributes)

#### <code>속성</code>

```less
// 속성이 추가된 태그의 형태
<태그명 속성= "값">콘텐츠</태그명>

// 속성이 추가된 단일 태그의 형태
<태그명 속성= "값" 속성= "값"/>
```

- HTML 속성은 태그에 추가적인 정보나 설정값을 제공하는 역할
- 속성은 시작 태그 내부에 작성되며, 주로 요소의 동작 방식, 외부 자원 연결, 스타일 지정 등을 설정한다.
- 속성의 값은 따옴표""로 감싸는 것이 좋다.
- 하나의 태그에 여러 개의 속성을 동시에 작성할 수 있으며, 속성 간 구분을 위해 공백을 사용한다.

<br>

### (3) 주석 (Comment)

#### <code>주석</code>

```less
<!-- 주석의 내용 -->
```

- 주석은 코드에 설명을 추가하거나, 특정 코드를 임시로 비활성화할 때 사용하는 문법이다.
- 브라우저에는 표시되지 않으며, 개발자에게만 보이는 정보이다. 주로 코드에 대한 메모를 남기기 위한 용도로 사용
- 주석을 만들기 위해서는 총 7개의 기호가 사용된다.

## 4. HTML 문서 기본 구조

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

- <code>!DOCTYPE html</code>: 문서가 HTML5 표준임을 선언. 브라우저가 문서를 올바르게 해석하도록 한다.
- <code>html</code>: HTML 문서의 루트(root) 요소. 전체 문서를 감싼다.
- <code>head</code>: 문서의 정보를 기입하는 부분
  - <code>meta charset="UTF-8"</code>: 문자 인코딩 방식 설정 (한글 포함 다양한 언어 지원)
  - <code>title</code>: 문서의 제목, 브라우저 탭에 표시될 제목
- <code>body</code>: 문서의 내용을 기입하는 부분
- HTML 문서에는 화면에 표시될 콘텐츠 외에 문서 정보도 포함된다.

## 5. 텍스트 표시하기

#### <code>p 문단 태그</code>

```html
<p>문단을 표시하는 태그</p>
<p>문단과 문단 사이에는 공백이 있음</p>
```

- <code>p 태그</code>는 텍스트를 문단 단위로 구분할 때 사용한다.
- 브라우저는 <code>p 태그</code>를 만나면, 앞뒤에 여백(margin)을 자동 적용하여
  문단 간 간격을 띄워준다.

<br>

#### <code>h 제목 태그</code>

```html
<h1>제목</h1>
<h2>제목</h2>
<h3>제목</h3>
<h4>제목</h4>
<h5>제목</h5>
<h6>제목</h6>
```

- 이 태그들은 웹 페이지의 제목과 구조를 계층적으로 표현할 때 사용된다.
- 숫자가 작을수록 제목의 중요도가 높고, 글씨 크기도 크다.
- h1은 가장 중요한 페이지의 대표 제목으로 한 페이지에 한 번만 사용하는 것이 좋다.

<br>

#### <code>hr 수평선 태그</code>

```html
<hr />
```

- 문서 내에서 주제 변경이나 내용 구분을 시각적으로 나타낼 때 사용한다.
- 브라우저에서는 가로로 긴 수평선을 그려 구분 역할을 한다.

<br>

#### <code>HTML 텍스트 특징</code>

- HTML은 엔터(줄바꿈)를 입력해도 실제 화면에서는 무시한다. 텍스트는 한 줄로 이어서 표시된다.
- 여러 개의 스페이스(공백)도 한 번의 공백으로 처리된다. 연속된 공백은 한 칸만 보여진다.

<br>

#### <code>br 줄바꿈 태그와 `&nbsp;` 공백문자</code>

- <code>br</code>: HTML에서 줄바꿈을 표시하기 위해 사용
- <code>`&nbsp;`</code>: HTML에서 공백을 두 번 이상 표시하고자 할 때 사용

## 6. 요소의 구분과 인라인 텍스트 요소

태그를 통해 표현하는 웹 요소들은 "블록 레벨 요소"와 "인라인 요소"로 구분할 수 있다.

#### <code>블록 레벨 요소(Block-level Elements)</code>

```html
<!-- 대표 태그 -->
<header></header>
<h1></h1>
<p></p>
<ul></ul>
<div></div>
<section></section>
<article></article>
<footer></footer>
```

- 자기 자신이 속한 부모 영역의 전체 너비를 차지하며, 항상 새로운 줄에서 시작되어 위아래 여백을 가진다.
- 주로 레이아웃을 구성하거나 영역을 나눌 때 사용된다.

<br>

#### <code>인라인 요소(Inline Elements)</code>

```html
<!-- 대표 태그 -->
<mark>형광펜 효과</mark>
<strong>볼드 효과</strong>
<em>이탤릭체 효과</em>
<q>인용구 효과</q>
<s>취소선 효과</s>
```

- 자신에게 필요한 만큼의 공간만 차지하고, 줄바꿈 없이 옆으로 이어지는 형태이다.
- 주로 텍스트의 일부분을 꾸미거나 연결할 때 사용된다.

## 7. 컨테이너와 전역 속성

#### <code>컨테이너(Container)</code>

```html
<div>블록 레벨 컨테이너</div>
<span>인라인 컨테이너</span>
```

- 콘텐츠나 레이아웃 자체에 직접적인 영향을 주지 않으면서, 다른 요소들을 묶어서 관리하기 위한 용도의 태그이다.
- 보통 스타일을 그룹 단위로 적용하거나, 구조적 의미로 구분이 필요할 때 사용합니다.

<br>

#### <code>전역 속성(Global attributes)</code>

- 전역 속성은 모든 HTML 태그에서 공통으로 사용할 수 있는 속성이다. 주로 식별, 스타일링, 추가 정보 제공 등의 목적으로 활용한다.
  - <code>id</code>: 요소에 고유한 이름을 부여하는 식별자 역할, 한 문서 내에서 중복되면 안됨
  - <code>class</code>: 요소를 그룹 별로 묶을 수 있는 식별자 역할
  - <code>style</code>: 요소에 적용할 CSS 스타일 선언(인라인 css를 적용할 때 사용)
  - <code>title</code>: 마우스를 올렸을 때 툴팁 형식으로 추가 정보를 제공, 접근성을 높이는 데 유용하다.

## 8. 이미지 표시하기

#### <code>img 태그</code>

```html
<img src="경로/파일명.jpg" alt="대체 텍스트" />
```

- HTML 문서에 이미지 파일을 삽입할 때 사용하는 태그
- 닫는 태그 없이 사용하는 단일(Self-closing) 태그
- 이미지 자체는 HTML 문서에 포함되지 않고, 외부 파일의 경로를 참조한다.
- 주요 속성 <br>
  <code>src</code>: 이미지 파일의 경로를 지정 (필수) <br>
  <code>alt</code>: 이미지가 로드되지 않거나, 시각장애인용 스크린리더를 위해 대체 텍스트 제공 <br>
  <code>width, height</code>: 이미지의 너비와 높이를 지정할 수 있음, 단위 없이 정수 값만 지정(적용 시에는 px 단위로 적용됨) <br>

## 9. 링크 표시하기

#### <code>링크</code>

- HTML에서 링크는 현재 문서에서 다른 문서나 외부 리소스로 이동할 수 있는 수단
- 주로 페이지 이동, 파일 다운로드, 전화 연결, 이메일 전송 등 다양한 목적에 사용된다.

#### <code>a 태그</code>

```html
<a href="https://example.com">이동하기</a>
```

- a 태그는 anchor의 약자로, 하이퍼링크를 생성할 때 사용한다.
- 링크로 연결할 주소를 href 속성에 지정할 수 있다.
- 텍스트 또는 이미지 등 어떤 콘텐츠도 링크로 만들 수 있다.

#### <code>새 탭에서 열기</code>

```html
<!-- 현재 탭에서 열기(기본값) -->
<a href="https://www.naver.com" target="_self">현재 탭에서 열기</a>

<!-- 새 창에서 열기 -->
<a href="https://www.naver.com" target="_blank">새 탭에서 열기</a>
```

## 10. 목록 만들기

- 목록이란, 연관된 항목(item)들을 나열한 구조
- HTML에서는 목록을 크게 두 가지로 구분한다:
  - 순서 없는 목록(Unordered List): <code>ul 태그</code>
  - 순서 있는 목록(Ordered List): <code>ol 태그</code>
- 두 목록 모두 항목을 표현할 때는 공통적으로 <code>li 태그</code> 사용
- ol 태그는 type 속성을 활용해서 목록번호를 표시할 수 있다. (1, A, a, I, i)

## 11. 표 만들기

- 표란, 행(Row)과 열(Column)로 이루어진 구조이며, 이들이 교차하는 지점을 셀이이라고 한다. 셀은 콘텐츠를 나타내는 최소 단위다.

```html
<table border="1">
  <caption>
    월간 판매 보고서
  </caption>

  <thead>
    <tr>
      <th>상품명</th>
      <th>단가</th>
      <th>수량</th>
      <th>합계</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>노트북</td>
      <td>1,000,000</td>
      <td>3</td>
      <td>3,000,000</td>
    </tr>
    <tr>
      <td>모니터</td>
      <td>300,000</td>
      <td>5</td>
      <td>1,500,000</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="3">총합</td>
      <td>4,500,000</td>
    </tr>
  </tfoot>
</table>
```

- <code>table</code>: 하나의 표 전체를 감싸는 태그
- <code>caption</code>: 표의 제목이나 설명을 나타냄, 가운데 정렬, 접근성 향상에 도움이 된다.
- <code>thead</code>: 표의 제목이나 주제를 나타내는 영역
- <code>tbody</code>: 표의 본문 영역
- <code>tfoot</code>: 표의 꼬리말 영역, 합계나 요약 등의 정보를 나타냄
- <code>tr</code>: 행(Row), 각 행은 하나 이상의 셀을 포함
- <code>th</code>: 제목(헤더) 셀, 기본적으로 굵게, 가운데 정렬됨
- <code>td</code>: 행 안의 일반적인 데이터 셀. 텍스트, 숫자 등 다양한 콘텐츠를 포함할 수 있음
- thead, tbody, tfoot 태그는 HTML 표를 논리적으로 나누기 위한 시맨틱 요소로, 유지보수성과 접근성을 높여주는 중요한 구조이다.

## 12. 입력 태그

#### <code>input</code>

```html
<input type="데이터 유형" />
```

- input 태그는 사용자로부터 텍스트, 숫자, 날짜, 비밀번호, 파일 등 다양한 형태의 데이터를 입력받을 수 있도록 한다.
- 닫는 태그 없이 사용하는 단일(Self-closing) 태그
- type 속성의 값에 따라 입력 방식이 달라진다.
  - <code>text</code>: 기본값, 텍스트를 입력받음
  - <code>email</code>: 이메일 입력
  - <code>password</code>: 비밀번호 입력
  - <code>search</code>: 검색할 텍스트를 입력받음
  - <code>date</code>: 날짜와 시간 지정
  - <code>color</code>: 색깔을 선택할 수 있음
  - <code>number</code>: 수치를 선택할 수 있음
  - <code>range</code>: 수준(달성도)를 선택할 수 있음

<br>

#### <code>label</code>

```js
// for 속성 사용
// label의 for 속성값과 input의 id 속성값을 일치시킨다.
<label for="username">아이디</label>
<input type="text" id="username" name="username" />

// for 속성 없이 감싸는 방식
<label>
  아이디
  <input type="text" name="username" />
</label>

```

- 입력 요소에 설명 또는 이름을 정의한다. 사용자가 어떤 입력을 해야 하는지 명확하게 알려주며, 스크린 리더 같은 보조기술에서 중요하다.
- label을 클릭하면 연결된 입력 요소에 포커스가 자동으로 이동한다.

<!-- ## 13. 양식을 만들고 값 전송하기 -->

<!-- ## 14. 시멘틱 태그 - 의미론적인 코드 -->

<!-- ## 15. 메타 데이터 - 문서 정보 관리하기 -->
