# Calculator <Badge type="info" text="🗓️ 2025-07-25 ~ 2025-07-30" /> <Badge type="info" text="JS Final Mission in OZ" />

::: info 📎 Quick Access

- 🌐 [Live Site (hyebin.dev – Vercel)](https://hyebin.dev/calculator)
- 🚀 [Live Demo (GitHub Pages)](https://miloupark.github.io/calculator/)
- 💻 [Archived Repository](https://github.com/miloupark/calculator) <Badge type="warning" text="Archived" />
- 💻 [Current GitHub Repository](https://github.com/miloupark/hyebin.dev/tree/main/calculator) <Badge type="tip" text="Monorepo" />
- 🎨 [Figma Design](https://www.figma.com/design/hh1hbNBF5992A1dQYb6INU/Calculator?node-id=0-1&t=AJexyvuflp4TE5th-1)

:::

<iframe 
  src="https://hyebin.dev/calculator" 
  width="100%" 
  height="800" 
  style="border: none; border-radius: 0;"
  loading="lazy">
</iframe>

## 🔨 개선 필요성을 느낀 이유

### 과제 3일 차, 제출 후 💭

::: details 🚨 Day3 | if 광인의 개선 필요 script

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

- `btnClick` 함수 내부에 조건문이 많아 가독성이 떨어져, 계산기 버튼 타입별 동작을 구분해서 구성할 필요성을 느꼈다.
- 개인적으로는 예측 가능한 `함수 표현식`을 선호하기 때문에, 각 동작을 표현식으로 분리했다.
- 선호 이유는, 초보자인 나로써는 `함수 선언식`은 호이스팅으로 인해 코드 흐름을 예측하기 어렵다.  
  `표현식`은 코드 위에서 아래로 명확하게 읽히고, 변수처럼 다룰 수 있기 때문에 편리하다고 생각하기 때문!

<br>

### 과제 4일 차, 배포 후 💭

- 코드 전체 구조 개선 필요  
  1-1. 상태(state) 객체로 전역 변수 정리 (실시간 세션에서 얻은 영감)

  ```js
  const defaultState = {
    firstOperand: null,
    secondOperand: null,
    operator: null,
    shouldResetDisplay: false,
  };
  ```

  1-2. getDisplay() / setDisplay() 함수로 textContent 중복 제거

- JS 파일 기능별 분리 (유틸, 기능, 계산, 이벤트 등)

<br>

## 🧩 시행착오

-

<br>

---

<br>

# 최종 제출 코드 <Badge type="info" text="📆 업데이트 예정" />

> 아래는 4일차, 최종 제출한 과제의 코드다. 앞서 3일 동안 작성한 코드에서 개선이 필요하다고 느낀 부분들을 반영했고, 당시의 나로선 할 수 있는 최선..🥲🔫  
> 배포를 마치고 보니 벌써 고쳐야하는 점들이 보인다. 이후 새로운 레포로 코드를 이관했고,  
> 해당 레포에서 위에 정리한 개선점들을 반영하고 추가 기능을 넣어볼 계획이다!

💻 [제출 코드 깃허브](https://github.com/miloupark/calculator) <Badge type="warning" text="Archived" />

::: details 제출 코드

```js
// DOM 요소 (전역)
const calcButtons = document.querySelectorAll(".button"); // 계산기 버튼들
const calcDisplay = document.querySelector(".calc__display"); // 계산기 화면

// 계산기 상태 변수 (전역)
let firstOperand = null; // 첫 번째 피연산자
let secondOperand = null; // 두 번째 피연산자
let operator = null; // 연산자
let shouldResetDisplay = false; // 새 숫자 입력 시, 디스플레이 초기화 여부

// 에러
const isNotDefined = "정의되지 않음";

// isNotDefined 체크 함수
const checkNaN = () => {
  calcDisplay.textContent = isNotDefined;
  firstOperand = null;
  secondOperand = null;
  operator = null;
  shouldResetDisplay = true;
};

// display의 글자 수에 따라 폰트 크기 줄이는 함수 (단, 입력 제한은 없음)
const adjustDisplayFontSize = () => {
  const displayTextLength = calcDisplay.textContent.length;

  if (displayTextLength <= 14) {
    calcDisplay.style.fontSize = "";
  } else if (displayTextLength <= 20) {
    calcDisplay.style.fontSize = "22px";
  } else if (displayTextLength <= 26) {
    calcDisplay.style.fontSize = "18px";
  } else {
    calcDisplay.style.fontSize = "12px";
  }
};

// 초기화(C) 버튼 클릭 시: 계산기 상태 변수 초기화
const clickClear = () => {
  firstOperand = null;
  secondOperand = null;
  operator = null;
  shouldResetDisplay = false;
  calcDisplay.textContent = "0";
  adjustDisplayFontSize();
};

// 숫자 버튼 클릭 시
const clickNumber = (number) => {
  const currentDisplay = calcDisplay.textContent.trim();

  // 연산자 버튼을 누른 이후거나(true), 현재 디스플레이가 "0"이면 새 숫자로 반영
  if (shouldResetDisplay || currentDisplay === "0") {
    calcDisplay.textContent = number;
    shouldResetDisplay = false;
  } else {
    // 이어서 숫자 입력
    calcDisplay.textContent += number;
  }

  adjustDisplayFontSize();
};

// 소수점 버튼 클릭 시
const clickDecimal = () => {
  const currentDisplay = calcDisplay.textContent.trim();

  if (currentDisplay === isNotDefined) {
    clickClear();
  }

  if (shouldResetDisplay) {
    // 연산자 다음, 새 숫자를 시작하는 경우 "0."부터 시작
    calcDisplay.textContent = "0.";
    shouldResetDisplay = false;
  } else if (!currentDisplay.includes(".")) {
    // 소수점 없으면 추가
    calcDisplay.textContent += ".";
  }

  adjustDisplayFontSize();
};

// 연산자 버튼 클릭 시
const clickOperator = (value) => {
  let currentDisplay = calcDisplay.textContent.trim();

  // 화면에 "정의되지 않음"이면 clickClear() 호출 후 0부터 시작
  if (currentDisplay === isNotDefined) {
    clickClear();
    currentDisplay = "0";
  }

  if (firstOperand === null) {
    firstOperand = currentDisplay; // 첫 번째 피연산자가 null이면 현재 값을 저장
  } else if (operator && !shouldResetDisplay) {
    secondOperand = currentDisplay; // 기존 연산자가 있고, 새 숫자 입력이 있다면 계산 진행

    const result = calculate(firstOperand, operator, secondOperand);

    if (result === isNotDefined) {
      checkNaN();
      return;
    }

    calcDisplay.textContent = String(result); // 화면 출력 시 숫자 -> 문자열로 변경
    firstOperand = result; // 계산 결과 다음 계산의 첫 번째 숫자로 저장
  }

  operator = value; // 클릭한 연산기호 저장
  shouldResetDisplay = true; // 새로운 숫자 입력 -> display 초기화 상태 변경

  console.log(`firstOperand: ${firstOperand}, operator: ${operator}`);
};

// = 버튼 클릭 시
const clickEqual = () => {
  // 첫 번째 피연산자와 연산자가 null이 아니면
  if (firstOperand !== null && operator !== null) {
    secondOperand = calcDisplay.textContent.trim(); // 현재 값을 넣고 calculate() 실행

    const result = calculate(firstOperand, operator, secondOperand);

    // NaN 에러 확인
    if (result === isNotDefined) {
      checkNaN();
      return;
    }

    calcDisplay.textContent = String(result); // 화면 출력 시 숫자 -> 문자열로 변경
    adjustDisplayFontSize();

    // 첫 번째 피연산자에 다음 계산을 이어가도록 결과 저장
    firstOperand = result;
    secondOperand = null;
    shouldResetDisplay = true;
  }
};

// function 버튼 클릭 시
const clickFunction = (funcValue) => {
  const currentDisplay = calcDisplay.textContent.trim();
  let result;

  switch (funcValue) {
    case "C": // 별도 초기화 함수(clickClear) 호출
      return clickClear();
    case "±": // 현재 숫자의 부호 전환
      result = parseFloat(currentDisplay) * -1;
      break;
    case "%":
      const currentNum = parseFloat(currentDisplay);

      // 첫 번째 피연산자와 연산자가 null이 아니면, 즉 피연산자와 연산자가 있으면
      if (firstOperand !== null && operator !== null) {
        const firstNum = parseFloat(firstOperand);

        switch (operator) {
          case "+":
            result = (firstNum * currentNum) / 100;
            break;
          case "-":
            result = (firstNum * currentNum) / 100;
            break;
          case "*":
            result = currentNum / 100;
            break;
          case "/":
            result = currentNum / 100;
            break;
        }

        secondOperand = result;
        calcDisplay.textContent = String(result);
        adjustDisplayFontSize();

        return;
      } else {
        // 연산자 없는 경우
        result = currentNum / 100;
        secondOperand = result;
        calcDisplay.textContent = String(result);
        return;
      }
    default:
      return; // 정의되지 않은 기능 고려
  }

  calcDisplay.textContent = String(result);
  adjustDisplayFontSize();
};

// calculate 함수: 연산자에 따라 계산 결과 반환
const calculate = (firstOperand, operator, secondOperand) => {
  // 문자열을 부동소수점 숫자로 변환
  const firstNum = parseFloat(firstOperand);
  const secondNum = parseFloat(secondOperand);

  // 피 연산자들 중 하나라도 NaN면 "정의되지 않음 처리"
  if (isNaN(firstNum) || isNaN(secondNum)) return isNotDefined;

  // 연산 조건문
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      if (secondNum !== 0) {
        return firstNum / secondNum;
      } else {
        // secondNum이 0이면 '정의되지 않음' 출력 (레퍼런스: 맥북 계산기)
        // 이후 연산자, 숫자 입력 시 Nan 반환 이슈로 개선
        return isNotDefined;
      }
    default:
      return secondNum; // 정의되지 않은 연산자 고려
  }
};

// 버튼 클릭 이벤트
const btnClick = (event) => {
  // 클릭된 버튼 요소 및 값
  const clickedBtn = event.currentTarget; // 클릭한 버튼
  const clickedBtnValue = clickedBtn.dataset.set; // 버튼에 설정된 데이터 값 (html data-set)

  // 버튼 클래스에 따라 함수 호출
  if (clickedBtn.classList.contains("clear")) return clickClear();
  if (clickedBtn.classList.contains("number")) return clickNumber(clickedBtnValue);
  if (clickedBtn.classList.contains("decimal")) return clickDecimal();
  if (clickedBtn.classList.contains("operator")) return clickOperator(clickedBtnValue);
  if (clickedBtn.classList.contains("equal")) return clickEqual();
  if (clickedBtn.classList.contains("function")) return clickFunction(clickedBtnValue);
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

## data-set 속성 추가

버튼 내부 텍스트를 직접 읽지 않고, 해당 버튼 요소의 값을 명시적으로 부여하기 위해 `data-set` 속성을 추가했다.

::: info Reference

- [📎 About data-set](https://codingeverybody.kr/html-data-%EC%86%8D%EC%84%B1/)
- [📎 JS event bubbling](https://ko.javascript.info/bubbling-and-capturing)
- [📎 MDN event.currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

:::

```diff
// HTML | before
- <button type="button" class="button number">
-   <span class="button__inner">7</span>
- </button>

// HTML | after
+ <button type="button" class="button number" data-set="7">
+   <span class="button__inner">7</span>
+ </button>

```

- 계산기 버튼은 시각적 디자인을 위해 `<button>` 안에 `<span class="button__inner">`를 감싸는 구조로 되어 있었다.

<br>

```js
// before
const clickedBtn = event.currentTarget; // 클릭된 버튼 요소
const clickedBtnText = clickedBtn.querySelector(".button__inner").textContent; // 버튼 안의 텍스트
```

- 처음엔 버튼 클릭 시 값을 가져오기 위해 `event.target.textContent`를 사용했는데,
  이 경우 클릭 위치에 따라 button이 아니라 내부 span요소가 반환되어 일관성 없는 값을 가져오는 문제가 발생했다 🤯..
- 위 문제를 해결하기 위해 `event.currentTarget`로 항상 이벤트가 바인딩 된 버튼 요소를 기준으로 처리하도록 변경했다.

<br>

```js
// after
const clickedBtn = event.currentTarget; // 클릭한 버튼
const clickedBtnValue = clickedBtn.dataset.set; // 버튼에 설정된 데이터 값 (html data-set)
```

- html 버튼에 명시적으로 `data-set` 속성을 부여해, js에서 텍스트 대신 고정된 값을 `data.set` 가져오도록 했다.
- 이렇게 UI와 데이터 값을 분리할 수 있었다.  
  서치해보니 실제로 버튼은 `X`지만, 데이터는 `*`로 처리하는 경우도 있었다.

<br>

## 전역변수로 DOM 요소 선택

계산기 버튼은 `querySelectorAll`로 .button 클래스를 가진 버튼들을 모두 가져오고,  
계산기 화면은 하나이므로 `querySelector`로 가져왔다.

```js
// DOM 요소 (전역)
const calcButtons = document.querySelectorAll(".button"); // 계산기 버튼들
const calcDisplay = document.querySelector(".calc__display"); // 계산기 화면
```

<br>

## 계산기 상태 저장을 위한 전역 변수

첫 번째 숫자, 연산자, 두 번째 숫자를 저장하기 위해 전역 변수로 선언하고  
새 숫자 입력 시 화면을 초기화할지 결정하는 `shouldResetDisplay`를 선언했다.

```js
// 계산기 상태 변수 (전역)
let firstOperand = null; // 첫 번째 피연산자
let secondOperand = null; // 두 번째 피연산자
let operator = null; // 연산자
let shouldResetDisplay = false; // 연산자 클릭 후, 새 숫자 입력 시 디스플레이 초기화 여부
```

<br>

## 에러 처리를 위한 변수와 함수 <Badge type="info" text="isNotDefined" /><Badge type="info" text="checkNaN()" />

숫자를 0으로 나누면 "정의되지 않음"이라는 에러를 출력한다.(맥북 계산기 참고)  
`checkNaN()` 함수는 그런 상황이 생겼을 때 모든 상태를 초기화한다.

```js
// 에러
const isNotDefined = "정의되지 않음";

// isNotDefined 체크 함수
const checkNaN = () => {
  calcDisplay.textContent = isNotDefined;
  firstOperand = null;
  secondOperand = null;
  operator = null;
  shouldResetDisplay = true;
};
```

<br>

## 숫자 길이에 따라 폰트 크기를 줄이는 함수 <Badge type="info" text="adjustDisplayFontSize()" />

숫자가 길어지면 화면 밖으로 뚫고 나가는 것을 확인하고,  
UX를 고려해 길이에 따라 폰트 크기를 줄이는 함수를 추가했다.

```js
// display의 글자 길이에 따라 폰트 크기 줄이는 함수 (단, 입력 제한은 없음)
const adjustDisplayFontSize = () => {
  const displayTextLength = calcDisplay.textContent.length;

  if (displayTextLength <= 14) {
    calcDisplay.style.fontSize = "";
  } else if (displayTextLength <= 20) {
    calcDisplay.style.fontSize = "22px";
  } else if (displayTextLength <= 26) {
    calcDisplay.style.fontSize = "18px";
  } else {
    calcDisplay.style.fontSize = "12px";
  }
};
```

<br>

## 초기화 버튼 C <Badge type="info" text="clickClear()" />

`C` 버튼 클릭 시, 모든 상태를 초기화하는 함수  
display를 "0"으로 되돌리고, `adjustDisplayFontSize()` 함수를 호출한다.

```js
// 초기화(C) 버튼 클릭 시: 계산기 상태 변수 초기화
const clickClear = () => {
  firstOperand = null;
  secondOperand = null;
  operator = null;
  shouldResetDisplay = false;
  calcDisplay.textContent = "0";
  adjustDisplayFontSize();
};
```

- `shouldResetDisplay = false`  
   : 연산자 버튼을 누른 후에는 shouldResetDisplay 값이 true가 된다.  
  초기화 할 때는 false로 바꿔주어야 다음 숫자를 입력할 때 화면이 지워지지 않게 된다.  
  즉, 계산기의 상태를 초기 상태로 되돌리는 역할.
- `calcDisplay.textContent = "0"`  
   : 계산기 화면은 문자열 형태로 숫자를 표시하기 때문에, "0"을 직접 할당해서 리셋한다.
- `adjustDisplayFontSize()`
  : 이전에 입력된 긴 숫자로 인해 작아진 폰트를 다시 원래대로 되돌린다.

<br>

## 숫자 버튼 <Badge type="info" text="clickNumber()" />

연산자 버튼을 누른 직후이거나, 디스플레이가 0이면 새 숫자 반영  
or 기존 숫자 뒤에 이어서 숫자 입력 후 `adjustDisplayFontSize()` 함수를 호출

`trim()` 메서드를 추가한 이유는 html의 여백까지 가져오기 때문에 여백을 제거하기 위함이다.

```js
// 숫자 버튼 클릭 시
const clickNumber = (number) => {
  const currentDisplay = calcDisplay.textContent.trim();

  // 연산자 버튼을 누른 이후거나(true), 현재 디스플레이가 "0"이면 새 숫자로 반영
  if (shouldResetDisplay || currentDisplay === "0") {
    calcDisplay.textContent = number;
    shouldResetDisplay = false;
  } else {
    // 이어서 숫자 입력
    calcDisplay.textContent += number;
  }

  adjustDisplayFontSize();
};
```

<br>

## 소수점 버튼 <Badge type="info" text="clickDecimal()" />

"정의 되지 않음" 상태일 경우 초기화 진행 후 `0.`부터 시작한다.  
그리고 소수점이 없을 경우 추가한다.

```js
// 소수점 버튼 클릭 시
const clickDecimal = () => {
  const currentDisplay = calcDisplay.textContent.trim();

  if (currentDisplay === isNotDefined) {
    clickClear();
  }

  if (shouldResetDisplay) {
    // 연산자 다음(true), 새 숫자를 시작하는 경우 "0."부터 시작
    calcDisplay.textContent = "0.";
    shouldResetDisplay = false;
  } else if (!currentDisplay.includes(".")) {
    // 소수점 없으면 추가
    calcDisplay.textContent += ".";
  }

  adjustDisplayFontSize();
};
```

<br>

## 연산자 버튼 <Badge type="info" text="clickOperator()" />

클릭한 연산자는 `value` 파라미터로 전달된다. (HTML의 `data-set` 값에서 가져옴)  
현재 화면 값은 이후에 바뀔 수 있으므로 let으로 선언했다.

입력된 firstOperand가 없다면, 현재 화면 값을 firstOperand로 저장한다.

그 외에, 이미 firstOperand와 operator가 있고, 연산자 클릭 후 숫자 입력이 있었다면  
현재 화면 값을 `secondOperand`에 저장하고, `calculate()` 함수를 실행한다.

→ 결과가 `"정의되지 않음"`이라면 상태를 초기화하고 종료한다.  
→ 정상적인 결과라면 문자열로 변환 후 화면에 출력하고,  
해당 결과는 다음 계산을 위한 첫 번째 피연산자 firstOperand로 저장한다.

이 조건들과 관계없이, 연산자가 클릭돠면 항상 `operator`에 저장하고  
다음 숫자를 입력받기 위해 shouldResetDisplay를 `true`로 설정한다.

```js
// 연산자 버튼 클릭 시
const clickOperator = (value) => {
  let currentDisplay = calcDisplay.textContent.trim();

  // 화면에 "정의되지 않음"이면 clickClear() 호출 후 0부터 시작
  if (currentDisplay === isNotDefined) {
    clickClear();
    currentDisplay = "0";
  }

  if (firstOperand === null) {
    firstOperand = currentDisplay; // 첫 번째 피연산자가 null이면 현재 값을 저장
  } else if (operator && !shouldResetDisplay) {
    // 기존 연산자가 있고, 연산자 클릭 이후 새 숫자가 입력된 경우에만 계산 실행
    secondOperand = currentDisplay;

    const result = calculate(firstOperand, operator, secondOperand);

    if (result === isNotDefined) {
      checkNaN();
      return;
    }

    calcDisplay.textContent = String(result); // 화면 출력 시 숫자 -> 문자열로 변경
    firstOperand = result; // 계산 결과 다음 계산의 첫 번째 숫자로 저장
  }

  operator = value; // 클릭한 연산기호 저장
  shouldResetDisplay = true; // 새로운 숫자 입력 -> display 초기화 상태 변경

  console.log(`firstOperand: ${firstOperand}, operator: ${operator}`);
};
```

<br>

## = 버튼 <Badge type="info" text="clickEqual()" />

첫 번째 피연산자와 연산자가 입력되었다면, `secondOperand`에 현재 화면 값을 저장하고 `calculate()`
함수를 실행한다.  
(만약 결과가 isNotDefined라면, 상태를 초기화 후 반환한다.)  
calculate()에서는 문자열을 숫자로 변환해서 계산함으로, 다시 문자열로 변경한다.

연속 계산이 가능하도록, 연산 결과는 `firstOperand`에 저장한다.  
연산자도 null로 초기화하고, display도 초기화한다.

```js
// = 버튼 클릭 시
const clickEqual = () => {
  // 첫 번째 피연산자와 연산자가 null이 아니면
  if (firstOperand !== null && operator !== null) {
    secondOperand = calcDisplay.textContent.trim(); // 현재 값을 넣고 calculate() 실행

    const result = calculate(firstOperand, operator, secondOperand);

    // NaN 에러 확인
    if (result === isNotDefined) {
      checkNaN();
      return;
    }

    calcDisplay.textContent = String(result); // 화면 출력 시 숫자 -> 문자열로 변경
    adjustDisplayFontSize();

    // 첫 번째 피연산자에 다음 계산을 이어가도록 결과 저장
    firstOperand = result;
    secondOperand = null;
    shouldResetDisplay = true;
  }
};
```

<br>

## 기능 버튼 <Badge type="info" text="clickFunction()" />

- `C`: 초기화 함수 clickClear() 호출
- `±`: 현재 화면의 값을 -1을 곱해 부호 전환
- `%`: 백분율 연산을 수행, 연산자 입력 여부에 따라 동작 방식이 다름
  - 연산자가 없는 경우: 현재 화면 값 자체를 100으로 나눈다.  
     `100 → % → 1`
  - 연산자가 있는 경우 (firstOperand, operator 존재): 두 번째 피연산자를 백분율로 계산  
    계산기는 10%를 앞의 수 200의 백분율로 해석한다.  
    `200 + 10%` → `200 + (200 * 0.1) = 200 + 20 =  220`  
    `200 - 10%` → `200 - (200 * 0.1) = 200 - 20 =  180`  
    `200 * 10%` → `200 * 0.1 = 20`  
    `200 / 10%` → `200 / 0.1 = 2000`

```js
// function 버튼 클릭 시
const clickFunction = (funcValue) => {
const currentDisplay = calcDisplay.textContent.trim();
let result;

switch (funcValue) {
case "C": // 별도 초기화 함수(clickClear) 호출
return clickClear();
case "±": // 현재 숫자의 부호 전환
result = parseFloat(currentDisplay) \* -1;
break;
case "%":
const currentNum = parseFloat(currentDisplay);
      // 첫 번째 피연산자와 연산자가 null이 아니면, 즉 피연산자와 연산자가 있으면
      if (firstOperand !== null && operator !== null) {
        const firstNum = parseFloat(firstOperand);
        switch (operator) {
          case "+":
            result = (firstNum * currentNum) / 100;
            break;
          case "-":
            result = (firstNum * currentNum) / 100;
            break;
          case "*":
            result = currentNum / 100;
            break;
          case "/":
            result = currentNum / 100;
            break;
        }
        secondOperand = result;
        calcDisplay.textContent = String(result);
        adjustDisplayFontSize();
        return;
      } else {
        // 연산자 없는 경우
        result = currentNum / 100;
        secondOperand = result;
        calcDisplay.textContent = String(result);
        return;
      }
    default:
      return; // 정의되지 않은 기능 고려
}
calcDisplay.textContent = String(result);
adjustDisplayFontSize();
};
```

<br>

## 실제 계산 <Badge type="info" text="calculate()" />

연산자에 따라 계산을 하고, 피연산자를 0으로 나누면 "정의되지 않음" 처리  
디폴트로는 secondNum을 반환한다.

```js
// calculate 함수: 연산자에 따라 계산 결과 반환
const calculate = (firstOperand, operator, secondOperand) => {
// 문자열을 부동소수점 숫자로 변환
const firstNum = parseFloat(firstOperand);
const secondNum = parseFloat(secondOperand);

// 피 연산자들 중 하나라도 NaN면 "정의되지 않음 처리"
if (isNaN(firstNum) || isNaN(secondNum)) return isNotDefined;

// 연산 조건문
switch (operator) {
case "+":
return firstNum + secondNum;
case "-":
return firstNum - secondNum;
case "_":
return firstNum _ secondNum;
case "/":
if (secondNum !== 0) {
return firstNum / secondNum;
} else {
// secondNum이 0이면 '정의되지 않음' 출력 (레퍼런스: 맥북 계산기)
// 이후 연산자, 숫자 입력 시 Nan 반환 이슈로 개선
return isNotDefined;
}
default:
return secondNum; // 정의되지 않은 연산자 고려
}
};
```

<br>

## 버튼 클릭 이벤트 <Badge type="info" text="btnClick()" />

버튼을 기능에 따라 함수로 분리하고, `btnClick()`을 통해 버튼 종류에 따라 해당하는 함수를 호출하도록 개선했다.  
이후 기능이 추가되더라도 `btnClick()`의 구조는 그대로 유지하도록 했다.

```js
// 버튼 클릭 이벤트
const btnClick = (event) => {
  // 클릭된 버튼 요소 및 값
  const clickedBtn = event.currentTarget; // 클릭한 버튼
  const clickedBtnValue = clickedBtn.dataset.set; // 버튼에 설정된 데이터 값 (html data-set)

  // 버튼 클래스에 따라 함수 호출
  if (clickedBtn.classList.contains("clear")) return clickClear();
  if (clickedBtn.classList.contains("number")) return clickNumber(clickedBtnValue);
  if (clickedBtn.classList.contains("decimal")) return clickDecimal();
  if (clickedBtn.classList.contains("operator")) return clickOperator(clickedBtnValue);
  if (clickedBtn.classList.contains("equal")) return clickEqual();
  if (clickedBtn.classList.contains("function")) return clickFunction(clickedBtnValue);
};
```

<br>

## 버튼 클릭 이벤트 등록 <Badge type="info" text="addEventListener" />

모든 계산기 버튼에 `btnClick()`을 이벤트 핸들러로 등록했다.
NodeList는 유사 배열 객체이므로, `forEach()`를 통해 순회할 수 있다.

```js
// 계산기 버튼에 클릭 이벤트 등록
calcButtons.forEach((button) => {
  button.addEventListener("click", btnClick);
});
```

- `console.log(calcButtons)`는 버튼 목록이 담긴 NodeList를 확인 할 수 있다.
