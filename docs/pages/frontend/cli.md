# CLI Cheatsheet

> 자주 쓰지만 매번 까먹는 CLI 명령어들을 정리해둔 개인용 치트시트

## 📦 Node.js & npm

```bash
# Node.js 버전 확인
$ node -v
```

```bash
# npm 버전 확인
$npm -v
```

```bash
# package.json 생성
$ npm init
```

```bash
# 의존성 설치
$ npm install
```

```bash
# 개발 서버 실행
$ npm run dev
```

## 🛠️ VitePress

```bash
# 개발 서버 실행
$ npm run docs:dev
```

```bash
# 정적 페이지 빌드
$ npm run docs:build
```

```bash
# 빌드 결과 미리보기
$ npm run docs:preview
```

## 🔧 Git

```bash
# 변경사항 확인
$ git status
```

```bash
# 현재 디렉터리 내의 모든 변경 파일 스테이징 영역에 추가
$ git add .
```

```bash
# 특정 파일 하나만 스테이징
$ git add 파일명

# 특정 폴더 내의 변경 파일만 스테이징
$ git add 디렉터리명/

# 전체 변경 파일 + 삭제된 파일 포함해서 스테이징
$ git add -A
```

```bash
# 커밋 생성
$ git commit -m "메시지"
```

```bash
# 원격 저장소로 커밋 내용 푸시원격 저장소로 커밋 내용 푸시
$ git push
```

```bash
# 간략 로그 보기
$ git log --oneline
```

```bash
# 커밋 하나 취소
$ git reset --hard HEAD~1
```

## 💻 기타 쉘 명령어

```bash
# 현재 디렉터리 목록
$ ls
```

```bash
# 디렉터리 이동
$ cd 디렉터리명
```

```bash
# 새 파일 생성
$ touch 파일명
```

```bash
# 새 폴더 생성
$ mkdir 폴더명
```
