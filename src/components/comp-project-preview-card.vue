<template>

    <v-card  class="mx-3 my-3" >
      <v-img :src="thumbnail" height="200px"></v-img>

      <v-card-title>{{title}}</v-card-title>

      <v-card-subtitle>{{subtitle}}</v-card-subtitle>

      <v-card-actions>
        <v-btn color="purple" text="text" :href="moreURL">자세히</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon="icon" @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>{{description}}</v-card-text>
        </div>
      </v-expand-transition>
    </v-card>

</template>

<script>
export default {
  props: ["thumbnail", "title", "subtitle", "description", "moreURL"],
  data() {
    return {
      show: false
    };
  },

  
};
</script>

