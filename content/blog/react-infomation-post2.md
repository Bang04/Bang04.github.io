---
slug: "react-infomation-post2"
title: React 시작하기전 준비
date: "2024-06-26"
category: "react" 
tags: ["react"]
featuredImage: ../images/img-react-content2.png
---

1. Homebrew 설치하기
> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

2. 노드설치
> brew install node

3. 버전확인
> node -v

> npm -v

4. Create React App 설치 지침을 따라 새로운 프로젝트를 생성해주세요.
> npx create-react-app my-app

5. 새로운 프로젝트의 src/ 폴더에 있는 모든 파일을 삭제해 주세요.
> cd my-app

> cd src

##### Mac 또는 Linux 사용자의 경우
> rm -f *
##### Windows 사용자
> del *

6. 다시 프로젝트 폴더로 돌아가세요.
> cd ..

7. src/ 폴더에 index.css라는 파일을 생성하고 이 CSS 코드를 추가해주세요.
8. src/ 폴더에 index.js라는 파일을 생성하고 이 JS 코드를 추가해주세요.
9. 위에서 생성한 index.js의 상단에 아래 세 줄을 추가해주세요.
> import React from 'react';

> import ReactDOM from 'react-dom';

> import './index.css';

10. npm start 명령어를 실행하고 브라우저에서 확인
> http://localhost:3000
