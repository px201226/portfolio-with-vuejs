<template>
  <div>
    <h1>Education</h1>
    <v-divider></v-divider>
    <div class="my-3 pl-3 about-me" v-html="education"></div>
    <br />

    <h1>Work Experience</h1>
    <v-divider></v-divider>

    <div v-for="work of workExperinces" v-bind:key="work.company">
      <div class="my-3 pl-3">
        {{work.date}}:
        {{work.position}},
        {{work.company}}
      </div>
      <ul v-for="(content) of work.contents" :key="content">
        <li class="my-1 grey--text text--darken-2">{{content}}</li>
      </ul>
      <br />
    </div>
	
	 <h1 >Skill</h1>
    <v-divider></v-divider>
	<div class="my-4 pl-3" v-for="skill of skills" v-bind:key="skill.name">
      <h3>{{skill.name}} </h3>
      <li class="my-1 grey--text text--darken-2 ml-4" v-for="(description) of skill.description" :key="description">
		 {{description}}
      </li>

    </div>
 	<br />

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      education: `<p>
                 <p>B.E.: 2014/03 ~ 2020/02</p>
                <p>&nbsp;&nbsp; School of Computer Engineering</p>
                <p>&nbsp;&nbsp; Pukyong National University, Busan, Republic of Korea<p>
                
                </p>`,

      workExperinces: [
        {
          date: "2019/07 ~ 2019/08",
          position: "Intern",
          company: "(주)리커시브소프트, 해운대",
          contents: [
            "IoT 시스템의 안드로이드 App과 웹서버와 블루투스 모듈과 연동"
          ]
        },

	  ],
	  
	  skills:[
		  {
			  name: "Java",
			  level: "중",
			  description: [ "객체지향원칙을 이해하고 지키기 위해 노력함", "디자인 패턴 등을 이해하고 적용하기 위해 노력함"]
		  },
		   {
			  name: "C Language",
			  level: "중",
			  description: [ "멀티프로세스를 사용하여 작업 스케쥴링 가능"]
		  },
		   {
			  name: "Spring Boot",
			  level: "하",
			  description: [ "Spring MVC, IoC, AOP, JPA 개념 이해 및 사용", "REST API 를 설계하여 회원가입 및 게시판 관리를 만들었음"]
		  },
		   {
			  name: "Vue.js",
			  level: "하",
			  description: [ "REST API 서버와 연동하여 웹페이지 개발"]
		  },
		   {
			  name: "Android",
			  level: "하",
			  description: [ "필요한 기능을 API 문서나 라이브러리를 참조하여 구현할 수 있음.", "REST API와 연동하여 어플리케이션을 개발한 경험이 있음","MVC, MVVM 패턴 등의 대한 이해"]
		  },
		   {
			  name: "RDBMS",
			  level: "하",
			  description: [ "기본적인 CRUD SQL과 간단한 테이블 수준의 모델링"]
		  },
		  		   {
			  name: "GitHub ",
			  level: "하",
			  description: [ "Git 에 대한 기본적인 이해와 Github를 통해 버전 관리","Github Page를 사용하여 정적 페이지 호스팅"]
		  },
		  	   {
			  name: "CI/CD",
			  level: "하",
			  description: [ "AWS EC2, Codedeploy와 Travis-ci 를 연동","배포스크립트를 작성하여 무중단 배포 경험"]
		  },
	  ]
    };
  }
};
</script>
