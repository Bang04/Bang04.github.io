---
slug: "react-infomation-post1"
title: This is related to npm not being able to find a file
date: "2024-06-07"
category: "react" 
tags: ["npm", "react"]
featuredImage: ../images/img-react-content-1.png
---

npm run start 를 햇을 뿐인데 오류가 발생했다ㅎㅎ 순간 당황해서 구글링부터 해보다가 자세히 보니

`ENOENT: no such file or directory, open '/Users/React/my-todo/package.json'`

package.json 파일이 찾지 못찾는다는!!!디렉토리를 살펴보니 파일이 없긴했다...ㅎㅎ실수로 삭제해나봄 얼른 휴지통가서 해당 파일을 복구 시켜서 다시 실행 시키니 잘 된다 :)