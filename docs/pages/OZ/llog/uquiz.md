# UQuiz <badge type="info" text="React"></badge>

::: info Reference

- [React-Router Docs](https://reactrouter.com/home)
- [Routes](https://api.reactrouter.com/v7/functions/react_router.Routes.html)
- [Route](https://api.reactrouter.com/v7/functions/react_router.Route.html)
- [useParams](https://api.reactrouter.com/v7/functions/react_router.useParams.html)
- [useSearchParams](https://api.reactrouter.com/v7/functions/react_router.useSearchParams.html)

:::

## 1. 🛤️ 라우팅 설정

| 주소                | 컴포넌트 | 컨텐츠                   |
| ------------------- | -------- | ------------------------ |
| `/`                 | Home     | 닉네임 설정 페이지(메인) |
| `/quiz/:nickname`   | Quiz     | 퀴즈 풀이 페이지         |
| `results/:nickname` | Results  | 결과 페이지              |

### 1-1. URL 파라미터를 사용한 이유

- 사용자별 개별화된 퀴즈 경험을 제공하기 위해
- URL만 봐도 어떤 사용자의 퀴즈인지 직관적으로 알 수 있다.
- 새로고침 시에도 파라미터로 복구되므로 초기화 이슈 최소화
- 브라우저의 뒤로가기/앞으로 가기 기능 지원
- URL 공유 가능 (친구에게 퀴즈 링크 공유 등)

<br>

### 1-2. App.jsx 코드

```jsx
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quiz/:nickname" element={<Quiz />} />
        <Route path="results/:nickname" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}
```

- `Home.jsx`: 라우팅 진입점

<br>

## 2. 👥 닉네임 설정 페이지 구현

### 2-1. Home 컴포넌트

::: code-group

```jsx [Home]
// 🧩 닉네임 설정 페이지 (메인 페이지)
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  // useState로 닉네임 상태 관리
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  // 닉네임 검증 및 라우팅 로직
  const handleStart = (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지
    // 빈 값 또는 공백만 입력된 경우
    if (!nickname.trim()) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    // 닉네임 입력 시, 닉네임을 URL 파라미터로 전달
    navigate(`/quiz/${encodeURIComponent(nickname)}`);
  };

  return (
    <section>
      {/* 페이지 제목 */}
      <h1>UQuiz</h1>

      {/* 닉네임 입력창 */}
      <form onSubmit={handleStart}>
        <label htmlFor="nickname-input" className="a11yhidden">
          닉네임
        </label>
        <input
          id="nickname-input"
          type="text"
          value={nickname}
          placeholder="닉네임을 입력하세요."
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        {/* 시작버튼 */}
        <button type="submit">시작하기</button>
      </form>
    </section>
  );
}
export default Home;
```

:::

<br>

### 2-2. 주요 구현 포인트

```jsx
const navigate = useNavigate();

const handleStart = (e) => {
  e.preventDefault();
  if (!nickname.trim()) {
    alert("닉네임을 입력해주세요.");
    return;
  }
  navigate(`/quiz/${encodeURIComponent(nickname)}`);
};
```

#### `useNavigate()`

React Router에는 화면 이동을 위한 두 가지 방식이 있다.

- ① `Link` 컴포넌트 적합한 경우

  - 정적인 이동에 적합하다.
  - JSX 안에서 바로 라우트로 연결할 때 직관적이다.
  - 클릭 즉시 이동하므로, 단순한 페이지 이동(검증 없음)에 적합하다.
  - 네비게이션 메뉴

- ② `useNavigate` 훅 적합한 경우

  - 동적 로직과 함께 쓸 수 있다.
  - 조건부 라우팅(검증, 권한 체크 등)
  - 폼 제출 후 이동

따라서, 닉네임이 빈 값일 때 경고 메세지를 보여주고 이동을 막는 검증이 필요했기 때문에 `useNavigate()` 사용

#### `e.preventDefault();` 사용

- 페이지 새로고침 방지: 폼 제출 시 기본 동작 차단
- SPA 동작 유지: React Router의 클라이언트 사이드 라우팅 보장
- 사용자 경험 향상: 페이지 깜빡임 없이 부드러운 전환

#### `nickname.trim()` 검증

- 앞뒤 공백을 빈 값으로 처리
- 일관된 데이터 형태 유지 및 사용자 실수 방지
- 이전 계산기 프로젝트에서 의도치 않게 공백이 입력되는 현상이 있어서, `trim()`으로 사전에 방지하도록 개선했던 경험이 있습니다.

#### `encodeURIComponent()` 사용

- 특수 문자 처리: 한글, 특수 문자도 안전하게 URL에 포함
- 보안성 향상: URL 인젝션 공격 방지
- 브라우저 호환성: 모든 브라우저에서 정상적인 URL처리 보장

<br>

### 2-3. form 태그 접근성 고려

```jsx
<form onSubmit={handleStart}>
  <label htmlFor="nickname-input" className="a11yhidden">
    닉네임
  </label>
  <input
    id="nickname-input"
    type="text"
    value={nickname}
    placeholder="닉네임을 입력하세요."
    onChange={(e) => setNickname(e.target.value)}
    required
  />
  <button type="submit">시작하기</button>
</form>
```

#### `form 태그 및 onSubmit 이벤트`

- 접근성 향상: 스크린 리더가 폼의 목적을 명확히 인식
- 자동 Enter 키 지원: 입력 후 Enter 키만 눌러도 제출 가능
- 브라우저 기본 기능 활용: 폼 검증, 자동완성 등

#### `label` 처리

- 스크린 리더가 입력 필드의 목적을 읽을 수 있음
- WCAG 가이드라인 충족
- a11yhidden 클래스로 시각적으로는 숨기되, 스크린 리더만 읽도록 처리

#### `required` 속성

- 브라우저 기본 검증 속성으로 브라우저 레벨에서 1차 유효성 검사 제공

<br>
<Comment/>
