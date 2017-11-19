<template>
     <div class="ui container">

         <div class="ui-card">
             <h3 class="purple">Input Form:</h3>
             <div class="content">
                <simple-input-box class="ui raised very padded text container segment" @save="saveRecord($event)"></simple-input-box>
                <simple-list v-bind:List="Records"></simple-list>
             </div>
         </div>

     </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Person } from "./entities/person";
import SimpleList from "./components/simple-list.vue";
import SimpleInputBox from "./components/simple-input-box.vue";

@Component({ components: { SimpleList, SimpleInputBox } })
export default class App extends Vue {
  private list: Person[] = new Array<Person>();

  saveRecord = (item: Person) => this.list.push(item);

  get Records() {
    return this.list.map((i: Person) => i.getFullRecord());
  }

  getCount():number {return this.list.length || 0;}
}
</script>