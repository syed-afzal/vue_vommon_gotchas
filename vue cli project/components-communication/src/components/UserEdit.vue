<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{userAge}}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>

  import { eventBus } from  '../main'

  export default {
    props: [ 'userAge' ],
    methods: {
      editAge(){
        this.userAge= 30
        // this.$emit('ageWasChanged', this.userAge)

        //event bus will only changed data here and listen on other child without invoking parent
        eventBus.$emit('ageWasChanged', this.userAge)
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
