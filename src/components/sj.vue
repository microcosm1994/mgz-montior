<template>
  <div class="sj">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'sj',
  data () {
    return {
      msg: 's'
    }
  }
}
</script>

<style scoped>
  .sj{
    width: 100%;
  }
</style>
