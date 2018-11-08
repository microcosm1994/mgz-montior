<template>
  <div class="GNSS">
    <el-tabs type="border-card">
      <el-tab-pane label="GNSS侧向定位接收机">
        <el-row :gutter="2">
          <el-col :span="18">
            <!--上行调制-->
            <form>
              <fieldset>
                <legend>接收机状态</legend>
                <ul>
                  <li class="li-span-2">
                    <label>接收机时间</label>
                    <input v-model="Status.GNSS.GPSWeek" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>星期内毫秒数</label>
                    <input v-model="Status.GNSS.GPSTime" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>偏航角</label>
                    <input v-model="Status.GNSS.Heading" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>俯仰角</label>
                    <input v-model="Status.GNSS.Pitch" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>横滚角</label>
                    <input v-model="Status.GNSS.Track" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>纬度</label>
                    <input v-model="Status.GNSS.Latitude" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>经度</label>
                    <input v-model="Status.GNSS.Longitude" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>高度</label>
                    <input v-model="Status.GNSS.Altitude" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>东向位置坐标</label>
                    <input v-model="Status.GNSS.PosE" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>北向位置坐标</label>
                    <input v-model="Status.GNSS.PosN" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>天向位置坐标</label>
                    <input v-model="Status.GNSS.PosU" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>东向速度</label>
                    <input v-model="Status.GNSS.Ve" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>北向速度</label>
                    <input v-model="Status.GNSS.Vn" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>天向速度</label>
                    <input v-model="Status.GNSS.Vu" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>东向速度差</label>
                    <input v-model="Status.GNSS.Ae" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>北向速度差</label>
                    <input v-model="Status.GNSS.An" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>天向速度差</label>
                    <input v-model="Status.GNSS.Au" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>基线长度</label>
                    <input v-model="Status.GNSS.Baseline" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>前天线可用星数</label>
                    <input v-model="Status.GNSS.NSV1" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>后天线可用星数</label>
                    <input v-model="Status.GNSS.NSV2" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>RTK 标志位</label>
                    <input v-model="Status.GNSS.RTKStatue" type="text" disabled>
                  </li>
                  <li class="li-span-2">
                    <label>校验</label>
                    <input v-model="Status.GNSS.CS" type="text" disabled>
                  </li>
                </ul>
              </fieldset>
            </form>
          </el-col>
          <el-col :span="6">
            <!--上行调制-->
            <form>
              <fieldset>
                <legend>接收机信息</legend>
                <div class="canvas">

                </div>
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
  name: 'GNSS',
  data () {
    return {
      /* 状态 */
      Status: {
        // GNSS状态
        GNSS: {}
      }
    }
  },
  computed: {
    device: function () {
      return this.$device.GNSS
    },
    structGet: function () {
      let keyArray = []
      let detailed = []
      let id = this.device.id
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
    }
  },
  // 导航守卫，当前路由改变时执行
  beforeRouteUpdate (to, from, next) {
    next()
    this.get()
  }
}
</script>

<style scoped>
  @import "../assets/css/GNSS.css";
</style>
