<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filter & Mixins</h1>
        <p>{{ msg | toUpperCase | to-lowercase }}</p>
        <hr>
        <input type="text" v-model="filteredText">
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
  import List from './List'
  import {fruitMixin} from "./mixins/fruitMixin";

  export default {
    name: 'app',
    mixins: [fruitMixin],
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    components:{
      appList: List
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  /*ul {*/
  /*  list-style-type: none;*/
  /*  padding: 0;*/
  /*}*/

  /*li {*/
  /*  display: inline-block;*/
  /*  margin: 0 10px;*/
  /*}*/

  a {
    color: #42b983;
  }
</style>
