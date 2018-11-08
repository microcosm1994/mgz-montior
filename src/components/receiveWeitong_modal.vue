<template>
  <div class="receiveWeitong">
    <!--接收通道复位-->
    <form>
      <fieldset>
        <legend>接收通道复位</legend>
        <div style="text-align: left">
          <ul style="text-align: center">
            <li class="li-span-4">
              <label>通道1</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset1">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道2</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset2">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道3</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset3">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道4</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset4">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道5</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset5">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道6</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset6">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道7</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset7">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道8</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset8">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道9</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset9">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道10</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset10">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道11</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset11">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道12</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset12">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道13</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset13">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道14</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset14">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道15</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset15">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道16</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset16">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道17</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset17">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道18</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset18">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道19</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset19">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道20</label>
              <el-select size="mini" v-model="Setting.WT_R_ChReset.ChReset20">
                <el-option  label="复位" value="复位"></el-option>
                <el-option label="不复位" value="不复位"></el-option>
              </el-select>
            </li>
          </ul>
        </div>
      </fieldset>
    </form>
    <!--接收通道解调-->
    <form>
      <fieldset>
        <legend>接收通道解调</legend>
        <ul style="text-align: center">
          <li class="li-span-4">
            <label>载波中频频率</label>
            <input v-model="Setting.WT_R_Channel_demodulation.RecCarrFreq" type="text">
          </li>
          <li class="li-span-4">
            <label>通道prm编号</label>
            <input v-model="Setting.WT_R_Channel_demodulation.Channel_ID" type="text" >
          </li>
          <li class="li-span-4">
            <label>通道码速率</label>
            <el-select v-model="Setting.WT_R_Channel_demodulation.DataRateSel" size="mini">
              <el-option  label="500bps" value="500"></el-option>
              <el-option label="12.5kbps" value="12.5"></el-option>
              <el-option label="62.5kbps" value="62.5"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>接收通道选择</label>
            <el-select v-model="Setting.WT_R_Channel_demodulation.Channel_Sel" size="mini">
              <el-option v-for="item in 20" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </li>
        </ul>
      </fieldset>
    </form>
    <!--接收相关参数-->
    <form>
      <fieldset>
        <legend>接收相关参数</legend>
        <ul>
          <li class="li-span-2">
            <label>接收信号捕获门限</label>
            <el-select v-model="Setting.WT_R_Related_parameters.AcqTh" size="mini">
              <el-option label="强信号" value="强信号"></el-option>
              <el-option label="中信号" value="中信号"></el-option>
              <el-option label="弱信号" value="弱信号"></el-option>
            </el-select>
          </li>
          <li class="li-span-2">
            <label>译码输出通道选择</label>
            <el-select v-model="Setting.WT_R_Related_parameters.LdpcSel" size="mini">
              <el-option v-for="item in 10" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </li>
          <li class="li-span-2">
            <label>天线跟踪输出通道选择</label>
            <el-select v-model="Setting.WT_R_Related_parameters.TrackSel" size="mini">
              <el-option v-for="item in 10" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </li>
          <li class="li-span-2">
            <label>伪码时间不确定度</label>
            <input type="text" v-model="Setting.WT_R_Related_parameters.TimeDiffRange">
          </li>
          <li class="li-span-2">
            <label>内外参考选择</label>
            <el-select v-model="Setting.WT_R_Related_parameters.RefSel" size="mini">
              <el-option label="内参考" value="内参考"></el-option>
              <el-option label="外参考" value="外参考"></el-option>
            </el-select>
          </li>
        </ul>
      </fieldset>
    </form>
    <el-row :gutter="20">
      <el-col :span="14">
        <!--抗干扰功能-->
        <form>
          <fieldset>
            <legend>抗干扰功能</legend>
            <ul>
              <li class="li-span-2">
                <label>抗窄宽干扰功能使能开关</label>
                <el-select v-model="Setting.WT_R_inter_Set.makeCanSwitch" size="mini">
                  <el-option label="开启" value="开启"></el-option>
                  <el-option label="关闭" value="关闭"></el-option>
                </el-select>
              </li>
              <li class="li-span-2">
                <label>多用户监测开关</label>
                <el-select v-model="Setting.WT_R_inter_Set.detectionSwitch" size="mini">
                  <el-option label="开启" value="开启"></el-option>
                  <el-option label="关闭" value="关闭"></el-option>
                </el-select>
              </li>
            </ul>
          </fieldset>
        </form>
        <!--效验发射控制-->
        <form>
          <fieldset>
            <legend>效验发射控制</legend>
            <ul>
              <li class="li-span-2">
                <label>调制开关</label>
                <el-select v-model="Setting.WT_R_Checkout_control.ModSwich" size="mini">
                  <el-option label="开启" value="开启"></el-option>
                  <el-option label="关闭" value="关闭"></el-option>
                </el-select>
              </li>
              <li class="li-span-2">
                <label>数据开关</label>
                <el-select v-model="Setting.WT_R_Checkout_control.DataSwitch" size="mini">
                  <el-option label="去调" value="去调"></el-option>
                  <el-option label="加调" value="加调"></el-option>
                </el-select>
              </li>
              <li class="li-span-2">
                <label>单载波开关</label>
                <el-select v-model="Setting.WT_R_Checkout_control.SingleCarrSwich" size="mini">
                  <el-option label="扩频" value="扩频"></el-option>
                  <el-option label="单载波" value="单载波"></el-option>
                </el-select>
              </li>
              <li class="li-span-2">
                <label>数据速率</label>
                <el-select v-model="Setting.WT_R_Checkout_control.DataRateSel" size="mini">
                  <el-option label="500bps" value="500"></el-option>
                  <el-option label="12.5kbps" value="12.5"></el-option>
                  <el-option label="62.5kbps" value="62.5"></el-option>
                </el-select>
              </li>
              <li class="li-span-2">
                <label>PRM编号</label>
                <input type="text" v-model="Setting.WT_R_Checkout_control.ChannelID">
              </li>
              <li class="li-span-2">
                <label>初始速率</label>
                <input type="text" v-model="Setting.WT_R_Checkout_control.Power">
              </li>
            </ul>
          </fieldset>
        </form>
      </el-col>
      <el-col :span="10">
        <!--时频参数-->
        <form>
          <fieldset>
            <legend>时频参数</legend>
            <ul style="padding-top: 15px;padding-bottom: 15px;">
              <li class="li-span-2" style="width: 44%;">
                <label style="width: 36%;">时统</label>
                <el-select v-model="Setting.WT_R_Time_setting.Mode"  size="mini">
                  <el-option label="内时统" value="内时统"></el-option>
                  <el-option label="外时统" value="外时统"></el-option>
                </el-select>
              </li>
              <li class="li-span-2" style="width: 44%;">
                <label style="width: 36%;">闰年</label>
                <el-select v-model="Setting.WT_R_Time_setting.Leap"  size="mini">
                  <el-option label="否" value="否"></el-option>
                  <el-option label="是" value="是"></el-option>
                </el-select>
              </li>
              <li class="li-span-2" style="width: 44%;">
                <label style="width: 36%;">年</label>
                <input v-model="Setting.WT_R_Time_setting.Year" type="text" >
              </li>
              <li class="li-span-2" style="width: 44%;">
                <label style="width: 36%;">日</label>
                <input v-model="Setting.WT_R_Time_setting.Day" type="text" >
              </li>
              <li class="li-span-2" style="width: 44%;">
                <label style="width: 36%;">时</label>
                <input v-model="Setting.WT_R_Time_setting.Hour" type="text" >
              </li>
              <li class="li-span-2" style="width: 44%;">
                <label style="width: 36%;">分</label>
                <input v-model="Setting.WT_R_Time_setting.Minute" type="text" >
              </li>
              <li class="li-span-2" style="width: 44%;">
                <label style="width: 36%;">秒</label>
                <input v-model="Setting.WT_R_Time_setting.Second" type="text" >
              </li>
            </ul>
          </fieldset>
        </form>
      </el-col>
    </el-row>
    <div slot="footer" class="dialog-footer" style="text-align: center">
      <el-button type="primary" @click="validate">保 存</el-button>
      <el-button @click="modalClose">取 消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'receiveWeitong_modal',
  data () {
    return {
      /* 参数设置 */
      Setting: {
        // 接收通道复位设置
        WT_R_ChReset: {
          ChReset1: '',
          ChReset2: '',
          ChReset3: '',
          ChReset4: '',
          ChReset5: '',
          ChReset6: '',
          ChReset7: '',
          ChReset8: '',
          ChReset9: '',
          ChReset10: '',
          ChReset11: '',
          ChReset12: '',
          ChReset13: '',
          ChReset14: '',
          ChReset15: '',
          ChReset16: '',
          ChReset17: '',
          ChReset18: '',
          ChReset19: '',
          ChReset20: ''
        },
        // 卫通接收接收通道解调参数设置
        WT_R_Channel_demodulation: {
          RecCarrFreq: '',
          Channel_ID: '',
          DataRateSel: '',
          Channel_Sel: '',
          Rsv1: ''
        },
        // 卫通接收接收相关参数设置
        WT_R_Related_parameters: {
          AcqTh: '',
          LdpcSel: '',
          TimeDiffRange: '',
          TrackSel: '',
          RefSel: '',
          Rsv2: ''
        },
        // 卫通接收时间设置
        WT_R_Time_setting: {
          Mode: '',
          Year: '',
          Day: '',
          Hour: '',
          Minute: '',
          Second: '',
          Leap: '',
          Rsv: ''
        },
        // 卫通接收校验发射控制设置
        WT_R_Checkout_control: {
          ModSwich: '',
          SingleCarrSwich: '',
          DataSwitch: '',
          DataRateSel: '',
          Power: '',
          ChannelID: '',
          Rsv4: ''
        },
        // 卫通接收数据采集通道设置
        WT_R_Data_acquisition_channel: {
          DTMDSelect: '',
          DTEDSelect: ''
        },
        // 抗干扰功能设置
        WT_R_inter_Set: {
          detectionSwitch: '',
          makeCanSwitch: ''
        },
        // 设置有效标志
        WT_Set_Valid_Flag: {
          Res: '',
          ValidFlag_V5_ct_set: '',
          ValidFlag_V5_ct_answer: '',
          ValidFlag_V5_ct_state: '',
          ValidFlag_B4: '',
          ValidFlag_B3: '',
          ValidFlag_B2: '',
          ValidFlag_B1: '',
          ValidFlag_B0: ''
        },
        // 保留
        Res72: {
          Rec72: ''
        }
      },
      ruleForm: {
        Channel_ID: {
          min: 1,
          max: 255
        },
        Channel_Sel: {
          min: 0,
          max: 19
        },
        Year: {
          min: 2006,
          max: 9999999
        },
        Day: {
          min: 1,
          max: 366
        },
        Hour: {
          min: 0,
          max: 23
        },
        Minute: {
          min: 0,
          max: 59
        },
        Second: {
          min: 0,
          max: 59
        },
        Power: {
          min: 0,
          max: 60
        }
      }
    }
  },
  filters: {
    strReplace (val, c) {
      return val.replace(c, '')
    }
  },
  computed: {
    changTitle: function () {
      let data = this.$route.query
      return '卫通接收基带(' + data.name + ')'
    },
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
          let macroId = this.$route.query.id
          let deviceId = this.$route.query.deviceId
          let url = '/api/macroFile/putMacroFile?macroId=' + macroId + '&deviceId=' + deviceId
          $ws.sendData(Socket, url, data)
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
          if (!value && key1 !== 'Rec' && key1 !== 'Res') {
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
