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
import app_card from "../components/app-card.vue";
import json_project_list from "../data/project_list.json";
export default {
  name: "layout-project-list",
  components: {
    'app-card': app_card
  },

  data() {
    return {
      publicPath: process.env.BASE_URL,
      projectList: json_project_list
    };
  }
};
</script>