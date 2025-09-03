# ⏳ Callback Function

콜백 함수란, 내가 직접 호출하는 것이 아닌 다른 함수(호출자)에게 제어권을 위임해 두었다가 특정 시점에 호출되는 함수를 의미한다.

## 제어권 위임의 3가지 요소

콜백을 넘겨주면, 호출자가 다음 세 가지를 결정한다.

- 실행 시점(언제 실행할지)
- 매개변수(무엇을 넘길지)
- this(어떤 this를 바인딩할지)

### 1. 실행 시점

```js
// setInterval() 메서드 구문
setInterval(callback, milliseconds);
```

- 인자1: callback
- 인자2: milliseconds
- setInterval이 ms의 주기마다 콜백 함수를 실행한다. 즉, 제어권을 setInterval에게 넘겨준 것이다.

```js
setInterval(function () {
  console.log("1초마다 실행이지롱");
}, 1000);

// 함수를 변수로 분리해 작성ver
var cb = function () {
  console.log("1초마다 실행이지롱");
};

setInterval(cb, 1000);
```

- setInterval 주기함수를 호출하면 인자를 콜백함수, 주기(ms)를 넘겨주게 된다.
- 즉, 실행 시점은 호출자가 관리한다.

### 2. 매개변수

```js
// forEach() 메서드 구문
forEach(callback[, thisArg]);
```

- 콜백 함수의 매개변수는 호출자(forEach)가 정해둔 규칙을 따른다.
- 인자1: callback
  - callback의 매개변수
    - currentValue: 배열에서 현재 처리 중인 요소
    - index: 배열에서 현재 처리 중인 요소의 인덱스
    - array: forEach()가 적용되고 있는 배열
- 인자2: this로 인식할 대상(생략 가능)

```js
var arr = [1, 2, 3, 4, 5];
var entries = [];

arr.forEach(
  function (value, index) {
    entries.push([index, value, this[index]]);
  },
  [10, 20, 30, 40, 50]
);

console.log(entries);
// [ [0, 1, 10], [1, 2, 20], [2, 3, 30], [3, 4, 40], [4, 5, 50] ]
```

- forEach는 (value, index, array) 순으로 인자를 넘겨준다.
  개발자는 순서를 바꿀 수 없고 반드시 이 규칙을 따라야 한다.
- 즉, 내가 제어권을 넘겨주고자 하는 대상의 규칙에 따라야만 동작을 제대로 할 수 있다. 그런 의미에서 제어권을 넘긴다고 한다.

### 3. this

```js
// addEventListener() 메서드 구문

// ECMAScript
addEventListener(type, callback, options);

// MDN
addEventListener(type, listener[, options]);
addEventListener(type, listener[, useCapture]);
```

- 인자1: type
  - 이벤트 유형을 나타내는 문자열 (예: click, mousemove, keyup, dragstart, scroll..)
- 인자2: callback
  - 단일 매개변수를 받는 함수
  - 이 매개변수에는 Event 기반 객체(예: MouseEvent, PointrEvent, KeyboardEvent)가 전달된다.
  - 반환값은 없음
  - 실행 시 this는 이벤트가 바인된 대상 (event.currentTarget)
- 인자3: options
  - 다양한 옵션들(capture, once, passive)을 담은 객체
  - useCapture라는 boolean 값

즉, addEventListner는 이벤트 객체를 콜백의 인자로 넘겨주고, this는 currentTarget으로 바인딩된다.

```js
document.body.innerHTML = '<div id="a">abc</div>';

function cbFunc(x) {
  console.log(this, x);
}

document.getElementById("a").addEventListener("click", cbFunc);
// <div id="a">abc</div>
// PointerEvent {...}
```

- this는 이벤트가 바인딩된 요소 `<div id="a">abc</div>`
- 콜백 함수의 매개변수 `x`는, 실제 클릭이 발생했을 때 브라우저가 이벤트 객체 `PointerEvent`를 인자로 전달하여 x에 담긴다.
- 즉, 호출자가 this와 인자를 어떤 규칙으로 넘길지 미리 정해둔 것을 따른다.

## 콜백함수의 특징

- 다른 함수(A)의 인자로 콜백함수(B)를 전달하면, A가 B의 제어권을 갖는다.
- 특별한 요청이 없는 한 A의 내부 규칙에 따라 호출된다.
  - 언제 실행할지, 어떤 인자를 지정할지, this는 무엇을 바인딩할지

### 주의: 콜백은 함수

```js
var arr = [1, 2, 3, 4, 5];
var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    if (this.vals) {
      console.log(this.vals, v, i);
    } else {
      console.log(this, v, i);
    }
  },
};

obj.logValues(1, 2); // [1, 2, 3] 1 2
arr.forEach(obj.logValues);
// Window { ... } 1 0
// Window { ... } 2 1
// Window { ... } 3 2
// Window { ... } 4 3
// Window { ... } 5 4
```

- `obj.logValues(1, 2);`: 메서드 호출 → this = obj
- `arr.forEach(obj.logValues)`: → 콜백 전달 → this = 전역 객체
  즉, 콜백으러 넘길 땐 단순히 함수가 되므로, this 바인딩은 잃어버린다.

### 해결방법

```js
arr.forEach(obj.logValues.bind(obj)); // bind로 this 고정
arr.forEach(obj.logValues, obj); // thisArg로 전달
```

- 콜백은 단순한 함수로 취급되기 때문에, 메서드 this 바인딩이 유지되지 않는다.
- 필요 시 bind 또는 thisArg를 활용해야 한다.
