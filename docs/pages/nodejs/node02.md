# ES Module

::: info 📦 ES Module 설정 방법
Node.js에서 ES Module을 사용하려면 다음 중 하나의 설정이 필요하다.

1. `package.json`에 항목 추가

   ```json
   {
     "type": "module"
   }
   ```

2. 모듈 파일 확장자를 `.mjs`로 지정

최신 버전의 Node.js에서는 설정 없이도 동작할 수 있지만, 실무에서는 환경 차이를 고려해 위 설정 중 하나를 적용하는 것이 안전하다.

:::

<br>

## 기본 export / import

::: code-group

```js [math.js]
export const PI = 3.14159265359;

export function add(a, b) {
  return a + b;
}

export class MathOps {
  mult(a, b) {
    return a * b;
  }
}
```

```js [app.js]
// 필요한 항목만 구조분해 import
import { PI, add, MathOps } from "./math.js";

console.log(PI, add(PI, 2), new MathOps().mult(PI, 2));
```

```js [app2.js]
// 모듈 전체를 하나의 객체로 가져오기
import * as math from "./math.js";

console.log(math.PI, math.add(math.PI, 2), new math.MathOps().mult(math.PI, 2));
```

:::

- 선언 앞에 `export` 키워드를 붙여 모듈을 내보낸다.
- import 시에는 구조분해 방식과 `\* as` 방식 둘 다 가능하다.
- `\* as` 방식을 쓰면 모듈 전체를 하나의 네임스페이스 객체로 다룰 수 있다.

<br>

## default export

::: code-group

```js [math.js]
export const PI = 3.14159265359;

export function add(a, b) {
  return a + b;
}

export default function sub(a, b) {
  return a - b;
}
```

```js [app.js]
import subtract, { PI, add } from "./math.js";

console.log(PI, add(PI, 2), subtract(7, 3));
```

:::

- `default` 키워드는 모듈을 대표하는 값을 지정한다.
- 불러올 때는 `{}` 없이 원하는 이름으로 import 가능 (subtract)
- 한 모듈에는 `default export`가 하나만 존재할 수 있다.

<br>

## 이름 충돌 방지 (alias)

::: code-group

```js [app.js]
import * as math from "./math.js";
import * as vector from "./vector.js";

console.log(math.add(1, 2));
console.log(vector.add({ x: 1, y: 2 }, { x: 3, y: 4 }));
```

```js [app2.js]
import { add as addMath, mult } from "./math.js";
import { add as addVector, sub } from "./vector.js";

console.log(addMath(1, 2));
console.log(addVector({ x: 1, y: 2 }, { x: 3, y: 4 }));
```

```js [math.js]
export const add = (a, b) => a + b;
export const mult = (a, b) => a * b;
```

```js [vector.js]
export const add = (a, b) => ({
  x: a.x + b.x,
  y: a.y + b.y,
});

export const sub = (a, b) => ({
  x: a.x - b.x,
  y: a.y - b.y,
});
```

:::

- 서로 다른 모듈에서 같은 이름을 export하면 충돌이 발생한다.
- `import * as`를 사용해 각각 네임스페이스로 묶거나, `add as addMath`처럼 별칭을 지정해 구분한다.

<br>

## 모듈 캐싱

::: code-group

```js [counter.js]
let count = 0;

export const increment = () => count++;
export const getCount = () => count;
```

```js [fileA.js]
import { getCount, increment } from "./counter.js";

console.log("1.", getCount());
increment();
console.log("2.", getCount());
```

```js [fileB.js]
import { getCount, increment } from "./counter.js";

console.log("3.", getCount());
increment();
console.log("4.", getCount());
```

```js [app.js]
import "./fileA.js";
import "./fileB.js";
// 1. 0
// 2. 1
// 3. 1
// 4. 2
```

:::

- ES Module도 CommonJS와 마찬가지로 캐싱된다.
- 따라서 동일한 모듈을 여러 번 import해도 같은 인스턴스를 공유한다.

::: info 💡 캐싱되지 않게 하려면?

경로에 서로 다른 쿼리 스트링을 붙여주면 된다.  
같은 모듈이라도 경로 문자열이 달라지면 새로운 모듈로 인식해 캐싱이 되지 않는다.

```js
import { getCount, increment } from "./counter.js?v=1";
import { getCount, increment } from "./counter.js?v=2";

import "./fileA.js";
import "./fileB.js";
// 1. 0
// 2. 1
// 3. 0
// 4. 1
```

:::

<br>

## 동적 import

::: code-group

```js [app.js]
async function dynamicAdd(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    console.log("Loading math module...");
    import("./math.js").then((math) => {
      console.log(`Result: ${math.add(a, b)}`);
    });
  } else {
    console.log("Loading vector module...");
    const vector = await import("./vector.js");
    console.log("Result:", vector.add(a, b));
  }
  console.log("Function execution continues...");
}

dynamicAdd(2, 3);
// Loading math module...
// Function execution continues...
// Result: 5

dynamicAdd({ x: 2, y: 3 }, { x: 4, y: 1 });
// Loading vector module...
// Result: { x: 6, y: 4 }
// Function execution continues...
```

```js [math.js]
export const add = (a, b) => a + b;
export const mult = (a, b) => a * b;
```

```js [vector.js]
export const add = (a, b) => ({
  x: a.x + b.x,
  y: a.y + b.y,
});

export const sub = (a, b) => ({
  x: a.x - b.x,
  y: a.y - b.y,
});
```

:::

- 필요한 시점에 모듈을 비동기적으로 import해 초기 로딩 시간을 단축할 수 있다.

<br>

## Top-level await

::: code-group

```js [fetch-google.js]
const response = await fetch("https://www.google.com");
const html = await response.text();

export { html };
```

```js [app.js]
import { html } from "./fetch-google.js";

console.log(html.slice(0, 15)); // <!doctype html>
```

:::

- ES Module은 내부적으로 비동기 로드를 지원한다.
- 따라서 최상위 스코프에서도 await 사용 가능하다.
- 반면 CommonJS에서는 반드시 async 함수 안에서만 await을 사용할 수 있다.

::: details 💡 Top-level await <badge type="tip" text="ESM에서 함수 밖 최상위 스코프에서 쓰는 await"></badge>

일반적으로 `await`은 `async function` 안에서만 사용할 수 있다.  
하지만 ES Module(ESM)에서는 모듈 최상위 스코프(= 함수 밖, 전역 같은 위치)에서도 `await`을 쓸 수 있도록 허용했다.
이런 기능을 `Top-level await`이라고 부른다.

<br>

##### 특징

1. ESM 전용: CommonJ에서는 사용할 수 없고, 반드시 async 함수 안에서만 가능하다.

2. 모듈 간 의존성 해결

   - 다른 모듈이 await된 값을 가져올 때까지 import가 지연될 수 있다.
   - 즉, import 자체가 비동기로 동작할 수 있다.

3. 실무 활용 예시
   - fetch로 원격 데이터를 읽어온 뒤 export
   - DB 연결 초기화
   - 설정 파일 비동기 로드

:::

<br>
<Comment/>
