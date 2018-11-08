<template>
  <div class="beamProcessor">
    <el-tabs type="border-card">
      <div style="text-align: right;">
        <el-button type="primary" @click="edit">设置</el-button>
      </div>
      <el-tab-pane label= '波控处理机'>
        <el-row :gutter="0">
          <el-col :span="14">
            <!--时统-->
            <form>
              <fieldset>
                <legend>时统</legend>
                <ul>
                  <li class="li-span-2">
                    <label>时统</label>
                    <input v-model="Status.WAVE_time_series.time_series" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>实时时间</label>
                    <input v-model="Status.WAVE_time_series.real_time" type="text" disabled>
                  </li>
                </ul>
              </fieldset>
            </form>
            <!--ka波控机-->
            <form>
              <fieldset>
                <legend>ka波控机</legend>
                <ul>
                  <li class="li-span-2">
                    <label>波控机DSP状态</label>
                    <input v-model="Status.WAVE_Ka_wave.fault_state_failure_state_D4" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>波控机FPGA状态</label>
                    <input v-model="Status.WAVE_Ka_wave.fault_state_failure_state_D3" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>接收时码信息状态</label>
                    <input v-model="Status.WAVE_Ka_wave.fault_state_failure_state_D2" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>接收多功能数字基带信息状态</label>
                    <input v-model="Status.WAVE_Ka_wave.fault_state_failure_state_D1" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>接收波控器数据通信状态</label>
                    <input v-model="Status.WAVE_Ka_wave.fault_state_falure_state_D0" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>卫星编号</label>
                    <input v-model="Status.WAVE_Ka_wave.number" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>控制方式</label>
                    <input v-model="Status.WAVE_Ka_wave.control" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>主备机状态</label>
                    <input v-model="Status.WAVE_Ka_wave.state" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>工作模式</label>
                    <input v-model="Status.WAVE_Ka_wave.word_pattern" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>工作方式</label>
                    <input v-model="Status.WAVE_Ka_wave.word_mode" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>方位实时角</label>
                    <input v-model="Status.WAVE_Ka_wave.azimuth_angle" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>离轴角</label>
                    <input v-model="Status.WAVE_Ka_wave.axis_angle" type="text" disabled>
                  </li>
                </ul>
              </fieldset>
            </form>
            <!--波控器-->
            <form>
              <fieldset>
                <legend>波控器</legend>
                <ul style="padding-top: 10px;padding-bottom: 10px;">
                  <li class="li-span-2">
                    <label>波控器软件版本号</label>
                    <input v-model="Status.WAVE_controller.edition_number" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>波控器FPGA状态</label>
                    <input v-model="Status.WAVE_controller.FPGA_state" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>天线指向状态</label>
                    <input v-model="Status.WAVE_controller.antenna_state" type="text" disabled>
                  </li>
                </ul>
              </fieldset>
            </form>
            <!--相控阵天线执行情况-->
            <form>
              <fieldset>
                <legend>相控阵天线执行情况</legend>
                <ul>
                  <li class="li-span-1">
                    <label>当前模式控制码</label>
                    <input v-model="Status.WAVE_mode_control.mode_number" type="text" disabled>
                  </li>
                </ul>
                <!-- 当前模式执行结果-->
                <form>
                  <fieldset>
                    <legend>当前模式执行结果</legend>
                    <ul>
                      <li class="li-span-2">
                        <label>模式控制码</label>
                        <input v-model="Status.WAVE_mode_control.cmd_number_control_code_0A" type="text" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>时标数据</label>
                        <input v-model="Status.WAVE_mode_control.cmd_number_time_data" type="text" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>收发模式选择开关</label>
                        <input v-model="Status.WAVE_mode_control.cmd_number_model_switch" type="text" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>功率控制模式</label>
                        <input v-model="Status.WAVE_mode_control.cmd_number_power_control" type="text" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>功率衰减值</label>
                        <input v-model="Status.WAVE_mode_control.cmd_number_power_attenuation" type="text" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>方位角</label>
                        <input v-model="Status.WAVE_mode_control.cmd_number_azimuth" type="text" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>离轴角</label>
                        <input v-model="Status.WAVE_mode_control.cmd_number_Off_axis" type="text" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>TR组件校准选择</label>
                        <input v-model="Status.WAVE_mode_control.cmd_number_tr_check" type="text" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>TR组件通道号</label>
                        <input v-model="Status.WAVE_mode_control.cmd_number_TR_channel" type="text" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>TR组件参数加载选择</label>
                        <input v-model="Status.WAVE_mode_control.cmd_number_TR_para_choose" type="text" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>TR组件通道号</label>
                        <input v-model="Status.WAVE_mode_control.cmd_number_TR_channel_2" type="text" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>相位修正码</label>
                        <input v-model="Status.WAVE_mode_control.cmd_number_phase_code" type="text" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>幅度修正码</label>
                        <input v-model="Status.WAVE_mode_control.cmd_number_amplitude_code" type="text" disabled>
                      </li>
                    </ul>
                  </fieldset>
                </form>
              </fieldset>
            </form>
          </el-col>
          <el-col :span="10">
            <!--相控阵天线-->
            <form>
              <fieldset>
                <legend>相控阵天线</legend>
                <ul>
                  <li class="li-span-1">
                    <label>天线TR组件温度状态1</label>
                    <input v-model="Status.WAVE_phased_array_antenna.TR_state1" type="text" disabled>
                  </li>
                  <li class="li-span-1">
                    <label>天线TR组件温度状态2</label>
                    <input v-model="Status.WAVE_phased_array_antenna.TR_state2" type="text" disabled>
                  </li>
                  <li class="li-span-1">
                    <label>天线TR组件温度状态3</label>
                    <input v-model="Status.WAVE_phased_array_antenna.TR_state3" type="text" disabled>
                  </li>
                </ul>
                <!--电源模块状态-->
                <form>
                  <fieldset>
                    <legend>5V30A交流电源模块状态</legend>
                    <ul>
                      <li class="li-span-1">
                        <label>交流1故障指示模块1</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D1"></span>
                      </li>
                      <li class="li-span-1">
                        <label>交流1故障指示模块2</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D2"></span>
                      </li>
                      <li class="li-span-1">
                        <label>交流1故障指示模块3</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D3"></span>
                      </li>
                      <li class="li-span-1">
                        <label>交流1故障指示模块4</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D4"></span>
                      </li>
                      <li class="li-span-1">
                        <label>交流1故障指示模块5</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D5"></span>
                      </li>
                      <li class="li-span-1">
                        <label>交流1故障指示模块6</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D6"></span>
                      </li>
                      <li class="li-span-1">
                        <label>交流1故障指示模块7</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D7"></span>
                      </li>
                      <li class="li-span-1">
                        <label>交流1故障指示模块8</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D8"></span>
                      </li>
                      <li class="li-span-1">
                        <label>交流2故障指示模块9</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D9"></span>
                      </li>
                      <li class="li-span-1">
                        <label>交流2故障指示模块10</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D10"></span>
                      </li>
                      <li class="li-span-1">
                        <label>交流2故障指示模块11</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D11"></span>
                      </li>
                      <li class="li-span-1">
                        <label>交流2故障指示模块12</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D12"></span>
                      </li>
                      <li class="li-span-1">
                        <label>交流2故障指示模块13</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D13"></span>
                      </li>
                      <li class="li-span-1">
                        <label>交流2故障指示模块14</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D14"></span>
                      </li>
                      <li class="li-span-1">
                        <label>交流2故障指示模块15</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D15"></span>
                      </li>
                      <li class="li-span-1">
                        <label>交流2故障指示模块16</label>
                        <span class="status-offline" v-bind:class="Status.WAVE_phased_array_antenna.power_state_power_state_D16"></span>
                      </li>
                    </ul>
                  </fieldset>
                </form>
                <el-table
                  :data="tableData"
                  height="240"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="name"
                    label="设备">
                  </el-table-column>
                  <el-table-column
                    prop="content"
                    label="内容">
                  </el-table-column>
                </el-table>
              </fieldset>
            </form>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="设置参数"
      :visible.sync="dialogVisible.switch"
      :modal="false"
      width="60%">
      <beamProcessor_modal></beamProcessor_modal>
    </el-dialog>
  </div>
</template>

<script>
import beamProcessor_modal from './beamProcessor_modal'
export default{
  name: 'beamProcessor',
  data () {
    return {
      /* 状态 */
      Status: {
        // 波控器时统信息
        WAVE_time_series: {},
        // Ka波控器
        WAVE_Ka_wave: {},
        // 波控器
        WAVE_controller: {},
        // 波控器相控阵天线
        WAVE_phased_array_antenna: {},
        // 波控器相控阵天线执行情况
        WAVE_mode_control: {}
      }
    }
  },
  components: {
    beamProcessor_modal
  },
  computed: {
    tableData: function () {
      let data = this.Status.WAVE_phased_array_antenna
      let result = []
      let num = 0
      for (let key in data) {
        if (key.indexOf('TR_TR_Power_') > -1) {
          num++
          result.push({name: '天线TR组件单元' + num + '电流采样', content: data[key] + ' A'})
        }
      }
      return result
    },
    device: function () {
      return this.$device.WAVE
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
                if (key === 'WAVE_phased_array_antenna') {
                  console.log(key)
                }
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
        self.$store.commit('device', self.device)
        self.$store.commit('modal', {switch: true, type: 0})
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
