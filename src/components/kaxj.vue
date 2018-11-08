<template>
  <div class="kaxj">
    <el-tabs type="border-card">
      <el-tab-pane label= '星间链路模拟源'>
        <el-tabs v-model="activeName">
          <el-tab-pane label="状态监视" name="first">
            <el-row :gutter="2">
              <el-col :span="21">
                <el-col :span="12">
                  <!--上行调制-->
                  <form>
                    <fieldset>
                      <legend>上行调制</legend>
                      <ul>
                        <li class="li-span-2">
                          <label>多普勒频偏</label>
                          <input v-model="Status.KA_S_up_status.DopINco" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>数据类型标志</label>
                          <input v-model="Status.KA_S_up_status.DataSign" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>小环比对结果</label>
                          <input v-model="Status.KA_S_up_status.CmdFrmloop" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>发送周计数</label>
                          <input v-model="Status.KA_S_up_status.Wnup" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>发送周内毫秒</label>
                          <input v-model="Status.KA_S_up_status.Sowup" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>生成周计数</label>
                          <input v-model="Status.KA_S_up_status.Wngn" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>生成周内毫秒</label>
                          <input v-model="Status.KA_S_up_status.Sowgn" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>比对错帧数</label>
                          <input v-model="Status.KA_S_up_status.CmdFrmerrnum" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>错帧序号</label>
                          <input v-model="Status.KA_S_up_status.CmdFrmerrID" type="text" disabled>
                        </li>
                      </ul>
                    </fieldset>
                  </form>
                  <!--接收机状态-->
                  <form>
                    <fieldset>
                      <legend>接收机状态</legend>
                      <ul>
                        <li class="li-span-2">
                          <label>接收机状态</label>
                          <input v-model="Status.KA_S_recv_status.RecStaus" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>干扰状态</label>
                          <input v-model="Status.KA_S_recv_status.InterState" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>信号功率</label>
                          <input v-model="Status.KA_S_recv_status.Level" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>AGC电压</label>
                          <input v-model="Status.KA_S_recv_status.AgcVolt" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>载噪比</label>
                          <input v-model="Status.KA_S_recv_status.C_N0" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>载波多普勒</label>
                          <input v-model="Status.KA_S_recv_status.CarrDopp" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>伪码多普勒</label>
                          <input v-model="Status.KA_S_recv_status.PNDopp" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>捕获时差</label>
                          <input v-model="Status.KA_S_recv_status.TimeDiff" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>捕获时间</label>
                          <input v-model="Status.KA_S_recv_status.AcquTimeS" type="text" disabled>
                        </li>
                      </ul>
                    </fieldset>
                  </form>
                </el-col>
                <el-col :span="12">
                  <!--时频状态-->
                  <form>
                    <fieldset>
                      <legend>时频状态</legend>
                      <ul style="padding-top: 20px  ;padding-bottom: 35px;">
                        <li class="li-span-1">
                          <label>外秒脉冲同步状态</label>
                          <input v-model="Status.KA_S_time_status.PpsStatus" type="text" disabled>
                        </li>
                        <li class="li-span-1">
                          <label>外时统锁定状态</label>
                          <input v-model="Status.KA_S_time_status.TimeLockFlag" type="text" disabled>
                        </li>
                        <li class="li-span-1">
                          <label>时码信息低16位</label>
                          <input v-model="Status.KA_S_time_status.B000L16" type="text" disabled>
                        </li>
                        <li class="li-span-1">
                          <label>时码信息高32位</label>
                          <input v-model="Status.KA_S_time_status.B000H32" type="text" disabled>
                        </li>
                        <li class="li-span-1">
                          <label>参数比对结果</label>
                          <input v-model="Status.KA_S_time_status.CmdErr" type="text" disabled>
                        </li>
                        <li class="li-span-1">
                          <label>取码接口通信状态</label>
                          <input v-model="Status.KA_S_time_status.PRNSta" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>年</label>
                          <input v-model="Status.KA_S_time_status.Year" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>周计数</label>
                          <input v-model="Status.KA_S_time_status.WeekCount" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>周内毫秒计数</label>
                          <input v-model="Status.KA_S_time_status.SecondCount" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>锁定指示</label>
                          <input v-model="Status.KA_S_time_status.VcoLock" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>收发状态</label>
                          <input v-model="Status.KA_S_time_status.ModorRec" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>供电状态</label>
                          <input v-model="Status.KA_S_time_status.PowerSta" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>基带板状态</label>
                          <input v-model="Status.KA_S_time_status.PowerStaJD" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>硬件温度</label>
                          <input v-model="Status.KA_S_time_status.Temprature" type="text" disabled>
                        </li>
                      </ul>
                    </fieldset>
                  </form>
                </el-col>
              </el-col>
              <el-col :span="3">
                <form>
                  <fieldset>
                    <legend>状态</legend>
                    <div style="padding-top: 10px;">
                      <input type="text" v-model="st.status" disabled>
                    </div>
                  </fieldset>
                </form>
                <form style="padding-top: 10px;">
                  <fieldset>
                    <legend>控制方式</legend>
                    <input type="text" v-model="st.control" disabled>
                    <el-button size="mini" plain @click="st.control = '本控'">本控</el-button>
                    <el-button size="mini" plain @click="st.control = '远控'">远控</el-button>
                  </fieldset>
                </form>
                <form style="padding-top: 10px;">
                  <fieldset>
                    <legend>设置切换方式</legend>
                    <input type="text" v-model="st.change" disabled>
                    <el-button size="mini" plain @click="st.change = st.change === '手动切换'? '自动切换':'手动切换'">切换方式</el-button>
                  </fieldset>
                </form>
                <form style="padding-top: 30px;">
                  <fieldset>
                    <legend>主备机状态</legend>
                    <input type="text" v-model="st.master" disabled>
                    <el-button size="mini" plain @click="st.master = st.master === '主机'? '备机':'主机'">主备机切换</el-button>
                  </fieldset>
                </form>
              </el-col>
            </el-row>
          </el-tab-pane>
          <!--<el-tab-pane style="width: 100%" label="参数监视" name="second">-->
            <!--<el-row :gutter="2">-->
              <!--<el-col :span="21">-->
                <!--&lt;!&ndash;时频参数&ndash;&gt;-->
                <!--<form>-->
                  <!--<fieldset>-->
                    <!--<legend>时频单元</legend>-->
                    <!--<ul>-->
                      <!--<li class="li-span-4">-->
                        <!--<label>内/外时频选择</label>-->
                        <!--<input v-model="KAC_time_unit.Mode" type="text" disabled>-->
                      <!--</li>-->
                      <!--<li class="li-span-4">-->
                        <!--<label>闰年</label>-->
                        <!--<input v-model="KAC_time_unit.Leap" type="text" disabled>-->
                      <!--</li>-->
                      <!--<li class="li-span-4">-->
                        <!--<label>年</label>-->
                        <!--<input v-model="KAC_time_unit.Year" type="text" disabled>-->
                      <!--</li>-->
                      <!--<li class="li-span-4">-->
                        <!--<label>天</label>-->
                        <!--<input v-model="KAC_time_unit.Day" type="text" disabled>-->
                      <!--</li>-->
                      <!--<li class="li-span-4">-->
                        <!--<label>时</label>-->
                        <!--<input v-model="KAC_time_unit.Hour" type="text" disabled>-->
                      <!--</li>-->
                      <!--<li class="li-span-4">-->
                        <!--<label>分</label>-->
                        <!--<input v-model="KAC_time_unit.Minute" type="text" disabled>-->
                      <!--</li>-->
                      <!--<li class="li-span-4">-->
                        <!--<label>秒</label>-->
                        <!--<input v-model="KAC_time_unit.Second" type="text" disabled>-->
                      <!--</li>-->
                    <!--</ul>-->
                  <!--</fieldset>-->
                <!--</form>-->
                <!--<el-col :span="12">-->
                  <!--&lt;!&ndash;调制参数&ndash;&gt;-->
                  <!--<form>-->
                    <!--<fieldset>-->
                      <!--<legend>上行调制参数</legend>-->
                      <!--<ul>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>工作模式</label>-->
                          <!--<input v-model="KAC_up_modulation.WorkMode" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>调制开关</label>-->
                          <!--<input v-model="KAC_up_modulation.ModSwitch" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>调制电平</label>-->
                          <!--<input v-model="KAC_up_modulation.Level" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>伪码加调</label>-->
                          <!--<input v-model="KAC_up_modulation.ModuPN" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>数据加调</label>-->
                          <!--<input v-model="KAC_up_modulation.ModuData" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>调制伪码序号</label>-->
                          <!--<input v-model="KAC_up_modulation.PRN" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>调制伪码类型</label>-->
                          <!--<input v-model="KAC_up_modulation.PNsel" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>输出载波中频</label>-->
                          <!--<input v-model="KAC_up_modulation.CarIF" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>多普勒动态模拟开关</label>-->
                          <!--<input v-model="KAC_up_modulation.Offset" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>上行多普勒预置</label>-->
                          <!--<input v-model="KAC_up_modulation.Offset" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>多普勒模拟频率范围</label>-->
                          <!--<input v-model="KAC_up_modulation.FreRange" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>最大多普勒变化率</label>-->
                          <!--<input v-model="KAC_up_modulation.MaxDoplst" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>调制数据速率</label>-->
                          <!--<input v-model="KAC_up_modulation.Data_rate" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>LDPC开关</label>-->
                          <!--<input v-model="KAC_up_modulation.Offset" type="text" disabled>-->
                        <!--</li>-->
                      <!--</ul>-->
                    <!--</fieldset>-->
                  <!--</form>-->
                <!--</el-col>-->
                <!--<el-col :span="12">-->
                  <!--&lt;!&ndash;接收机参数&ndash;&gt;-->
                  <!--<form>-->
                    <!--<fieldset>-->
                      <!--<legend>接收机参数</legend>-->
                      <!--<ul style="padding-top: 20px;padding-bottom: 30px;">-->
                        <!--<li class="li-span-2">-->
                          <!--<label>输入选择</label>-->
                          <!--<input v-model="KAC_recv_param.Input" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>接收开关</label>-->
                          <!--<input v-model="KAC_recv_param.RecSwitch" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>接收伪码序号</label>-->
                          <!--<input v-model="KAC_recv_param.PRN" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>接收伪码类型</label>-->
                          <!--<input v-model="KAC_recv_param.PNsel" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>载波频率范围捕获</label>-->
                          <!--<input v-model="KAC_recv_param.AcquRange" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>时间不确定度捕获范围</label>-->
                          <!--<input v-model="KAC_recv_param.TimeRange" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>时间滑动范围</label>-->
                          <!--<input v-model="KAC_recv_param.TimeRange1" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>载波环路带宽</label>-->
                          <!--<input v-model="KAC_recv_param.PllBw" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>时间滑动范围</label>-->
                          <!--<input v-model="KAC_recv_param.TimeRange1" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>接收数据速率</label>-->
                          <!--<input v-model="KAC_recv_param.Data_rate" type="text" disabled>-->
                        <!--</li>-->
                        <!--<li class="li-span-2">-->
                          <!--<label>LDPC开关</label>-->
                          <!--<input v-model="KAC_recv_param.LDPC_EN" type="text" disabled>-->
                        <!--</li>-->
                      <!--</ul>-->
                    <!--</fieldset>-->
                  <!--</form>-->
                <!--</el-col>-->
              <!--</el-col>-->
              <!--<el-col :span="3">-->
                <!--<div style="text-align: center;padding-top: 20px;">-->
                  <!--<el-button type="primary" @click="dialogVisible = true">设置</el-button>-->
                <!--</div>-->
                <!--<form style="margin-top: -6px;">-->
                  <!--<fieldset>-->
                    <!--<legend>状态</legend>-->
                    <!--<input type="text" v-model="st.status" disabled>-->
                  <!--</fieldset>-->
                <!--</form>-->
                <!--<form>-->
                  <!--<fieldset>-->
                    <!--<legend>控制方式</legend>-->
                    <!--<input type="text" v-model="st.control" disabled>-->
                    <!--<el-button size="mini" plain @click="st.control = '本控'">本控</el-button>-->
                    <!--<el-button size="mini" plain @click="st.control = '远控'">远控</el-button>-->
                  <!--</fieldset>-->
                <!--</form>-->
                <!--<form>-->
                  <!--<fieldset>-->
                    <!--<legend>设置切换方式</legend>-->
                    <!--<input type="text" v-model="st.change" disabled>-->
                    <!--<el-button size="mini" plain @click="st.change = st.change === '手动切换'? '自动切换':'手动切换'">切换方式</el-button>-->
                  <!--</fieldset>-->
                <!--</form>-->
                <!--<form>-->
                  <!--<fieldset>-->
                    <!--<legend>主备机状态</legend>-->
                    <!--<input type="text" v-model="st.master" disabled>-->
                    <!--<el-button size="mini" plain @click="st.master = st.master === '主机'? '备机':'主机'">主备机切换</el-button>-->
                  <!--</fieldset>-->
                <!--</form>-->
              <!--</el-col>-->
            <!--</el-row>-->
          <!--</el-tab-pane>-->
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
    <!--设置-->
    <el-dialog
      title="参数设置"
      :visible.sync="dialogVisible.switch"
      width="80%"
      center>
      <kaxj_modal></kaxj_modal>
    </el-dialog>
  </div>
</template>

<script>
import kaxj_modal from './kaxj_modal'
export default {
  name: 'kaxj',
  data () {
    return {
      activeName: 'first',
      /* 状态 */
      Status: {
        // 模拟源上行调制状态
        KA_S_up_status: {},
        // 模拟源接收状态
        KA_S_recv_status: {},
        // 模拟源时频状态
        KA_S_time_status: {}
      },
      // 切换方式
      st: {
        status: '异常',
        control: '本控',
        change: '手动切换',
        master: '主机'
      }
    }
  },
  components: {
    kaxj_modal
  },
  computed: {
    device: function () {
      return this.$device.Ka_send_A
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
            for (let key in data) {
              self.Status[key] = data[key]
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
            if (Object.keys(data.data).length > 0) {
              self.$store.commit('components_data', data.data)
            }
          })
        }
      }
    }
  }
}
</script>
