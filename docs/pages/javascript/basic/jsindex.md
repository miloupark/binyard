## 배열 내장함수 (Array Methods)

### 배열의 요소들을 순회할 수 있는 메서드

#### <code>for문</code>을 사용해서 배열의 모든 요소에 접근

```js
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 1
// 2
// 3
// 4
// 5
```

<br>

#### <code>forEach</code> 내장함수를 사용해 배열 요소에 접근

```js
let arr = [1, 2, 3, 4, 5];

arr.forEach((item) => {
  console.log(item);
});

// 콜백 함수의 매개변수 item은 arr배열의 각 요소를 가리키기 때문에
// forEach 메서드를 사용하여 단순하게 코드를 작성할 수 있다.

// 1
// 2
// 3
// 4
// 5
```

- <code>forEach</code>는 배열 전용 메서드 (배열 객체 Array.prototype에 정의된 메서드)이기 때문에 , 배열 이름 뒤에 점(.)을 찍고 사용한다.

- <code>forEach</code>메서드는 배열의 각 요소에 대해 실행할 함수를 매개변수로 받는다. 즉, 함수를 인자로 전달하여 반복 작업을 수행할 수 있다. <code>for문</code>을 더 간결하게 대체할 수 있다. 단, <code>break</code>, <code>continue</code>를 사용할 수 없다는 점은 주의해야 한다.

```js
array.forEach((element, index, array) => {
  // 반복 실행할 코드
});
```

- <code>forEach</code>메서드에 전달하는 콜백 함수는 최대 3개의 매개변수를 받을 수 있다. 이 매개변수들은 각각 현재 요소의 값, 해당 요소의 인덱스, 원본 배열을 의미하며 필요한 것만 골라서 사용할 수 있다.

<br>

```js
let arr = [1, 2, 3, 4, 5];

arr.forEach((item, idx) => {
  console.log(`${idx}번째 요소는 ${item}입니다.`);
});

// 0번째 요소는 1입니다.
// 1번째 요소는 2입니다.
// 2번째 요소는 3입니다.
// 3번째 요소는 4입니다.
// 4번째 요소는 5입니다.
```

- 콜백함수의 두 번째 매개변수는 배열 요소의 인덱스를 나타낸다.
- <code>idx</code> 인덱스 매개변수는 선택적인 매개변수(함수가 받을 수는 있지만, 반드시 전달하지 않아도 되는 매개변수)로 첫 번째 매개변수의 옆에 두 번째 매개변수로 작성

<br>

```js
let arr = [1, 2, 3, 4, 5];

arr.forEach((item, idx, array) => {
  console.log(`${idx}번째 요소는 ${item}입니다.`);
  console.log(array);
});

// 0번째 요소는 1입니다.
// [1, 2, 3, 4, 5]
// 1번째 요소는 2입니다.
// [1, 2, 3, 4, 5]
// 2번째 요소는 3입니다.
// [1, 2, 3, 4, 5]
// 3번째 요소는 4입니다.
// [1, 2, 3, 4, 5]
// 4번째 요소는 5입니다.
// [1, 2, 3, 4, 5]
```

- 콜백함수의 세 번째 매개변수는 배열 요소의 수만큼 동일한 배열을 출력하는 매개변수.

<br>

#### <code>map</code> 내장함수

```js
let arr = [1, 2, 3, 4, 5];

let newArray = [];

for (let i = 0; i < arr.length; i++) {
  newArray.push(arr[i] * 10);
}

console.log(newArray);

//[10, 20, 30, 40, 50]
```

- 위 코드는 배열의 모든 요소에 10을 곱한 값을 새로운 배열에 저장한다. 이처럼 배열을 변형하는 작업은<code>map</code> 메서드를 사용하면 짧고 직관적인 코드로 구현할 수 있다.

<br>

```js
let arr = [1, 2, 3, 4, 5];

let newArray = arr.map((element) => {
  return element * 10;
});

console.log(newArray);

//[10, 20, 30, 40, 50]
```

- <code>map</code>은 배열의 모든 요소를 일정한 방식으로 변환할 때 유용한 메서드
- 콜백함수의 매개변수인 <code>element</code>는 arr 배열의 각 요소 값을 의미
- <code>map</code> 메서드는 원본 배열은 변경하지 않고, 새로운 배열을 반환함

```js
array.map((element, index, array) => {
  // 반환값
});
```

- <code>map</code> 메서드는 최대 3개의 매개변수를 콜백 함수에 전달할 수 있다.
- 현재 요소의 값, 현재 요소의 인덱스, 현재 실행중인 원본 배열

<br>

### 배열에서 특정 요소를 찾는 메서드

#### <code>at</code>

```js
let colors = ["green", "blue", "purple"];
console.log(colors[2]); // purple
```

- 배열에서 특정 위치의 값을 가져올 때 인덱스 번호를 이용한 대괄호 표기법 <code>[]</code>
- <code>at</code> 메서드를 사용하면 더 유연하게 특정 요소를 가져올 수 있다.

```js
let colors = ["green", "blue", "purple"];
console.log(colors.at(1)); // blue
console.log(colors.at(-1)); // purple
console.log(colors.at(-2)); // blue
```

- <code>at</code> 메서드를 활용하면 배열의 맨 마지막에 위치한 값을 불러올 수 있다.
- 정수형 인덱스를 인자로 받고 음수 인덱스도 지원하여, 배열의 뒤쪽에서부터 요소를 쉽게 가져올 수 있다.

<br>

#### <code>includes</code> 메서드

```js
array.includes(searchElement, fromIndex);
```

- <code>includes</code>는 배열에 특정 요소가 포함되어 있는지 확인하고, 결과를 <code>boolean</code> 값으로 반환한다.
- <code>includes</code>는 최대 2개의 매개변수를 받음
- searchElement: 포함되어 있는지 찾고 싶은 값(필수)
- fromIndex: 검색을 시작할 인덱스(선택)

<br>

```js
let colors = ["green", "blue", "purple"];
console.log(colors.includes("blue")); // true
console.log(colors.includes("black")); // false
```

- 배열에 해당 값이 있으면 true, 없으면 false를 반환

<br>

```js
let colors = ["green", "blue", "purple"];
console.log(colors.includes("green", 1)); // false
// 인덱스 1부터 검색, green은 인덱스 0이라 무시됨
console.log(colors.includes("purple", 1)); // true
```

- 두 번째 매개변수를 사용하면 배열의 앞쪽 일부를 건너뛰고 검색할 수 있다.

<br>

#### <code>indexOf</code> 메서드

```js
array.indexOf(searchElement, fromIndex);
```

- 배열에서 지정한 값이 처음으로 나타내는 위치(인덱스)를 반환하는 함수. 만약 배열에 해당 값이 없으면 -1을 반환함
- <code>indexOf</code>는 문자열, 숫자 등 기본 자료형 값만 찾을 수 있고, 객체나 배열처럼 참조형 값은 인덱스를 찾지 못한다.
  이는 내부적으로 <code>===</code>엄격한 비교를 사용하기 때문이며, 내용이 같아도 참조가 다르면 -1을 반환한다.
- <code>indexOf</code>는 최대 2개의 매개변수를 받음
- searchElement: 찾고 싶은 값 (필수)
- fromIndex: 검색을 시작할 인덱스 (선택, 기본값은 0)

<br>

```js
let colors = ["green", "blue", "purple"];
console.log(colors.indexOf("purple")); // 2
console.log(colors.indexOf("black")); // -1
```

- 배열에서 지정한 값이 처음으로 나타나는 위치(인덱스)를 반환함
- 배열에 해당 값이 없으면 -1을 반환함

<br>

```js
let colors = ["green", "blue", "purple"];
console.log(colors.indexOf("blue", 1)); // 1
```

- 두 번째 매개변수 fromIndex를 사용하면, 지정한 인덱스부터 검색을 시작할 수 있음

<br>

#### <code>findIndex</code> 메서드

```js
array.findIndex(callback(element, index, array), thisArg);
```

- <code>findIndex</code>는 배열의 모든 요소에 대해 순차적으로 콜백함수를 수행하며, 조건에 가장 먼저 만족하는 배열 요소의 index를 반환한다.
- 최대 3개의 매개변수를 콜백 함수에 전달할 수 있다.
- element: 현재 처리중인 요소
- index: 현재 요소의 인덱스 (선택)
- array: 현재 처리 중인 배열 전체 (선택)
- thisArg: callback을 실행할 때 this로 사용할 값 (선택, 일반적으로 자주 쓰이지 않음)

<br>

```js
let colors = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
];

let idx = colors.findIndex((element) => element.color === "purple");

console.log(idx); // 2
```

- 배열 요소의 값이 객체라면 color가 purple인 객체가 배열의 몇 번째 요소인지 찾기 위해서는 <code>indexOf</code>가 아닌
  <code>findIndex</code>메서드를 사용해야한다.

<br>

```js
let colors = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
];

colors.findIndex((element, idx, array) =>
  console.log(`${idx}번째 값은 id: ${element.id}, color: ${element.color} `)
);
colors.findIndex((element, idx, array) => console.log(array));

// 0번째 값은 id: 1, color: green
// 1번째 값은 id: 2, color: blue
// 2번째 값은 id: 3, color: purple
// [ { id: 1, color: "green" }, { id: 2, color: "blue" }, { id: 3, color: "purple" }]
// [ { id: 1, color: "green" }, { id: 2, color: "blue" }, { id: 3, color: "purple" }]
// [ { id: 1, color: "green" }, { id: 2, color: "blue" }, { id: 3, color: "purple" }]
```

<br>

#### 화살표 함수의 반환 방식

```js
(element) => element.color === "purple";

// 암시적 반환 (중괄호 없이)
colors.findIndex((el) => el.color === "purple");

// 명시적 반환 (중괄호 + return 사용)
colors.findIndex((el) => {
  return el.color === "purple";
});
```

- 중괄호 없이 바로 조건식을 쓰는 방식으로 암시적 반환이라고 한다. 중괄호 없이 작성하면 return 키워드를 생략해도 자동으로 값이 반환된다.

#### <code>find</code> 메서드

```js
array.find(callback(element, index, array), thisArg);
```

<br>

```js
let colors = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
];

let idx = colors.find((element) => element.color === "purple");

console.log(idx); // { id: 3, color: "purple" }
```

- 배열에서 조건을 만족하는 첫 번째 요소를 찾아 그 값을 반환하는 메서드, 조건을 만족하는 요소가 없다면 undefined 반환

<br>

::: tip

특정 요소를 찾는 내장함수

- <code>at</code>메서드<br>
  : 배열의 가장 마지막 요소에 쉽게 접근할 수 있게 해주는 메서드
- <code>includes</code>메서드<br>
  : 배열 요소에 특정 값이 있는지 없는지 판별하는 내장함수
- <code>indexOf</code>메서드<br>
  : 특정 값을 지닌 요소가 몇 번째에 위치하는지 반환하는 함수
- <code>findIndex</code>메서드<br>
  : 배열의 요소가 객체로 이루어져 있을 경우 특정 값을 지닌 요소가 몇 번째에 위치하는지를 반환하는 함수
- <code>find</code>메서드<br>
  : 특정 값이 있는 요소의 그 값 자체를 반환하는 내장함수
  :::

### 특정 요소들의 값을 추출하는 메서드

#### <code>filter</code> 메서드

```js
let colors = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
];

let filterArray = colors.filter((element, idx, array) => element.id > 1);

console.log(filterArray);
// [{ id: 2, color: "blue" }, { id: 3, color: "purple" }]
```

- 배열에서 특정 조건을 만족하는 모든 요소를 새로운 배열로 반환하는 메서드
- 조건을 만족하지 않으면 빈 배열을 반환함, 원본 배열은 변경되지 않는다.

#### <code>slice</code> 메서드

```js
let colors = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
  { id: 4, color: "yellow" },
];

let sliceArray = colors.slice(1, 3);

console.log(sliceArray);
// [{ id: 2, color: "blue" }, { id: 3, color: "purple" }]
```

- 시작 인덱스부터 끝 인덱스 직전까지의 요소를 잘라 새로운 배열로 반환함, 원본 배열은 변경되지 않는다.
- 두 개의 매개변수 (start, end)를 전달받으며, start부터 end -1 꺼지의 요소를 복사해 반환한다.

<br>

#### <code>concat</code> 메서드

```js
const newArray = array1.concat(array2, array3, ...);

```

```js
let array1 = ["green", "blue"];
let array2 = ["purple", "yellow"];

console.log(array1.concat(array2));

// ['green', 'blue', 'purple', 'yellow']
```

- 두 개의 배열을 하나로 합쳐 새로운 배열로 반환하는 메서드
- 기존 배열은 변경되지 않음(불변성 유지)

<br>

#### <code>join</code> 메서드

```js
let array1 = ["green", "blue", "purple", "yellow"];

console.log(array1.join()); // green,blue,purple,yellow
// 매개변수를 넣지 않으면 쉼표가 기본적인 구분자로 출력

console.log(array1.join(" ")); // green blue purple yellow
// space를 매개변수로 넣으면 공백 문자열이 구분자로 출력
```

- 배열을 하나로 합치는 메서드
- <code>concat</code>과 다른점은, <code>join</code> 메서드는 하나의 배열에서 배열 요소들의 값을 문자열로 이어주는 메서드
- <code>join</code> 메서드 내부에 들어가는 매개변수는 구분자로, 요소들을 합칠 때 사이에 어떤 문자를 넣을 것인지 결정할 수 있다. 매개변수를 넣어주지 않으면 쉼표(,)가 기본적으로 구분자로 출력됨

<br>

#### <code>sort</code> 메서드

```js
let colors = ["green", "blue", "purple"];
colors.sort();

console.log(colors); // ['blue', 'green', 'purple']
```

- 배열의 요소를 정렬하고 정렬된 배열을 반환하는 메서드
- 정렬 기준을 지정하지 않으면 기본적으로 오름차순으로 정렬하며, 원본 배열을 직접 변경한다.

```js
const compare = (a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
};

let colors = ["green", "blue", "purple"];
colors.sort(compare);

console.log(colors); // ['purple', 'green', 'blue']

// 매개변수 a: 배열의 다음 요소, b: 배열의 이전 요소
// 0보다 작은 값(-1 음수): a가 b보다 앞에 있어야 함
// 0보다 큰 값(1 양수): b가 a보다 앞에 있어야 함
// 0: 순서 유지
```

- 내림차순으로 정렬
- 매개변수로 함수를 전달할 수 있다.

<br>

```js
let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort();

console.log(numbers); // [1, 100, 120, 25, 3, 50]
```

- 아무 인자 없이 호출하면, 배열 요소들을 문자열로 변환해서 유니코드(문자 코드) 순서로 정렬한다.
- 즉, 숫자의 크기가 아니라 "문자열" 기준으로 정렬해서 이상한 순서로 나옴
- 예를들어, 100은 25보다 유니코드 기준에서 앞서기 때문에 100이 먼저 나옴

<br>

```js
// 오름차순 정렬
const compare = (a, b) => {
  return a - b;
};

let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort(compare);
console.log(numbers); // [1, 3, 25, 50, 100, 120]
```

```js
// 내림차순 정렬
const compare = (a, b) => {
  return b - a;
};

let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort(compare);
console.log(numbers); // [120, 100, 50, 25, 3, 1]
```

- 숫자의 크기를 비교하는 함수를 만들어 sort메서드에 전달

<br>

#### <code>reduce</code> 메서드

```js
array.reduce(callback, initialValue);

// callback: 배열의 각 요소를 처리하는 함수
// initialValue: accumulator의 초기값 (선택)
```

```js
// 콜백함수의 매개변수
(accumulator, currentValue, currentIndex, array) => { ... }

// accumulator: 콜백함수의 반환 값을 누적하는 매개변수
// currentValue: 현재 처리할 요소의 값
// currentIndex: 현재 처리할 배열 요소의 인덱스(선택)
```

- 배열의 각 요소를 순서대로 처리해, 하나의 결과 값으로 누적하여 반환하는 메서드

```js
let numbers = [1, 100, 25, 50];
let sum = numbers.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx);
  return acc + cur;
}, 0);

console.log(sum);

// 0 1 0
// 1 100 1
// 101 25 2
// 126 50 3
// 176
```

<br>

#### <code>isArray</code> 메서드

```js
Array.isArray(value);

// value: 배열인지 확인하고 싶은 값
```

```js
let a = Array.isArray([1, 100, 50]);
let b = Array.isArray({ id: 3, color: "purple" });
let c = Array.isArray("string");
let d = Array.isArray(undefined);

console.log(a, b, c, d); // true false false false
```

- 어떤 값이 배열인지 아닌지를 확인할 때 사용하는 메서드
- 반환값은 배열이면 true, 배열이 아니면 false

## 구조 분해 할당 (Destructuring Assignment)

- 배열이나 객체의 요소 및 프로퍼티들을 분해해, 그 값들을 각각의 변수에 할당하는 자바스크립트 표현식
- 왜 쓰는지? 코드를 간결하게 만들고 필요한 값만 빠르게 추출하기 위해

<br>

### 배열의 구조 분해 할당

#### 일반적인 형태

```js
let colors = ["green", "blue", "purple"];

let c1 = colors[0];
let c2 = colors[1];
let c3 = colors[2];

console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple
```

- 위 작성한 코드를 구조 분해 할당을 사용해 간편하게 변경

<br>

```js
let colors = ["green", "blue", "purple"];
let [c1, c2, c3] = colors;

console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple
```

- 배열의 구조 분해 할당은 배열의 요소들을 순서대로 분해하여 각 값을 변수에 할당하는 문법.
- 대괄호 <code>[]</code> 안에 변수들을 나열하고, 오른쪽에 할당할 배열의 이름을 작성.
- 위 코드를 선언 분리 할당으로 더 간편하게 변경

<br>

#### 선언 분리 구조 분해 할당

```js
let c1, c2, c3; // 변수만 먼저 선언
[c1, c2, c3] = ["green", "blue", "purple"]; // 나중에 값 할당

console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple
```

- 선언 분리 할당: 변수의 선언을 분리해서 배열의 값을 할당하는 방법
- 왜 쓰는지? 변수를 먼저 선언해 놓고, 나중에 어떤 조건이나 상황에 따라 할당할 수도 있기 때문

<br>

#### 배열 요소 일부만 구조 분해 할당

```js
// 배열의 길이보다 적은 변수의 배열 요소 할당

let c1, c2; // 선언 분리 할당
[c1, c2] = ["green", "blue", "purple"];

console.log(c1); // green
console.log(c2); // blue
```

- 배열의 요소가 3개이지만, 변수는 2개만 선언된 경우 앞에서부터 순서대로 두 개의 값만 구조 분해되어 변수에 할당된다.

<br>

#### 기본값 설정

```js
let c1, c2, c3, c4; // 선언 분리 할당
[c1, c2, c3, c4] = ["green", "blue", "purple"];

console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple
console.log(c4); // undefined
```

- 배열 구조 분해 할당에서 변수의 개수가 배열의 길이보다 많을 경우,
  남는 변수에는 자동으로 undefined가 할당된다. 이러한 undefined라는 값이 할당되는 것을 원하지 않는다면, 변수에 기본값을 지정해 줄 수 있다.

<br>

```js
let c1, c2, c3, c4;
[c1, c2, c3, c4 = "yellow"] = ["green", "blue", "purple"];

console.log(c1); // "green"
console.log(c2); // "blue"
console.log(c3); // "purple"
console.log(c4); // "yellow"
```

- 변수에 기본값(yellow)을 지정하면, 할당할 배열 요소가 없을 경우 undefined가 아닌 해당 기본값이 출력된다.

<br>

#### 변수 값 교환하기

```js
let a = 10;
let b = 5;

[a, b] = [b, a];

console.log(a, b); // 5 10
```

- 배열의 구조분해는 배열의 요소의 값을 추출할 때 자주 사용하지만, 두 개의 변수 값을 서로 바꿀 때 사용되기도 한다.
- 자바스크립트는 평가 순서에 따라 오른쪽을 평가하여 값을 계산한 뒤, 그 결과를 왼쪽 변수애 할당한다. 즉, 오른쪽 [b, a]는 현재 값[5, 10]으로 평가되고, 이 배열의 요소들이 왼쪽의 [a, b] 변수에 차례로 할당된다.

<br>

### 객체의 구조 분해 할당

#### 기본 할당

```js
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};

let c1 = colors.c1;
let c2 = colors.c2;
let c3 = colors.c3;

console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple
```

- 위 코드는 구조 분해 할당을 사용하면 더 간단하게 작성할 수 있다.

<br>

```js
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};

let { c1, c2, c3 } = colors;

console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple
```

- 객체의 구조 분해 할당은 대괄호가 아닌, 중괄호를 사용한다.
- 객체의 key 값을 기준으로 해당 값을 같은 이름의 변수에 할당한다.

<br>

#### 새로운 변수 이름으로 할당하기

```js
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};

let color1 = colors.c1;
let color2 = colors.c2;
let color3 = colors.c3;

console.log(color1); //green
console.log(color2); //blue
console.log(color3); //purple
```

- 위 코드는 구조 분해 할당을 사용하면 더 간단하게 작성할 수 있다.

<br>

```js
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};

let { c1: color1, c2: color2, c3: color3 } = colors;
// colors는 객체를 담고 있는 변수이고,
// 그 안의 프로퍼티 key인 c1, c2, c3의 값을
// 새로운 변수 color1, color2, color3에 할당

console.log(color1); // green
console.log(color2); // blue
console.log(color3); // purple
```

- 객체의 key 값을 변수의 이름으로 사용하지 않고, 다른 이름을 갖는 변수에 할당하는 방법
- 객체의 프로퍼티 이름과 다른 변수 이름으로 값을 할당하고 싶을 때는 <code>:(콜론)</code>을 사용해, 다른 이름의 변수명으로 구조 분해할 수 있다.
- 객체의 key <code>:</code> 새로운 변수 이름

#### 기본값 설정

```js
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};

let { c1, c2, c3, c4 } = colors;

console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple
console.log(c4); // undefined
```

- 객체에 존재하지 않는 프로퍼티 c4를 구조 분해 할당하면, 해당 변수에는 undefined가 할당된다.

```js
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};

let { c1, c2, c3, c4 = "yellow" } = colors;

console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple
console.log(c4); // yellow
```

- 변수의 수가 객체 프로퍼티의 수보다 클 경우, undefined가 할당되는 변수에 기본값을 설정할 수 있다.
- 위 예제에서는 c4가 colors 객체에 존재하지 않기 때문에, 기본값으로 설정한 yellow가 c4에 할당된다.

## Spread / Rest 문법

### spread 문법

- <code>...</code> 을 사용해 배열이나 객체의 값을 펼쳐서 나열하는 문법
- <code>spread</code>문법은 객체 뿐만 아니라 배열에서도 사용 가능하다.

#### 객체

```js
const toy = {
  type: "bear",
  price: 15000,
};

const blueToy = {
  type: "bear",
  price: 15000,
  color: "blue",
};

const yellowToy = {
  type: "bear",
  price: 15000,
  color: "yellow",
};
```

- blueToy, yellowToy 객체와 toy의 객체 프로퍼티 중 type, price 값이 동일하다.
- spread 문법을 사용해 간단하게 작성할 수 있다.

<br>

```js
const toy = {
  type: "bear",
  price: 15000,
};

const blueToy = {
  ...toy,
  color: "blue",
};

const yellowToy = {
  ...toy,
  color: "yellow",
};

console.log(blueToy); // {type: 'bear', price: 15000, color: 'blue'}
console.log(yellowToy); // {type: 'bear', price: 15000, color: 'yellow'}
```

- 반복되는 프로퍼티들을 포함하는 객체의 이름을 <code>...</code> 뒤에 작성
- blueToy, yellowToy의 프로퍼티에 toy의 객체 프로퍼티인 type: "bear", price: 15000가 할당된다.

#### 배열

```js
const color1 = ["red", "orange", "yellow"];
const color2 = ["blue", "navy", "purple"];

const rainbow = [...color1, "green", ...color2];

console.log(rainbow);
// ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']
```

### rest 문법

- <code>...</code> 기호를 사용해서 남은 값들을 하나의 배열이나 객체로 모아서 저장하는 문법.
- 나머지 변수라고도 한다.

<br>

#### 객체

```js
const blueToy = {
  type: "bear",
  price: 15000,
  color: "blue",
};

const { type, price, color } = blueToy;

console.log(type); // bear
console.log(price); // 15000
console.log(color); // blue
```

- 객체에서 rest는 구조 분해 할당과 함께 사용된다.

<br>

```js
const blueToy = {
  type: "bear",
  price: 15000,
  color: "blue",
};

const { type, ...rest } = blueToy;

console.log(type); // bear
console.log(rest); // {price: 15000, color: 'blue'}
```

- <code>rest</code> 문법을 사용하면, 구조 분해 할당에서 원하는 값들을 추출하고 나머지 값들을 별도의 객체로 묶어서 할당할 수 있다.
- 위 예제에서 type 프로퍼티를 분해해 변수로 꺼내고, 나머지 프로퍼티들인 price, color은 <code>rest</code> 객체에 묶여 할당했다.
- <code>rest</code> 변수는 객체의 형태로 출력되고 객체 안에는 blueToy 객체 프로퍼티 중 type 값을 제외한 나머지 값들이 출력된다.

<br>

```js
const blueToy = {
  type: "bear",
  price: 15000,
  color: "blue",
};

const { ...rest, type } = blueToy;

console.log(type);
console.log(rest);
// Uncaught SyntaxError: Rest element must be last element
```

- <code>rest 문법은</code> 구조 분해에서 한 번만 사용 가능하고, 반드시 마지막에 위치해야한다.
- 이는 구조 분해 할당에서 남은 값을 모아 하나의 객체로 할당하는 방식이기 때문에, 이후에 또 다른 프로퍼티를 분해하려하면 어떤 값이 남은 값인지 판단할 수 없게 되기 때문이다.

<br>

#### 배열

```js
const color = ["red", "orange", "yellow", "green"];
const [c1, c2, ...rest] = color;

console.log(c1); // red
console.log(c2); // orange
console.log(rest); // ['yellow', 'green']
```

- <code>rest 문법을</code> 사용해 color 배열에서 c1, c2에 값을 먼저 할당하고, 나머지 요소들은 rest라는 변수에 배열 형태로 담음

<br>

### 함수에서의 spread / rest 문법

#### rest 문법을 함수의 매개변수에서 사용하는 방법

```js
const print = (a, b, c, d, e, f) => {
  console.log([c, d, e, f]);
};

print(1, 2, 3, 4, 5, 6); // [3, 4, 5, 6]
```

<br>

```js
const print = (a, b, ...rest) => {
  console.log(a, b, rest);
};

print(1, 2, 3, 4, 5, 6); // 1 2 [3, 4, 5, 6]
```

- 함수의 매개변수에 <code>...rest</code> 문법을 사용하면, 넘겨받은 여러 개의 인자 중 나머지 값들이 rest라는 배열 형태의 변수에 담긴다.
- <code>rest</code> 매개변수는 함수에 전달되는 인자의 수가 많거나, 몇 개인지 정확히 모를 때 사용할 수 있는 문법

<br>

#### 함수에서 spread, rest 문법 모두 사용

```js
const print = (a, b, c, d, e, f) => {
  console.log(a, b, c, d, e, f); // 1, 2, 3, 4, 5, 6
};

const numbers = [1, 2, 3, 4, 5, 6];

print(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]);
```

- print 함수에 6개의 매개변수를 직접 작성하면, 배열의 요소가 변할 때마다 코드 수정과 오류 위험이 생김.
- 아래와 같이 rest 문법을 사용해 가변적인 인수를 한 번에 처리할 수 있다.

  <br>

```js
const print = (...rest) => {
  // rest
  console.log(rest); // [1, 2, 3, 4, 5, 6]
};

const numbers = [1, 2, 3, 4, 5, 6];
print(...numbers); // spread
```

- ...rest는 함수 매개변수에서 사용되며, 전달받은 인수들을 하나의 배열로 묶는다.
- ...number는 spread 문법으로 배열의 요소들을 각각 개별 인수처럼 펼쳐서 함수에 전달한다.

::: tip
<code>spread 문법</code>

- 배열이나 객체의 값을 퍼트릴 때 사용
- 함수 호출 시, 인수를 펼쳐서 전달할 때 사용

<br>
<code>rest 문법</code>

- 구조 분해 시, 나머지 값을 하나로 묶을 때 사용
- 함수의 매개변수에서 가변 인자를 배열로 받을 때 사용
  :::

## 비동기 처리 (Async processing)

### 동기 (Synchronous)

- 하나의 작업이 실행되는 동안, 다른 작업은 동시에 진행되지 않는 방식 (=블로킹 방식)
- 앞의 작업이 종료된 이후 다음 작업이 순차적으로 실행

<br>

#### 동기적 처리와 블로킹 방식

```js
// 각 함수가 작업에 걸리는 시간이 각각 5초, 3초, 10초 라고 가정

const workA = () => {
  //5초
  console.log("workA");
};
const workB = () => {
  //3초
  console.log("workB");
};
const workC = () => {
  //10초
  console.log("workC");
};

workA();
workB();
workC();
```

- 자바스크립트는 기본적으로 동기 방식으로 동작하며, 한 작업이 끝나야만 다음 작업이 실행된다.
- 위 코드처럼 각 작업이 순서대로 실행된다면, 총 18초가 걸리게 된다.
- 자바스크립트는 싱글 스레드 언어이기 때문에, 하나의 스레드에서만 작업을 처리한다. 즉, 멀티 스레드 처리는 불가능하다.
- 모든 작업을 동기적으로 처리하면, 이미지나 데이터를 불러오는 동안 버튼 클릭이나 키보드 입력조차 반응하지 않게 된다면 사용자는 웹사이트가 멈춘 것처럼 느끼게 된다.
- 따라서 오래 걸리는 작업은 비동기적 방식으로 처리해야 사용자 경험을 해치지 않고 전체 성능도 높일 수 있다. 위 코드를 비동기적으로 처리한다면, 총 10초가 걸리게 된다.

<br>

### 비동기 (Asynchronous)

- 하나의 스레드에서 여러 작업들을 동시에 처리하는 방식 (=논 블로킹 방식)

#### <code>setTimeout()</code>

```js
setTimeout(callback, delay);
```

- <code>setTimeout()</code>은 자바스크립트의 비동기 처리에 사용되는 내장 함수.
- 콜백 함수와 지연시간 두 개의 매개변수를 받는다.
- delay는 ms(밀리초, millisecond) 단위이며, 1초는 1000, 3초는 3000으로 입력해야 한다.

```js
setTimeout(() => {
  console.log("3초만 기다리세요");
}, 3000);

// 3초만 기다리세요
```

- 지정한 시간이 지난 후에, 콜백 함수를 한 번만 실행한다.

<br>

```js
setTimeout(() => {
  console.log("3초만 기다리세요");
}, 3000);

console.log("종료");

// 종료
// 3초만 기다리세요
```

- setTimeout 함수 안의 코드는 3초 뒤에 실행되기 때문에, 아래에 작성된 종료라는 문자열이 먼저 출력된다.
- 종료라는 문자열을 3초 후에 출력하고 싶다면, 해당 코드를 콜백함수의 인수로 넘겨주어야 한다.

```js
const work = (callback) => {
  setTimeout(() => {
    console.log("3초만 기다리세요");
    callback();
  }, 3000);
};

work(() => {
  console.log("종료");
});

// 3초만 기다리세요
// 종료
```

- <code>console.log("종료");</code> 명령을 콜백 함수로 만들어 <code>work</code>라는 비동기 함수에 인자로 넘겨줌. <code>work</code> 함수 내부에서 비동기 작업이 끝난 후, 전달한 콜백 함수가 실행되어 종료가 출력된다.

## Promise 객체

- 비동기 작업을 편리하게 처리하는 자바스크립트 내장 객체
- 콜백 지옥 문제를 줄여주고, 가독성을 높여준다.

#### Promise 객체 생성법

```js
const executor = (resolve, reject) => {
  // 비동기 작업을 수행하고 성공 시 resolve(), 실패 시 reject()를 호출
};

const promise = new Promise(executor);
// new 키워드를 통해  Promise 객체를 생성하고 executor 함수를 인수로 전달
```

- Promise 객체를 생성할 때 <code>executor</code>실행함수를 인수로 전달해야 한다.
- <code>executor</code> 함수는 반드시 두 개의 매개변수 resolve, reject를 받아야 한다.
- 이 실행함수는 Promise가 생성되자마자 자동으로 실행되며, 내부에서 비동기 작업을 처리한 후 결과에 따라 resolve() 또는 reject()를 호출한다.
- 즉, <code>executor</code>는 비동기 작업의 흐름을 제어하는 함수이며, Promise의 핵심 역할을 담당한다.

<br>

#### Promise 내부 프로퍼티

- 프로미스는 객체는 state, result 두 개의 내부 프로퍼티를 갖는다.
- new Promise(executor) 객체는 초기에 state: pending, result: undefined 값을 가진다.
- 이후 resolve(value)가 호출되면 state: fulfilled, result: value로 변경된다.
- 반대로 reject(error)가 호출되면 state: rejected, result: error로 변경된다.
- 프로미스는 상태가 정해지면 그 이후의 resolve와, reject는 무시된다.

<br>

#### resolve() / reject()

```js
// 3초 후에 실행되는 비동기 함수를 Promise 객체를 이용해 구현
const executor = (resolve, reject) => {
  setTimeout(() => {
    console.log("3초만 기다리세요");
  }, 3000);
};
const promise = new Promise(executor);
```

- 두 함수는 자바스크립트가 자동으로 <code>executor</code> 함수에 전달해주는 함수들이다. <code>executor</code>가 호출될 때, 매개변수로 들어간다.
- <code>resolve()</code> : 비동기 처리 성공 시 호출
- <code>reject()</code> : 비동기 처리 실패 시 호출

<br>

#### .then()

```js
// 3초 후에 성공을 출력하는 비동기 함수
const executor = (resolve, reject) => {
  setTimeout(() => {
    resolve("성공");
  }, 3000);
};

const promise = new Promise(executor);
promise.then((result) => {
  console.log(result); // 성공
});
```

- <code>.then()</code> 메서드는 Promise 작업이 성공했을 때 실행되는 메서드
- executor 함수에서 비동기 처리된 결과를 반환할 때는, 매개변수로 받은 resolve 콜백함수에 결과값을 전달하면 된다.
- 이렇게 resolve에 전달한 값은 Promise 객체의 <code>.then()</code> 메서드에서 사용할 수 있고,
  <code>.then()</code>의 콜백함수는 이 값을 매개변수로 받아 처리하게 된다.

<br>

#### .catch()

```js
// 비동기 작업이 성공했을 때와 실패했을 때 처리하는 방법
const executor = (resolve, reject) => {
  setTimeout(() => {
    reject("실패");
  }, 3000);
};

const promise = new Promise(executor);
promise
  .then((result) => {
    console.log(result); // 성공
  })
  .catch((result) => {
    console.log(result); // 실패
  });
```

- <code>.catch()</code> 메서드는 Promise 작업이 실패했을 때 실행되는 메서드
- 작업이 실패하면, <code>.then()</code> 메서드는 실행되지 않고, <code>.catch()</code> 메서드만 실행된다.

#### 콜백 지옥을 해결하는 Promise 객체

```js
// executor 함수를 별도로 작성하지 않고 바로 콜백함수로 넣어줌

const workA = (value) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 5000);
  });
  return promise;
};

const workB = (value) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 3000);
  });
  return promise;
};

const workC = (value) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  });
  return promise;
};

workA(10).then((resultA) => {
  console.log(`1. ${resultA}`);
  workB(resultA).then((resultB) => {
    console.log(`2. ${resultB}`);
    workC(resultB).then((resultC) => {
      console.log(`3. ${resultC}`);
    });
  });
});

// 1. 15
// 2. 12
// 3. 22
```

#### 프로미스 체이닝

```js
const workA = (value) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 5000);
  });
  return promise;
};

const workB = (value) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 3000);
  });
  return promise;
};

const workC = (value) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  });
  return promise;
};

workA(10)
  .then((resultA) => {
    console.log(`1. ${resultA}`);
    return workB(resultA);
  })
  .then((resultB) => {
    console.log(`2. ${resultB}`);
    return workC(resultB);
  })
  .then((resultC) => {
    console.log(`3. ${resultC}`);
  });

// 1. 15
// 2. 12
// 3. 22
```

- 프로미스 체이닝이란 프로미스 객체를 반환하며 <code>.then()</code> 메서드를 연속으로 사용하는 것
- .then 메서드의 콜백함수 안에서, WorkB 함수를 리턴하는 방식
- workB 함수가 반환되게 되면, workB 함수의 반환값인 Promise 객체가 반환되는 것이기 때문에 다시 한번 .then을 사용할 수 있게된다.

## async / await

- async와 await 문법은 Promise 객체를 더욱 쉽게 작성할 수 있고, 직관적으로 코드를 해석할 수 있게 도와주는 역할
- 실행 순서가 예측이 불가능했던 비동기 처리 방식과는 달리 비동기 함수의 실행 순서를 예측할 수 있게 된다.

```js
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const start = () => {
  delay(2000).then(() => {
    console.log("대기");
  });
};

start();
```

- delay 함수는 지연 시간을 인수로 받아 setTimeout을 Promise로 감싼 비동기 함수. 이 함수는 일정 시간 후 resolve를 호출해 흐름을 제어한다.
- start 함수는 2초간 대기한 뒤, then 메서드를 통해 대기라는 메세지를 출력한다.
- 위 코드를 async, await을 이용해 더 직관적으로 변경할 수 있다.

<br>

#### async

```js
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const start = async () => {
  return "대기";
};

start().then((result) => {
  console.log(result);
});

// 대기
```

- <code>async</code>는 비동기 함수를 만들 때 함수 앞에 붙이는 키워드이다. 해당 함수는 자동으로 Promise를 반환하는 비동기 함수가 된다.
- 함수 내에서 return 한 값은 해당 Promise가 성공 resolve할 때 전달되는 결과 값이다.

<br>

#### await

```js
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const start = async () => {
  await delay(2000); // delay 함수가 처리 완료될 때까지 기다림
  console.log("대기");
};

start();
```

- <code>await</code>은 <code>async</code> 함수 안에서만 쓸 수 있는 키워드
- 해당 Promise가 처리될 때까지 기다렸다가 결과를 바로 받을 수 있게 해준다.

<br>

#### async/await 사용 시 에러 처리방법

- async/await을 이용한 비동기처리 함수에서는 try-catch 문을 활용해 예외 처리를 할 수 있다.
- 이는 Promise의 .catch()처럼 비동기 작업 중 발생할 수 있는 예외 상황을 안전하게 처리하기 위한 방법이다.

#### try-catch

```js
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const start = async () => {
  try {
    await delay(2000);
    console.log("대기");
  } catch (error) {
    console.log(error);
  }
};

start();
```

- try의 블록 안의 코드가 실행되고, 해당 코드에서 에러가 발생한다면 catch 블록 안의 코드가 실행된다.
- 발견된 에러는 catch(error)의 error 객체에 담기며,이를 통해 에러의 원인을 확인할 수 있다.

## API 호출

#### API (Application Programming Interface)란?

- 컴퓨터나 컴퓨터 프로그램 사이의 연결
- 웹브라우저(클라이언트)와 서버 사이에서, 필요한 데이터를 요청하고 응답받기 위한 통신 방법 또는 약속된 규칙

<br>

#### 클라이언트-서버 통신 구조

- <code>Client</code>: 사용자가 직접 조작하는 프로그램으로, 서버에 요청을 보내고 응답을 받아 화면에 보여주는 역할을 한다. (ex 웹브라우저, 모바일 앱)
- <code>Server</code>: 클라이언트의 요청을 받아 처리하고, 필요한 데이터를 데이터베이스에서 가져와 응답을 보내주는 중간 관리자 역할을 한다.
- <code>Database</code>: 필요한 정보를 구조화된 형태로 저장하고, 서버의 요청에 따라 데이터를 제공하는 저장소

<br>

#### 클라이언트-서버 통신 흐름

```js
client -> server -> database
client <- server <- database
```

1. 사용자가 웹브라우저(클라이언트)에서 서버에게 원하는 데이터를 요청한다.
2. 서버는 데이터베이스에서 접근하여 요청받은 데이터를 조회한다.
3. 데이터베이스에서 해당 데이터를 찾아 서버에게 전달한다.
4. 서버는 받은 데이터를 클라이언트에게 응답으로 보낸다.

<br>

#### JSON

```json
{
  "id": 1,
  "title": "Hello JSON",
  "completed": false
}
```

- JSON(JavaScript Object Notation)은 자바스크립트에서 객체 형태의 데이터를 가독성 좋게 나타내기 위한 표기법
- key:value 쌍으로 구성되며, 보통 웹 애플리케이션에서 서버와 클라이언트 간에 데이터를 주고받을 때 사용된다.

<br>

#### API 호출 예시

- <code>https://jsonplaceholder.typicode.com/posts</code>는 테스트 용으로 자주 사용되는 가짜 API 주소이다.
- 이 주소를 브라우저에서 열거나 fetch 요청을 보내면, JSON 형식의 데이터 목록이 반환된다.
- 이런 방식으로, 클라이언트는 API를 통해 서버에 데이터를 요청하고, 서버는 JSON 형태로 응답을 반환한다.

<br>

#### fetch()

- 자바스크립트에서 API를 호출할 때는 fetch 내장함수를 사용한다.
- 서버로 비동기 HTTP 요청을 보낼 수 있다.
- 결과로 Promise 객체를 반환한다.

#### fetch 기본 사용 예시

```js
const response = fetch("https://jsonplaceholder.typicode.com/posts");

console.log(response); // Promise {<pending>}
```

- fetch()는 비동기 함수로, 실행 즉시 Promise 객체를 반환한다.
- 응답이 도착하기 전에 console.log()가 먼저 실행되므로, pending 상태의 Promise가 출력된다.

#### .then() / .catch()로 응답 처리

```js
const response = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log(response);
```

- fetch()는 Promise를 반환하므로, .then()과 .catch()로 결과와 에러를 처리할 수 있다.
- console.log(response)는 즉시 실행되어 Promise 객체 자체를 출력한다.
- 이후 promise에서 resolve 함수를 통해 전달된 결과값을 then 메서드에서 매개변수로 받아 api호출의 결과값이 출력된다.
- 콘솔에 Response 객체가 찍히는 이유는, fetch()는 처음에 JSON 데이터가 아닌 Response 객체 자체를 반환하기 때문이다.

<br>

#### async/await로 더 직관적인 코드 작성

```js
const getData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();
  console.log(data);
};

getData();
```

- await fetch()는 응답이 올 때까지 기다렸다가 Response 객체를 반환한다.
- fetch()로 받은 응답은 JSON 형식의 문자열 데이터이기 때문에, 이를 자바스크립트 객체로 변환하려면 .json() 메서드를 사용해야한다.

<br>

#### try...catch를 사용한 API 호출 에러 처리

```js
const getData = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await result.json();
    console.log(data); // 정상 응답 시 JSON 데이터 출력
  } catch (error) {
    console.log(error); // 네트워크 오류 또는 JSON 파싱 오류 처리
  }
};

getData();
```

- fetch()로 요청을 보낸 뒤, 응답을 .json()으로 변환해 데이터를 출력한다.
- 네트워크 연결 실패, 주소 오류, 파싱 실패 등의 상황에 대비해 try..catch 구문으로 에러를 안전하게 처리할 수 있다.

## 웹과 DOM

### 웹

- 인터넷에 연결된 사용자들이 서로 정보를 공유할 수 있는 공간을 의미한다.
- HTML로 작성된 하나의 문서를 웹 페이지라고 하고, 이 웹 페이지들이 모여 있는 집합을 웹 사이트라고 부른다.
- 웹 사이트는 특정한 주소(URL)로 접근할 수 있으며, 흔히 말하는 홈페이지에 해당한다.

### DOM(Document Object Model)

- 문서 객체 모델
- HTML을 브라우저가 객체 형태로 변환한 구조입니다. 자바스크립트가 이 구조를 통해 웹 페이지를 읽고, 수정하고, 조작할 수 있다.
  즉, 브라우저가 우리가 작성한 HTML을 자바스크립트가 이해할 수 있도록 구조화한 객체 모델입니다.

- DOM이란 Document Object Model 문서 객체 모델로, HTML로 작성된 여러 요소들에 자바스크립트가 접근할 수 있도록 브라우저가 변환시킨 객체이다. 브라우저가 우리가 작성한 HTML을 자바스크립트가 이해하고 조작할 수 있게 객체로 변환한 것이다.

```less
// HTML
<!DOCTYPE html>
<html>
  <body>
    <div>
      <h1>Hello</h1>
    </div>
    <div>
      <p>World</p>
    </div>
  </body>
</html>

// 브라우저 내부의 DOM 구조
Document
└── html
    └── body
        ├── div
        │   └── h1 ("Hello")
        └── div
            └── p("World")

```

- 웹 브라우저는 HTML 문서를 로드한 뒤, 이를 계층 구조(트리 구조)로 표현합니다. 이 구조를 DOM 트리(DOM Tree)라고 부른다.
- DOM 트리에서 각각의 항목은 노드(Node)라고 하며, 이 노드들은 모두 자바스크립트 객체로 구성되어 있다.
- 자바스크립트는 DOM이 제공하는 DOM API를 통해 이 노드들에 접근하여 내용 수정, 삭제, 추가 등의 작업을 할 수 있다.

## DOM API

### DOM Tree

```less
// DOM Tree

Document // 문서노드
└── html
    └── body // 요소노드
        ├── div // 요소노드, 어트리뷰트 노드(태그에 붙는 속성)
        │   └── h1 ("Hello") // 텍스트 노드
        └── div
            └── p("World")
```

- DOM API를 통해 요소에 접근할 때, 문서 노드 → 요소 노드 → 어트리뷰트 → 텍스트 노드 순서로 각 노드에 접근한다.
- 문서 노드는 DOM 트리의 가장 최상위에 위치하기 때문에, 어떤 요소에 접근하더라도 항상 먼저 문서 노드를 통해 시작해야 한다.

<br>

### 요소를 찾고 선택하는 DOM API

#### 1. attribute 노드(속성) 변경

#### document.getElementById(id)

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="clock" id="clock">15:03</div>
</div>
```

```js
console.log(document.getElementById("date"));
// <div class="date" id="date">02.10.금요일</div>
```

- <code>getElementById</code>는 DOM API가 제공하는 메서드 중 하나로, 특정 id 값을 가진 요소를 찾고 조작할 수 있게 해준다.
- 문서 내에서 id가 같은 요소가 여러 개여도 가장 위에 있는(트리 위쪽에 있는) 첫번째 요소만 반환한다. 하지만 HTML 표준상 id는 문서 내에서 유일(unique)해야 하므로, 보통은 id가 중복되지 않도록 사용하는 것이 맞다.

<br>

#### document.querySelector(cssSelector)

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="clock" id="clock">15:03</div>
</div>
```

```js
console.log(document.querySelector(".date"));
console.log(document.querySelector("div.date"));
// <div class="date" id="date">02.10.금요일</div>
```

- <code>querySelector</code> CSS 선택자를 이용해 DOM 요소를 찾는 메서드
- <code>.date</code> 클래스 이름이 date인 요소를 가져온다. 같은 의미이지만, 구체적으로 <code>div.date</code>처럼 div 태그 중에 클래스가 date인 요소라고 작성할 수도 있음.

<br>

#### document.querySelectorAll(cssSelector)

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="date" id="date">15:03</div>
</div>
```

```js
console.log(document.querySelectorAll("div.date"));
```

- <code>querySelectorAll</code>은 CSS 선택자를 사용해서 조건에 맞는 모든 요소를 한 번에 가져오는 메서드
- 반환값은 NodeList라는 유사 배열 형태로, 여러 요소가 포함될 수 있다.

<br>

#### document.getElementsByClassName(class)

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="date" id="date">15:03</div>
</div>
```

```js
console.log(document.getElementsByClassName("date"));
```

- <code>getElementsByClassName</code>은 동일한 클래스 이름을 가진 모든 요소들을 찾아 반환하는 메서드
- 단순 클래스 이름을 문자로 전달하기 때문에 클래스 이름 앞에 <code>.</code>을 붙이면 안된다.
- 반환되는 값은 HTMLCollection이라는 유사 배열 객체이며, 여러 요소가 있을 경우 인덱스를 통해 접근할 수 있다.

<br>

#### document.getElementsByTagName

```js
console.log(document.getElementsByTagName("div"));
```

- <code>getElementsByTagName</code> 특정 태그 이름을 가진 모든 요소를 찾아 반환하는 메서드
- 예를 들어 "div"를 넣으면, 문서 안에 있는 모든 div 요소들을 찾아서 반환한다. 반환값은 HTMLCollection이라는 유사 배열 객체이다.

<br>

### 요소 조작하기

#### className

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="clock" id="clock">15:03</div>
</div>
```

```js
console.log(document.getElementById("date").className); // date
```

- className은 요소의 class 속성 값을 문자열로 반환하는 속성

```js
const dateElement = document.getElementById("date");
dateElement.className = "change";

console.log(dateElement); // <div class="change" id="date">02.10.금요일</div>
console.log(dateElement.className); // change
```

- 클래스 이름을 change로 변경
- 변수에 값을 할당하듯이, 원하는 클래스명을 직접 넣으면 된다.

<br>

#### id

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="clock" id="clock">15:03</div>
</div>
```

```js
console.log(document.querySelector("div.date").id); // date
```

- id는 요소의 id 속성 값을 문자열로 가져오는 속성
- div 태그 중 클래스가 date인 요소를 선택해서, 해당 요소의 id값인 date를 콘솔에 출력

```js
const dateElement = document.querySelector("div.date");
dateElement.id = "change";

console.log(dateElement); // <div class="date" id="change">02.10.금요일</div>
```

- id 값을 change로 변경

<br>

#### classList

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="clock" id="clock">15:03</div>
</div>
```

```js
console.log(document.getElementById("date").classList);
// DOMTokenList ['date', value: 'date']
```

- classList는 요소의 클래스 목록을 토큰(문자열) 리스트 형태로 반환하는 속성
- 배열처럼 인덱스로 접근할 수 있고, 다양한 메서드를 제공한다.
- className처럼 특정 요소의 class 속성에 접근하지만, 더 다양한 메서드를 제공하여 클래스를 유연하게 조작할 수 있다.
- add, remove, item, toggle, contains, replace 등의 메서드를 제공하며, 이 중 add와 remove는 가장 많이 사용된다.
- className은 클래스 이름 전체가 변경되지만 classList는 기존의 클래스 값에 특정 값을 추가, 제거, 변경이 가능하다.

<br>

```js
const dateElement = document.getElementById("date");
dateElement.classList.add("change");
console.log(dateElement); // <div class="date change" id="date">02.10.금요일</div>
```

- add 메서드를 사용해 change 클래스 추가

<br>

```js
const dateElement = document.getElementById("date");
dateElement.classList.add("change");
dateElement.classList.remove("date");
console.log(dateElement); // <div class="change" id="date">02.10.금요일</div>
```

- remove 메서드를 통해 date 클래스 제거

<br>

#### 2. text 노드 변경

#### textContent

```html
<div class="today-info">
  <div class="date" id="date">02.10.금요일</div>
  <div class="clock" id="clock">15:03</div>
</div>
```

```js
const clockElement = document.getElementById("clock");
clockElement.textContent = "12:00";

// 15:03이 12:00로 변경된다.
```

- <code>textContent</code>는 해당 요소 내부의 모든 텍스트 콘텐츠를 가져오거나 변경할 수 있는 속성
- 즉, HTML 태그를 제외한 순수한 텍스트만을 다루고 싶을 때 사용

<br>

#### 3. 요소 노드 생성

#### createElement(tagName)

```html
<!DOCTYPE html>
<html>
  <body>
    <div class="today-info">
      <div class="date" id="date">02.10.금요일</div>
      <div class="clock" id="clock">15:03</div>
      <!-- <div class="season">spring</div> -->
    </div>
  </body>
</html>
```

```less
Document
└── html
    └── body
        └── div.today-info
            ├── div.date (#date)
            ├── div.clock (#clock)
            // └── div.season (#season)
```

```js
// 1. textContent를 사용해 spring 텍스트 추가

const seasonElement = document.createElement("div"); // div 요소 생성
seasonElement.classList.add("season"); // div에 season 클래스 추가

seasonElement.textContent = "spring";

// 결과: <div class="season">spring</div>
```

- <code>createElement</code> 메서드를 통해 새로운 요소 노드를 생성하고, <code>textContent</code>로 텍스트 추가
- 이 방식은 간단하고 직관적이며, 텍스트가 복잡하지 않을 때 많이 쓰인다.

<br>

```js
// 2. createTextNode 메서드를 사용해 spring 텍스트 노드 생성

const seasonElement = document.createElement("div"); // div 요소 생성
seasonElement.classList.add("season"); // div에 season 클래스 추가

const seasonText = document.createTextNode("spring");

// 결과: <div class="season">spring</div>
```

- <code>createElement</code> 메서드를 사용해 새로운 요소 노드를 생성
- <code>createTextNode</code>는 텍스트만 담긴 별도의 텍스트 노드를 생성하며, 아직 DOM Tree에 추가된 것은 아니다. 이 텍스트 노드는 <code>appendChild()</code>등을 통해 부모 요소에 추가해야한다.
- 이 방식은 텍스트 노드를 더 세밀하게 제어하거나, 여러 텍스트 노드를 합성하는 등 더 유연한 조작이 필요할 때 유용하다.

<br>

```js
const seasonElement = document.createElement("div"); // div 요소 생성
seasonElement.classList.add("season"); // div에 season 클래스 추가

const seasonText = document.createTextNode("spring"); // 텍스트 노드 생성
seasonElement.appendChild(seasonText); // 텍스트 노드를 <div class="season">에 추가

const todayInfoElement = document.querySelector("div.today-info"); // 기존 html의 안에
todayInfoElement.appendChild(seasonElement); // 완성된 div를 DOM에 추가

// <div class="season">spring</div>가 추가된 것을 확인할 수 있음
```

- createElement와 createTextNode는 실제로 DOM에 바로 추가되는 것이 아니라, 브라우저 메모리 상에 임시로 만들어진 노드들이다.
- 이 노드들은 appendChild()를 호출해야 실제로 DOM에 삽입되고, 브라우저 화면에도 렌더링된다.
- appendChild()는 지정한 요소의 마지막 자식으로 노드를 추가한다. 따라서 이미 자식이 있는 요소에 추가하면, 그 맨 끝에 붙게 된다.
- 따라서 이미 자식 노드가 있을 경우, 새 노드는 맨 뒤에 붙는다.

<br>

```js
// 추가 예시
const buttonElement = document.createElement("div"); // div 생성
buttonElement.classList.add("button"); // div에 button 클래스 추가
buttonElement.textContent = "버튼"; // 텍스트 버튼 추가

// DOM에 추가
const todayInfoElement = document.querySelector("div.today-info"); // 기존 요소 선택
todayInfoElement.appendChild(buttonElement); // 새로 만든 div를 DOM에 추가

// 문서 내 모든 div 요소를 HTMLCollection 형태로 출력
console.log(document.getElementsByTagName("div"));
```

- createElement로 새로운 div 요소를 생성하고, classList.add로 button 클래스를 추가
- textContent를 사용해 내부 텍스트를 "버튼"으로 설정
- querySelector로 기존 문서에서 .today-info 클래스를 가진 요소를 선택하고, appendChild를 이용해 새로 만든 버튼 요소를 자식으로 추가
- 마지막으로 getElementsByTagName("div")를 호출해 현재 문서 내 모든 div 요소를 가져오며, 새로 추가된 buttonElement도 포함되어 출력
- getElementsByTagName은 실시간 컬렉션을 반환하므로, DOM 변경 사항이 즉시 반영된다.

<br>

#### addEventListener

```js
element.addEventListener(eventType, listenerFunction);
```

- addEventListener는 DOM 요소에 이벤트를 등록할 수 있는 메서드이다.
- eventType (문자열): 등록할 이벤트 종류
- listenerFunction 함수: 이벤트가 발생했을 때 실행될 함수

<br>

```js
// 추가 예시
const buttonElement = document.createElement("div");
buttonElement.classList.add("button");
buttonElement.textContent = "버튼";

// DOM에 추가
const todayInfoElement = document.querySelector("div.today-info");
todayInfoElement.appendChild(buttonElement);

buttonElement.addEventListener("click", () => {
  window.alert("클릭");
});

// 결과: 버튼 텍스트를 누르면, 클릭이라는 단어가 적힌 경고창이 실행된다.
```

- addEventListener 메서드는 이벤트 종류 외에 listener라는 함수도 매개변수로 받는다. 이 함수는 지정한 이벤트가 발생했을 때 실행된다.
  위 예시에서 버튼을 클릭하면 window.alert 메서드를 호출해 경고창을 띄우는 함수를 전달한다.
- window 객체는 현재 사용하고 있는 웹 브라우저의 창을 나타내며, 경고창을 띄우는 alert, 확인과 취소의 버튼이 있는 confirm과 같은 다양한 메서드들을 포함한다.

## Date 객체

- <code>Date</code>는 날짜와 시간을 다루기 위한 자바스크립트의 내장 객체
- 현재 날짜와 시간, 혹은 특정 날짜와 시간을 생성하고 조작할 수 있다.

```js
// YYYY-MM-DD

let birth = new Date("1996-04-07");

console.log(birth);
// Sun Apr 07 1996 09:00:00 GMT+0900 (한국 표준시)
```

- Date 객체에 특정 날짜를 전달하면, 해당 날짜의 연도, 월 일, 요일을 알 수 있다.
- 날짜만 넣으면 시간은 00:00:00(자정)으로 자동 설정된다.
- 다만, 09:00:00으로 출력된 이유는 타임존(Timezone) 때문이다. 자바스크립트가 입력된 날짜를 UTC(협정 세계시) 기준 자정(00:00:00)으로 해석하고, 이후 브라우저가 실행되는 컴퓨터 시간대(GMT+9, 한국 표준시)를 적용해서 출력하기 때문이다. (한국 표준시는 UTC보다 9시간 빠르다)

<br>

```js
let nowDate = new Date();
console.log(nowDate);
// Sat Jun 21 2025 00:13:27 GMT+0900 (한국 표준시)
```

- Date 객체에 아무런 값도 전달하지 않으면 오늘의 연도, 월 일, 요일, 시간이 출력된다.

<br>

#### Date의 메서드

#### 날짜

```js
let nowDate = new Date();
let month = nowDate.getMonth();
let date = nowDate.getDate();
let day = nowDate.getDay();

console.log(`${month}월 ${date}일 ${day}요일`);
// 5월 21일 6요일
```

```js
const week = ["일", "월", "화", "수", "목", "금", "토"];
let nowDate = new Date();
let month = nowDate.getMonth() + 1;
let date = nowDate.getDate();
let day = nowDate.getDay();

console.log(`${month}월 ${date}일 ${week[day]}요일`);
// 6 월 21일 토요일
```

#### <code>getMonth</code>

- Date 객체에서 월(0~11)을 반환하는 메서드
- Date 객체에서는 반환값은 0부터 시작하므로, 1월을 0, 12월을 11로 표기한다.
- 따라서 getMonth()의 결과를 사람이 이해하는 월로 표현하려면, 결과값에 1을 더해야 한다.

#### <code>getDate</code>

- 해당 날짜의 일(1~31) 을 반환하는 메서드
- getMonth()와는 달리, getDate()는 우리가 흔히 사용하는 날짜(1일부터 시작)를 그대로 반환한다.

#### <code>getDay</code>

- 특정 날짜의 요일 정보를 숫자로 반환하는 메서드
- 일요일부터 토요일까지 순서대로 0 부터 6까지의 숫자로 요일을 반환하기 때문에 우리가 익숙한 요일 이름으로 나타내고 싶다면, 요일 이름이 담긴 배열과 함께 사용해야 한다.

<br>

#### 시간

```js
let nowDate = new Date();
let hours = nowDate.getHours();
let minutes = nowDate.getMinutes();

console.log(`${hours}:${minutes}`);

// 현재 시간 출력
```

#### <code>getHours</code>

- Date 객체에서 시간(0~23) 을 반환한다.

#### <code>getMinutes</code>

- Date 객체에서 분(0~59) 을 반환한다.

#### <code>getSeconds</code>

-Date 객체에서 초(0~59) 를 반환한다.

## Local Storage

- Local Storage는 웹 브라우저에 데이터를 영구적으로 저장할 수 있는 방법 중 하나이다.
- JavaScript의 localStorage 객체를 사용해 key-value 쌍으로 데이터를 저장한다.
- 브라우저를 새로 고쳐도 저장된 데이터는 사라지지 않으며, 사용자가 직접 삭제하거나 브라우저 설정을 초기화하지 않는 한 유지된다.
- 객체나 배열은 문자열로 변환(JSON.stringify)한 후 저장해야 한다.
- 저장된 데이터는 브라우저 개발자 도구의 Application 탭 > Local Storage에서 확인할 수 있다.

### 주요 메서드

#### <code>setItem</code> 저장하기

```js
localStorage.setItem("key", "value");
```

- 로컬 스토리지에 데이터를 저장할 때 사용
- 매개변수
  - <code>key</code> : 저장할 데이터의 이름 (문자열)
  - <code>value</code> : 저장할 실제 데이터 (문자열만 가능 – 객체/배열은 JSON으로 변환 필요)

<br>

#### <code>getItem</code> 불러오기

```js
localStorage.getItem("key");
```

- 저장된 데이터를 가져올 때 사용
- 해당 key가 없으면 null을 반환

<br>

#### <code>JSON.stringify()</code>

```js
const user = { name: "milou", age: 20 };
localStorage.setItem("user", JSON.stringify(user));
```

- 객체나 배열을 문자열로 변환한다.
- 로컬 스토리지에 저장하기 전에 사용한다.

<br>

#### <code>JSON.parse()</code>

```js
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // "milou"
```

- 문자열을 다시 객체나 배열로 변환한다.
- 로컬 스토리지에서 데이터를 꺼낸 후 사용한다.
