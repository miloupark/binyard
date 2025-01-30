# Javascript Basic

Summarizing what I've learned about Javascript..✍🏼

## 변수 (Variable)

프로그램이 실행되는 도중에 변경되는 값을 저장하기 위한 '이름을 가진 저장소'

- 변수 선언 방식

```js
let 이름 = 값;

let color = "skyblue";
console.log(color); //skyblue
```

- 변수 선언 후 중간에 변수의 값을 변경할 수도 있음

```js
let color = "skyblue";
color = "yellow";

console.log(color);
```

<br>

### 변수 명명 규칙

1. ‘$’와 ‘\_’를 제외한 기호는 사용 불가

```js
let $name;
let test_data;
```

2. 변수명의 맨 앞은 숫자 사용 불가 (맨 뒤 숫자 사용가능)

```js
let 9test; //불가능
let test99; //가능
```

3. 예약어 사용 불가

```js
let let = `; // 에러
let class = "class" // 에러
```

4. 카멜케이스: 변수명, 함수명을 읽기 쉽고 명확하게 표현하기 위해 사용되는 표기법

- 가독성 향상, 띄어쓰기 불가능
- 첫 번째 단어는 소문자로 작성, 두 번째 단어부터는 각 단어의 첫 글자 대문자로 작성 <br>
  <code>userName</code> <code>totalPrice</code> <code>isAvailable</code>

  <br>

### 자바스크립트 변수 선언의 차이점

- C와 Java의 변수 선언<br>
  C, Java에서는 변수를 선언할 때, 해당 변수의 자료형을 먼저 작성한 후 변수명을 지정. 예를 들어, char이나 String과 같은 자료형을 앞에 작성하여 변수의 데이터 타입을 명시

```js
char color[10] = “skyblue”;
string color = “skyblue”
```

- 자바스크립트의 변수 선언<br>
  자바스크립트는 변수 선언 시 변수의 자료형을 작성하지 않음

```js
let color;
color = “skyblue”;
```

- 자바스크립트 변수의 자료형을 알 수 있는 방법?<br>
  <code>typeof</code> 연산자를 통해 해당 변수의 현재 type을 알 수 있음

```js
let nowType = “안녕하세요”;
console.log(typeof nowType); //string
```

- 자바스크립트 변수는 선언 시 자료형을 명시하지 않는지?<br>
  자바스크립트는 동적 타입(dynamic typing)을 지원하기 때문에, 변수는 저장된 값의 자료형에 따라 자동으로 자료형이 결정됨. 즉, 변수에 저장된 값이 변경되면 변수의 자료형도 그에 맞게 변경됨

  처음 문자열로 선언된 변수에 숫자를 저장하면, 자료형이 숫자형으로 변경됨<br>
  변수 선언 시 자료형을 명시할 필요가 없으며, 서로 다른 타입의 값을 저장해도 에러 없이 동작함

```js
let nowType = “안녕하세요”;
console.log(typeof nowType); //string
nowType = 100;
console.log(typeof nowType); //number
```

<br>

## 상수 (Constant)

변화하지 않는 변수 <br>
(상수를 선언할 때에는 let이 아닌 const 사용)

```js
// let의 경우
let color = "skyblue";
color = "yellow"; //값 변경 가능

// const의 경우
const color = "skyblue";
color = "yellow"; //TypeError: "color" is read-only
```

- let으로 선언된 변수는 값을 변경할 수 있음
- const로 선언된 변수(상수)는 값이 한 번 할당되면 프로그램 실행 중 변경할 수 없음
- 상수로 선언된 변수에 값을 변경하려 하면 "읽기 전용"이라는 오류가 발생함

<br>

### 상수를 사용하는 이유

1. 변경될 수 없다고 확신하는 값

```js
const BIRTH = "04-07";
const NAME = "hyebin";
```

2. 예약어<br>
   상수는 값이 변경되지 않기 때문에 기억하기 어려운 값을 저장하는 예약어로도 사용됨<br>
   상수를 예약어로 쓸 때는 전부 대문자로 선언 후 사용

```js
const PI = 3.14159; //수학 상수, 변경 불가능
const API_URL = "https://api.example.com"; //API 기본 URL, 변경되지 않음

const GITHUB_URL = "http://github.com/miloupark";

let userUrl = GITHUB_URL;
```

<br>

## 자료형(Data Type)

'변수의 종류'를 뜻하며 <code>원시 타입</code>, <code>비 원시 타입</code>으로 나뉨

### 원시 타입(Primitive Type)

값이 변경되지 않는 불변성을 가지며, 변수에 직접 값을 저장

<code>Number</code>, <code>BigInt</code>, <code>String</code>, <code>Boolean</code>, <code>null</code>,<code>undefined</code>, <code>symbol</code>

<br>

#### Number

```js
let number = 25;
console.log(number + 5); //30
console.log(number - 5); //20
console.log(number * 5); //125
console.log(number / 5); //5
```

<br>

- 특수한 숫자 값들<br>
  <code>Infinity</code>: 무한대를 나타내는 값<br>
  변수에 하나의 값으로 직접 할당할 수 있고, 숫자를 0으로 나누는 연산을 수행할 경우 반환되는 값<br>

  <code>NaN</code>: "숫자가 아님"을 의미하는 값(Not a Number)<br>
  부정확한 연산을 하게 될 경우 반환되는 값, 문자열을 숫자로 나누는 연산을 하게 될 경우

```js
let number = 25;
number = 10.00123;
number = Infinity; // 변수에 특수한 값도 할당 가능
number = NaN; // 변수에 특수한 값도 할당 가능

let number1 = 10;
console.log(number1 / 0); // Infinity

let number2 = 10;
console.log("자바스크립트" / number2); // NaN
```

<br>

#### BigInt

<code>Number</code>가 "안전하게 표현할 수 없는" 매우 큰 정수나 작은 정수를 다룰 때 사용 <br>
숫자형이 "안전하게 표현할 수 있는" 범위: 정수 범위 2^53 -1 보다 크거나 - (2^53 - 1) 보다 작은 정수 <br>

```js
let big1 = 9007199254740991n; //숫자 뒤에 'n'을 붙여 생성
let big2 = BigInt("9007199254740991"); //BigInt() 함수를 호출하여 생성
```

<br>

- BigInt의 사칙연산<br>
  <code>BigInt</code>는 <code>BigInt</code>끼리만 연산할 수 있으며, 숫자형과는 연산할 수 없음

```js
let big1 = 10n;
let big2 = 5n;
let num = 5;

console.log(big1 + big2); // 15n
console.log(big1 + num); // TypeError: Cannot mix BigInt and other types
```

::: details 2^53 - 1의 의미
<code>Number</code>데이터 타입은 64비트(8바이트) 부동소수점 형식을 사용한다.
이 중 53비트가 정수 부분을 저장하는 데 사용된다.(나머지는 부호와 소수점 위치) 따라서, 이 53비트로 표현할 수 있는 최대 정수는 <code>2^53 -1</code> 이다.<br>
<br>
<code>2^53 -1</code> = 9,007,199,254,740,991 → 최대 정수값.<br>
<code>-(2^53 -1)</code> = -9,007,199,254,740,991 → 최소 정수값.<br>
이 범위를 벗어나면 정밀도 문제가 발생하기 때문에, BigInt가 필요하다.<br>
:::
::: details BigInt는 왜 정밀도 문제를 해결하는지?

<br>
  <code>BigInt</code>는 임의 정밀도를 지원하는 자료형이다. 즉, 숫자가 커질수록 그에 따라 저장공간이 동적으로 늘어나므로, 크기에 제한이 없고 매우 큰 정수를 정확하게 표현할 수 있다. 정수에 대한 정확한 연산을 지원하므로, 크고 작은 숫자 간 연산 시 정밀도를 잃지 않는다.<br>

<code>Number</code>: 64비트 부동소수점 방식을 사용하며, 정수 범위에 한계가 있어 정밀도 문제를 일으킨다. <br>
<code>BigInt</code>: 임의 크기 정수를 지원하여, 정밀도 손실 없이 큰 숫자를 정확하게 표현할 수 있다. 크기에 제한이 없어서 매우 큰 정수도 정확하게 다룰 수 있다.
:::

<br>

#### String

문자열을 변수에 할당할 때는 따옴표로 문자열을 감싸야 한다.

```js
let name1 = "bin"; // 큰 따옴표
let name2 = "bin"; // 작은 따옴표

let name3 = `bin`; // 역 따옴표(백틱)
```

- 큰 따옴표와 작은 따옴표는 같은 기능을 하기 때문에 문자열 할당 시 아무거나 사용해도 됨
- 역 따옴표 `를 사용하면 템플릿 리터럴 (Template Literals) 방식으로 문자열을 표현할 수 있음.
  이 방식은 문자열 안에 변수나 표현식을 쉽게 삽입할 수 있다.

<br>

템플릿 리터럴 방식

```js
let name = "bin";
let greeting = `제 이름은 ${name} 입니다.`;

console.log(greeting); //제 이름은 bin입니다.
```

<br>

#### Boolean

<code>true</code>, <code>false</code> 두 가지 값을 가질 수 있는 자료형. 주로 조건문에서 참과 거짓을 판단할 때 사용되며, 코드에서 참/거짓을 분별하는데 필요한 값을 저장하는데 사용된다.

```js
let isClicked = false; // 버튼이 클릭되었는지 여부
let isOpen = true; // modal이 열렸는지 여부

if (isClicked) {
  console.log("클릭O");
} else {
  console.log("클릭X");
}
```

<br>

#### null

값이 없음을 명시적으로 할당하는 자료형, 존재하지 않거나 알 수 없는 값을 나타낼 때 사용

```js
let name = null;
```

<br>

#### undefined

<code>null</code>과 마찬가지로 값이 없음을 나타내는 자료형이지만, 값이 할당되지 않은 변수에 자동으로 할당되는 값. <br>
<code>undefined</code>는 <code>null</code>처럼 값이 존재하지 않거나 알 수 없는 값일 때가 아니라
변수의 값이 할당되지 않은 상태일 때 자동으로 <code>undefined</code> 값이 할당됨

```js
let name; // 변수 선언만 하고 값은 할당하지 않음
console.log(name); // undefined 출력
```

<br>

#### symbol

```js

```

<br>

### 비 원시 타입(Non-Primitive Typ)

비 원시 타입은 <code>object</code> 객체, <code>array</code> 배열, <code>function</code> 함수와 같은 값들을 포함하는 복합적인 데이터 구조를 의미한다. 원시 타입과 달리, 비 원시 타입은 참조에 의한 전달로 자동하며 여러 개의 값을 한번에 저장할 수 있다. 참조형으로 동작하며, 변경 가능하므로 원본 데이터에 영향을 줄 수 있다.

<br>

#### 객체 <code>Object</code>

객체는 key-value 쌍으로 데이터를 저장하는 구조, 객체의 값은 다른 객체일 수도 있고, 함수나 배열 등의 다양한 타입일 수 있다.

```js
let person = {
  name: "Bin",
  age: 30,
  isEmployed: true,
};
```

<br>

#### 배열 <code>Array</code>

배열은 여러 개의 값을 순서대로 저장할 수 있는 자료형, 숫자 인덱스로 접근할 수 있으며, 배열 안에 다양한 타입의 값을 저장할 수 있다.

```js
let colors = ["red", "green", "blue"];
let mixedArray = [1, "apple", true, [2, 3], { key: "value" }];
```

::: details 숫자 인덱스?
자바스크립트의 배열은 순서가 있는 값들의 집합이다. 배열에서 각 값은 인덱스라는 숫자로 접근할 수 있는데, 인덱스는 배열의 각 요소가 위치한 순서를 나타내는 숫자. 자바스크립트 배열의 인덱스는 0부터 시작.

즉, 배열에서 값을 저장할 때마다 인덱스 번호가 자동으로 부여되고, 이 인덱스를 통해 배열의 특정 값을 참조하거나 수정할 수 있다.

- 배열 선언 및 숫자 인덱스

```js
let fruits = ["apple", "banana", "cherry"];

// 배열에서 첫 번째 요소(apple)에 접근
console.log(fruits[0]); // "apple"

// 배열에서 두 번째 요소(banana)에 접근
console.log(fruits[1]); // "banana"

// 배열에서 세 번째 요소(cherry)에 접근
console.log(fruits[2]); // "cherry"
```

<br>

- 배열에 값 추가 <br>
  배열에서 값을 추가하면, 추가된 값은 그 배열의 끝에 들어가며, 자동으로 다음 숫자 인덱스가 할당된다.

```js
let numbers = [10, 20, 30];

// 새로운 값 추가
numbers[3] = 40; // 인덱스 3에 40을 추가

console.log(numbers); // [10, 20, 30, 40]
```

:::

<br>

#### 함수 <code>Function</code>

함수도 자바스크립트에서 객체의 일종으로 취급된다, 코드의 재사용을 위해 일련의 명령문을 하나의 블록으로 묶어 실행하는 기능을 한다.

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

<br>

#### 비 원시 타입의 특징

- 참조형<br>
  비 원시 타입은 참조에 의한 전달로 작동한다. 즉, 변수에 객체를 할당하면 해당 객체의 주소가 전달되며, 복사된 객체를 수정하면 원본 객체도 영향을 받는다.

```js
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj1과 obj2는 같은 객체를 참조함

obj2.name = "Bob";
console.log(obj1.name); // "Bob" - obj2에서 수정한 값이 obj1에도 영향을 미침
```

<br>

- 변경 가능<br>
  비 원시 타입은 변경 가능하다. 객체의 속성 값을 추가하거나 변경할 수 있으며 배열의 요소로 수정할 수도 있다.

```js
let numbers = [1, 2, 3];
numbers[0] = 100; // 배열의 첫 번째 값 수정
console.log(numbers); // [100, 2, 3]
```

<br>

## 형변환 (Type Conversion)

자료형을 자동으로 변환해주는 형변환이 존재하며, 형변환에는 <code>묵시적 형변환</code>, <code>명시적 형변환</code>이 있음

### 묵시적 형변환 (Implicit Type Conversion)

자바스크립트 엔진이 연산을 수행하기 위해 자동으로 자료형을 변환하는 것. <br>
사칙연산 중 나누기, 곱하기, 빼기 연산은 문자열을 숫자형으로 변환

```js
let num1 = "15";
let num2 = 5;

console.log(num1 / num2); // 3 (문자열"15"가 숫자로 변환됨)
```

<br>

### 명시적 형변환 (Explicit Type Conversion)

직접 내장함수 등을 이용해 값을 유지하며 자료형을 의도적으로 변환시키는 것 <br>
더하기 연산자는 문자열 결합 기능이 있어서 숫자가 문자열로 변환됨.

```js
let num1 = "15";
let num2 = 5;

console.log(num1 + num2); // 155
```

```js
let num1 = "15";
let num2 = 5;

console.log(parseInt(num1) + num2); // 20
// parseInt 괄호 안에 있는 문자열이 숫자로 변경되어 반환

console.log(Number(num1) + num2); // 20
console.log(String(num2) + num1); // "515"
```

<br>

## 연산자 (Operators)

프로그래밍 언어에서 특정 연산을 할 수 있도록 도와주는 기호 <br>
<code>산술연산자</code>, <code>대입 연산자</code>, <code>논리 연산자</code>, <code>비교 연산자</code>, <code>연결 연산자</code>, <code>null 병합 연산자</code>, <code>삼항 연산자</code>

<br>

### 산술 연산자 (Arithmetic Operators)

- 사칙 연산자

```js
let num1 = 10;
let num2 = 5;

console.log(num1 + num2); // 15 덧셈
console.log(num1 - num2); // 5 뺄셈
console.log(num1 * num2); // 50 곱셈
console.log(num1 / num2); // 2 나눗셈
```

<br>

- 나머지 연산자

```js
console.log(num1 % 2); // 0 나머지 연산자
console.log(num2 % 2); // 1 나머지 연산자
```

<br>

- 증감 연산자 <code>++</code>, <code>--</code> <br>
  변수의 값을 증가, 감소 시켜주는 증감 연산자 <br>

  <code>후위 연산++ (postfix)</code>: 현재 값을 먼저 반환한 후 1증가<br>
  <code>++전위 연산 (prefix)</code>: 1을 먼저 증가시키고 증가된 값을 반환

```js
let num = 10;

console.log(num++); // 10 후위연산
console.log(num); // 11 현재 num 값
console.log(++num); // 12 전위연산
```

```js
let num2 = 10;

console.log(num2--); // 10 후위연산
console.log(num2); // 9 현재 num 값
console.log(--num2); // 8 전위연산
```

<br>

### 대입 연산자 (Assignment Operators)

변수에 값을 할당할 때 사용하는 연산자 <code>=</code>

```js
let num = 20;
num = num + 5;

console.log(num); // 25
```

<br>

- 복합 대입 연산자<br>
  산술 연산자와 대입 연산자가 결합한 것, 덧셈 뿐만 아니라 사칙 연산 모두 가능

```js
let num = 20;

num += 5; // num = num + 5
num -= 5; // num = num - 5
num *= 5; // num = num * 5
num / +5; // num = num / 5
```

<br>

### 논리 연산자 (Logical Operators)

논리 연산자는 Boolean 타입 (true / false)을 다룰 때 사용됩니다. <br>
자바스크립트에서는 ! (NOT), || (OR), && (AND) 연산자를 제공함

- NOT 연산자 <code>!</code> <br>
  <code>!</code>는 true를 false로, false를 true로 반전시킴

```js
let isOpen = false;
let isClicked = true;

console.log(!isOpen); // true  (false → true)
console.log(!isClicked); // false (true → false)

// 이중 NOT 연산자 !! 두 번 사용하면 원래 값으로 돌아감
console.log(!!isOpen); // false (false → true → false)
console.log(!!isClicked); // true (true → false → true)
```

<br>

- OR 연산자 <code>||</code> <br>
  하나라도 true이면 true 반환, 모두 false이면 false 반환 <br>

  왼쪽 값이 truthy면 그대로 반환, falsy면 오른쪽 값을 반환하는 특징이 있다.<br>
  Falsy: <code>false</code>, <code>0</code>, <code>""(빈문자열)</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code> <br>
  Truthy: 그 외 모든 값 (<code>true</code>, <code>"hello"</code>, <code>[] 빈 배열</code>, <code>{} 빈 객체</code>)

```js
let a = true || true; // true
let b = true || false; // true
let c = false || true; // true

let d = false || false; // false

console.log(a, b, c, d);
```

```js
// 예시 (기본값 설정)
let userName = "";
let defaultName = "Guest";

console.log(userName || defaultName); // "Guest" (userName이 빈 문자열이므로 기본값 사용)
```

<br>

- AND 연산자 <code>&&</code> <br>
  모든 값이 true일 때만 true 반환, 하나라도 false이면 false 반환
  <br>

```js
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
```

```js
// 예시 (조건이 모두 만족할 때 실행)
let isLoggedIn = true;
let hasPermission = true;

if (isLoggedIn && hasPermission) {
  console.log("Access granted!"); // 두 조건이 모두 true일 때 실행
}
```

<br>

::: tip 논리 연산자 정리

- <code>!</code>: 값을 반전
- <code>||</code>: 하나라도 true이면 true
- <code>&&</code>: 모두 true일 때만 true
  :::

<br>

### 비교 연산자

자바스크립트에서 비교 연산자는 두 값이 같은지, 다른지, 크거나 작은지를 비교하는 연산자

- 일치 연산자 <code>==</code>, <code>===</code> <br>
  <code>==</code> (loose equality 느슨한 비교): 값이 같으면 <code>true</code>를 반환하지만, 필요하면 타입 변환(type coercion)을 수행 <br>
  <code>===</code> (엄격한 비교, strict equality): 타입 변환 없이 값과 타입이 모두 같을 때만 <code>true</code> 를 반환함

```js
let num1 = 10;
let num2 = "10";

console.log(num1 == num2); // true (타입 변환 후 비교)
console.log(num1 === num2); // false (타입까지 비교)
```

<br>

- 불일치 연산자 <code>!=</code>, <code>!==</code> <br>
  <code>!=</code> 타입 변환 허용, <code>!==</code> 타입까지 비교

```js
let num1 = 10;
let num2 = "10";

console.log(num1 != num2); // false (값이 달라서 false)
console.log(num1 !== num2); // true (타입이 달라서 true)
```

<br>

- 대소비교 연산자 <br>
  <code>></code>, <code><</code>, <code>>=</code>, <code><=</code>

```js
let a = 10;
let b = 20;
let c = 10;

console.log(a < b); // true
console.log(a > b); // false
console.log(b >= c); // true
console.log(b > c); // true
console.log(a <= c); // true
console.log(a > c); // false
```

  <br>

### 연결 연산자 (Concatenation Operator)

<code>+</code> 연산자는 숫자뿐만 아니라 문자열과 문자열을 연결함

```js
let a = "안녕";
let b = "자니";

console.log(a + b); // 안녕자니
console.log(a + " " + b); // "안녕 자니"
```

<br>

### null 병합 연산자 (Nullish Coalescing Operator)

변수의 값이 <code>null</code> 또는 <code>undefined</code>일 때만 오른쪽 값을 대입하는 연산자

```js
let num; // 변수는 선언했지만, 값은 할당하지 않음 -> undefined
num = num ?? 20; // num이 null 또는 undefined일 때 오른쪽 값 20을 할당

console.log(num); // 20
```

<br>

- 이미 값이 있는 경우 <br>

```js
let num = 100;
num = num ?? 20; // num이 null 또는 undefined가 아니면 기존 값을 유지

console.log(num); // 100
```

<br>

### 삼항 연산자 (Ternary Operator)

<code>a ? b : c</code> <br>
<code>조건 ? 참일 때 반환할 값 : 거짓일 때 반환할 값</code> <br>
a라는 조건이 참일 경우 b를, 거짓일 경우 c를 수행해라

```js
let num = 100;

console.log(num % 2 === 0 ? "짝수" : "홀수"); // 짝수
```

<br>

- 변수에 값 할당 가능<br>
  삼항연산자는 결과를 변수에 저장할 수도 있음

```js
let num = 7;
let result = num % 2 === 0 ? "짝수" : "홀수";

console.log(result); // "홀수"
```

<br>

## 조건문 (Conditionals)

특정 조건이 충족될 때 해당하는 코드를 실핼하는 문법 <br>
<code>if</code>문, <code>if - else</code>문 , <code>if - else if</code>문, <code>switch/case</code>문

<br>

### <code>if</code>문 <br>

조건이 <code>true</code>일 때 코드 블록 실행

```js
let num = 10;

if (num === 10) {
  console.log("num의 값은 10 입니다."); // num의 값은 10 입니다.
}
```

<br>

### <code>if - else</code>문 <br>

조건이 <code>true</code>이면 첫 번째 코드 블록 실행, <code>false</code>이면 두 번째 코드 블록 실행

```js
let num = 5;

if (num === 10) {
  console.log("num값은 10입니다.");
} else {
  console.log(`num값은 ${num}입니다.`); // ${}템플릿 리터럴 활용을 위해 ``으로 문자열 감싸줌
}
//num값은 5입니다.
```

  <br>

### <code>if - else if</code>문 <br>

여러 조건을 순차적으로 검사하여 해당하는 코드 블록 실행

```js
let num = 5;

if (num === 10) {
  console.log("num값은 10입니다.");
} else if (num < 10) {
  console.log("num값은 10보다 작습니다.");
} else {
  console.log("num값은 10보다 큽니다.");
}

// num값은 10보다 작습니다.
```

<br>

### <code>switch/case</code>문 <br>

변수의 값에 따라 여러 가지 조건을 처리하는 조건문, 주로 값이 여러 개로 나뉘는 경우에 사용됨.

<br>

- 기본 구조

```js
let 변수명 = 값;

switch (변수명) {
  case 값1:
    // 실행할 코드1
    break;
  case 값2:
    // 실행할 코드2
    break;
  case 값3:
    // 실행할 코드3
    break;
  default:
  // 모든 case가 일치하지 않을 때 실행할 코드
}
```

- case 값: 각 조건을 나타내는 값. 변수의 값이 이 값들과 일치할 경우 그에 맞는 코드 실행 <br>
- break: 조건에 맞는 코드 실행 후 switch 문을 빠져나오도록 하는 역할 <br>
- default: 모든 case 조건이 일치하지 않을 때 실행되는 코드

<br>

- 예제

```js
let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("바나나");
    break;
  case "orange":
    console.log("오렌지");
    break;
  case "apple":
    console.log("사과");
    break;
  case "grape":
    console.log("포도");
    break;
  default:
    console.log("다른 과일");
}
// 사과
```

<br>

- <code>break</code> 없이 실행 <br>
  <code>break</code>를 생략하면, 해당 조건에 맞는 <code>case</code>이후 모든 조건이 실행됨. 이를 fall-through 현상이라고 함

```js
let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("바나나");
  case "apple":
    console.log("사과");
  case "grape":
    console.log("포도");
  default:
    console.log("다른 과일");
}

// 사과
// 포도
// 다른 과일
```

<br>

- 주의 사항 <br>
  변수 값과 <code>case</code> 값의 일치 여부: <code>switch</code>문은 값이 정확히 일치해야 실행됨.
  값이 엄격하게 비교되므로, 숫자, 문자열, 불리언 등의 타입도 정확히 일치해야함<br>
  - 예: <code>case "10"</code>, <code>case 10</code>은 다르다.

<br>

## 함수 (Function)

같은 동작을 반복해야 할 때 중복된 코드를 하나로 묶어 반복 없이 효울적으로 실행할 수 있도록 도와줌.
코드의 재사용성과 가독성을 높여주기 때문에 유용함. (하나의 함수로 정의하고 필요할 때마다 호출하여 사용)

<br>

- 비효울적인 코드 예시

```js
let num1 = 10;
let num2 = 15;
let sum = num1 + num2;

console.log(sum); // 25

let num3 = 1;
let num4 = 5;
let sum2 = num3 + num4;

console.log(sum2); // 6
```

<br>

- 함수 사용하여 중복 제거

```js
function add(num1, num2) {
  console.log(num1 + num2); // 두 숫자를 더한 값을 출력
}

add(10, 15); // 25 출력
add(1, 5); // 6 출력
```

<code>function</code> 키워드 뒤에는 함수 이름 작성, 그 뒤에 매개변수를 괄호 안에 작성<br>
<code>add</code> 함수는 두 숫잘르 더하는 기능 수행<br>

매개변수란(Parameters), 함수를 호출할 때 외부에서 전달받을 값을 저장하는 변수<br>
인수(Arguments) 함수를 호출할 때 실제로 전달하는 값 (add(10, 15)-> 10, 15가 인수)

<br>

- 함수의 반환값 (return) <br>
  <code>return</code>문을 사용해 함수 실행 결과를 반환하여 다른 작업에 활용. 즉 함수 결과를 저장하거나 출력할 수 있도록 반환하는 역할. <code>return</code>이 없으면 함수 실행 후 값이 사라져버림

```js
function add(num1, num2) {
  return num1 + num2; // 더한 값을 반환
}

console.log(`두 숫자를 더한 결과는 ${add(10, 14)} 입니다.`);
// 두 숫자를 더한 결과는 24 입니다.
```

::: details return이 없는 경우

- 출력은 되지만 결과값을 저장하거나 활용할 수 없음

```js
function add(num1, num2) {
  console.log(num1 + num2); // 결과를 단순히 출력만 함
}

let result = add(10, 5); // 결과를 변수에 저장하려고 하지만 undefined
console.log(result); // undefined 출력 (값을 반환하지 않음)
```

:::
::: details return을 사용한 경우

- 함수 실행 결과(15)를 return을 통해 반환했기 때문에, 이후에도 활용 가능

```js
function add(num1, num2) {
  return num1 + num2; // 결과값을 반환
}

let result = add(10, 5); // 반환된 값을 변수에 저장
console.log(result); // 15 출력
```

:::

<br>

### 얼리 리턴(Early Return) 패턴

<code>얼리 리턴</code>패턴은 함수에서 불필요한 중첩을 줄이고, 가독성을 높이는 방법이다. 특정 조건을 만족하면 <code>return</code> 하여 함수 실행을 종료하기 때문에 코드가 더 단순해짐.

<br>

- 가독성이 떨어지는 예시 <br>

```js
function func(num) {
  if (num > 0) {
    if (num >= 10) {
      console.log("num의 값이 10보다 크거나 같습니다.");
    } else {
      console.log("num의 값이 0보다 크고 10보다 작습니다.");
    }
  } else if (num === 0) {
    console.log("num의 값이 0입니다.");
  } else {
    console.log("num의 값이 0보다 작습니다.");
  }
}

func(15);

// num의 값이 10보다 크거나 같습니다.
```

<br>

- 얼리 리턴 패턴 적용

```js
function func(num) {
  if (num === 0) return "num의 값이 0입니다.";
  if (num < 0) return "num의 값이 0보다 작습니다.";
  if (num >= 10) return "num의 값이 10보다 크거나 같습니다.";

  return "num의 값이 0보다 크고 10보다 작습니다";
}

console.log(func(15));

// num의 값이 10보다 크거나 같습니다.
```

<br>

### 즉시 실행 함수(IIFE, Immediately Invoked Function Expression)

즉시 실행 함수란 함수를 선언하자마자 즉시 실행되는 함수를 의미함, 따로 호출하지 않아도 자동으로 실행된다.

<br>

- 기본적인 함수 실행 방식

```js
function print() {
  console.log("자바스크립트1");
}

print(); // 함수 호출
```

<br>

- 즉시 실행 함수 (IIFE) <br>
  함수 선언과 동시에 실행됨, 전역 범위를 오염시키지 않고 독립적인 실행 가능

```js
(function () {
  console.log("자바스크립트2");
})();
```

<br>

- 코드 실행 순서 예시 <br>
  함수는 선언된 위치가 아니라 호출된 순간 실행됨

```js
function func() {
  console.log("2");
  console.log("3");
} // func함수를 선언했지만 호출은 되지 않음

console.log("1");
func();
console.log("4");

// 1
// 2
// 3
// 4
```

<br>

### 지역변수 (Local Variable)

함수 내부에서 선언된 변수, 해당 함수의 블록 <code>{}</code> 내부에서만 유효하며 함수 외부에서는 접근 불가능

```js
function add(num1, num2) {
  let sum = num1 + num2; // 지역변수 sum
  return sum;
}

add(10, 15);
console.log(sum); // sum is not defined (에러)
```

- <code>sum</code> 변수는 <code>add</code> 함수 내부에서 선언된 지역변수
- 지역변수는 함수 내부에서만 접근 가능
- 함수 외부에서 <code>console.log(sum);</code>을 실행하면 에러 발생
- 즉, 지역변수는 함수가 실행될 때만 존재하고, 함수가 끝나면 사라짐

<br>

### 전역변수 (Global Variable) (=외부변수)

함수 외부에서 선언된 변수, 스크립트 어디서든 접근 가능, 함수 내부에서도 사용 가능

```js
let sum = 0; // 전역변수 선언

function add(num1, num2) {
  sum = num1 + num2; // 전역변수 sum에 값을 할당
}

add(10, 15);
console.log(sum); // 25
```

- <code>sum</code> 변수는 함수 외부에서 선언됨, <code>add</code> 함수 내부에서도 접근 가능
- <code>add(10, 15);</code> 호출 시, <code>sum = 10 + 15;</code>로 값이 변경됨
- 함수 종료 후에도 <code>sum</code> 변수는 여전히 존재하며, <code>console.log(sum);</code> 에서 25 출력
- 즉, 전역변수는 어디서든 접근 가능하며 함수 내부에서도 수정할 수 있음

<br>

## 스코프(Scope)

자바스크립트에서는 변수는 어디에서 선언되었는지에 따라 접근 가능 여부가 달라짐. 이러한 변수의 접근 범위를 스코프(Scope)라고 함

### 스코프 종류

### 전역 스코프 Global Scope

어디에서든지 해당 변수에 접근 가능

<br>

### 지역 스코프 Local Scope

지역을 벗어난 곳에서는 접근 불가능
