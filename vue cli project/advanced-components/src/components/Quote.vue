<template>
    <div>
      <div>
        <slot name="title"></slot>
<!--        example of Slot Default-->
        <span style="color: #ccc"><slot name="subtitle">The Subtitle</slot></span>
      </div>
      <hr/>
      <div>
<!--        example of Default Slot/ if it is not specified-->
        <slot></slot>
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
