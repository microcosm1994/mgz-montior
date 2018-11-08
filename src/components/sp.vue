<template>
  <div class="sp">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'sp',
  data () {
    return {
      msg: 's'
    }
  }
}
</script>

<style scoped>
  .sp{
    width: 100%;
  }
</style>
