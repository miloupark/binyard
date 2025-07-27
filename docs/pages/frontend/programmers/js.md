# 👩🏻‍💻 Programmers Javascript

[📁 Repository](https://github.com/miloupark/Programmers/tree/main/JavaScript/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/0)

> 📌 프로그래머스 문제 풀이 후, 복기 및 정리를 위한 템플릿! 나 자신 화이팅 💪

::: details 🧾 programmers templates <Badge type="info" text="2025-00-00" />
[📁 Repository](#)

문제 정의

<br>

🧩 풀이 1.

```js

```

- 문제 풀이

<br>

🧩 풀이 2.

```js

```

- 문제 풀이

<br>

💡 학습 내용 or 복기

```js

```

- [📎 MDN](#)

<br>

⚠️ 시행착오

```js

```

- 문제 풀이 시 겪은 다양한 시행착오

:::

## Level 0

::: details n의 배수 고르기 <Badge type="info" text="2025-07-27" />
[📁 Repository](https://github.com/miloupark/Programmers/tree/main/JavaScript/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/0/120905.%E2%80%85n%EC%9D%98%E2%80%85%EB%B0%B0%EC%88%98%E2%80%85%EA%B3%A0%EB%A5%B4%EA%B8%B0)

정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

<br>

🧩 풀이 1.

```js
function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}
```

- n의 배수란 어떤 수를 n으로 나누었을 때 나머지가 0인 수를 의미한다.
- 따라서 filter() 내부에서 조건을 num % n === 0 으로 설정하면,
- numlist 배열에서 n의 배수만 걸러낼 수 있다.

<br>

🧩 풀이 2.

```js
function solution(n, numlist) {
  const answer = [];
  for (let num of numlist) {
    if (num % n === 0) {
      answer.push(num);
    }
  }
  return answer;
}
```

- answer 배열을 만들고, for-of문으로 numlist의 요소를 하나씩 순회하면서,
- n의 배수인 경우에만 answer 배열에 push 메서드를 통해 추가한다.
- 마지막으로 answer 배열을 반환하여 결과를 출력한다.

<br>

💡 filter() 메서드 기본 구조

```js
// filter()
array.filter((element) => {
  return 조건식; // 조건을 만족하는 요소만 남는다.
});

// filter 콜백의 3개의 인자
array.filter((element, index, array) => {
  // element: 현재 요소
  // index: 현재 요소의 인덱스
  // array: 원래 배열 자체
});
```

- [📎 MDN filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- `element`는 array 배열의 각 요소를 의미한다. filter() 메서드는 배열을 순회하면서, 각 요소(element)가 주어진 조건식을 만족하는지 검사하고, true를 반환한 요소만으로 새로운 배열을 만들어 반환한다.

<br>

💡 for-of문 기본 구조

```js
const array = [1, 2, 3, 4, 5];
const result = [];

for (let element of array) {
  if (조건식) {
    result.push(element);
  }
}
```

- [📎 MDN for..of](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of)
- for-of문은 배열을 순회하면서 각 요소를 하나씩 꺼내서 사용할 수 있다.
- 조건을 만족하는 요소만 push()로 새로운 배열에 담을 수 있다.

:::
