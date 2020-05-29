<template>
  <v-container>
    <div v-html="convertMarktoHtml" />
  </v-container>
</template>



<script>
const marked = require("marked");
const axios = require("axios");
const tags = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "em",
  "strong",
  "del",
  "u",
  "ul",
  "ol",
  "a",
  "img",
  "pre",
  "code",
  "table",
  "blockquote",
  "p",
  "li"
];
export default {
  props: ["markdownURL"],
  data() {
    return {
      markdown: ""
    };
  },

  created() {
    if (this.markdownURL == "") {
      console.log("create false");
      this.fetchData(false);
    }else{
      console.log("create true");
      this.fetchData(true);
    }
  },

  updated() {
    if (this.markdownURL != "") {
      console.log("up");
      console.log("markdownURL = " + this.markdownURL);
      this.fetchData(true);
    }
  },

  computed: {
    convertMarktoHtml() {
      var renderer = new marked.Renderer();
      this.setCustomRenderer(renderer);

      marked.setOptions({
        renderer: renderer,
        gfm: true,
        headerIds: false,
        tables: true,
        breaks: true,
        pedantic: false,
        smartLists: true,
        smartypants: false
      });

      let markedHTML = marked(this.markdown);
      markedHTML = this.setPrefixHTMLClass(markedHTML, "my-3");
      return markedHTML;
    }
  },

  methods: { 
    fetchData(isReady) {
      axios.get(this.markdownURL).then(response => {
        if(isReady==false){
          this.markdown = "#  ";
          return;
        }
        this.markdown = response.data;
      });
    },

    setCustomRenderer(renderer) {
      renderer.heading = function(text, level) {
        if (level <= 2) {
          return (
            "<h" +
            level +
            ' class="mt-6">' +
            text +
            "</h" +
            level +
            '><hr color="#CFD8DC" size="5" class="mb-5">'
          );
        } else {
          return "<h" + level + ">" + text + "</h" + level + ">";
        }
      };

      renderer.hr = function() {
        return '<hr color="#ECEFF1" size="7">';
      };
    },

    setPrefixHTMLClass(markedHTML, prefix) {
      let changedHTML = markedHTML;
      if (prefix != "") {
        for (let tag of tags) {
          let classTempName;
          let regex = new RegExp("<" + tag + ">", "g"); // 시작 태그 찾기
          changedHTML = changedHTML.replace(
            regex,
            `<${tag} class="${prefix} my-4">`
          );
        }
      }
      return changedHTML; // changedText라는 새로운 값을 반환
    }
  }
};
</script>