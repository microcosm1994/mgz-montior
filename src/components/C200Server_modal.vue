<template>
 <div>
   <form>
     <fieldset>
       <legend>参数设置</legend>
       <li class="li-span-1">
         <label>设置输出功率[38dBm~53dBm]</label>
         <input type="text" v-model="Setting.C_common_command_frame.set_power">
       </li>
       <li class="li-span-1">
         <label>功放使能</label>
         <el-select v-model="Setting.C_common_command_frame.amplifier" slot="prepend" size="mini">
           <el-option label="加电" value="加电"></el-option>
           <el-option label="去电" value="去电"></el-option>
         </el-select>
       </li>
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
  name: 'C200Server_modal',
  data () {
    return {
      /* 设置 */
      Setting: {
        C_common_command_frame: {
          set_power: '',
          amplifier: ''
        }
      },
      ruleForm: {
        set_power: {
          min: 38,
          max: 53
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
