# ⚖️SUL-client
[![npm Badge](https://img.shields.io/badge/npm-6.14.6-orange)](https://docs.npmjs.com/cli/version)
[![react-native Badge](https://img.shields.io/badge/react--native-0.63.1-blue)](https://reactnative.dev/versions)
[![react-navigation Badge](https://img.shields.io/badge/react--navigation-5.7.1-blueviolet)](https://reactnavigation.org/docs/getting-started)
[![redux Badge](https://img.shields.io/badge/redux-4.0.5-brightgreen)](https://github.com/reduxjs/redux)
<br/>
자신의 소송이 기각 될 확률을 구하는 웹 애플리케이션 클라이언트 사이드입니다

💡소개<br />
세상을 살면서 우리는 다양한 상황에 부딪쳐왔고, 앞으로도 부딪칠 수도 있습니다.<br />
우리는 이런 상황들을 다양한 방법으로 해결해왔고, 소송도 그 방법 중 하나라고 생각합니다.<br />
하지만 만약, 분쟁 상황을 해결하기 위해 소장을 법원에 제출했지만,<br />
법원에서 분쟁 내용이 심리할 필요가 없다고 판단하는 소위 '기각'이 된다면.....<br />
그로 인해 소송을 준비하는 시간과 재화가 낭비되는 것이 걱정된다는 점을 생각해보았습니다.<br />
이번 프로젝트인 SUL(Support Your Lawsuit)은 이런 생각에서 출발하였습니다.<br />
자신의 분쟁 상황을 키워드로 검색해 이전 판례들을 찾아보고, 그 판례중에서 얼마나 기각되었는지 비율을 계산해주는 서비스를 기획했습니다.<br />

# 서비스 내용
### 로그인
1. 로그인, 회원가입(유효성 검사)
### 홈
1. 하단 탭 아이콘 화면이동
### 검색
1. 판례검색
2. 승인,기각 필터링: 판결문 제목 리스트
3. 판결문 조회: law.go.kr
4. 분석하기: 판결 확률 원그래프
### 지도
1. 주변 법률 사무소
2. 위치 확인
3. 위치 이동
### 마이페이지
1. 유저 정보 확인
2. 유저 정보 수정
3. 유저 검색 기록 확인
4. 로그아웃

# Flow Chart
<details>
<summary>UI 기능 플로우 펼쳐보기</summary>
<img width="551" alt="work" src="https://user-images.githubusercontent.com/53177533/89711843-caa8c980-d9c7-11ea-86eb-dc965e54abab.png">
</details>
<details>
<summary>Front-end Flow</summary>
<img width="551" alt="work" src="https://user-images.githubusercontent.com/53177533/89712046-3fc8ce80-d9c9-11ea-9f66-3ce52e355482.png">
</details>

# Server
## ⭐ API 문서
하단의 하이퍼링크를 클릭하시면 API 문서로 연결됩니다.<br />
 <a href ="https://app.gitbook.com/@sul/s/sul/">📝 SUL-server API 문서</a><br />
# Client
## ⭐ 기능<br />
홈 화면<br />
로그인, 회원가입<br />
판례 검색 및 조회<br />
지도 기능<br />
회원 정보 조회, 수정<br />
## 📚 주요 Library<br />
React<br />
React-native<br />
React-navigation<br />
React-Hooks<br />
Redux<br />
React-native-maps<br />
React-native-cheerio<br />

# :evergreen_tree: 팀 구성
## 팀장
#### 황병현
## 팀원
#### 김준섭, 조규창
<hr>

# :people_holding_hands: Position
### 황병현 : full-stack <br />
📧 : extinctictworld@gmail.com
### 김준섭 : full-stack <br />
📧 : wnstjq616@gmail.com
### 조규창 : front-end <br />
📧 : codingc1@gmail.com
