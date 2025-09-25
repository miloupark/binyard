# React Router Hooks

## useParams()

경로 파라미터를 읽어온다

### 1. 객체 그대로 접근하는 방식

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

#### 2. 구조 분해 할당 방식

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

### 정리

- 둘 다 결과는 똑같이 `/quiz/hyebin`, `퀴즈 시작  - 닉네임: hyebin` 출력된다.
- 차이는 객체 통째로 다루냐, 필요한 값만 꺼내 쓰냐의 문법 차이다.

<br>

## useSearchParams()

쿼리스트링을 읽고 수정한다.

```jsx
function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const page = searchParams.get("page");

  const handleFilterChange = (newCategory) => {
    setSearchParams({ category: newCategory, page: 1 });
  };
}
```

<br>

## useNavigate()

조건이나 이벤트 후 동적으로 라우팅한다.

```jsx
function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await login();
    if (success) {
      navigate("/dashboard"); // 로그인 성공 → 대시보드로 이동
    }
  };
}
```

<br>
<Comment/>
