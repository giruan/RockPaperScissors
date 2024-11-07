# 가위바위보 게임 만들기

1. [react.js]를 이용하여 사이트를 제작합니다. 

## 완성작 보기 
미리보기 : https://giruan.github.io/RockPaperScissors/

## 사용 스택
- react
- git
- HTML, CSS

#### git 배포 방법

- Github Page에서 Pages -> branch
- None -> Main으로 바꿔준다.
- 기본적으로 호스팅 주소는 https://깃허브id.github.io/리포지토리명으로 설정된다.

## gh-pages 패키지
- npm install gh-pages

## package.json 수정
- "script"에 
"predeploy": "npm run build",
"deploy": "gh-pages -d build" 
내용을 추가해주세요.

- 그후 "homepage"항목을 만들고 호스팅될 주소(이전 단계에서 만든 페이지의 주소)를 입력해준다.
- EX: "homepage": "https://giruan.github.io/RockPaperScissors/",

## 빌드와 배포

- add, commit push로 깃에 업로드
- 이후 npm run deploy

- Github Page에서 Pages -> branch
-  gh-pages라는 새 브랜치가 생긴다.
