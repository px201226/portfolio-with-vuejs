Vue.js를 활용한 포트폴리오 제작
=======================
## 1. 개요   
웹 프론트엔드의 동작방식을 이해하고 HTHML, CSS, javascript, Vue.Js 등의 이해를 높히기 위해 제작하였습니다.
- 기술 및 라이브러리
```
HTML, CSS, Javascript
Vue.js
Vuetify
Webpack
npm 
gradle
marked.js
```

## 2. 소개   
### 1. 프로필 화면   
![ScreenShoot](https://raw.githubusercontent.com/GisuLee/portfolio-with-vuejs/master/main_pc.png)     
![ScreenShoot](https://raw.githubusercontent.com/GisuLee/portfolio-with-vuejs/master/main_m.png)    
화면크기에 따라 변하는 반응형 웹으로 제작하여 태블릿, 스마트폰, PC 모두 대응할 수 있도록 하였습니다.
---------------------------------

### 2. 프로젝트 페이지
![ScreenShoot](https://raw.githubusercontent.com/GisuLee/portfolio-with-vuejs/master/list_pc.png)     
![ScreenShoot](https://raw.githubusercontent.com/GisuLee/portfolio-with-vuejs/master/list_m.png)    
리스트 데이터들은 <strong>Github Repository</strong>의 <code>json</code> 파일들을 동적으로 로드하여 빌드가 필요없이 데이터를 수정 및 추가를 할 수 있게하였습니다.

---------------------------------

### 3. 프로젝트 상세설명 페이지
![ScreenShoot](https://raw.githubusercontent.com/GisuLee/portfolio-with-vuejs/master/detail.png)     
상세설명 페이지 역시 <strong>Github Repository</strong>의 <code>READEME.md</code> 파일을 동적으로 로드하여, Markdown 렌더링 라이브러리인 <code>Marded.JS</code>를 통해 HTML로 렌더링하였습니다.

---------------

## 3. 사용법   
### Project install
```
git clone https://github.com/GisuLee/portfolio-with-vuejs.git 
```
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
