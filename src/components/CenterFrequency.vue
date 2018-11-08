<template>
  <div class="xdSwitchMatrix">
    <el-tabs type="border-card">
      <el-tab-pane label='星地中频分路组合'>
        <div class="setting-box-r">
          <el-button type="primary" @click="edit">设置</el-button>
        </div>
        <form>
          <fieldset>
            <legend>状态：</legend>
            <ul>
              <li class="li-span-2">
                <label>本分控状态</label>
                <input type="text" disabled v-model="Status.CenterFrequency_state_report.State">
              </li>
              <li class="li-span-2">
                <label>自检状态</label>
                <input type="text" disabled v-model="Status.CenterFrequency_state_report.examination_state">
              </li>
              <li class="li-span-2">
                <label>OUT1_SEL</label>
                <input type="text" disabled v-model="Status.CenterFrequency_state_report.OUT1_SEL">
              </li>
              <li class="li-span-2">
                <label>OUT2_SEL</label>
                <input type="text" disabled v-model="Status.CenterFrequency_state_report.OUT2_SEL">
              </li>
              <li class="li-span-2">
                <label>OUT3_SEL</label>
                <input type="text" disabled v-model="Status.CenterFrequency_state_report.OUT3_SEL">
              </li>
              <li class="li-span-2">
                <label>OUT4_SEL</label>
                <input type="text" disabled v-model="Status.CenterFrequency_state_report.OUT4_SEL">
              </li>
              <li class="li-span-2">
                <label>OUT5_SEL</label>
                <input type="text" disabled v-model="Status.CenterFrequency_state_report.OUT5_SEL">
              </li>
              <li class="li-span-2">
                <label>OUT6_SEL</label>
                <input type="text" disabled v-model="Status.CenterFrequency_state_report.OUT6_SEL">
              </li>
              <li class="li-span-2">
                <label>OUT7_SEL</label>
                <input type="text" disabled v-model="Status.CenterFrequency_state_report.OUT7_SEL">
              </li>
              <li class="li-span-2">
                <label>OUT8_SEL</label>
                <input type="text" disabled v-model="Status.CenterFrequency_state_report.OUT8_SEL">
              </li>
              <li class="li-span-2">
                <label>OUT9_SEL</label>
                <input type="text" disabled v-model="Status.CenterFrequency_state_report.OUT9_SEL">
              </li>
              <li class="li-span-2">
                <label>OUT10_SEL</label>
                <input type="text" disabled v-model="Status.CenterFrequency_state_report.OUT10_SEL">
              </li>
              <li class="li-span-2">
                <label>OUT11_SEL</label>
                <input type="text" disabled v-model="Status.CenterFrequency_state_report.OUT11_SEL">
              </li>
              <li class="li-span-2">
                <label>OUT12_SEL</label>
                <input type="text" disabled v-model="Status.CenterFrequency_state_report.OUT12_SEL">
              </li>
            </ul>
          </fieldset>
        </form>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="参数设置"
      :visible.sync="dialogVisible.switch"
      width="40%"
      center>
      <flow_xdzp></flow_xdzp>
    </el-dialog>
  </div>
</template>

<script>
import flow_xdzp from './flow_xdzp'
export default{
  name: 'xdSwitchMatrix',
  data () {
    return {
      /* 状态 */
      Status: {
        CenterFrequency_state_report: {}
      }
    }
  },
  components: {
    flow_xdzp
  },
  computed: {
    device: function () {
      return this.$device.CenterFrequency
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
        self.$store.commit('Socket', null)
      }
    },
    edit () {
      const Socket = this.Socket
      let self = this
      let $utils = this.$utils
      let $ws = this.$ws
      if (Socket) {
        // 请求设置数据
        $ws.sendKey(Socket, '/api/parameter/getParameter', this.structSet.keyArray)
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
  }
}
</script>
