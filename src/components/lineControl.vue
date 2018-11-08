<template>
  <div class="lineControl">
    <el-tabs type="border-card">
      <el-tab-pane :label="changTitle">
        <div style="text-align: right">
          <el-button type="primary" @click="edit">设置</el-button>
        </div>
        <form>
          <fieldset>
            <legend>设备状态</legend>
            <ul>
              <li class="li-span-2">
                <label>实时时间</label>
                <input type="text" v-model="Status.Server_state_report.Real_time" disabled>
              </li>
              <li class="li-span-2">
                <label>时统状态</label>
                <input type="text" v-model="Status.Server_state_report.Time_State" disabled>
              </li>
              <li class="li-span-2">
                <label>控制方式</label>
                <input type="text" v-model="Status.Server_state_report.control_mode" disabled>
              </li>
              <li class="li-span-2">
                <label>主备机状态</label>
                <input type="text" v-model="Status.Server_state_report.state" disabled>
              </li>
              <li class="li-span-2">
                <label>工作方式</label>
                <input type="text" v-model="Status.Server_state_report.Operation_mode" disabled>
              </li>
              <li class="li-span-2">
                <label>方位指向角</label>
                <input type="text" v-model="Status.Server_state_report.Azimuth" disabled>
              </li>
              <li class="li-span-2">
                <label>俯仰指向角</label>
                <input type="text" v-model="Status.Server_state_report.Pitch" disabled>
              </li>
              <li class="li-span-2">
                <label>目标卫星编号</label>
                <input type="text" v-model="Status.Server_state_report.Target_number" disabled>
              </li>
              <li class="li-span-2">
                <label>限位状态</label>
                <input type="text" v-model="Status.Server_state_report.Limit_state" disabled>
              </li>
              <li class="li-span-2">
                <label>ACU接收ADU数据状态</label>
                <span class="status-offline" v-bind:class="Status.Server_state_report.Failure_state_ACU_D0"></span>
              </li>
              <li class="li-span-2">
                <label>ACU接收多功能数字基带状态</label>
                <span class="status-offline" v-bind:class="Status.Server_state_report.Failure_state_ACU_D1"></span>
              </li>
              <li class="li-span-2">
                <label>ACU接收时码状态</label>
                <span class="status-offline" v-bind:class="Status.Server_state_report.Failure_state_ACU_D2"></span>
              </li>
              <li class="li-span-2">
                <label>ACU控制器状态</label>
                <span class="status-offline" v-bind:class="Status.Server_state_report.Failure_state_ACU_D3"></span>
              </li>
              <li class="li-span-2">
                <label>ADU接收ACU数据状态</label>
                <span class="status-offline" v-bind:class="Status.Server_state_report.Failure_state_ACU_D4"></span>
              </li>
              <li class="li-span-2">
                <label>ACU驱动器状态</label>
                <span class="status-offline" v-bind:class="Status.Server_state_report.Failure_state_ACU_D5"></span>
              </li>
            </ul>
          </fieldset>
        </form>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="设置参数"
      :visible.sync="dialogVisible.switch"
      width="50%">
      <lineControl_modal></lineControl_modal>
    </el-dialog>
  </div>
</template>

<script>
import lineControl_modal from './lineControl_modal'
export default {
  name: 'lineControl',
  data () {
    return {
      Status: {
        Server_state_report: {}
      }
    }
  },
  components: {
    lineControl_modal
  },
  computed: {
    changTitle: function () {
      let data = this.$route.query
      return '伺服设备(' + data.name + ')'
    },
    device: function () {
      let data = this.$route.query
      if (data.name === 'A') {
        return this.$device.ServerA
      }
      if (data.name === 'B') {
        return this.$device.ServerB
      }
    },
    // 获取设备id和key数组、结构体信息
    structGet: function () {
      let keyArray = []
      let detailed = []
      let id = this.device.id
      let ifBaseband = this.device.ifBaseband
      let structGetArray = this.device.structGetArray
      for (let i = 0; i < structGetArray.length; i++) {
        let key = structGetArray[i]
        keyArray.push(this.device.struct[key].key)
        // detailed[key] = this.device.struct[key]
        detailed.push({
          name: key,
          data: this.device.struct[key]
        })
      }
      return {
        id: id,
        ifBaseband: ifBaseband,
        keyArray: keyArray,
        detailed: detailed
      }
    },
    // 获取设备id和key数组、结构体信息
    structSet: function () {
      let keyArray = []
      let detailed = []
      let id = this.device.id
      let ifBaseband = this.device.ifBaseband
      let structSetArray = this.device.structSetArray
      for (let i = 0; i < structSetArray.length; i++) {
        let key = structSetArray[i]
        keyArray.push(this.device.struct[key].key)
        // detailed[key] = this.device.struct[key]
        detailed.push({
          name: key,
          data: this.device.struct[key]
        })
      }
      return {
        id: id,
        ifBaseband: ifBaseband,
        keyArray: keyArray,
        detailed: detailed
      }
    },
    Socket: function () {
      return this.$store.state.Socket
    },
    dialogVisible: function () {
      return this.$store.state.modal
    }
  },
  watch: {
    Socket: function (n, o) {
      if (n !== null) {
        this.get()
      }
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    // 获取数据
    get () {
      const Socket = this.Socket
      let self = this
      let $utils = this.$utils
      let $ws = this.$ws
      if (Socket) {
        // 请求数据
        $ws.sendKey(Socket, '/api/monitor/autoGet', this.structGet.keyArray)
        // 接收数据
        Socket.onmessage = function (response) {
          $utils.readData(response.data, self.structGet, function (data) {
            if (data.type === 0) {
              for (let key in data.data) {
                self.Status[key] = data.data[key]
              }
            }
            if (data.type === 1) {
              if (self.structGet.keyArray.includes(data.key)) {
                $ws.sendKey(Socket, '/api/monitor/autoGet', data.key)
              }
            }
          })
        }
      } else {
        this.$store.commit('Socket', null)
      }
    },
    edit () {
      const Socket = this.Socket
      let self = this
      let $utils = this.$utils
      let $ws = this.$ws
      if (Socket) {
        // 请求设置数据
        $ws.sendKey(Socket, '/api/parameter/getParameter', this.structSet.id)
        self.$store.commit('modal', {switch: true, type: 0})
        self.$store.commit('device', self.device)
        // 接收数据
        Socket.onmessage = function (response) {
          $utils.readData(response.data, self.structSet, function (data) {
            if (data.type === 0) {
              if (Object.keys(data.data).length > 0) {
                self.$store.commit('components_data', data.data)
              }
            }
            if (data.type === 1) {
              if (self.structGet.keyArray.includes(data.key)) {
                self.get()
              }
            }
          })
        }
      }
    }
  },
  // 导航守卫，当前路由改变时执行
  beforeRouteUpdate (to, from, next) {
    next()
    this.get()
  }
}
</script>
