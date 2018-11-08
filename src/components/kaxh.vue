<template>
  <div class="kaxh">
    <el-tabs type="border-card">
      <el-tab-pane label= '解调、测量、小环数据'>
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
  </div>
</template>

<script>
export default {
  name: 'kaxh',
  data () {
    return {
      tableData: [],
      /* 状态 */
      Status: {
        // 模拟源测量数据
        KAC_demodulation_data: {},
        // 模拟源小环数据
        KAC_measure_data: {},
        // 模拟源内存显示数据
        KAC_smallring_data: {},
        // 模拟源内存显示数据
        KAC_memory_data: {}
      }
    }
  },
  computed: {
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
    Socket: function () {
      return this.$store.state.Socket
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
          if (typeof response.data !== 'string') {
            $utils.readBlob(response.data, self.structGet, function (data) {
              for (let key in data) {
                self.Status[key] = data[key]
              }
            })
          }
        }
      } else {
        self.$store.commit('Socket', null)
      }
    }
  }
}
</script>
