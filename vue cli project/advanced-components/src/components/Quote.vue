<template>
    <div>
      <div>
        <!--      a keyword reserved by vue to output html inside that component-->
        <slot name="title"></slot>
      </div>
      <hr/>
      <div>
        <!--      a keyword reserved by vue to output html inside that component-->
        <slot name="content"></slot>
      </div>
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
  h2 {
    color: red;
  }
</style>
