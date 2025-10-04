# fs 모듈

::: info Reference

- 📎 [fs 공식 문서](https://nodejs.org/api/fs.html)
- 📎 [path 모듈 공식 문서](https://nodejs.org/api/path.html)

:::

<br>

## readFile() <badge type="tip" text="읽기-비동기"></badge>

::: code-group

```js [비동기 readFile()]
// fs는 Node.js에서 기본으로 제공하는 내장 모듈이다.
const fs = require("fs");

// readFile 함수를 사용해 index 문서의 데이터를 읽어올 수 있다.
fs.readFile("./index.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

console.log("내가 먼저 출력");

// 내가 먼저 출력
// readFile 읽어오기 작업은 비동기지롱
```

```plaintext [index.txt]
readFile 읽어오기 작업은 비동기지롱
```

:::

- 첫 번째 인자: 경로(문자열)
- 두 번째 인자: 인코딩 형식 (데이터를 읽는 데 사용할 형식)
- 세 번째 인자: 콜백 함수 (에러/데이터 처리)
- "내가 먼저 출력"이 먼저 실행되는 것으로, 비동기 방식임을 확인할 수 있다.

<br>

## readFileSync() <badge type="tip" text="읽기-동기"></badge>

::: code-group

```js [동기 readFileSync]
const fs = require("fs");
const data = fs.readFileSync("./index.txt", "utf8");

console.log(data);
console.log("내가 나중에 출력");
// readFileSync 읽어오기 작업은 동기지롱
// 내가 나중에 출력
```

```plaintext [index.txt]
readFileSync 읽어오기 작업은 동기지롱
```

:::

- 파일 크기가 작을 때는 무방하지만, 작업이 무거우면 성능에 지장을 줄 수 있으므로 지양하는 것이 좋다.
- 콜백이 필요 없어 코드가 간단하다.

<br>

## writeFile() · writeFileSync()

::: code-group

```js [writeFile() · writeFileSync()]
const fs = require("fs");

// 동기
fs.writeFileSync("./out-sync.txt", "안녕 난 writeFileSync.");
console.log("동기왔어요");

// 비동기
fs.writeFile("./out-async.txt", "안녕 난 writeFile.", (err) => {
  if (err) throw err;
  console.log("비동기왔어요");
});

console.log("나는 깍뚜기");

// 동기왔어요
// 나는 깍뚜기
// 비동기왔어요
```

```plaintext [out-sync.txt]
안녕 난 writeFileSync.
```

```plaintext [out-async.txt]
안녕 난 writeFile.
```

:::

- `writeFileSync`: 동기 실행 + 콜백 없음
- `writeFile`: 파일 생성/덮어쓰기 + 콜백
- 파일 경로와 저장될 데이터를 인자로 넣어 실행하면 파일이 만들어진다.
- 기존 파일이 있으면 덮어쓴다.

<br>

## appendFile() · appendFileSync()

파일에 데이터를 이어 붙이는 함수

::: code-group

```js [ appendFile() · appendFileSync()]
const fs = require("fs");

// 동기
fs.appendFileSync("./out-sync.txt", "\n안녕 난 appendFileSync.");
console.log("동기라네");

// 비동기
fs.appendFile("./out-async.txt", "\n안녕 난 appendFile.", (err) => {
  if (err) throw err;
  console.log("비동기라네");
});

console.log("나는 깍뚜기");

// 동기라네
// 나는 깍뚜기
// 비동기라네
```

```plaintext [out-sync.txt]
안녕 난 writeFileSync.
안녕 난 appendFileSync.
```

```plaintext [out-async.txt]
안녕 난 writeFile.
안녕 난 appendFile.
```

:::

- 기존 파일에 데이터를 이어 붙이는 함수

<br>

## existsSync() · access()

특정 파일의 존재 유무를 확인하는 기능

::: code-group

```js [existsSync() · access()]
const fs = require("fs");

// 동기
if (fs.existsSync("out-sync.txt")) {
  console.log("동기", "파일이 있어용.");
} else {
  console.log("동기", "파일이 없어용.");
}

// 비동기
fs.access("out-async.txt", fs.constants.F_OK, (err) => {
  console.log("비동기", err ? "파일이 없어용." : "파일이 있어용.");
});

// 동기 파일이 있어용
// 비동기 파일이 있어용
```

```plaintext [out-sync.txt]
안녕 난 writeFileSync.
안녕 난 appendFileSync.
```

```plaintext [out-async.txt]
안녕 난 writeFile.
안녕 난 appendFile.
```

:::

- `existsSync`: 동기, true/false 반환
- `access`: 비동기, 원래 파일이나 디렉토리에 특정 권한이 있는지 확인하는 함수
  - 두 번째 인자: `fs.constants.F_OK`를 넣어주면 파일 존재 유무만 확인한다.
  - 콜백의 `err` 여부로 판단한다.

<br>

::: info ⚠️ exists()

`fs.exists()` 함수는 오류 처리 부족으로 Deprecated 되었다고 한다.

```js
const fs = require("fs");

// ⚠️ Deprecated
fs.exists("out-async.txt", (exists) => {
  console.log(exists ? "File exists." : "File does not exist.");
});
```

:::

<br>

## unlinkSync() · unlink()

파일 삭제

::: code-group

```js [unlinkSync() · unlink()]
const fs = require("fs");

// 동기
fs.unlinkSync("out-sync.txt");
console.log("동기 삭제해따잉");

// 비동기
fs.unlink("out-async.txt", (err) => {
  if (err) {
    console.error("Error deleting file:", err);
    return;
  }
  console.log("비동기 삭제해따잉");
});

// 동기 삭제해따잉
// 비동기 삭제해따잉
```

```plaintext [out-sync.txt]
[삭제 전 내용 예시]
안녕 난 writeFileSync.
안녕 난 appendFileSync.
```

```plaintext [out-async.txt]
[삭제 전 내용 예시]
안녕 난 writeFile.
안녕 난 appendFile.
```

:::

- 파일 삭제
- 대상이 없거나 권한이 없으면 오류 발생한다.

<br>

# path 모듈

## 전역변수: \_\_dirname · \_\_filename

CommonJS에서만 사용 가능한, 실행중인 문서의 경로 정보 전역 변수

```js [index.js]
console.log(__dirname);
console.log(__filename);
```

- `__dirname`: 실행 중인 디렉토리 경로
- `__filename`: 실행 파일 전체 경로

<br>

## join() · resolve()

```js [index.js]
const path = require("path");

console.log(path.join("files", "hello.txt"));
console.log(path.join("./files", "utils", "../hello.txt"));
// 바깥 폴더를 뜻하는 상대 경로가 있으므로 utils는 경로에 포함되지 않는다.
console.log(path.join(__dirname, "files", "hello.txt"));
console.log(path.resolve("files/hello.txt"));

// files/hello.txt
// files/hello.txt
// /Users/binny/nodejs/files/hello.txt
// (/Users/binny/nodejs)/files/hello.txt → (CWD=현재 작업 디렉토리)에 따라 달라진다.
```

- `join()`: 경로 조각을 합쳐 정규화된 경로 문자열 반환
- `resolve()`: 현재 작업 디렉토리 기준으로 절대 경로 생성
- 참고: `path.join("./files","utils","../hello.txt")`에서 utils가 빠지는 이유는 `..`가 한 단계 상위를 가리키기 때문(정규화)

<br>

## basename() · dirname() · extname()

경로를 해석해 부분적인 정보를 반환하는 함수

```js
const path = require("path");
const filePath = path.join(__dirname, "files", "hello.txt");

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));

// hello.txt
// .../files
// .txt
```

- `basename()`: 해당 경로의 마지막에 있는 파일이나 폴더의 이름을 추출해 반환
- `dirname()`: 디렉토리 경로 반환
- `extname()`: 파일의 확장자를 추출해 반환

<br>

## parse() · format()

경로를 객체로 다룰 때

```js
const path = require("path");

const filePath = path.join(__dirname, "files", "hello.txt");
const parsed = path.parse(filePath);

console.log(parsed);
console.log(path.format(parsed));

// {
//   root: '/'
//   dir: '/Users/binny/nodejs/files'
//   base: 'hello.txt'
//   ext: '.txt'
//   name: 'hello'
// }
//  /Users/binny/nodejs/files/hello.txt
```

- `parse()`: 문자열을 토대로 해당 경로의 정보를 담은 객체를 반환
- `format()`: parse 함수로 만든 객체를 format 함수에 인자로 넣으면 해당 경로의 문자열로 조합해서 반환한다.

<br>

## relative()

두 경로 간의 관계를 나타내는 함수

```js
const path = require("path");

const from = "/Users/binny/nodejs/hello.txt";
const to = "/Users/binny/javascript/es6";

console.log(path.relative(from, to));
// ../../javascript/es6
```

- `from`에서 `to`로 가는 상대 경로 계산
- 두 경로가 같은 드라이브에 위치해야 하고, 같은 기준점에서 시작해야 `relative()` 함수를 사용할 수 있다.

<br>
<Comment/>
