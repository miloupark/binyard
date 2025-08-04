# Git & GitHub <badge type=info text=""></badge>

::: info Reference

- [📖 GitHub Docs](https://docs.github.com/en)
- [📖 GitHub Pull Request Docs](https://docs.github.com/en/pull-requests)
- [📚 GitHub Glossary](https://docs.github.com/en/get-started/learning-about-github/github-glossary)
  :::

## Git & GitHub

### 🔗 Git

- [📎 Git](https://git-scm.com/): 분산형 버전 관리 도구로 코드의 변경 이력을 기록하고 협업을 돕는다.
- 쉽게 말해, 코드 변경 이력을 기록하는 도구다.

::: info 설치

- [🍺 Homebrew](https://brew.sh/)
- [💻 Download for macOS Git](https://git-scm.com/downloads/mac)

:::

<br>

### 🐙 GitHub

- [📎 GitHub](https://github.com/): Git 저장소를 온라인에서 관리할 수 있게 해주는 클라우드 호스팅 플랫폼

- 온라인 백업과 공유, 협업이 가능한 온라인 코드 저장소

<br>

### Git GUI

- [GUI Client](https://git-scm.com/downloads/guis?os=mac)
- [GitHub Desktop](https://github.com/apps/desktop?locale=ko-KR)
- [SourceTree](https://www.sourcetreeapp.com/)
- [GitKraken](https://www.gitkraken.com/)

## Git 기본 흐름

```bash
# (1) 폴더 초기화
$ git init

# (2) 파일 추가
$ git add .       # 전체 파일 추가
$ git add 파일명   # 특정 파일만 추가

# (3) 커밋 (스냅샷 저장)
$ git commit -m "커밋 메시지"

# (4) GitHub 원격 저장소 연결
$ git remote add origin https://github.com/아이디/레포명.git

# (5) GitHub로 업로드 (업스트림 지정 포함)
$ git push -u origin main

# (6) 상태 확인
$ git status
```

::: info 🪏 git init
지금 이 폴더부터 Git으로 관리할게요!라고 선언하는 명령어

- 개발 프로젝트를 Git으로 버전 관리할 준비를 할 때 한 번만 입력하면 된다.
- 실행하면 .git이라는 숨김 폴더가 생성되어, 이 폴더 안에서 Git이 코드 변경 사항을 추적하게 된다.
- 명령어를 입력하기 전에는 현재 디렉토리 위치를 꼭 확인하자! (원치 않는 폴더에서 실행하지 않도록 주의)

:::

::: info ⬆️ git push

- `-u` 옵션은 "업스트림(기본 원격 브랜치)"을 설정하는 역할이다.
- 이후부터는 `git push`만 입력해도 origin/main으로 푸시된다.

:::

## Git 설정

::: info Git 설정 범위와 설정 파일
Git은 지역(Local), 전역(Global), 시스템(System) 3가지 범위로 설정 가능하다.

- 지역(Local): 특정 저장소에만 적용 → 해당 폴더 안에서만 유효 (`.git/config`)
- 전역(Global): 현재 사용자 계정 전체에 적용 → 대부분 이걸 사용 (`~/.gitconfig`)
- 시스템(System): 컴퓨터 전체 사용자에게 적용 → 잘 사용하지 않음 (`/etc/gitconfig`)

:::

- #### 전역설정

```bash
# 전역 설정 (사용자 정보)
$ git config --global user.name 이름
$ git config --global user.email 이메일
```

- #### 설정 확인/삭제

```bash
# 설정 전체 보기
$ git config --list

# 이름만 보기
$ git config --global user.name

# 이메일만 보기
$ git config --global user.email

# 이름 삭제
$ git config --global --unset user.name

# 이메일 삭제
$ git config --global --unset user.email
```

- #### 로컬 설정 (해당 레포에만 적용)

```bash
# 이름 설정
$ git config user.name 이름

# 이메일 설정
$ git config user.email 이메일

```

## Git 필수 명령어

- #### 커밋 로그 확인

```bash
# 전체 로그
$ git log

# 한 줄 요약
$ git log --oneline
```

- 커밋 메세지로 코드 변경점 추측이 가능하다.

- #### 변경 사항 확인

```bash
# 현재 변경된 파일 목록 확인
$ git status

# 파일의 변경 내용 확인
$ git diff
```

- #### 스테이징 & 커밋

```bash
# 변경된 파일을 스테이징 영역에 추가
$ git add 파일명      # 특정 파일만 추가
$ git add .           # 전체 변경 파일 추가

# 커밋 생성 (현재 스테이징된 변경사항을 하나의 버전 기록으로 저장)
$ git commit -m "커밋 메시지"

# 기본 커밋 (편집기 열림)
$ git commit
```

- #### 되돌리기

```bash
# 마지막 커밋 취소 (스테이징까지 복원)
$ git reset HEAD~1

# 수정 전 상태로 복원
$ git restore 파일명
```

- #### 레포지토리 복사 & 변경 가져오기

```bash
# 저장소 복제
$ git clone URL

# 변경사항 가져오기
$ git pull
```

::: info 🧩 git pull 사용 예시

#### main 브랜치에서 최신 내용 가져올 때

```bash
$ git checkout main
$ git pull           # == git pull origin main
```

#### feature/login 브랜치에 main의 최신 변경사항을 병합할 때

```bash
$ git checkout feature/login
$ git pull origin main
```

:::
::: info 🎣 git pull

#### git pull의 내부 작동

```bash
$ git pull

# git pull은 아래 두 명령어를 순서대로 실행한 것과 같다.
$ git fetch
$ git merge
```

#### 🔁 git fetch

```bash
$ git fetch origin
```

- origin 저장소의 최신 커밋을 가져오지만, 내 로컬 브랜치에는 반영되지 않는다.
- 코드를 반영하지 않기 때문에 미리 확인할 수 있다.
- 이후 merge 또는 rebase를 통해 직접 내 브랜치에 반영해야 한다.

#### 🔀 git merge

```bash
$ git merge origin/main
```

```plaintext
A---B         ← main (origin)
     \
      C---D---M   ← feature (merge 완료)
```

- fetch로 가져온 변경사항을 내 브랜치에 병합한다.
- 변경점이 겹치면 충돌이 발생할 수 있다.
- 병합 시 merge commit이 생성되어, 브랜치가 합쳐졌다는 기록이 남는다.

#### 🔁 git rebase

```bash
$ git rebase origin/main
```

- 커밋 히스토리를 직선으로 정리한다.
- 마치 최신 커밋 이후에 작업한 것처럼, 내 커밋을 그 뒤에 다시 쌓는다.
- 충돌 발생 시 해결 후 `git rebase --continue` 명령어로 이어서 진행하면 된다.

```plaintext
# rebase 전
A---B---C---D   ← origin/main
         \
          C'---D'   ← feature (rebase 중)
```

- `A`, `B`: 공통 조상 커밋
- `C`, `D`: 원래 feature 브랜치에서 만든 커밋
- `C'`, `D'`: `git rebase origin/main`을 실행하면 만들어지는 새 커밋(rebased 커밋)

```plaintext
# rebase 후
A---B---C'---D' (rebased feature 완료)
```

- `C`, `D`: 삭제되지 않지만 히스토리에서 사라짐 (git reflog으로 확인 가능)
- `C'`, `D'`: `origin/main` 최신 커밋 이후에 새로 만들어진 커밋 (내용 유사, ID는 다름)

:::

## Git Branch

- #### 브랜치 기본

```bash
 # 브랜치 목록
$ git branch

# 새 브랜치 생성
$ git branch 브랜치명

# 브랜치 이동 (switch 권장 / checkout 구버전)
$ git switch 브랜치명
$ git checkout 브랜치이름

# 생성 + 이동
$ git switch -c 브랜치명
$ git checkout -b 브랜치이름
```

- #### 브랜치 병합

```bash
# 병합 대상(main)으로 이동
$ git switch main

# 병합할 브랜치의 변경사항을 가져옴
$ git merge 브랜치

```

- 병합은 `main ⬅️ 브랜치` 방향으로 이루어진다.  
  즉, 브랜치의 변경사항이 main 브랜치에 들어오게 된다.
- 실무에서는 브랜치를 직접 병합하기보다는 GitHub의 `Pull Request`를 통해 코드 리뷰 후 병합하는 방식이 일반적이다.

## GitHub Pull Request

```bash
$ git push origin 브랜치명
```

- GitHub Repository로 이동 > `Compare & pull request`
- Open a pull request > base(최종 브랜치) & compare(기능 브랜치) 설정

## 🐧 Linux 명령어

- #### 디렉토리 이동 관련

```bash
# 해당 폴더로 이동 (change directory)
$ cd 폴더명

# 하위 폴더로 한 번에 이동
$ cd 폴더명/폴더명

# 상위 폴더로 이동
$ cd ..

# 상위 폴더 2단계 이동
$ cd ../..
```

- #### 폴더 및 파일 확인

```bash
# 현재 위치, 경로 (print working directory)
$ pwd

# 현재 위치의 파일 목록 보기 (list)
$ ls

# 숨김 파일 포함 전체 목록 (list all)
$ ls -a

# 상세 정보 포함 목록
$ ls -l

# 파일 크기 보기 쉽게 출력
$ ls -lh
```

- #### 파일 및 폴더 생성

```bash
# 새 폴더 생성 (make directory)
$ mkdir 폴더명

# 새 파일 만들기
$ touch 파일명
```

- #### 파일 및 폴더 삭제

```bash
# 파일 삭제 (Remove)
$ rm 파일명

# 폴더 삭제 - 재귀적으로 내부까지 삭제 (Recursive)
$ rm -r 폴더명

# 🚨 폴더 강제 삭제 (Recursive + Force)
# 삭제 전 물어보지 않고, 존재하지 않는 파일도 에러 없이 넘어감
$ rm -rf 폴더명

# 폴더 삭제 (Recursive + interactive)
# 폴더 내부 항목마다 삭제 여부 하나씩 물어봄
$ rm -ri 폴더명
```

- #### 기타

```bash
# 티미널 화면 정리
$ clear
```
