<template>
  <v-card class="mx-3 my-3" @click="goTodetail(pid)" >
    <v-img :src="getThumbnail" height="200px"></v-img>

    <v-card-title>{{title}}</v-card-title>

    <v-card-subtitle>{{subtitle}}</v-card-subtitle>

    <!-- <v-card-actions>
      <v-btn color="purple" text="text" @click="goTodetail(pid)">자세히</v-btn>

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
    </v-expand-transition> -->
  </v-card>
</template>

<script>
export default {
  name: "app-card",
  props: {
    pid: {
      type: String,
      default: "#"
    },

    thumbnail: {
      type: String,
      default: ""
    },

    title: {
      type: String,
      default: "default Title"
    },

    subtitle: {
      type: String,
      default: "default subTitle"
    },

    description: {
      type: String,
      default: "default subTitle"
    }
  },

  data() {
    return {
  
    };
  },
  computed: {
    getThumbnail() {
      if (["", "/"].indexOf(this.thumbnail) >= 0) return "";
      else return this.thumbnail;
    }
  },
  methods: {
    goTodetail(pid, detailURL) {
      this.$router.push({ name: "projectview", params: { id: pid } });
    },
  }
};
</script>

