<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">

<!--        dynamically load components-->
        <button @click="slectedComponent= 'appQuote'">Quote</button>
        <button @click="slectedComponent= 'appAuthor'">Author</button>
        <button @click="slectedComponent= 'appNew'">New</button>
        <hr/>
        {{ slectedComponent }}
        <component :is="slectedComponent"></component>

<!--        <app-quote>-->
<!--&lt;!&ndash;          split slot into multiple&ndash;&gt;-->
<!--          <h2 slot="title">The Quote</h2>-->
<!--          <p>A wonderful quote</p>-->
<!--&lt;!&ndash;          <p slot="subtitle">My Title</p>&ndash;&gt;-->
<!--        </app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>

  import Quote from './components/Quote'
  import Author from './components/Author'
  import New from './components/New'

export default {
  name: 'app',
  data: function() {
    return {
      slectedComponent: 'appQuote'
    }
  },
  components:{
    appQuote: Quote,
    appAuthor: Author,
    appNew: New,
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
