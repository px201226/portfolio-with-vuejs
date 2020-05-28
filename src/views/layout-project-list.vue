<template>
  <v-container wrap>
    <v-layout :grid-list-md="!$vuetify.breakpoint.xs" row wrap>
      <v-flex xs12 sm12 md6 lg4 xl3 v-for="(project,i) in projectList" :key="i">
        <app-card
          :pid="project.pid"
          :thumbnail="`${publicPath}${project.thumbnail}`"
          :title="project.title"
          :subtitle="project.subtitle"
          :description="project.description"
        ></app-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AppCard from "../components/AppCard.vue";
const axios = require("axios");

export default {
  name: "layout-project-list",
  components: {
    AppCard
  },

  data() {
    return {
      publicPath: process.env.BASE_URL,
      projectList: ""
    };
  },
  methods: {
    fetchData() {
      axios
        .get(this.publicPath + "assets/static/project/project_list.json")
        .then(response => {
          this.projectList = response.data;
        });
    }
  },

  created() {
    this.fetchData();
  }
};
</script>