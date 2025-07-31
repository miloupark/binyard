# Calculator <Badge type="info" text="🗓️ 2025-07-25 ~ 2025-07-30" /> <Badge type="info" text="JS Final Mission in OZ" />

::: info 📎 Quick Access

- 🌐 [Live Site (hyebin.dev – Vercel)](https://hyebin.dev/calculator)
- 🚀 [Live Demo (GitHub Pages)](https://miloupark.github.io/calculator/)
- 💻 [GitHub Repository](https://github.com/miloupark/calculator)
- 🎨 [Figma Design](https://www.figma.com/design/hh1hbNBF5992A1dQYb6INU/Calculator?node-id=0-1&t=AJexyvuflp4TE5th-1)

:::

## Day 3

::: details 🚨 if 광인의 개선 필요 script

```js [script.js]
// 계산기 DOM 요소 (전역)
const calcButtons = document.querySelectorAll(".button"); // 계산기 버튼들
const calcDisplay = document.querySelector(".calc__display"); // 계산기 화면

// 버튼 클릭 시 실행
const btnClick = (event) => {
  // 클릭된 버튼 관련 변수 (지역)
  const clickedBtn = event.currentTarget; // 클릭된 버튼 요소
  const clickedBtnText = clickedBtn.querySelector(".button__inner").textContent; // 버튼 안의 텍스트

  // 버튼 종류 확인
  const isNumber = clickedBtn.classList.contains("number"); // 숫자 버튼 여부 확인
  const isDecimal = clickedBtn.classList.contains("decimal"); // 소수점 버튼 여부 확인
  const isClear = clickedBtn.classList.contains("clear"); // 초기화(C) 버튼 여부 확인
  const isFunction = clickedBtn.classList.contains("function"); // 기능 버튼 여부 확인
  const isOperator = clickedBtn.classList.contains("operator"); // 연산자 버튼 여부 확인
  const isEqual = clickedBtn.classList.contains("equal"); // 결과 버튼 여부

  // 현재 display 화면(공백 제거된 문자열)
  const currentDisplay = calcDisplay.textContent.trim();

  // 초기화(C) 버튼 클릭 시: 디스플레이 0으로 초기화
  if (isClear) {
    console.log(clickedBtnText);
    calcDisplay.textContent = 0;
    return; // 종료
  }

  // 결과 버튼
  if (isEqual) {
    console.log(clickedBtnText);
    return;
  }

  // 연산자 버튼 클릭 시: 콘솔 출력
  if (isOperator) {
    console.log(clickedBtnText);
    return;
  }

  // 기능 버튼 클릭 시: 콘솔 출력
  if (isFunction) {
    console.log(clickedBtnText);
    return;
  }

  // 소수점 중복 입력 방지: 디스플레이에 소수점이 없다면 추가
  if (isDecimal) {
    console.log(clickedBtnText);
    if (!currentDisplay.includes(".")) {
      calcDisplay.textContent = currentDisplay + clickedBtnText;
    }
    return; // 이미 포함되어 있다면 리턴(무시)
  }

  // 숫자 클릭 시: 현재 화면이 0이면 클릭된 버튼의 값으로 대체, 아니면 이어 붙이기
  if (isNumber) {
    console.log(clickedBtnText);
    if (currentDisplay === "0") {
      calcDisplay.textContent = clickedBtnText;
    } else {
      calcDisplay.textContent += clickedBtnText;
    }
  }
};

// 계산기 버튼에 클릭 이벤트 등록
calcButtons.forEach((button) => {
  button.addEventListener("click", btnClick);
});

// 🔍 디버깅용 출력
// console.log(calcButtons);
// 계산기 버튼(.button)을 모두 선택하면 NodeList가 반환됨
// NodeList는 유사 배열 객체지만, forEach() 메서드가 있어서 순회 가능
```

:::

#### 🔨 개선 필요성을 느낀 이유

- `btnClick` 함수 내부에 조건문이 많아 가독성이 떨어져, 계산기 버튼 타입별 동작을 구분해서 구성할 필요성을 느꼈다.
- 개인적으로는 예측 가능한 `함수 표현식`을 선호하기 때문에, 각 동작을 표현식으로 분리했다.
- 선호 이유는, 초보자인 나로써는 `함수 선언식`은 호이스팅으로 인해 코드 흐름을 예측하기 어렵다.
  `표현식`은 코드 위에서 아래로 명확하게 읽히고, 변수처럼 다룰 수 있기 때문에 편리하다고 생각하기 때문!

<br>

## Day 4

::: details After Refactoring (🚧 작성 중입니다)
코드를 정리 중입니다...🛠️
:::
