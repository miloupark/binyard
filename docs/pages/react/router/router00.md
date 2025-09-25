# React Router

::: info Reference

- [React Router](https://reactrouter.com/home)
- [Picking a Mode](https://reactrouter.com/start/modes#picking-a-mode)
- [useParams](https://reactrouter.com/api/hooks/useParams)
- [↳ useParams](https://api.reactrouter.com/v7/functions/react_router.useParams.html)
- []()

:::

## React Router란?

React Router는 리액트 앱에서 클라이언트 사이드 라우팅(CSR)을 구현하는 라이브러리이다.  
URl 경로에 따라 특정 컴포넌트만 교체 렌더링하므로, 전체 새로고침 없이도 화면 전환을 부드럽게 처리할 수 있다.

`react-router-dom` 패키지를 설치해 사용되며, SPA, SSR, SSG 등 다양한 아키텍처에서 활용할 수 있는 다중 전략 라우터다.

<br>

### React Router를 사용하는 이유

- a 태그: 페이지 전체가 새로고침되어 상태가 초기화되고 화면이 깜빡인다.
- React Router: 필요한 부분만 렌더링되어 상태가 유지되고, 전환이 부드럽다.

💡 결과적으로 사용자 경험(UX)이 개선된다.

<br>

### CSR vs SSR

| 구분 | CSR (Client-Side Routing) | SSR (Server-Side Routing)    |
| ---- | ------------------------- | ---------------------------- |
| 특징 | 브라우저에서 경로만 바꿈  | 서버가 요청마다 새 HTML 전달 |
| 장점 | 빠른 전환, 부드러운 UI    | SEO, 초기 로딩 빠름          |
| 단점 | SEO 불리, 첫 로딩 무거움  | 매 요청 시 리소스 로딩       |

<br>

## React Router 주요 개념

- `BrowserRouter`: 보편적으로 사용하는 라우터 (히스토리 API 기반)
- `HashRouter`: 정적 호스팅 환경에서 유용 (# 기반 URL)
- `Routes`: 라우트들의 컨테이너
- `Route`: 특정 경로와 컴포넌트를 매핑
- `Link`: a 태그 대체, 부드러운 페이지 이동
- `useNavigate`: 코드에서 직접 다른 경로로 이동
- `Outlet`: 중첩 라우트에서 자식 컴포넌트가 렌더링되는 자리
- `NotFound` 처리: `path="\*"`로 지정해 404 페이지 처리 가능

<br>

## 라우팅에서의 URL 구조

```plaintext
프로토콜://도메인/경로?쿼리#해시
https://example.com/users/123?tab=profile#section1
```

- `경로(Path)`: /users/123

- `Route Param (파라미터)`: /users/:id → /users/123  
  리소스의 고유 식별자 전달에 사용
- `Query Param (쿼리스트링)`: /products?category=shoes&page=2  
  필터, 옵션, 페이지네이션 등에 활용
- `Hash`: #section1  
  특정 영역으로 스크롤 이동

<br>

## Link vs Route

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* 이동할 경로 지정 (전체 새로고침 없이 전환) */}
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
      </nav>
      <Routes>
        {/* 현재 URL과 일치하는 컴포넌트를 렌더링 */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 지정되지 않는 URL은 NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Link

- 사용자가 클릭해서 어디로 이동할지를 지정한다.
- 실제로는 a 태그처럼 보이지만, 페이지 전체 새로고침을 막고 React Router가 내부적으로 상태를 바꿔준다.
- 즉, 탐색(네비게이션)을 담당한다.

### Route

- 현재 URL이 무엇인지 확인하고, 그 경로에 맞는 컴포넌트를 렌더링한다.
- 예를 들어 /about이면 About 컴포넌트를, /이면 Home 컴포넌트를 보여준다.
- 즉, 무엇을 보여줄지를 결정한다.

<br>
<Comment/>
