<template>
<div class="ui form">
    <div class="three fields ">
        <div class="field">
            <label for="name">Name:</label>
            <input v-model="name" name="name" placeholder="Enter name..."/>
        </div>
        <div class="field">
            <label for="age">Age:</label>
            <input v-model="age" name="age" placeholder="Enter age..."/>
        </div>
        <div class="field">
            <label for="address">Address:</label>
            <input v-model="address" name="address" placeholder="Enter address..."/>
        </div>
    </div>
   <button class="ui purple button right floated" @click="save">Save</button>
</div>


</template>

<script lang="ts">
import Vue from "vue";
import { Person } from "../entities/person";

export default class SimpleInputBox extends Vue {
  private name: string = "";
  private age: number = 0;
  private address: string = "";

  save = () =>
    this.$emit("save", new Person(this.name, this.age, this.address));
}
</script>