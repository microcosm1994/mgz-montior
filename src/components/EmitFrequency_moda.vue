<template>
  <!--射频分路组合-->
  <div>
    <form>
      <fieldset>
        <legend>参数设置</legend>
        <ul>
          <li class="li-span-2">
            <label>控制模式</label>
            <el-select size="mini" v-model="Setting.EmitFrequency_parameter_setting.State" slot="prepend"  placeholder="请选择">
              <el-option label="本控" value="本控"></el-option>
              <el-option label="分控" value="分控"></el-option>
            </el-select>
          </li>
          <li class="li-span-2">
            <label>有/无线切换开关1</label>
            <el-select size="mini" v-model="Setting.EmitFrequency_parameter_setting.Switch1" slot="prepend"  placeholder="请选择">
              <el-option label="校零效验天线收" value="校零效验天线收"></el-option>
              <el-option label="耦合器2入" value="耦合器2入"></el-option>
              <el-option label="预留输入接口" value="预留输入接口"></el-option>
            </el-select>
          </li>
          <li class="li-span-2">
            <label>主备切换开关1</label>
            <el-select size="mini" v-model="Setting.EmitFrequency_parameter_setting.preparation_Switch1" slot="prepend"  placeholder="请选择">
              <el-option label="Ka上行发A" value="Ka上行发A"></el-option>
              <el-option label="Ka上行发B" value="Ka上行发B"></el-option>
            </el-select>
          </li>
          <li class="li-span-2">
            <label>有/无线切换开关2</label>
            <el-select size="mini" v-model="Setting.EmitFrequency_parameter_setting.Switch2" slot="prepend"  placeholder="请选择">
              <el-option label="校零效验天线发" value="校零效验天线发"></el-option>
              <el-option label="耦合器3发" value="耦合器3发"></el-option>
              <el-option label="预留输出接口" value="预留输出接口"></el-option>
            </el-select>
          </li>
          <li class="li-span-2">
            <label>主备切换开关2</label>
            <el-select size="mini" v-model="Setting.EmitFrequency_parameter_setting.preparation_Switch2" slot="prepend"  placeholder="请选择">
              <el-option label="Ka下行收A" value="Ka下行收A"></el-option>
              <el-option label="ka下行收B" value="ka下行收B"></el-option>
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
export default{
  name: 'RFShunt_modal',
  data () {
    return {
      /* 设置 */
      Setting: {
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
      return this.$device.EmitFrequency
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
      console.log(1)
      const Socket = this.Socket
      let $utils = this.$utils
      let $ws = this.$ws
      let self = this
      // 判断设置数据是否为空
      // for (let item in this.Setting) {
      //   let fields = this.Setting[item]
      //   for (let item1 in fields) {
      //     if (fields[item1] === '') {
      //       console.log(this.Setting)
      //       this.$message({
      //         type: 'error',
      //         message: '请输入参数'
      //       })
      //       return false
      //     }
      //   }
      // }
      // 把数据写成byte格式发给后端
      console.log(this.Setting)
      console.log(1)
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
    modalClose () {
      this.$store.commit('modal', {switch: false})
    }
  }
}
</script>
