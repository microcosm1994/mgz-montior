<template>
  <div>
    <!--调制参数设置-->
    <form>
      <fieldset>
        <legend>上行调制参数</legend>
        <ul>
          <li class="li-span-4">
            <label>工作模式</label>
            <el-select v-model="Setting.KA_S_up_modulation.WorkMode"  size="mini">
              <el-option label="连续体制" value="连续体制"></el-option>
              <el-option label="时分体制" value="时分体制"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>调制开关</label>
            <el-select v-model="Setting.KA_S_up_modulation.ModSwitch"  size="mini">
              <el-option label="关闭" value="关闭"></el-option>
              <el-option label="开启" value="开启"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>调制电平</label>
            <input v-model="Setting.KA_S_up_modulation.Level" type="text" >
          </li>
          <li class="li-span-4">
            <label>伪码加调</label>
            <el-select v-model="Setting.KA_S_up_modulation.ModuPN"  size="mini">
              <el-option label="去调" value="去调"></el-option>
              <el-option label="加调" value="加调"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>数据加调</label>
            <el-select v-model="Setting.KA_S_up_modulation.ModuData"  size="mini">
              <el-option label="去调" value="去调"></el-option>
              <el-option label="加调" value="加调"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>调制伪码序号</label>
            <input v-model="Setting.KA_S_up_modulation.PRN" type="text" >
          </li>
          <li class="li-span-4">
            <label>调制伪码类型</label>
            <el-select v-model="Setting.KA_S_up_modulation.PNsel"  size="mini">
              <el-option label="非周期码" value="非周期码"></el-option>
              <el-option label="周期码" value="周期码"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>输出载波中频</label>
            <input v-model="Setting.KA_S_up_modulation.CarIF" type="text" >
          </li>
          <li class="li-span-4">
            <label>多普勒动态模拟开关</label>
            <el-select v-model="Setting.KA_S_up_modulation.SimSw"  size="mini">
              <el-option label="关" value="关"></el-option>
              <el-option label="开" value="开"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>上行多普勒预置</label>
            <input v-model="Setting.KA_S_up_modulation.Offset" type="text" >
          </li>
          <li class="li-span-4">
            <label>多普勒模拟频率范围</label>
            <input v-model="Setting.KA_S_up_modulation.FreRange" type="text" >
          </li>
          <li class="li-span-4">
            <label>最大多普勒变化率</label>
            <input v-model="Setting.KA_S_up_modulation.MaxDop1st" type="text" >
          </li>
          <li class="li-span-4">
            <label>调制数据速率</label>
            <el-select v-model="Setting.KA_S_up_modulation.Data_rate" size="mini">
              <el-option label="4.096kbps" value="4.096"></el-option>
              <el-option label="20.48kbps" value="20.48"></el-option>
              <el-option label="51.2kbps" value="51.2"></el-option>
              <el-option label="102.4kbps" value="102.4"></el-option>
              <el-option label="204.8kbps" value="204.8"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>LDPC开关</label>
            <el-select v-model="Setting.KA_S_up_modulation.LDPC_EN"  size="mini">
              <el-option label="关" value="关"></el-option>
              <el-option label="开" value="开"></el-option>
            </el-select>
          </li>
        </ul>
      </fieldset>
    </form>
    <!--接收机参数设置-->
    <form>
      <fieldset>
        <legend>接收机参数</legend>
        <ul>
          <li class="li-span-4">
            <label>输入选择</label>
            <el-select v-model="Setting.KA_S_recv_param.Input" size="mini">
              <el-option label="左旋入" value="左旋入"></el-option>
              <el-option label="右旋入" value="右旋入"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>接收开关</label>
            <el-select v-model="Setting.KA_S_recv_param.RecSwitch" size="mini">
              <el-option label="关闭" value="关闭"></el-option>
              <el-option label="开启" value="开启"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>载波环路带宽</label>
            <el-select v-model="Setting.KA_S_recv_param.PllBw" size="mini">
              <el-option label="5HZ" value="5"></el-option>
              <el-option label="10HZ" value="10"></el-option>
              <el-option label="100HZ" value="100"></el-option>
              <el-option label="500HZ" value="500"></el-option>
              <el-option label="1kHZ" value="1k"></el-option>
              <el-option label="2kHZ" value="2k"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>接收伪码类型</label>
            <el-select v-model="Setting.KA_S_recv_param.PNsel" size="mini">
              <el-option label="非周期码" value="非周期码"></el-option>
              <el-option label="周期码" value="周期码"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>接收伪码序号</label>
            <input v-model="Setting.KA_S_recv_param.PRN" type="text">
          </li>
          <li class="li-span-4">
            <label>载波频率范围捕获</label>
            <input v-model="Setting.KA_S_recv_param.AcquRange" type="text">
          </li>
          <li class="li-span-4">
            <label>时间不确定度捕获范围</label>
            <input v-model="Setting.KA_S_recv_param.TimeRange" type="text">
          </li>
          <li class="li-span-4">
            <label>时间滑动范围</label>
            <input v-model="Setting.KA_S_recv_param.TimeunsureRange" type="text">
          </li>
          <li class="li-span-4">
            <label>接收数据速率</label>
            <el-select v-model="Setting.KA_S_recv_param.Data_rate" size="mini">
              <el-option label="4.096kbps" value="4.096"></el-option>
              <el-option label="20.48kbps" value="20.48"></el-option>
              <el-option label="51.2kbps" value="51.2"></el-option>
              <el-option label="102.4kbps" value="102.4"></el-option>
              <el-option label="204.8kbps" value="204.8"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>LDPC开关</label>
            <el-select v-model="Setting.KA_S_recv_param.LDPC_EN" size="mini">
              <el-option label="关" value="关"></el-option>
              <el-option label="开" value="开"></el-option>
            </el-select>
          </li>
        </ul>
      </fieldset>
    </form>
    <!--时频参数设置-->
    <form>
      <fieldset>
        <legend>时频单元</legend>
        <ul>
          <li class="li-span-4">
            <label>内/外时频选择</label>
            <el-select v-model="Setting.KA_S_time_unit.Mode" size="mini">
              <el-option label="内时频" value="内时频"></el-option>
              <el-option label="外时频" value="外时频"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>闰年</label>
            <el-select v-model="Setting.KA_S_time_unit.Leap" size="mini">
              <el-option label="否" value="否"></el-option>
              <el-option label="是" value="是"></el-option>
            </el-select>
          </li>
          <li class="li-span-4">
            <label>年</label>
            <input v-model="Setting.KA_S_time_unit.Year" type="text">
          </li>
          <li class="li-span-4">
            <label>天</label>
            <input v-model="Setting.KA_S_time_unit.Day" type="text">
          </li>
          <li class="li-span-4">
            <label>时</label>
            <input v-model="Setting.KA_S_time_unit.Hour" type="text">
          </li>
          <li class="li-span-4">
            <label>分</label>
            <input v-model="Setting.KA_S_time_unit.Minute" type="text">
          </li>
          <li class="li-span-4">
            <label>秒</label>
            <input v-model="Setting.KA_S_time_unit.Second" type="text">
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
  name: 'kaBaseBand_Send',
  data () {
    return {
      /* 设置 */
      Setting: {
        // Ka发送基带A调制参数
        KA_S_up_modulation: {
          WorkMode: '',
          ModSwitch: '',
          Level: '',
          ModuPN: '',
          ModuData: '',
          PRN: '',
          PNsel: '',
          CarIF: '',
          SimSw: '',
          Offset: '',
          FreRange: '',
          MaxDop1st: '',
          Data_rate: '',
          LDPC_EN: '',
          Res: '',
          Resd: ''
        },
        // Ka发送基带A接收参数
        KA_S_recv_param: {
          Input: '',
          RecSwitch: '',
          PRN: '',
          PNsel: '',
          AcquRange: '',
          TimeRange: '',
          TimeunsureRange: '',
          PllBw: '',
          Data_rate: '',
          LDPC_EN: '',
          Resd: ''
        },
        // Ka发送基带A时码单元参数
        KA_S_time_unit: {
          Mode: '',
          Year: '',
          Day: '',
          Hour: '',
          Minute: '',
          Second: '',
          Leap: '',
          Res2: '',
          Res1: ''
        }
      },
      ruleForm: {
        Level: {
          min: 0,
          max: 60
        },
        PRN: {
          min: 1,
          max: 64
        },
        CarIF: {
          min: 55,
          max: 85
        },
        Offset: {
          min: -300,
          max: 300
        },
        FreRange: {
          min: 0,
          max: 300
        },
        MaxDop1st: {
          min: 0,
          max: 3
        },
        AcquRange: {
          min: 0,
          max: 300
        },
        TimeRange: {
          min: 0,
          max: 50
        },
        TimeunsureRange: {
          min: -1000,
          max: 1000
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
