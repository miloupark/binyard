# 👩🏻‍💻 JavaScript <Badge type="info" text="250623" />

## 변수

- 데이터를 저장할 수 있는 이름 있는 공간
- 컴퓨터와 개발자 사이에 새롭게 규정한 명사

### 변수는 약속된 이름

```js
let apple = "사과";
```

- apple이라는 변수를 선언하고, "사과"라는 문자열 값을 할당한 것
- 값을 할당할 때는 할당 연산자(=)를 사용
- 여기서 =는 수학의 "같다"가 아니라, 값을 변수에 넣는 연산자

## 함수

- 변수는 명사를 규정하는 작업이라면, 함수는 동사를 규정하는 작업

```js
// countLength라는 이름의 동작(함수)을 컴퓨터와 약속하는 것

function countLength(string) {
  return string.length;
}
```

- <code>function</code>: 함수를 선언할 때 사용하는 키워드
- <code>countLength</code>: 함수의 이름, 이 이름을 통해 함수를 호출할 수 있음
- <code>(string)</code>: 매개변수, 함수 외부에서 전달받을 값을 임시로 저장하는 변수
- <code>return</code>: 함수의 실행 결과를 외부로 반환하는 키워드
- <code>string.length</code>: 전달받은 문자열의 글자 수를 계산

즉, <code>countLength</code>는 문자열을 입력하면, 그 문자열의 길이를 외부로 반환해주는 함수

### 함수 호출

```js
countLength("사과");
```

- countLength()를 호출하면 함수 내부 코드가 실행된다.
- 괄호 안에 '사과'를 전달하면, '사과'가 string 매개변수에 할당된다.
- '사과'.length는 2이므로, 함수는 숫자 2를 반환한다.

### 함수 결과 활용

```js
function countLength(string) {
  return string.length;
}

// countLength 함수에 '사과'를 전달하고 반환된 값을 appleCount 변수에 할당
let appleCount = countLength("사과");
console.log(appleCount); // 2

// countLength 함수에 '바나나'를 전달하고 반환된 값을 bananaCount 변수에 할당
let bananaCount = countLength("바나나");
console.log(bananaCount); // 3

console.log(appleCount + bananaCount); // 5
```

- 함수의 반환값은 변수에 저장할 수 있다.
- console.log는 콘솔에 값을 출력하는 함수이다. 개발 중에 값을 확인하거나 디버깅할 때 주로 사용됨

<br>
<Comment/>
