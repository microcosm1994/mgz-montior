<template>
  <div class="timeSwitching">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane :label="changTitle" name="first">
        <div style="text-align: right;">
          <el-button type="primary" @click="edit"> 设置 </el-button>
        </div>
        <form>
          <fieldset>
            <legend>设备状态</legend>
            <ul>
              <li class="li-span-4">
                <label>设备编号</label>
                <input type="text" disabled v-model="Status.Timer_work_state.number">
              </li>
              <li class="li-span-4">
                <label>主备状态</label>
                <input type="text" disabled v-model="Status.Timer_work_state.prepar_state">
              </li>
              <li class="li-span-4">
                <label>告警状态</label>
                <input type="text" disabled v-model="Status.Timer_work_state.alarm_state">
              </li>
              <li class="li-span-4">
                <label>故障码</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fault_number">
              </li>
              <li class="li-span-4">
                <label>外部信号输入</label>
                <input type="text" disabled v-model="Status.Timer_work_state.signal_input">
              </li>
              <li class="li-span-4">
                <label>频率基准</label>
                <input type="text" disabled v-model="Status.Timer_work_state.frequency_bench">
              </li>
              <li class="li-span-4">
                <label>时间基准</label>
                <input type="text" disabled v-model="Status.Timer_work_state.time_bench">
              </li>
              <li class="li-span-4">
                <label>闰秒标识</label>
                <input type="text" disabled v-model="Status.Timer_work_state.Leap">
              </li>
              <li class="li-span-4">
                <label>模拟锁相环</label>
                <input type="text" disabled v-model="Status.Timer_work_state.simulation">
              </li>
              <li class="li-span-4">
                <label>工作主钟</label>
                <input type="text" disabled v-model="Status.Timer_work_state.main_time">
              </li>
            </ul>
          </fieldset>
        </form>
        <!--UTC时间-->
        <form>
          <fieldset>
            <legend>UTC时间</legend>
            <ul>
              <li class="li-span-4">
                <label>年</label>
                <input type="text" disabled v-model="Status.Timer_work_state.year">
              </li>
              <li class="li-span-4">
                <label>月</label>
                <input type="text" disabled v-model="Status.Timer_work_state.month">
              </li>
              <li class="li-span-4">
                <label>日</label>
                <input type="text" disabled v-model="Status.Timer_work_state.day">
              </li>
              <li class="li-span-4">
                <label>时</label>
                <input type="text" disabled v-model="Status.Timer_work_state.hour">
              </li>
              <li class="li-span-4">
                <label>分</label>
                <input type="text" disabled v-model="Status.Timer_work_state.minute">
              </li>
              <li class="li-span-4">
                <label>秒</label>
                <input type="text" disabled v-model="Status.Timer_work_state.second">
              </li>
            </ul>
          </fieldset>
        </form>
        <!--接收机-->
        <form>
          <fieldset>
            <legend>接收机</legend>
            <ul>
              <li class="li-span-4">
                <label>工作模式</label>
                <input type="text" disabled v-model="Status.Timer_work_state.work_mode">
              </li>
              <li class="li-span-4">
                <label>收星颗数</label>
                <input type="text" disabled v-model="Status.Timer_work_state.star_count">
              </li>
              <li class="li-span-4">
                <label>有效状态</label>
                <input type="text" disabled v-model="Status.Timer_work_state.effective_state">
              </li>
            </ul>
          </fieldset>
        </form>
        <!--铷频标A-->
        <form>
          <fieldset>
            <legend>铷频标A</legend>
            <ul>
              <li class="li-span-4">
                <label>铷钟状态</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs1_state">
              </li>
              <li class="li-span-4">
                <label>模拟锁相环</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs1_simulation">
              </li>
              <li class="li-span-4">
                <label>输入状态</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs1_input_state">
              </li>
              <li class="li-span-4">
                <label>频标选择</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs1_choice">
              </li>
              <li class="li-span-4">
                <label>参考选择</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs1_resource_choice">
              </li>
              <li class="li-span-4">
                <label>准确度</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs1_accuracy">
              </li>
              <li class="li-span-4">
                <label>秒稳定度</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs1_second_stability">
              </li>
              <li class="li-span-4">
                <label>压控电压</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs1_DA">
              </li>
              <li class="li-span-4">
                <label>告警状态</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs1_alarm_state">
              </li>
              <li class="li-span-4">
                <label>故障码</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs1_fault_number">
              </li>
            </ul>
          </fieldset>
        </form>
        <!--铷频标B-->
        <form>
          <fieldset>
            <legend>铷频标B</legend>
            <ul>
              <li class="li-span-4">
                <label>铷钟状态</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs2_state">
              </li>
              <li class="li-span-4">
                <label>模拟锁相环</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs2_simulation">
              </li>
              <li class="li-span-4">
                <label>输入状态</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs2_input_state">
              </li>
              <li class="li-span-4">
                <label>频标选择</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs2_choice">
              </li>
              <li class="li-span-4">
                <label>参考选择</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs2_resource_choice">
              </li>
              <li class="li-span-4">
                <label>准确度</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs2_accuracy">
              </li>
              <li class="li-span-4">
                <label>秒稳定度</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs2_second_stability">
              </li>
              <li class="li-span-4">
                <label>压控电压</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs2_DA">
              </li>
              <li class="li-span-4">
                <label>告警状态</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs2_alarm_state">
              </li>
              <li class="li-span-4">
                <label>故障码</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs2_fault_number">
              </li>
            </ul>
          </fieldset>
        </form>
        <!--铷频标C-->
        <form>
          <fieldset>
            <legend>铷频标C</legend>
            <ul>
              <li class="li-span-4">
                <label>铷钟状态</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs3_state">
              </li>
              <li class="li-span-4">
                <label>模拟锁相环</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs3_simulation">
              </li>
              <li class="li-span-4">
                <label>输入状态</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs3_input_state">
              </li>
              <li class="li-span-4">
                <label>频标选择</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs3_choice">
              </li>
              <li class="li-span-4">
                <label>参考选择</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs3_resource_choice">
              </li>
              <li class="li-span-4">
                <label>准确度</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs3_accuracy">
              </li>
              <li class="li-span-4">
                <label>秒稳定度</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs3_second_stability">
              </li>
              <li class="li-span-4">
                <label>压控电压</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs3_DA">
              </li>
              <li class="li-span-4">
                <label>告警状态</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs3_alarm_state">
              </li>
              <li class="li-span-4">
                <label>故障码</label>
                <input type="text" disabled v-model="Status.Timer_work_state.fs3_fault_number">
              </li>
            </ul>
          </fieldset>
        </form>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="设置项"
      :visible.sync="dialogVisible.switch"
      width="70%">
      <timeSwitching_modal></timeSwitching_modal>
    </el-dialog>
  </div>
</template>

<script>
import timeSwitching_modal from './timeSwitching_modal'
export default {
  name: 'timeSwitching',
  data () {
    return {
      activeName: 'first',
      Status: {
        Timer_work_state: {}
      },
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      }
    }
  },
  components: {
    timeSwitching_modal
  },
  computed: {
    changTitle: function () {
      let data = this.$route.query
      return '频标切换器 (' + data.name + ')'
    },
    device: function () {
      return this.$device.Timer
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
