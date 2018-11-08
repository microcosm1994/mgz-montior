import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
// 设备机柜图
import flow from '@/components/flow'
import cabinetMap from '@/components/cabinetMap'
// 站间分系统
import zj from '@/components/zj'
import lineControl from '@/components/lineControl'
import C200Switch from '@/components/C200Switch'
import C200Server from '@/components/C200Server'
import cpdUp from '@/components/cpdUp'
import cpdBottom from '@/components/cpdBottom'
import cpdSend from '@/components/cpdSend'
import cpdRecve from '@/components/cpdRecve'
import StationInter from '@/components/StationInter'
import receiveWeitong from '@/components/receiveWeitong'
import sendWeitong from '@/components/sendWeitong'
// 星地分系统
import xd from '@/components/xd'
import kaUp from '@/components/kaUp'
import kaBottom from '@/components/kaBottom'
import kaSend from '@/components/kaSend'
import kaRecve from '@/components/kaRecve'
import EmitFrequency from '@/components/EmitFrequency'
import CenterFrequency from '@/components/CenterFrequency'
import beamProcessor from '@/components/beamProcessor'
import kaBaseBandSend from '@/components/kaBaseBand_Send'
import kaBaseBandRecve from '@/components/kaBaseBand_Recve'
import kaxj from '@/components/kaxj'
// 数据处理与监控分系统
import sj from '@/components/sj'
import monitor from '@/components/monitor'
import serviceComputer from '@/components/serviceComputer'
import sqlComputer from '@/components/sqlComputer'
// 时频分系统
import sp from '@/components/sp'
import timeSwitching from '@/components/timeSwitching'
// 机电平台及供电分系统
import gd from '@/components/gd'
import GNSS from '@/components/GNSS'
// 设备状态
import deviceStatus from '@/components/deviceStatus'
// 原始报文查询
import messageSearch from '@/components/messageSearch'
// 用户管理
import users from '@/components/users/users'
import userList from '@/components/users/userList'
// 宏配置
import macro from '@/components/macro'
import macroList from '@/components/macroList'
import macroEdit from '@/components/macroEdit'
// 故障树
import errorTree from '@/components/errorTree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect: '/flow',
      children: [
        {
          path: '/flow',
          name: 'flow',
          component: flow
        },
        {
          path: '/cabinetMap',
          name: 'cabinetMap',
          component: cabinetMap
        },
        {
          path: '/zj',
          name: 'zj',
          component: zj,
          children: [
            {
              path: '/',
              name: 'lineControl',
              component: lineControl,
              params: {name: 'A'}
            },
            {
              path: '/zj/C200Switch',
              name: 'C200Switch',
              component: C200Switch
            },
            {
              path: '/zj/C200Server',
              name: 'C200Server',
              component: C200Server
            },
            {
              path: '/zj/cpdUp',
              name: 'cpdUp',
              component: cpdUp
            }, {
              path: '/zj/cpdBottom',
              name: 'cpdBottom',
              component: cpdBottom
            }, {
              path: '/zj/cpdSend',
              name: 'cpdSend',
              component: cpdSend
            }, {
              path: '/zj/cpdRecve',
              name: 'cpdRecve',
              component: cpdRecve
            }, {
              path: '/zj/StationInter',
              name: 'StationInter',
              component: StationInter
            },
            {
              path: '/zj/sendWeitong',
              name: 'sendWeitong',
              component: sendWeitong
            },
            {
              path: '/zj/receiveWeitong',
              name: 'receiveWeitong',
              component: receiveWeitong
            }
          ]
        },
        {
          path: '/xd',
          name: 'xd',
          component: xd,
          children: [
            {
              path: '/xd',
              name: 'beamProcessor',
              component: beamProcessor
            },
            {
              path: '/xd/kaUp',
              name: 'kaUp',
              component: kaUp
            }, {
              path: '/xd/kaBottom',
              name: 'kaBottom',
              component: kaBottom
            }, {
              path: '/xd/kaSend',
              name: 'kaSend',
              component: kaSend
            }, {
              path: '/xd/kaRecve',
              name: 'kaRecve',
              component: kaRecve
            }, {
              path: '/xd/EmitFrequency',
              name: 'EmitFrequency',
              component: EmitFrequency
            }, {
              path: '/xd/CenterFrequency',
              name: 'CenterFrequency',
              component: CenterFrequency
            },
            {
              path: '/xd/kaBaseBandSend',
              name: 'kaBaseBandSend',
              component: kaBaseBandSend
            }, {
              path: '/xd/kaBaseBandRecve',
              name: 'kaBaseBandRecve',
              component: kaBaseBandRecve
            }, {
              path: '/xd/kaxj',
              name: 'kaxj',
              component: kaxj
            }]
        },
        {
          path: '/sj',
          name: 'sj',
          component: sj,
          children: [
            {
              path: '/',
              name: 'monitor',
              component: monitor
            }, {
              path: '/sj/serviceComputer',
              name: 'serviceComputer',
              component: serviceComputer
            }, {
              path: '/sj/sqlComputer',
              name: 'sqlComputer',
              component: sqlComputer
            },
            {
              path: '/sj/messageSearch',
              name: 'messageSearch',
              component: messageSearch
            }
          ]
        },
        {
          path: '/sp',
          name: 'sp',
          component: sp,
          children: [
            {
              path: '/',
              name: 'timeSwitching',
              component: timeSwitching
            }
          ]
        },
        {
          path: '/gd',
          name: 'gd',
          component: gd,
          children: [
            {
              path: '/',
              name: 'GNSS',
              component: GNSS
            }
          ]
        },
        {
          path: '/deviceStatus',
          name: 'deviceStatus',
          component: deviceStatus
        },
        {
          path: '/macro',
          name: 'macro',
          component: macro,
          children: [
            {
              path: '/',
              name: 'macroList',
              component: macroList
            },
            {
              path: '/macroEdit',
              name: 'macroEdit',
              component: macroEdit
            }
          ]
        },
        {
          path: '/errorTree',
          name: 'errorTree',
          component: errorTree
        },
        {
          name: 'users',
          path: '/users',
          component: users,
          children: [
            {
              name: 'userList',
              path: '/',
              component: userList
            }
          ]
        }
      ]
    }
  ]
})
