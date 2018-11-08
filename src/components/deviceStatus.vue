<template>
  <div class="deviceStatus">
    <el-tabs type="border-card">
      <el-tab-pane label= '设备在线状态'>
        <el-table
          :data="tableDataChange"
          border
          size="small"
          :span-method="cellMerge"
          style="width: 100%">
          <el-table-column
            width="200">
            <el-table-column
              prop="label"
              align="center"
              label="设备">
            </el-table-column>
            <el-table-column
              prop="deviceCName"
              align="center"
              label="设备名称">
            </el-table-column>
          </el-table-column>
          <el-table-column
            prop="onLine"
            align="center"
            :formatter="filterOnLine"
            label="在线/离线">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="设备状态"
            align="center"
            width="200">
            <template slot-scope="scope">
              <span style="margin: 0 auto;" class="status-offline" :class="{'status-success': scope.row.onLine === 0, 'status-error': scope.row.onLine === 1}"></span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'deviceStatus',
  data () {
    return {
      url: '/api/cplus/onlinDevice',
      timer_overtime: null, // 返回登陆定时器
      tableData: [
        {
          label: '伺服设备',
          deviceCName: '伺服设备（A）', // 设备中文名
          deviceEName: 'ServerA', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: '伺服设备',
          deviceCName: '伺服设备（B）', // 设备中文名
          deviceEName: 'ServerB', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'C频段',
          deviceCName: 'C频段上变频器（A）', // 设备中文名
          deviceEName: 'Station_UP_1', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'C频段',
          deviceCName: 'C频段上变频器（B）', // 设备中文名
          deviceEName: 'Station_UP_2', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'C频段',
          deviceCName: 'C频段下变频器（A）', // 设备中文名
          deviceEName: 'Station_DOWN_1', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'C频段',
          deviceCName: 'C频段下变频器（B）', // 设备中文名
          deviceEName: 'Station_DOWN_2', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'C频段',
          deviceCName: 'C频段接收校零变频器', // 设备中文名
          deviceEName: 'StationRecvZero', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'C频段',
          deviceCName: 'C频段发射校零变频器', // 设备中文名
          deviceEName: 'StationSendZero', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'C波段',
          deviceCName: 'C波段200W功放开关', // 设备中文名
          deviceEName: 'C200_switch', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'C波段',
          deviceCName: 'C波段200W功放网络', // 设备中文名
          deviceEName: 'C200_common', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: '卫通基带',
          deviceCName: '卫通发射基带（A）', // 设备中文名
          deviceEName: 'WT_send_A', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: '卫通基带',
          deviceCName: '卫通发射基带（B）', // 设备中文名
          deviceEName: 'WT_send_B', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: '卫通基带',
          deviceCName: '卫通接收基带（A）', // 设备中文名
          deviceEName: 'WT_recv_A', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: '卫通基带',
          deviceCName: '卫通接收基带（B）', // 设备中文名
          deviceEName: 'WT_recv_B', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: '站间分路组合',
          deviceCName: '站间中频分路组合', // 设备中文名
          deviceEName: 'StationInter', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: '波控器',
          deviceCName: '波控处理机', // 设备中文名
          deviceEName: 'WAVE', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'ka变频器',
          deviceCName: 'ka上变频器（A）', // 设备中文名
          deviceEName: 'StarGround_UP_1', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'ka变频器',
          deviceCName: 'ka上变频器(B)', // 设备中文名
          deviceEName: 'StarGround_UP_2', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'ka变频器',
          deviceCName: 'ka下变频器（A）', // 设备中文名
          deviceEName: 'StarGround_DOWN_1', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'ka变频器',
          deviceCName: 'ka下变频器（B）', // 设备中文名
          deviceEName: 'StarGround_DOWN_2', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'ka变频器',
          deviceCName: 'ka发射校零变频器', // 设备中文名
          deviceEName: 'SendZero', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'ka变频器',
          deviceCName: 'ka接收校零变频器', // 设备中文名
          deviceEName: 'RecvZero', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: '星地分路组合',
          deviceCName: '星地射频分路组合', // 设备中文名
          deviceEName: 'EmitFrequency', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: '星地分路组合',
          deviceCName: '星地中频分路组合', // 设备中文名
          deviceEName: 'CenterFrequency', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'ka基带',
          deviceCName: 'ka发射基带（A）', // 设备中文名
          deviceEName: 'Ka_send_A', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'ka基带',
          deviceCName: 'ka发射基带（B）', // 设备中文名
          deviceEName: 'Ka_send_B', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'ka基带',
          deviceCName: 'ka接收基带（A）', // 设备中文名
          deviceEName: 'Ka_recv_A', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'ka基带',
          deviceCName: 'ka接收基带（B）', // 设备中文名
          deviceEName: 'Ka_recv_B', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: '模拟源',
          deviceCName: '星间链路模拟源', // 设备中文名
          deviceEName: 'StartLink', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: '时频分系统',
          deviceCName: '时标切换器（A）', // 设备中文名
          deviceEName: 'Timer', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: '时频分系统',
          deviceCName: '时标切换器（B）', // 设备中文名
          deviceEName: 'Timer', // 设备英文名
          onLine: 0 // 在线状态
        },
        {
          label: 'GNSS侧向定位接收机',
          deviceCName: 'GNSS侧向定位接收机', // 设备中文名
          deviceEName: 'GNSS', // 设备英文名
          onLine: 0 // 在线状态
        }
      ],
      tableSpanArr: []
    }
  },
  computed: {
    changTitle: function () {
      let data = this.$route.query
      return '卫通接收基带(' + data.name + ')'
    },
    tableDataChange: function () {
      let self = this
      let deviceOnLine = this.$store.state.deviceOnLine
      let tableData = this.tableData
      for (let i = 0; i < tableData.length; i++) {
        let deviceEName = tableData[i].deviceEName
        for (let key in deviceOnLine) {
          if (deviceEName === key) {
            tableData[i].onLine = deviceOnLine[key]
          }
        }
      }
      self.tableData = tableData
      return tableData
    },
    Socket: function () {
      return this.$store.state.Socket
    }
  },
  mounted () {
    this.getSpanArr(this.tableData)
  },
  methods: {
    // 过滤（在线/离线）
    filterOnLine (row) {
      return row.onLine === 0 ? '在线' : '离线'
    },
    getSpanArr (data) {
      let pos = 0
      for (let i = 0; i < data.length; i++) {
        if (i === 0) {
          this.tableSpanArr.push(1)
          pos = 0
        } else {
          // 判断当前元素与上一个元素是否相同
          if (data[i].label === data[i - 1].label) {
            this.tableSpanArr[pos] += 1
            this.tableSpanArr.push(0)
          } else {
            this.tableSpanArr.push(1)
            pos = i
          }
        }
      }
    },
    // 合并单元格
    cellMerge ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const _row = this.tableSpanArr[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/deviceStatus.css';
</style>
