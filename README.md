# Vue.js를 활용한 포트폴리오 제작

## Introduction

> 웹 프론트엔드의 동작방식을 이해하고 HTML, javascript, Vue.js 등 프론트 기술스택을 활용하여 포트폴리오 페이지를 제작하고, Github를 통해 호스팅한다.

![Vue%20js%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%20%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A1%E1%86%A8%2069e21c75398a40e3a7988c276dae1d58/Untitled.png](Vue%20js%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%20%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A1%E1%86%A8%2069e21c75398a40e3a7988c276dae1d58/Untitled.png)

![Vue%20js%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%20%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A1%E1%86%A8%2069e21c75398a40e3a7988c276dae1d58/Untitled%201.png](Vue%20js%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%20%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A1%E1%86%A8%2069e21c75398a40e3a7988c276dae1d58/Untitled%201.png)

![Vue%20js%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%20%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A1%E1%86%A8%2069e21c75398a40e3a7988c276dae1d58/Untitled%202.png](Vue%20js%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%20%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A1%E1%86%A8%2069e21c75398a40e3a7988c276dae1d58/Untitled%202.png)

## Skill

---

### Vue

- Vue
- Vuex
- Vue-Router
- Axios
- Vuetify

### Etc

- HTML
- CSS
- Javascript
- Gradle
- Npm

## Description

---

### 1. 프로필 페이지

- 화면 크기에 따라 변하는 반응형 웹으로 제작하여 태블릿, 스마트폰, 데스크탑 등 모든 스크린 사이즈 대응할 수 있도록 하였습니다.

### 2. 프로젝트 리스트 페이지

- 리스트 데이터들은 **Github Repository**의 `JSON` 파일을 `Axios`통신으로 동적으로 로드하여, 프로젝트 빌드없이 데이터를 추가, 삭제할 수 있도록 하였습니다.

### 3. **상세설명 페이지**

- 상세설명 페이지 역시 **Github Repository**의 `READEME.md` 파일을 로드하여 최신상태를 유지할 수 있도록 하였고, `Marked.js` 라는 마크다운 라이브러리를 통해 웹페이지에 렌더링 할 수 있도록 하였습니다.

## Installation

---

### **Project install**

```
git clone https://github.com/GisuLee/portfolio-with-vuejs.git 
```

### **Project setup**

```
npm install
```

### **Compiles and hot-reloads for development**

```
npm run serve
```

### **Compiles and minifies for production**

```
npm run build
```