<template>
  <div class="receiveWeitong">
    <el-tabs type="border-card">
      <el-tab-pane :label= changTitle>
        <el-tabs v-model="activeName">
          <el-tab-pane label="状态监视" name="first">
            <el-row :gutter="0">
              <el-col :span="21">
                <el-row :gutter="0">
                  <el-col :span="16">
                    <!--时频状态-->
                    <form>
                      <fieldset>
                        <legend>时频状态</legend>
                        <ul>
                          <li class="li-span-2">
                            <label>外秒脉冲同步状态</label>
                            <span class="status-offline" v-bind:class="Status.WT_R_Time_state.PpsStatus"></span>
                          </li>
                          <li class="li-span-2">
                            <label>外时统锁定状态</label>
                            <span class="status-offline" v-bind:class="Status.WT_R_Time_state.TimeLockFlag"></span>
                          </li>
                          <li class="li-span-2">
                            <label>时码信息低16位</label>
                            <input v-model="Status.WT_R_Time_state.B000L16" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>时码信息高32位</label>
                            <input v-model="Status.WT_R_Time_state.B000H32" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>周内秒计数</label>
                            <input v-model="Status.WT_R_Time_state.SecondCount" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>年</label>
                            <input v-model="Status.WT_R_Time_state.Year" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>周计数</label>
                            <input v-model="Status.WT_R_Time_state.WeekCount" type="text" disabled>
                          </li>
                        </ul>
                      </fieldset>
                    </form>
                    <!--抗干扰功能状态-->
                    <form>
                      <fieldset>
                        <legend>抗干扰功能状态</legend>
                        <ul>
                          <li class="li-span-2">
                            <label>抗窄带干扰开关</label>
                            <input v-model="Status.WT_R_anti_interference_status.Interfere_valuation" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>窄带干扰电平评估值</label>
                            <input v-model="Status.WT_R_anti_interference_status.interfer_open_status" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>多用户开关</label>
                            <input v-model="Status.WT_R_anti_interference_status.Interference_detection" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>干扰类型</label>
                            <input v-model="Status.WT_R_anti_interference_status.many_open_status" type="text" disabled>
                          </li>
                        </ul>
                      </fieldset>
                    </form>
                    <!--效验发射状态-->
                    <form>
                      <fieldset>
                        <legend>校验发射状态</legend>
                        <ul>
                          <li class="li-span-1">
                            <label>发射通道功率</label>
                            <input v-model="Status.WT_R_Checkout_test.PowerControl" type="text" disabled>
                          </li>
                        </ul>
                      </fieldset>
                    </form>
                    <el-row>
                      <el-col :span="12">
                        <!--通道PRM编号状态-->
                        <form>
                          <fieldset>
                            <legend>通道PRM编号状态</legend>
                            <ul>
                              <li class="li-span-1">
                                <label>接收通道PRM编号</label>
                                <input type="text" disabled v-model="Status.WT_R_Channel_number.Channel_ID">
                              </li>
                            </ul>
                          </fieldset>
                        </form>
                      </el-col>
                      <el-col :span="12">
                        <!--接收信号功率状态-->
                        <form>
                          <fieldset>
                            <legend>接收信号功率状态</legend>
                            <ul>
                              <li class="li-span-1">
                                <label>接收信号功率</label>
                                <input v-model="Status.WT_R_Rec_status.signal_power" type="text" disabled>
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
                  <el-col :span="8">
                    <!--接受通道状态-->
                    <form>
                      <fieldset>
                        <legend>接收通道状态</legend>
                        <ul>
                          <li class="li-span-1">
                            <label>伪码锁定</label>
                            <span class="status-offline" :class="Status.WT_R_Receiving_channel_state.RecStaus_Rec_Status_B0"></span>
                          </li>
                          <li class="li-span-1">
                            <label>载波锁定</label>
                            <span class="status-offline" :class="Status.WT_R_Receiving_channel_state.RecStaus_Rec_Status_B1"></span>
                          </li>
                          <li class="li-span-1">
                            <label>位同步锁定</label>
                            <span class="status-offline" :class="Status.WT_R_Receiving_channel_state.RecStaus_Rec_Status_B2"></span>
                          </li>
                          <li class="li-span-1">
                            <label>帧同步锁定</label>
                            <span class="status-offline" :class="Status.WT_R_Receiving_channel_state.RecStaus_Rec_Status_B3"></span>
                          </li>
                          <li class="li-span-1">
                            <label>信号捕获成功</label>
                            <span class="status-offline" :class="Status.WT_R_Receiving_channel_state.RecStaus_Rec_Status_B4"></span>
                          </li>
                          <li class="li-span-1">
                            <label>数据速率</label>
                            <input v-model="Status.WT_R_Receiving_channel_state.DataRateSel" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>AGC电压</label>
                            <input v-model="Status.WT_R_Receiving_channel_state.AgcVolt" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>载噪比</label>
                            <input v-model="Status.WT_R_Receiving_channel_state.C_N0" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>信号幅度</label>
                            <input v-model="Status.WT_R_Receiving_channel_state.AmpI" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>载波多普勒</label>
                            <input v-model="Status.WT_R_Receiving_channel_state.CarrDopp" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>伪码多普勒</label>
                            <input v-model="Status.WT_R_Receiving_channel_state.PNDopp" type="text" disabled>
                          </li>
                        </ul>
                      </fieldset>
                    </form>
                    <!--硬件状态-->
                    <form>
                      <fieldset>
                        <legend>硬件状态</legend>
                        <ul>
                          <li class="li-span-1">
                            <label>供电状态</label>
                            <span :class="Status.WT_R_Hardware_state.PowerSta"></span>
                          </li>
                          <li class="li-span-1">
                            <label>硬件温度</label>
                            <span :class="Status.WT_R_Hardware_state.Temprature"></span>
                          </li>
                          <li class="li-span-1">
                            <label>参数对比结果</label>
                            <span :class="Status.WT_R_Hardware_state.CmdErr"></span>
                          </li>
                          <li class="li-span-1">
                            <label>PRM通信状态</label>
                            <span :class="Status.WT_R_Hardware_state.PRMSta"></span>
                          </li>
                          <li class="li-span-1">
                            <label>基带板工作状态</label>
                            <span :class="Status.WT_R_Hardware_state.VcoLock"></span>
                          </li>
                        </ul>
                      </fieldset>
                    </form>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="3">
                <form style="padding-top: 6px;">
                  <fieldset>
                    <legend>状态</legend>
                    <div style="padding-top: 10px;padding-bottom: 10px;">
                      <input type="text" v-model="st.status" disabled>
                    </div>
                  </fieldset>
                </form>
                <form>
                  <fieldset>
                    <legend>控制方式</legend>
                    <div style="padding-top: 10px;padding-bottom: 10px;">
                      <input type="text" v-model="st.control" disabled>
                      <el-button size="mini" plain @click="st.control = '本控'">本控</el-button>
                      <el-button size="mini" plain @click="st.control = '远控'">远控</el-button>
                    </div>
                  </fieldset>
                </form>
                <form style="padding-top: 20px;padding-bottom: 20px;">
                  <fieldset>
                    <legend>设置切换方式</legend>
                    <div style="padding-top: 10px;padding-bottom: 10px;">
                      <input type="text" v-model="st.change" disabled>
                      <el-button size="mini" plain @click="st.change = st.change === '手动切换'? '自动切换':'手动切换'">切换方式</el-button>
                    </div>
                  </fieldset>
                </form>
                <form>
                  <fieldset>
                    <legend>主备机状态</legend>
                    <div style="padding-top: 20px;padding-bottom: 20px;">
                      <input type="text" v-model="st.master" disabled>
                      <el-button size="mini" plain @click="st.master = st.master === '主机'? '备机':'主机'">主备机切换</el-button>
                    </div>
                  </fieldset>
                </form>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="参数监视" name="second">
            <el-row :gutter="0">
              <el-col :span="21">
                <el-row>
                  <el-col :span="8">
                    <!--时间设置-->
                    <form>
                      <fieldset>
                        <legend>时间设置</legend>
                        <ul>
                          <li class="li-span-1">
                            <label>时统</label>
                            <input v-model="Status.WT_R_Time_setting.Mode" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>闰年</label>
                            <input v-model="Status.WT_R_Time_setting.Leap" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>年</label>
                            <input v-model="Status.WT_R_Time_setting.Year" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>天</label>
                            <input v-model="Status.WT_R_Time_setting.Day" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>时</label>
                            <input v-model="Status.WT_R_Time_setting.Hour" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>分</label>
                            <input v-model="Status.WT_R_Time_setting.Minute" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>秒</label>
                            <input v-model="Status.WT_R_Time_setting.Second" type="text" disabled>
                          </li>
                        </ul>
                      </fieldset>
                    </form>
                    <!--抗干扰功能-->
                    <form>
                      <fieldset>
                        <legend>抗干扰功能</legend>
                        <ul>
                          <li class="li-span-1">
                            <label>抗窄带干扰开关</label>
                            <input v-model="Status.WT_R_inter_Set.makeCanSwitch" type="text" disabled>
                          </li>
                          <li class="li-span-1">
                            <label>多用户监测开关</label>
                            <input v-model="Status.WT_R_inter_Set.detectionSwitch" type="text" disabled>
                          </li>
                        </ul>
                      </fieldset>
                    </form>
                  </el-col>
                  <el-col :span="16">
                    <!--接收相关参数-->
                    <form>
                      <fieldset>
                        <legend>接收相关参数</legend>
                        <ul>
                          <li class="li-span-2">
                            <label>捕获门限</label>
                            <input v-model="Status.WT_R_Related_parameters.AcqTh" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>译码输出通道选择</label>
                            <input v-model="Status.WT_R_Related_parameters.LdpcSel" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>伪码时间不确定度</label>
                            <input v-model="Status.WT_R_Related_parameters.TimeDiffRange" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>天线跟踪</label>
                            <input v-model="Status.WT_R_Related_parameters.TrackSel" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>内外参考选择</label>
                            <input v-model="Status.WT_R_Related_parameters.RefSel" type="text" disabled>
                          </li>
                        </ul>
                      </fieldset>
                    </form>
                    <!--校验发射控制-->
                    <form>
                      <fieldset>
                        <legend>校验发射控制</legend>
                        <ul>
                          <li class="li-span-2">
                            <label>调制开关</label>
                            <input v-model="Status.WT_R_Checkout_control.ModSwich" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>单载波开关</label>
                            <input v-model="Status.WT_R_Checkout_control.SingleCarrSwich" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>数据开关</label>
                            <input v-model="Status.WT_R_Checkout_control.DataSwitch" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>数据速率</label>
                            <input v-model="Status.WT_R_Checkout_control.DataRateSel" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>初始功率</label>
                            <input v-model="Status.WT_R_Checkout_control.Power" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>PRM编号</label>
                            <input v-model="Status.WT_R_Checkout_control.ChannelID" type="text" disabled>
                          </li>
                        </ul>
                      </fieldset>
                    </form>
                    <!--接收通道参数-->
                    <form>
                      <fieldset>
                        <legend>接收通道参数</legend>
                        <ul>
                          <li class="li-span-2">
                            <label>载波中频频率</label>
                            <input v-model="Status.WT_R_Channel_demodulation.RecCarrFreq" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>通道prm编号</label>
                            <input v-model="Status.WT_R_Channel_demodulation.Channel_ID" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>通道码速率</label>
                            <input v-model="Status.WT_R_Channel_demodulation.DataRateSel" type="text" disabled>
                          </li>
                          <li class="li-span-2">
                            <label>接收通道选择</label>
                            <input v-model="Status.WT_R_Channel_demodulation.Channel_Sel" type="text" disabled>
                          </li>
                        </ul>
                      </fieldset>
                    </form>
                  </el-col>
                </el-row>
                <!--通道复位标志-->
                <form>
                  <fieldset>
                    <legend>通道复位标志</legend>
                    <ul style="text-align: center">
                      <li class="li-span-4">
                        <label>通道1</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset1" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道2</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset2" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道3</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset3" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道4</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset4" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道5</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset5" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道6</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset6" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道7</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset7" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道8</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset8" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道9</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset9" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道10</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset10" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道11</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset11" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道12</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset12" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道13</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset13" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道14</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset14" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道15</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset15" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道16</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset16" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道17</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset17" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道18</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset18" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道19</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset19" disabled>
                      </li>
                      <li class="li-span-4">
                        <label>通道20</label>
                        <input type="text" v-model="Status.WT_R_ChReset.ChReset20" disabled>
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
                <div style="text-align: center;padding-top: 26px;">
                  <el-button size="" type="primary" @click="edit"> 设置 </el-button>
                </div>
                <form>
                  <fieldset>
                    <legend>状态</legend>
                    <div style="padding-top: 10px;padding-bottom: 10px;">
                      <input type="text" v-model="st.status" disabled>
                    </div>
                  </fieldset>
                </form>
                <form style="margin-top: 30px;">
                  <fieldset>
                    <legend>控制方式</legend>
                    <input type="text" v-model="st.control" disabled>
                    <el-button size="mini" plain @click="st.control = '本控'">本控</el-button>
                    <el-button size="mini" plain @click="st.control = '远控'">远控</el-button>
                  </fieldset>
                </form>
                <form style="margin-top: 30px;">
                  <fieldset>
                    <legend>设置切换方式</legend>
                    <input type="text" v-model="st.change" disabled>
                    <el-button size="mini" plain @click="st.change = st.change === '手动切换'? '自动切换':'手动切换'">切换方式</el-button>
                  </fieldset>
                </form>
                <form style="margin-top: 30px;">
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
    <el-dialog
      title="参数设置"
      :visible.sync="dialogVisible.switch"
      width="70%"
      center>
      <receiveWeitong_modal></receiveWeitong_modal>
    </el-dialog>
  </div>
</template>

<script>
import receiveWeitong_modal from './receiveWeitong_modal'
export default {
  name: 'receiveWeitong',
  data () {
    return {
      activeName: 'first',
      /* 状态 */
      Status: {
        // 卫通接收时统状态
        WT_R_Time_state: {},
        // 接收信号功率
        WT_R_Rec_status: {},
        // 卫通接收接收通道状态
        WT_R_Receiving_channel_state: {},
        // 卫通接收通道PRM编号状态
        WT_R_Channel_number: {},
        // 抗干扰功能状态
        WT_R_anti_interference_status: {},
        // 卫通接收校验发射状态
        WT_R_Checkout_test: {},
        // 卫通接收硬件状态
        WT_R_Hardware_state: {},
        // 接收通道复位设置
        WT_R_ChReset: {},
        // 卫通接收接收通道解调参数设置
        WT_R_Channel_demodulation: {},
        // 卫通接收接收相关参数设置
        WT_R_Related_parameters: {},
        // 抗干扰功能设置
        WT_R_inter_Set: {},
        // 卫通接收时间设置
        WT_R_Time_setting: {},
        // 卫通接收校验发射控制设置
        WT_R_Checkout_control: {},
        // 设置有效标志
        SetValidFlag: '',
        // 卫通接收数据采集通道设置
        WT_R_Data_acquisition_channel: {}
      },
      // 切换方式
      st: {
        status: '异常',
        control: '本控',
        change: '手动切换',
        master: '主机'
      },
      // 表格数据
      tableData: []
    }
  },
  filters: {
    strReplace (val, c) {
      return val.replace(c, '')
    }
  },
  components: {
    receiveWeitong_modal
  },
  computed: {
    changTitle: function () {
      let data = this.$route.query
      return '卫通接收基带(' + data.name + ')'
    },
    device: function () {
      let data = this.$route.query
      if (data.name === 'A') {
        return this.$device.WT_recv_A
      }
      if (data.name === 'B') {
        return this.$device.WT_recv_B
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
            console.log(data)
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
        self.$store.commit('device', self.device)
        self.$store.commit('modal', {switch: true, type: 0})
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
    handleClose () {
      this.dialogVisible = false
    }
  },
  // 导航守卫，当前路由改变时执行
  beforeRouteUpdate (to, from, next) {
    next()
    this.get()
  }
}
</script>
