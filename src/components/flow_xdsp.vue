<template>
  <div>
    <form>
      <fieldset>
        <legend>参数设置</legend>
        <!--星地射频分路组合-->
        <ul>
          <li class="li-span-1">
            <label>本分控状态</label>
            <el-radio-group v-model="Setting.EmitFrequency_parameter_setting.State">
              <el-radio label="本控">本控</el-radio>
              <el-radio label="分控">分控</el-radio>
            </el-radio-group>
          </li>
          <li class="li-span-1">
            <label>有/无线切换开关1</label>
            <el-radio-group v-model="Setting.EmitFrequency_parameter_setting.Switch1">
              <el-radio label="校零校验天线收">校零校验天线收</el-radio>
              <el-radio label="耦合器2入">耦合器2入</el-radio>
              <el-radio label="预留输入接口">预留输入接口</el-radio>
            </el-radio-group>
          </li>
          <li class="li-span-1">
            <label>主备切换开关1</label>
            <el-radio-group v-model="Setting.EmitFrequency_parameter_setting.preparation_Switch1">
              <el-radio label="Ka上行发A">Ka上行发A</el-radio>
              <el-radio label="Ka上行发B">Ka上行发B</el-radio>
            </el-radio-group>
          </li>
          <li class="li-span-1">
            <label>有/无线切换开关2</label>
            <el-radio-group v-model="Setting.EmitFrequency_parameter_setting.Switch2">
              <el-radio label="校零校验天线发">校零校验天线发</el-radio>
              <el-radio label="耦合器3发">耦合器3发</el-radio>
              <el-radio label="预留输出接口">预留输出接口</el-radio>
            </el-radio-group>
          </li>
          <li class="li-span-1">
            <label>主备切换开关2</label>
            <el-radio-group v-model="Setting.EmitFrequency_parameter_setting.preparation_Switch2">
              <el-radio label="Ka下行收A">Ka下行收A</el-radio>
              <el-radio label="ka下行收B">ka下行收B</el-radio>
            </el-radio-group>
          </li>
        </ul>
      </fieldset>
    </form>
    <div slot="footer" class="dialog-footer" style="text-align: center">
        <el-button type="primary" @click="validate">保 存</el-button>
    <el-button @click="modalClose">取 消</el-button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'flow_xdsp',
  data () {
    return {
      Setting: {
        // 星地射频分路
        EmitFrequency_parameter_setting: {
          State: '',
          Switch1: '',
          preparation_Switch1: '',
          Switch2: '',
          preparation_Switch2: '',
          RECV: ''
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
      console.log(this.Setting)
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

<style></style>
