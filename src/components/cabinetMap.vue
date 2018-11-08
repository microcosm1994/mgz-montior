<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="设备机柜图" name="first">
      <div class="cabinetMap-info">
        <div class="info-item">
          <i class="main"></i>
          <span>主机</span>
        </div>
        <div class="info-item">
          <i class="fully"></i>
          <span>备机</span>
        </div>
        <div class="info-item">
          <i class="null"></i>
          <span>空</span>
        </div>
      </div>
      <div class="cabinetMap">
        <el-row :gutter="0">
          <el-col :span="12">
            <div class="group">
              <div class="item item-l">
                <div class="item-device main">
                  <img src="../assets/img/2.png" alt="">
                  <p>星地射频分路组合</p>
                  <span class="status error"></span>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device main" @dblclick="jump('/xd/kaUp', {name: 'A'})">
                  <img src="../assets/img/2.png" alt="">
                  <p>ka频段上变频器A</p>
                  <span class="status success"></span>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device null">
                  <img src="../assets/img/3.png" alt="" style="width: 70%;margin-top: 8px;">
                  <p>频谱仪</p>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>BD3接收机</p>
                </div>
                <div class="item-device main" @dblclick="jump('/gd')">
                  <img src="../assets/img/3.png" alt="">
                  <p>GNSS测向定位接收机</p>
                  <span class="status success"></span>
                </div>
              </div>
            </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>信号监视面板</p>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>信号监视面板</p>
                </div>
              </div>
            </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device fully" @dblclick="jump('/xd/kaUp', {name: 'B'})">
                  <img src="../assets/img/2.png" alt="">
                  <p>ka频段上变频器B</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device main" @dblclick="jump('/xd/kaBottom', {name: 'A'})">
                  <img src="../assets/img/2.png" alt="">
                  <p>ka频段下变频器A</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device fully" @dblclick="jump('/xd/kaBottom', {name: 'B'})">
                  <img src="../assets/img/2.png" alt="">
                  <p>ka频段下变频器B</p>
                  <span class="status success"></span>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device null">
                  <img src="../assets/img/3.png" alt="" style="width: 70%;margin-top: 40px;">
                  <p>示波器</p>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device main" @dblclick="jump('/sp', {name: 'A'})">
                  <img src="../assets/img/2.png" alt="">
                  <p>铷原子频标1</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device fully" @dblclick="jump('/sp', {name: 'A'})">
                  <img src="../assets/img/2.png" alt="">
                  <p>铷原子频标2</p>
                  <span class="status success"></span>
                </div>
              </div>
            </div>
            <div class="group">
            <div class="item item-l">
              <div class="item-device main" @dblclick="jump('/xd/kaSend')">
                <img src="../assets/img/2.png" alt="">
                <p>ka发射校零变频器</p>
                <span class="status success"></span>
              </div>
              <div class="item-device null">
                <p>空面板</p>
              </div>
            </div>
            <div class="item item-c">
              <div class="item-device null">
                <img src="../assets/img/3.png" alt="" style="margin-top: 15px;">
                <p>信号源</p>
              </div>
            </div>
            <div class="item item-r">
              <div class="item-device fully" @dblclick="jump('/sp', {name: 'A'})">
                <img src="../assets/img/2.png" alt="">
                <p>铷原子频标3</p>
                <span class="status success"></span>
              </div>
            </div>
          </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device main" @dblclick="jump('/sd/kaRecve')">
                  <img src="../assets/img/2.png" alt="">
                  <p>ka接收校零变频器</p>
                  <span class="status success"></span>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
            </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device main">
                  <img src="../assets/img/2.png" alt="">
                  <p>星地中频分路组合</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>交换机A1(空面板)</p>
                </div>
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>交换机B1(空面板)</p>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device main" @dblclick="jump('/sp', {name: 'A'})">
                  <img src="../assets/img/2.png" alt="">
                  <p>频标切换器A</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
            </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device main" @dblclick="jump('/xd/kaBaseBandSend', {name: 'A'})">
                  <img src="../assets/img/weit.png" alt="">
                  <p>ka发射基带A</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device fully" @dblclick="jump('/xd/kaBaseBandSend', {name: 'B'})">
                  <img src="../assets/img/weit.png" alt="">
                  <p>ka发射基带B</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>ka扩频码设备</p>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>kvm折叠显示器</p>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device main" @dblclick="jump('/xd')">
                  <img src="../assets/img/2.png" alt="">
                  <p>ka波控信号处理机</p>
                  <span class="status success"></span>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device main" @dblclick="jump('/sp', {name: 'A'})">
                  <img src="../assets/img/2.png" alt="">
                  <p>频标切换器A</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>网络硬盘录像机</p>
                </div>
              </div>
            </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device main"  @dblclick="jump('/xd/kaBaseBandRecve', {name: 'A'})">
                  <img src="../assets/img/weit.png" alt="">
                  <p>ka接收基带A</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>空面板（转接板）</p>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
            </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device fully" @dblclick="jump('/xd/kaBaseBandRecve', {name: 'B'})">
                  <img src="../assets/img/weit.png" alt="">
                  <p>ka接收基带B</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device main" @dblclick="jump('/xd/kaxj')">
                  <img src="../assets/img/2.png" alt="">
                  <p>ka星间链路模拟源</p>
                  <span class="status success"></span>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device null">
                  <img src="../assets/img/battery.png" alt="">
                  <p>电池包</p>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device null">
                  <img src="../assets/img/battery.png" alt="">
                  <p>电池包</p>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="group">
              <div class="item item-l">
                <div class="item-device null">
                  <p>空面板(转接板)</p>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device null">
                  <img src="../assets/img/battery.png" alt="">
                  <p>电池包</p>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device null">
                  <img src="../assets/img/battery.png" alt="">
                  <p>电池包</p>
                </div>
              </div>
            </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>C/C转发变频器</p>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device main" @dblclick="jump('/zj/cpdSend')">
                  <img src="../assets/img/2.png" alt="">
                  <p>C发射校零变频器</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
            </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>站间加解密设备A</p>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device main" @dblclick="jump('/zj/cpdUp', {name: 'A'})">
                  <img src="../assets/img/2.png" alt="">
                  <p>C频段上变频器A</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device fully" @dblclick="jump('/zj/cpdUp', {name: 'B'})">
                  <img src="../assets/img/2.png" alt="">
                  <p>C频段上变频器B</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>信号监视面板</p>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device main" @dblclick="jump('/zj', {name: 'A'})">
                  <img src="../assets/img/2.png" alt="">
                  <p>天线控制单元A</p>
                  <span class="status success"></span>
                </div>
              </div>
            </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>站间加解密设备B</p>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device main" @dblclick="jump('/zj/cpdRecve')">
                  <img src="../assets/img/2.png" alt="">
                  <p>C接收校零变频器</p>
                  <span class="status success"></span>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
            </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>串口服务器</p>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device main" @dblclick="jump('/zj/cpdBottom', {name: 'A'})">
                  <img src="../assets/img/2.png" alt="">
                  <p>C频段下变频器A</p>
                  <span class="status success"></span>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device fully" @dblclick="jump('/zj', {name: 'B'})">
                  <img src="../assets/img/2.png" alt="">
                  <p>天线控制单元B</p>
                  <span class="status success"></span>
                </div>
              </div>
            </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device fully" @dblclick="jump('/zj/cpdBottom', {name: 'B'})">
                  <img src="../assets/img/2.png" alt="">
                  <p>C频段下变频器B</p>
                  <span class="status success"></span>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
            </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>交换机A2（空面板）</p>
                </div>
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>交换机B2（空面板）</p>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device main">
                  <img src="../assets/img/2.png" alt="">
                  <p>站间中频分路组合</p>
                  <span class="status success"></span>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
            </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>ka播控信号处理机（冷备）</p>
                </div>
                <div class="item-device null">
                  <p>空面板（转接板）</p>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device main" @dblclick="jump('/zj/sendWeitong', {name: 'A'})">
                  <img src="../assets/img/weit.png" alt="">
                  <p>卫通发射基带A</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device fully" @dblclick="jump('/zj/sendWeitong', {name: 'B'})">
                  <img src="../assets/img/weit.png" alt="">
                  <p>卫通发射基带B</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device main" @dblclick="jump('/zj/receiveWeitong', {name: 'A'})">
                  <img src="../assets/img/weit.png" alt="">
                  <p>卫通接收基带A</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device fully" @dblclick="jump('/zj/receiveWeitong', {name: 'B'})">
                  <img src="../assets/img/weit.png" alt="">
                  <p>卫通接收基带B</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <p>空面板（转接板）</p>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device main">
                  <img src="../assets/img/2.png" alt="">
                  <p>天线驱动单元</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <p>空面板</p>
                </div>
                <div class="item-device main">
                  <img src="../assets/img/2.png" alt="">
                  <p>天线驱动单元</p>
                  <span class="status success"></span>
                </div>
              </div>
            </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device main" @dblclick="jump('/zj/C200Switch')">
                  <img src="../assets/img/2.png" alt="">
                  <p>C频段功放组合</p>
                  <span class="status success"></span>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>UPS主机A</p>
                  <span class="status success"></span>
                </div>
                <div class="item-device null">
                  <img src="../assets/img/battery.png" alt="">
                  <p>电池包</p>
                </div>
                <div class="item-device null">
                  <img src="../assets/img/battery.png" alt="">
                  <p>电池包</p>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device null">
                  <img src="../assets/img/2.png" alt="">
                  <p>UPS主机B</p>
                </div>
                <div class="item-device null">
                  <img src="../assets/img/battery.png" alt="">
                  <p>电池包</p>
                </div>
                <div class="item-device null">
                  <img src="../assets/img/battery.png" alt="">
                  <p>电池包</p>
                </div>
              </div>
            </div>
            <div class="group">
              <div class="item item-l">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
              <div class="item item-c">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
              <div class="item item-r">
                <div class="item-device null">
                  <p>空面板</p>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'cabinetMap',
  data () {
    return {
      activeName: 'first'
    }
  },
  computed: {
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
  watch: {
    Socket: function (n, o) {
      if (n !== null) {
        this.get()
      }
    }
  },
  mounted () {},
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
              for (let key in data) {
                self.Status[key] = data[key]
              }
            })
          }
        }
      } else {
        self.$store.commit('Socket', null)
      }
    },
    jump (path, query) {
      this.$router.push({path: path, query: query})
    }
  }
}
</script>

<style scoped>
  @import "../assets/css/cabinetMap.css";
</style>
