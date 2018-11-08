<template>
  <div class="sendWeitong">
    <el-tabs type="border-card">
      <el-tab-pane :label= changTitle>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <!--状态监视-->
          <el-tab-pane label="状态监视" name="first">
            <el-row :gutter="0">
              <el-col :span="21">
                <el-row>
                  <el-col :span="16">
                    <!--发射状态-->
                    <form>
                      <fieldset>
                        <legend>发射参数</legend>
                        <form>
                          <fieldset>
                            <legend>命令快1</legend>
                            <ul style="padding-bottom: 10px;padding-top: 10px;">
                              <li class="li-span-2">
                                <label>调制数据速率</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_Data_rate" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>数据类型选择</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_Data_en" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>调制开关</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_ModeSwitch" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>通道号</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_PRM_number" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>站号</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_StationID" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>信号电频</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_Level" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>LDPC开关</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_LDPC_EN" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>中心频率</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_FREQ_IF" type="text" disabled>
                              </li>
                            </ul>
                          </fieldset>
                        </form>
                        <form>
                          <fieldset>
                            <legend>命令快2</legend>
                            <ul style="padding-bottom: 10px;padding-top: 10px;">
                              <li class="li-span-2">
                                <label>调制数据速率</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_cmd2_Data_rate" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>数据类型选择</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_cmd2_Data_en" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>调制开关</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_cmd2_ModeSwitch" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>通道号</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_cmd2_PRM_number" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>站号</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_cmd2_StationID" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>信号电频</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_cmd2_Level" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>LDPC开关</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_cmd2_LDPC_EN" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>中心频率</label>
                                <input v-model="Status.WT_S_Send_state.TXCommand_cmd1_cmd2_FREQ_IF" type="text" disabled>
                              </li>
                            </ul>
                          </fieldset>
                        </form>
                      </fieldset>
                    </form>
                  </el-col>
                  <el-col :span="8">
                    <!--接收机状态-->
                    <form>
                      <fieldset>
                        <legend>接收机状态</legend>
                        <ul>
                          <li class="li-span-1">
                            <label>伪码锁定</label>
                            <input v-model="Status.WT_S_Recv_state.Pn_lock" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>载波锁定</label>
                            <input v-model="Status.WT_S_Recv_state.Carr_lock" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>位同步锁定</label>
                            <input v-model="Status.WT_S_Recv_state.Bit_lock" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>载波捕获锁定</label>
                            <input v-model="Status.WT_S_Recv_state.Carr_capture" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>载噪比</label>
                            <input v-model="Status.WT_S_Recv_state.C_N0" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>信号幅度</label>
                            <input v-model="Status.WT_S_Recv_state.AmpI" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>载波多普勒</label>
                            <input v-model="Status.WT_S_Recv_state.CarrDopp" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>伪码多普勒</label>
                            <input v-model="Status.WT_S_Recv_state.PNDopp" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>总接收bit数</label>
                            <input v-model="Status.WT_S_Recv_state.Bit_cnt" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>错误bit数</label>
                            <input v-model="Status.WT_S_Recv_state.ErrBit_cnt" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>AGC电压</label>
                            <input v-model="Status.WT_S_Recv_state.AgcVolt" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>帧锁定标志</label>
                            <input v-model="Status.WT_S_Recv_state.Frm_lock" type="text" disabled>
                          </li>
                        </ul>
                      </fieldset>
                    </form>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <!--硬件状态-->
                    <form>
                      <fieldset>
                        <legend>硬件状态</legend>
                        <ul>
                          <li class="li-span-1">
                            <label>计算机通讯状态</label>
                            <span class="status-offline" v-bind:class="Status.WT_S_Hardware_state.base_sta"></span>
                          </li>
                          <li class="li-span-1">
                            <label>参数比对结果状态</label>
                            <span class="status-offline" v-bind:class="Status.WT_S_Hardware_state.para_sta"></span>
                          </li>
                          <li class="li-span-1">
                            <label>基带在线状态</label>
                            <span class="status-offline" v-bind:class="Status.WT_S_Hardware_state.host_slave"></span>
                          </li>
                          <li class="li-span-1">
                            <label>基带工作状态</label>
                            <span class="status-offline" v-bind:class="Status.WT_S_Hardware_state.bb_sta"></span>
                          </li>
                          <li class="li-span-1">
                            <label>供电状态</label>
                            <span class="status-offline" v-bind:class="Status.WT_S_Hardware_state.power_sta"></span>
                          </li>
                          <li class="li-span-1">
                            <label>基带温度</label>
                            <span class="status-offline" v-bind:class="Status.WT_S_Hardware_state.Temprature_sta"></span>
                          </li>
                          <li class="li-span-1">
                            <label>prm模块通讯状态</label>
                            <span class="status-offline" v-bind:class="Status.WT_S_Hardware_state.prm_sta"></span>
                          </li>
                        </ul>
                      </fieldset>
                    </form>
                  </el-col>
                  <el-col :span="16">
                    <!--时频状态-->
                    <form>
                      <fieldset>
                        <legend>时频状态</legend>
                        <ul>
                          <li class="li-span-1">
                            <label>外秒脉冲同步状态</label>
                            <input v-model="Status.WT_S_Time_state.PpsStatus" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>外时统锁定状态</label>
                            <input v-model="Status.WT_S_Time_state.TimeLockFlag" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>时码信息低16位</label>
                            <input v-model="Status.WT_S_Time_state.B000L16" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>时码信息高32位</label>
                            <input v-model="Status.WT_S_Time_state.B000H32" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>年</label>
                            <input v-model="Status.WT_S_Time_state.Year" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>周计数</label>
                            <input v-model="Status.WT_S_Time_state.WeekCount" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>周内秒计数</label>
                            <input v-model="Status.WT_S_Time_state.SecondCount" type="text" disabled>
                          </li>
                        </ul>
                      </fieldset>
                    </form>
                  </el-col>
                </el-row>
                <!--工作事件流-->
                <form>
                  <fieldset>
                    <legend>工作事件流显示</legend>
                    <el-table
                      :data="tableData"
                      style="width: 100%">
                      <el-table-column
                        prop="index"
                        label="序号"
                        width="80">
                      </el-table-column>
                      <el-table-column
                        prop="date"
                        label="时间"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="内容">
                      </el-table-column>
                    </el-table>
                  </fieldset>
                </form>
              </el-col>
              <el-col :span="3">
                <form style="padding-bottom: 10px">
                  <fieldset>
                    <legend>状态</legend>
                    <input type="text" v-model="st.status" disabled>
                  </fieldset>
                </form>
                <form style="padding-bottom: 10px;padding-top: 10px">
                  <fieldset>
                    <legend>控制方式</legend>
                    <input type="text" v-model="st.control" disabled>
                    <el-button size="mini" plain @click="st.control = '本控'">本控</el-button>
                    <el-button size="mini" plain @click="st.control = '远控'">远控</el-button>
                  </fieldset>
                </form>
                <form>
                  <fieldset>
                    <legend>设置切换方式</legend>
                    <input type="text" v-model="st.change" disabled>
                    <el-button size="mini" plain @click="st.change = st.change === '手动切换'? '自动切换':'手动切换'">切换方式</el-button>
                  </fieldset>
                </form>
                <form>
                  <fieldset>
                    <legend>主备机状态</legend>
                    <input type="text" v-model="st.master" disabled>
                    <el-button size="mini" plain @click="st.master = st.master === '主机'? '备机':'主机'">主备机切换</el-button>
                  </fieldset>
                </form>
              </el-col>
            </el-row>
          </el-tab-pane>
          <!--参数监视-->
          <el-tab-pane label="参数监视" name="second">
            <el-row :gutter="2">
              <el-col :span="21">
                <el-row :gutter="0">
                  <el-col :span="16">
                    <!--发射参数-->
                    <form>
                      <fieldset>
                        <legend>发射参数</legend>
                        <form>
                          <fieldset>
                            <legend>命令块1</legend>
                            <ul style="padding-bottom: 10px;padding-top: 10px;">
                              <li class="li-span-2">
                                <label>调制数据速率</label>
                                <input v-model="Status.WT_S_Send_command.cmd1_Data_rate" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>数据类型选择</label>
                                <input v-model="Status.WT_S_Send_command.cmd1_Data_en" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>调制开关</label>
                                <input v-model="Status.WT_S_Send_command.cmd1_ModeSwitch" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>通道号</label>
                                <input v-model="Status.WT_S_Send_command.cmd1_PRM_number" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>站号</label>
                                <input v-model="Status.WT_S_Send_command.cmd1_StationID" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>信号电频</label>
                                <input v-model="Status.WT_S_Send_command.cmd1_Level" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>LDPC开关</label>
                                <input v-model="Status.WT_S_Send_command.cmd1_LDPC_EN" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>中心频率</label>
                                <input v-model="Status.WT_S_Send_command.cmd1_FREQ_IF" type="text" disabled>
                              </li>
                            </ul>
                          </fieldset>
                        </form>
                        <form>
                          <fieldset>
                            <legend>命令块2</legend>
                            <ul style="padding-bottom: 10px;padding-top: 10px;">
                              <li class="li-span-2">
                                <label>调制数据速率</label>
                                <input v-model="Status.WT_S_Send_command.cmd2_Data_rate" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>数据类型选择</label>
                                <input v-model="Status.WT_S_Send_command.cmd2_Data_en" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>调制开关</label>
                                <input v-model="Status.WT_S_Send_command.cmd2_ModeSwitch" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>通道号</label>
                                <input v-model="Status.WT_S_Send_command.cmd2_PRM_number" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>站号</label>
                                <input v-model="Status.WT_S_Send_command.cmd2_StationID" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>信号电频</label>
                                <input v-model="Status.WT_S_Send_command.cmd2_Level" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>LDPC开关</label>
                                <input v-model="Status.WT_S_Send_command.cmd2_LDPC_EN" type="text" disabled>
                              </li>
                              <li class="li-span-2">
                                <label>中心频率</label>
                                <input v-model="Status.WT_S_Send_command.cmd2_FREQ_IF" type="text" disabled>
                              </li>
                            </ul>
                          </fieldset>
                        </form>
                      </fieldset>
                    </form>
                  </el-col>
                  <el-col :span="8">
                    <!--接收机参数-->
                    <form>
                      <fieldset>
                        <legend>接收机参数</legend>
                        <ul>
                          <li class="li-span-1">
                            <label>接收数据速率</label>
                            <input v-model="Status.WT_S_Recv_command.Data_rate" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>环路带宽设置</label>
                            <input v-model="Status.WT_S_Recv_command.autosel" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>通道号</label>
                            <input v-model="Status.WT_S_Recv_command.ChannelID" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>入锁帧计数</label>
                            <input v-model="Status.WT_S_Recv_command.Frmpara1" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>失锁帧计数</label>
                            <input v-model="Status.WT_S_Recv_command.Frmpara2" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>LDPC开关</label>
                            <input v-model="Status.WT_S_Recv_command.LDPC_EN" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>载波环路带宽</label>
                            <input v-model="Status.WT_S_Recv_command.CarrLoopBn" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>伪码环路带宽</label>
                            <input v-model="Status.WT_S_Recv_command.PnLoopBn" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>入锁容错比特数</label>
                            <input v-model="Status.WT_S_Recv_command.Frmpara3" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>校验容错比特数</label>
                            <input v-model="Status.WT_S_Recv_command.Frmpara4" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>失锁容错比特数</label>
                            <input v-model="Status.WT_S_Recv_command.Frmpara5" type="text" disabled>
                          </li>
                        </ul>
                      </fieldset>
                    </form>
                  </el-col>
                </el-row>
                <!--时频参数-->
                <form>
                  <fieldset>
                    <legend>时频参数</legend>
                    <ul style="padding-bottom: 10px;">
                      <li class="li-span-4">
                        <label>年</label>
                        <input v-model="Status.WT_S_Time_command.Year" type="text" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>天</label>
                        <input v-model="Status.WT_S_Time_command.Day" type="text" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>时</label>
                        <input v-model="Status.WT_S_Time_command.Hour" type="text" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>分</label>
                        <input v-model="Status.WT_S_Time_command.Minute" type="text" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>秒</label>
                        <input v-model="Status.WT_S_Time_command.Second" type="text" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>闰年标志</label>
                        <input v-model="Status.WT_S_Time_command.Leap" type="text" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>时统</label>
                        <input v-model="Status.WT_S_Time_command.Mode" type="text" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>采样延迟</label>
                        <input v-model="Status.WT_S_Time_command.Delay" type="text" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>内外参考设置</label>
                        <input v-model="Status.WT_S_Time_command.REF9520Se1" type="text" disabled>
                      </li>
                    </ul>
                  </fieldset>
                </form>
                <!--工作事件流-->
                <form>
                  <fieldset>
                    <legend>工作事件流显示</legend>
                    <el-table
                      :data="tableData"
                      style="width: 100%">
                      <el-table-column
                        prop="index"
                        label="序号"
                        width="80">
                      </el-table-column>
                      <el-table-column
                        prop="date"
                        label="时间"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="内容">
                      </el-table-column>
                    </el-table>
                  </fieldset>
                </form>
              </el-col>
              <el-col :span="3">
                <div class="setting-box-c">
                  <el-button type="primary" @click="edit"> 设置 </el-button>
                </div>
                <form style="margin-top: -10px;">
                  <fieldset>
                    <legend>状态</legend>
                    <input type="text" v-model="st.status" disabled>
                  </fieldset>
                </form>
                <form>
                  <fieldset>
                    <legend>控制方式</legend>
                    <input type="text" v-model="st.control" disabled>
                    <el-button size="mini" plain @click="st.control = '本控'">本控</el-button>
                    <el-button size="mini" plain @click="st.control = '远控'">远控</el-button>
                  </fieldset>
                </form>
                <form>
                  <fieldset>
                    <legend>设置切换方式</legend>
                    <input type="text" v-model="st.change" disabled>
                    <el-button size="mini" plain @click="st.change = st.change === '手动切换'? '自动切换':'手动切换'">切换方式</el-button>
                  </fieldset>
                </form>
                <form>
                  <fieldset>
                    <legend>主备机状态</legend>
                    <input type="text" v-model="st.master" disabled>
                    <el-button size="mini" plain @click="st.master = st.master === '主机'? '备机':'主机'">主备机切换</el-button>
                  </fieldset>
                </form>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
    <!--设置窗口-->
    <el-dialog
      title="参数设置"
      :visible.sync="dialogVisible.switch"
      width="70%">
      <sendWeitong_modal></sendWeitong_modal>
    </el-dialog>
  </div>
</template>

<script>
import sendWeitong_modal from './sendWeitong_modal'
export default {
  name: 'sendWeitong',
  data () {
    return {
      activeName: 'first',
      /* 状态 */
      Status: {
        // 卫通发射基带硬件状态
        WT_S_Hardware_state: {},
        // 卫通发射基带发送状态
        WT_S_Send_state: {},
        // 卫通发射基带接收状态
        WT_S_Recv_state: {},
        // 卫通发射基带时频状态
        WT_S_Time_state: {},
        // 卫通发射基带A发射命令
        WT_S_Send_command: {},
        // 卫通发射基带接收命令
        WT_S_Recv_command: {},
        // 卫通发射基带时频命令
        WT_S_Time_command: {}
      },
      // 表格数据
      tableData: [],
      // 切换方式
      st: {
        status: '异常',
        control: '本控',
        change: '手动切换',
        master: '主机'
      }
    }
  },
  components: {
    sendWeitong_modal
  },
  computed: {
    changTitle: function () {
      let data = this.$route.query
      return '卫通发射基带(' + data.name + ')'
    },
    device: function () {
      let data = this.$route.query
      if (data.name === 'A') {
        return this.$device.WT_send_A
      }
      if (data.name === 'B') {
        return this.$device.WT_send_B
      }
    },
    // 获取设备id和key数组、结构体信息
    structGet: function () {
      let keyArray = []
      let detailed = []
      let id = this.device.id
      let ifBaseband = this.device.ifBaseband
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
        ifBaseband: ifBaseband,
        keyArray: keyArray,
        detailed: detailed
      }
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
    }
  },
  watch: {
    Socket: function (n, o) {
      if (n !== null) {
        this.get()
      }
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    // 获取数据
    get () {
      const Socket = this.Socket
      let self = this
      let $utils = this.$utils
      let $ws = this.$ws
      if (Socket) {
        // 请求数据
        $ws.sendKey(Socket, '/api/monitor/autoGet', this.structGet.keyArray)
        // 接收数据
        Socket.onmessage = function (response) {
          $utils.readData(response.data, self.structGet, function (data) {
            if (data.type === 0) {
              for (let key in data.data) {
                self.Status[key] = data.data[key]
              }
            }
            if (data.type === 1) {
              if (self.structGet.keyArray.includes(data.key)) {
                $ws.sendKey(Socket, '/api/monitor/autoGet', data.key)
              }
            }
          })
        }
      } else {
        self.$store.commit('Socket', null)
      }
    },
    edit () {
      const Socket = this.Socket
      let self = this
      let $utils = this.$utils
      let $ws = this.$ws
      if (Socket) {
        // 请求设置数据
        $ws.sendKey(Socket, '/api/parameter/getParameter', this.structSet.id)
        self.$store.commit('modal', {switch: true, type: 0})
        self.$store.commit('device', self.device)
        // 接收数据
        Socket.onmessage = function (response) {
          $utils.readData(response.data, self.structSet, function (data) {
            if (data.type === 0) {
              if (Object.keys(data.data).length > 0) {
                self.$store.commit('components_data', data.data)
              }
            }
            if (data.type === 1) {
              if (self.structGet.keyArray.includes(data.key)) {
                self.get()
              }
            }
          })
        }
      }
    },
    handleClick (tab, event) {
      if (tab.name === 'third') {
        this.dialogVisible = true
      }
    }
  },
  // 导航守卫，当前路由改变时执行
  beforeRouteUpdate (to, from, next) {
    next()
    this.get()
  }
}
</script>
