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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      filteredText:'',
      msg: 'Welcome to Your Vue.js App',
      fruits: ['Apple', 'Mango', 'Banana', 'Orange'],
    }
  },
  filters:{
    toUpperCase(value){
      return value.toUpperCase();
    }
  },
  computed: {
    RE(){
      return new RegExp(this.filteredText, "i")
    },
    filteredFruits() {
      return this.fruits.filter((element) => {
        // if you want to match case-insensitive use these three ways

        //One
        //return element.toLowerCase().match(this.filteredText.toLowerCase())

        //Two
        // let RE = new RegExp(this.filteredText,"i");
        // return element.match(this.RE)

        // Three

        // to make this 3rd way working we also placed regular expression in computed
        // return element.match(this.RE)


        // other-wise
        return element.match(this.filteredText)
      })
    }
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
