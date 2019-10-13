<template>
  <div>
    <h1>Filter & Mixins</h1>
    <hr>
    <input type="text" v-model="filteredText">
    <ul>
      <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
  import {fruitMixin} from "./mixins/fruitMixin";

  export default {
    name: 'List',
    mixins: [fruitMixin]
  }
</script>

<style>

</style>
