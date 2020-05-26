<template>
  <v-container fluid>
    <v-layout :grid-list-md="!$vuetify.breakpoint.xs" row wrap>
      <comp-subpage-title contentHtml="이기수<br>Gisu Lee, B.E.<br>(Email: px201226@gmail.com)" />
    </v-layout>
  </v-container>
</template>

<script>
import comp_project_preview_card from "../components/comp-project-preview-card.vue";
import json_project_list from "../data/project_list.json";
export default {
  name: "layout-project-view",
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