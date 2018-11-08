<template>
  <div class="monito">
    <el-tabs type="card" v-model="activeName">
      <el-tab-pane :label="changTitle" name="first">
        <el-row :gutter="2">
          <el-col :span="24">
            <form>
              <fieldset>
                <legend>计算机状态</legend>
                <ul>
                  <li class="li-span-4">
                    <label>天线控制单元通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>接收切换开关通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>发射切换开关通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>C频段上变频器通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>C频段下变频器通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>C频段发射校零变频器通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>C频段接收校零变频器通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>站间中频分路组合通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>卫通发射基带通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>卫通接收基带通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>波束通信器通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>波控处理机通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>ka频段上变频器通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>ka频段下变频器通信 </label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>ka频段发射校零变频通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>ka频段接收校零变频通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>星地中频分路组合通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>ka发射基带通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>ka接收基带通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>站间中频分路组合通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>ka星间链路模拟源通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>业务处理计算机通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>数据处理计算机通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>GNSS侧向定位接收机通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>时标切换器通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>铷钟通信</label>
                    <span class="status-offline"></span>
                  </li>
                  <li class="li-span-4">
                    <label>GNSS基准接收机通信</label>
                    <span class="status-offline"></span>
                  </li>
                </ul>
              </fieldset>
            </form>
          </el-col>
        </el-row>
        <el-row :gutter="2">
          <el-col :span="24">
            <form>
              <fieldset>
                <legend></legend>
                <ul>
                  <li class="li-span-4">
                    <label>天线控制单元控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>接收切换开关控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>发射切换开关控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>C频段上变频器控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>C频段下变频器控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>C频段发射校零变频器控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>C频段接收校零变频器控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>站间中频分路组合控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>卫通发射基带控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>卫通接收基带控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>波束控制器控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>波控处理机控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>ka频段上变频器控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>ka频段下变频器控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>ka频段发射校零变频控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>ka频段接收校零变频控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>星地中频分路组合控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>ka发射基带控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>ka接收基带控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>站间中频分路组合控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>ka星间链路模拟源控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>业务处理计算机控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>数据处理计算机控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>时标切换器控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>铷钟控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>GNSS侧向定位接收机控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
                  <li class="li-span-4">
                    <label>GNSS基准接收机控制</label>
                    <input type="text" v-model="textStatus" disabled>
                  </li>
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
  name: 'monito',
  data () {
    return {
      activeName: 'first',
      textStatus: '错误',
      styleStatus: 'error'
    }
  },
  computed: {
    changTitle: function () {
      let data = this.$route.query
      return '监控计算机 (' + data.name + ')'
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
      Socket.onmessage = function (response) {
        $utils.readData(response.data, self.structGet, function (data) {
          for (let key in data) {
            self.Status[key] = data[key]
            console.log(self.Status[key])
          }
        })
      }
    } else {
      this.$router.push({path: '/'})
    }
  }
}
</script>
