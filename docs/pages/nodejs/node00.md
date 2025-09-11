# Node.js

Node.js는 자바스크립트 실행 환경(Runtime Environment)이다.  
원래 자바스크립트는 브라우저 안에서만 실행되던 언어였지만, Node.js를 설치하면 브라우저 밖 서버나 로컬에서도 자바스크립트를 실행할 수 있다.
즉, 컴퓨터에 Node.js를 설치하면 자바스크립트로 직접 명령을 내리고 프로그램을 만들 수 있게 된다.

## Node.js 특징

- `Event-driven`: 이벤트 중심으로 동작
- `Asynchronous` & `Non-blocking I/O`: 작업이 완료될 때까지 기다리지 않고 동시에 여러 일을 처리
- `Single-threaded`: 하나의 스레드로 동작하지만 위 특징 덕분에 멀티태스킹처럼 효율적으로 동작

::: info 💡 정리하면,
Node.js는 자바스크립트를 활용해 빠르고 효율적인 서버 애플리케이션을 만들 수 있도록 도와주는 환경이다.
:::

## REPL (Read-Eval-Print-Loop)

REPL은 코드를 파일로 작성하지 않고도 터미널에서 바로 실행해 결과를 확인할 수 있는 환경이다.
(Node.js뿐 아니라 파이썬, 루비 등 다른 언어에도 존재한다.)

```bash
$ node
>
```

- 터미널에 `node`라고 입력하면 Node.js의 REPL 실행
- 자바스크립트 코드 입력 가능
- `_` 언더스코어 기호는 마지막 실행 결과를 참조할 수 있다.
- `.help` 입력 시 REPL에서 사용 가능한 명령어 확인 가능하다.

::: details 🧩 REPL 명령어

```bash
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
```

:::

## 모듈 시스템: CommonJS vs ES Module

Node.js에는 두 가지 모듈 시스템이 있다.

### CommonJS (CJS)

- Node.js 초창기부터 기본으로 사용된 방식 (`require` `module.exports`)

### ES Module (ESM)

- 브라우저 표준 모듈 시스템 (`import`, `export`)
- 점차 Node.js의 기본으로 자리잡는 추세라고 한다.

<br>

## CommonJS

### 단일 값 export

::: code-group

```js [math.js]
function add(a, b) {
  return a + b;
}

module.exports = add;
```

```js [app.js]
const addFunc = require("./math.js");

console.log(addFunc(1, 2)); // 3
```

:::

- `module.exports = add` → require 결과는 add 함수 자체
- 단일 값을 불러올 때 변수명(addFunc)을 자유롭게 붙일 수 있다.

<br>

### 객체 export

::: code-group

```js [math.js]
const PI = 3.14159265359;

function add(a, b) {
  return a + b;
}

module.exports = { PI, add };
```

```js [app.js]
const { PI, add: addFunc } = require("./math.js");

console.log(PI); // 3.14159265359
console.log(addFunc(1, 2)); // 3
```

:::

- 여러 값을 내보낼 때는 객체로 묶는다 → `module.exports = { PI, add };`
- 구조 분해 할당 가능, `add: addFunc`처럼 별칭을 사용할 수 있다.

<br>

### 전체 객체 불러오기

::: code-group

```js [math.js]
const PI = 3.14159265359;

function add(a, b) {
  return a + b;
}

class MathOps {
  mul(a, b) {
    return a * b;
  }
}

module.exports = { PI, add, MathOps };
```

```js [app.js]
// 전체 객체를 math라는 네임스페이스로 불러오기
const math = require("./math");

const x = math.add(math.PI, 1);
const y = new math.MathOps().mul(x, 2);

console.log(x, y);
```

```js [app2.js]
// 구조분해 할당으로 값 꺼내오기
const { PI, add, MathOps } = require("./math");

const x = add(PI, 1);
const y = new MathOps().mul(x, 2);

console.log(x, y);
```

:::

- `require("./math")`의 결과는 `{ PI, add, MathOps }` 객체
- 전체 객체 방식: `math.PI`, `math.add`처럼 네임스페이스로 접근
- 구조분해 방식: 필요한 값만 꺼내 직접 사용

<br>

### exports vs module.exports

::: code-group

```js [math.js]
module.exports = {
  add: (a, b) => a + b,
  subt: (a, b) => a - b,
};

exports.mult = (a, b) => a * b;
exports.div = (a, b) => a / b;

console.log(module.exports === exports); // fasle
```

```js [app.js]
const { add, subt, mult, div } = require("./math");

console.log(add(1, 2), subt(1, 2), mult(1, 2), div(1, 2));
// mult is not a function
```

:::

- `exports`와 `module.exports`는 같은 객체를 가리킨다.
- 하지만 `module.exports = {...}`로 새 값을 할당하면 연결이 끊긴다 (메모리상 주소가 달라짐)
- 한 파일 안에서 두 방식을 섞어 쓰면 안된다.

<br>

### 모듈 캐싱

::: code-group

```js [counter.js]
let count = 0;

module.exports = {
  increment: () => count++,
  getCount: () => count,
};
```

```js [fileA.js]
const counter = require("./counter");

console.log("1.", counter.getCount());
counter.increment();
console.log("2.", counter.getCount());
```

```js [fileB.js]
const counter = require("./counter");

console.log("3.", counter.getCount());
counter.increment();
console.log("4.", counter.getCount());
```

```js [app.js]
require("./fileA");
require("./fileB");

// 1. 0
// 2. 1
// 3. 1
// 4. 2
```

:::

- CommonJS는 한 번 불러온 모듈을 캐싱한다.
- 따라서 여러 파일에서 `require`해도 동일한 인스턴스를 공유한다.
- fileB 코드가 실행되었을 때, 카운트가 이미 1로 증가해 있는 것을 볼 수 있다. fileA와 fileB가 가져온 카운터 모듈은 서로 같은 인스턴스를 공유하기 때문.
