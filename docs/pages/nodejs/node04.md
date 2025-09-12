# fs 모듈 (fs/promises 중심)

## 비권장 패턴

> 콜백 기반 `readFile`과 동기 `readFileSync` API는 레거시 스타일로 간주되며,  
> 에러 핸들링/구성의 일관성을 위해 `node:fs/promises` 사용을 권장합니다.

::: code-group

```js [index.js]
import { readFileSync, readFile } from "node:fs";

const data = readFileSync("index.txt", "utf8");
console.log("동기", data);

readFile("index.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("비동기", data);
});

console.log("나는 깍두기");

// 동기 ESM 읽어오기지롱
// 나는 깍두기
// 비동기 ESM 읽어오기지롱
```

```plaintext [index.txt]
ESM 읽어오기지롱
```

:::

- ESM에서도 `node:fs`에서 필요한 함수만 구조분해 import 가능하다. 하지만 권장되는 방법은 아니다.

<br>

## readFile() <badge type="info" text="권장"></badge>

`fs/promises`는 fs의 비동기 API를 `Promise` 기반으로 제공한다.  
ESM에선 `Top-level await`를 사용할 수 있어 코드가 간결해진다.

::: code-group

```js [index.js]
import { readFile } from "node:fs/promises";

const data = await readFile("index.txt", "utf8");

console.log(data);
console.log("이 방법이 선호된답니다.");
// ESM 읽어오기지롱
// 이 방법이 선호된답니다.
```

```plaintext [index.txt]
ESM 읽어오기지롱
```

:::

- readFile/readFileSync 대비 가독성이 좋고 직관적이다.
- Top-level await 사용 전제: package.json에 `"type":"module"` 또는 `.mjs`

::: details CommonJS fs.promises 사용하기

::: code-group

```js [index.js]
const fs = require("fs").promises;

async function readFileAsync() {
  try {
    const data = await fs.readFile("index.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

readFileAsync();
console.log("CommonJS에서의 Promise");
// CommonJS에서의 Promise
// 사용은 가능하지만.. 길다.
```

```plaintext [index.txt]
사용은 가능하지만.. 길다.
```

- CJS도 가능하지만 async 함수 안에서만 await 사용 → 보일러플레이트 증가
- ESM 사용 또는 비동기 초기화를 감싸는 패턴이 권장된다.

:::

<br>

## writeFile()

파일 쓰기

::: code-group

```js [index.js]
import { writeFile } from "node:fs/promises";

await writeFile("out-await.txt", "저 비동기에유 작성해봐유");

console.log("음.. 비동기라네");
// 음.. 비동기라네
```

```plaintext [out-await.txt]
저 비동기에유 작성해봐유
```

:::

- 첫 번째 인자: 파일명
- 두 번째 인자: 데이터 (기존 파일이 있으면 덮어씀)

<br>

## access()

파일 유무/권한 확인

::: code-group

```js [index.js]
import { access } from "node:fs/promises";
// import { constants } from "node:fs"; // 필요 시 사용 (F_OK/R_OK/W_OK/X_OK)

try {
  // 기본은 F_OK(존재 여부) 체크
  await access("out-await.txt");
  console.log("파일이 존재하는디");
} catch {
  console.log("파일이 존재하지 않는디");
}

// 파일이 존재하는디
```

```plaintext [out-await.txt]
나여 파일
```

:::

- 기본 모드는 `F_OK`
- 읽기/쓰기/실행 권한까지 확인하려면 옵션 전달:
  - `await access(path, constants.R_OK | constants.W_OK)`

<br>

## unlink()

파일 삭제

::: code-group

```js [index.js]
import { unlink } from "node:fs/promises";

await unlink("out-await.txt");

console.log("파일이 성공적으로 삭제되었구먼");
// 파일이 성공적으로 삭제되었구먼
```

```plaintext [out-await.txt]
[삭제 전 내용 예시]
삭제될건디..
```

:::

- 대상이 없거나 권한이 없으면 오류 발생

<br>
<hr>

# path 모듈

## \_\_filename · \_\_dirname

```js
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

- `fileURLToPath()`: 해당 OS에 맞는 경로 문자열로 바꿔주는 함수
- `import.meta.url`: ESM에만 제공되는 것으로 현 파일의 URL 정보를 갖고 있다.
- `__filename`: 실행중인 파일의 전체 경로
- `__dirname`: 해당 파일이 들어있는 폴더의 경로
