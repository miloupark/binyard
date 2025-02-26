# Git
무지로부터 오는 불안을 아십니까, 그렇다면 공부하면 되지 않겠습니까?<br>

## 내 브랜치에 최신 변경사항 반영하기

![gitmerge](git1.png)
![gitmerge](git2.png)

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
![gitmerge](git5.png)
![gitmerge](git6.png)

```md
# 내 브랜치로 이동
$ git checkout 내브랜치
$ git merge dev
```
- 히스토리 유지

#### Rebase

![gitmerge](git3.png)
![gitmerge](git4.png)

```md
# 내 브랜치로 이동
$ git checkout 내브랜치
$ git rebase dev
```