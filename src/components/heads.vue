<template>
  <div class="header">
    <h1>{{title}}</h1>
    <div class="auth">
      <span>系统管理员</span>
      <el-dropdown @command="logout" trigger="click">
      <span class="el-dropdown-link">
      {{uname}}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'heads',
  data () {
    return {
      title: '监测系统',
      uname: ''
    }
  },
  computed: {
    user: function () {
      return this.$store.state.User
    }
  },
  mounted () {
    this.uname = this.$cookies.get('uname')
  },
  methods: {
    logout () {
      this.$http.post('/api/user/logout').then((response) => {
        console.log(response)
      })
      this.$cookies.remove('uname')
      this.$cookies.remove('t')
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
 @import "../assets/css/heade.css";
</style>
