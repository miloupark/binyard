# Day 13

## 함수 표현식 to 화살표 함수

함수 표현식은 함수를 변수에 할당하는 방식이다.
함수 표현식은 `화살표 함수`로 변환할 수 있다.

```js
// 함수 표현식
const greet = function (userName) {
  return `안녕하세요, ${userName}님!`;
};

// 화살표 함수로 변형
const helloArrow = (userName) => {
  return `안녕하세요, ${userName}님!`;
};

console.log(helloArrow("바켸빈")); // 안녕하세요, 바켸빈님!
```

### 화살표 함수 축약 형태

```js
// 매개변수 없음 → () 생략 불가
const sayHi = () => `안녕하세요!`;

// 매개변수 하나 → () 생략 가능
const cheer = (name) => `${name}님, 화이팅입니다!`;

// 매개변수 여러 개
const fullGreetArrow = (firstName, lastName) =>
  `안녕하세요, ${lastName}${firstName}님!`;

// 본문 한 줄 → {}, return 생략 가능
const getGreeting = (name) => `어서오세요, ${name}님!`;

// 본문 여러 줄 → {}, return 필요
const getMultiLineGreeting = (name) => {
  const time = new Date().toLocaleTimeString();
  return `${name}님, 현재 시간은 ${time}입니다.`;
};

// 객체 리터럴 반환 시 → 소괄호로 감싸기
const getUser = (name) => ({ username: name, role: "Frontend Developer" });

console.log(cheer("바켸빈")); // 바켸빈님, 화이팅입니다!
console.log(fullGreetArrow("켸빈", "바")); // 안녕하세요, 바켸빈님!
console.log(getGreeting("바켸빈")); // 어서오세요, 바켸빈님!
console.log(getUser("바켸빈")); // { username: "바켸빈", role: "Frontend Developer" }
```

## 전역변수를 사용할 때 발생하는 문제

```js
// 전역 변수 선언
let status = "정상";

// 로그인 상태를 변경하는 함수
function login() {
  status = "로그인됨"; // 전역 변수 변경
}

// 오류 메시지를 처리하는 함수
function showError() {
  if (status === "정상") {
    console.log("오류 없음");
  } else {
    console.log("로그인 상태에서 오류 발생!");
  }
}

// 동작 흐름
showError(); // 오류 없음
login(); // 전역 변수 변경
showError(); // 로그인 상태에서 오류 발생!
```

### 개선

전역 변수 사용을 최소화하고, 함수 간 명시적 데이터 전달을 고려한 방법

```js
function login(currentStatus) {
  return "로그인됨";
}

function showError(currentStatus) {
  if (currentStatus === "정상") {
    console.log("오류 없음");
  } else {
    console.log("로그인 상태에서 오류 발생!");
  }
}

let status = "정상";
showError(status); // 오류 없음
status = login(status); // 상태 변경
showError(status); // 로그인 상태에서 오류 발생!
```

```js
showError(status);
```

- 여기서 showError(status)라고 호출했을 때,
  함수 내부의 currentStatus는 전역 변수 status의 현재 값 "정상"을 복사해서 받는다.

```js
function showError(currentStatus) {
  if (currentStatus === "정상") {
    console.log("오류 없음");
  } else {
    console.log("로그인 상태에서 오류 발생!");
  }
}
```

- currentStatus는 함수 내부에서만 사용하는 지역 변수이다.
- 하지만 호출할 때 넘긴 인자 값은 전역 변수 status의 현재 값이기 때문에,
  함수 내부에서는 그 값을 기준으로 조건을 판단하게 된다.

::: info 💡 중요 포인트

- 전역 변수 status를 직접 참조하는 것이 아니라, 값을 인자로 복사해서 전달한 것이다.
- 즉, showError(status) → currentStatus = "정상"이 되는 것이다.
- 그래서 currentStatus는 전역 변수인 status와 같은 값을 갖는 지역 변수예요.
  하지만 별개의 변수이기 때문에, 함수 내부에서 currentStatus를 바꿔도 전역 status에는 영향을 주지 않는다.

<br>

😮 비유하자면,

- 전역 status가 A4 용지 한 장이라면, showError(status)는 그걸 복사해서 가져온 것이다.
- 복사본(currentStatus)에 낙서를 해도 원본(status)에는 영향이 없다!

:::

```js
status = login(status); // 상태 변경
```

```js
function login(currentStatus) {
  return "로그인됨";
}
```

1. `=` 할당 연산자는 오른쪽 값을 평가한 후, 그 결과를 왼쪽 변수에 재할당한다.

2. `login(status)` 호출

- status의 현재 값 "정상"이 login 함수에 인자로 전달된다.
- `function login(currentStatus)`에서 currentStatus는 "정상"을 받지만,
  실제로는 그 값을 사용하지 않고 무조건 `"로그인됨"`을 리턴한다.

3. `status = ...` 대입(재할당)

- `login(status)`가 반환한 "로그인됨"이 변수 `status`에 재할당된다.
- 즉, 기존의 "정상"이라는 값은 덮어쓰기 되어 `status === "로그인됨";`이 되는 것이다.

<br>

## 구조분해할당

# Day 16 \_ HTTP

### HTTP란?

웹 브라우저에서 데이터를 주고받을 때 `브라우저(클라이언트)`와 `서버`는 무언가의 규칙에 따라 소통한다. 이 통신 규칙(프로토콜)이 바로 `HTTP(HyperText Transfer Protocol)`이다.
즉, 웹에서 데이터를 주고받기 위한 통신 규칙이다.

### HTTP는 어떻게 동작할까?

## HTTP 요청/응답

- [`📎 MDN HTTP`](https://developer.mozilla.org/ko/docs/Web/HTTP)

::: info 프로토콜이란?
프로토콜(protocol)은 컴퓨터가 정보를 주고받을 때 사용하는 통신 규칙이다. 쉽게 말하면 약속된 규칙이다.
브라우저(클라이언트)가 서버에 정보를 요청하면 어떤 형식으로 요청하고, 어떻게 응답할지를 정한 통신 규칙이 바로 HTTP(HyperText Transfer Protocol)이다.
:::

::: info

- 이메일 보낼 땐 SMTP
- 파일 전송할 땐 FTP
- 웹 브라우저에서는 HTTP 또는 보안이 강화된 HTTPS를 사용한다.

:::
