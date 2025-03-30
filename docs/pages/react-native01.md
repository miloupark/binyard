# React Native 
### ReactNative CLI 설치 및 프로젝트 생성
```shell
npx @react-native-community/cli@latest init AwesomeProject
```
- Vscode Terminal에 위 명령어 실행하여 새 프로젝트 생성 <br>
- <code>File > Add Folder to Workspace</code> 선택 후 프로젝트를 워크스페이스에 추가

<br>

### 프로젝트 디렉토리로 이동
```shell
cd /경로/프로젝트폴더
```
- 생성된 프로젝트 폴더로 이동

<br>

### 개발 서버 및 앱 실행
```shell
npm start
```
- Metro 번들러를 시작 (React Native의 JavaScript 번들러)
- 코드 변경 사항을 감지하고 자동으로 앱을 새로고침
- 디버깅 콘솔을 제공
- 앱을 iOS나 Android 기기/에뮬레이터에 연결할 수 있도록 함 <br>
(npm start는 번들러만 실행하는 명령어이고, 앱 실행까지 포함하려면 <code>npm ios</code>, <code>npm ios</code>추가 명령이 필요)

<br>

```shell
npm run ios
```
- ios 시뮬레이터에서 앱 실행

<br>

```shell
npm run android
```
- android 애뮬레이터에서 앱 실행
