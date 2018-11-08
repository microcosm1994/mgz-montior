<template>
  <div class="zj">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'zj',
  data () {
    return {
      msg: 's'
    }
  }
}
</script>

<style scoped>
  .zj{
    width: 100%;
  }
</style>
