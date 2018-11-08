<template>
  <div class="macroConfiguration">
    <div class="header">
      <div class="search">
        <label>搜索:</label>
        <div class="search-box">
          <el-input placeholder="请输入内容" v-model="macro_search.content" class="input-with-select" size="small">
            <el-select v-model="macro_search.type" slot="prepend" placeholder="请选择">
              <el-option label="id" value="id"></el-option>
              <el-option label="名称" value="name"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
          </el-input>
        </div>
      </div>
      <div class="type">
        <label>选择类型:</label>
        <div class="type-box">
          <el-select v-model="macro_search.select" size="small" placeholder="请选择" @change="search">
            <el-option label="全部" :value="0"></el-option>
            <el-option label="参数" :value="1"></el-option>
            <el-option label="链路" :value="2"></el-option>
            <el-option label="工作方式" :value="3"></el-option>
          </el-select>
        </div>
      </div>
      <div class="btn-box">
        <el-button type="primary" size="mini" icon="el-icon-plus" @click="dialogVisible = true">新建宏配置</el-button>
        <el-button type="primary" size="mini" @click="refresh">刷新</el-button>
      </div>
    </div>
    <div class="list">
        <el-table
          :data="tableData"
          style="width: 100%;">
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
            label="id">
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称">
          </el-table-column>
          <el-table-column
            prop="type"
            label="类型">
          </el-table-column>
          <el-table-column
            prop="describe"
            label="描述">
          </el-table-column>
          <el-table-column
            prop="updateTime"
            label="更新时间">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="160">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">执行</el-button>
              <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <form>
        <fieldset>
          <legend>新建宏配置</legend>
          <ul>
            <li class="li-span-1">
              <label>名称</label>
              <input type="text" v-model="macro_create.name">
            </li>
            <li class="li-span-1">
              <label>描述</label>
              <input type="text" v-model="macro_create.describe">
            </li>
            <li class="li-span-1">
              <label>类型</label>
              <el-select size="mini" v-model="macro_create.type" placeholder="请选择">
                <el-option
                  label="参数"
                  :value="1">
                </el-option>
                <el-option
                  label="链路"
                  :value="2">
                </el-option>
                <el-option
                  label="工作方式"
                  :value="3">
                </el-option>
              </el-select>
            </li>
          </ul>
        </fieldset>
      </form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="create">保 存</el-button>
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
      macro_search: {
        type: '',
        select: 0,
        content: ''
      },
      macro_create: {
        name: '',
        describe: '',
        type: ''
      },
      tableData: []
    }
  },
  computed: {
    device: function () {
      let data = this.$route.query
      if (data.name === 'A') {
        return this.$device.WT_recv_A
      }
      if (data.name === 'B') {
        return this.$device.WT_recv_B
      }
    },
    deviceObj: function () {
      let obj = {
        keyArray: [],
        detailed: {}
      }
      for (let key in this.Status) {
        if (!this.device[key]) {
          break
        }
        obj.keyArray.push(this.device[key].key)
        obj.detailed[key] = this.device[key]
      }
      return obj
    },
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
      const Socket = this.Socket
      let self = this
      let $utils = this.$utils
      let $ws = this.$ws
      if (Socket) {
        // 请求数据
        $ws.sendMacro(Socket, '/mgz/macro/add', this.macro_create)
        // 接收数据
        Socket.onmessage = function (response) {
          $utils.readData(response.data, null, function (data) {
            if (data.status === '200') {
              self.refresh()
              self.dialogVisible = false
              // 清除默认值
              self.macro_create.describe = ''
              self.macro_create.name = ''
              self.macro_create.type = ''
            }
          })
        }
      } else {
        self.$store.commit('Socket', null)
      }
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
          param[this.macro_search.type] = this.macro_search.content
        }
      }
      if (this.macro_search.select !== 0) {
        param.type = this.macro_search.select
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
    // 刷新
    refresh () {
      if (this.macro_search.type !== '' || this.macro_search.content !== '' || this.macro_search.select !== '') {
        this.search()
      } else {
        this.getList()
      }
    },
    handleClick (row) {
      console.log(row)
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
