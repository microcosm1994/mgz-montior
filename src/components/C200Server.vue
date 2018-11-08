<template>
  <div class="cbd">
    <el-tabs type="border-card">
      <div style="text-align: right;">
        <el-button type="primary" @click="edit">设置</el-button>
      </div>
      <el-tab-pane label= "C200功放网络">
        <form>
          <fieldset>
            <legend>C200功放网络状态：</legend>
            <ul>
              <li class="li-span-2">
                <label>功放工作电压</label>
                <input type="text" v-model="Status.C_common_state_report.voltage" disabled>
              </li>
              <li class="li-span-2">
                <label>功放工作电流</label>
                <input type="text" v-model="Status.C_common_state_report.current" disabled>
              </li>
              <li class="li-span-2">
                <label>工作温度</label>
                <input type="text" v-model="Status.C_common_state_report.temperature" disabled>
              </li>
              <li class="li-span-2">
                <label>设置输出功率</label>
                <input type="text" v-model="Status.C_common_state_report.set_power" disabled>
              </li>
              <li class="li-span-2">
                <label>功放输出功率</label>
                <input type="text" v-model="Status.C_common_state_report.out_power" disabled>
              </li>
              <li class="li-span-2">
                <label>功放输入功率</label>
                <input type="text" v-model="Status.C_common_state_report.in_power" disabled>
              </li>
              <li class="li-span-2">
                <label>过电压指示</label>
                <input type="text" v-model="Status.C_common_state_report.Voltage_indication" disabled>
              </li>
              <li class="li-span-2">
                <label>过电流指示</label>
                <input type="text" v-model="Status.C_common_state_report.Current_indication" disabled>
              </li>
              <li class="li-span-2">
                <label>过温度指示</label>
                <input type="text" v-model="Status.C_common_state_report.temper_indication" disabled>
              </li>
              <li class="li-span-2">
                <label>输入功率</label>
                <input type="text" v-model="Status.C_common_state_report.power" disabled>
              </li>
              <li class="li-span-2">
                <label>输出驻波</label>
                <input type="text" v-model="Status.C_common_state_report.stand_wave" disabled>
              </li>
              <li class="li-span-2">
                <label>故障指示</label>
                <input type="text" v-model="Status.C_common_state_report.fault_indication" disabled>
              </li>
            </ul>
          </fieldset>
        </form>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="设置参数"
      :visible.sync="dialogVisible.switch"
      :modal="false"
      width="30%">
      <C200Server_modal></C200Server_modal>
    </el-dialog>
  </div>
</template>

<script>
import C200Server_modal from './C200Server_modal'
export default {
  name: 'cbd',
  data () {
    return {
      // 所有状态上报结构体数据
      Status: {
        C_common_state_report: {}
      }
    }
  },
  // 设置模态框组件
  components: {
    C200Server_modal
  },
  // 计算函数
  computed: {
    // 获取设备文件
    device: function () {
      return this.$device.C200_common
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
    // Socket实例
    Socket: function () {
      return this.$store.state.Socket
    },
    // 模态框开启或者关闭状态
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
  // 钩子函数，页面加载完自动执行
  mounted () {
    this.get() // 获取设备状态数据
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
        self.$store.commit('Socket', null)
      }
    },
    // 设置模态框
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
