<template>
  <div v-if="List.length > 0">
    <div
    class="ui  inverted segment"
    v-for="(item,index) in List" v-bind:key="index">
      <div class="item"> {{item}}
          </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({ props: ["List"] })
export default class SimpleList extends Vue {}
</script>