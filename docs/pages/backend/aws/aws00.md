# Amazon Web Services (AWS)

![aws](./images/aws01.png)

::: info 🔖 Reference

- [AWS 공식 홈페이지](https://aws.amazon.com/ko/)
- [실전 Amazon S3와 CloudFront로 정적 파일 배포하기](https://aws.amazon.com/ko/blogs/korea/amazon-s3-amazon-cloudfront-a-match-made-in-the-cloud/)

:::
::: info 📘 Glossary

- 배포: 내 컴퓨터 안에서만 실행되던 프로젝트를 인터넷에 공개해 다른 사용자도 접근할 수 있도록 만드는 과정
- 웹 호스팅: 웹 페이지를 인터넷에 공개하는 것 (= 배포)
- 버킷: S3 안에서 파일을 저장하는 큰 폴더
- 객체 : S3 버킷에 업로드된 개별 파일
- 리전(Region): AWS 서비스가 제공되는 물리적 지역 단위
- 가용 영역(AZ): 하나의 리전 안에 있는 독립적인 데이터 센터 묶음

:::

## AWS란?

AWS는 세계에서 가장 널리 사용되는 클라우드 플랫폼으로,  
200여 개의 서비스를 제공하며 글로벌 인프라(리전·가용 영역)를 통해 안정적인 서비스를 운영한다.  
즉, 원격으로 컴퓨터 자원을 빌려 사용할 수 있게 해주는 클라우드 서비스다.

프론트엔드 개발자는 이 중 `배포와 호스팅에 필요한 서비스`들을 주로 활용한다.

- 강력한 서버를 필요할 때만 빌려 쓸 수 있다.
- 배포, 데이터 저장, 인공지능 기능 등을 즉시 활용할 수 있다.
- 직접 서버를 구매·운영하지 않아도 되므로 비용과 관리 부담을 줄일 수 있다.

<br>

## 핵심 서비스

::: info 👩🏻‍💻 프론트엔드 개발자가 알아야 할 AWS 서비스
<br>
:::

### 배포 & 웹 호스팅

- `S3`: 정적 파일 저장 및 웹 호스팅
- `CloudFront`: CDN으로 전 세계 어디서든 빠른 콘텐츠 전송

React 프로젝트를 빌드 후 S3에 올리고, CloudFront로 연결하면 전 세계 어디서든 빠르게 접속 가능

### 도메인 & 인증

- `Route 53`: 도메인 관리 및 DNS
- `Certificate Manager`: HTTPS 인증서 발급

구매한 도메인을 Route 53으로 관리하고, ACM으로 발급받은 SSL 인증서를 적용하면 HTTPS 접속 가능

### 데이터 & 백엔드

- `RDS`: 관계형 데이터베이스 서비스
- `DynamoDB`: 서버리스 NoSQL 데이터베이스
- `Lambda`: 서버리스 함수 실행 서비스

API 서버를 직접 운영하지 않고 Lambda를 이용해 간단한 백엔드 로직 처리 가능

<br>
<Comment/>
