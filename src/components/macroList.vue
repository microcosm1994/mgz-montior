<template>
  <div class="macroConfiguration">
    <el-tabs type="border-card">
      <el-tab-pane label="宏列表">
        <div class="header">
          <div class="search">
            <label>搜索:</label>
            <div class="search-box">
              <el-input placeholder="请输入内容" v-model="macro_search.content" class="input-with-select" size="small">
                <el-select v-model="macro_search.type" slot="prepend" placeholder="请选择">
                  <el-option label="宏编号" value="id"></el-option>
                  <el-option label="名称" value="name"></el-option>
                  <el-option label="任务代号" value="taskCode"></el-option>
                  <el-option label="任务标识" value="taskMark"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
              </el-input>
            </div>
          </div>
          <div class="btn-box">
            <el-button type="primary" size="mini" icon="el-icon-plus" @click="create">新建默认宏</el-button>
            <el-button type="primary" size="mini" @click="refresh">刷新</el-button>
          </div>
        </div>
        <div class="list">
          <el-table
            :data="tableData"
            :highlight-current-row="true"
            size="small "
            align="center"
            style="width: 100%;margin: 0 auto;">
            <el-table-column
              fixed
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              prop="createTime"
              label="创建时间">
            </el-table-column>
            <el-table-column
              prop="id"
              label="宏编号">
            </el-table-column>
            <el-table-column
              prop="name"
              label="名称">
            </el-table-column>
            <el-table-column
              prop="taskCode"
              label="任务代号">
            </el-table-column>
            <el-table-column
              prop="taskMark"
              label="任务标识">
            </el-table-column>
            <el-table-column
              prop="describe"
              label="任务描述">
            </el-table-column>
            <el-table-column
              prop="updateTime"
              label="更新时间">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="400">
              <template slot-scope="scope">
                <el-button @click="edit(scope.row, 'put')" type="primary" size="mini" icon="el-icon-edit">编辑</el-button>
                <el-button @click="macroConfig(scope.row)" type="primary" size="mini">宏配置</el-button>
                <el-button type="success" size="mini" @click="run(scope.row)">执行</el-button>
                <el-button type="danger" size="mini" @click="del(scope.row)" icon="el-icon-delete"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <form>
        <fieldset>
          <legend>新建宏配置</legend>
          <ul>
            <li class="li-span-1">
              <label>任务名称</label>
              <input type="text" v-model="macro_create.name">
            </li>
            <li class="li-span-1">
              <label>任务描述</label>
              <input type="text" v-model="macro_create.describe">
            </li>
            <li class="li-span-1">
              <label>任务代号</label>
              <input type="text" v-model="macro_create.taskCode">
            </li>
            <li class="li-span-1">
              <label>任务标识</label>
              <input type="text" v-model="macro_create.taskMark">
            </li>
            <!--<li class="li-span-1" v-for="item in macro_create.deviceArray" :key="item.name">-->
              <!--<label>{{item.name}}</label>-->
              <!--<el-select v-model="item.deviceId"  size="mini">-->
                <!--<el-option label="62.5kbps" value="62.5"></el-option>-->
                <!--<el-option label="500bps" value="500"></el-option>-->
              <!--</el-select>-->
            <!--</li>-->
          </ul>
        </fieldset>
      </form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="validate">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'macroConfiguration',
  data () {
    return {
      msg: 'macroConfiguration',
      dialogVisible: false,
      saveType: 0, // 保存类型：0为新建，1为修改，number类型
      macro_search: {
        type: '',
        content: ''
      },
      macro_create: {
        name: '',
        describe: '',
        taskCode: '',
        taskMark: ''
        // deviceArray: [{
        //   name: '卫通发射基带一',
        //   deviceId: '',
        //   url: ''
        // }, {
        //   name: '卫通发射基带二',
        //   deviceId: '',
        //   url: ''
        // }, {
        //   name: '卫通接收基带一',
        //   deviceId: '',
        //   url: ''
        // }, {
        //   name: '卫通接收基带二',
        //   deviceId: '',
        //   url: ''
        // }, {
        //   name: 'Ka发射基带一',
        //   deviceId: '',
        //   url: ''
        // }, {
        //   name: 'Ka发射基带二',
        //   deviceId: '',
        //   url: ''
        // }, {
        //   name: 'Ka接收基带一',
        //   deviceId: '',
        //   url: ''
        // }, {
        //   name: 'Ka接收基带二',
        //   deviceId: '',
        //   url: ''
        // }]
      },
      tableData: []
    }
  },
  computed: {
    Socket: function () {
      return this.$store.state.Socket
    }
  },
  watch: {
    Socket: function (n, o) {
      if (n !== null) {
        this.getList()
      }
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    // 请求全部数据
    getList () {
      const Socket = this.Socket
      let self = this
      let $utils = this.$utils
      let $ws = this.$ws
      if (Socket) {
        // 请求数据
        $ws.sendMacro(Socket, '/mgz/macro/get', {deleted: '0'})
        // 接收数据
        Socket.onmessage = function (response) {
          $utils.readData(response.data, null, function (data) {
            self.tableData = data.data.d
          })
        }
      } else {
        self.$store.commit('Socket', null)
      }
    },
    // 新建宏配置
    create () {
      // 清除默认值
      this.macro_create.describe = ''
      this.macro_create.name = ''
      this.macro_create.taskCode = ''
      this.macro_create.taskMark = ''
      if (this.macro_create.id) {
        delete this.macro_create.id
      }
      // 打开模态框
      this.dialogVisible = true
      // saveType为0是新建
      this.saveType = 0
    },
    // 搜索宏配置
    search () {
      const Socket = this.Socket
      let self = this
      let $utils = this.$utils
      let $ws = this.$ws
      let param = {}
      if (this.macro_search.type !== '') {
        if (this.macro_search.content !== '') {
          param[this.macro_search.type + '%'] = '%' + this.macro_search.content + '%'
        }
      }
      param.deleted = 0
      if (Socket) {
        // 请求数据
        $ws.sendMacro(Socket, '/mgz/macro/get', param)
        // 接收数据
        Socket.onmessage = function (response) {
          $utils.readData(response.data, null, function (data) {
            self.tableData = data.data.d
          })
        }
      } else {
        self.$store.commit('Socket', null)
      }
    },
    // 删除宏配置
    del (row) {
      const Socket = this.Socket
      let self = this
      let $ws = this.$ws
      if (Socket) {
        // 请求数据
        $ws.sendMacro(Socket, '/mgz/macro/del', row.id)
        // 接收数据
        Socket.onmessage = function (response) {
          self.refresh()
        }
        Socket.onerror = function (error) {
          console.log(error)
        }
      } else {
        self.$store.commit('Socket', null)
      }
    },
    // 执行
    run (row) {
      const Socket = this.Socket
      let self = this
      let $ws = this.$ws
      if (Socket) {
        // 请求数据
        $ws.sendMacro(Socket, '/api/macro/doMacro', {macroId: row.id})
        // 接收数据
        Socket.onmessage = function (response) {
          self.refresh()
        }
        Socket.onerror = function (error) {
          console.log(error)
        }
      } else {
        self.$store.commit('Socket', null)
      }
    },
    // 刷新
    refresh () {
      if (this.macro_search.type !== '' || this.macro_search.content !== '') {
        this.search()
      } else {
        this.getList()
      }
    },
    // 编辑
    edit (row) {
      this.macro_create.name = row.name
      this.macro_create.describe = row.describe
      this.macro_create.taskCode = row.taskCode
      this.macro_create.taskMark = row.taskMark
      this.macro_create.id = row.id
      // 打开模态框
      this.dialogVisible = true
      // saveType为1是修改
      this.saveType = 1
    },
    // 保存宏
    save () {
      const Socket = this.Socket
      let self = this
      let $utils = this.$utils
      let $ws = this.$ws
      let url = ''
      if (Socket) {
        if (this.saveType === 0) {
          url = '/api/macro/add'
        }
        if (this.saveType === 1) {
          url = '/mgz/macro/put'
        }
        // 发送宏配置数据
        $ws.sendMacro(Socket, url, this.macro_create)
        // 接收数据
        Socket.onmessage = function (response) {
          $utils.readData(response.data, null, function (data) {
            if (data.status === '200') {
              self.refresh()
              self.dialogVisible = false
            }
          })
        }
      } else {
        self.$store.commit('Socket', null)
      }
    },
    // 宏配置
    macroConfig (row) {
      this.$router.push({
        path: '/macroEdit',
        name: 'macroEdit',
        query: row
      })
    },
    handleClose () {
      this.dialogVisible = false
    }
  },
  // 导航守卫，离开当前组调用
  beforeRouteLeave (to, from, next) {
    next()
  }
}
</script>

<style scoped>
  @import "../assets/css/macroConfiguration.css";
</style>
