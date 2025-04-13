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

<br>

### ReactNative Expo 설치 및 프로젝트 생성

### expo 공식 문서

https://docs.expo.dev/get-started/create-a-project/

```shell
npx create-expo-app@latest
```

- expo에서 제공하는 템플릿으로 프로젝트가 만들어짐

https://docs.expo.dev/get-started/set-up-your-environment/

- 환경설정

```shell
npx install
```

```shell
npx expo start
```

## Component

### ios SafeAreaView

- https://reactnative.dev/docs/safeareaview

### Pressable

```tsx
<Pressable onPress={onPressFunction}>
  <Text>I'm pressable!</Text>
</Pressable>
```

- https://reactnative.dev/docs/pressable
- 버튼이 아닌 어떤 눌러야 하는 영역을 구현할 때 pressable 사용
- pressable로 텍스트를 감싸게 되면 버튼 컴포넌트처럼 onpress을 이용해서 핸들러르 연결해줄 수 있음
- TouchableOpacity, TouchableWithoutFeedback도 있지만 공식문서에서도 Pressable을 추천하고 있음, 가장 최근에 나온 컴포넌트이자 더 디테일한 동작들을 제어가능

### TouchableOpacity

- https://reactnative.dev/docs/touchableopacity

### TouchableWithoutFeedback

- https://reactnative.dev/docs/touchablewithoutfeedback

### expo 파일기반 라우팅

-폴더와 파일명이 경로가 된다. 인덱스 같은 경우에는 경로가 /이고

### expo vector icons

- https://icons.expo.fyi/Index

ex 예시

```jsx
<Tabs.Screen
  name="index"
  options={{
    title: "홈",
    tabBarIcon: ({ color, focused }) => (
      <Ionicons
        name={focused ? "home-sharp" : "home-outline"}
        size={24}
        color={color}
      />
    ),
  }}
/>
```

매개변수 focused의 값에 따라 아이콘을 다르게 보여주기 위해 삼항 연산자를 사용. focused가 true면 "home-sharp", false면 "home-outline"을 반환.

## 오류들

#### CoreSimulator 서비스 버전 불일치로 인한 시뮬레이터 통신 오류

```shell
CoreSimulator.framework was changed while the process was running.
Xcode.app was updated while the process was running.
Service version (1010.10) does not match expected (993.7)
```

- Xcode가 실행 중일 때 macOS 또는 Xcode가 업데이트되었거나, Simulator 관련 파일이 꼬임, 그 결과로 CoreSimulator 서비스 버전 불일치로 인해 시뮬레이터와의 통신이 완전히 끊긴 상태

```shell
killall Simulator

xcrun simctl shutdown all
xcrun simctl erase all
```

- erase all은 모든 시뮬레이터 초기화됨.
- 이후 재실행하니까 작동했다!!!

#### iOS/Android 시뮬레이터 실행 오류: bundleIdentifier와 package 설정 필수!

처음 프로젝트를 설정할 때 app.json 또는 app.config.js 파일에서 이 값을 생략했었는데, 실행 시 다음과 같은 오류가 발생했다:

```shell
iOS: Missing bundleIdentifier

Android: Missing package name

```

해결 방법은 간단하다. app.json 파일에서 아래와 같이 앱의 고유 식별자를 추가하면 된다:

```json
"ios": {
  "bundleIdentifier": "com.사용자이름.앱이름"
},
"android": {
  "package": "com.사용자이름.앱이름"
}
```

iOS 시뮬레이터나 Android Emulator에서 앱을 실행하려 할 때, bundleIdentifier (iOS)와 package (Android) 값이 설정되지 않으면 시뮬레이터가 앱을 실행하지 못하는 오류가 발생한다. 이 값들은 앱의 고유 식별자 역할을 하며, 실제 디바이스나 시뮬레이터에서 앱을 실행하려면 반드시 설정해줘야 한다.

### TypeScript <code>interface</code>와 <code>type</code>

<code>interface</code>, <code>type</code>은 둘 다 데이터의 구조를 설명해주는 설명서와 같음

```ts
// 친구의 정보를 담은 object가 있다면, 이 friend애가 어떤 구조를 갖는지 설명할 수 있음

const friend = {
  name: "훈이",
  age: 30,
};
```

- interface 사용 예시 :

```ts
interface Friend {
  name: string;
  age: number;
}
```

- interface는 중복 선언 가능

```ts
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

// 이렇게 두 번 선언하면 합쳐져서 아래처럼 작동함
// Animal = { name: string; age: number }
```

- Type Alias 사용 예시 :

```ts
type Friend = {
  name: string;
  age: number;
};
```

- type은 중복 선언 안 됨

```ts
type Animal = {
  name: string;
};

type Animal = {
  age: number;
}; // 에러, 같은 이름으로 두 번 선언하면 안됨
```

- type은 유니온, 튜플 등 더 다양한 걸 표현 가능

```ts
type Status = "success" | "error"; // 유니온
// 여러 선택지를 만들 수 있음

type Point = [number, number]; // 튜플
```

- 그래서 어떤 것을 써야 할까..?
- 단순한 객체 구조만 필요하고 확장할 가능성이 있다면 <code>interface</code>
- 다양한 타입 조합(유니온, 튜플 등)이나 복잡한 구조가 필요하다면 <code>type</code>
