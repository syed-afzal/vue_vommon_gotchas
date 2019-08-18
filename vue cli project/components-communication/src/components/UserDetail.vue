<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My name: {{ myName }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()">Reset name with call back function</button>
    </div>
</template>

<script>
  export default {
    // props: ['name']

    //validation on props be like
    props:{
      myName:{
        type: String,
      },
      userAge: {
        type: Number
      },
      resetFn: {
        type: Function
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
