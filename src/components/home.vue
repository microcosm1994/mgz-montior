<template>
  <div class="home">
    <heads></heads>
    <div class="sidebar" v-bind:class="{open: isCollapse, close: !isCollapse}">
      <div class="closeMenu" @click="isCollapse = !isCollapse">
        {{isCollapse? '〈': '〉'}}
      </div>
      <div class="sidebar-box" v-bind:class="{openBox: isCollapse, closeBox: !isCollapse}">
        <div style="overflow: auto;width: 106%;height: 100%;">
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" :highlight-current="true" :default-expand-all="false" :expand-on-click-node="true"></el-tree>
        </div>
      </div>
    </div>
    <div class="container" ref="container">
      <div class="container-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import heads from './heads.vue'
export default {
  name: 'home',
  data () {
    return {
      loadingInstance: null, // loading遮罩实例
      timer_overtime: null, // 返回登陆定时器
      isCollapse: true,
      data: [{
        label: '设备流图',
        path: '/flow'
      }, {
        label: '设备机柜图',
        path: '/cabinetMap'
      },
      {
        label: '设备在线状态',
        path: '/deviceStatus'
      },
      {
        label: '站间测量数传分系统',
        path: '/zj',
        data: {
          name: 'A'
        },
        children: [{
          label: '伺服设备(A)',
          path: '/zj',
          data: {
            name: 'A'
          }
        }, {
          label: '伺服设备(B)',
          path: '/zj',
          data: {
            name: 'B'
          }
        }, {
          label: 'C频段上变频器(A)',
          path: '/zj/cpdUp',
          data: {
            name: 'A'
          }
        }, {
          label: 'C频段上变频器(B)',
          path: '/zj/cpdUp',
          data: {
            name: 'B'
          }
        }, {
          label: 'C频段下变频器(A)',
          path: '/zj/cpdBottom',
          data: {
            name: 'A'
          }
        }, {
          label: 'C频段下变频器(B)',
          path: '/zj/cpdBottom',
          data: {
            name: 'B'
          }
        }, {
          label: 'C频段发射校零变频器',
          path: '/zj/cpdSend'
        }, {
          label: 'C频段接收校零变频器',
          path: '/zj/cpdRecve'
        }, {
          label: 'C波段200W功放开关',
          path: '/zj/C200Switch'
        }, {
          label: 'C波段200W功放网络',
          path: '/zj/C200Server'
        }, {
          label: '站间中频分路组合',
          path: '/zj/StationInter'
        }, {
          label: '卫通发射基带(A)',
          path: '/zj/sendWeitong',
          data: {
            name: 'A'
          }
        }, {
          label: '卫通发射基带(B)',
          path: '/zj/sendWeitong',
          data: {
            name: 'B'
          }
        }, {
          label: '卫通接收基带(A)',
          path: '/zj/receiveWeitong',
          data: {
            name: 'A'
          }
        }, {
          label: '卫通接收基带(B)',
          path: '/zj/receiveWeitong',
          data: {
            name: 'B'
          }
        }]
      },
      {
        label: '星地测量数传分系统',
        path: '/xd',
        children: [{
          label: '波控处理机',
          path: '/xd'
        }, {
          label: 'ka频段上变频器(A)',
          path: '/xd/kaUp',
          data: {
            name: 'A'
          }
        }, {
          label: 'ka频段上变频器(B)',
          path: '/xd/kaUp',
          data: {
            name: 'B'
          }
        }, {
          label: 'ka频段下变频器(A)',
          path: '/xd/kaBottom',
          data: {
            name: 'A'
          }
        }, {
          label: 'ka频段下变频器(B)',
          path: '/xd/kaBottom',
          data: {
            name: 'B'
          }
        }, {
          label: 'ka频段发射校零变频器',
          path: '/xd/kaSend'
        }, {
          label: 'ka频段接收校零变频器',
          path: '/xd/kaRecve'
        }, {
          label: '星地射频分路组合',
          path: '/xd/EmitFrequency'
        }, {
          label: '星地中频分路组合',
          path: '/xd/CenterFrequency'
        }, {
          label: 'ka发射基带(A)',
          path: '/xd/kaBaseBandSend',
          data: {
            name: 'A'
          }
        }, {
          label: 'ka发射基带(B)',
          path: '/xd/kaBaseBandSend',
          data: {
            name: 'B'
          }
        }, {
          label: 'ka接收基带(A)',
          path: '/xd/kaBaseBandRecve',
          data: {
            name: 'A'
          }
        }, {
          label: 'ka接收基带(B)',
          path: '/xd/kaBaseBandRecve',
          data: {
            name: 'B'
          }
        }, {
          label: '星间链路模拟源',
          path: '/xd/kaxj'
        }]
      },
      {
        label: '数据处理与监控分系统',
        path: '/sj',
        data: {
          name: 'A'
        },
        children: [{
          label: '监控计算机(A)',
          path: '/sj/',
          data: {
            name: 'A'
          }
        }, {
          label: '监控计算机(B)',
          path: '/sj/',
          data: {
            name: 'B'
          }
        }, {
          label: '业务处理计算机(A)',
          path: '/sj/serviceComputer',
          data: {
            name: 'A'
          }
        }, {
          label: '业务处理计算机(B)',
          path: '/sj/serviceComputer',
          data: {
            name: 'B'
          }
        }, {
          label: '数据处理计算机(A)',
          path: '/sj/sqlComputer',
          data: {
            name: 'A'
          }
        }, {
          label: '数据处理计算机(B)',
          path: '/sj/sqlComputer',
          data: {
            name: 'B'
          }
        }, {
          label: '原始报文查询',
          path: '/sj/messageSearch'
        }]
      },
      {
        label: '时频分系统',
        path: '/sp',
        data: {
          name: 'A'
        },
        children: [{
          label: '时标切换器(A)',
          path: '/sp',
          data: {
            name: 'A'
          }
        }, {
          label: '时标切换器(B)',
          path: '/sp',
          data: {
            name: 'B'
          }
        }]
      },
      {
        label: '机动平台即供电分系统',
        path: '/gd',
        children: [{
          label: 'GNSS侧向定位接收机',
          path: '/gd'
        }]
      },
      {
        label: '用户管理',
        path: '/users',
        children: [
          {
            label: '用户列表',
            path: '/users'
          }
        ]
      },
      {
        label: '宏配置',
        path: '/macro'
      },
      {
        label: '故障树',
        path: '/errorTree'
      }],
      defaultProps: {
        children: 'children',
        label: 'label',
        path: 'path'
      }
    }
  },
  components: {
    heads
  },
  computed: {
    Socket: function () {
      let status = this.$store.state.Socket
      if (status === null) {
        this.testSocket(status)
      }
      return status
    }
  },
  watch: {
    Socket: function (n, o) {
      this.testSocket(n)
    }
  },
  mounted () {
    // const Socket = this.Socket
    // Socket.onclose = () => {
    //
    // }
  },
  methods: {
    handleNodeClick (data) {
      this.$router.push({path: data.path, query: data.data})
      window.location.href = window.location.href
    },
    handleOpen () {
      this.$refs.sidebar.style.width = '0px'
      this.$refs.container.style.paddingLeft = '0'
    },
    // 检测Socket,
    testSocket (temp) {
      let self = this
      let $ws = this.$ws
      let form = {
        username: this.$cookies.get('u'),
        password: this.$cookies.get('p')
      }
      this.loadingOpen()
      // 如果Socket为null则重新连接
      if (temp === null) {
        $ws.reconnect(this.$Socket_url, form, function (Socket) {
          self.$store.commit('Socket', Socket)
        })
        self.overtime(temp)
      } else {
        // 如果不是null就关闭遮罩并清楚定时器
        self.loadingCloase()
        clearTimeout(self.timer_overtime)
        self.timer_overtime = null
      }
    },
    loadingOpen () {
      // 开启Loading遮罩
      this.loadingInstance = this.$loading(this.$elementUI_loadingOption)
    },
    loadingCloase () {
      if (this.loadingInstance) {
        this.loadingInstance.close()
      }
    },
    // 重新连接超时返回登陆页
    overtime (Socket) {
      let self = this
      if (!Socket) {
        this.timer_overtime = setTimeout(function () {
          self.loadingCloase()
          self.$router.push({path: '/'})
          clearTimeout(self.timer_overtime)
        }, 10000)
      }
    }
  },
  // 导航守卫，当前路由改变时执行
  beforeRouteUpdate (to, from, next) {
    if (this.timer_overtime > 0) {
      clearTimeout(this.timer_overtime)
      this.timer_overtime = null
    }
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import "../assets/css/home.css";
</style>
