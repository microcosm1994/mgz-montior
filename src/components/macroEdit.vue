<template>
  <el-container>
    <el-header height="70px">
      <div class="macroEdit-header">
        <div class="macroEdit-header-title">
          <label>任务描述:</label>
          <input type="text" v-model="macroInfo.describe" disabled>
        </div>
        <div class="macroEdit-header-title">
          <label>任务代号:</label>
          <input type="text" v-model="macroInfo.taskCode" disabled>
        </div>
        <div class="macroEdit-header-title">
          <label>任务标识:</label>
          <input type="text" v-model="macroInfo.taskMark" disabled>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <div class="macroEdit-sidebar">
          <el-tree
            :data="data"
            ref="tree"
            :props="defaultProps"
            @node-click="getDevice"
            @check-change="getDevice"
            node-key="id"></el-tree>
        </div>
      </el-aside>
      <el-main>
        <div class="macroEdit-container">
          <component v-bind:is="currentTabComponent"></component>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import sendWeitong_modal from './sendWeitong_modal'
import receiveWeitong_modal from './receiveWeitong_modal'
import kaBaseBand_Recve_modal from './kaBaseBand_Recve_modal'
import kaBaseBand_Send_modal from './kaBaseBand_Send_modal'
export default {
  name: 'macroEdit',
  data () {
    return {
      modalName: 'sendWeitong_modal', // 初始组件名称
      deviceName: '', // 设备名称
      data: [{ // 树形菜单数据
        label: '卫通发射基带一',
        id: '16',
        deviceName: 'WT_send_A',
        deviceType: 'A',
        modalName: 'sendWeitong_modal'
      }, {
        label: '卫通发射基带二',
        id: '17',
        deviceName: 'WT_send_B',
        deviceType: 'B',
        modalName: 'sendWeitong_modal'
      }, {
        label: '卫通接收基带一',
        id: '18',
        deviceName: 'WT_recv_A',
        deviceType: 'A',
        modalName: 'receiveWeitong_modal'
      }, {
        label: '卫通接收基带二',
        id: '19',
        deviceName: 'WT_recv_B',
        deviceType: 'B',
        modalName: 'receiveWeitong_modal'
      }, {
        label: 'Ka发射基带一',
        id: '3',
        deviceName: 'Ka_send_A',
        deviceType: 'A',
        modalName: 'kaBaseBand_Send_modal'
      }, {
        label: 'Ka发射基带二',
        id: '4',
        deviceName: 'Ka_send_B',
        deviceType: 'B',
        modalName: 'kaBaseBand_Send_modal'
      }, {
        label: 'Ka接收基带一',
        id: '5',
        deviceName: 'Ka_recv_A',
        deviceType: 'A',
        modalName: 'kaBaseBand_Recve_modal'
      }, {
        label: 'Ka接收基带二',
        id: '6',
        deviceName: 'Ka_recv_B',
        deviceType: 'B',
        modalName: 'kaBaseBand_Recve_modal'
      }, {
        label: '↩ 返回列表',
        path: '/macro'
      }],
      defaultProps: {
        label: 'label'
      }
    }
  },
  components: {
    sendWeitong_modal,
    receiveWeitong_modal,
    kaBaseBand_Recve_modal,
    kaBaseBand_Send_modal
  },
  computed: {
    macroInfo: function () {
      let self = this
      let query = {}
      // 如果没有宏信息就返回宏列表
      if (Object.keys(this.$route.query).length === 0) {
        self.$router.push({path: '/macro'})
      }
      query.macroName = this.$route.query.macroName // 宏名称
      query.id = this.$route.query.id // 宏id
      query.describe = this.$route.query.describe // 宏描述
      query.taskCode = this.$route.query.taskCode // 宏代号
      query.taskMark = this.$route.query.taskMark // 宏标识
      query.name = this.$route.query.taskMark
      self.$router.push({query: query})
      return this.$route.query
    },
    currentTabComponent: function () {
      return this.modalName
    },
    device: function () {
      let deviceName = this.deviceName
      return this.$device[deviceName]
    },
    structGet: function () {
      let keyArray = []
      let detailed = []
      let id = this.device.id
      let structGetArray = this.device.structGetArray
      for (let i = 0; i < structGetArray.length; i++) {
        let key = structGetArray[i]
        keyArray.push(this.device.struct[key].key)
        // detailed[key] = this.device.struct[key]
        detailed.push({
          name: key,
          data: this.device.struct[key]
        })
      }
      return {
        id: id,
        keyArray: keyArray,
        detailed: detailed
      }
    },
    structSet: function () {
      let keyArray = []
      let detailed = []
      let id = this.device.id
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
        keyArray: keyArray,
        detailed: detailed
      }
    },
    Socket: function () {
      return this.$store.state.Socket
    }
  },
  watch: {
    Socket: function (n, o) {
      if (n !== null) {
        this.setCheckedKeys()
      }
    }
  },
  mounted () {
    this.setCheckedKeys()
  },
  methods: {
    getDevice (data, a, b) {
      if (data.path) {
        this.$router.push({path: '/macro'})
      }
      let query = {}
      query.name = this.macroInfo.name
      query.id = this.macroInfo.id
      query.describe = this.macroInfo.describe
      query.taskCode = this.macroInfo.taskCode
      query.taskMark = this.macroInfo.taskMark
      query.deviceId = data.id
      this.modalName = data.modalName
      this.deviceName = data.deviceName
      this.$store.commit('modal', {type: 1})
      this.$router.push({query: query})
      this.getMacro(data)
    },
    getMacro (data) {
      const Socket = this.Socket
      let self = this
      let $utils = this.$utils
      let $ws = this.$ws
      let url = '/api/macroFile/quaryMacroFile'
      let macroId = this.macroInfo.id // 宏id
      let deviceId = data.id // 设备id
      self.$store.commit('device', self.device)
      if (Socket) {
        // 请求数据
        $ws.sendMacro(Socket, url, {macroId, deviceId})
        // 接收数据
        Socket.onmessage = function (response) {
          $utils.readData(response.data, self.structSet, function (data) {
            self.$store.commit('components_data', data.data)
          })
        }
      } else {
        self.$store.commit('Socket', null)
      }
    },
    setCheckedKeys () {
      this.$refs.tree.setCheckedKeys([16])
      this.$refs.tree.setCurrentKey(16)
    }
  }
}
</script>

<style>
  @import '../assets/css/macroEdit.css';
</style>
