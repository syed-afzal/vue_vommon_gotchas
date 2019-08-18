<template>
    <div class="container">
      <app-server-status v-for="(server, i) in 5" :key="i"></app-server-status>
    </div>
</template>

<script>

    import ServerStaus from './ServerStatus'

    //registered omponent locally
    export default {
      components: {
        'app-server-status': ServerStaus
      }
    }
</script>

<style>

</style>
