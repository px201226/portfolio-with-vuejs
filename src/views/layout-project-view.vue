<template>
  <v-container fluid>
    <v-layout :grid-list-md="!$vuetify.breakpoint.xs" row wrap>
      <app-content-title contentHtml="aa" />
      {{this.$route.params.id}}
    </v-layout>
  </v-container>
</template>

<script>
import app_content_title from "../components/app-content-title.vue";
import json_project_list from "../data/project_list.json";
export default {
  name: "layout-project-view",
  components: {
    'app-content-title': app_content_title
  },

  data() {
    return {
      publicPath: process.env.BASE_URL,
      projectList: json_project_list
    };
  },


};
</script>