<template>

<v-app>
    <app-bar/>

        <v-content class="white">
            <router-view/>
        </v-content>
</v-app>
</template>

<script>
import app_bar from "./components/app-bar";
export default {
  name: 'App',

  components: {
    'app-bar' : app_bar
  },

  data: () => ({
    //
  }),
};
</script>
