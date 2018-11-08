import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    Socket: null, // websocket实例对象
    User: {}, // 用户信息
    components_data: {}, // 组件之间的数据传输
    // 模态框开启/关闭
    modal: {
      switch: false, // 模态框开启/关闭
      type: 0 // 模态框类型，0为设备参数下发，1为设备宏配置
    },
    device: null, // 设备协议数据,
    /**
     * 设备在线状态数据
     * @0:在线
     * @1:离线
     * */
    deviceOnLine: {
      ServerA: 1,
      ServerB: 1,
      Station_UP_1: 1,
      Station_UP_2: 1,
      Station_DOWN_1: 1,
      Station_DOWN_2: 1,
      StationRecvZero: 1,
      StationSendZero: 1,
      C200_switch: 1,
      C200_common: 1,
      WT_send_A: 1,
      WT_send_B: 1,
      WT_recv_A: 1,
      WT_recv_B: 1,
      StationInter: 1,
      WAVE: 1,
      StarGround_UP_1: 1,
      StarGround_UP_2: 1,
      StarGround_DOWN_1: 1,
      StarGround_DOWN_2: 1,
      SendZero: 1,
      RecvZero: 1,
      EmitFrequency: 1,
      CenterFrequency: 1,
      Ka_send_A: 1,
      Ka_send_B: 1,
      Ka_recv_A: 1,
      Ka_recv_B: 1,
      StartLink: 1,
      Timer: 1,
      GNSS: 1
    }
  },
  mutations: {
    Socket (state, obj) {
      state.Socket = obj
    },
    User (state, obj) {
      state.User = obj
    },
    components_data (state, obj) {
      state.components_data = obj
    },
    modal (state, obj) {
      for (let key in obj) {
        if (obj[key] !== '') {
          state.modal[key] = obj[key]
        }
      }
    },
    device (state, obj) {
      state.device = obj
    },
    deviceOnLine (state, obj) {
      for (let key in obj) {
        state.deviceOnLine[key] = obj[key]
      }
    }
  }
})
