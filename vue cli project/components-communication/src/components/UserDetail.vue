<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My name: {{ myName }}</p>
        <button @click="resetName">Reset name</button>
    </div>
</template>

<script>
  export default {
    // props: ['name']

    //validation on props be like
    props:{
      myName:{
        type: String
      }
    },
    methods:{
      resetName() {
        this.myName = 'Syed';
        this.$emit('nameWasChange', this.myName)
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
