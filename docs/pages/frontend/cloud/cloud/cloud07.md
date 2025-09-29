# CI/CD

### CI(Continuous Integration)/CD(Continuous Deployment or Delivery)

::: info Reference

- [카카오엔터프라이즈가 GitHub Actions를 사용하는 이유](https://tech.kakao.com/posts/516)
- [GitHub Actions 설명서](https://docs.github.com/ko/actions)
- [GitHub Actions에 대한 워크플로 명령](https://docs.github.com/ko/actions/reference/workflows-and-actions/workflow-commands)

:::

## CI/CD란?

![](./images/cloud13.png)

테스트(Test), 통합(Merge), 배포(Deploy)의 과정을 자동화하는 기술 도구이다.

<br>

## CI와 CD의 구분

CI, 지속적 통합

- 여러 개발자의 코드를 자주 통합하고,
- 자동 빌드 & 테스트를 통해 품질을 보장하는 단계.
- GitHub Actions, GitLab CI, Jenkins

CD, 지속적 배포 or 전달

- CI를 통과한 코드를 스테이징/프로덕션 환경에 자동 반영.
- `Delivery`: 자동으로 스테이징까지 올라가고, 운영 배포는 승인 버튼을 눌러야 함
- `Deployment`: 승인 없이 운영 서버까지 자동 배포
- ArgoCD, Spinnaker, AWS CodePipeline

<br>

## CI/CD의 필요성

개발자가 새로운 기능을 작성하면 보통 이렇게 진행된다:

- 1. 코드를 작성하고 Commit
- 2. 브랜치에 Merge
- 3. 서버에 접속해서 최신 코드를 내려받고 실행

이 과정은 `사람이 직접 반복`해야 하므로 시간이 오래 걸리고 실수가 생기기 쉽다.  
💡 따라서 `CI/CD 파이프라인`을 구축하여 자동화하면, 개발자는 코드 작성에만 집중할 수 있다.

<br>

## CI/CD의 장점

- 사람 손으로 하던 단순 작업을 자동화 → `개발 생산성 향상`
- 테스트 자동 실행으로 `버그 조기 발견`
- 배포 속도 빨라짐 → `피드백 루프 단축`
- 배포 과정의 표준화 → `안정적인 서비스 운영`

<br>

## GitHub Actions vs Jenkins

GitHub Actions, Jenkins를 사용할 지는 상황에 맞게 선택하면 된다.

- Jenkins는 별도의 서버에 구축을 해야 한다는 단점이 있다. 따라서 서버를 빌리는 비용이 발생하게 된다.
- GitHub Actions는 별도의 서버 구축없이 GitHub에 내장되어 있는 GitHub Actions 기능을 사용할 수 있다. 비용적인 측면에서도 유리하고 세팅하는 데 시간을 쓸 필요도 없다.

<br>

## GitHub Actions CI/CD 흐름

GitHub Actions를 로직을 실행시킬 수 있는 일종의 컴퓨터라고 생각하면 된다.  
즉, GitHub Actions는 CI/CD 과정에서 빌드, 테스트, 배포에 대한 로직을 실행시키는 서버의 역할을 한다.

![](./images/cloud14.png)

- 1. 코드 작성 후 GitHub에 Commit & Push
- 2. Push를 감지해서 GitHub Actions에 작성한 로직이 실행  
     빌드(Build) → 테스트(Test) → 서버로 배포(Deploy)
- 3. 서버에서 배포된 최신 코드로 서버를 재실행

<br>

## GitHub Actions 기본 문법

![](./images/cloud15.png)

::: details 🔍 yml

```yml
# Workflow
name: GitHub Actions 실행시켜보기

on:
  push:
    branches:
      - main

# Workflow는 여러 개의 Job으로 이루어질 수 있고
jobs:
  My-Deploy-Job:
    runs-on: ubuntu-latest

    # 하나의 Job은 여러 개의 Step으로 이루어져 있다.
    steps:
      - name: Hello World 출력하기
        run: echo "Hello World"

      - name: 여러 명령어 문장 작성하기
        run: |
          echo "Good"
          echo "Morning"
          pwd

      - name: GitHub Actions 자체 저장되어 있는 변수 사용해보기
        run: |
          echo $GITHUB_REPOSITORY
          echo $GITHUB_SHA

      - name: GitHub Actions Secret 변수 사용
        run: |
          echo ${{ secrets.MY_NAME }}
          echo ${{ secrets.MY_HOBBY }}
```

:::

#### Workflow 생성

- `.github/workflows/deploy.yml` 파일 생성
- `on.push.branches: main` → main 브랜치에 push가 발생할 때 실행되도록 설정

#### Job과 Step

- `Job`: 실행 환경 단위
- `Step`: Job 안에서 실제로 실행할 작업

<br>

### Github Actions 실행 화면

워크플로우를 추가하고 main 브랜치에 push하면 Actions 탭에서 실행 로그를 확인할 수 있다.

![](./images/cloud16.png)

![](./images/cloud17.png)

- 각 Step이 정상적으로 실행되면 `✓` 표시와 함께 로그가 출력된다.
- 여러 Step을 통해서 명령어 실행, 변수 출력 등을 확인할 수 있다.

<br>

### Github Secrets and variables

GitHub Actions에서는 민감한 값을 코드에 직접 적지 않고, `Secrets`로 등록해서 사용한다.

![](./images/cloud18.png)

![](./images/cloud19.png)

- Repository → Settings → Secrets and variables → Actions에서 등록

<br>

![](./images/cloud20.png)

- 로그에는 값이 그대로 노출되지 않고 `***`로 마스킹 처리된다.

<br>
<Comment/>
