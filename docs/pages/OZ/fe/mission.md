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

::: details `day 7`

#### [문제 1]

💡 상수 points의 값이 String으로 되어있어, 따옴표를 제거해 Number 타입으로 변경했습니다.

시행착오 1. <br>
`+points` 산술 연산자를 사용할까 고민을 했지만, 코드의 명확성과 안정성을 위해 Number 타입으로 선언하는 방향으로 고려했습니다.

시행착오 2. <br>
💡 총 보유 포인트를 별도의 상수 totalPoints로 선언하는 방법도 고민했지만, 해당 문제는 주어진 변수를 직접 활용해 콘솔에 출력하는 것에 초점을 두고 있다고 판단해 생략했습니다. <br>
const totalPoints = points + bonusPoints; <br>
console.log('총 보유 포인트:', totalPoints + 'P');

<br>

#### [문제 2]

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

:::

<!-- [Stackblitz Collections](https://stackblitz.com/@miloupark/collections/oz-dailymission-js) -->

<Comment/>
