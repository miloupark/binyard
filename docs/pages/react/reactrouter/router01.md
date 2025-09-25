# React Router Hooks

React Router Hooks는 컴포넌트 내부에서 라우팅 관련 데이터를 읽고 이동을 제어할 수 있게 해준다.  
정적 선언(Route)만으로는 부족한 동적 라우팅 제어를 가능하게 해주는 도구다.

<br>

## useParams()

경로 파라미터를 읽어온다.

### 1. 객체 그대로 접근

```jsx
// Route: /quiz/:nickname
import { useParams } from "react-router";

function Quiz() {
  const params = useParams();
  return <h1>퀴즈 시작 - 닉네임: {params.nickname}</h1>;
}
```

- `params`는 `{ nickname: "Hyebin" }` 같은 객체
- 여러 개의 파라미터를 다룰 때 직관적이다.

<br>

### 2. 구조 분해 할당

```jsx
// Route: /quiz/:nickname
import { useParams } from "react-router";

function Quiz() {
  const { nickname } = useParams();
  return <h1>퀴즈 시작 - 닉네임: {nickname}</h1>;
}
```

- `nickname`만 바로 꺼내서 사용
- 코드가 짧고 읽기 쉽다.
- 파라미터가 하나일 때 선호된다.

<br>

### 3. 파라미터 여러 개일 경우

```jsx
// Route: /quiz/:nickname/:questionId
const { nickname, questionId } = useParams();
// { nickname: "hyebin", questionId: "3" }
```

- 여러 개의 동적 값도 한 번에 꺼낼 수 있다.

<br>

### 4. 문자열 변환 주의

모든 파라미터는 문자열로 들어온다. 숫자가 필요한 경우 변환해야 한다.

```jsx
// Route: /products/:id
function ProductDetail() {
  const { id } = useParams();
  const productId = Number(id); // 문자열 → 숫자 변환
}
```

<br>

## useSearchParams()

쿼리스트링을 읽고 수정한다.

```jsx
// /products?category=shoes&page=2
function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category"); // shoes
  const page = searchParams.get("page"); // 2

  const handleFilterChange = (newCategory) => {
    setSearchParams({ category: newCategory, page: 1 });
  };
}
```

- `searchParams.get("key")`: 특정 쿼리 값 읽기
- `setSearchParams()`: URL 동기화 + 상태 업데이트 동시에 수행
- 주소창이 함께 업데이트되므로 링크 공유/북마크 가능

<br>

## useNavigate()

조건이나 이벤트 후 동적으로 라우팅한다.

```jsx
function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await login();
    if (success) navigate("/dashboard");
    else navigate("/error", { replace: true }); // 뒤로가기 막기
  };
}
```

- `navigate("/path")`: 해당 경로로 이동
- `navigate(-1)`: 뒤로 가기
- `navigate(1)`: 앞으로 가기
- `{ replace: true }`: 히스토리 덮어쓰기 (뒤로가기 방지)

<br>

### 로그인 후 원래 페이지로 이동하기

```jsx
import { useNavigate, useLocation } from "react-router";

function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    // 로그인 성공 → 원래 가려던 페이지로 이동
    navigate(location.state?.from || "/dashboard");
  };
}
```

- useLocation()을 함께 쓰는 예시

<br>

## useLocation()

현재 URL의 정보를 가져온다.

```jsx
import { useLocation } from "react-router";

function LocationLogger() {
  const location = useLocation();
  console.log(location.pathname); // "/quiz/hyebin"
  console.log(location.search); // "?page=2"
  console.log(location.hash); // "#section1"
}
```

- 경로(pathname), 쿼리(search), 해시(hash)까지 읽을 수 있다.
- 보통 navigate와 조합해 로그인 리다이렉트 등에서 많이 활용된다.

<br>

## useOutletContext()

중첩 라우트에서 부모 → 자식으로 데이터를 내려줄 때 사용한다.

```jsx
// 부모 라우트
function Dashboard() {
  return <Outlet context={{ user: "Hyebin" }} />;
}

// 자식 라우트
function DashboardHome() {
  const { user } = useOutletContext();
  return <h1>{user}님 환영합니다!</h1>;
}
```

<br>
<Comment/>
