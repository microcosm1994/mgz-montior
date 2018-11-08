<template>
  <div class="StationInter">
    <form>
      <fieldset>
        <legend>参数设置</legend>
        <ul>
          <li class="li-span-4">
            <span>控制模式</span>
            <el-select size="mini" v-model="StationInter_parameter_setting.State" slot="prepend" placeholder="请选择">
              <el-option label="本控" value="本控"></el-option>
              <el-option label="远控" value="远控"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>OUT1_SEL</label>
            <input type="text" v-model="StationInter_parameter_setting.OUT1_SEL">
          </li>
          <li class="li-span-4">
            <label>OUT2_SEL</label>
            <input type="text" v-model="StationInter_parameter_setting.OUT2_SEL">
          </li>
          <li class="li-span-4">
            <label>OUT3_SEL</label>
            <input type="text" v-model="StationInter_parameter_setting.OUT3_SEL">
          </li>
          <li class="li-span-4">
            <label>OUT4_SEL</label>
            <input type="text" v-model="StationInter_parameter_setting.OUT4_SEL">
          </li>
          <li class="li-span-4">
            <label>OUT5_SEL</label>
            <input type="text" v-model="StationInter_parameter_setting.OUT5_SEL">
          </li>
          <li class="li-span-4">
            <label>OUT6_SEL</label>
            <input type="text" v-model="StationInter_parameter_setting.OUT6_SEL">
          </li>
          <li class="li-span-4">
            <label>OUT7_SEL</label>
            <input type="text" v-model="StationInter_parameter_setting.OUT7_SEL">
          </li>
          <li class="li-span-4">
            <label>OUT8_SEL</label>
            <input type="text" v-model="StationInter_parameter_setting.OUT8_SEL">
          </li>
          <li class="li-span-4">
            <label>OUT9_SEL</label>
            <input type="text" v-model="StationInter_parameter_setting.OUT9_SEL">
          </li>
          <li class="li-span-4">
            <label>OUT10_SEL</label>
            <input type="text" v-model="StationInter_parameter_setting.OUT10_SEL">
          </li>
          <li class="li-span-4">
            <label>OUT11_SEL</label>
            <input type="text" v-model="StationInter_parameter_setting.OUT11_SEL">
          </li>
          <li class="li-span-4">
            <label>OUT12_SEL</label>
            <input type="text" v-model="StationInter_parameter_setting.OUT12_SEL">
          </li>
        </ul>
      </fieldset>
    </form>
    <div slot="footer" class="dialog-footer" style="text-align: center">
      <el-button type="primary" @click="dialogVisible = false">保存 </el-button>
      <el-button @click="modalClose">取 消</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StationInter_modal',
  data () {
    return {
      StationInter_parameter_setting: {
        State: '',
        OUT1_SEL: '',
        OUT2_SEL: '',
        OUT3_SEL: '',
        OUT4_SEL: '',
        OUT5_SEL: '',
        OUT6_SEL: '',
        OUT7_SEL: '',
        OUT8_SEL: '',
        OUT9_SEL: '',
        OUT10_SEL: '',
        OUT11_SEL: '',
        OUT12_SEL: ''
      }
    }
  },
  computed: {
    device: function () {
      return this.$device.StationInter
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
      let url = ''
      // 把数据写成byte格式发给后端
      if (this.dialogVisible.type === 0) {
        url = '/api/parameter/changeParameter'
      }
      if (this.dialogVisible.type === 1) {
        url = '/api/parameter/changeParameter'
      }
      $utils.writeByte(this.structSet, this.Setting, (data) => {
        $ws.sendData(Socket, url, data)
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
