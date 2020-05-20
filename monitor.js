import store from '../../store/index'
import { Message } from 'element-ui'

export default {
  $store: store,
  $message: Message,
  onLine (obj) {
    // 所有设备中文名字
    let nameObj = {
      ServerA: '伺服设备(A)',
      ServerB: '伺服设备(B)',
      Station_UP_1: 'C频段上变频器(A)',
      Station_UP_2: 'C频段上变频器(B)',
      Station_DOWN_1: 'C频段下变频器(A)',
      Station_DOWN_2: 'C频段下变频器(B)',
      StationRecvZero: 'C频段发射校零变频器',
      StationSendZero: 'C频段接收校零变频器',
      C200_switch: 'C波段200W功放开关',
      C200_common: 'C波段200W功放网络',
      WT_send_A: '卫通发射基带(A)',
      WT_send_B: '卫通发射基带(B)',
      WT_recv_A: '卫通接收基带(A)',
      WT_recv_B: '卫通接收基带(B)',
      StationInter: '站间中频分路组合',
      WAVE: '波控处理机',
      StarGround_UP_1: 'ka频段上变频器(A)',
      StarGround_UP_2: 'ka频段上变频器(B)',
      StarGround_DOWN_1: 'ka频段下变频器(A)',
      StarGround_DOWN_2: 'ka频段下变频器(B)',
      SendZero: 'ka频段发射校零变频器',
      RecvZero: 'ka频段接收校零变频器',
      EmitFrequency: '星地射频分路组合',
      CenterFrequency: '星地中频分路组合',
      Ka_send_A: 'ka发射基带(A)',
      Ka_send_B: 'ka发射基带(B)',
      Ka_recv_A: 'ka接收基带(A)',
      Ka_recv_B: 'ka接收基带(B)',
      StartLink: '星间链路模拟源',
      Timer: '时标切换器',
      GNSS: 'GNSS侧向定位接收机'
    }
    for (let key in obj.deviceOnLine) {
      if (obj.deviceOnLine[key] - 0 === 1) {
        this.$message({
          type: 'error',
          message: nameObj[key] + '设备离线'
        })
      }
    }
    // 更新vuex中的设备在线状态
    this.$store.commit('deviceOnLine', obj.deviceOnLine)
  }
}
