<template>
  <el-tabs type="border-card">
    <el-tab-pane label="原始报文查询">
      <el-row :gutter="0">
        <el-col :span="12">
          <!--时间段-->
          <form>
            <fieldset>
              <legend>时间段</legend>
              <el-date-picker
                v-model="pickerValue"
                type="datetimerange"
                size="mini"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :unlink-panels="true"
                align="right">
              </el-date-picker>
            </fieldset>
          </form>
        </el-col>
        <el-col :span="12">
          <!--数据来源-->
          <form>
            <fieldset>
              <legend>数据来源</legend>
              <el-radio-group v-model="dataForm">
                <el-radio :label= 1>数据库</el-radio>
                <el-radio :label= 2>文件</el-radio>
              </el-radio-group>
            </fieldset>
          </form>
        </el-col>
      </el-row>
      <!--设备原始数据-->
      <form>
        <fieldset>
          <legend>设备原始数据</legend>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="ServerA=伺服设备(A)">伺服设备(A)</el-checkbox>
            <el-checkbox label="ServerB=伺服设备(B)">伺服设备(B)</el-checkbox>
            <el-checkbox label="Station_UP_1=C频段上变频器(A)">C频段上变频器(A)</el-checkbox>
            <el-checkbox label="Station_UP_2=C频段上变频器(B)">C频段上变频器(B)</el-checkbox>
            <el-checkbox label="Station_DOWN_1=C频段下变频器(A)">C频段下变频器(A)</el-checkbox>
            <el-checkbox label="Station_DOWN_2=C频段下变频器(B)">C频段下变频器(B)</el-checkbox>
            <el-checkbox label="StationSendZero=C频段发射校零变频器">C频段发射校零变频器</el-checkbox>
            <el-checkbox label="StationRecvZero=C频段接收校零变频器">C频段接收校零变频器</el-checkbox>
            <el-checkbox label="C200_switch=C波段200W攻放开关">C波段200W攻放开关</el-checkbox>
            <el-checkbox label="C200_common=C波段200W攻放网络">C波段200W攻放网络</el-checkbox>
            <el-checkbox label="WT_send_A=卫通发射基带(A)">卫通发射基带(A)</el-checkbox>
            <el-checkbox label="WT_send_B=卫通发射基带(B)">卫通发射基带(B)</el-checkbox>
            <el-checkbox label="WT_recv_A=卫通接收基带(A)">卫通接收基带(A)</el-checkbox>
            <el-checkbox label="WT_recv_B=卫通接收基带(B)">卫通接收基带(B)</el-checkbox>
            <el-checkbox label="WAVE=波控处理机">波控处理机</el-checkbox>
            <el-checkbox label="StarGround_UP_1=ka频段上变频器(A)">ka频段上变频器(A)</el-checkbox>
            <el-checkbox label="StarGround_UP_2=ka频段上变频器(B)">ka频段上变频器(B)</el-checkbox>
            <el-checkbox label="StarGround_DOWN_1=ka频段下变频器(A)">ka频段下变频器(A)</el-checkbox>
            <el-checkbox label="StarGround_DOWN_2=ka频段下变频器(B)">ka频段下变频器(B)</el-checkbox>
            <el-checkbox label="SendZero=ka频段发射校零变频器">ka频段发射校零变频器</el-checkbox>
            <el-checkbox label="RecvZero=ka频段接收校零变频器">ka频段接收校零变频器</el-checkbox>
            <el-checkbox label="Ka_send_A=ka发射基带(A)">ka发射基带(A)</el-checkbox>
            <el-checkbox label="Ka_send_B=ka发射基带(B)">ka发射基带(B)</el-checkbox>
            <el-checkbox label="Ka_recv_A=ka接收基带(A)">ka接收基带(A)</el-checkbox>
            <el-checkbox label="Ka_recv_B=ka接收基带(B)">ka接收基带(B)</el-checkbox>
            <el-checkbox label="1">星间链路模拟源</el-checkbox>
            <el-checkbox label="1">业务处理计算机(A)</el-checkbox>
            <el-checkbox label="1">业务处理计算机(B)</el-checkbox>
            <el-checkbox label="1">数据处理计算机(A)</el-checkbox>
            <el-checkbox label="1">数据处理计算机(B)</el-checkbox>
            <el-checkbox label="Timer=时标切换器(A)">时标切换器(A)</el-checkbox>
            <el-checkbox label="Timer=时标切换器(B)">时标切换器(B)</el-checkbox>
            <el-checkbox label="1">GNSS侧向定位接收机</el-checkbox>
          </el-checkbox-group>
        </fieldset>
      </form>
      <div style="text-align: center;">
        <el-button type="primary" size="mini" style="width: 120px;" @click="search">查 询</el-button>
      </div>
    </el-tab-pane>
    <el-dialog
      title="文件列表"
      :visible.sync="dialogVisible"
      center="center"
      :before-close="modalClose"
      width="40%">
      <div class="listBox">
        <div class="list-item" v-for="item in fileList" :key="item.device">
          <div class="list-item-title">{{item.deviceName}}</div>
          <div class="list-item-Progress">
            <el-progress type="line" :percentage="percentage"></el-progress>
          </div>
          <div class="list-item-btn">
            <el-button type="text" size="mini" icon="el-icon-download" @click="download(item)">下载</el-button>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modalClose" size="mini">关 闭</el-button>
      </span>
    </el-dialog>
  </el-tabs>
</template>

<script>
export default {
  name: 'messageSearch',
  data () {
    return {
      pickerOptions: {
        disabledDate: (time) => {
          let date = new Date()
          return time.getTime() > date.getTime()
        },
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      dialogVisible: false,
      pickerValue: '', // 时间选择器
      dataForm: '', // 数据来源
      checkList: [], // 多选框设备列表
      fileList: [], // 文件列表
      percentage: 0 // 进度
    }
  },
  computed: {
    Socket: function () {
      return this.$store.state.Socket
    }
  },
  watch: {
    Socket: function (n, o) {
      if (n !== null) {}
    }
  },
  mounted () {},
  methods: {
    // 选择日期、数据来源、设备
    search () {
      if (!this.pickerValue) {
        this.$message({
          type: 'error',
          message: '请选择时间段'
        })
        return false
      }
      if (!this.dataForm) {
        this.$message({
          type: 'error',
          message: '请选择数据来源'
        })
        return false
      }
      if (this.checkList.length > 0) {
        for (let i = 0; i < this.checkList.length; i++) {
          let label = this.checkList[i]
          let obj = {}
          obj.device = label.slice(0, label.indexOf('='))
          obj.beginTime = this.pickerValue[0]
          obj.endTime = this.pickerValue[1]
          obj.datatype = this.dataForm
          obj.deviceName = label.slice(label.indexOf('=') + 1, label.length)
          this.fileList.push(obj)
        }
      } else {
        this.$message({
          type: 'error',
          message: '请选择设备'
        })
        return false
      }
      this.dialogVisible = true
    },
    // 下载文件
    download (row) {
      console.log(row)
      const Socket = this.Socket
      const self = this
      let $utils = this.$utils
      let $ws = this.$ws
      let url = '/api/analysis/message'
      // 开始时间
      let beginTime = {
        Y: row.beginTime.getFullYear() < 10 ? '0' + row.beginTime.getFullYear() : row.beginTime.getFullYear(),
        M: row.beginTime.getMonth() < 10 ? '0' + row.beginTime.getMonth() : row.beginTime.getMonth(),
        D: row.beginTime.getDay() < 10 ? '0' + row.beginTime.getDay() : row.beginTime.getDay(),
        h: row.beginTime.getHours() < 10 ? '0' + row.beginTime.getHours() : row.beginTime.getHours(),
        m: row.beginTime.getMinutes() < 10 ? '0' + row.beginTime.getMinutes() : row.beginTime.getMinutes(),
        s: row.beginTime.getSeconds() < 10 ? '0' + row.beginTime.getSeconds() : row.beginTime.getSeconds()
      }
      // 结束时间
      let endTime = {
        Y: row.endTime.getFullYear() < 10 ? '0' + row.endTime.getFullYear() : row.endTime.getFullYear(),
        M: row.endTime.getMonth() < 10 ? '0' + row.endTime.getMonth() : row.endTime.getMonth(),
        D: row.endTime.getDay() < 10 ? '0' + row.endTime.getDay() : row.endTime.getDay(),
        h: row.endTime.getHours() < 10 ? '0' + row.endTime.getHours() : row.endTime.getHours(),
        m: row.endTime.getMinutes() < 10 ? '0' + row.endTime.getMinutes() : row.endTime.getMinutes(),
        s: row.endTime.getSeconds() < 10 ? '0' + row.endTime.getSeconds() : row.endTime.getSeconds()
      }
      if (Socket) {
        $ws.sendMacro(Socket, url, {
          deviceName: row.device,
          analysisType: 'dataBase',
          beginTime: beginTime.Y + '-' + beginTime.M + '-' + beginTime.D + ' ' + beginTime.h + ':' + beginTime.m + ':' + beginTime.s,
          endTime: endTime.Y + '-' + endTime.M + '-' + endTime.D + ' ' + endTime.h + ':' + endTime.m + ':' + endTime.s
        })
        // 接收数据
        Socket.onmessage = function (response) {
          console.log(response)
          $utils.readData(response.data, self.structGet, function (data) {
            if (data.status === 200) {
              let downloadUrl = '/' + data.data.d
              window.open('http://' + self.$Socket_IP + downloadUrl, '_blank')
            }
          })
        }
      } else {
        self.$store.commit('Socket', null)
      }
    },
    modalClose () {
      this.dialogVisible = false
      this.fileList = []
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
  @import "../assets/css/messageSearch.css";
</style>
