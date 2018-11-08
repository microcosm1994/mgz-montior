<template>
  <div>
    <form>
      <fieldset>
        <legend>参数设置</legend>
        <!--星地中频分路-->
        <ul>
          <li class="li-span-1">
            <label>本分控状态</label>
            <el-select size="mini" v-model="Setting.CenterFrequency_parameter_setting.State" placeholder="请选择">
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
          <li class="li-span-1">
            <label>OUT1_SEL</label>
            <el-select size="mini" v-model="Setting.CenterFrequency_parameter_setting.OUT1_SEL" placeholder="请选择">
              <el-option
                label="输入1(ka发射基带A)"
                value="输入1(ka发射基带A)">
              </el-option>
              <el-option
                label="输入2(ka发射基带B)"
                value="输入2(ka发射基带B)">
              </el-option>
            </el-select>
          </li>
          <li class="li-span-1">
            <label>OUT2_SEL</label>
            <el-select size="mini" v-model="Setting.CenterFrequency_parameter_setting.OUT2_SEL">
              <el-option
                label="输入2(ka发射基带B)"
                value="输入2(ka发射基带B)">
              </el-option>
              <el-option
                label="输入1(ka发射基带A)"
                value="输入1(ka发射基带A)">
              </el-option>
            </el-select>
          </li>
          <li class="li-span-1">
            <label>OUT3_SEL</label>
            <el-select size="mini" v-model="Setting.CenterFrequency_parameter_setting.OUT3_SEL">
              <el-option
                label="输入3(ka发射校零中频出)"
                value="输入3(ka发射校零中频出)">
              </el-option>
            </el-select>
          </li>
          <li class="li-span-1">
            <label>OUT4_SEL</label>
            <el-select size="mini" v-model="Setting.CenterFrequency_parameter_setting.OUT4_SEL">
              <el-option
                label="输入3(ka发射校零中频出)"
                value="输入3(ka发射校零中频出)">
              </el-option>
            </el-select>
          </li>
          <li class="li-span-1">
            <label>OUT5_SEL</label>
            <el-select size="mini" v-model="Setting.CenterFrequency_parameter_setting.OUT5_SEL">
              <el-option
                label="输入1(ka发射基带A)"
                value="输入1(ka发射基带A)">
              </el-option>
              <el-option
                label="输入2(ka发射基带B)"
                value="输入2(ka发射基带B)">
              </el-option>
              <el-option
                label="输入3(ka发射校零中频出)"
                value="输入3(ka发射校零中频出)">
              </el-option>
              <el-option
                label="输入4(暂预留无定义)"
                value="输入4(暂预留无定义)">
              </el-option>
              <el-option
                label="输入5(站间中频监测1)"
                value="输入5(站间中频监测1)">
              </el-option>
              <el-option
                label="输入6(站间中频监测2)"
                value="输入6(站间中频监测2)">
              </el-option>
              <el-option
                label="输入7(ka下变频器A)"
                value="输入7(ka下变频器A)">
              </el-option>
              <el-option
                label="输入8(ka下变频器B)"
                value="输入8(ka下变频器B)">
              </el-option>
              <el-option
                label="输入9(ka接收基带A)"
                value="输入9(ka接收基带A)">
              </el-option>
              <el-option
                label="输入10(ka接收基带B)"
                value="输入10(ka接收基带B)">
              </el-option>
              <el-option
                label="输入11(暂预留无定义)"
                value="输入11(暂预留无定义)">
              </el-option>
              <el-option
                label="输入12(暂预留无定义)"
                value="输入12(暂预留无定义)">
              </el-option>
            </el-select>
          </li>
          <li class="li-span-1">
            <label>OUT6_SEL</label>
            <el-select size="mini" v-model="Setting.CenterFrequency_parameter_setting.OUT6_SEL">
              <el-option
                label="输入1(ka发射基带A)"
                value="输入1(ka发射基带A)">
              </el-option>
              <el-option
                label="输入2(ka发射基带B)"
                value="输入2(ka发射基带B)">
              </el-option>
              <el-option
                label="输入3(ka发射校零中频出)"
                value="输入3(ka发射校零中频出)">
              </el-option>
              <el-option
                label="输入4(暂预留无定义)"
                value="输入4(暂预留无定义)">
              </el-option>
              <el-option
                label="输入5(站间中频监测1)"
                value="输入5(站间中频监测1)">
              </el-option>
              <el-option
                label="输入6(站间中频监测2)"
                value="输入6(站间中频监测2)">
              </el-option>
              <el-option
                label="输入7(ka下变频器A)"
                value="输入7(ka下变频器A)">
              </el-option>
              <el-option
                label="输入8(ka下变频器B)"
                value="输入8(ka下变频器B)">
              </el-option>
              <el-option
                label="输入9(ka接收基带A)"
                value="输入9(ka接收基带A)">
              </el-option>
              <el-option
                label="输入10(ka接收基带B)"
                value="输入10(ka接收基带B)">
              </el-option>
              <el-option
                label="输入11(暂预留无定义)"
                value="输入11(暂预留无定义)">
              </el-option>
              <el-option
                label="输入12(暂预留无定义)"
                value="输入12(暂预留无定义)">
              </el-option>
            </el-select>
          </li>
          <li class="li-span-1">
            <label>OUT7_SEL</label>
            <el-select size="mini" v-model="Setting.CenterFrequency_parameter_setting.OUT7_SEL">
              <el-option
                label="输入7(ka下变频器A)"
                value="输入7(ka下变频器A)">
              </el-option>
              <el-option
                label="输入8(ka下变频器B)"
                value="输入8(ka下变频器B)">
              </el-option>
            </el-select>
          </li>
          <li class="li-span-1">
            <label>OUT8_SEL</label>
            <el-select size="mini" v-model="Setting.CenterFrequency_parameter_setting.OUT8_SEL">
              <el-option
                label="输入8(ka下变频器B)"
                value="输入8(ka下变频器B)">
              </el-option>
              <el-option
                label="输入7(ka下变频器A)"
                value="输入7(ka下变频器A)">
              </el-option>
            </el-select>
          </li>
          <li class="li-span-1">
            <label>OUT9_SEL</label>
            <el-select size="mini" v-model="Setting.CenterFrequency_parameter_setting.OUT9_SEL">
              <el-option
                label="输入9(ka接收基带A)"
                value="输入9(ka接收基带A)">
              </el-option>
              <el-option
                label="输入10(ka接受基带B)"
                value="输入10(ka接受基带B)">
              </el-option>
            </el-select>
          </li>
          <li class="li-span-1">
            <label>OUT10_SEL</label>
            <el-select size="mini" v-model="Setting.CenterFrequency_parameter_setting.OUT10_SEL">
              <el-option
                label="输入1(ka发射基带A)"
                value="输入1(ka发射基带A)">
              </el-option>
              <el-option
                label="输入2(ka发射基带B)"
                value="输入2(ka发射基带B)">
              </el-option>
              <el-option
                label="输入3(ka发射校零中频出)"
                value="输入3(ka发射校零中频出)">
              </el-option>
              <el-option
                label="输入4(暂预留无定义)"
                value="输入4(暂预留无定义)">
              </el-option>
              <el-option
                label="输入5(站间中频监测1)"
                value="输入5(站间中频监测1)">
              </el-option>
              <el-option
                label="输入6(站间中频监测2)"
                value="输入6(站间中频监测2)">
              </el-option>
              <el-option
                label="输入7(ka下变频器A)"
                value="输入7(ka下变频器A)">
              </el-option>
              <el-option
                label="输入8(ka下变频器B)"
                value="输入8(ka下变频器B)">
              </el-option>
              <el-option
                label="输入9(ka接收基带A)"
                value="输入9(ka接收基带A)">
              </el-option>
              <el-option
                label="输入10(ka接收基带B)"
                value="输入10(ka接收基带B)">
              </el-option>
              <el-option
                label="输入11(暂预留无定义)"
                value="输入11(暂预留无定义)">
              </el-option>
              <el-option
                label="输入12(暂预留无定义)"
                value="输入12(暂预留无定义)">
              </el-option>
            </el-select>
          </li>
          <li class="li-span-1">
            <label>OUT11_SEL</label>
            <el-select size="mini" v-model="Setting.CenterFrequency_parameter_setting.OUT11_SEL">
              <el-option
                label="输入1(ka发射基带A)"
                value="输入1(ka发射基带A)">
              </el-option>
              <el-option
                label="输入2(ka发射基带B)"
                value="输入2(ka发射基带B)">
              </el-option>
              <el-option
                label="输入3(ka发射校零中频出)"
                value="输入3(ka发射校零中频出)">
              </el-option>
              <el-option
                label="输入4(暂预留无定义)"
                value="输入4(暂预留无定义)">
              </el-option>
              <el-option
                label="输入5(站间中频监测1)"
                value="输入5(站间中频监测1)">
              </el-option>
              <el-option
                label="输入6(站间中频监测2)"
                value="输入6(站间中频监测2)">
              </el-option>
              <el-option
                label="输入7(ka下变频器A)"
                value="输入7(ka下变频器A)">
              </el-option>
              <el-option
                label="输入8(ka下变频器B)"
                value="输入8(ka下变频器B)">
              </el-option>
              <el-option
                label="输入9(ka接收基带A)"
                value="输入9(ka接收基带A)">
              </el-option>
              <el-option
                label="输入10(ka接收基带B)"
                value="输入10(ka接收基带B)">
              </el-option>
              <el-option
                label="输入11(暂预留无定义)"
                value="输入11(暂预留无定义)">
              </el-option>
              <el-option
                label="输入12(暂预留无定义)"
                value="输入12(暂预留无定义)">
              </el-option>
            </el-select>
          </li>
          <li class="li-span-1">
            <label>OUT12_SEL</label>
            <el-select size="mini" v-model="Setting.CenterFrequency_parameter_setting.OUT12_SEL">
              <el-option
                label="输入1(ka发射基带A)"
                value="输入1(ka发射基带A)">
              </el-option>
              <el-option
                label="输入2(ka发射基带B)"
                value="输入2(ka发射基带B)">
              </el-option>
              <el-option
                label="输入3(ka发射校零中频出)"
                value="输入3(ka发射校零中频出)">
              </el-option>
              <el-option
                label="输入4(暂预留无定义)"
                value="输入4(暂预留无定义)">
              </el-option>
              <el-option
                label="输入5(站间中频监测1)"
                value="输入5(站间中频监测1)">
              </el-option>
              <el-option
                label="输入6(站间中频监测2)"
                value="输入6(站间中频监测2)">
              </el-option>
              <el-option
                label="输入7(ka下变频器A)"
                value="输入7(ka下变频器A)">
              </el-option>
              <el-option
                label="输入8(ka下变频器B)"
                value="输入8(ka下变频器B)">
              </el-option>
              <el-option
                label="输入9(ka接收基带A)"
                value="输入9(ka接收基带A)">
              </el-option>
              <el-option
                label="输入10(ka接收基带B)"
                value="输入10(ka接收基带B)">
              </el-option>
              <el-option
                label="输入11(暂预留无定义)"
                value="输入11(暂预留无定义)">
              </el-option>
              <el-option
                label="输入12(暂预留无定义)"
                value="输入12(暂预留无定义)">
              </el-option>
            </el-select>
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
  name: 'flow_xdzp',
  data () {
    return {
      Setting: {
        // 星地中频分路
        CenterFrequency_parameter_setting: {
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

<style></style>
