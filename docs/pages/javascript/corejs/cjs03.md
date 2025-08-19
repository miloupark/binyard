# this

this는 함수가 호출되는 방식에 따라 `참조하는 객체가 동적으로 결정`되는 키워드이다.  
즉, 함수가 `어떻게 호출`되었는지에 따라 this가 가리키는 대상이 달라진다.

- this는 실행 컨텍스트가 활성화될 때 바인딩된다.
- 실행 컨텍스트는 함수가 호출되는 순간에 생성되므로, this 역시 함수 호출 시점에 결정된다.

```plaintext {1}
this
├── 전역 공간: window (브라우저) / global (Node.js)
├── 함수 호출: window / global
│   └── 화살표 함수: 자신이 선언된 외부 컨텍스트의 this를 가리킴 (Lexical this)
├── 메서드 호출: 메서드를 호출한 객체 (메서드명 앞의 객체)
├── 콜백 함수 호출: 일반 함수와 동일 (함수 내부에서의 호출 방식에 따름)
└── 생성자 함수 호출: 새로 생성된 인스턴스 객체
```

- window와 global은 ECMAScript에서 정의한 객체가 아니다. 각 호스트 환경(브라우저, Node.js 등)에서 ECMAScript 사양에 따라 제공하는 전역 객체 구현체이다. 즉, 호스트 환경마다 구체적인 전역 객체의 내용은 달라진다.

<br>

## 01. 상황에 따라 달라지는 this

### 1-1. 전역 공간에서의 this

전역 컨텍스트를 생성하는 주체가 전역 객체이므로, 전역에서의 this는 전역 객체를 가리킨다.

- 브라우저 → `window`
- Node.js 환경 → `global`

```js {1,6}
// 브라우저 환경
console.log(this); // { alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(window); // { alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(this === window); // true

// Node.js 환경
console.log(this); // { process: { title: 'node', version: 'v10.13.0',... } }
console.log(global); // { process: { title: 'node', version: 'v10.13.0',... } }
console.log(this === global); // true
```

<br>

#### 전역 변수와 전역 객체 <badge type="tip" text="전역 공간에서의 특이한 성질"></badge>

전역 변수를 선언하면 자바스크립트 엔진은 이를 전역 객체의 프로퍼티로 등록한다.  
즉, 전역 객체에 `변수명: 값` 쌍을 추가하는 방식이다. 단, 선언 방식에 따라 차이가 있다.

#### 1. `var`로 선언한 전역 변수

```js
var a = 1;

console.log(a); // 1 (변수로 접근)
console.log(window.a); // 1 (전역 객체 프로퍼티로 접근)
console.log(global.a); // 1 (Node.js 환경)
console.log(this.a); // 1 (전역 공간 this === window)
```

::: details ⚙️ 내부 동작 예시

```js
window.a = 1; // 브라우저
global.a = 1; // Node.js
```

:::

- var 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티로 등록된다.
- 따라서 브라우저에서는 `a`와 `window.a`가 동일하게 동작한다.

<br>

::: info 같은 메모리 참조
전역 변수와 전역 객체 프로퍼티는 같은 공간을 참조한다.

```js
var a = 1;
window.b = 2;
console.log(a, window.a, this.a); // 1 1 1
console.log(b, window.b, this.b); // 2 2 2

window.a = 3;
b = 4;
console.log(a, window.a, this.a); // 3 3 3
console.log(b, window.b, this.b); // 4 4 4
```

- `a`, `window.a`, `b`, `window.b`는 같은 메모리를 공유한다.
- 따라서 어느 쪽을 수정해도 동시에 값이 바뀐다.

:::

::: info 삭제 가능 여부
전역 변수와 전역 객체 프로퍼티는 같아 보이지만, `삭제(delete) 가능 여부`에서 차이가 있다.

```js
var a = 1;
delete window.a; // false
console.log(a, window.a, this.a); // 1 1 1
```

- `var`로 선언한 전역 변수는, 전역 객체 프로퍼티지만 삭제 불가하다. (non-configurable)

```js
window.c = 3;
delete window.c; // true
console.log(c, window.c, this.c); // Uncaught ReferenceError: c is not defined
```

- 전역 객체(window)에 직접 추가한 프로퍼티는 일반 객체 프로퍼티라서 삭제 가능하다.

<br>

| 선언 방식                  | 전역 객체 프로퍼티 | 삭제 가능 여부 |
| -------------------------- | ------------------ | -------------- |
| `var` 전역 변수            | 등록               | 불가           |
| `window.x = ...` 직접 추가 | 등록               | 가능           |

:::

<br>

#### 2. 선언 없이 할당 (암묵적 전역)

```js
b = 20; // var, let, const 없이 할당
console.log(window.b); // 20
```

::: details ⚙️ 내부 동작 예시

```js
window.b = 20;
```

:::

- 자바스크립트 엔진이 자동으로 전역 객체 프로퍼티를 생성한다.
- 하지만 `strict mode`에서는 오류가 발생한다.

<br>

#### 3. let, const로 선언한 전역 변수

```js
let c = 30;
const d = 40;

console.log(window.c); // undefined
console.log(window.d); // undefined
```

- `let`, `const`로 선언한 전역 변수는 전역 객체 프로퍼티로 등록되지 않는다.
- 대신 전역 렉시컬 환경(Global Lexical Environment)에 저장된다.
- 따라서 전역에서 접근할 수는 있지만, `window`를 통해서는 접근 불가능하다.

<br>

### 1-2. 메서드로서 호출할 때 그 메서드 내부에서의 this

::: info 함수 vs 메서드 <badge type="tip" text="둘의 차이는 독립성"></badge>

함수 실행 방법

1. 함수로서 호출: 함수는 그 자체로 독립적인 기능 수행
2. 메서드로서 호출: 메서드는 자신을 호출한 대상 객체에 관한 동작 수행

```js:line-numbers
var func = function (x) {
  console.log(this, x);
};
func(1); // Window { ... }

var obj = {
  method: func,
};
obj.method(2); // { method: f } 2
```

- 함수로서 호출: 4번째 줄에서 this로 전역 객체 window 출력
- 메서드로서 호출: 9번째 줄에서 obj의 메서드 호출, this는 obj

즉, 변수에 담아 호출한 경우와 obj 객체의 프로퍼티에 할당해서 호출한 경우 this가 달라진다.

<br>

```js:line-numbers
var obj = {
  method: function (x) {
    console.log(this, x);
  },
};

obj.method(1); // { method: f } 1
obj["method"](2); // { method: f } 2
```

- 점 표시법이든 대괄호 표기법이든, 객체가 명시되어 있으면 메서드 호출이다.

:::

<br>

#### 메서드 내부에서의 this

```js:line-numbers
var obj = {
  methodA: function () {
    console.log(this);
  },
  inner: {
    methodB: function () {
      console.log(this);
    },
  },
};

obj.methodA(); // { methodA: f, inner: {...} }    ( === obj)
obj["methodA"](); // { methodA: f, inner: {...} } ( === obj)

obj.inner.methodB(); // { methodB: f }            ( === obj.inner)
obj.inner["methodB"](); // { methodB: f }         ( === obj.inner)
obj["inner"].methodB(); // { methodB: f }         ( === obj.inner)
obj["inner"]["methodB"](); // { methodB: f }      ( === obj.inner)
```

- this는 메서드를 호출한 주체 객체를 가리킨다.
- 즉, 호출 시점에 `.`또는 `[]` 앞에 있는 객체가 this가 된다.
- 12, 13번째 줄: `methodA`를 호출한 주체는 obj
- 15번째 줄: `methodB`를 호출한 주체는 obj.inner
- 16, 17, 18번째 줄: 모두 `obj.inner`를 통해 호출

<br>

### 1-3. 함수로서 호출할 때 그 함수 내부에서의 this

#### 함수 내부에서의 this

함수 호출 시, `this`는 바인딩되지 않는다. 따라서 실행 컨텍스트에서 `this`가 지정되지 않은 경우,

- 비엄격 모드에서는 `전역 객체`(window / global)를 가리킨다.
- 엄격 모드에서는 `undefined`

::: details ⚠️ 엄격 모드란?
코드 최상단이나 함수 내부에 `use strict;`라고 선언하면 해당 스코프에 엄격모드가 적용된다.  
자바스크립트의 관대한 규칙을 더 엄격하게 만들어 오류를 조기에 잡는 안전 장치이다.

1. 암묵적 전역 변수 선언 금지

```js
"use strict";
x = 10; // ReferenceError (var/let/const 없이 변수 생성 불가)
```

2. this 바인딩 변화
   일반 함수 호출 시 this가 전역 객체에 자동 바인딩되지 않고 `undefined`가 된다.

```js
function foo() {
  console.log(this);
}

foo();
// 비엄격 모드 → window (또는 global)
// 엄격 모드 → undefined
```

3. 예약어 사용 제한

```js
"use strict";
var eval = 10; // SyntaxError
var arguments = 5; // SyntaxError
```

4. 중복 매개변수 금지

```js
"use strict";
function sum(a, a, b) {
  // SyntaxError
  return a + b;
}
```

<br>

그래서 엄격모드 왜 쓰지..?

- 코드가 예측 가능하게 동작한다.
- 보안성 ↑ (전역 객체 오염 방지)
- 최신 자바스크립트 문법과 호환성 ↑ (ES6 이후 문법은 대부분 엄격 모드에 맞춰 설계됨)

:::

<br>

#### 메서드의 내부함수에서의 this

```js:line-numbers {7,12,16}
var obj1 = {
  outer: function () {
    console.log(this); // (1)
    var innerFunc = function () {
      console.log(this); // (2) (3)
    };
    innerFunc();

    var obj2 = {
      innerMethod: innerFunc,
    };
    obj2.innerMethod();
  },
};

obj1.outer();
```

- `(1)`: obj1.outer() 호출 시  
  메서드를 호출한 주체는 `obj1`, this === obj1
- `(2)`: innerFunc() 호출 시  
  단순 함수 호출(앞에 객체 없음), this === `전역 객체`(window/global)
- `(3)`: obj2.innerMethod() 호출 시  
  innerFunc가 obj2의 프로퍼티로 할당되어 메서드 호출이 됨, this === `obj2`

this 바인딩은 “함수가 어디에서 정의되었는가”가 아니라 “어떻게 호출되었는가(점이나 대괄호 앞에 어떤 객체가 있는지)”에 따라 결정된다.

<br>

#### 메서드의 내부 함수에서의 this를 우회하는 법

```js:line-numbers {3,5,11}
var obj = {
  outer: function () {
    console.log(this); // (1) { outer: f }
    var innerFunc1 = function () {
      console.log(this); // (2) Window { ... }
    };
    innerFunc1();

    var self = this; // this는 outer를 호출한 주체 obj
    var innerFunc2 = function () {
      console.log(self); // (3) { outer: f }
    };
    innerFunc2();
  },
};

obj.outer();
```

- `(1)`: obj.outer() 호출  
  호출 주체는 `obj`, 따라서 this === obj
- `(2)`: innerFunc1() 호출  
  단순 함수 호출(앞에 객체 없음), 따라서 this === 전역 객체(window/global)
- `(3)`: innerFunc2() 호출  
  `var self = this;` 실행 시, this는 `obj.outer()`의 호출 주체인 `obj`.  
  따라서 `self` 변수는 `obj`를 그대로 참조하게 된다.  
  함수 내부에서 self를 참조하므로 계속 obj를 가리킨다.

내부 함수는 고유한 `this`를 갖지 않기 때문에, 외부 메서드(outer)의 this(obj)를 변수(self)에 저장해 두면, 내부 함수에서도 동일한 객체(obj)를 참조할 수 있다.

<br>

#### this를 바인딩하지 않는 함수 (화살표 함수)

```js:line-numbers
var obj = {
  outer: function () {
    console.log(this); // (1) { outer: f }
    var innerFunc = () => {
      console.log(this); // (2) { outer: f }
    };
    innerFunc();
  },
};
obj.outer();
```

- `(1)`: obj.outer() 호출  
  호출 주체는 `obj`, 따라서 this === obj
- `(2)`: innerFunc() 호출  
  화살표 함수는 자신만의 this를 가지지 않고, 선언 당시의 스코프(this)를 그대로 상속받는다.  
  따라서 outer 함수의 this인 obj를 그대로 사용, this === obj

화살표 함수는 this를 바인딩하지 않는다. 즉, 호출 방식과 상관없이 자신이 정의된 위치의 상위 스코프의 this를 그대로 사용한다. 그래서 innerFunc()안에서 this를 출력하면 전역 객체가 아니라, outer의 this(obj)가 출력된다.

<br>

### 1-4. 콜백 함수 호출 시 그 함수 내부에서의 this

```js:line-numbers
setTimeout(function () {
  console.log(this);
}, 300); // (1)

[1, 2, 3, 4, 5].forEach(function (x) {
  // (2)
  console.log(this, x);
});

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector("#a").addEventListener("click", function (e) {
  // (3)
  console.log(this, e);
});
```

- `(1)`: setTimeout의 콜백 함수  
  콜백이 단순 함수 형태로 실행됨, 따라서 this === 전역 객체(window/global)
- `(2)`: forEach의 콜백 함수  
  콜백 함수가 thisArg를 지정하지 않았으므로, this === 전역 객체(window/global)

  ```js:line-numbers
  [1, 2, 3].forEach(
    function (x) {
      console.log(this, x); // this → window/global
    },
    { foo: "bar" }
  );
  // 두 번째 인자로 thisArg를 주면 → this === { foo: "bar" }
  ```

- `(3)`: 이벤트 리스너의 콜백 함수  
  이벤트 리스너로 등록된 함수는 이벤트를 바인딩한 DOM 요소가 this가 된다.  
  여기서는 버튼 요소(#a)가 this가 된다. 따라서 `this === <button id="a">클릭</button>`

콜백 함수의 this는 호출 주체에 따라 달라진다. 타이머/배열 메서드 콜백은 전역 객체를, 이벤트 리스너의 콜백은 이벤트를 바인딩한 DOM 요소를 가리킨다.

<br>

### 1-5. 생성자 함수 내부에서의 this

```js:line-numbers
var Cat = function (name, age) {
  this.bark = "야옹";
  this.name = name;
  this.age = age;
};
var choco = new Cat("초코", 7);
var nabi = new Cat("나비", 5);

console.log(choco, nabi);

/* 결과
Cat { bark: '야옹', name: '초코', age: 7 }
Cat { bark: '야옹', name: '나비', age: 5 }
*/
```

- (1): `var Cat = function (name, age) { ... }`  
  new 키워드와 함께 호출되면 생성자 함수로 동작한다.
- (2): `new Cat("초코", 7)`  
  new 키워드 사용 시 내부적으로,
  - `{}` 빈 객체가 새로 만들어진다.
  - 그 객체의 숨은 프로퍼티 `[[Prototype]]`이 `Cat.prototype`을 참조하도록 연결된다.
  - 함수 본문이 실행되는데, 이때 함수 안의 this는 `새로 만들어진 객체`를 가리킨다.
  - 함수에서 명시적으로 객체를 return하지 않으면 자동으로 `this(= 새 객체)`가 반환된다.

생성자 함수 내부의 this는 새로 생성되는 인스턴스 객체를 가리킨다.

<br>

## 02. 명시적으로 this를 바인딩하는 방법

### 2-1. call 메서드

```js
var func = function (a, b, c) {
  console.log(this, a, b, c);
};

func(1, 2, 3); // Window{ ... } 1 2 3
func.call({ x: 1 }, 4, 5, 6); // { x: 1 } 4 5 6
```

```js
var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

obj.method(2, 3); // 1 2 3
obj.method.call({ a: 4 }, 5, 6); // 4 5 6
```

<br>

### 2-2. appply 메서드

```js
var func = function (a, b, c) {
  console.log(this, a, b, c);
};
func.apply({ x: 1 }, [4, 5, 6]); // { x: 1 } 4 5 6

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};
obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6
```

<br>

### 2-3. call / appply 메서드의 활용

#### 유사배열객체에 배열 메서드를 적용

```js
var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
Array.prototype.push.call(obj, "d");
console.log(obj); // { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4 }

var arr = Array.prototype.slice.call(obj);
console.log(arr); // [ 'a', 'b', 'c', 'd' ]
```

```js
function a() {
  var argv = Array.prototype.slice.call(arguments);
  argv.forEach(function (arg) {
    console.log(arg);
  });
}
a(1, 2, 3);

document.body.innerHTML = "<div>a</div><div>b</div><div>c</div>";
var nodeList = document.querySelectorAll("div");
var nodeArr = Array.prototype.slice.call(nodeList);
nodeArr.forEach(function (node) {
  console.log(node);
});
```

```js
var str = "abc def";

Array.prototype.push.call(str, ", pushed string");
// Error: Cannot assign to read only property 'length' of object [object String]

Array.prototype.concat.call(str, "string"); // [String {"abc def"}, "string"]

Array.prototype.every.call(str, function (char) {
  return char !== " ";
}); // false

Array.prototype.some.call(str, function (char) {
  return char === " ";
}); // true

var newArr = Array.prototype.map.call(str, function (char) {
  return char + "!";
});
console.log(newArr); // ['a!', 'b!', 'c!', ' !', 'd!', 'e!', 'f!']

var newStr = Array.prototype.reduce.apply(str, [
  function (string, char, i) {
    return string + char + i;
  },
  "",
]);
console.log(newStr); // "a0b1c2 3d4e5f6"
```

```js
var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
var arr = Array.from(obj);
console.log(arr); // ['a', 'b', 'c']
```

#### 생성자 내부에서 다른 생성자를 호출

```js
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}
function Student(name, gender, school) {
  Person.call(this, name, gender);
  this.school = school;
}
function Employee(name, gender, company) {
  Person.apply(this, [name, gender]);
  this.company = company;
}
var by = new Student("보영", "female", "단국대");
var jn = new Employee("재난", "male", "구골");
```

#### 여러 인수를 묶어 하나의 배열로 전달하고 싶읋 때 - apply 활용

```js
var numbers = [10, 20, 3, 16, 45];
var max = (min = numbers[0]);
numbers.forEach(function (number) {
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
});
console.log(max, min); // 45 3
```

```js
var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min); // 45 3
```

```js
const numbers = [10, 20, 3, 16, 45];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max, min); // 45 3
```

<br>

### 2-4. bind 메서드

```js
var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
func(1, 2, 3, 4); // Window{ ... } 1 2 3 4

var bindFunc1 = func.bind({ x: 1 });
bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8

var bindFunc2 = func.bind({ x: 1 }, 4, 5);
bindFunc2(6, 7); // { x: 1 } 4 5 6 7
bindFunc2(8, 9); // { x: 1 } 4 5 8 9
```

#### name 프로퍼티

```js
var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
var bindFunc = func.bind({ x: 1 }, 4, 5);
console.log(func.name); // func
console.log(bindFunc.name); // bound func
```

#### 상위 컨텍스트의 this를 내부함수나 콜백 함수에 전달하기

```js
var obj = {
  outer: function () {
    console.log(this);
    var innerFunc = function () {
      console.log(this);
    };
    innerFunc.call(this);
  },
};
obj.outer();
```

```js
var obj = {
  outer: function () {
    console.log(this);
    var innerFunc = function () {
      console.log(this);
    }.bind(this);
    innerFunc();
  },
};
obj.outer();
```

```js
var obj = {
  logThis: function () {
    console.log(this);
  },
  logThisLater1: function () {
    setTimeout(this.logThis, 500);
  },
  logThisLater2: function () {
    setTimeout(this.logThis.bind(this), 1000);
  },
};
obj.logThisLater1(); // Window { ... }
obj.logThisLater2(); // obj { logThis: f, ... }
```

<br>

### 2-5. 화살표 함수의 예외사항

```js
var obj = {
  outer: function () {
    console.log(this);
    var innerFunc = () => {
      console.log(this);
    };
    innerFunc();
  },
};
obj.outer();
```

<br>

### 2-6. 별도의 인자로 this를 받는 경우 (콜백 함수 내에서의 this)

```js
var report = {
  sum: 0,
  count: 0,
  add: function () {
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function (entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  },
  average: function () {
    return this.sum / this.count;
  },
};
report.add(60, 85, 95);
console.log(report.sum, report.count, report.average()); // 240 3 80
```

```js
Array.prototype.forEach(callback[, thisArg])
Array.prototype.map(callback[, thisArg])
Array.prototype.filter(callback[, thisArg])
Array.prototype.some(callback[, thisArg])
Array.prototype.every(callback[, thisArg])
Array.prototype.find(callback[, thisArg])
Array.prototype.findIndex(callback[, thisArg])
Array.prototype.flatMap(callback[, thisArg])
Array.prototype.from(arrayLike[, callback[, thisArg]])
Set.prototype.forEach(callback[, thisArg])
Map.prototype.forEach(callback[, thisArg])
```

<br>

## 콜백함수에서의 this binding

콜백 함수도 일반 함수처럼 호출되므로, 기본적으로 this는 전역 객체 또는 undefined(strict 모드)이다.
하지만, this를 명시적으로 바인딩할 수 있는 메서드가 있다:

```js
.call(thisArg, ...args); // 즉시 호출하면서 this 지정
.apply(thisArg, [args]); // 즉시 호출, 인자를 배열로 전달
.bind(thisArg); // 새로운 함수 반환, this를 영구 바인딩
```
