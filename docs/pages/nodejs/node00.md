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

<br>

### REPL (Read-Eval-Print-Loop)

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

<br>

## 모듈 시스템

Node.js에는 두 가지 모듈 시스템이 있다.

### CommonJS modules (CJS)

- Node.js 초창기부터 기본으로 사용된 방식 (`require` `module.exports`)

### ES Modules (ESM)

- 브라우저 표준 모듈 시스템 (`import`, `export`)
- 점차 Node.js의 기본으로 자리잡는 추세라고 한다.

<br>
<Comment/>
