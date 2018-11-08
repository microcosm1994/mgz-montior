<template>
  <div class="users">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      msg: 'users'
    }
  }
}
</script>
