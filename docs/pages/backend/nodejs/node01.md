# CommonJS

## 단일 값 export

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

## 객체 export

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

## 전체 객체 불러오기

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

## exports vs module.exports

::: code-group

```js [math.js]
module.exports = {
  add: (a, b) => a + b,
  subt: (a, b) => a - b,
};

exports.mult = (a, b) => a * b;
exports.div = (a, b) => a / b;

console.log(module.exports === exports); // false
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

## 모듈 캐싱

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

<br>
<Comment/>
