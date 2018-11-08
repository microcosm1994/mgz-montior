<template>
  <div class="timeSwitching">
    <!--<form>-->
      <!--<fieldset>-->
        <!--<legend>频标切换器</legend>-->
        <!--<ul style="text-align: center">-->
          <!--<li class="li-span-2">-->
            <!--<label>版本信息：</label>-->
            <!--<el-select size="mini"  v-model="Setting.Timer_series.tsm_edition" placeholder="请选择" >-->
              <!--<el-option label="获取" value="获取"></el-option>-->
            <!--</el-select>-->
          <!--</li>-->
          <!--<li class="li-span-2">-->
            <!--<label>时延补偿：</label>-->
            <!--<input type="text">-->
          <!--</li>-->
        <!--</ul>-->
        <!--<form>-->
          <!--<fieldset>-->
            <!--<legend>网络参数</legend>-->
            <!--<el-radio-group v-model="radio" size="small">-->
              <!--<el-radio label="获取">-->
                <!--<ul style="display: inline-block;vertical-align: middle">-->
                  <!--<li style="width: 50px;height: 30px;display: inline-block;vertical-align: middle;line-height: 30px;text-align: center">-->
                    <!--<span style="width: 40px;min-width: 40px">获取</span>-->
                  <!--</li>-->
                <!--</ul>-->
              <!--</el-radio>-->
              <!--<el-radio label="01H">-->
                <!--<ul style="display: inline-block;vertical-align: middle">-->
                  <!--<li style="width: auto;height: 30px;display: inline-block;vertical-align: middle;line-height: 30px;text-align: center;padding-left: 10px;padding-right: 10px">-->
                    <!--<span style="width: 40px;min-width: 40px">配置：</span>-->
                    <!--<span>IP地址:</span>-->
                    <!--<input style="width: 120px;margin-left: 5px;text-align: left;padding-left: 10px;" type="text">-->
                    <!--<span>自身端口:</span>-->
                    <!--<input style="width: 120px;margin-left: 5px;text-align: left;padding-left: 10px;" type="text">-->
                    <!--<span>目标端口:</span>-->
                    <!--<input style="width: 120px;margin-left: 5px;text-align: left;padding-left: 10px;" type="text">-->
                  <!--</li>-->
                <!--</ul>-->
              <!--</el-radio>-->
            <!--</el-radio-group>-->
          <!--</fieldset>-->
        <!--</form>-->
      <!--</fieldset>-->
    <!--</form>-->
    <form>
      <fieldset>
        <legend>
          <el-checkbox :indeterminate="timerSet.isIndeterminate" v-model="timerSet.checked" @change="timerSetCheckAll">时钟模式</el-checkbox>
        </legend>
        <el-checkbox-group v-model="timerSet.checkeds" @change="timerSetChange">
          <ul>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_6" @change="Disabled('Time_set_messagei_6')">置钟</el-checkbox>
              </label>
              <input type="text" v-model="Setting.Time_set_messagei_6.tscon" :disabled="disabledArray.Time_set_messagei_6">
              <!--<el-date-picker-->
              <!--v-model="Setting.Time_set_messagei_6.tscon"-->
              <!--type="datetime"-->
              <!--format="yyMMddHHmmss"-->
              <!--size="mini"-->
              <!--placeholder="选择日期时间">-->
              <!--</el-date-picker>-->
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_13" @change="Disabled('Time_set_messagei_13')">时延补偿</el-checkbox>
              </label>
              <input type="text" v-model="Setting.Time_set_messagei_13.tscon" :disabled="disabledArray.Time_set_messagei_13">
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_7" @change="Disabled('Time_set_messagei_7')">加减秒</el-checkbox>
              </label>
              <el-select size="mini"  v-model="Setting.Time_set_messagei_7.tscon" placeholder="请选择" :disabled="disabledArray.Time_set_messagei_7">
                <el-option label="加秒" value="加秒"></el-option>
                <el-option label="减秒" value="减秒"></el-option>
              </el-select>
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_8" @change="Disabled('Time_set_messagei_8')">闰秒标志</el-checkbox>
              </label>
              <el-select size="mini"  v-model="Setting.Time_set_messagei_8.tscon" placeholder="请选择" :disabled="disabledArray.Time_set_messagei_8">
                <el-option label="无闰秒" value="无闰秒"></el-option>
                <el-option label="正闰秒" value="正闰秒"></el-option>
                <el-option label="负闰秒" value="负闰秒"></el-option>
              </el-select>
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_9" @change="Disabled('Time_set_messagei_9')">时间基准</el-checkbox>
              </label>
              <el-select size="mini"  v-model="Setting.Time_set_messagei_9.tscon" placeholder="请选择" :disabled="disabledArray.Time_set_messagei_9">
                <el-option label="自动" value="自动"></el-option>
                <el-option label="外时频" value="外时频"></el-option>
                <el-option label="预留" value="预留"></el-option>
                <el-option label="接收机" value="接收机"></el-option>
              </el-select>
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_10" @change="Disabled('Time_set_messagei_10')">频率基准</el-checkbox>
              </label>
              <el-select size="mini"  v-model="Setting.Time_set_messagei_10.tscon" placeholder="请选择" :disabled="disabledArray.Time_set_messagei_10">
                <el-option label="自动" value="自动"></el-option>
                <el-option label="外时频" value="外时频"></el-option>
                <el-option label="铷标A" value="铷标A"></el-option>
                <el-option label="铷标B" value="铷标B"></el-option>
                <el-option label="铷标C" value="铷标C"></el-option>
              </el-select>
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_11" @change="Disabled('Time_set_messagei_11')">主备切换</el-checkbox>
              </label>
              <el-select size="mini"  v-model="Setting.Time_set_messagei_11.tscon" placeholder="请选择" :disabled="disabledArray.Time_set_messagei_11">
                <el-option label="备用" value="备用"></el-option>
                <el-option label="主用" value="主用"></el-option>
              </el-select>
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_12" @change="Disabled('Time_set_messagei_12')">接收机</el-checkbox>
              </label>
              <el-select size="mini"  v-model="Setting.Time_set_messagei_12.tscon" placeholder="请选择" :disabled="disabledArray.Time_set_messagei_12">
                <el-option label="混合" value="混合"></el-option>
                <el-option label="北斗" value="北斗"></el-option>
                <el-option label="GPS" value="GPS"></el-option>
              </el-select>
            </li>
          </ul>
        </el-checkbox-group>
      </fieldset>
    </form>
    <form>
      <fieldset>
        <legend>
          <el-checkbox :indeterminate="timerASet.isIndeterminate" v-model="timerASet.checked" @change="timerASetCheckAll">频标A</el-checkbox>
        </legend>
        <el-checkbox-group v-model="timerASet.checkeds" @change="timerASetChange">
          <ul>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_14" @change="Disabled('Time_set_messagei_14')">频标选择</el-checkbox>
              </label>
              <el-select size="mini"  v-model="Setting.Time_set_messagei_14.tsm" placeholder="请选择"  :disabled="disabledArray.Time_set_messagei_14">
                <el-option label="铷频标" value="铷频标"></el-option>
                <el-option label="外频标" value="外频标"></el-option>
              </el-select>
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_15" @change="Disabled('Time_set_messagei_15')">参考选择</el-checkbox>
              </label>
              <el-select size="mini"  v-model="Setting.Time_set_messagei_15.tsm" placeholder="请选择" :disabled="disabledArray.Time_set_messagei_15">
                <el-option label="10MHz" value="10MHz"></el-option>
                <el-option label="1PPS-2" value="1PPS-2"></el-option>
                <el-option label="1PPS-1" value="1PPS-1"></el-option>
              </el-select>
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_16" @change="Disabled('Time_set_messagei_16')">时钟模式</el-checkbox>
              </label>
              <el-select size="mini"  v-model="Setting.Time_set_messagei_16.tsm" placeholder="请选择" :disabled="disabledArray.Time_set_messagei_16">
                <el-option label="自由运行" value="自由运行"></el-option>
                <el-option label="跟踪" value="跟踪"></el-option>
              </el-select>
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_17" @change="Disabled('Time_set_messagei_17')">手动调频</el-checkbox>
              </label>
              <input type="text" v-model="Setting.Time_set_messagei_17.tscon" :disabled="disabledArray.Time_set_messagei_17">
            </li>
          </ul>
        </el-checkbox-group>
      </fieldset>
    </form>
    <form>
      <fieldset>
        <legend>
          <el-checkbox :indeterminate="timerBSet.isIndeterminate" v-model="timerBSet.checked" @change="timerBSetCheckAll">频标B</el-checkbox>
        </legend>
        <el-checkbox-group v-model="timerBSet.checkeds" @change="timerBSetChange">
          <ul>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_18" @change="Disabled('Time_set_messagei_18')">频标选择</el-checkbox>
              </label>
              <el-select size="mini"  v-model="Setting.Time_set_messagei_18.tsm" placeholder="请选择" :disabled="disabledArray.Time_set_messagei_18">
                <el-option label="铷频标" value="铷频标"></el-option>
                <el-option label="外频标" value="外频标"></el-option>
              </el-select>
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_19" @change="Disabled('Time_set_messagei_19')">参考选择</el-checkbox>
              </label>
              <el-select size="mini"  v-model="Setting.Time_set_messagei_19.tsm" placeholder="请选择" :disabled="disabledArray.Time_set_messagei_19">
                <el-option label="10MHz" value="10MHz"></el-option>
                <el-option label="1PPS-2" value="1PPS-2"></el-option>
                <el-option label="1PPS-1" value="1PPS-1"></el-option>
              </el-select>
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_20" @change="Disabled('Time_set_messagei_20')">时钟模式</el-checkbox>
              </label>
              <el-select size="mini"  v-model="Setting.Time_set_messagei_20.tsm" placeholder="请选择" :disabled="disabledArray.Time_set_messagei_20">
                <el-option label="自由运行" value="自由运行"></el-option>
                <el-option label="跟踪" value="跟踪"></el-option>
              </el-select>
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_21" @change="Disabled('Time_set_messagei_21')">手动调频</el-checkbox>
              </label>
              <input type="text" v-model="Setting.Time_set_messagei_21.tscon" :disabled="disabledArray.Time_set_messagei_21">
            </li>
          </ul>
        </el-checkbox-group>
      </fieldset>
    </form>
    <form>
      <fieldset>
        <legend>
          <el-checkbox :indeterminate="timerCSet.isIndeterminate" v-model="timerCSet.checked" @change="timerCSetCheckAll">频标B</el-checkbox>
        </legend>
        <el-checkbox-group v-model="timerCSet.checkeds" @change="timerCSetChange">
          <ul>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_22" @change="Disabled('Time_set_messagei_22')">频标选择</el-checkbox>
              </label>
              <el-select size="mini"  v-model="Setting.Time_set_messagei_22.tsm" placeholder="请选择" :disabled="disabledArray.Time_set_messagei_22">
                <el-option label="铷频标" value="铷频标"></el-option>
                <el-option label="外频标" value="外频标"></el-option>
              </el-select>
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_23" @change="Disabled('Time_set_messagei_23')">参考选择</el-checkbox>
              </label>
              <el-select size="mini"  v-model="Setting.Time_set_messagei_23.tsm" placeholder="请选择" :disabled="disabledArray.Time_set_messagei_23">
                <el-option label="10MHz" value="10MHz"></el-option>
                <el-option label="1PPS-2" value="1PPS-2"></el-option>
                <el-option label="1PPS-1" value="1PPS-1"></el-option>
              </el-select>
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_24" @change="Disabled('Time_set_messagei_24')">时钟模式</el-checkbox>
              </label>
              <el-select size="mini"  v-model="Setting.Time_set_messagei_24.tsm" placeholder="请选择" :disabled="disabledArray.Time_set_messagei_24">
                <el-option label="自由运行" value="自由运行"></el-option>
                <el-option label="跟踪" value="跟踪"></el-option>
              </el-select>
            </li>
            <li class="li-span-2">
              <label>
                <el-checkbox label="Time_set_messagei_25" @change="Disabled('Time_set_messagei_25')">手动调频</el-checkbox>
              </label>
              <input type="text" v-model="Setting.Time_set_messagei_25.tscon" :disabled="disabledArray.Time_set_messagei_25">
            </li>
          </ul>
        </el-checkbox-group>
      </fieldset>
    </form>
    <div slot="footer" class="dialog-footer" style="text-align: center">
      <el-button type="primary" @click="save">保 存</el-button>
      <el-button @click="modalClose">取 消</el-button>
    </div>
  </div>
</template>

<script>
import $time from '../assets/lib/Time'
const timerSetOptions = [
  'Time_set_messagei_6',
  'Time_set_messagei_7',
  'Time_set_messagei_8',
  'Time_set_messagei_9',
  'Time_set_messagei_10',
  'Time_set_messagei_11',
  'Time_set_messagei_12',
  'Time_set_messagei_13'
]
const timerASetOptions = [
  'Time_set_messagei_14',
  'Time_set_messagei_15',
  'Time_set_messagei_16',
  'Time_set_messagei_17'
]
const timerBSetOptions = [
  'Time_set_messagei_18',
  'Time_set_messagei_19',
  'Time_set_messagei_20',
  'Time_set_messagei_21'
]
const timerCSetOptions = [
  'Time_set_messagei_22',
  'Time_set_messagei_23',
  'Time_set_messagei_24',
  'Time_set_messagei_25'
]
export default {
  name: 'timeSwitching_modal',
  data () {
    return {
      disabledArray: {
        Time_set_messagei_6: true,
        Time_set_messagei_7: true,
        Time_set_messagei_8: true,
        Time_set_messagei_9: true,
        Time_set_messagei_10: true,
        Time_set_messagei_11: true,
        Time_set_messagei_12: true,
        Time_set_messagei_13: true,
        Time_set_messagei_14: true,
        Time_set_messagei_15: true,
        Time_set_messagei_16: true,
        Time_set_messagei_17: true,
        Time_set_messagei_18: true,
        Time_set_messagei_19: true,
        Time_set_messagei_20: true,
        Time_set_messagei_21: true,
        Time_set_messagei_22: true,
        Time_set_messagei_23: true,
        Time_set_messagei_24: true,
        Time_set_messagei_25: true
      },
      timerSet: {
        isIndeterminate: false,
        checked: false,
        checkeds: [],
        struct: {
          Time_set_messagei_6: {},
          Time_set_messagei_7: {},
          Time_set_messagei_8: {},
          Time_set_messagei_9: {},
          Time_set_messagei_10: {},
          Time_set_messagei_11: {},
          Time_set_messagei_12: {},
          Time_set_messagei_13: {}
        }
      },
      timerASet: {
        isIndeterminate: false,
        checked: false,
        checkeds: [],
        struct: {
          Time_set_messagei_14: {},
          Time_set_messagei_15: {},
          Time_set_messagei_16: {},
          Time_set_messagei_17: {}
        }
      },
      timerBSet: {
        isIndeterminate: false,
        checked: false,
        checkeds: [],
        struct: {
          Time_set_messagei_18: {},
          Time_set_messagei_19: {},
          Time_set_messagei_20: {},
          Time_set_messagei_21: {}
        }
      },
      timerCSet: {
        isIndeterminate: false,
        checked: false,
        checkeds: [],
        struct: {
          Time_set_messagei_22: {},
          Time_set_messagei_23: {},
          Time_set_messagei_24: {},
          Time_set_messagei_25: {}
        }
      },
      Setting: {
        Time_set_messagei_6: {
          tscon: ''
        },
        Time_set_messagei_7: {
          tscon: ''
        },
        Time_set_messagei_8: {
          tscon: ''
        },
        Time_set_messagei_9: {
          tscon: ''
        },
        Time_set_messagei_10: {
          tscon: ''
        },
        Time_set_messagei_11: {
          tscon: ''
        },
        Time_set_messagei_12: {
          tscon: ''
        },
        Time_set_messagei_13: {
          tscon: ''
        },
        Time_set_messagei_14: {
          tsm: ''
        },
        Time_set_messagei_15: {
          tsm: ''
        },
        Time_set_messagei_16: {
          tsm: ''
        },
        Time_set_messagei_17: {
          tscon: ''
        },
        Time_set_messagei_18: {
          tsm: ''
        },
        Time_set_messagei_19: {
          tsm: ''
        },
        Time_set_messagei_20: {
          tsm: ''
        },
        Time_set_messagei_21: {
          tscon: ''
        },
        Time_set_messagei_22: {
          tsm: ''
        },
        Time_set_messagei_23: {
          tsm: ''
        },
        Time_set_messagei_24: {
          tsm: ''
        },
        Time_set_messagei_25: {
          tscon: ''
        }
      },
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
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
      let $ws = this.$ws
      let self = this
      let settingData = {}
      if (this.timerSet.checked) {
        for (let key in this.timerSet.struct) {
          settingData[key] = this.Setting[key]
        }
      } else {
        for (let i = 0; i < this.timerSet.checkeds.length; i++) {
          let key = this.timerSet.checkeds[i]
          settingData[key] = this.Setting[key]
        }
      }
      if (this.timerASet.checked) {
        for (let key in this.timerASet.struct) {
          settingData[key] = this.Setting[key]
        }
      } else {
        for (let i = 0; i < this.timerASet.checkeds.length; i++) {
          let key = this.timerASet.checkeds[i]
          settingData[key] = this.Setting[key]
        }
      }
      if (this.timerBSet.checked) {
        for (let key in this.timerBSet.struct) {
          settingData[key] = this.Setting[key]
        }
      } else {
        for (let i = 0; i < this.timerBSet.checkeds.length; i++) {
          let key = this.timerBSet.checkeds[i]
          settingData[key] = this.Setting[key]
        }
      }
      if (this.timerCSet.checked) {
        for (let key in this.timerCSet.struct) {
          settingData[key] = this.Setting[key]
        }
      } else {
        for (let i = 0; i < this.timerCSet.checkeds.length; i++) {
          let key = this.timerCSet.checkeds[i]
          settingData[key] = this.Setting[key]
        }
      }
      // 把数据写成byte格式发给后端
      $time.writeData(this.structSet, settingData, (data) => {
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
    modalClose () {
      this.$store.commit('modal', {switch: false})
    },
    // 时钟模式
    timerSetCheckAll (val) {
      this.timerSet.checkeds = val ? timerSetOptions : []
      this.isIndeterminate = false
      this.DisabledArray(this.timerSet.checkeds)
    },
    timerSetChange (value) {
      let checkedCount = value.length
      this.timerSet.checked = checkedCount === timerSetOptions.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < timerSetOptions.length
    },
    // 频标A
    timerASetCheckAll (val) {
      this.timerASet.checkeds = val ? timerASetOptions : []
      this.isIndeterminate = false
      this.DisabledArray(this.timerASet.checkeds)
    },
    timerASetChange (value) {
      let checkedCount = value.length
      this.timerASet.checked = checkedCount === timerASetOptions.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < timerASetOptions.length
    },
    // 频标B
    timerBSetCheckAll (val) {
      this.timerBSet.checkeds = val ? timerBSetOptions : []
      this.isIndeterminate = false
      this.DisabledArray(this.timerBSet.checkeds)
    },
    timerBSetChange (value) {
      let checkedCount = value.length
      this.timerBSet.checked = checkedCount === timerBSetOptions.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < timerBSetOptions.length
    },
    // 频标C
    timerCSetCheckAll (val) {
      this.timerCSet.checkeds = val ? timerCSetOptions : []
      this.isIndeterminate = false
      this.DisabledArray(this.timerCSet.checkeds)
    },
    timerCSetChange (value) {
      let checkedCount = value.length
      this.timerCSet.checked = checkedCount === timerCSetOptions.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < timerCSetOptions.length
    },
    DisabledArray (array) {
      if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
          let key = array[i]
          this.disabledArray[key] = false
        }
      } else {
        for (let key in this.disabledArray) {
          this.disabledArray[key] = true
        }
      }
    },
    Disabled (value) {
      this.disabledArray[value] = this.disabledArray[value] ? false : true
    }
  }
}
</script>
