<template>
    <div>
<!--      a keyword reserved by vue to output html inside that component-->
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Quote"
    }
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    margin: 30px auto;
    padding: 30px;
    text-align: center;
  }
</style>
