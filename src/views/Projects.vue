<template>
  <v-container class="wrap">
    <v-layout row wrap justify-center >
      <div v-for="(project,i) in projectList" :key="i">

      <hoverCard
        :thumbnail="`${publicPath}${project.thumbnail}`"
        :title="project.title"
        :subtitle="project.subtitle"
        :description="project.description"
        :moreURL="project.moreURL"
      ></hoverCard>
      </div>

    </v-layout>
  </v-container>
</template>

<script>
import hoverCard from "../components/hoverCard.vue";
import JsonProjectList from "../data/project_list.json";
export default {
  name: "Projects",
  components: {
    hoverCard
  },

  data() {
    return {
      publicPath: process.env.BASE_URL,
      projectList : JsonProjectList
    };
  }
};
</script>