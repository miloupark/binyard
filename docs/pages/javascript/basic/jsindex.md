## async / await

- async와 await 문법은 Promise 객체를 더욱 쉽게 작성할 수 있고, 직관적으로 코드를 해석할 수 있게 도와주는 역할
- 실행 순서가 예측이 불가능했던 비동기 처리 방식과는 달리 비동기 함수의 실행 순서를 예측할 수 있게 된다.

```js
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const start = () => {
  delay(2000).then(() => {
    console.log("대기");
  });
};

start();
```

- delay 함수는 지연 시간을 인수로 받아 setTimeout을 Promise로 감싼 비동기 함수. 이 함수는 일정 시간 후 resolve를 호출해 흐름을 제어한다.
- start 함수는 2초간 대기한 뒤, then 메서드를 통해 대기라는 메세지를 출력한다.
- 위 코드를 async, await을 이용해 더 직관적으로 변경할 수 있다.

<br>

#### async

```js
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const start = async () => {
  return "대기";
};

start().then((result) => {
  console.log(result);
});

// 대기
```

- <code>async</code>는 비동기 함수를 만들 때 함수 앞에 붙이는 키워드이다. 해당 함수는 자동으로 Promise를 반환하는 비동기 함수가 된다.
- 함수 내에서 return 한 값은 해당 Promise가 성공 resolve할 때 전달되는 결과 값이다.

<br>

#### await

```js
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const start = async () => {
  await delay(2000); // delay 함수가 처리 완료될 때까지 기다림
  console.log("대기");
};

start();
```

- <code>await</code>은 <code>async</code> 함수 안에서만 쓸 수 있는 키워드
- 해당 Promise가 처리될 때까지 기다렸다가 결과를 바로 받을 수 있게 해준다.

<br>

#### async/await 사용 시 에러 처리방법

- async/await을 이용한 비동기처리 함수에서는 try-catch 문을 활용해 예외 처리를 할 수 있다.
- 이는 Promise의 .catch()처럼 비동기 작업 중 발생할 수 있는 예외 상황을 안전하게 처리하기 위한 방법이다.

#### try-catch

```js
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const start = async () => {
  try {
    await delay(2000);
    console.log("대기");
  } catch (error) {
    console.log(error);
  }
};

start();
```

- try의 블록 안의 코드가 실행되고, 해당 코드에서 에러가 발생한다면 catch 블록 안의 코드가 실행된다.
- 발견된 에러는 catch(error)의 error 객체에 담기며,이를 통해 에러의 원인을 확인할 수 있다.

## API 호출

#### API (Application Programming Interface)란?

- 컴퓨터나 컴퓨터 프로그램 사이의 연결
- 웹브라우저(클라이언트)와 서버 사이에서, 필요한 데이터를 요청하고 응답받기 위한 통신 방법 또는 약속된 규칙

<br>

#### 클라이언트-서버 통신 구조

- <code>Client</code>: 사용자가 직접 조작하는 프로그램으로, 서버에 요청을 보내고 응답을 받아 화면에 보여주는 역할을 한다. (ex 웹브라우저, 모바일 앱)
- <code>Server</code>: 클라이언트의 요청을 받아 처리하고, 필요한 데이터를 데이터베이스에서 가져와 응답을 보내주는 중간 관리자 역할을 한다.
- <code>Database</code>: 필요한 정보를 구조화된 형태로 저장하고, 서버의 요청에 따라 데이터를 제공하는 저장소

<br>

#### 클라이언트-서버 통신 흐름

```js
client -> server -> database
client <- server <- database
```

1. 사용자가 웹브라우저(클라이언트)에서 서버에게 원하는 데이터를 요청한다.
2. 서버는 데이터베이스에서 접근하여 요청받은 데이터를 조회한다.
3. 데이터베이스에서 해당 데이터를 찾아 서버에게 전달한다.
4. 서버는 받은 데이터를 클라이언트에게 응답으로 보낸다.

<br>

#### JSON

```json
{
  "id": 1,
  "title": "Hello JSON",
  "completed": false
}
```

- JSON(JavaScript Object Notation)은 자바스크립트에서 객체 형태의 데이터를 가독성 좋게 나타내기 위한 표기법
- key:value 쌍으로 구성되며, 보통 웹 애플리케이션에서 서버와 클라이언트 간에 데이터를 주고받을 때 사용된다.

<br>

#### API 호출 예시

- <code>https://jsonplaceholder.typicode.com/posts</code>는 테스트 용으로 자주 사용되는 가짜 API 주소이다.
- 이 주소를 브라우저에서 열거나 fetch 요청을 보내면, JSON 형식의 데이터 목록이 반환된다.
- 이런 방식으로, 클라이언트는 API를 통해 서버에 데이터를 요청하고, 서버는 JSON 형태로 응답을 반환한다.

<br>

#### fetch()

- 자바스크립트에서 API를 호출할 때는 fetch 내장함수를 사용한다.
- 서버로 비동기 HTTP 요청을 보낼 수 있다.
- 결과로 Promise 객체를 반환한다.

#### fetch 기본 사용 예시

```js
const response = fetch("https://jsonplaceholder.typicode.com/posts");

console.log(response); // Promise {<pending>}
```

- fetch()는 비동기 함수로, 실행 즉시 Promise 객체를 반환한다.
- 응답이 도착하기 전에 console.log()가 먼저 실행되므로, pending 상태의 Promise가 출력된다.

#### .then() / .catch()로 응답 처리

```js
const response = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log(response);
```

- fetch()는 Promise를 반환하므로, .then()과 .catch()로 결과와 에러를 처리할 수 있다.
- console.log(response)는 즉시 실행되어 Promise 객체 자체를 출력한다.
- 이후 promise에서 resolve 함수를 통해 전달된 결과값을 then 메서드에서 매개변수로 받아 api호출의 결과값이 출력된다.
- 콘솔에 Response 객체가 찍히는 이유는, fetch()는 처음에 JSON 데이터가 아닌 Response 객체 자체를 반환하기 때문이다.

<br>

#### async/await로 더 직관적인 코드 작성

```js
const getData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();
  console.log(data);
};

getData();
```

- await fetch()는 응답이 올 때까지 기다렸다가 Response 객체를 반환한다.
- fetch()로 받은 응답은 JSON 형식의 문자열 데이터이기 때문에, 이를 자바스크립트 객체로 변환하려면 .json() 메서드를 사용해야한다.

<br>

#### try...catch를 사용한 API 호출 에러 처리

```js
const getData = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await result.json();
    console.log(data); // 정상 응답 시 JSON 데이터 출력
  } catch (error) {
    console.log(error); // 네트워크 오류 또는 JSON 파싱 오류 처리
  }
};

getData();
```

- fetch()로 요청을 보낸 뒤, 응답을 .json()으로 변환해 데이터를 출력한다.
- 네트워크 연결 실패, 주소 오류, 파싱 실패 등의 상황에 대비해 try..catch 구문으로 에러를 안전하게 처리할 수 있다.

## 웹과 DOM

### 웹

- 인터넷에 연결된 사용자들이 서로 정보를 공유할 수 있는 공간을 의미한다.
- HTML로 작성된 하나의 문서를 웹 페이지라고 하고, 이 웹 페이지들이 모여 있는 집합을 웹 사이트라고 부른다.
- 웹 사이트는 특정한 주소(URL)로 접근할 수 있으며, 흔히 말하는 홈페이지에 해당한다.

### DOM(Document Object Model)

- 문서 객체 모델
- HTML을 브라우저가 객체 형태로 변환한 구조입니다. 자바스크립트가 이 구조를 통해 웹 페이지를 읽고, 수정하고, 조작할 수 있다.
  즉, 브라우저가 우리가 작성한 HTML을 자바스크립트가 이해할 수 있도록 구조화한 객체 모델입니다.

- DOM이란 Document Object Model 문서 객체 모델로, HTML로 작성된 여러 요소들에 자바스크립트가 접근할 수 있도록 브라우저가 변환시킨 객체이다. 브라우저가 우리가 작성한 HTML을 자바스크립트가 이해하고 조작할 수 있게 객체로 변환한 것이다.

```less
// HTML
<!DOCTYPE html>
<html>
  <body>
    <div>
      <h1>Hello</h1>
    </div>
    <div>
      <p>World</p>
    </div>
  </body>
</html>

// 브라우저 내부의 DOM 구조
Document
└── html
    └── body
        ├── div
        │   └── h1 ("Hello")
        └── div
            └── p("World")

```

- 웹 브라우저는 HTML 문서를 로드한 뒤, 이를 계층 구조(트리 구조)로 표현합니다. 이 구조를 DOM 트리(DOM Tree)라고 부른다.
- DOM 트리에서 각각의 항목은 노드(Node)라고 하며, 이 노드들은 모두 자바스크립트 객체로 구성되어 있다.
- 자바스크립트는 DOM이 제공하는 DOM API를 통해 이 노드들에 접근하여 내용 수정, 삭제, 추가 등의 작업을 할 수 있다.

## DOM API

### DOM Tree

```less
// DOM Tree

Document // 문서노드
└── html
    └── body // 요소노드
        ├── div // 요소노드, 어트리뷰트 노드(태그에 붙는 속성)
        │   └── h1 ("Hello") // 텍스트 노드
        └── div
            └── p("World")
```

- DOM API를 통해 요소에 접근할 때, 문서 노드 → 요소 노드 → 어트리뷰트 → 텍스트 노드 순서로 각 노드에 접근한다.
- 문서 노드는 DOM 트리의 가장 최상위에 위치하기 때문에, 어떤 요소에 접근하더라도 항상 먼저 문서 노드를 통해 시작해야 한다.

<br>

### 요소를 찾고 선택하는 DOM API

#### 1. attribute 노드(속성) 변경

#### document.getElementById(id)

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="clock" id="clock">15:03</div>
</div>
```

```js
console.log(document.getElementById("date"));
// <div class="date" id="date">02.10.금요일</div>
```

- <code>getElementById</code>는 DOM API가 제공하는 메서드 중 하나로, 특정 id 값을 가진 요소를 찾고 조작할 수 있게 해준다.
- 문서 내에서 id가 같은 요소가 여러 개여도 가장 위에 있는(트리 위쪽에 있는) 첫번째 요소만 반환한다. 하지만 HTML 표준상 id는 문서 내에서 유일(unique)해야 하므로, 보통은 id가 중복되지 않도록 사용하는 것이 맞다.

<br>

#### document.querySelector(cssSelector)

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="clock" id="clock">15:03</div>
</div>
```

```js
console.log(document.querySelector(".date"));
console.log(document.querySelector("div.date"));
// <div class="date" id="date">02.10.금요일</div>
```

- <code>querySelector</code> CSS 선택자를 이용해 DOM 요소를 찾는 메서드
- <code>.date</code> 클래스 이름이 date인 요소를 가져온다. 같은 의미이지만, 구체적으로 <code>div.date</code>처럼 div 태그 중에 클래스가 date인 요소라고 작성할 수도 있음.

<br>

#### document.querySelectorAll(cssSelector)

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="date" id="date">15:03</div>
</div>
```

```js
console.log(document.querySelectorAll("div.date"));
```

- <code>querySelectorAll</code>은 CSS 선택자를 사용해서 조건에 맞는 모든 요소를 한 번에 가져오는 메서드
- 반환값은 NodeList라는 유사 배열 형태로, 여러 요소가 포함될 수 있다.

<br>

#### document.getElementsByClassName(class)

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="date" id="date">15:03</div>
</div>
```

```js
console.log(document.getElementsByClassName("date"));
```

- <code>getElementsByClassName</code>은 동일한 클래스 이름을 가진 모든 요소들을 찾아 반환하는 메서드
- 단순 클래스 이름을 문자로 전달하기 때문에 클래스 이름 앞에 <code>.</code>을 붙이면 안된다.
- 반환되는 값은 HTMLCollection이라는 유사 배열 객체이며, 여러 요소가 있을 경우 인덱스를 통해 접근할 수 있다.

<br>

#### document.getElementsByTagName

```js
console.log(document.getElementsByTagName("div"));
```

- <code>getElementsByTagName</code> 특정 태그 이름을 가진 모든 요소를 찾아 반환하는 메서드
- 예를 들어 "div"를 넣으면, 문서 안에 있는 모든 div 요소들을 찾아서 반환한다. 반환값은 HTMLCollection이라는 유사 배열 객체이다.

<br>

### 요소 조작하기

#### className

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="clock" id="clock">15:03</div>
</div>
```

```js
console.log(document.getElementById("date").className); // date
```

- className은 요소의 class 속성 값을 문자열로 반환하는 속성

```js
const dateElement = document.getElementById("date");
dateElement.className = "change";

console.log(dateElement); // <div class="change" id="date">02.10.금요일</div>
console.log(dateElement.className); // change
```

- 클래스 이름을 change로 변경
- 변수에 값을 할당하듯이, 원하는 클래스명을 직접 넣으면 된다.

<br>

#### id

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="clock" id="clock">15:03</div>
</div>
```

```js
console.log(document.querySelector("div.date").id); // date
```

- id는 요소의 id 속성 값을 문자열로 가져오는 속성
- div 태그 중 클래스가 date인 요소를 선택해서, 해당 요소의 id값인 date를 콘솔에 출력

```js
const dateElement = document.querySelector("div.date");
dateElement.id = "change";

console.log(dateElement); // <div class="date" id="change">02.10.금요일</div>
```

- id 값을 change로 변경

<br>

#### classList

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="clock" id="clock">15:03</div>
</div>
```

```js
console.log(document.getElementById("date").classList);
// DOMTokenList ['date', value: 'date']
```

- classList는 요소의 클래스 목록을 토큰(문자열) 리스트 형태로 반환하는 속성
- 배열처럼 인덱스로 접근할 수 있고, 다양한 메서드를 제공한다.
- className처럼 특정 요소의 class 속성에 접근하지만, 더 다양한 메서드를 제공하여 클래스를 유연하게 조작할 수 있다.
- add, remove, item, toggle, contains, replace 등의 메서드를 제공하며, 이 중 add와 remove는 가장 많이 사용된다.
- className은 클래스 이름 전체가 변경되지만 classList는 기존의 클래스 값에 특정 값을 추가, 제거, 변경이 가능하다.

<br>

```js
const dateElement = document.getElementById("date");
dateElement.classList.add("change");
console.log(dateElement); // <div class="date change" id="date">02.10.금요일</div>
```

- add 메서드를 사용해 change 클래스 추가

<br>

```js
const dateElement = document.getElementById("date");
dateElement.classList.add("change");
dateElement.classList.remove("date");
console.log(dateElement); // <div class="change" id="date">02.10.금요일</div>
```

- remove 메서드를 통해 date 클래스 제거

<br>

#### 2. text 노드 변경

#### textContent

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="clock" id="clock">15:03</div>
</div>
```

```js
const clockElement = document.getElementById("clock");
clockElement.textContent = "12:00";

// 15:03이 12:00로 변경된다.
```

- <code>textContent</code>는 해당 요소 내부의 모든 텍스트 콘텐츠를 가져오거나 변경할 수 있는 속성
- 즉, HTML 태그를 제외한 순수한 텍스트만을 다루고 싶을 때 사용

<br>

#### 3. 요소 노드 생성

#### createElement(tagName)

```html
<!DOCTYPE html>
<html>
  <body>
    <div class="today-info">
      <div class="date" id="date">02.10.금요일</div>
      <div class="clock" id="clock">15:03</div>
      <!-- <div class="season">spring</div> -->
    </div>
  </body>
</html>
```

```less
Document
└── html
    └── body
        └── div.today-info
            ├── div.date (#date)
            ├── div.clock (#clock)
            // └── div.season (#season)
```

```js
// 1. textContent를 사용해 spring 텍스트 추가

const seasonElement = document.createElement("div"); // div 요소 생성
seasonElement.classList.add("season"); // div에 season 클래스 추가

seasonElement.textContent = "spring";

// 결과: <div class="season">spring</div>
```

- <code>createElement</code> 메서드를 통해 새로운 요소 노드를 생성하고, <code>textContent</code>로 텍스트 추가
- 이 방식은 간단하고 직관적이며, 텍스트가 복잡하지 않을 때 많이 쓰인다.

<br>

```js
// 2. createTextNode 메서드를 사용해 spring 텍스트 노드 생성

const seasonElement = document.createElement("div"); // div 요소 생성
seasonElement.classList.add("season"); // div에 season 클래스 추가

const seasonText = document.createTextNode("spring");

// 결과: <div class="season">spring</div>
```

- <code>createElement</code> 메서드를 사용해 새로운 요소 노드를 생성
- <code>createTextNode</code>는 텍스트만 담긴 별도의 텍스트 노드를 생성하며, 아직 DOM Tree에 추가된 것은 아니다. 이 텍스트 노드는 <code>appendChild()</code>등을 통해 부모 요소에 추가해야한다.
- 이 방식은 텍스트 노드를 더 세밀하게 제어하거나, 여러 텍스트 노드를 합성하는 등 더 유연한 조작이 필요할 때 유용하다.

<br>

```js
const seasonElement = document.createElement("div"); // div 요소 생성
seasonElement.classList.add("season"); // div에 season 클래스 추가

const seasonText = document.createTextNode("spring"); // 텍스트 노드 생성
seasonElement.appendChild(seasonText); // 텍스트 노드를 <div class="season">에 추가

const todayInfoElement = document.querySelector("div.today-info"); // 기존 html의 안에
todayInfoElement.appendChild(seasonElement); // 완성된 div를 DOM에 추가

// <div class="season">spring</div>가 추가된 것을 확인할 수 있음
```

- createElement와 createTextNode는 실제로 DOM에 바로 추가되는 것이 아니라, 브라우저 메모리 상에 임시로 만들어진 노드들이다.
- 이 노드들은 appendChild()를 호출해야 실제로 DOM에 삽입되고, 브라우저 화면에도 렌더링된다.
- appendChild()는 지정한 요소의 마지막 자식으로 노드를 추가한다. 따라서 이미 자식이 있는 요소에 추가하면, 그 맨 끝에 붙게 된다.
- 따라서 이미 자식 노드가 있을 경우, 새 노드는 맨 뒤에 붙는다.

<br>

```js
// 추가 예시
const buttonElement = document.createElement("div"); // div 생성
buttonElement.classList.add("button"); // div에 button 클래스 추가
buttonElement.textContent = "버튼"; // 텍스트 버튼 추가

// DOM에 추가
const todayInfoElement = document.querySelector("div.today-info"); // 기존 요소 선택
todayInfoElement.appendChild(buttonElement); // 새로 만든 div를 DOM에 추가

// 문서 내 모든 div 요소를 HTMLCollection 형태로 출력
console.log(document.getElementsByTagName("div"));
```

- createElement로 새로운 div 요소를 생성하고, classList.add로 button 클래스를 추가
- textContent를 사용해 내부 텍스트를 "버튼"으로 설정
- querySelector로 기존 문서에서 .today-info 클래스를 가진 요소를 선택하고, appendChild를 이용해 새로 만든 버튼 요소를 자식으로 추가
- 마지막으로 getElementsByTagName("div")를 호출해 현재 문서 내 모든 div 요소를 가져오며, 새로 추가된 buttonElement도 포함되어 출력
- getElementsByTagName은 실시간 컬렉션을 반환하므로, DOM 변경 사항이 즉시 반영된다.

<br>

#### addEventListener

```js
element.addEventListener(eventType, listenerFunction);
```

- addEventListener는 DOM 요소에 이벤트를 등록할 수 있는 메서드이다.
- eventType (문자열): 등록할 이벤트 종류
- listenerFunction 함수: 이벤트가 발생했을 때 실행될 함수

<br>

```js
// 추가 예시
const buttonElement = document.createElement("div");
buttonElement.classList.add("button");
buttonElement.textContent = "버튼";

// DOM에 추가
const todayInfoElement = document.querySelector("div.today-info");
todayInfoElement.appendChild(buttonElement);

buttonElement.addEventListener("click", () => {
  window.alert("클릭");
});

// 결과: 버튼 텍스트를 누르면, 클릭이라는 단어가 적힌 경고창이 실행된다.
```

- addEventListener 메서드는 이벤트 종류 외에 listener라는 함수도 매개변수로 받는다. 이 함수는 지정한 이벤트가 발생했을 때 실행된다.
  위 예시에서 버튼을 클릭하면 window.alert 메서드를 호출해 경고창을 띄우는 함수를 전달한다.
- window 객체는 현재 사용하고 있는 웹 브라우저의 창을 나타내며, 경고창을 띄우는 alert, 확인과 취소의 버튼이 있는 confirm과 같은 다양한 메서드들을 포함한다.

## Date 객체

- <code>Date</code>는 날짜와 시간을 다루기 위한 자바스크립트의 내장 객체
- 현재 날짜와 시간, 혹은 특정 날짜와 시간을 생성하고 조작할 수 있다.

```js
// YYYY-MM-DD

let birth = new Date("1996-04-07");

console.log(birth);
// Sun Apr 07 1996 09:00:00 GMT+0900 (한국 표준시)
```

- Date 객체에 특정 날짜를 전달하면, 해당 날짜의 연도, 월 일, 요일을 알 수 있다.
- 날짜만 넣으면 시간은 00:00:00(자정)으로 자동 설정된다.
- 다만, 09:00:00으로 출력된 이유는 타임존(Timezone) 때문이다. 자바스크립트가 입력된 날짜를 UTC(협정 세계시) 기준 자정(00:00:00)으로 해석하고, 이후 브라우저가 실행되는 컴퓨터 시간대(GMT+9, 한국 표준시)를 적용해서 출력하기 때문이다. (한국 표준시는 UTC보다 9시간 빠르다)

<br>

```js
let nowDate = new Date();
console.log(nowDate);
// Sat Jun 21 2025 00:13:27 GMT+0900 (한국 표준시)
```

- Date 객체에 아무런 값도 전달하지 않으면 오늘의 연도, 월 일, 요일, 시간이 출력된다.

<br>

#### Date의 메서드

#### 날짜

```js
let nowDate = new Date();
let month = nowDate.getMonth();
let date = nowDate.getDate();
let day = nowDate.getDay();

console.log(`${month}월 ${date}일 ${day}요일`);
// 5월 21일 6요일
```

```js
const week = ["일", "월", "화", "수", "목", "금", "토"];
let nowDate = new Date();
let month = nowDate.getMonth() + 1;
let date = nowDate.getDate();
let day = nowDate.getDay();

console.log(`${month}월 ${date}일 ${week[day]}요일`);
// 6 월 21일 토요일
```

#### <code>getMonth</code>

- Date 객체에서 월(0~11)을 반환하는 메서드
- Date 객체에서는 반환값은 0부터 시작하므로, 1월을 0, 12월을 11로 표기한다.
- 따라서 getMonth()의 결과를 사람이 이해하는 월로 표현하려면, 결과값에 1을 더해야 한다.

#### <code>getDate</code>

- 해당 날짜의 일(1~31) 을 반환하는 메서드
- getMonth()와는 달리, getDate()는 우리가 흔히 사용하는 날짜(1일부터 시작)를 그대로 반환한다.

#### <code>getDay</code>

- 특정 날짜의 요일 정보를 숫자로 반환하는 메서드
- 일요일부터 토요일까지 순서대로 0 부터 6까지의 숫자로 요일을 반환하기 때문에 우리가 익숙한 요일 이름으로 나타내고 싶다면, 요일 이름이 담긴 배열과 함께 사용해야 한다.

<br>

#### 시간

```js
let nowDate = new Date();
let hours = nowDate.getHours();
let minutes = nowDate.getMinutes();

console.log(`${hours}:${minutes}`);

// 현재 시간 출력
```

#### <code>getHours</code>

- Date 객체에서 시간(0~23) 을 반환한다.

#### <code>getMinutes</code>

- Date 객체에서 분(0~59) 을 반환한다.

#### <code>getSeconds</code>

-Date 객체에서 초(0~59) 를 반환한다.

## Local Storage

- Local Storage는 웹 브라우저에 데이터를 영구적으로 저장할 수 있는 방법 중 하나이다.
- JavaScript의 localStorage 객체를 사용해 key-value 쌍으로 데이터를 저장한다.
- 브라우저를 새로 고쳐도 저장된 데이터는 사라지지 않으며, 사용자가 직접 삭제하거나 브라우저 설정을 초기화하지 않는 한 유지된다.
- 객체나 배열은 문자열로 변환(JSON.stringify)한 후 저장해야 한다.
- 저장된 데이터는 브라우저 개발자 도구의 Application 탭 > Local Storage에서 확인할 수 있다.

### 주요 메서드

#### <code>setItem</code> 저장하기

```js
localStorage.setItem("key", "value");
```

- 로컬 스토리지에 데이터를 저장할 때 사용
- 매개변수
  - <code>key</code> : 저장할 데이터의 이름 (문자열)
  - <code>value</code> : 저장할 실제 데이터 (문자열만 가능 – 객체/배열은 JSON으로 변환 필요)

<br>

#### <code>getItem</code> 불러오기

```js
localStorage.getItem("key");
```

- 저장된 데이터를 가져올 때 사용
- 해당 key가 없으면 null을 반환

<br>

#### <code>JSON.stringify()</code>

```js
const user = { name: "milou", age: 20 };
localStorage.setItem("user", JSON.stringify(user));
```

- 객체나 배열을 문자열로 변환한다.
- 로컬 스토리지에 저장하기 전에 사용한다.

<br>

#### <code>JSON.parse()</code>

```js
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // "milou"
```

- 문자열을 다시 객체나 배열로 변환한다.
- 로컬 스토리지에서 데이터를 꺼낸 후 사용한다.
