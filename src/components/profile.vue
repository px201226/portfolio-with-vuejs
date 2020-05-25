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
        <div class="my-1 grey--text text--darken-2">{{content}}</div>
      </ul>
      <br />
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
        {
          date: "2019/03 ~ 2019/12",
          position: "조장",
          company: "잘깜빡이조, 부경대학교 컴퓨터공학과",
          contents: ["밥값 못하는 친구들과 함께 프로젝트를 완성"]
        }
      ]
    };
  }
};
</script>
