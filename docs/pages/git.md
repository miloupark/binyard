# Git
무지로부터 오는 불안을 아십니까, 그렇다면 공부하면 되지 않겠습니까? 예..<br>
처음으로 깃랩에 올려서 작업할 일이 생겼다! 앞자리에 아는 것을 설명하는 능력이 좋은 갓프롱트 개발자 분을 괴롭혀 많이 알아내는 중이다.

## 커밋

- 모든 파일 커밋하기<br>
모든 변경 사항을 스테이징하고 커밋
```md
$ git add .
$ git commit -m "message"
```

<br>

- 특정 파일만 선택하여 커밋하기 <br>
변경된 파일 목록을 확인하고 특정 파일만 선택하여 커밋
```md
// 작업한 내역 확인
$ git status 

// 특정 파일 스테이징
$ git add 파일경로/복붙

// 커밋 메세지
$ git commit -m "message"
```

<br>

- 방금 한 커밋 취소하기<br>
마지막 커밋을 취소하고 변경 사항을 스테이징 이전 상태로 되돌림
```md
$ git reset HEAD^
```

<br>

- 방금 한 커밋 취소 (스테이징 유지) <br>
이전 커밋을 취소하지만, 변경 사항을 스테이징 상태로 유지
```md
$ git reset --soft HEAD^
```
-수정한 파일이 많은데, 2개만 커밋하게되면 <code>$ git reset HEAD^</code>하면 다시 100개 중 2개를 찾아야 하는 귀찮음 방지. <code>--soft</code>를 붙이면 커밋만 취소되고, 변경 내용은 유지됨



## 내 브랜치에 최신 변경사항 반영하기

<!-- ![gitmerge](/docs/public/git1.png) -->
<!-- ![gitmerge](/docs/public/git2.png) -->

### 💡 상황 정리
- 로컬 <code>dev</code>브랜치는 최신 상태 
- 이후 <code>dev</code>에 추가 작업 발생
- 내 브랜치에 <code>dev</code>의 추가 작업을 반영해야함
- 아직 내 브랜치에서는 작업하던 코드는 없음

```md
# 내 브랜치로 이동
$ git checkout 내 브랜치

# 최신 dev 브랜치 병합
$ git merge dev
```

## dev가 최신 상태가 아닐수도 있다면?
- 로컬 <code>dev</code>가 원격 <code>dev</code>보다 뒤쳐져 있을 가능성이 있으므로, 최신 <code>dev</code>를 가져오고 병합하는 것이 좋음

```md
# dev 브랜치로 이동
git checkout dev

# 최신 dev 가져오기 (원격)
git pull origin dev

# 다시 내 브랜치로 이동
git checkout 내브랜치

# 최신 dev 병합
git merge dev
```

## Merge or Rebase로 내 브랜치 작업 반영하기

### 💡 상황 정리
- 로컬 <code>dev</code>가 최신 상태에서 내 브랜치 생성
- 내 브랜치에서 작업 진행
- 나중에 추가된 <code>dev</code> 변경 사항을 내 브랜치에 반영해야되는 상황

#### Merge 
<!-- ![gitmerge](/docs/public/git5.png) -->
<!-- ![gitmerge](/docs/public/git6.png) -->

```md
# 내 브랜치로 이동
$ git checkout 내브랜치
$ git merge dev
```
- 히스토리 유지

#### Rebase

<!-- ![gitmerge](/docs/public/git3.png) -->
<!-- ![gitmerge](/docs/public/git4.png) -->

```md
# 내 브랜치로 이동
$ git checkout 내브랜치
$ git rebase dev
```