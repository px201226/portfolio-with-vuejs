<template>
  <v-card class="mx-3 my-3">
    <v-img :src="thumbnail" height="200px"></v-img>

    <v-card-title>{{title}}</v-card-title>

    <v-card-subtitle>{{subtitle}}</v-card-subtitle>

    <v-card-actions>
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
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'app-card',
  props: {
    pid: {
      type: String,
      default: "#"
    },

    thumbnail: {
      type: String,
      default:
        "https://ww.namu.la/s/ee2581e96cf9a4d684eb3c3f17020e35be0bea9d3a27c61717f93d0d64493cd1190d6ba0096cc4c1b9d10e94d2be7e4566a13576c9ef369f7e8f59244b682490ac703209ed52347987722b88b000ae01a43782c8783b250c233de0ce9ebd32fc"
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
      show: false
    };
  },

  methods: {
    goTodetail(pid) {
      this.$router.push({ name: "projectview", params: { id: pid } });
    }
  }
};
</script>

