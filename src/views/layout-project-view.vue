<template>
  <v-container fluid>
    <v-layout column >
      <app-content-title
        class="text-center headline font-italic font-weight-black"
        :contentHtml="project.title"
      />

      <app-markdown-view :markdownURL="project.markdownURL" />
    </v-layout>
  </v-container>
</template>

<script>
import AppContentTitle from "../components/AppContentTitle.vue";
import AppMarkdownView from"../components/AppMarkdownView.vue";
import {eventBus} from "../main.js";

const axios = require("axios");


export default {
  name: "layout-project-view",
  components: {
    AppContentTitle,AppMarkdownView
  },

  data() {
    return {
      publicPath: process.env.BASE_URL,
      project: {id:"", title:"", markdownURL:""},
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
          this.sendEventBus();
        });
    },

    sendEventBus(){
      eventBus.$emit('receivedURL',true);
    }
  },
  created() {
    this.fetchData();
  }
};
</script>