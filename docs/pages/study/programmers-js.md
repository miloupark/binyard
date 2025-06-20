# Programmers
👩🏻‍💻 Javascript
<!-- 
## 숫자 비교하기
### 문제
정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

### 풀이
```js
function solution(num1, num2) {
    let answer = 0
    
    if (num1 === num2) {
        answer = 1;
    } else  {
        answer = -1;
    }
    
    return answer;
}

console.log(solution(5, 5)); // 1
console.log(solution(10, 5)); // -1
```

- <code>solution</code> 함수는 두 개의 숫자 <code>num1</code>, <code>num2</code>를 매개변수로 받음
- <code>answer</code> 변수를 선언하고 초기값을 0으로 설정, 이후 <code>answer</code> 값을 변경하여 반환
- <code>if</code>문을 사용해 <code>num1</code>, <code>num2</code>가 같은지 확인, <code>===</code> 일치연산자로 값과 데이터 타입까지 비교
- <code>num1 === num2</code>가 true이면 <code>answer</code>에 1을 저장
- <code>false</code>이면 <code>answer</code>에 -1을 저장
- return answer; <code>answer</code> 값을 반환  -->