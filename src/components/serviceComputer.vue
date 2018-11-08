<template>
  <div class="serviceComputer">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane :label="changTitle" name="first">
        <el-row :gutter="20">
          <el-col :span="12">
            <form>
              <fieldset>
                <legend>地面网连接状态</legend>
                <el-table
                  :data="tableData"
                  style="width: 100%">
                  <el-table-column
                    prop="index"
                    label="序号"
                    width="60">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="发送链路">
                  </el-table-column>
                  <el-table-column
                    prop="status"
                    label="网络状态">
                  </el-table-column>
                  <el-table-column
                    prop="sendPage"
                    label="发送包数">
                  </el-table-column>
                  <el-table-column
                    prop="receivePage"
                    label="接收包数">
                  </el-table-column>
                </el-table>
              </fieldset>
            </form>
          </el-col>
          <el-col :span="12">
            <form>
              <fieldset>
                <legend>接收机连接状态</legend>
                <el-table
                  :data="tableData"
                  style="width: 100%">
                  <el-table-column
                    prop="index"
                    label="序号"
                    width="60">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="接收机">
                  </el-table-column>
                  <el-table-column
                    prop="status"
                    label="网卡1状态">
                  </el-table-column>
                  <el-table-column
                    prop="sendPage"
                    label="网卡2状态">
                  </el-table-column>
                  <el-table-column
                    prop="receivePage"
                    label="网卡1数据">
                  </el-table-column>
                  <el-table-column
                    prop="receivePage"
                    label="网卡2数据">
                  </el-table-column>
                </el-table>
              </fieldset>
            </form>
          </el-col>
        </el-row>
        <form>
          <fieldset>
            <legend>观测信息发送状态</legend>
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="index"
                label="序号"
                width="60">
              </el-table-column>
              <el-table-column
                prop="name"
                label="信息类别">
              </el-table-column>
              <el-table-column
                prop="status"
                label="地面网1组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="地面网2组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="地面网3组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="地面网4组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="卫通组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
            </el-table>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <legend>状态参数信息发送状态</legend>
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="index"
                label="序号"
                width="60">
              </el-table-column>
              <el-table-column
                prop="name"
                label="信息类别">
              </el-table-column>
              <el-table-column
                prop="status"
                label="地面网1组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="地面网2组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="地面网3组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="地面网4组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="卫通组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
            </el-table>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <legend>回执信息发送状态</legend>
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="index"
                label="序号"
                width="60">
              </el-table-column>
              <el-table-column
                prop="name"
                label="信息类别">
              </el-table-column>
              <el-table-column
                prop="status"
                label="地面网1组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="地面网2组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="地面网3组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="地面网4组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="卫通组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
            </el-table>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <legend>规划辅助信息发送状态</legend>
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="index"
                label="序号"
                width="60">
              </el-table-column>
              <el-table-column
                prop="name"
                label="信息类别">
              </el-table-column>
              <el-table-column
                prop="status"
                label="地面网1组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="地面网2组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="地面网3组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="地面网4组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="卫通组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
            </el-table>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <legend>控制指令接收状态状态</legend>
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="index"
                label="序号"
                width="60">
              </el-table-column>
              <el-table-column
                prop="name"
                label="信息类别">
              </el-table-column>
              <el-table-column
                prop="status"
                label="地面网1组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="地面网2组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="地面网3组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="地面网4组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
              <el-table-column
                prop="receivePage"
                label="卫通组帧时刻">
              </el-table-column>
              <el-table-column
                prop="sendPage"
                label="组帧包数">
              </el-table-column>
            </el-table>
          </fieldset>
        </form>
        <el-row :gutter="20">
          <el-col :span="17">
            <form>
              <fieldset>
                <legend>日志记录</legend>
                <el-table
                  :data="tableData"
                  style="width: 100%;height: 360px">
                  <el-table-column
                    prop="index"
                    label="序号"
                    width="60">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="级别">
                  </el-table-column>
                  <el-table-column
                    prop="status"
                    label="时间">
                  </el-table-column>
                  <el-table-column
                    prop="sendPage"
                    label="来源">
                  </el-table-column>
                  <el-table-column
                    prop="receivePage"
                    label="工作">
                  </el-table-column>
                </el-table>
              </fieldset>
            </form>
          </el-col>
          <el-col :span="7">
            <form>
              <fieldset>
                <legend>控制设置</legend>
                <ul>
                  <li class="li-span-1">
                    <label>系统状态</label>
                    <input type="text" disabled v-model="local">
                    <el-button size="mini">定位结果</el-button>
                  </li>
                  <li class="li-span-1">
                    <label>控制状态</label>
                    <input type="text" disabled v-model="localControl">
                    <el-button size="mini">本远切换</el-button>
                  </li>
                  <li class="li-span-1">
                    <label>主备状态</label>
                    <input type="text" disabled v-model="local">
                    <el-button size="mini">主备切换</el-button>
                  </li>
                  <li class="li-span-1">
                    <label>切换方式</label>
                    <input type="text" disabled v-model="local">
                    <el-button size="mini">切换控制</el-button>
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
  name: 'serviceComputer',
  data () {
    return {
      loadingInstance: null, // loading遮罩实例
      timer: null,
      timer_overtime: null, // 返回登陆定时器
      activeName: 'first',
      local: '',
      localControl: '',
      main: '',
      tabControl: '',
      tableData: []
    }
  },
  computed: {
    changTitle: function () {
      let data = this.$route.query
      return '业务处理计算机 (' + data.name + ')'
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
      this.timer = setInterval(() => {
        $ws.sendKey(Socket, '/api/monitor/autoGet', this.structGet.keyArray)
      }, 1000)
      Socket.onmessage = function (response) {
        $utils.readData(response.data, self.structGet, function (data) {
          for (let key in data) {
            self.Status[key] = data[key]
            console.log(self.Status[key])
          }
          for (let key in self.Status) {
            self.Setting[key] = self.Status[key]
          }
        })
      }
    } else {
      this.$router.push({path: '/'})
    }
  },
  // 导航守卫，离开当前组调用
  beforeRouteLeave (to, from, next) {
    if (this.timer > 0 || this.timer_overtime > 0) {
      clearInterval(this.timer)
      clearTimeout(this.timer_overtime)
      next()
    } else {
      next()
    }
  }
}
</script>
