<template>
<canvas id="myChart" width="400" height="400"></canvas>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class SimpleChart extends Vue {
   constructor(){
       super();
       this.build();
   }

   build(){
      console.log("will generate the graph");
   }
}
</script>