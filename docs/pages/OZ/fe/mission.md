# 👊🏼 Daily Mission

### HTML/CSS

::: details `Day 1` 나의 하루 문서 만들기

![day1mission](./images/day01.png)
<br>

[`👩🏻‍💻 제출한 코드보기`](https://github.com/miloupark/OZ-DailyMission/tree/main/day1)

:::
::: details `Day 2` 프로필 페이지 만들기

![day2mission](./images/day02.png)

[`👩🏻‍💻 제출한 코드보기`](https://github.com/miloupark/OZ-DailyMission/tree/main/day2)

<br>

:::
::: details `Day 3` 설문조사 양식 및 회원가입 폼

![day3mission](./images/day03-1.png)

[`👩🏻‍💻 제출한 코드보기`](https://github.com/miloupark/OZ-DailyMission/blob/main/day3/day3-1/survey.html)

<br>

![day3mission](./images/day03-2.png)
<br>

![day3mission](./images/day03-3.png)

[`👩🏻‍💻 제출한 코드보기`](https://github.com/miloupark/OZ-DailyMission/tree/main/day3/day3-2)

<br>
:::

::: details `Day 4` 프로필 페이지, 채팅방, 눈사람

![day4mission](./images/day04-1.png)
<br>
[`👩🏻‍💻 제출한 코드보기`](https://github.com/miloupark/OZ-DailyMission/tree/main/day4/profile)

<br>

![day4mission](./images/day04-2.png)
<br>
[`👩🏻‍💻 제출한 코드보기`](https://github.com/miloupark/OZ-DailyMission/tree/main/day4/chat)

<br>

![day4mission](./images/day04-3.png)
<br>
[`👩🏻‍💻 제출한 코드보기`](https://github.com/miloupark/OZ-DailyMission/tree/main/day4/snowman)

<br>
:::

::: details `Day 5` 채팅방 디벨롭, 반응형 웹, 반응형 웹 디벨롭, 클론

![day5mission](./images/day05-1.png)

[`👩🏻‍💻 제출한 코드보기`](https://github.com/miloupark/OZ-DailyMission/tree/main/day5/chat)

<br>

![day5mission](./images/day05-2.png)

[`👩🏻‍💻 제출한 코드보기`](https://github.com/miloupark/OZ-DailyMission/tree/main/day5/responsive)

<br>

![day5mission](./images/day05-3.png)

[`👩🏻‍💻 제출한 코드보기`](https://github.com/miloupark/OZ-DailyMission/tree/main/day5/responsive_develop)

<br>

![day5mission](./images/day05-4.png)

[`👩🏻‍💻 제출한 코드보기`](https://github.com/miloupark/OZ-DailyMission/tree/main/market)

<br>
:::

### JavaScript

::: details `day 6` 변수와 타입 개념

- console.log()를 활용한 출력
- 변수 재할당 구현
- 데이터 타입과 typeof 연산자에 대한 이해

💡 Node.js 환경에서는 .js 파일을 실행할 때 터미널에서 node main.js처럼 명령어로 직접 호출해야 한다는 것을 이번에 새롭게 알게 되었다.

:::

::: details `day 7` 타입 개념 및 메서드 활용

#### [문제 1] 오류 수정하기

💡 상수 points의 값이 String으로 되어있어, 따옴표를 제거해 Number 타입으로 변경했습니다.

시행착오 1. <br>
`+points` 산술 연산자를 사용할까 고민을 했지만, 코드의 명확성과 안정성을 위해 Number 타입으로 선언하는 방향으로 고려했습니다.

시행착오 2. <br>
💡 총 보유 포인트를 별도의 상수 totalPoints로 선언하는 방법도 고민했지만, 해당 문제는 주어진 변수를 직접 활용해 콘솔에 출력하는 것에 초점을 두고 있다고 판단해 생략했습니다. <br>
const totalPoints = points + bonusPoints; <br>
console.log('총 보유 포인트:', totalPoints + 'P');

<br>

#### [문제 2] 주사위 만들기

💡 랜덤한 숫자 'diceNumber'를 'diceArt' 배열의 인덱스로 활용해 주사위를 출력하도록 작성했습니다.

시행착오 1. <br>
처음에는 'diceNumber'를 함수로 만들어 호출하는 방식으로 시도했습니다.
console.log(diceNumber()); // 랜덤한 숫자는 출력됨
console.log(diceArt[diceNumber]); // undefined <br>
이후 하단에서 'diceNumber'가 배열의 인덱스로 사용되고 있다는 것을 확인하고 상수로 선언하는 방식으로 수정했습니다.

시행착오 2. <br>
'diceArt'가 배열이므로 '.length'를 활용해 인덱스를 설정하는 방식도 생각했지만,
`diceArt[0]`이 출력될 가능성이 발생하기 때문에 적절하지 않다고 판단했습니다.
따라서 `diceNumber`는 1~6 범위의 숫자만 나오도록 설정했습니다.
Math.floor(Math.random() \* (6 - 1 + 1)) + 1;

```js
// min 이상 max 이하의 정수를 만들기 위한 공식
Math.floor(Math.random() * (max - min + 1)) + min;
```

:::

::: details `day 8` 조건문과 반복문
💡 문제의 저작권이 걱정되어 StackBlitz 링크는 적어두지 않았다🥲! <br>

<br>

#### [과제 1] 수열 계산하기

🔍 해결
이번 문제처럼 "1부터 300까지" 반복 횟수가 명확한 경우에는 for문이 더 적합하다고 생각했습니다.

📚 참고 자료
[학습 콘텐츠 2일차-복합 대입 연산자] sum += n; ➡️ sum = sum + n; 동일한 의미이다.

❗ 시행착오 1.
for문에서, sum을 선언 및 초기화를 하지 않아 "ReferenceError: sum is not defined" 오류가 발생했습니다.
누적 변수는 반드시 명확한 시작값으로 초기화해야 한다는 점을 확인했습니다.

❗ 시행착오 2.
while문에서, n을 선언하지 않아 "ReferenceError: n is not defined" 오류가 발생했습니다.
반복에 사용할 변수는 반드시 선언해야 한다는 점을 확인했습니다.

<br>

#### [과제 2] 배달 주문하기

🔍 해결 및 작은 회고

풀이 1: 코드가 길어서 유지보수에 적합하지 않은 것 같습니다.

풀이 2: 메뉴 변수의 값에 대한 가격 인덱스 번호를 모두 인지하고 있어야하고, 메뉴가 추가 될 경우 유지보수가 어려울 것 같습니다.

풀이 3: 문제 마지막에 console.log(priceText)을 출력해야 하는 게 요구사항임을 뒤늦게 인지해서 풀이 2를 개선해보았습니다.

풀이 4: 선택한 메뉴명에 따라 키값을 출력하기 때문에 유지보수와 가독성 측면에서 좋을 것 같습니다.

❗ 시행착오
학습 콘텐츠를 꼼꼼히 보며 과제를 진행했지만, 상황에 따라 어떤 조건문이 더 적절한지 판단하는 데는 아직 어려움이 있었습니다. 🥲
요구 사항도 디테일하게 보는 연습이 필요할 것 같습니다!

<br>

#### [과제 3] 윤년 구하기

🔍 해결
첫 번째 조건은 "4의 배수이면서 100의 배수가 아닌 경우"로, 윤년에 해당하고 <br>
두 번째 조건은 "400의 배수인 경우"도 윤년에 해당합니다. (두 번째에는 4의 배수이면서, 100의 배수 조건을 만족하는 값이 넘어갑니다.)<br>
위 두 조건에 해당하지 않으면 윤년이 아닙니다를 출력합니다.

🔍 해결
윤년 판별 조건을 각 변수에 할당하여 삼항 연산자를 활용해 작성했습니다.<br>
개인적으로는 조건이 많아서 if 문으로 작성하는 게 더 직관적인 것 같습니다!

<br>

#### [도전 과제 1] 별 찍기

🔍 해결
바깥 for문: i, 줄 수<br>
안쪽 for문: j, 공백 개수<br>
안쪽 for문: k, 별 개수<br>
한 줄이 끝나면 line += '\n';로 줄 바꿈

❗ 시행착오
j < n - i - 1, k < 2 \* i + 1처럼 반복문의 조건의 범위를 수식으로 다양하게 작성할 수 있는 것을 알았습니다.
별 찍으려다 눈 앞에 별이 보이는 것 같습니다!🥲, 추가로 좌측 정렬, 역으로 별 찍는 것도 블로그에 정리해보려고 합니다!

<br>

#### [도전 과제 2] 소수 판별하기

🔍 풀이
0과 1은 소수가 아니므로, 반복문은 2부터 n보다 작은 수까지 순회합니다.<br>
만약 n이 i로 나누어 떨어진다면(n % i === 0), 약수가 존재하는 것이기 때문에 isPrime을 false로 바꾸고, 더 이상 반복문을 순회할 필요가 없기 때문에 break로 종료합니다.

:::

<!-- [Stackblitz Collections](https://stackblitz.com/@miloupark/collections/oz-dailymission-js) -->

<Comment/>
