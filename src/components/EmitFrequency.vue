<template>
  <!--射频分路组合-->
  <div class="EmitFrequency">
      <el-tabs type="border-card">
        <div style="text-align: right">
          <el-button type="primary" @click="edit">设置</el-button>
        </div>
        <el-tab-pane label="星地射频分路组合">
          <form>
            <fieldset>
              <legend>状态：</legend>
              <ul>
                <li class="li-span-2">
                  <label>本远控状态</label>
                  <input type="text" v-model="Status.EmitFrequency_state_report.State" disabled>
                </li>
                <li class="li-span-2">
                  <label>自检状态</label>
                  <input type="text" v-model="Status.EmitFrequency_state_report.examination_state" disabled>
                </li>
                <li class="li-span-2">
                  <label>有/无线切换开关1</label>
                  <input type="text" v-model="Status.EmitFrequency_state_report.Switch1" disabled>
                </li>
                <li class="li-span-2">
                  <label>主备切换开关1</label>
                  <input type="text" v-model="Status.EmitFrequency_state_report.preparation_Switch1" disabled>
                </li>
                <li class="li-span-2">
                  <label>有/无线切换开关2</label>
                  <input type="text" v-model="Status.EmitFrequency_state_report.Switch2" disabled>
                </li>
                <li class="li-span-2">
                  <label>主备切换开关2</label>
                  <input type="text" v-model="Status.EmitFrequency_state_report.preparation_Switch2" disabled>
                </li>
              </ul>
            </fieldset>
          </form>
        </el-tab-pane>
      </el-tabs>
      <el-dialog
        title="参数设置"
        :visible.sync="dialogVisible.switch"
        width="50%"
        center>
        <flow_xdsp></flow_xdsp>
      </el-dialog>
  </div>
</template>

<script>
import flow_xdsp from './flow_xdsp'
export default{
  name: 'EmitFrequency',
  data () {
    return {
      /* 状态 */
      Status: {
        EmitFrequency_state_report: {}
      }
    }
  },
  components: {
    flow_xdsp
  },
  computed: {
    device: function () {
      return this.$device.EmitFrequency
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
