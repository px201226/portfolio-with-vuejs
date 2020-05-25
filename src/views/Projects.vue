<template>
  <v-container class="wrap">
    <v-layout row wrap>
      <v-flex class="justify-center" xs12="xs12" sm6="sm6" md6="md6" lg4="lg4" xl3="xl3" v-for="(project,i) in projectList" :key="i">

      <hoverCard
        :thumbnail="project.thumbnail"
        :title="project.title"
        :subtitle="project.subtitle"
        :description="project.description"
        :moreURL="project.moreURL"
      ></hoverCard>
      </v-flex>

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
      projectList : JsonProjectList
    };
  }
};
</script>