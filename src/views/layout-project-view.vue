<template>
  <v-container fluid>
    <v-layout column >
      <app-content-title
        class="text-center headline font-italic font-weight-black"
        :contentHtml="project.title"
      />

      <app-markdown-view markdownURL="https://raw.githubusercontent.com/HyeminNoh/MVC_JavaWebProject/master/README.md" />
    </v-layout>
  </v-container>
</template>

<script>
import AppContentTitle from "../components/AppContentTitle.vue";
import AppCard from "../components/AppCard.vue";
import AppMarkdownView from"../components/AppMarkdownView.vue";

const axios = require("axios");


export default {
  name: "layout-project-view",
  components: {
    AppContentTitle,AppCard,AppMarkdownView
  },

  data() {
    return {
      publicPath: process.env.BASE_URL,
      project: "",
    };
  },
 
  methods: {
    fetchData() {
      axios
        .get(
          this.publicPath +
            "assets/static/project/" +
            this.$route.params.id +
            ".json"
        )
        .then(response => {
          this.project = response.data;
        });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>