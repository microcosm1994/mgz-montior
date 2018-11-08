<template>
  <div class="kaUp">
    <el-tabs type="border-card">
      <div style="text-align: right;">
        <el-button type="primary" @click="edit">设置</el-button>
      </div>
      <el-tab-pane :label= changTitle>
        <form>
          <fieldset>
            <legend>{{changTitle}} 状态：</legend>
            <ul>
              <li class="li-span-2">
                <label>在线状态</label>
                <span :class="Status.SGUP_up_state_report.onLine"></span>
              </li>
              <li class="li-span-2">
                <label>本远控状态</label>
                <input type="text" v-model="Status.SGUP_up_state_report.State" disabled>
              </li>
              <li class="li-span-2">
                <label>自检状态</label>
                <input type="text" v-model="Status.SGUP_up_state_report.examination_state" disabled>
              </li>
              <li class="li-span-2">
                <label>衰减</label>
                <input type="text" v-model="Status.SGUP_up_state_report.attenuation" disabled>
              </li>
              <li class="li-span-2">
                <label>群时延本振测试</label>
                <input type="text" v-model="Status.SGUP_up_state_report.loTest" disabled>
              </li>
              <li class="li-span-2">
                <label>本振模块锁定指示</label>
                <input type="text" v-model="Status.SGUP_up_state_report.Local_locking" disabled>
              </li>
              <li class="li-span-2">
                <label>内外参考状态</label>
                <input type="text" v-model="Status.SGUP_up_state_report.reference" disabled>
              </li>
              <li class="li-span-2">
                <label>参考锁定状态</label>
                <input type="text" v-model="Status.SGUP_up_state_report.lock_state" disabled>
              </li>
              <li class="li-span-2">
                <label>温度</label>
                <input type="text" v-model="Status.SGUP_up_state_report.temperature" disabled>
              </li>
              <li class="li-span-2">
                <label>湿度</label>
                <input type="text" v-model="Status.SGUP_up_state_report.humidity" disabled>
              </li>
            </ul>
          </fieldset>
        </form>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title=""
      :visible.sync="dialogVisible.switch"
      width="50%"
      center>
      <kaUp_modal></kaUp_modal>
    </el-dialog>
  </div>
</template>

<script>
import kaUp_modal from './kaUp_modal'
export default {
  name: 'kaUp',
  data () {
    return {
      // 状态
      Status: {
        // ka上变频器1状态
        SGUP_up_state_report: {},
        // ka上变频器1参数设置
        SGUP_up_parameter_setting: {}
      }
    }
  },
  components: {
    kaUp_modal
  },
  computed: {
    changTitle: function () {
      let data = this.$route.query
      return 'ka频段上变频器 (' + data.name + ')'
    },
    device: function () {
      let data = this.$route.query
      if (data.name === 'A') {
        return this.$device.StarGround_UP_1
      }
      if (data.name === 'B') {
        return this.$device.StarGround_UP_2
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
          if (typeof response.data !== 'string') {
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
