# 👩🏻‍💻 언어의 기초 <Badge type="info" text="250623" />

## 프론트엔드

### 기초 문법 & 개념

- 변수와 데이터 타입 <br>
  <code>var</code>, <code>let</code>, <code>const</code>, <code>string</code>, <code>number</code>, <code>boolean</code>, <code>array</code>, <code>object</code> 등
- 연산자 <br>
  <code>+</code>, <code>-</code>, <code>\*</code>, <code>/</code>, <code>%</code>, <code>++</code>, <code>-</code>, <code>==</code>, <code>===</code>, <code>!=</code>, <code>!==</code> 등
- 조건문과 반복문 <br>
  <code>if</code>, <code>else</code>, <code>switch</code>, <code>for</code>, <code>while</code>, <code>do...while</code>
- 함수 <br>
  <code>function</code>, <code>return</code>, <code>arrow function</code>, <code>callback</code>

## 백엔드

- 변수와 데이터 타입 <br>
  <code>int</code>, <code>float</code>, <code>str</code>, <code>list</code>, <code>dict</code> 등
- 연산자 <br>
  <code>+</code>, <code>-</code>, <code>\*</code>, <code>/</code>, <code>//</code>, <code>%</code>, <code>\*\*</code> 등
- 조건문과 반복문 <br>
  <code>if</code>, <code>elif</code>, <code>else</code>, <code>for</code>, <code>while</code>
- 함수 <br>
  <code>def</code>, <code>return</code>, <code>lambda</code>

## 변수와 데이터 타입

### <code>변수</code>

- 데이터를 저장하는 이름 있는 공간
- 변수를 선언하면 값을 저장하고, 나중에 해당 이름을 통해 그 값을 불러오거나 수정할 수 있다.

### <code>데이터 타입</code>

- 변수에 저장되는 데이터의 종류
- 숫자, 문자열, 불리언, 배열, 객체, null, undefined 등

### <code>동적 타입 언어</code>

- JavaScript와 Python은 동적 타입 언어에 속한다.
- 변수 선언 시 데이터 타입을 명시할 필요가 없고, 실행 중에 변수의 타입이 바뀔 수 있다.

<br>

### 변수 선언과 데이터 타입 예시

- 자바스크립트와 파이썬은 모두 동적 타입 언어로, 변수 선언 시 타입을 명시하지 않아도 된다. 아래는 두 언어에서의 변수 선언과 주요 데이터 타입 예시이다.

#### 자바스크립트

```js
let name = "Alice"; // 문자열(String)
const age = 25; // 숫자(Number)
let isStudent = true; // 불리언(Boolean)
```

#### 파이썬

```python
name = "Alice"  # 문자열(String)
age = 25  # 정수(Integer)
is_student = True  # 불리언(Boolean)
```

## 연산자

- 산술 연산자 : 수학적 연산을 수행 <br>
  <code>+</code>, <code>-</code>, <code>\*</code>, <code>/</code>, <code>%</code>
- 비교 연산자 : 두 값을 비교<br>
  <code>==</code>, <code>!=</code>, <code><</code>, <code>></code>, <code><=</code>, <code>>=</code>
- 논리 연산자 : 조건을 조합<br>
  <code>&&</code>, <code>||</code>, <code>!</code>(JS) / <code>and</code>, <code>or</code>, <code>not</code>(Python)

### 연산자 사용 예시

#### 자바스크립트

```js
console.log(10 + 5); // 15
console.log(10 > 5); // true
console.log(true && false); // false
```

#### 파이썬

```python
print(10 + 5)  # 15
print(10 > 5)  # True
print(True and False)  # False
```

## 조건문

- 조건문: 특정 조건이 참(True)일 경우 실행되는 코드 블록을 정의
- if-else: if 조건을 검사하고, 조건이 거짓일 경우 else 블록이 실행
- elif (파이썬), else if (자바스크립트): 여러 조건을 순차적으로 검사할 때 사용

### 조건문 예시

#### 자바스크립트

```js
let num = 10;
if (num > 0) {
  console.log("양수입니다.");
} else if (num < 0) {
  console.log("음수입니다.");
} else {
  console.log("0입니다.");
}
```

#### 파이썬

```python
num = 10
if num > 0:
    print("양수입니다.")
elif num < 0:
    print("음수입니다.")
else:
    print("0입니다.")
```

## 반복문 (for/while)

- for문: 정해진 횟수만큼 반복 실행할 때 사용
- while문: 조건이 참인 동안 계속해서 반복 실행
- 반복 제어: break 반복을 즉시 종료, continue 현재 반복을 건너뛰고 다음 반복으로 넘어감

#### 자바스크립트

```js
for (let i = 1; i <= 3; i++) {
  console.log("반복 중: ", i);
}

let count = 0;
while (count < 3) {
  console.log("while 반복 중:", count);
  count++;
}
```

#### 파이썬

```python
for i in range(1, 4):
    print("반복 중:", i)

count = 0
while count < 3:
    print("while 반복 중:", count)
    count += 1
```

## 함수

- 함수: 특정 작업을 수행하는 코드 블록, 필요할 때 호출해 실행할 수 있음
- 매개변수: 함수가 실행될 때 함수 외부에서 전달하는 입력값
- 반환값: 함수가 작업을 끝낸 후 돌려주는 결과물
- 재사용성: 같은 기능을 여러 번 재사용할 수 있어 코드 중복을 줄이고 관리가 쉬워짐

### 함수 예시

#### 자바스크립트

```js
function greet(name) {
  return "안녕, " + name + "!";
}

console.log(greet("Alice"));
```

#### 파이썬

```python
def greet(name):
    return "안녕, " + name + "!"

print(greet("Alice"))
```

<br>
<Comment/>
