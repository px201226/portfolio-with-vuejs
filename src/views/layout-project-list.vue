<template>
  <v-container wrap>
    <v-layout :grid-list-md="!$vuetify.breakpoint.xs" row wrap>
      <v-flex xs12 sm12 md6 lg4 xl3 v-for="(project,i) in projectList" :key="i">
        <comp-project-preview-card
          :thumbnail="`${publicPath}${project.thumbnail}`"
          :title="project.title"
          :subtitle="project.subtitle"
          :description="project.description"
          :detailURL="project.detailURL"
        ></comp-project-preview-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import comp_project_preview_card from "../components/comp-project-preview-card.vue";
import json_project_list from "../data/project_list.json";
export default {
  name: "layout-project-list",
  components: {
    "comp-project-preview-card": comp_project_preview_card
  },

  data() {
    return {
      publicPath: process.env.BASE_URL,
      projectList: json_project_list
    };
  }
};
</script>