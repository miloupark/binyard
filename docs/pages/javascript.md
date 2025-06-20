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

## 자료형 (Data Type)

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

이스케이프 표현

- <code>\\'</code> 작은따옴표
- <code>\\"</code> 큰따옴표
- <code>\\n</code> 줄바꿈
- <code>\\t</code> 탭

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

변수, 함수가 갖게 되는 유효범위

### 스코프 종류

### 전역 스코프 Global Scope

어디에서든지 해당 변수에 접근 가능

### 지역 스코프 Local Scope

지역을 벗어난 곳에서는 접근 불가능

```js
const num = 100; // 전역 스코프

function print() {
  const num = 1000; // 지역 스코프
  console.log(`지역 스코프 ${num}`);
}

print(); // 지역 스코프 1000
console.log(`전역 스코프${num}`); // 전역 스코프 100
```

<br>

#### 블록 스코프 Block Scope

```js
function print() {
  for (let i = 0; i < 10; i++) {
    console.log(`블록 스코프 : ${i}`); // 블랙 스코프 : 0 ~ 9
  }
  console.log(i); // error
}

print();
```

- 같은 블록에서만 접근 가능한 범위
- 블록이란 중괄호 내부를 의미하고 블록 내부에 선언된 변수는 해당 블록에서만 접근 가능
- <code>let</code>, <code>const</code>는 블록 내부에서만 유효
- <code>var</code>는 블록 스코프를 따르지 않고 함수 스코프를 따름

<br>

#### 함수 스코프 Function Scope

```js
function print() {
  for (var i = 0; i < 10; i++) {
    console.log(`블록 스코프 : ${i}`); // 블랙 스코프 : 0 ~ 9
  }
  console.log(i); // 10
}

print();
```

- <code>var</code>는 함수 스코프를 따름<br>
  <code>var</code>는 블록을 무시하고 함수 전체에서 접근 가능하므로 원치 않는 값 변경이나 예기치 못한 오류가 발생할 위험이 큼

<br>

::: details let과 var는 어떤 차이 ?

- 유사하게 동작하는 키워드

```js
let num1 = 10;
var num2 = 20;

num1 = 100; // 값 변경
num2 = 200; // 값 변경

console.log(num1); // 100
console.log(num2); // 200
```

<code>var</code>는 오래된 변수 선언 키워드이며 <code>let</code>과 <code>const</code>를 사용하는 것이 권장됨

<br>

- 변수 선언 후 동일한 이름의 변수를 다시 선언

```js
// let
let num1 = 10;
let num1 = 100;

console.log(num1); // error (num1 already been declared.)

// var
var num2 = 20;
var num2 = 200;

console.log(num2); // 200 (마지막 할당된 200 출력됨)
```

<code>var</code> 키워드로 변수 선언 시 같은 이름의 변수를 여러 번 다시 선언할 수 있음, 기존에 선언되었던 동일한 변수는 덮어씌워짐. 이로 인해 특정 변수가 이미 선언되었는지 판단하기 어렵고, 변수의 사용 범위를 명확히 파악하기 힘들어져 예상치 못한 오류가 발생할 가능성이 높아짐
:::

## 호이스팅 (Hoisting)

변수와 함수 선언이 코드 실행 전에 먼저 메모리에 올라가는 동작을 의미.
즉, 코드에서 선언된 변수나 함수가 해당 범위의 최상단으로 끌어올려진 것처럼 동작함

<br>

### 함수 호이스팅

```js
print(); // hello world

function print() {
  console.log("hello world");
}
```

함수 선언은 호이스팅되기 때문에, 함수가 정의된 위치와 관계없이 선언된 함수는 호출 전에 사용할 수 있음. 자바스크립트 엔진이 코드 실행 전에 함수 선언을 메모리에 올려놓기 때문. 그래서 <code>print()</code>를 호출할 때 이미 함수가 정의되어 있어서 <code>"hello wolrd"</code>가 정상적으로 출력됨

<br>

### 변수 호이스팅

#### 변수 호이스팅

```js
console.log(num); // undefined

var num = 10;
```

자바스크립트 엔진이 위 코드를 아래와 같이 해석

```js
var num;
console.log(num); // undefined

num = 10; // 변수 초기화(값을 할당하는 과정)
```

- 변수 호이스팅은 자바스크립트 엔진이 코드 실행 전에 변수 선언을 최상단으로 끌어올리기 때문에, 변수 선언이 코드에 어디에 있든 실행 시 변수는 이미 존재하게 된다. 하지만 값 할당은 호이스팅 되지 않기 때문에, 변수는 <code>undefined</code>로 초기화된다.<br>
- <code>var num</code>이라는 변수 선언은 메모리 상에서 호이스팅되어, <code>num</code>변수는 메모리에 할당되지만, 값은 <code>undefined</code>로 초기화된다. 자바스크립트는 변수 선언문만 해당 스코프의 최상단으로 끌어올리고 값 할당은 끌어올리지 않는다.

<br>

#### 동일 코드 <code>let</code>, <code>const</code>로 변경

```js
console.log(num); // undefined
var num = 10;

console.log(num1); // error
let num1 = 10;

console.log(num2); // error
const num2 = 15;
```

- TDZ, Temporal Dead Zone: 일시적 사각지대, 변수를 사용하는 것이 허용되지 않는 공간 <br>
- <code>let</code>, <code>const</code>는 변수 선언이 호이스팅되지만, 변수의 초기화가 완료될 때까지 <code>TDG</code>에 있기 때문에 호이스팅이 발생하지 않는 것처럼 보인다. <br>
  이유는 <code>var</code>는 변수 선언 시 메모리에 공간을 할당하지만, <code>let</code>, <code>const</code>는 변수가 초기화될 때까지 <code>TDZ</code>에 머무르며, 이 기간 동안 메모리 공간이 확보되지 않아 접근할 수 없다.

## 함수 표현식 (Function Expression)

### 함수 선언식

```js
function print() {
  console.log("hello world");
}
```

### 함수 표현식

```js
let print = function () {
  console.log("hello world");
};
```

<code>print</code>라는 변수에 hello world를 출력하는 함수를 하나의 값처럼 할당. <br>
<code>print</code>는 변수지만 함수를 값으로 가지고 있기 때문에 <code>print()</code> 함수를 호출하는 것과 동일하게 호출 가능.

<br>

### 함수 선언식과 함수 표현식의 차이점

```js
// 함수 선언식: 호이스팅 O
// print 함수를 함수 선언식을 통해 작성하고 print 함수 선언문 전에 함수를 호출

print(); // hello world

function print() {
  console.log("hello world");
}
```

```js
// 함수 표현식: 호이스팅 X

print(); // print is not a function

let print = function () {
  console.log("hello world");
};

// 표현식은 호이스팅의 대상에 해당되지 않기 때문에, 함수 표현식으로
// 생성된 함수들을 호출할 경우에는 함수의 선언문을 호출문보다 위쪽에 작성해주어야함

let print = function () {
  console.log("hello world");
};

print(); // hello world
```

<br>

### 함수 표현식을 화살표형 함수를 통해 더 간결하게 작성

```js
// 기존 함수 표현식
const print = function () {
  console.log("hello world");
};

// 화살표 함수
const print = () => {
  console.log("hello world");
};

print(); // hello world
```

- <code>=></code>를 통해 변수의 함수를 값으로 할당 <br>
- 화살표 함수는 함수 표현식처럼 변수의 이름을 통해 함수를 호출할 수 있다.
- 또한 호이스팅의 대상이 아니기 때문에 순서를 잘 지켜서 작성해야한다.

<br>

### 콜백함수

다른 함수에 인자로 전달되어 나중에 특정 시점에 실행되는 함수<br>
다시 말해, 어떤 함수의 실행이 끝난 후나 특정 이벤트가 발생했을 때 "나중에 호출될" 함수

#### 콜백함수 특징

- 함수를 다른 함수의 인자로 전달
- 전달된 함수는 즉시 실행되지 않고, 특정 조건이 충족되면 나중에 호출됨
- 자바스크립트에서 비동기 프로그래밍의 기본 패턴으로 사용됨

예시 )

```js
// doSomething 함수는 작업을 수행한 후 콜백 함수를 호출합니다
function doSomething(callback) {
  console.log("작업 수행 중...");
  // 작업이 완료된 후 콜백 함수 실행
  callback();
}

// 콜백 함수를 전달하여 함수 호출
doSomething(function () {
  console.log("작업 완료 후 실행됨!");
});
```

```js
// console
작업 수행 중...
작업 완료 후 실행됨!
```

::: details 콜백 함수 이해하기
인강을 들어도 이해가 어려워 gpt와 claude의 도움받기..

1. 먼저 <code>doSomething</code>이라는 함수를 정의, 이 함수는 callback이라는 매개변수를 받음

```js
function doSomething(callback) {
  // 함수 내용
}
```

2. <code>doSomething</code> 함수 내부에서는 두 가지 일을 한다 :

- "작업 수행 중..." 메시지를 콘솔에 출력
- 매개변수로 받은 callback 함수를 실행

```js
console.log("작업 수행 중...");
callback(); // 전달받은 함수를 여기서 실행
```

3. 그 다음, <code>doSomething</code> 함수를 호출하면서 익명 함수(anonymous function)를 인자로 전달. 이 익명 함수는 <code>doSomething</code> 함수의 <code>callback</code> 매개변수로 전달

```js
doSomething(function () {
  console.log("작업 완료 후 실행됨!");
});
```

4. 실행 순서
   <code>doSomething</code> 함수가 호출 > "작업 수행 중..." 메시지 콘솔에 출력 > <code>callback</code>이 실행되어 "작업 완료 후 실행됨!" 메시지 콘솔에 출력

실행 결과:

```js
// console
작업 수행 중...
작업 완료 후 실행됨!
```

:::

```js
function add(num1, num2) {
  console.log(num1 + num2);
}

add(10, 15); // 25
```

```js
function intro(name, callback) {
  console.log(`안녕하세요 ${name} 입니다.`);
  callback(); //finish();
}

function finish() {
  console.log("감사합니다.");
}

start("혜빙", finish);
```

- finish 함수처럼 다른 함수의 인수로 전달된 함수를 콜백 함수라고 부른다.

## 객체 (Object)

- 비원시 타입 자료형으로 한 번에 여러 개의 데이터를 <code>키-값(Key-Value)</code> 쌍으로 저장할 수 있는 자료구조이다. 객체는 변수와 배열과 달리 속성(property)과 메서드(method)를 가질 수 있다.

### 객체 생성 방법

- 객체 생성자 사용

```js
let animal = new dog();

console.log(animal); // {}
```

<code>new</code>라는 키워드를 이용해 객체 생성할 수 있다.

<br>

- 객체 리터럴 방식

```js
let animal = {};

console.log(animal); // {}
```

<code>{}</code> 중괄호를 이용해 객체를 생성하며 가장 많이 사용되는 방식이다.

<br>

### 객체의 속성 (property)

객체의 중괄호 내부에 들어갈 데이터로 <code>키-값(Key-Value)</code> 쌍으로 이루어져 있는 데이터

#### 객체의 속성 <code>key : value</code>

```js
let person = {
  name: "바켸빈", // 객체의 프로퍼티
  age: 20, // 객체의 프로퍼티
};

console.log(person); // {name: "바켸빈", age: 20}
```

- <code>person</code>이라는 이름의 객체 안에 프로퍼티 즉 속성 작성, key <code>:</code> value

<br>

#### 객체의 속성에 여러 개의 값 추가 가능, key는 고유해야 한다.

```js
let person = {
  name: "바켸빈",
  phone: undefined,
  age: 20,
  etc: function () {
    console.log("hello world");
  },
};
```

- 객체에는 속성을 몇 개를 넣어도 value 값으로 어떠한 자료형을 넣어도 상관 없다. 하지만 이 객체의 값을 찾을 때에는 key 값을 통해 찾기 때문에 속성의 key 값은 고유해야한다.

<br>

#### 객체의 속성 접근 방법 (객체의 값 꺼내기)

- 점 표기법

```js
let person = {
  name: "바켸빈",
  age: 20,
  pet: "dog",
};

console.log(person.name); // 바켸빈
console.log(person.age); // 20
console.log(person.pet); // dog
```

<br>

- 괄호 표기법 (동적 접근 가능)<br>
  객체의 속성에 동적으로 접근할 때 사용한다. 키 값이 고정적이지 않고 변수나 함수의 매개변수 값에 의해 결정될 때 유용하다.<br>
  대괄호 안에 문자열을 넣을 때는 큰 따옴표나 작은 따옴표를 써서 문자열임을 명시해야 한다.

```js
let person = {
  name: "바켸빈",
  age: 20,
  pet: "dog",
};

console.log(person["name"]); // 바켸빈
console.log(person["age"]); // 20
console.log(person["pet"]); // dog
```

```js
// 객체의 키 값을 매개변수가 결정하는 코드
let person = {
  name: "바켸빈",
  age: 20,
  pet: "dog",
};

const getValue = (key) => {
  console.log(person[key]);
};

getValue("name"); // 바켸빈

// getValue 함수의 인수로 person 객체의 속성 키 값인 name을 넘겨주게 되면
// 출력 결과 name에 해당하는 바켸빈이라는 값이 출력
```

<br>

#### 객체 프로퍼티 추가, 수정, 삭제

- 객체 프로퍼티 추가

```js
let person = {
  name: "바켸빈",
  age: 20,
  pet: "dog",
};

// 점 표기법으로 전화번호 프로퍼티 추가
person.phone = "010-0000-0000";

// 괄호 표기법으로 키 프로퍼티 추가
person["height"] = 160;

console.log(person);
// {name: "바켸빈", age: 20, pet: "dog", phone: "010-0000-0000", height: 160}
```

<br>

- 객체 프로퍼티 추가

```js
let person = {
  name: "바켸빈",
  age: 20,
  pet: "dog",
};

// 점 표기법으로 나이 프로퍼티 수정
person.age = 30;

// 괄호 표기법으로 펫 프로퍼티 수정
person["pet"] = "cat";

console.log(person);
// {name: "바켸빈", age: 30, pet: "cat"}
```

<br>

- 상수로 선언된 객체 프로퍼티 수정

```js
const person = {
  name: "바켸빈",
  age: 20,
  pet: "dog",
};

person.age = 30;
person["pet"] = "cat";

console.log(person);
// {name: "바켸빈", age: 30, pet: "cat"}
```

<code>const</code>로 선언된 객체의 프로퍼티 값 수정 가능 이유 <br>
<code>const</code>로 선언된 상수는 값이 변경되지 않는다고 배웠지만, 객체의 프로퍼티 값은 수정할 수 있다. 이는 객체 프로퍼티 값을 수정하는 것이 객체 자체를 수정하는 행위가 아니기 때문. 객체는 생성될 때 고유한 참조 ID를 갖게 되며, 객체의 프로퍼티 값을 변경하는 것은 이 참조 ID를 변경하는 것이 아니다. 따라서, 객체의 프로퍼티 값은 <code>const</code>로 선언된 객체에서도 변경이 가능하다.

<br>

- 객체의 고유한 아이디까지 변경하는 경우 오류발생

```js
const person = {
  name: "바켸빈",
  age: 20,
  pet: "dog"
};

// 오류 발생! person의 참조 자체를 변경하려고 할 때
person = {
  pet: "cat";
}; // TypeError: "person" is read-only

// 하지만 객체의 프로퍼티 값은 수정 가능
person.pet = "cat";  // 오류 없이 동작
console.log(person);  // { name: "바켸빈", age: 20, pet: "cat" }
```

위와 같이 <code>person</code>객체 자체에 새로운 프로퍼티를 저장하려 한다면 이것은 객체의 고유한 아이디를 변경하게 되는 것이므로 <code>person</code>은 읽기 전용이라는 에러가 발생하게 된다. <br>
<code>const</code>로 선언된 객체는 객체 자체의 참조를 변경할 수 없다. 즉, <code>person</code> 객체가 참조하고 있는 메모리 주소를 다른 객체로 변경하려고 하면 오류 발생. 하지만 객체의 프로퍼티 값 수정은 참조를 변경하는 게 아니라 객체 내부의 내용을 바꾸는 것이므로 가능.

그래서 <code>참조</code>가 뭐지?<br>
참조는 객체가 저장되는 메모리 주소를 의미한다. 자바스크립트에서 객체와 배열은 참조 타입(비원시타입)이기 때문에, 변수에 객체나 배열을 할당하면 그 변수는 객체의 메모리 주소(참조)를 저장하게 된다.

<br>

- 프로퍼티 삭제

```js
const person = {
  name: "바켸빈",
  age: 20,
  pet: "dog",
};

// 점 표기법으로 삭제
delete person.pet;

// 괄호 표기법으로 삭제
delete person["age"];

console.log(person); // {name: "바켸빈"}
```

<br>

- 객체 프로퍼티의 값이 함수일 때 : 메서드

```js
const person = {
  name: "바켸빈",
  age: 20,
  pet: "dog",
  print: function () {
    console.log("hello world");
  },
};

person.print(); // hello world
person["print"]; // hello world

console.log(person);
```

객체의 프로퍼티 값이 함수일 때, 이를 메서드라고 부른다. 메서드는 객체 내부의 다른 프로퍼티나 값을 다룰 수 있는 기능이 있다.

<br>

- 객체 메서드에서 this 사용하기

```js
const person = {
  name: "바켸빈",
  age: 20,
  pet: "dog",
  print: function () {
    console.log(`제 이름은 ${this.name} 입니다.`); // person 객체의 name 프로퍼티를 가리킨다.
  },
};

person.print(); // 제 이름은 바켸빈 입니다.
```

객체의 메서드에서 <code>this</code>라는 키워드를 사용하여, 메서드 내부에서 객체 자신을 참조할 수 있다.
출력 결과 this.name 값이 person 객체의 네임에 해당하는 값이 할당되어 제 이름은 바켸빈 입니다. 라는 문장이 출력된다.<br>
<code>this</code>키워드 역할은 메서드가 속한 객체를 가리키고, 객체 내에서 메서드를 호출할 때 <code>this</code>는 해당 메서드를 호출한 객체를 자동으로 참조하게 된다.

<br>

#### 객체 정리

- 객체 생성 방법 <br>
  자바스크립트에서 객체는 두 가지 방법으로 생성할 수 있다:<br> -객체 리터럴: {} (일반적으로 더 많이 사용) -객체 생성자: new Object() <br>

- 객체의 프로퍼티 <br>
  객체의 중괄호 {} 안에 있는 값들은 프로퍼티(혹은 속성)이라고 부른다.<br>
  각 프로퍼티는 키와 값(밸류)로 이루어져 있다.

- 프로퍼티의 키와 밸류 <br>
  객체의 프로퍼티 키는 고유해야 한다. 즉, 같은 객체 내에서 두 개 이상의 프로퍼티가 동일한 키 값을 가질 수 없다.<br>
  반면, 밸류(값)는 어떠한 자료형으로 작성해도 상관 없다. 예를 들어, 숫자, 문자열, 배열, 객체 등 다양한 자료형을 사용할 수 있다.

- 메서드<br>
  객체의 프로퍼티 값이 함수인 경우, 이를 메서드라고 부른다.<br>
  메서드는 function 키워드를 사용하여 정의할 수 있으며, 객체의 다른 프로퍼티를 참조할 때는 this 키워드를 사용하여 해당 객체의 속성에 접근할 수 있다.

## 배열 (Array)

배열은 여러 개의 값을 하나의 변수에 저장할 수 있는 자료구조이다. 자바스크립트에서 배열은 값의 순서가 중요한 데이터 집합을 관리하는 데 사용된다. 배열은 숫자, 문자열, 객체 등 다양한 타입의 값을 저장할 수 있으며, 각 값은 <code>index</code>를 통해 접근할 수 있다.

### 배열의 특징

- 0부터 시작하는 인덱스: 배열의 인덱스는 항상 0부터 시작
- 순서가 있는 데이터: 배열의 각 요소는 순서대로 저장되며, 그 순서를 유지
- 동적 크기: 자바스크립트에서 배열은 크기가 고정되지 않으며, 필요에 따라 크기가 자동으로 조정

### 배열 생성

- 생성자를 이용하여 배열 생성

```js
let arr = new Array();

console.log(arr); // []
```

```js
let array1 = new Array(1, 2, 3);
let array2 = new Array(3);

console.log(array1); // [1, 2, 3]
console.log(array2); // [,,]
```

배열 생성자의 값을 할당할 때에는 특정 요소를 넣으려면 여러 개의 값을 넣고 원하는 크기의 공간을 할당하려면 원하는 공간의 크기를 괄호 안에 작성해야한다. 배열 생성자에 하나의 숫자만 넣으면, 그 숫자만큼 빈 공간을 가진 배열이 생성된다.

<br>

- 배열 리터럴 사용하여 배열 생성

```js
let array1 = [];

console.log(array1); // []
```

```js
let array1 = [1, 2, 3];
let array2 = [3];

console.log(array1); // [1, 2, 3]
console.log(array2); // [3]
```

배열 리터럴을 통해 배열을 생성하고 배열의 값을 넣게되면 그 값이 순서대로 배열 요소로 저장된다. 배열 요소들은 객체 프로퍼티 값과 마찬가지로 타입에 상관없이 모든 요소들을 넣어줄 수 있다. <br>

::: details 배열 생성자와 배열 리터럴 차이

- 배열 생성자

```js
let array1 = new Array(1, 2, 3);
let array2 = new Array(3);

console.log(array1); // [1, 2, 3]
console.log(array2); // [,,]
```

크기만 지정할 때: <code>new Array(3)</code>처럼 숫자만 넣으면, 해당 숫자 크기의 빈 공간을 가진 배열이 생성된다. <br>
값을 지정할 때: <code>new Array(1, 2, 3)</code>처럼 여러 값을 넣으면, 그 값들이 배열의 요소로 들어간다.

- 배열 리터럴

```js
let array1 = [1, 2, 3];
let array2 = [3];

console.log(array1); // [1, 2, 3]
console.log(array2); // [3]
```

배열 리터럴을 사용한 배열 생성은 배열 안에 요소를 바로 넣는 것과 같다. 즉 []안에 값을 넣으면 그 값들이 배열의 요소로 들어간다.
:::
<br>

- 배열 요소에 다양한 자료형 넣기

```js
let arr = [
  { name: "바켸빈" },
  1,
  "array",
  function () {
    console.log("hello world!");
  },
  null,
  undefined,
];

console.log(arr); // [object, 1, "array", f (), null, undefined]
```

### 배열 요소 접근

배열은 데이터가 위치한 순서인 인덱스를 통해 배열 요소에 접근한다.

- 배열 요소 출력

```js
let arr = [1, "hello", null];

console.log(arr[0]); // 1
console.log(arr[1]); // "hello"
console.log(arr[2]); // null
```

- 배열 요소 추가 <br>
  배열 내장 함수, 즉 <code>push()</code>메서드를 사용한다. push()는 배열의 이름 뒤에 작성되며 push()에 넘겨준 값을 해당 배열의 맨 마지막 요소로 추가하는 내장함수

```js
let arr = [1, "hello", null];

arr.push(10);
console.log(arr); // [1, "hello", null, 10]
```

<br>

- 배열 요소 추가: 배열 요소의 가장 앞쪽에 특정 값을 추가하고 싶을 때 <br>
  <code>unshift()</code>

```js
let arr = [1, "hello", null];

arr.unshift(5);
console.log(arr); // [5, 1, "hello", null]
```

<br>

- 배열 요소 수정<br>

```js
let arr = [1, "hello", null];

arr[0] = 4;
arr[2] = undefined;

console.log(arr); // [4, "hello", undefined]
```

<br>

- const로 선언된 배열의 요소 변경

```js
const arr = [1, "hello", null];

arr[0] = 4;
arr[2] = undefined;

console.log(arr); // [4, "hello", undefined]
```

자바스크립트에서 배열은 객체로 분류되는 자료형으로 객체라고 볼 수 있기 때문에 객체와 동일하게 const로 선언된 배열의 요소를 수정하더라도 배열 자체의 참조를 수정하는 것이 아니어서 const로 선언된 배열의 요소 또한 수정 가능하다.<br>
배열 자체를 다른 배열로 할당하는 것은 불가능하다. arr = [5, 6, 7]과 같은 재할당은 에러를 발생시킨다.

<br>

- 배열 요소 삭제 : 배열의 마지막 요소를 삭제하기 위해서는 <code>pop()</code>이라는 배열 내장함수를 사용

```js
const arr = [1, "hello", null];

arr.pop();
console.log(arr); // [1, "hello"]
```

<br>

- 배열 요소 삭제 : 배열의 첫번째 요소를 삭제하기 위해서는 <code>shift()</code>이라는 배열 내장함수를 사용

```js
const arr = [1, "hello", null];

arr.shift();
console.log(arr); // ["hello", null]
```

<br>

- 배열의 길이<br>
  배열은 <code>length</code>라는 프로퍼티에 자신의 크기를 가지고 있다.

```js
const arr = [1, "hello", null];

console.log(arr.length); // 3
```

```js
const arr = [1, "hello", null];

console.log(arr.length); // 3
```

## 반복문 (Loop)

특정 작업을 반복적으로 수행할 때 사용

### for문

조건에 따라 일정 횟수만큼 같은 코드를 반복 실행해야할 때 사용 <br>

#### 문법

```js
for (초기화식; 조건식; 증감식) {
  // 실행할 코드
}
```

```js
for (let i = 1; i < 6; i++) {
  console.log(i);
}

// 1
// 2
// 3
// 4
// 5
```

- 초기화식: <code>i</code>의 초기값을 <code>1</code>로 할당
- 조건식: <code>i < 6</code>이 참이면 <code>console.log(i)</code> 실행하여 현재 i값 출력
- 증감식: <code>i++</code>로 <code>i</code>값을 1증가
- 조건을 만족하는 동안 위 과정 반복, <code>i</code>가 6이 되면 조건을 만족하지 않으므로 반복문 종료

#### ex) 숫자 5부터 1까지 순서대로 출력

```js
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 5
// 4
// 3
// 2
// 1
```

### while문

특정 조건이 참인 동안 반복적으로 코드를 실행한느 반복문

#### 문법

```js
while (조건식) {
  // 실행할 코드
}
```

- 조건식이 <code>true</code>인 동안 <code>{}</code>안의 코드가 반복 실행
- 조건식이 <code>false</code>가 되면 반복문 종료

#### ex) 숫자 5부터 1까지 순서대로 출력

```js
let i = 1;

while (i < 6) {
  console.log(i);
  i++;
}

// 1
// 2
// 3
// 4
// 5
```

while문 괄호 안의 조건이 참인 동안 내부의 코드가 계속 실행되므로, 반복 횟수를 결정하는 변수를 직접 변경해야 한다. 또한 조건이 false(거짓)가 되어 반복이 정상적으로 종료될 수 있도록 주의하여 작성해야한다.

<code>for문</code>, <code>while문</code>은 자바스크립트에서 배열의 모든 요소들에 접근해야 할 때 유용하게 사용됨

- <code>for문</code>은 특정 변수의 초기값과 조건문을 설정한 후, 조건문을 비교하여 참이면 변수의 값을 증감시키며 코드를 반복 수행한다.
- <code>white문</code>은 단순히 괄호 안의 조건문을 확인하여 코드를 반복 수행한다.

<br>

#### for문을 사용한 배열의 모든 요소 순회

```js
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

#### 객체의 프로퍼티 반복문을 활용해 순회 가능

#### 1. 객체를 배열로 변경하는 방법

```js
let person = {
  name: "홍길동",
  age: 30,
  height: 180,
};

console.log(object.keys(person)); // ["name", "age", "height"]
```

- 객체를 배열로 변경 object.keys 사용, 자바스크립트의 Object라는 객체 메서드로 매개 변수로 받은 객체의 키들을 모두 찾아 배열의 형태로 반환하는 객체 메서드
- 객체를 키값들로만 이루어진 배열로 변환

#### for문을 사용해 객체의 프로퍼티들 모두 순회

```js
let person = {
  name: "홍길동",
  age: 30,
  height: 180,
};

let newArray = object.keys(person);

for (let i = 0; i < newArray.length; i++) {
  let nowKey = newArray[i]; // person 객체의 key 값을 nowKey라는 변수를 통해 얻을 수 있음
  console.log(`key: ${nowkey}, value: ${person[nowKey]}`);
  // key: name, value: 홍길동
  // key: age, value: 30
  // key: height, value: 180
}

console.log(object.keys(person)); // ["name", "age", "height"]
```

- <code>newArray</code>라는 배열의 요소, 즉 person객체의 키값을 알고 있기 때문에 객체의 프로퍼티들을 모두 출력할 수 있다.

#### 2. 객체를 배열로 변경하는 방법 <code>Object.values</code>

<code>Object.values</code> 메서드는 매개변수로 객체를 넘기면 해당 객체의 values들을 모두 찾아 배열로 반환함

```js
let person = {
  name: "홍길동",
  age: 30,
  height: 180,
};

let newArray = Object.valuse(person);

for (let i = 0; i < newArray.length; i++) {
  console.log(`value: ${newArray[i]}`);
  // value: 홍길동
  // value: 30
  // value: 180
}

console.log(object.values(person)); // ["홍길동", 30, 180]
```

#### 3. 객체를 배열로 변경하는 방법 <code>Object.entries</code>

<code>Object.entries</code> 메서드는 객체를 받으면 키와 value 쌍의 형태로 배열을 반환함

```js
let person = {
  name: "홍길동",
  age: 30,
  height: 180,
};

// 객체를 배열로 변환
let newArray = Object.entries(person);

for (let i = 0; i < newArray.length; i++) {
  console.log(`key: ${newArray[i][0]}, value: ${newArray[i][1]}`);
  // console.log() -> 반복문 안에서 실행 (newArray 안에 있는 값을 하나씩 꺼내서 보여줌)
  // key: name, value: 홍길동
  // key: age, value: 30
  // key: height, value: 180
}

// console.log() -> 배열 전체 출력 (Object.entries(person)를 한 번에 출력하는 코드)
console.log(Object.entries(person));
// [
//   ["name", "홍길동"],
//   ["age", 30],
//   ["height", 180]
// ]
```

<br>

#### for of문

```js
let arr = [1, 2, 3, 4, 5];

for (let i of arr) {
  console.log(i);
  // 1
  // 2
  // 3
  // 4
  // 5
}
```

<br>

#### for in 반복문

<code>for in 반복문</code>은 객체를 순회할 때 사용하는 문법으로, 객체의 프로퍼티를 하나씩 꺼내서 반복할 수 있게 도와준다.
<code>for문</code>과는 달리 객체를 배열로 따로 변환하지 않아도 바로 프로퍼티에 접근할 수 있는 것이 특징.

```js
let person = {
  name: "홍길동",
  age: 25,
  height: 180,
};

for (let key in person) {
  console.log(`key ${key}, value: ${person[key]}`);
}

// key name, value: 홍길동
// key age, value: 25
// key height, value: 180
```

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
