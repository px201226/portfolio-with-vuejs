<template>
  <v-flex style="background-color: #f7f7f7; margin-top: 2.5% " >
    <v-container >
      <div >
          <h3 :class="getAlignCenter" style="line-height: 180%" v-html="contentHtml"/>
      </div>
    </v-container>
  </v-flex>
</template>


<script>
export default {
  props: ['contentHtml', 'alignCenter'],
  data() {
    return {
    };
  },

  computed: {
      getAlignCenter: function (){
          return (this.alignCenter == null ? "" : "text-center")
      }
  },
};
</script>
