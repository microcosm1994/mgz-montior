<template>
  <div>
    <form>
      <fieldset>
        <legend>设置参数</legend>
        <form>
          <fieldset>
            <legend>任务时间</legend>
            <ul>
              <li class="li-span-2">
                <label>天</label>
                <input type="text" v-model="time.d">
              </li>
              <li class="li-span-2">
                <label>时</label>
                <input type="text" v-model="time.h">
              </li>
              <li class="li-span-2">
                <label>分</label>
                <input type="text" v-model="time.m">
              </li>
              <li class="li-span-2">
                <label>秒</label>
                <input type="text" v-model="time.s">
              </li>
              <li class="li-span-2">
                <label>毫秒</label>
                <input type="text" v-model="time.ms">
              </li>
            </ul>
          </fieldset>
        </form>
        <ul>
          <li class="li-span-2">
            <label>方位指令角</label>
            <input type="text" v-model="Setting.Server_parameter_setting.Azimuth">
          </li>
          <li class="li-span-2">
            <label>俯仰指令角</label>
            <input type="text" v-model="Setting.Server_parameter_setting.Pitch">
          </li>
          <li class="li-span-2">
            <label>目标卫星编号</label>
            <input type="text" v-model="Setting.Server_parameter_setting.Target_number">
          </li>
          <li class="li-span-2">
            <label>控制方式</label>
            <el-select size="mini" v-model="Setting.Server_parameter_setting.control_mode" placeholder="请选择">
              <el-option
                label="未指定"
                value="未指定">
              </el-option>
              <el-option
                label="分控"
                value="分控">
              </el-option>
              <el-option
                label="本控"
                value="本控">
              </el-option>
            </el-select>
          </li>
          <li class="li-span-2">
            <label>主备机状态</label>
            <el-select size="mini" v-model="Setting.Server_parameter_setting.state" placeholder="请选择">
              <el-option
                label="未指定"
                value="未指定">
              </el-option>
              <el-option
                label="主机"
                value="主机">
              </el-option>
              <el-option
                label="备机"
                value="备机">
              </el-option>
            </el-select>
          </li>
          <li class="li-span-2">
            <label>工作方式</label>
            <el-select size="mini" v-model="Setting.Server_parameter_setting.Operation_mode" placeholder="请选择">
              <el-option
                label="定点"
                value="定点">
              </el-option>
              <el-option
                label="程序跟踪"
                value="程序跟踪">
              </el-option>
              <el-option
                label="数引"
                value="数引">
              </el-option>
              <el-option
                label="天线定位"
                value="天线定位">
              </el-option>
              <el-option
                label="待机"
                value="待机">
              </el-option>
              <el-option
                label="极大值跟踪"
                value="极大值跟踪">
              </el-option>
            </el-select>
          </li>
        </ul>
      </fieldset>
    </form>
    <div slot="footer" class="dialog-footer" style="text-align: center">
      <el-button @click="modalClose">取 消</el-button>
      <el-button type="primary" @click="validate">保 存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lineControl_modal',
  data () {
    return {
      time: {
        d: '',
        h: '',
        m: '',
        s: '',
        ms: ''
      },
      Setting: {
        Server_parameter_setting: {
          Start_Time: '',
          control_mode: '',
          state: '',
          Operation_mode: '',
          Azimuth: '',
          Pitch: '',
          Target_number: '',
          RECV: ''
        }
      },
      ruleForm: {
        Target_number: {
          min: 0,
          max: 256
        },
        Azimuth: {
          min: 0,
          max: 360
        },
        Pitch: {
          min: 0,
          max: 360
        }
      }
    }
  },
  computed: {
    device: function () {
      return this.$store.state.device
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
    },
    components_data: function () {
      return this.$store.state.components_data
    }
  },
  watch: {
    components_data: function (newQuestion, oldQuestion) {
      this.getSetting()
    }
  },
  mounted () {
    this.getSetting()
  },
  methods: {
    getSetting () {
      if (this.components_data) {
        for (let key in this.Setting) {
          if (this.components_data[key]) {
            this.Setting[key] = this.components_data[key]
            if (this.components_data[key].Start_Time) {
              let time = this.components_data[key].Start_Time
              this.time.d = time.slice(0, time.indexOf('d'))
              this.time.h = time.slice(time.indexOf('d') + 1, time.indexOf('h'))
              this.time.m = time.slice(time.indexOf('h') + 1, time.indexOf('m'))
              this.time.s = time.slice(time.indexOf('m') + 1, time.indexOf('s'))
              this.time.ms = time.slice(time.indexOf('s') + 1, time.indexOf('ms'))
            }
          }
        }
      }
    },
    // 保存设置
    save () {
      const Socket = this.Socket
      let $utils = this.$utils
      let $ws = this.$ws
      let self = this
      // 把数据写成byte格式发给后端
      $utils.writeByte(this.structSet, this.Setting, (data) => {
        if (this.dialogVisible.type === 0) {
          // let url = '/api/parameter/changeParameter'
          let url2 = '/api/parameter/changeParameter2'
          // $ws.sendData(Socket, url, data.result1)
          $ws.sendData(Socket, url2, data)
          self.$message({
            type: 'success',
            message: '参数已下发'
          })
        }
        if (this.dialogVisible.type === 1) {
          // let url = '/api/parameter/changeParameter'
          // $ws.sendData(Socket, url, data.result1)
          self.$message({
            type: 'success',
            message: '参数已保存'
          })
        }
        self.$store.commit('modal', {switch: false})
      })
    },
    // 表单验证
    validate () {
      let temp = false // flag
      this.Setting.Server_parameter_setting.Start_Time = this.time.d + 'd' + this.time.h + 'h' + this.time.m + 'm' + this.time.s + 's' + this.time.ms + 'ms'
      for (let key in this.Setting) {
        let struct = this.Setting[key] // 结构体
        for (let key1 in struct) {
          let value = struct[key1] // 字段值
          value += ''
          // 判断值是否为空
          if (!value) {
            this.$message({
              type: 'error',
              message: '参数设置项不能为空'
            })
            return false
          } else {
            temp = true
            if (this.ruleForm && Object.keys(this.ruleForm).length > 0) {
              // 遍历全部效验规则
              for (let item in this.ruleForm) {
                // 判断字段名是否相等
                if (item === key1) {
                  let obj = this.ruleForm[key1] // 字段的效验规则
                  value = value - 0 // 转number
                  // 判断值是否符合规则
                  if (value > (obj.min - 1) && value < (obj.max + 1)) {
                    temp = true // flag
                  } else {
                    this.$message({
                      type: 'error',
                      message: key1 + '参数超出限制'
                    })
                    temp = false // flag
                    return false
                  }
                }
              }
            }
          }
        }
      }
      // 如果flag为true，则证明所有参数符合校验规则
      if (temp) {
        this.save() // 保存参数
      }
    },
    modalClose () {
      this.$store.commit('modal', {switch: false})
    }
  }
}
</script>
