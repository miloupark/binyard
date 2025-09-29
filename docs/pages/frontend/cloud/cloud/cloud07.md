# CI/CD

### CI(Continuous Integration)/CD(Continuous Deployment or Delivery)

![](./images/cloud13.png)

테스트(Test), 통합(Merge), 배포(Deploy)의 과정을 자동화하는 기술 도구이다.

## CI와 CD의 구분

CI, 지속적 통합

- 여러 개발자의 코드를 자주 통합하고,
- 자동 빌드 & 테스트를 통해 품질을 보장하는 단계.
- CI: GitHub Actions, GitLab CI, Jenkins

CD, 지속적 배포 or 전달

- CI를 통과한 코드를 스테이징/프로덕션 환경에 자동 반영.
- `Delivery`: 자동으로 스테이징까지 올라가고, 운영 배포는 승인 버튼을 눌러야 함
- `Deployment`: 승인 없이 운영 서버까지 자동 배포
- CD: ArgoCD, Spinnaker, AWS CodePipeline

## CI/CD의 필요성

개발자가 새로운 기능을 작성하면 보통 이렇게 진행된다:

- 1. 코드를 작성하고 Commit
- 2. 브랜치에 Merge
- 3. 서버에 접속해서 최신 코드를 내려받고 실행

이 과정은 `사람이 직접 반복`해야 하므로 시간이 오래 걸리고 실수가 생기기 쉽다.  
💡 따라서 `CI/CD 파이프라인`을 구축하여 자동화하면, 개발자는 코드 작성에만 집중할 수 있다.

## CI/CD의 장점

- 사람 손으로 하던 단순 작업을 자동화 → `개발 생산성 향상`
- 테스트 자동 실행으로 `버그 조기 발견`
- 배포 속도 빨라짐 → `피드백 루프 단축`
- 배포 과정의 표준화 → `안정적인 서비스 운영`

<br>
<Comment/>
