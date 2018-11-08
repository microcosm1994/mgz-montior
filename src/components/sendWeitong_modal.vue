<template>
  <div class="sendWeitong">
    <!--调制参数设置-->
    <form>
      <fieldset>
        <legend>调制参数设置</legend>
        <fieldset>
          <legend>命令块1</legend>
          <ul>
            <li class="li-span-4">
              <label>调制开关</label>
              <el-select v-model="Setting.WT_S_Send_command.cmd1_ModeSwitch" placeholder="请选择"  size="mini">
                <el-option label="关闭" value="关闭"></el-option>
                <el-option label="开启" value="开启"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>LDPC开关</label>
              <el-select v-model="Setting.WT_S_Send_command.cmd1_LDPC_EN" placeholder="请选择"  size="mini">
                <el-option label="关闭" value="关闭"></el-option>
                <el-option label="开启" value="开启"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>调至数据速率</label>
              <el-select v-model="Setting.WT_S_Send_command.cmd1_Data_rate" placeholder="请选择"  size="mini">
                <el-option label="62.5kbps" value="62.5"></el-option>
                <el-option label="500bps" value="500"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>数据类型选择</label>
              <el-select  v-model="Setting.WT_S_Send_command.cmd1_Data_en" size="mini">
                <el-option label="随机数" value="随机数"></el-option>
                <el-option label="摸飞数据" value="摸飞数据"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道号</label>
              <input  v-model="Setting.WT_S_Send_command.cmd1_PRM_number" type="text">
            </li>
            <li class="li-span-4">
              <label>信号电频</label>
              <input v-model="Setting.WT_S_Send_command.cmd1_Level" type="text" >
            </li>
            <li class="li-span-4">
              <label>中心频率</label>
              <input v-model="Setting.WT_S_Send_command.cmd1_FREQ_IF" type="text" >
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>命令块2</legend>
          <ul>
            <li class="li-span-4">
              <label>调制开关</label>
              <el-select v-model="Setting.WT_S_Send_command.cmd2_ModeSwitch" placeholder="请选择"  size="mini">
                <el-option label="关闭" value="关闭"></el-option>
                <el-option label="开启" value="开启"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>LDPC开关</label>
              <el-select v-model="Setting.WT_S_Send_command.cmd2_LDPC_EN" placeholder="请选择"  size="mini">
                <el-option label="关闭" value="关闭"></el-option>
                <el-option label="开启" value="开启"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>调至数据速率</label>
              <el-select v-model="Setting.WT_S_Send_command.cmd2_Data_rate" placeholder="请选择"  size="mini">
                <el-option label="62.5kbps" value="62.5"></el-option>
                <el-option label="500bps" value="500"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>数据类型选择</label>
              <el-select  v-model="Setting.WT_S_Send_command.cmd2_Data_en" size="mini">
                <el-option label="随机数" value="随机数"></el-option>
                <el-option label="摸飞数据" value="摸飞数据"></el-option>
              </el-select>
            </li>
            <li class="li-span-4">
              <label>通道号</label>
              <input  v-model="Setting.WT_S_Send_command.cmd2_PRM_number" type="text">
            </li>
            <li class="li-span-4">
              <label>信号电频</label>
              <input v-model="Setting.WT_S_Send_command.cmd2_Level" type="text" >
            </li>
            <li class="li-span-4">
              <label>中心频率</label>
              <input v-model="Setting.WT_S_Send_command.cmd2_FREQ_IF" type="text" >
            </li>
          </ul>
        </fieldset>
      </fieldset>
    </form>
    <!--接收机参数设置-->
    <form>
      <fieldset>
        <legend>接收机参数设置</legend>
        <ul>
          <li class="li-span-4">
            <label>接收数据速率</label>
            <el-select v-model="Setting.WT_S_Recv_command.Data_rate"  size="mini">
              <el-option label="62.5kbps" value="62.5"></el-option>
              <el-option label="500bps" value="500"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>环路带宽设置</label>
            <el-select v-model="Setting.WT_S_Recv_command.autosel"  size="mini">
              <el-option label="自动" value="自动"></el-option>
              <el-option label="手动" value="手动"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>通道号</label>
            <input v-model="Setting.WT_S_Recv_command.ChannelID" type="text" >
          </li>
          <li class="li-span-4">
            <label>入锁帧计数</label>
            <input v-model="Setting.WT_S_Recv_command.Frmpara1" type="text" >
          </li>
          <li class="li-span-4">
            <label>失锁帧计数</label>
            <input v-model="Setting.WT_S_Recv_command.Frmpara2" type="text" >
          </li>
          <li class="li-span-4">
            <label>入锁容错比特数</label>
            <input v-model="Setting.WT_S_Recv_command.Frmpara3" type="text" >
          </li>
          <li class="li-span-4">
            <label>校验容错比特数</label>
            <input v-model="Setting.WT_S_Recv_command.Frmpara4" type="text" >
          </li>
          <li class="li-span-4">
            <label>失锁容错比特数</label>
            <input v-model="Setting.WT_S_Recv_command.Frmpara5" type="text" >
          </li>
          <li class="li-span-4">
            <label>LDPC开关</label>
            <el-select v-model="Setting.WT_S_Recv_command.LDPC_EN"  size="mini">
              <el-option label="关闭" value="关闭"></el-option>
              <el-option label="开启" value="开启"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>载波环路带宽</label>
            <input v-model="Setting.WT_S_Recv_command.CarrLoopBn" type="text" >
          </li>
          <li class="li-span-4">
            <label>伪码环路带宽</label>
            <input v-model="Setting.WT_S_Recv_command.PnLoopBn" type="text" >
          </li>
        </ul>
      </fieldset>
    </form>
    <!--时频参数设置-->
    <form>
      <fieldset>
        <legend>时频参数</legend>
        <ul>
          <li class="li-span-4">
            <label>内外参考设置</label>
            <el-select v-model="Setting.WT_S_Time_command.REF9520Se1"  size="mini">
              <el-option label="内参考" value="内参考"></el-option>
              <el-option  label="外参考" value="外参考"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>时统</label>
            <el-select v-model="Setting.WT_S_Time_command.Mode"  size="mini">
              <el-option label="内时统" value="内时统"></el-option>
              <el-option label="外时统" value="外时统"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>闰年</label>
            <el-select v-model="Setting.WT_S_Time_command.Leap"  size="mini">
              <el-option label="否" value="否"></el-option>
              <el-option label="是" value="是"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>年</label>
            <input v-model="Setting.WT_S_Time_command.Year" type="text" >
          </li>
          <li class="li-span-4">
            <label>采样延迟</label>
            <input v-model="Setting.WT_S_Time_command.Delay" type="text" >
          </li>
          <li class="li-span-4">
            <label>日</label>
            <input v-model="Setting.WT_S_Time_command.Day" type="text" >
          </li>
          <li class="li-span-4">
            <label>时</label>
            <input v-model="Setting.WT_S_Time_command.Hour" type="text" >
          </li>
          <li class="li-span-4">
            <label>分</label>
            <input v-model="Setting.WT_S_Time_command.Minute" type="text" >
          </li>
          <li class="li-span-4">
            <label>秒</label>
            <input v-model="Setting.WT_S_Time_command.Second" type="text" >
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
  name: 'sendWeitong_modal',
  data () {
    return {
      /* 命令 */
      Setting: {
        // 卫通发射基带A发射命令
        WT_S_Send_command: {
          cmd1_Data_rate: '',
          cmd1_Data_en: '',
          cmd1_ModeSwitch: '',
          cmd1_PRM_number: '',
          cmd1_StationID: '',
          cmd1_Level: '',
          cmd1_LDPC_EN: '',
          cmd1_FREQ_IF: '',
          cmd2_Data_rate: '',
          cmd2_Data_en: '',
          cmd2_ModeSwitch: '',
          cmd2_PRM_number: '',
          cmd2_StationID: '',
          cmd2_Level: '',
          cmd2_LDPC_EN: '',
          cmd2_FREQ_IF: '',
          RECV: ''
        },
        // 卫通发射基带接收命令
        WT_S_Recv_command: {
          Data_rate: '',
          autosel: '',
          ChannelID: '',
          Frmpara1: '',
          Frmpara2: '',
          Frmpara3: '',
          Frmpara4: '',
          Frmpara5: '',
          LDPC_EN: '',
          CarrLoopBn: '',
          PnLoopBn: '',
          Res2: ''
        },
        // 卫通发射基带时频命令
        WT_S_Time_command: {
          Mode: '',
          Year: '',
          Day: '',
          Hour: '',
          Minute: '',
          Second: '',
          Leap: '',
          Delay: '',
          REF9520Se1: '',
          Rsv: ''
        }
      },
      ruleForm: {
        cmd1_Level: {
          min: 0,
          max: 60
        },
        cmd1_FREQ_IF: {
          min: 50000000,
          max: 90000000
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
        Delay: {
          min: 0,
          max: 255
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
          if (key1 !== 'Rsv' && !value) {
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
