# Animal Info Site <badge type="info" text="React SPA Basic"></badge><badge type="info" text="2025-08-12"></badge>

React와 react-router-dom을 학습한 동물 정보 검색 사이트입니다.  
동물 목록, 상세 페이지, 검색 기능을 구현하며 `SPA 라우팅`과 `상태 관리`를 연습했습니다.

::: info 📎 Quick Access

- 🚀 [Live Demo (GitHub Pages)](https://miloupark.github.io/Animal-info/)
- [GitHub Repository](https://github.com/miloupark/Animal-info)
- [React Router Docs](https://reactrouter.com/home)

:::

<br>

## 1. 메인 페이지에서 동물 목록 화면에 표시하기 <badge type="info" text="">[🪧 Milestone 1](https://github.com/miloupark/Animal-info/milestone/1?closed=1)</badge>

- Issues: [[🪿 M1] 메인 페이지에서 동물 목록 화면에 표시하기](https://github.com/miloupark/Animal-info/issues/1)
- Branch: [feature/m1](https://github.com/miloupark/Animal-info/tree/feature/m1)
- PR: [[🪿 M1] 메인 페이지 라우팅 및 동물 목록 렌더링, 상세 페이지 연결](https://github.com/miloupark/Animal-info/pull/4)

<br>

### 주요 구현 포인트

- 동물 데이터를 map으로 렌더링
- Link에 `/detail/${el.id}` 경로를 지정해 카드별 상세 페이지 연결

```jsx:line-numbers {5,7}
// src/page/Main.jsx;
function Main() {
  return (
    <ul>
      {data.map((el) => (
        <li key={el.id}>
          <Link to={`/detail/${el.id}`}>
            <img src={el.img} alt={el.name} />
            <div>{el.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Main;
```

<br>

## 2. 동물 상세 정보 페이지 만들기 <badge type="info" text="">[🪧 Milestone 2](https://github.com/miloupark/Animal-info/milestone/2?closed=1)</badge>

- Issues: [[🪿 M2] 동물 상세 정보 페이지 만들기](https://github.com/miloupark/Animal-info/issues/2)
- Branch: [feature/m2](https://github.com/miloupark/Animal-info/tree/feature/m2)
- PR: [[🪿 M2] useParams로 동물 상세 페이지 구현](https://github.com/miloupark/Animal-info/pull/5)

<br>

### 주요 구현 포인트

- Route `path="/detail/:id"`로 동적 라우팅 설정
- useParams()를 사용해 URL에서 id 값을 추출
- id 값과 data.js를 매칭해 해당 동물 데이터 가져오기

::: code-group

```jsx:line-numbers {10} [App.jsx]
// src/App.jsx
function App() {
  return (
    <>
      <header>
        <h1>💚 동물 조아 💚</h1>
      </header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
      <footer>all rights reserved to OZ</footer>
    </>
  );
}

export default App;
```

```jsx:line-numbers {3,4} [Detail.jsx]
// src/page/Detail.jsx
function Detail() {
  const params = useParams();
  const animalData = data.find((el) => el.id === Number(params.id));
  return (
    <section className="detail">
      <img src={animalData.img} alt={animalData.name} />
      <h2>{animalData.name}</h2>
      <div>{animalData.description}</div>
    </section>
  );
}

export default Detail;
```

:::

## 3. 동물 이름으로 검색기능 & 검색 결과 페이지 생성하기 <badge type="info" text="">[🪧 Milestone 3](https://github.com/miloupark/Animal-info/milestone/3?closed=1)</badge>

- Issues: [[🪿 M3] 동물 이름으로 검색기능 만들기 & 검색 결과 페이지 생성하기](https://github.com/miloupark/Animal-info/issues/3)
- Branch: [feature/m3](https://github.com/miloupark/Animal-info/tree/feature/m3)
- PR: [[🪿 M3] useSearchParams 기반 검색 페이지 구현 및 korean-regexp 적용](https://github.com/miloupark/Animal-info/pull/6)

<br>

### 주요 구현 포인트

- filter()로 이름에 검색어가 포함된 동물만 추출
- 검색 입력값을 useNavigate로 `/search?query=검색어` 경로로 이동
- useSearchParams()를 사용해 URL의 query 값을 읽어옴

::: code-group

```jsx:line-numbers {4,11,} [App.jsx]
// src/App.jsx
function App() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>💚 동물 조아 💚</h1>
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        <button onClick={() => navigate(`/search?animal=${inputValue}`)}>검색</button>
      </header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
      <footer>all rights reserved to OZ</footer>
    </>
  );
}

export default App;
```

```jsx:line-numbers {3,4,7,11} [Search.jsx]
// src / page / Search.jsx;
function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("animal");
  const reg = getRegExp(param);

  const filteredData = data.filter((el) => el.name.match(reg));

  return (
    <ul>
      {filteredData.map((el) => (
        <li key={el.id}>
          <Link to={`/detail/${el.id}`}>
            <img src={el.img} alt={el.name} />
            <div>{el.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Search;
```

:::

<br>

## 📚 Learning Log

::: info Reference

- [React-Router Docs](https://reactrouter.com/home)
- [Routes](https://api.reactrouter.com/v7/functions/react_router.Routes.html)
- [Route](https://api.reactrouter.com/v7/functions/react_router.Route.html)
- [useParams](https://api.reactrouter.com/v7/functions/react_router.useParams.html)
- [useSearchParams](https://api.reactrouter.com/v7/functions/react_router.useSearchParams.html)
- [korean-regexp | 한글 자동완성을 위한 정규식 ](https://www.npmjs.com/package/korean-regexp)

:::

#### SPA 라우팅

- `react-router-dom`의 Routes, Route, useParams, useSearchParams
- 동적 라우팅`(/detail/:id)`과 `쿼리 파라미터(/search?animal=...)` 처리

#### 데이터 렌더링

- `.map()`으로 리스트 렌더링
- `.filter() + korean-regexp`로 한글 초성 검색 구현

#### URL 기반 상태 관리

- 검색어를 URL 쿼리로 관리해 새로고침에도 상태 유지

#### 기타

- GitHub Pages에 SPA 배포 시 `base`/`basename` 설정과 `404.html` SPA fallback 적용  
  (`github pages spa 404` 키워드로 서치 후 적용)

<br>
<Comment/>
