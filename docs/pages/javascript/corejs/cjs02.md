# 실행 컨텍스트 (Execution context)

실행 컨텍스트란, 자바스크립트 코드가 실행되기 위해 필요한 환경 정보를 담고 있는 객체이다.
실행 순간의 배경(스냅샷처럼 기록된 환경)이라고 볼 수 있다.

실행 컨텍스트는 자바스크립트 엔진이 코드를 실행할 수 있도록 준비하는 내부 환경이며, 변수, 스코프, this, 실행 순서를 결정짓는 핵심 개념이다.

- 같은 실행 컨텍스트 내에서는 동일한 환경을 공유한다.
- 컨텍스트가 전환되면 새로운 실행 환경이 구성된다.

<br>

## 실행 컨텍스트가 생성되는 시점

자바스크립트에서 실행 컨텍스트가 생성되는 경우:

- `전역 공간 (Global)`
- `함수 (Function)`
- `모듈 (Module)`
- `eval` (사용 비권장)

조건문이나 반복문 등 블록문은 블록 스코프는 형성하지만, 별도의 실행 컨텍스트를 생성하지 않는다.

<br>

## 실행 컨텍스트 구성 요소

실행 컨텍스트는 아래와 같은 세 가지 구성 요소로 이루어진다.

```less {2,6,10}
Execution Context
├── Variable Environment: 현재 환경과 관련된 식별자 정보 수집, 변화 반영 X
│   ├── Environment Record(snapshot)
│   └── Outer Environment Reference(snapshot)
│
├── Lexical Environment: 현재 환경과 관련된 각 식별자의 데이터 추적, 변화 반영 O
│   ├── Environment Record: 현재 컨텍스트 내부의 식발자 정보
│   └── Outer Environment Reference: 현재 문맥에 관련 있는 외부 식별자 정보
│
└── This Binding: 해당 컨텍스트의 this 값

```

<br>

### Variable Environment

LexicalEnvironment와 거의 동일하지만, 변수 선언 당시의 스냅샷처럼 초기 선언 상태를 저장하는 데 집중한다.
과거엔 var 중심의 선언을 담당했지만, ES6 이후 대부분의 실시간 추적은 LexicalEnvironment가 담당한다.

- VariableEnvironment는 초기 상태 기록
- LexicalEnvironment는 실행 중 상태 반영

<br>

### Lexical Environment

Lexical Environment는 실행 중인 코드의 스코프 정보와 외부 스코프 참조를 포함하는 객체이다.
현재 컨텍스트에서 선언된 식별자 정보(변수, 함수 등)를 기록하고, 필요시 바깥 스코프도 참조할 수 있게 한다.

#### `Environment Record`

Environment Record는 현재 실행 중인 컨텍스트 내부에서 선언된 변수와 함수 정보를 저장하는 공간이다.
실행 컨텍스트가 생성되는 시점에 이 정보를 먼저 수집하는데, 이 과정을 흔히 호이스팅(Hoisting)이라고 부른다.

호이스팅은 실제 코드가 끌어올려지는 것이 아니라, 식별자 정보가 미리 등록되는 현상을 설명하기 위한 개념적인 표현이다.

::: info Hoisting ?
호이스팅은 실행 컨텍스트 내부의 변수, 함수 선언을 코드 실행 전에 미리 등록하는 것처럼 보이는 현상이다.
var 변수는 선언만 등록되고 초기값은 undefined, 함수 선언문은 전체 함수 객체가 등록된다.
:::

::: code-group

```js [Environment Record 예시]
console.log(a());
console.log(b());
console.log(C());

function a() {
  return "a";
}

var b = function bb() {
  return "bb";
};

var c = function () {
  return "c";
};
```

```js [이해하기]
// 이해를 쉽게 하기 위한 허구의 개념
function a() {
  return "a";
}
var b;
var c;

console.log(a());
console.log(b());
console.log(C());

b = function bb() {
  return "bb";
};

c = function () {
  return "c";
};
```

:::

```js
// Environment Record
{
  function a() {...}
  var b;
  var c;
}
```

위로 끌어올려진 내용 전체가 바로 Environment Record이다. 실행 컨텍스트가 처음 생성되는 순간에 Environment Record에 이 정보들을 수집하는 것이다. 현재 컨텍스트에서 선언되어 있는 식별자들이 무엇이 있는지에 대한 정보를 코드 순서대로 수집하다보니 호이스팅한 거랑 똑같은 개념이 되어버린다.
<br>

#### `Outer Environment Reference`

현재 컨텍스트에 없는 변수나 함수는 `Outer Environment Reference`를 통해 바깥 LexicalEnvironment에서 찾는다.
이 구조가 스코프 체인(Scope Chain)을 형성하며, 바깥에서부터 안쪽으로 탐색하는 방식이다.

가까운 스코프에서 먼저 찾고, 찾으면 더 이상 탐색하지 않는다. 이처럼 가까운 선언이 우선하는 현상을 Shadowing이라고 한다.

<br>

## 스택 (Stack)

스택은 데이터를 순서대로 쌓고 꺼내는 자료구조이다. 가장 나중에 넣은 데이터가 가장 먼저 나오는 구조이기 때문에 LIFO(Last in, First Out 후입선출) 구조라고 부른다.

```js
push(); // 쌓기
pop(); // 꺼내기
```

### 콜 스택 (Call Stack)

자바스크립트 엔진은 함수 실행 흐름을 추적하고 제어하기 위해 실행 컨텍스트를 스택 구조로 관리한다. 이를 콜 스택이라고 한다.
가장 나중에 호출된 함수의 컨텍스트가 스택의 가장 위에 위치하며, 함수가 종료되면 pop되어 스택에서 제거된다.

#### 콜 스택 흐름

```less
1. Global Execution Context → push
2. outer() → Execution Context 생성 → push
3. inner() → Execution Context 생성 → push
4. inner() 종료 → pop
5. outer() 종료 → pop

```
