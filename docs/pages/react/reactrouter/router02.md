# Route 설정 분리 패턴

::: info 🧩 Route 설정하는 방식

`React Router`를 사용할 때, 라우트를 `App.jsx` 안에 직접 선언하는 방식만 써왔는데
피드백을 통해 다양한 설정 패턴이 있다는 걸 알게 되었다.

- 인증별/도메인별로 분리
- config(설정 객체/파일)로 관리

다양한 레퍼런스를 찾아서 정리해보려고 한다.

:::

## App 내부 선언

가장 기본적인 방식은 `App.jsx` 안에서 직접 `<Route>`들을 선언하는 것이다.

::: code-group

```jsx [App.jsx]
function App() {
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

export default App;
```

:::

- 단순하고 빠르게 작성 가능하지만, 라우트가 많아지면 `App.jsx`가 비대해진다.

<br>

## Config 방식 (설정 파일로 분리)

::: details config? 🤔

##### config = configuration

프로그래밍에서 자주 쓰이는 표현으로, 옵션·설정값을 모아둔 객체/파일을 뜻한다.

- `App.jsx` 안에서 `<Route>`를 직접 나열 → 코드 중심 방식
- `routes/config.js` 같은 파일에 배열로 정리 → config 중심 방식

<br>

즉, 라우트 정보를 `데이터(설정)`로 따로 분리해두고 가져다 쓰는 패턴이다.

:::

<br>

### 1. 라우트 설정 파일 만들기

::: code-group

```jsx [routes/index.js]
// routes/index.js
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Results from "../components/Results";

export const routeConfig = [
  { id: 0, index: true, element: <Home /> },
  { id: 1, path: "quiz/:nickname", element: <Quiz /> },
  { id: 2, path: "results/:nickname", element: <Results /> },
];
```

:::

<br>

2. `App.jsx`에서 불러와 매핑하기

::: code-group

```jsx [App.jsx]
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routeConfig } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {routeConfig.map(({ id, ...rest }) => (
            <Route key={id} {...rest} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

:::

### 이렇게 하는 이유

- `App.jsx`가 깔끔해진다. (라우트 선언만 따로 관리)
- 페이지가 늘어나도 `routeConfig` 배열만 수정하면 된다.
- 확장성: 각 라우트 객체에 `requiresAuth`, `layout` 같은 메타데이터를 붙여 인증/도메인별 관리도 가능하다.

즉, `config 내용` = 라우트들을 객체로 모아둔 배열이다.  
`<Route>`를 하나씩 작성하지 않고, 설정 파일에서 불러와 자동으로 매핑하는 것이다.

<br>

## 도메인별 config 쪼개기

라우트가 많아지면 하나의 배열에 다 넣는 것보다, 기능(도메인) 단위로 라우트를 나누는 편이 유지보수에 좋다.

```jsx
import Quiz from "./pages/Quiz";

export const quizRoutes = [
  { id: "quiz", path: "quiz/:nickname", element: <Quiz /> },
];
```

<br>

```jsx
import Results from "./pages/Results";

export const resultsRoutes = [
  { id: "results", path: "results/:nickname", element: <Results /> },
];
```

<br>

```jsx
import { quizRoutes } from "../features/quiz/routes";
import { resultsRoutes } from "../features/results/routes";
import Home from "../features/core/pages/Home";

export const routeConfig = [
  { id: "home", index: true, element: <Home /> },
  ...quizRoutes,
  ...resultsRoutes,
];
```

- 도메인(quiz, results, core 등) 단위로 나누면 기능별로 독립적 관리가 가능하다.
- 새 기능이 추가될 때 해당 폴더 안에 `routes.js`만 작성하면 끝이다.

<br>

## 인증별 라우트 (ProtectedRoute)

로그인이 필요한 페이지라면 `requiresAuth` 같은 메타데이터를 붙이고, 매핑 시 보호 컴포넌트로 감싼다.

```jsx
import { Navigate, useLocation } from "react-router-dom";

export default function Protected({ children }) {
  const isAuthed = false; // TODO: 실제 로그인 상태 연동
  const loc = useLocation();
  return isAuthed ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: loc }} replace />
  );
}
```

```jsx
import Dashboard from "./pages/Dashboard";

export const appRoutes = [
  { id: "dash", path: "dashboard", element: <Dashboard />, requiresAuth: true },
];
```

```jsx
import Protected from "../guards/Protected";
import { appRoutes } from "../features/app/routes";

const allRoutes = [...routeConfig, ...appRoutes];

export function AppRouter() {
  return (
    <Routes>
      <Route path="/">
        {allRoutes.map(({ id, element, requiresAuth, ...rest }) => {
          const el = requiresAuth ? <Protected>{element}</Protected> : element;
          return <Route key={id} {...rest} element={el} />;
        })}
      </Route>
    </Routes>
  );
}
```

```jsx
import Protected from "../guards/Protected";
import { appRoutes } from "../features/app/routes";

const allRoutes = [...routeConfig, ...appRoutes];

export function AppRouter() {
  return (
    <Routes>
      <Route path="/">
        {allRoutes.map(({ id, element, requiresAuth, ...rest }) => {
          const el = requiresAuth ? <Protected>{element}</Protected> : element;
          return <Route key={id} {...rest} element={el} />;
        })}
      </Route>
    </Routes>
  );
}
```

- 이렇게 하면 인증 여부에 따라 접근을 제한할 수 있다.
- 나중에 layout, role 같은 필드를 추가해도 같은 패턴으로 확장 가능하다.

<br>

## 코드 스플리팅 (lazy 로딩)

페이지 단위로 `React.lazy`와 `Suspense`를 적용하면, 초기 번들 크기를 줄이고 필요한 시점에만 로드할 수 있다.

```jsx
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../features/core/pages/Home"));
const Quiz = lazy(() => import("../features/quiz/pages/Quiz"));
const Results = lazy(() => import("../features/results/pages/Results"));

export const routeConfig = [
  { id: "home", index: true, element: <Home /> },
  { id: "quiz", path: "quiz/:nickname", element: <Quiz /> },
  { id: "results", path: "results/:nickname", element: <Results /> },
];
```

```jsx
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  );
}
```

- `lazy`로 불러온 컴포넌트는 처음 접근할 때 네트워크 요청이 발생하고, `Suspense`에서 지정한 fallback UI가 잠깐 표시된다.

<br>

## 정리

- App 내부 선언 → 단순, 빠른 시작
- Config 배열 분리 → App 가벼워지고, 확장성 확보
- 도메인별 분리 → 기능 단위 독립 관리
- 인증별 보호 라우트 → 로그인 여부/권한 제어 가능
- 코드 스플리팅 → 성능 최적화, 초기 로딩 가벼움

<br>
<Comment/>
