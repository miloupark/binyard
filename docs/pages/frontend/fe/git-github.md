# Git & GitHub <badge type=info text=""></badge>

## 🔗 Git

- 분산형 버전 관리 도구로 코드의 변경 이력을 기록하고 협업을 돕는다.
- 쉽게 말해, 코드 변경점 기록이다.
- [📎 Git](https://git-scm.com/)

::: info 설치

- [🍺 Homebrew](https://brew.sh/)
- [Download for macOS Git](https://git-scm.com/downloads/mac)

:::

## 🐙 GitHub

- Git 저장소를 온라인에서 관리할 수 있게 해주는 클라우드 호스팅 플랫폼
- 온라인 백업과 공유, 협업이 가능한 온라인 코드 저장소
- [📎 GitHub](https://github.com/)

<br>

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

# (5) 푸시 (올리기)
$ git push -u origin main

# (6) 상태 확인
$ git status
```

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

- #### 되돌리기

```bash
# 마지막 커밋 취소
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

## Git GUI

- [GUI Client](https://git-scm.com/downloads/guis?os=mac)
- [GitHub Desktop](https://github.com/apps/desktop?locale=ko-KR)
- [SourceTree](https://www.sourcetreeapp.com/)
- [GitKraken](https://www.gitkraken.com/)

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
