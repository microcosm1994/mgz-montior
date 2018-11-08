<template>
  <div class="sqlComputer">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane :label="changTitle" name="first">
        <form>
          <fieldset>
            <legend>数据库使用状态</legend>
            <el-table
              :data="tableData"
              :span-method="objectSpanMethod"
              border
              style="width: 100%; margin-top: 20px">
              <el-table-column
                prop="type"
                label=""
                width="30">
              </el-table-column>
              <el-table-column
                prop="devicename"
                label="数据子类型">
              </el-table-column>
              <el-table-column
                prop="from"
                label="来源">
              </el-table-column>
              <el-table-column
                prop="address"
                label="组地址">
              </el-table-column>
              <el-table-column
                prop="port"
                label="端口号">
              </el-table-column>
              <el-table-column
                prop="revicePage"
                label="按收包计数">
              </el-table-column>
              <el-table-column
                prop="filename"
                label="文件名称">
              </el-table-column>
              <el-table-column
                prop="filesize"
                label="文件占用空间(byte)">
              </el-table-column>
            </el-table>
          </fieldset>
        </form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'sqlComputer',
  data () {
    return {
      loadingInstance: null, // loading遮罩实例
      timer: null,
      timer_overtime: null, // 返回登陆定时器
      activeName: 'first',
      local: '',
      localControl: '',
      main: '',
      tabControl: '',
      tableData: [{
        type: '设备日志',
        devicename: '伺服设备',
        from: '伺服设备（A）',
        address: '225.225.0.1',
        port: '5001',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '伺服设备',
        from: '伺服设备（B）',
        address: '225.225.0.1',
        port: '5001',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'C频段上变频器',
        from: 'C频段上变频器(A)',
        address: '225.225.0.1',
        port: '5003',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'C频段上变频器',
        from: 'C频段上变频器(B)',
        address: '225.225.0.1',
        port: '5003',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'C频段下变频器',
        from: 'C频段下变频器(A)',
        address: '225.225.0.1',
        port: '5005',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'C频段下变频器',
        from: 'C频段下变频器(B)',
        address: '225.225.0.1',
        port: '5005',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'C频段发射校零变频器',
        from: 'C频段发射校零变频器',
        address: '225.225.0.1',
        port: '5007',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'C频段接收校零变频器',
        from: 'C频段接收校零变频器',
        address: '225.225.0.1',
        port: '5009',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '中频分路组合',
        from: '中频分路组合',
        address: '225.225.0.1',
        port: '5011',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'C波段200W功放组合',
        from: 'C波段200W功放组合(A)',
        address: '225.225.0.1',
        port: '11001',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'C波段200W功放组合',
        from: 'C波段200W功放组合(B)',
        address: '225.225.0.1',
        port: '11001',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'C波段200W功放开关',
        from: 'C波段200W功放开关',
        address: '225.225.0.1',
        port: '12001',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '卫通发射基带',
        from: '卫通发射基带(A)',
        address: '225.225.0.1',
        port: '5101',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '卫通发射基带',
        from: '卫通发射基带(B)',
        address: '225.225.0.1',
        port: '5101',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '卫通接收基带',
        from: '卫通接收基带(A)',
        address: '225.225.0.1',
        port: '5103',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '卫通接收基带',
        from: '卫通接收基带(B)',
        address: '225.225.0.1',
        port: '5103',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '波控机',
        from: '波控机',
        address: '225.225.0.2',
        port: '6001',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'ka频段上变频器',
        from: 'ka频段上变频器(A)',
        address: '225.225.0.2',
        port: '6003',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'ka频段上变频器',
        from: 'ka频段上变频器(B)',
        address: '225.225.0.2',
        port: '6003',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'ka频段下变频器',
        from: 'ka频段下变频器(A)',
        address: '225.225.0.2',
        port: '6005',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'ka频段下变频器',
        from: 'ka频段下变频器(B)',
        address: '225.225.0.2',
        port: '6005',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'ka频段发射校零变频器',
        from: 'ka频段发射校零变频器',
        address: '225.225.0.2',
        port: '6007',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'ka频段接收校零变频器',
        from: 'ka频段接收校零变频器',
        address: '225.225.0.2',
        port: '6009',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '星地中频分路组合',
        from: '星地中频分路组合',
        address: '225.225.0.2',
        port: '6011',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '星地射频分路组合',
        from: '星地射频分路组合',
        address: '225.225.0.2',
        port: '6013',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'ka发射基带',
        from: 'ka发射基带(A)',
        address: '225.225.0.2',
        port: '6101',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'ka发射基带',
        from: 'ka发射基带(B)',
        address: '225.225.0.2',
        port: '6101',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'ka接收基带',
        from: 'ka接收基带(A)',
        address: '225.225.0.2',
        port: '6103',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: 'ka接收基带',
        from: 'ka接收基带(B)',
        address: '225.225.0.2',
        port: '6103',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '星间链路模拟源',
        from: '星间链路模拟源',
        address: '225.225.0.2',
        port: '6105',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '系统监控计算机',
        from: '系统监控计算机(A)',
        address: '225.225.0.1',
        port: '10001',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '系统监控计算机',
        from: '系统监控计算机(B)',
        address: '225.225.0.2',
        port: '10001',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '业务处理计算机',
        from: '业务处理计算机(A)',
        address: '225.225.0.1',
        port: '10003',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '业务处理计算机',
        from: '业务处理计算机(B)',
        address: '225.225.0.2',
        port: '10003',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '数据处理计算机',
        from: '数据处理计算机(A)',
        address: '225.225.0.1',
        port: '10005',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }, {
        type: '设备日志',
        devicename: '数据处理计算机',
        from: '数据处理计算机(B)',
        address: '225.225.0.2',
        port: '10005',
        revicePage: '-',
        filename: '-',
        filesize: '-'
      }]
    }
  },
  computed: {
    changTitle: function () {
      let data = this.$route.query
      return '数据处理计算机 (' + data.name + ')'
    },
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
  mounted () {
    const Socket = this.Socket
    let self = this
    let $utils = this.$utils
    let $ws = this.$ws
    if (Socket) {
      $ws.sendKey(Socket, '/api/monitor/autoGet', this.structGet.keyArray)
      this.timer = setInterval(() => {
        $ws.sendKey(Socket, '/api/monitor/autoGet', this.structGet.keyArray)
      }, 1000)
      Socket.onmessage = function (response) {
        $utils.readData(response.data, self.structGet, function (data) {
          for (let key in data) {
            self.Status[key] = data[key]
            console.log(self.Status[key])
          }
          for (let key in self.Status) {
            self.Setting[key] = self.Status[key]
          }
        })
      }
    } else {
      this.$router.push({path: '/'})
    }
  },
  methods: {
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 26 === 0) {
          return {
            rowspan: 26,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    // 获取数据
    get () {
      const Socket = this.Socket
      let self = this
      let $utils = this.$utils
      let $ws = this.$ws
      if (Socket) {
        // 请求数据
        $ws.sendKey(Socket, '/api/monitor/autoGet', this.structGet.keyArray)
        this.timer = setInterval(() => {
          $ws.sendKey(Socket, '/api/monitor/autoGet', this.structGet.keyArray)
        }, 1000)
        // 接收数据
        Socket.onmessage = function (response) {
          if (typeof response.data !== 'string') {
            self.loadingCloase()
            clearTimeout(self.timer_overtime)
            $utils.readData(response.data, self.structGet, function (data) {
              for (let key in data) {
                self.Status[key] = data[key]
              }
            })
          }
        }
      } else {
        let self = this
        let form = {
          username: this.$cookies.get('u'),
          password: this.$cookies.get('p')
        }
        this.loadingOpen()
        $ws.reconnect(self.$Socket_url, form, function (Socket) {
          self.$store.commit('Socket', Socket)
          self.get()
        })
        self.overtime(Socket)
      }
    },
    // 保存设置
    save () {
      const Socket = this.Socket
      let $utils = this.$utils
      let $ws = this.$ws
      let self = this
      // 判断设置数据是否为空
      // for (let item in this.Setting) {
      //   let fields = this.Setting[item]
      //   for (let item1 in fields) {
      //     if (fields[item1] === '') {
      //       console.log(this.Setting)
      //       this.$message({
      //         type: 'error',
      //         message: '请输入参数'
      //       })
      //       return false
      //     }
      //   }
      // }
      // 把数据写成byte格式发给后端
      $utils.writeByte(this.structGet, this.Setting, (data) => {
        $ws.sendData(Socket, '/api/parameter/changeParameter', data)
        self.dialogVisible = false
      })
    },
    edit () {
      for (let key in this.Setting) {
        this.Setting[key] = this.Status[key]
      }
      this.dialogVisible = true
    },
    loadingOpen () {
      // 开启Loading遮罩
      this.loadingInstance = this.$loading(this.$elementUI_loadingOption)
    },
    loadingCloase () {
      if (this.loadingInstance) {
        this.loadingInstance.close()
      }
    },
    // 重新连接超时返回登陆页
    overtime (Socket) {
      let self = this
      if (!Socket) {
        this.timer_overtime = setTimeout(function () {
          self.loadingCloase()
          self.$router.push({path: '/'})
          clearTimeout(self.timer_overtime)
        }, 10000)
      }
    }
  },
  // 导航守卫，离开当前组调用
  beforeRouteLeave (to, from, next) {
    if (this.timer > 0 || this.timer_overtime > 0) {
      clearInterval(this.timer)
      clearTimeout(this.timer_overtime)
      next()
    } else {
      next()
    }
  }
}
</script>
