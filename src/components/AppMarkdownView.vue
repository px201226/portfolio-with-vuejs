<template>
  <v-container>
    <div v-html="convertMarktoHtml" />
    
    {{convertMarktoHtml}}
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
  "p"
];
export default {
  props: ["markdownURL"],
  data() {
    return {
      markdown: ""
      
    };
  },

  created() {
    this.fetchData();
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
      markedHTML = this.setPrefixHTMLClass(markedHTML, "my-10");
      return markedHTML;
    }
  },

  methods: {
    fetchData() {
      axios.get(this.markdownURL).then(response => {
        this.markdown = response.data;
      });
    },

    setPrefixHTMLClass(markedHTML, prefix) {
      let changedHTML = markedHTML; 
      if (prefix != "") {
        for (let tag of tags) {
          let classTempName;
          let regex = new RegExp("<" + tag + ">", "g"); // 시작 태그 찾기
          changedHTML = changedHTML.replace(
            regex,
            `<${tag} class="${prefix}">`
          );
        }
      }
      return changedHTML; // changedText라는 새로운 값을 반환
    },

    setCustomRenderer(renderer) {
      renderer.heading = function(text, level) {
       if(level <=2 ){
        return (
          "<h" +
          level +
          ' class="">'+
          text +
          "</h" +
          level +
          "><hr>"
        );
       }else{
         return ("<h" + level + ">" + text + "<h" + level + ">");
       }
      };
    }
  }
};
</script>