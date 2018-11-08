<template>
  <el-tabs type="card">
    <el-tab-pane label="故障树">
      <div>
        <iframe style="width: 100%;height: 90vh;"  src="http://mgz/fta/fta.htm" scrolling="no" hspace="100" vspace="-350" frameborder="0"></iframe>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'errorTree',
  data () {
    return {
      msg: ''
    }
  },
  computed: {},
  mounted () {},
  methods: {
    $ (e) {
      let eType = 'queryeAll'
      if (e.indexOf('#') === 0) {
        eType = 'getElementById'
        e = e.substr(1, e.length)
      }
      if (e.indexOf('.') === 0) {
        eType = 'getElementsByClassName'
        e = e.substr(1, e.length)
      }
      return document[eType](e)
    }
  }
}
</script>

<style>
  .el-tabs__header{
    margin: 0;
  }
</style>
