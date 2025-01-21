# Javascript Basic

Summarizing what I've learned about JavaScript..✍🏼

## 변수

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

## 상수

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
