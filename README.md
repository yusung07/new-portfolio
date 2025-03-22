명령어 목록
- npm install --save tailwindcss postcss autoprefixer
- npm install -g tailwindcss
- npx tailwindcss init -p

하다가 좀 안되는 게 있어서 빡쳐서 씀,

1. npm Package Vulnerability (무한 굴레) <br>
    tailwind, postcss 설치하는 데 뭔 설명이 나오면서 취약성을
    말하는 것처럼 나오는데 npm audit을 실행하니까 무한 굴레에 빠짐, 
    해결 방법? package.json에서 버전을 orderride 하는 거 추가하셈 
```
{
  "name": "react-popol",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.2.0",
    "@testing-library/user-event": "^13.5.0",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-popol": "file:",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "overrides": {    /* 이거 */
    "react-scripts": {
      "@svgr/webpack": "8.1.0",
      "postcss": "8.4.38"
    }
  },
  {
    ...
  }
}

```
    