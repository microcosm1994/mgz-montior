<template>
  <div class="kaBaseBand_Recve">
    <el-tabs type="border-card">
      <el-tab-pane :label= changTitle>
        <el-tabs>
          <el-tab-pane label="状态监视">
            <div style="text-align: right;padding-right: 30px;">
            <el-button type="primary" @click="edit">设置</el-button>
          </div>
            <el-row :gutter="2">
              <el-col :span="21">
                <el-col :span="15">
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
                          <label>测量伪码锁定状态</label>
                          <input v-model="Status.KA_S_recv_status.RecStaus_RecStatus_B0" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>测量载波锁定状态</label>
                          <input v-model="Status.KA_S_recv_status.RecStaus_RecStatus_B1" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>通信伪码锁定状态</label>
                          <input v-model="Status.KA_S_recv_status.RecStaus_RecStatus_B2" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>通信载波锁定状态</label>
                          <input v-model="Status.KA_S_recv_status.RecStaus_RecStatus_B3" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>通信位同步锁定状态</label>
                          <input v-model="Status.KA_S_recv_status.RecStaus_RecStatus_B4" type="text" disabled>
                        </li>
                        <li class="li-span-2">
                          <label>通信通信帧同步锁定状态</label>
                          <input v-model="Status.KA_S_recv_status.RecStaus_RecStatus_B5" type="text" disabled>
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
                          <input v-model="Status.KA_S_recv_status.AcquTimeS === '0.00' ? '无效' : Status.KA_S_recv_status.AcquTimeS" type="text" disabled>
                        </li>
                      </ul>
                    </fieldset>
                  </form>
                </el-col>
                <el-col :span="9">
                  <!--时频状态-->
                  <form>
                    <fieldset>
                      <legend>时频状态</legend>
                      <ul>
                        <li class="li-span-1">
                          <label>参数比对结果</label>
                          <span class="status-offline" v-bind:class="Status.KA_S_time_status.CmdErr"></span>
                        </li>
                        <li class="li-span-1">
                          <label>取码接口通信状态</label>
                          <span class="status-offline" v-bind:class="Status.KA_S_time_status.PRNSta"></span>
                        </li>
                        <li class="li-span-1">
                          <label>供电状态</label>
                          <span class="status-offline" v-bind:class="Status.KA_S_time_status.PowerSta"></span>
                        </li>
                        <li class="li-span-1">
                          <label>基带板状态</label>
                          <span class="status-offline" v-bind:class="Status.KA_S_time_status.PowerStaJD"></span>
                        </li>
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
                          <label>年</label>
                          <input v-model="Status.KA_S_time_status.Year" type="text" disabled>
                        </li>
                        <li class="li-span-1">
                          <label>周计数</label>
                          <input v-model="Status.KA_S_time_status.WeekCount" type="text" disabled>
                        </li>
                        <li class="li-span-1">
                          <label>周内毫秒计数</label>
                          <input v-model="Status.KA_S_time_status.SecondCount" type="text" disabled>
                        </li>
                        <li class="li-span-1">
                          <label>锁定指示</label>
                          <input v-model="Status.KA_S_time_status.VcoLock" type="text" disabled>
                        </li>
                        <li class="li-span-1">
                          <label>收发状态</label>
                          <input v-model="Status.KA_S_time_status.ModorRec" type="text" disabled>
                        </li>
                        <li class="li-span-1">
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
          <el-tab-pane label="数据监视">
            <el-row :gutter="0">
              <el-col :span="10">
                <!--时隙表数据-->
                <form>
                  <fieldset>
                    <legend>时隙表数据：</legend>
                    <ul>
                      <div class="li-span-1">
                        <textarea  rows="3" cols="" type="text" v-model="Status.KAC_demodulation_data.B000" disabled></textarea>
                      </div>
                    </ul>
                  </fieldset>
                </form>
                <!--调制数据-->
                <form>
                  <fieldset>
                    <legend>调制数据：</legend>
                    <ul>
                      <div class="li-span-1">
                        <textarea rows="3" cols="" type="text" v-model="Status.KAC_demodulation_data.B000" disabled></textarea>
                      </div>
                    </ul>
                  </fieldset>
                </form>
                <!--解调数据-->
                <form>
                  <fieldset>
                    <legend>解调数据：</legend>
                    <ul>
                      <div class="li-span-1">
                        <label>时码</label>
                        <input type="text" v-model="Status.KAC_demodulation_data.B000" disabled>
                      </div>
                    </ul>
                  </fieldset>
                </form>
                <!--测量数据-->
                <form>
                  <fieldset>
                    <legend>测量数据：</legend>
                    <ul>
                      <li class="li-span-2">
                        <label>时码</label>
                        <input type="text" v-model="Status.KAC_measure_data.B000" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>伪距</label>
                        <input type="text" v-model="Status.KAC_measure_data.PRG" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>发射延时</label>
                        <input type="text" v-model="Status.KAC_measure_data.Detrs" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>接收延时</label>
                        <input type="text" v-model="Status.KAC_measure_data.Dercv" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>收发状态</label>
                        <input type="text" v-model="Status.KAC_measure_data.ModorRec" disabled>
                      </li>
                    </ul>
                  </fieldset>
                </form>
              </el-col>
              <el-col :span="14">
                <form>
                  <fieldset>
                    <legend>小环数据：</legend>
                    <ul>
                      <li class="li-span-2">
                        <label>小环比对结果</label>
                        <input type="text" v-model="Status.KAC_smallring_data.CmdFrmloop" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>发送周计数</label>
                        <input type="text" v-model="Status.KAC_smallring_data.Wnup" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>发送周内毫秒</label>
                        <input type="text" v-model="Status.KAC_smallring_data.Sowup" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>生成周计数</label>
                        <input type="text" v-model="Status.KAC_smallring_data.Wngn" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>生成周内毫秒</label>
                        <input type="text" v-model="Status.KAC_smallring_data.Sowgn" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>比对错帧数</label>
                        <input type="text" v-model="Status.KAC_smallring_data.CmdFrmerrnum" disabled>
                      </li>
                      <li class="li-span-2">
                        <label>错帧序号</label>
                        <input type="text" v-model="Status.KAC_smallring_data.CmdFrmerrID" disabled>
                      </li>
                    </ul>
                    <el-table
                      :data="tableData"
                      style="width: 100%;height: 180px">
                      <el-table-column
                        prop="date"
                        label="错帧序号"
                        width="80">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="帧数">
                      </el-table-column>
                    </el-table>
                  </fieldset>
                </form>
                <!--内存显示数据-->
                <form>
                  <fieldset>
                    <legend>内存显示数据：</legend>
                    <ul>
                      <div class="li-span-1">
                        <textarea rows="3" cols="" type="text" v-model="Status.KAC_demodulation_data.B000" disabled></textarea>
                      </div>
                    </ul>
                  </fieldset>
                </form>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
    <!--设置-->
    <el-dialog
      title="参数设置"
      :visible.sync="dialogVisible.switch"
      width="80%"
      center>
      <kaBaseBand_Recve_modal></kaBaseBand_Recve_modal>
    </el-dialog>
  </div>
</template>

<script>
import kaBaseBand_Recve_modal from './kaBaseBand_Recve_modal'
export default {
  name: 'kaBaseBand_Recve',
  data () {
    return {
      tableData: [],
      /* 状态 */
      Status: {
        // Ka接收基带A调制状态元素
        KA_S_up_status: {},
        // Ka接收基带A接收状态元素
        KA_S_recv_status: {},
        // Ka接收基带A跟踪接收机时频状态
        KA_S_time_status: {},
        // 模拟源测量数据
        KAC_demodulation_data: {},
        // 模拟源小环数据
        KAC_measure_data: {},
        // 模拟源内存显示数据
        KAC_smallring_data: {},
        // 模拟源内存显示数据
        KAC_memory_data: {}
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
    kaBaseBand_Recve_modal
  },
  computed: {
    changTitle: function () {
      let data = this.$route.query
      return 'ka接收基带(' + data.name + ')'
    },
    device: function () {
      let data = this.$route.query
      if (data.name === 'A') {
        return this.$device.Ka_recv_A
      }
      if (data.name === 'B') {
        return this.$device.Ka_recv_B
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
