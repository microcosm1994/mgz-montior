<template>
  <div class="flow">
    <div class="flow-header">
      <el-button type="primary" size="mini" @click="edit('flow_zj')">站间中频分路组合链路切换</el-button>
      <el-button type="primary" size="mini" @click="edit('flow_xdzp')">星地中频分路组合链路切换</el-button>
      <el-button type="primary" size="mini" @click="edit('flow_xdsp')">星地射频分路组合链路切换</el-button>
    </div>
    <div class='flow-box' @mousedown="move" ref="flow">
      <!--左侧主控站-->
      <div class="flow-container inline-block" style="vertical-align: top;">
        <div class="device-box" style="border: none;margin-left: 50px;margin-top: 80px;">
          <img src="../assets/img/weixin.png" alt="">
          <div style="position: absolute;width: 2px;height: 50px;border-left:2px dashed #999;left: 30%;bottom: -50px;transform: rotateZ(20deg);"></div>
          <p>北斗三号GEO</p>
        </div>
        <div class="device-box" style="border: none;margin-top: 50px;position: relative">
          <img src="../assets/img/leida.png" alt="">
          <p>主控站/第二主控站</p>
          <div class="line" style="width: 60px;height: 200px;border-top:3px solid #666;border-right:3px solid #666;border-bottom:3px solid #666;right:-50px;top:50%;">
            <div style="position: absolute;width: 50px;top:164px;right: -30px;background: #EAEEEF;">地面通信网</div>
          </div>
        </div>
        <div class="device-box" style="border: none;margin-top: 100px;">
          <img src="../assets/img/leida.png" alt="">
          <p>星间链路运行管理中心</p>
        </div>
        <div class="device-box" style="border: none;margin-left: 30px;margin-top: 50px;">
          <img src="../assets/img/weixin.png" alt="">
          <div style="position: absolute;width: 50px;height: 2px;border-top:2px dashed #999;right: -50px;top: 30%;transform: rotateZ(-10deg);"></div>
          <p>北斗三号星座</p>
        </div>
      </div>
      <!--中间部分-->
      <div class="inline-block">
        <!--中间上-->
        <div class="block" style="margin-top: 30px;margin-left: 30px;">
          <div class="flow-container inline-block">
            <!--虚线双工器部分-->
            <div class="flow-container inline-block" style="border: 1px dashed #333;">
              <div class="device-box" style="border: none">
                <p>c收发天线</p>
                <img style="width: 30px;height: 40px;" src="../assets/img/C.png" alt="">
                <div style="position: absolute;height: 15px;width: 2px;;background: #333333;left:50%;bottom: -5px;">
                </div>
              </div>
              <div class="device-box" style="height: 45px;width: 20px;margin: 0 auto">
                <p>双工器</p>
                <div style="position: absolute;height: 20px;width: 2px;background: #333333;left:30%;bottom: -25px;">
                  <span style="color:#333;position: absolute;font-size: 12px;top:-8px;left: -6px;">▲</span>
                </div>
                <div style="position: absolute;height: 20px;width: 2px;background: #333333;left:70%;bottom: -25px;">
                  <span style="color:#333;position: absolute;font-size: 12px;bottom:-8px;left: -6px;">▼</span>
                </div>
              </div>
              <div style="height: 40px;width: 30px;margin: 30px auto" class="device-box">
                <p>C/C转发</p>
              </div>
            </div>
            <!--双工器下部分-->
            <div class="flow-container">
              <div class="device-box" style="border: none">
                <p>C零校验天线</p>
                <img style="width: 30px;height: 40px;" src="../assets/img/C.png" alt="">
                <div style="position: absolute;height: 15px;width: 2px;;background: #333333;left:50%;bottom: -5px;">
                </div>
              </div>
              <div style="height: 45px;width: 20px;margin: 0 auto" class="device-box">
                <p>双工器</p>
                <div v-bind:class="{error: line2, offLine: !line2}" style="position: absolute;height: 2px;width: 70px;left:-70px;top: 50%;">
                  <div style="position: absolute;width: 2px;height: 400px;top: -400px;">
                    <div style="position:absolute;width: 516px;height: 2px;">
                      <span style="position: absolute;right: -5px;top: -8px;font-size: 12px">▶</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--站间天伺馈子系统-->
          <div style="border:1px solid #333;vertical-align: top;margin-top: 10px;" class="flow-container inline-block">
            <p>站间天伺馈子系统</p>
            <div class="flow-container inline-block">
              <div class="device-box" style="border: none">
                <img src="../assets/img/leida.png" alt="" style="height: 100px;">
                <div style="height: 2px;width: 50px;background: #333333;position: absolute;top: 50%;right: -60px;">
                  <span style="position: absolute;top:-8px;font-size: 12px;left:-6px;">◀</span>
                  <span style="position: absolute;top:-8px;font-size: 12px;right:-6px;">▶</span>
                </div>
              </div>
              <div class="block">
                <div style="width: 40px;height: 50px;" class="device-box inline-block">
                  <p>卫通ADU(冷备)</p>
                </div>
                <div  style="width: 40px;height: 50px;" class="device-box inline-block">
                  <p>卫通ADU</p>
                  <div style="height: 30px;width: 2px;background: #333333;position: absolute;top: -30px;">
                    <span style="position: absolute;top:-5px;font-size: 12px;left:-6px;">▲</span>
                    <span style="position: absolute;bottom:-5px;font-size: 12px;left:-6px;">▼</span>
                  </div>
                </div>
              </div>
              <div class="block">
                <div style="width: 40px;" class="device-box inline-block">
                  <p>卫通ACU(A)</p>
                  <div style="position: absolute;width: 2px;height: 10px;background: #333333;top: -12px;">
                    <span style="font-size: 12px;position: absolute;top: 0;left: -6px;">▼</span>
                    <div style="position: absolute;width: 86px;height: 2px;background: #333333;">
                      <div style="position: absolute;width: 2px;height: 10px;background: #333333;top: -10px;right: 0;">
                        <span style="font-size: 12px;position: absolute;top: -8px;left: -6px;">▲</span>
                      </div>
                    </div>
                  </div>
                  <div style="position: absolute;height: 40px;width: 2px;background: #333333;bottom: -42px;left: 50%;">
                    <span style="font-size: 12px;position: absolute;top: -8px;left: -6px;">▲</span>
                    <div style="position: absolute;width: 260px;height: 2px;background: #333333;bottom:0;">
                      <div style="position: absolute;top:-20px;right: -50px;width: 50px;font-size: 12px">AGC电压A/B指向角</div>
                    </div>
                  </div>
                </div>
                <div style="width: 40px;" class="device-box inline-block">
                  <p>卫通ACU(B)</p>
                  <div style="position: absolute;height: 20px;width: 2px;background: #333333;top: -22px;left: 50%;">
                    <span style="font-size: 12px;position: absolute;top: -8px;left: -6px;">▲</span>
                    <span style="font-size: 12px;position: absolute;bottom: -5px;left: -6px;">▼</span>
                  </div>
                  <div style="position: absolute;height: 40px;width: 2px;background: #333333;bottom: -42px;left: 50%;">
                    <span style="font-size: 12px;position: absolute;top: -8px;left: -6px;">▲</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flow-container inline-block" style="border:2px solid #333;width: 80px;height: 200px;">
              <div class="device-box block" style="border:none;width: 100%;padding-left: 0;margin-left: 0px;">
                <p>C频段馈源</p>
              </div>
              <div class="device-box block" style="border:none;width: 100%;padding-left: 0;margin-left: 0px;margin-top: 30px;">
                <p>收阻滤波器</p>
              </div>
              <div class="device-box block" style="border:none;width: 100%;padding-left: 0;margin-left: 0px;margin-top: 30px;">
                <p>接受耦合器</p>
              </div>
            </div>
          </div>
          <!--发射耦合器相关部分-->
          <div class="flow-container inline-block" style="vertical-align: top">
            <div class="flow-container block" style="margin-top: -40px;">
              <div>
                <div class="device-box inline-block" style="height: 20px;">
                  <p>二选一</p>
                  <div class="success" style="width: 20px;height: 2px;position: absolute;right: -24px;top: 50%;">
                    <span style="position: absolute;right: -5px;top: -8px;font-size: 12px;">▶</span>
                  </div>
                </div>
                <div class="device-box inline-block" style="height: 30px;">
                  <p>C发射校零变频器</p>
                  <div class="success" style="width: 100px;height: 2px;position: absolute;right: -104px;top: 50%;">
                    <span style="position: absolute;right: -5px;top: -8px;font-size: 12px;">▶</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flow-container block">
              <div style="display: inline-block;vertical-align: top">
                <div class="device-box inline-block" style="width: 14px;height: 80px;">
                  <p>发射耦合器</p>
                  <!--连接二选一-->
                  <div v-bind:class="{success: !line2, offLine: line2}" style="height: 40px;width: 2px;position: absolute;top:-40px;">
                    <div style="width: 40px;height: 2px;position: absolute">
                      <span style="position: absolute;font-size: 12px;right: -5px;top: -8px;">▶</span>
                    </div>
                  </div>
                  <!--连接C频段馈源-->
                  <div class="success" style="width: 44px;height: 2px;position: absolute;left: -48px;top: 50%;">
                    <span style="position: absolute;font-size: 12px;left: -5px;top: -8px;">◀</span>
                  </div>
                </div>
                <div class="device-box inline-block" style="width: 14px;height: 80px;cursor: pointer;border:none;padding-top: 0;">
                  <div class="device-box" style="width: 26px;margin: 0;height: 90px;padding-top: 10px;margin-left: -6px;box-sizing: border-box">
                    <p>切换开关</p>
                  </div>
                  <!--链接发射耦合器-->
                  <div class="success" style="width: 20px;height: 2px;position: absolute;left: -24px;top:50%;">
                    <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
                  </div>
                </div>
                <div class="inline-block">
                  <div class="device-box block" style="height: 30px;">
                    <p style="line-height: 30px;">HPA(A)</p>
                    <!--链接切换开关-->
                    <div v-bind:class="{error: changeSwitch1, offLine: !changeSwitch1}" style="width: 20px;height: 2px;position: absolute;left: -24px;top:50%;">
                      <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
                    </div>
                  </div>
                  <div class="device-box block" style="height: 30px;">
                    <!--链接切换开关-->
                    <p style="line-height: 30px;">HPA(B)</p>
                    <div v-bind:class="{success: !changeSwitch1, offLine: changeSwitch1}" style="width: 20px;height: 2px;position: absolute;left: -24px;top:50%;">
                      <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: inline-block;vertical-align: top">
                <div class="device-box">
                  <p>C频段上变频器(A)</p>
                  <!--链接HPA-->
                  <div v-bind:class="{success: changeSwitch1, offLine: !changeSwitch1}" style="width: 20px;height: 2px;position: absolute;left: -24px;top:50%;">
                    <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
                  </div>
                  <!--链接站间中频分路组合-->
                  <div v-bind:class="{success: changeSwitch1, offLine: !changeSwitch1}" style="width: 50px;height: 2px;position: absolute;right: -54px;top:50%;">
                    <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
                  </div>
                </div>
                <div class="device-box">
                  <p>C频段上变频器(B)</p>
                  <!--链接HPA-->
                  <div v-bind:class="{error: !changeSwitch1, offLine: changeSwitch1}" style="width: 20px;height: 2px;position: absolute;left: -24px;top:50%;">
                    <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
                  </div>
                  <!--链接站间中频分路组合-->
                  <div v-bind:class="{success: !changeSwitch1, offLine: changeSwitch1}" style="width: 50px;height: 2px;position: absolute;right: -54px;top:50%;">
                    <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flow-container block">
              <div class="device-box inline-block" style="width: 14px;margin-top: -60px;border:none;padding-top: 0;">
                <div class="device-box" style="width: 24px;margin: 0;padding: 2px;height: 90px;padding-top: 10px;box-sizing: border-box">
                  <p>切换开关</p>
                </div>
                <!--链接接受耦合器-->
                <div class="success" style="width: 35px;height: 2px;position: absolute;left: -39px;top:40px;">
                  <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;">▶</span>
                </div>
              </div>
              <div class="inline-block" style="margin-top: -80px;">
                <div class="device-box block" style="width: 40px;">
                  <p>C频段LNA(A)</p>
                  <!--链接i切换开关-->
                  <div v-bind:class="{success: changeSwitch2, offLine: !changeSwitch2}" style="width: 20px;height: 2px;position: absolute;left: -24px;top:50%;">
                    <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;">▶</span>
                  </div>
                </div>
                <div class="device-box block" style="width: 40px;">
                  <p>C频段LNA(B)</p>
                  <!--链接i切换开关-->
                  <div v-bind:class="{success: !changeSwitch2, offLine: changeSwitch2}" style="width: 20px;height: 2px;position: absolute;left: -24px;top:50%;">
                    <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;">▶</span>
                  </div>
                </div>
              </div>
              <div class="inline-block">
                <div class="block">
                  <div class="device-box inline-block" style="width: 30px;">
                    <p>耦合</p>
                    <!--链接C频段LNA-->
                    <div v-bind:class="{success: changeSwitch2, offLine: !changeSwitch2}" style="width: 50px;height: 2px;position: absolute;left: -54px;top:20%;">
                      <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;">▶</span>
                    </div>
                    <div v-bind:class="{success: changeSwitch2, offLine: !changeSwitch2}" style="width: 20px;height: 2px;position: absolute;left: -24px;top:90%;">
                      <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
                    </div>
                  </div>
                  <div class="device-box inline-block">
                    <p>C频段下变频器(A)</p>
                    <!--链接耦合-->
                    <div v-bind:class="{success: changeSwitch2, offLine: !changeSwitch2}" style="width: 20px;height: 2px;position: absolute;left: -24px;top:50%;">
                      <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;">▶</span>
                    </div>
                    <!--链接站间中频分路组合-->
                    <div v-bind:class="{success: changeSwitch2, offLine: !changeSwitch2}" style="width: 50px;height: 2px;position: absolute;right: -54px;top:50%;">
                      <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;">▶</span>
                    </div>
                  </div>
                </div>
                <div class="block">
                  <div class="device-box inline-block" style="width: 30px;">
                    <p>耦合</p>
                    <!--链接C频段LNA-->
                    <div v-bind:class="{success: !changeSwitch2, offLine: changeSwitch2}" style="width: 50px;height: 2px;position: absolute;left: -54px;top:20%;">
                      <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;">▶</span>
                    </div>
                    <div v-bind:class="{success: !changeSwitch2, offLine: changeSwitch2}" style="width: 20px;height: 2px;position: absolute;left: -24px;top:90%;">
                      <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
                    </div>
                  </div>
                  <div class="device-box inline-block">
                    <p>C频段下变频器(B)</p>
                    <!--链接耦合-->
                    <div v-bind:class="{success: !changeSwitch2, offLine: changeSwitch2}" style="width: 20px;height: 2px;position: absolute;left: -24px;top:50%;">
                      <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;">▶</span>
                    </div>
                    <!--链接站间中频分路组合-->
                    <div v-bind:class="{success: !changeSwitch2, offLine: changeSwitch2}" style="width: 50px;height: 2px;position: absolute;right: -54px;top:50%;">
                      <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;">▶</span>
                    </div>
                  </div>
                </div>
                <div class="block">
                  <div class="device-box inline-block" style="border: 1px dashed #333;">
                    <p>三选一</p>
                    <!--链接接受耦合器-->
                    <div v-bind:class="{success: selected === '1', offLine: selected !== '1'}" style="width: 200px;height: 2px;position: absolute;left: -204px;top: 20%;">
                      <div style="height: 40px;width: 2px;position:absolute;top: -40px;">
                        <span style="font-size: 12px;position: absolute;top:-8px;left: -6px;">▲</span>
                      </div>
                    </div>
                    <!--链接双工器-->
                    <div v-bind:class="{success: selected === '2', offLine: selected !== '2'}" style="width: 50px;height: 2px;position: absolute;left: -54px;top: 60%;">
                      <div style="height: 60px;width: 2px;position:absolute;bottom: -60px;">
                        <div style="width: 420px;height: 2px;position: absolute;left: -420px;bottom:0;">
                          <span style="position: absolute;bottom:-6px;left: -8px;">◀</span>
                        </div>
                      </div>
                    </div>
                    <div  v-bind:class="{success: selected === '3', offLine: selected !== '3'}" style="width: 20px;height: 2px;position: absolute;left: -24px;top:90%;">
                      <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
                    </div>
                  </div>
                  <div class="device-box inline-block">
                    <p>C接收校零变频器</p>
                    <!--链接三选一-->
                    <div class="success" style="width: 20px;height: 2px;position: absolute;left: -24px;top:50%;">
                      <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
                    </div>
                    <!--链接站间中频分路组合-->
                    <div class="success" style="width: 40px;height: 2px;position: absolute;right: -44px;top:50%;">
                      <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--站间中频分路组合-->
          <div class="flow-container inline-block">
            <div class="device-box" style="width: 18px;height: 400px;margin-top: -50px;" @click="edit('flow_zj')">
              <p style="width: 14px;font-size:14px;margin-top: 100px;">站间中频分路组合</p>
            </div>
          </div>
          <div class="flow-container inline-block" style="margin-left: 20px;">
            <div class="device-box">
              <p>卫通发射基带(A)</p>
              <!--链接站间中频分路组合-->
              <div style="width: 50px;height: 2px;background: #333333;position: absolute;left: -54px;top:20%;">
                <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
              </div>
              <!--链接站间中频分路组合-->
              <div style="width: 50px;height: 2px;background: #333333;position: absolute;left: -54px;top:80%;">
                <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;">▶</span>
              </div>
              <!--链接网络交换机-->
              <div style="width: 26px;height: 2px;background: #666;position: absolute;right: -30px;top:50%;">
                <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;color:#666;">▶</span>
                <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;color: #666;">◀</span>
              </div>
            </div>
            <div class="device-box">
              <p>卫通发射基带(B)</p>
              <!--链接站间中频分路组合-->
              <div style="width: 50px;height: 2px;background: #333333;position: absolute;left: -54px;top:20%;">
                <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
              </div>
              <!--链接站间中频分路组合-->
              <div style="width: 50px;height: 2px;background: #333333;position: absolute;left: -54px;top:80%;">
                <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;">▶</span>
              </div>
              <!--链接网络交换机-->
              <div style="width: 26px;height: 2px;background: #666;position: absolute;right: -30px;top:50%;">
                <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;color:#666;">▶</span>
                <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;color: #666;">◀</span>
              </div>
            </div>
            <div class="device-box">
              <p>卫通接收基带(A)</p>
              <!--链接站间中频分路组合-->
              <div style="width: 50px;height: 2px;background: #333333;position: absolute;left: -52px;top:20%;">
                <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
              </div>
              <!--链接站间中频分路组合-->
              <div style="width: 50px;height: 2px;background: #333333;position: absolute;left: -54px;top:80%;">
                <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;">▶</span>
              </div>
              <!--链接网络交换机-->
              <div style="width: 26px;height: 2px;background: #666;position: absolute;right: -30px;top:50%;">
                <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;color:#666;">▶</span>
                <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;color: #666;">◀</span>
              </div>
              <!--链接卫通接受基带B-->
              <div style="width: 2px;height: 10px;background: #333333;position: absolute;bottom:-10px;left: 50%;">
                <span style="position: absolute;bottom:-6px;left: -5px">▼</span>
              </div>
            </div>
            <div class="device-box">
              <p>卫通接受基带(B)</p>
              <!--链接站间中频分路组合-->
              <div style="width: 50px;height: 2px;background: #333333;position: absolute;left: -54px;top:20%;">
                <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;">◀</span>
              </div>
              <!--链接站间中频分路组合-->
              <div style="width: 50px;height: 2px;background: #333333;position: absolute;left: -54px;top:80%;">
                <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;">▶</span>
              </div>
              <!--链接网络交换机-->
              <div style="width: 26px;height: 2px;background: #666;position: absolute;right: -30px;top:50%;">
                <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;color:#666;">▶</span>
                <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;color: #666;">◀</span>
              </div>
              <!--链接卫通接受基带B-->
              <div style="width: 2px;height: 10px;background: #333333;position: absolute;bottom:-10px;left: 50%;">
                <span style="position: absolute;bottom:-6px;left: -5px">▼</span>
                <p style="position: absolute;bottom:-20px;font-size: 12px;width: 100px;left: -50px;">(AGC+锁定)B</p>
              </div>
            </div>
            <div class="device-box" style="margin-top: 30px;">
              <p>站间加解密设备(A)</p>
              <!--链接网络交换机-->
              <div style="width: 26px;height: 2px;background: #666;position: absolute;right: -30px;top:50%;">
                <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;color:#666;">▶</span>
                <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;color: #666;">◀</span>
              </div>
            </div>
            <div class="device-box">
              <p>站间加解密设备(B)</p>
              <!--链接网络交换机-->
              <div style="width: 26px;height: 2px;background: #666;position: absolute;right: -30px;top:50%;">
                <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;color:#666;">▶</span>
                <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;color: #666;">◀</span>
              </div>
            </div>
          </div>
        </div>
        <!--中间下-->
        <div class="block" style="margin-top: 50px;margin-left: 30px;">
          <!--ka天线子系统-->
          <div  class="flow-container inline-block" style="border: 1px solid #333;">
            <p style="width: 100%;text-align: center">ka天线子系统</p>
            <div class="device-box" style="width: 90%;">
              <p>校零校验天线(用于标校塔测试)</p>
            </div>
            <div class="device-box" style="width: 90%;">
              <p>校零校验天线(安装在方舱顶部)</p>
            </div>
            <!--ka相控阵天线-->
            <div class="flow-container inline-block" style="border:2px solid #333;">
              <p>ka相控阵天线</p>
              <div class="block">
                <div class="inline-block" style="">
                  <div class="block">
                    <div class="device-box inline-block">
                      <p>天线单元</p>
                      <!--链接ka频段TR1-->
                      <div style="width: 20px;height: 2px;background: #666;position: absolute;right: -24px;top:50%;">
                        <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;color:#666;">▶</span>
                        <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;color: #666;">◀</span>
                      </div>
                    </div>
                    <div class="device-box inline-block">
                      <p>ka频段TR1</p>
                      <!--链接功率分配网络-->
                      <div style="width: 20px;height: 2px;background: #666;position: absolute;right: -24px;top:50%;">
                        <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;color:#666;">▶</span>
                        <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;color: #666;">◀</span>
                      </div>
                    </div>
                  </div>
                  <div class="block">
                    <div class="device-box inline-block">
                      <p>天线单元</p>
                      <!--链接功率分配网络-->
                      <div style="width: 20px;height: 2px;background: #666;position: absolute;right: -24px;top:50%;">
                        <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;color:#666;">▶</span>
                        <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;color: #666;">◀</span>
                      </div>
                    </div>
                    <div class="device-box inline-block">
                      <p>ka频段TR1</p>
                      <!--链接功率分配网络-->
                      <div style="width: 20px;height: 2px;background: #666;position: absolute;right: -24px;top:50%;">
                        <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;color:#666;">▶</span>
                        <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;color: #666;">◀</span>
                      </div>
                    </div>
                  </div>
                  <div class="block">
                    <div class="device-box inline-block">
                      <p>.........</p>
                    </div>
                    <div class="device-box inline-block">
                      <p>.........</p>
                    </div>
                  </div>
                  <div class="block">
                    <div class="device-box inline-block">
                      <p>天线单元</p>
                      <!--链接ka频段TR1-->
                      <div style="width: 20px;height: 2px;background: #666;position: absolute;right: -24px;top:50%;">
                        <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;color:#666;">▶</span>
                        <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;color: #666;">◀</span>
                      </div>
                    </div>
                    <div class="device-box inline-block">
                      <p>ka频段TRn</p>
                      <!--链接ka频段TR1-->
                      <div style="width: 20px;height: 2px;background: #666;position: absolute;right: -24px;top:50%;">
                        <span style="font-size: 12px;position: absolute;right:-5px;top:-8px;color:#666;">▶</span>
                        <span style="font-size: 12px;position: absolute;left:-5px;top:-8px;color: #666;">◀</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="inline-block">
                  <div class="device-box" style="width: 14px;height: 160px;">
                    <p style="margin-top: 30px;">功率分配网络</p>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="device-box" style="width: 80%;height: 30px;">
                  <p style="line-height: 30px;">波束控制器</p>
                  <div style="font-size: 20px;height: 15px;width: 3px;background: #999999;position: absolute;top: -15px;left:50%;">
                    <span style="font-size: 44px;color:#999;position: absolute;top:-10px;left: -5px;">▲</span>
                  </div>
                  <!--链接ka波控信号机A-->
                  <div style="width: 70px;height: 2px;background: #333333;position: absolute;right: -70px;top:20%;">
                    <span style="position: absolute;left: -6px;top: -6px;">◀</span>
                    <div style="width: 2px;height: 80px;position: absolute;right: 0;background: #333333;">
                      <div style="width: 40px;height: 2px;background: #333333;position: absolute;bottom:0;">
                        <span style="position: absolute;right: -6px;top: -6px;">▶</span>
                      </div>
                    </div>
                  </div>
                  <!--链接ka波控信号机B-->
                  <div style="width: 55px;height: 2px;background: #999;position: absolute;right: -55px;top:80%;">
                    <span style="position: absolute;left: -6px;top: -6px;color: #999;">◀</span>
                    <div style="width: 2px;height: 90px;position: absolute;right: 0;background: #999;">
                      <div style="width: 55px;height: 2px;background: #999;position: absolute;bottom:0;">
                        <span style="position: absolute;right: -6px;top: -6px;color:#999;">▶</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="device-box inline-block">
                  <p>AC/DC电源(A)</p>
                </div>
                <div class="device-box inline-block">
                  <p>AC/DC电源(B)</p>
                </div>
              </div>
            </div>
          </div>
          <!--星地射频分路组合-->
          <div class="flow-container inline-block" style="margin-left: 40px;">
            <div class="block">
              <div class="inline-block">
                <div class="device-box" style="margin-left: 210px;">
                  <p>ka星间链路模拟源</p>
                </div>
                <div class="block" style="border: 1px solid #333;">
                  <div class="inline-block" style="margin-left: 20px;">
                    <div class="device-box" style="width: 18px;height: 280px;">
                      <p style="width: 14px;font-size:14px;margin-top: 50px;">星地射频分路组合</p>
                      <!--链接校零效验天线-->
                      <div style="width: 80px;height: 2px;position: absolute;left: -80px;top: 10%;background: #333333;">
                        <span style="position: absolute;left: -8px;top: -7px;">◀</span>
                      </div>
                      <div style="width: 80px;height: 2px;position: absolute;left: -80px;top: 15%;background: #333333;">
                        <span style="position: absolute;right: 0px;top: -7px;">▶</span>
                      </div>
                      <!--链接ka星间链路模拟源-->
                      <div style="width: 30px;height: 2px;position: absolute;right: -30px;top: 5%;background: #333333;">
                        <div style="height: 70px;width: 2px;background: #333333;position: absolute;top: -70px;right: 0;">
                          <div style="width: 110px;height: 2px;background: #333333;position: absolute">
                            <span style="position: absolute;right: -6px;top: -7px;">▶</span>
                          </div>
                        </div>
                      </div>
                      <div style="width: 40px;height: 2px;position: absolute;right: -40px;top: 15%;background: #333333;">
                        <span style="position: absolute;left: -3px;top: -7px;">◀</span>
                        <div style="height: 80px;width: 2px;background: #333333;position: absolute;top: -80px;right: 0;">
                          <div style="width: 110px;height: 2px;background: #333333;"></div>
                        </div>
                      </div>
                      <!--链接ka天线子系统-->
                      <!--上行发送-->
                      <div style="width: 80px;height: 2px;position: absolute;left: -80px;top: 50%;background: #333333;">
                        <span style="position: absolute;left: -8px;top: -7px;">◀</span>
                        <p style="position: absolute;top: -20px;font-size: 12px;color:#666;">上行发送</p>
                      </div>
                      <!--下行接收-->
                      <div style="width: 80px;height: 2px;position: absolute;left: -80px;top: 80%;background: #333333;">
                        <span style="position: absolute;right: 0px;top: -7px;">▶</span>
                        <p style="position: absolute;top: -20px;font-size: 12px;color:#666;">下行接收</p>
                      </div>
                    </div>
                  </div>
                  <div class="inline-block" style="margin-left: 80px;">
                    <p>ka信道子系统</p>
                    <div class="device-box block">
                      <p>ka发射校零变频器</p>
                      <div style="width: 106px;height: 2px;position: absolute;left: -106px;top: 60%;background: #333333;">
                        <span style="position: absolute;right: 0px;top: -7px;">▶</span>
                        <p style="position: absolute;bottom: -20px;font-size: 12px;color:#666;">ka上行</p>
                      </div>
                      <div style="width: 106px;height: 2px;position: absolute;right: -106px;top: 60%;background: #333333;">
                        <span style="position: absolute;right: 0px;top: -7px;">▶</span>
                        <p style="position: absolute;bottom: -20px;font-size: 12px;color:#666;">中频上行</p>
                      </div>
                    </div>
                    <div class="device-box block">
                      <p>ka上变频器(A)</p>
                      <div style="width: 100px;height: 2px;position: absolute;left: -100px;top: 50%;background: #333333;">
                        <span style="position: absolute;left: -8px;top: -7px;">◀</span>
                        <p style="position: absolute;bottom: -20px;font-size: 12px;color:#666;">ka上行A</p>
                      </div>
                      <div style="width: 100px;height: 2px;position: absolute;right: -100px;top: 50%;background: #333333;">
                        <span style="position: absolute;left: -3px;top: -7px;">◀</span>
                        <p style="position: absolute;bottom: -20px;font-size: 12px;color:#666;">中频上行A</p>
                      </div>
                    </div>
                    <div class="device-box block">
                      <p>ka上变频器(B)</p>
                      <div style="width: 100px;height: 2px;position: absolute;left: -100px;top: 50%;background: #333333;">
                        <span style="position: absolute;left: -8px;top: -7px;">◀</span>
                        <p style="position: absolute;bottom: -20px;font-size: 12px;color:#666;">ka上行B</p>
                      </div>
                      <div style="width: 100px;height: 2px;position: absolute;right: -100px;top: 50%;background: #333333;">
                        <span style="position: absolute;left: -3px;top: -7px;">◀</span>
                        <p style="position: absolute;bottom: -20px;font-size: 12px;color:#666;">中频上行B</p>
                      </div>
                    </div>
                    <div class="device-box block">
                      <p>ka下变频器(A)</p>
                      <div style="width: 106px;height: 2px;position: absolute;left: -106px;top: 60%;background: #333333;">
                        <span style="position: absolute;right: 0px;top: -7px;">▶</span>
                        <p style="position: absolute;bottom: -20px;font-size: 12px;color:#666;">ka下行A</p>
                      </div>
                      <div style="width: 106px;height: 2px;position: absolute;right: -106px;top: 60%;background: #333333;">
                        <span style="position: absolute;right: 0px;top: -7px;">▶</span>
                        <p style="position: absolute;bottom: -20px;font-size: 12px;color:#666;">中频下行A</p>
                      </div>
                    </div>
                    <div class="device-box block">
                      <p>ka下变频器(B)</p>
                      <div style="width: 106px;height: 2px;position: absolute;left: -106px;top: 60%;background: #333333;">
                        <span style="position: absolute;right: 0px;top: -7px;">▶</span>
                        <p style="position: absolute;bottom: -20px;font-size: 12px;color:#666;">ka下行B</p>
                      </div>
                      <div style="width: 106px;height: 2px;position: absolute;right: -106px;top: 60%;background: #333333;">
                        <span style="position: absolute;right: 0px;top: -7px;">▶</span>
                        <p style="position: absolute;bottom: -20px;font-size: 12px;color:#666;">中频下行B</p>
                      </div>
                    </div>
                    <div class="device-box block">
                      <p>ka接收校零变频器</p>
                      <div style="width: 100px;height: 2px;position: absolute;left: -100px;top: 50%;background: #333333;">
                        <span style="position: absolute;left: -8px;top: -7px;">◀</span>
                        <p style="position: absolute;bottom: -20px;font-size: 12px;color:#666;">ka下行</p>
                      </div>
                      <div style="width: 100px;height: 2px;position: absolute;right: -100px;top: 50%;background: #333333;">
                        <span style="position: absolute;left: -3px;top: -7px;">◀</span>
                        <p style="position: absolute;bottom: -20px;font-size: 12px;color:#666;">中频下行</p>
                      </div>
                    </div>
                  </div>
                  <div class="inline-block" style="margin-left: 80px;">
                    <div class="device-box" style="width: 18px;height: 240px;">
                      <p style="width: 14px;margin-top: 50px;font-size:14px;">星地中频分路组合</p>
                    </div>
                  </div>
                </div>
                <div class="block" style="border:1px solid #333;margin-top: 30px;">
                  <p>ka波控子系统</p>
                  <div class="device-box" style="width: 90%;">
                    <p>ka波控信号处理机(A)</p>
                    <!--链接ka基带子系统-->
                    <div style="width: 125px;height: 2px;background: #333;position: absolute;right: -125px;top:50%;">
                      <span style="position: absolute;left: -6px;top: -6px;">◀</span>
                      <div style="width: 2px;height: 100px;position: absolute;right: 0;top: -100px; background: #333;"></div>
                    </div>
                  </div>
                  <div class="device-box" style="width: 90%;">
                    <p>ka波控信号处理机(B)</p>
                    <!--链接ka基带子系统-->
                    <div style="width: 155px;height: 2px;background: #999;position: absolute;right: -155px;top:50%;">
                      <span style="position: absolute;left: -6px;top: -6px;color: #999;">◀</span>
                      <div style="width: 2px;height: 130px;position: absolute;right: 0;top: -130px; background: #999;"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="inline-block" style="margin-left: 80px;vertical-align: top;">
                <div class="device-box" style="height: 30px;">
                  <p>ka扩频码设备</p>
                  <!--链接ka星间链路模拟源-->
                  <div style="width: 206px;height: 4px;position: absolute;left: -206px;top: 50%;background: #999;">
                    <span style="position: absolute;left: -4px;top: -7px;color:#999;">◀</span>
                    <p style="position: absolute;top: -20px;font-size: 12px;color:#999;">扩频码</p>
                  </div>
                  <!--链接ka基带子系统-->
                  <div style="width: 4px;height: 15px;position: absolute;background: #999;bottom:-15px;left:50%;">
                    <span style="position: absolute;bottom: -4px;left: -4px;color:#999;">▼</span>
                  </div>
                </div>
                <div class="block" style="border:1px solid #333;height: 280px;">
                  <p style="line-height: 30px;">ka基带子系统</p>
                  <div class="device-box" style="margin-top: 10px;height: 40px;">
                    <p style="line-height: 40px;">ka发射基带(A)</p>
                    <!--链接星地中频分路组合-->
                    <div style="width: 96px;height: 2px;position: absolute;left: -96px;top: 10%;background: #333333;">
                      <span style="position: absolute;left: -4px;top: -7px;">◀</span>
                      <p style="position: absolute;top: -20px;font-size: 12px;color:#666;">发射A</p>
                    </div>
                    <div style="width: 96px;height: 2px;position: absolute;left: -96px;top: 80%;background: #333333;">
                      <span style="position: absolute;right: 0px;top: -7px;">▶</span>
                      <p style="position: absolute;top: -20px;font-size: 12px;color:#666;">校零/小环A</p>
                    </div>
                  </div>
                  <div class="device-box" style="margin-top: 10px;height: 40px;">
                    <p style="line-height: 40px;">ka发射基带(B)</p>
                    <!--链接星地中频分路组合-->
                    <div style="width: 96px;height: 2px;position: absolute;left: -96px;top: 10%;background: #333333;">
                      <span style="position: absolute;left: -4px;top: -7px;">◀</span>
                      <p style="position: absolute;top: -20px;font-size: 12px;color:#666;">发射B</p>
                    </div>
                    <div style="width: 96px;height: 2px;position: absolute;left: -96px;top: 80%;background: #333333;">
                      <span style="position: absolute;right: 0px;top: -7px;">▶</span>
                      <p style="position: absolute;top: -20px;font-size: 12px;color:#666;">校零/小环B</p>
                    </div>
                  </div>
                  <div class="device-box" style="margin-top: 10px;height: 40px;">
                    <p style="line-height: 40px;">ka接收基带(A)</p>
                    <!--链接星地中频分路组合-->
                    <div style="width: 96px;height: 2px;position: absolute;left: -96px;top: 10%;background: #333333;">
                      <span style="position: absolute;left: -4px;top: -7px;">◀</span>
                      <p style="position: absolute;top: -20px;font-size: 12px;color:#666;">接收A</p>
                    </div>
                    <div style="width: 96px;height: 2px;position: absolute;left: -96px;top: 80%;background: #333333;">
                      <span style="position: absolute;right: 0px;top: -7px;">▶</span>
                      <p style="position: absolute;top: -20px;font-size: 12px;color:#666;">校零/效验A</p>
                    </div>
                  </div>
                  <div class="device-box" style="margin-top: 10px;height: 40px;">
                    <p style="line-height: 40px;">ka接收基带(B)</p>
                    <!--链接星地中频分路组合-->
                    <div style="width: 96px;height: 2px;position: absolute;left: -96px;top: 10%;background: #333333;">
                      <span style="position: absolute;left: -4px;top: -7px;">◀</span>
                      <p style="position: absolute;top: -20px;font-size: 12px;color:#666;">接收B</p>
                    </div>
                    <div style="width: 96px;height: 2px;position: absolute;left: -96px;top: 80%;background: #333333;">
                      <span style="position: absolute;right: 0px;top: -7px;">▶</span>
                      <p style="position: absolute;top: -20px;font-size: 12px;color:#666;">校零/效验B</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--交换机-->
      <div class="inline-block">
        <div class="device-box" style="width: 16px;height: 1000px;">
          <p style="margin-top: 300px;">网络交换机A/B</p>
          <!--链接地面通信网-->
          <div class="line " style="width: 1035px;height: 3px;background: #666666;top: 460px;left:-1045px;">
            <span style="color:#666;position: absolute;left: -6px;top: -7px;">◀</span>
            <span style="color:#666;position: absolute;right: -6px;top: -7px;">▶</span>
          </div>
          <!--链接ka基带子系统-->
          <div class="line " style="width: 30px;height: 3px;background: #666666;top: 70%;left:-36px;">
            <span style="color:#666;position: absolute;left: -6px;top: -7px;">◀</span>
            <span style="color:#666;position: absolute;right: -6px;top: -7px;">▶</span>
          </div>
          <!--链接ka波控子系统-->
          <div class="line " style="width: 240px;height: 3px;background: #666666;top: 95%;left:-250px;">
            <span style="color:#666;position: absolute;left: -6px;top: -7px;">◀</span>
            <span style="color:#666;position: absolute;right: -6px;top: -7px;">▶</span>
          </div>
        </div>
      </div>
      <!--右侧-->
      <div class="inline-block">
        <!--右侧第一行-->
        <div class="block">
          <div class="device-box inline-block">
            <p>载车(含自动调平机构)</p>
          </div>
          <div class="device-box inline-block">
            <p>自动寻北仪</p>
          </div>
          <div class="device-box inline-block">
            <p>电子方舱</p>
          </div>
          <div class="device-box inline-block">
            <p>全站仪</p>
          </div>
          <div class="device-box inline-block">
            <p>GNSS测资测向定位接收机</p>
          </div>
          <div class="device-box inline-block">
            <p>GNSS基准接收机</p>
          </div>
        </div>
        <!--右侧第二行-->
        <div class="block">
          <div class="inline-block" style="height: 50px;margin-left: 100px;position: relative;padding-left: 10px;">
            <!--链接网络交换机-->
            <div class="line " style="width: 100px;height: 3px;background: #666666;top: 50%;left:-100px;">
              <span style="color:#666;position: absolute;left: -6px;top: -6px;">◀</span>
              <span style="color:#666;position: absolute;right: -6px;top: -6px;">▶</span>
              <p style="position: absolute;top: -50px;font-size: 12px;">寻北数据,坐标基准标校数据,设备工况等</p>
            </div>
            <div class="block">
              <p style="line-height: 30px;">主电源AC 220V</p>
            </div>
            <div class="block">
              <p style="line-height: 30px;">备电源AC 220V</p>
            </div>
          </div>
          <div class="inline-block" style="margin-left: 20px;">
            <div class="device-box block">
              <p>输出配电箱</p>
              <div class="line " style="width: 20px;height: 2px;background: #333;top: 10%;left:-20px;">
                <span style="color:#333;position: absolute;left: -6px;top: -6px;">◀</span>
              </div>
              <div class="line " style="width: 20px;height: 2px;background: #333;top: 50%;left:-20px;">
                <span style="color:#333;position: absolute;left: -6px;top: -6px;">◀</span>
              </div>
              <div class="line " style="width: 20px;height: 2px;background: #333;top: 90%;left:-20px;">
                <span style="color:#333;position: absolute;left: -6px;top: -6px;">◀</span>
              </div>
            </div>
            <div class="device-box block">
              <p>输出配电箱</p>
              <div class="line " style="width: 20px;height: 2px;background: #333;top: 10%;left:-20px;">
                <span style="color:#333;position: absolute;left: -6px;top: -6px;">◀</span>
              </div>
              <div class="line " style="width: 20px;height: 2px;background: #333;top: 50%;left:-20px;">
                <span style="color:#333;position: absolute;left: -6px;top: -6px;">◀</span>
              </div>
              <div class="line " style="width: 20px;height: 2px;background: #333;top: 90%;left:-20px;">
                <span style="color:#333;position: absolute;left: -6px;top: -6px;">◀</span>
              </div>
            </div>
          </div>
          <div class="inline-block">
            <div class="device-box block">
              <p>UPS电源</p>
              <div class="line " style="width: 20px;height: 2px;background: #333;top: 50%;left:-20px;">
                <span style="color:#333;position: absolute;left: -6px;top: -6px;">◀</span>
              </div>
            </div>
            <div class="device-box block">
              <p>UPS电源</p>
              <div class="line " style="width: 20px;height: 2px;background: #333;top: 50%;left:-20px;">
                <span style="color:#333;position: absolute;left: -6px;top: -6px;">◀</span>
              </div>
            </div>
          </div>
          <div class="device-box inline-block" style="height: 50px;">
            <p style="line-height: 50px;">输入配电箱</p>
            <div class="line " style="width: 20px;height: 2px;background: #333;top: 20%;left:-20px;">
              <span style="color:#333;position: absolute;left: -6px;top: -6px;">◀</span>
            </div>
            <div class="line " style="width: 20px;height: 2px;background: #333;top: 80%;left:-20px;">
              <span style="color:#333;position: absolute;left: -6px;top: -6px;">◀</span>
            </div>
          </div>
          <div class="device-box inline-block">
            <p>防雷箱</p>
            <div class="line " style="width: 20px;height: 2px;background: #333;top: 50%;left:-20px;">
              <span style="color:#333;position: absolute;left: -6px;top: -6px;">◀</span>
            </div>
          </div>
          <div class="inline-block" style="position: relative;margin-left: 10px;">
            <p>380V/AC</p>
            <div class="line " style="width: 20px;height: 2px;background: #333;top: 50%;left:-20px;">
              <span style="color:#333;position: absolute;left: -6px;top: -6px;">◀</span>
            </div>
          </div>
        </div>
        <!--右侧第三行-->
        <!--数据处理与监控分系统-->
        <div class="block" style="padding: 20px;border:1px solid #000;width: 240px;">
          <div class="block" style="border:2px solid #333;">
            <div class="device-box inline-block" style="border:none;">
              <img src="../assets/img/jisuanji.png" alt="">
              <p>业务处理计算机(A)</p>
              <!--链接网络交换机-->
              <div class="line " style="width: 40px;height: 3px;background: #666666;top: 50%;left:-40px;">
                <span style="color:#666;position: absolute;left: -6px;top: -6px;">◀</span>
                <span style="color:#666;position: absolute;right: -6px;top: -6px;">▶</span>
              </div>
            </div>
            <div class="device-box inline-block" style="border:none;">
              <img src="../assets/img/jisuanji.png" alt="">
              <p>业务处理计算机(B)</p>
            </div>
          </div>
          <div class="block" style="margin-top: 20px;border:2px solid #333;">
            <p style="text-align: left;padding-left: 50px;">视频监控设备</p>
            <div class="device-box inline-block" style="border:none;">
              <img src="../assets/img/shexiangji.png" alt="">
              <p>摄像头</p>
              <!--链接网络交换机-->
              <div class="line " style="width: 40px;height: 3px;background: #666666;top: 50%;left:-40px;">
                <span style="color:#666;position: absolute;left: -6px;top: -6px;">◀</span>
                <span style="color:#666;position: absolute;right: -6px;top: -6px;">▶</span>
              </div>
            </div>
            <div class="device-box inline-block" style="border:none;">
              <p>网络硬盘录像机</p>
            </div>
          </div>
          <div class="block" style="margin-top: 20px;border:2px solid #333;">
            <div class="device-box inline-block" style="border:none;">
              <img src="../assets/img/jisuanji.png" alt="">
              <p>数据处理计算机(A)</p>
              <!--链接网络交换机-->
              <div class="line " style="width: 40px;height: 3px;background: #666666;top: 50%;left:-40px;">
                <span style="color:#666;position: absolute;left: -6px;top: -6px;">◀</span>
                <span style="color:#666;position: absolute;right: -6px;top: -6px;">▶</span>
              </div>
            </div>
            <div class="device-box inline-block" style="border:none;">
              <img src="../assets/img/jisuanji.png" alt="">
              <p>数据处理计算机(B)</p>
            </div>
          </div>
          <div class="block" style="margin-top: 20px;border:2px solid #333;">
            <div class="device-box inline-block" style="border:none;">
              <img src="../assets/img/jisuanji.png" alt="">
              <p>监控工控机(A)</p>
              <!--链接网络交换机-->
              <div class="line " style="width: 40px;height: 3px;background: #666666;top: 50%;left:-40px;">
                <span style="color:#666;position: absolute;left: -6px;top: -6px;">◀</span>
                <span style="color:#666;position: absolute;right: -6px;top: -6px;">▶</span>
              </div>
            </div>
            <div class="device-box inline-block" style="border:none;">
              <img src="../assets/img/jisuanji.png" alt="">
              <p>伴随升级验证计算机</p>
            </div>
          </div>
        </div>
        <!--右侧第四行-->
        <div class="block" style="padding: 20px;border: 1px dashed #000;margin-top: 20px;margin-left: 26px;">
          <div class="inline-block">
            <div class="device-box block" style="height: 80px;">
              <p>频标切换器(含网络授时)A</p>
              <div class="line " style="width: 70px;height: 3px;background: #666666;top: 10%;left:-70px;">
                <span style="color:#666;position: absolute;left: -6px;top: -6px;">◀</span>
                <span style="color:#666;position: absolute;right: -6px;top: -6px;">▶</span>
              </div>
              <div class="line " style="width: 50px;height: 2px;background: #333;top: 40%;left:-50px;">
                <span style="color:#333;position: absolute;left: -6px;top: -8px;">◀</span>
                <p style="position: absolute;top: -15px;font-size: 12px">10MHZ</p>
              </div>
              <div class="line " style="width: 50px;height: 2px;background: #333;top: 55%;left:-50px;">
                <span style="color:#333;position: absolute;left: -6px;top: -8px;">◀</span>
                <p style="position: absolute;top: -15px;font-size: 12px">1pps</p>
              </div>
              <div class="line " style="width: 50px;height: 2px;background: #333;top: 70%;left:-50px;">
                <span style="color:#333;position: absolute;left: -6px;top: -8px;">◀</span>
                <p style="position: absolute;top: -15px;font-size: 12px">B码</p>
              </div>
              <div class="line " style="width: 50px;height: 2px;background: #333;top: 90%;left:-50px;">
                <span style="color:#333;position: absolute;left: -6px;top: -8px;">◀</span>
                <span style="color:#333;position: absolute;right: -6px;top: -8px;">▶</span>
                <p style="position: absolute;top: -15px;font-size: 12px">NTP</p>
              </div>
            </div>
            <div class="device-box block" style="height: 80px;">
              <p>频标切换器(含网络授时)B</p>
              <div class="line " style="width: 70px;height: 3px;background: #666666;top: 10%;left:-70px;">
                <span style="color:#666;position: absolute;left: -6px;top: -6px;">◀</span>
                <span style="color:#666;position: absolute;right: -6px;top: -6px;">▶</span>
              </div>
              <div class="line " style="width: 50px;height: 2px;background: #333;top: 40%;left:-50px;">
                <span style="color:#333;position: absolute;left: -6px;top: -8px;">◀</span>
                <p style="position: absolute;top: -15px;font-size: 12px">10MHZ</p>
              </div>
              <div class="line " style="width: 50px;height: 2px;background: #333;top: 55%;left:-50px;">
                <span style="color:#333;position: absolute;left: -6px;top: -8px;">◀</span>
                <p style="position: absolute;top: -15px;font-size: 12px">1pps</p>
              </div>
              <div class="line " style="width: 50px;height: 2px;background: #333;top: 70%;left:-50px;">
                <span style="color:#333;position: absolute;left: -6px;top: -8px;">◀</span>
                <p style="position: absolute;top: -15px;font-size: 12px">B码</p>
              </div>
              <div class="line " style="width: 50px;height: 2px;background: #333;top: 90%;left:-50px;">
                <span style="color:#333;position: absolute;left: -6px;top: -8px;">◀</span>
                <span style="color:#333;position: absolute;right: -6px;top: -8px;">▶</span>
                <p style="position: absolute;top: -15px;font-size: 12px">NTP</p>
              </div>
            </div>
          </div>
          <div class="inline-block" style="margin-left: 60px;">
            <div class="device-box block">
              <p>铷原子频率标准(含北斗/GNSS授时)A</p>
              <div class="line " style="width: 80px;height: 2px;background: #333;top: 20%;left:-80px;">
                <span style="color:#333;position: absolute;left: -6px;top: -8px;">◀</span>
                <p style="position: absolute;top: -15px;font-size: 12px">10MHZ,1pps,B码</p>
              </div>
              <div style="width: 40px;height: 2px;background: #333;top: 80%;left:-40px;position: absolute">
                <div style="height: 40px;width: 2px;background: #333333;position: absolute;">
                  <div style="width: 40px;height: 2px;background: #333;left:-40px;position: absolute;bottom: 0;">
                    <span style="color:#333;position: absolute;left: -6px;top: -8px;">◀</span>
                  </div>
                </div>
              </div>
              <div style="height: 30px;width: 2px;background: #333333;position: absolute;top: -30px;">
                <span style="position: absolute;bottom: -3px;left: -4px;">▼</span>
                <div style="width: 80px;height: 2px;background: #333333;position: absolute"></div>
              </div>
              <!--北斗GPS天线-->
              <div style="width: 180px;height: 2px;background: #666666;position: absolute;right: -180px;top: 10%;">
                <div style="height: 30px;width: 2px;background: #666666;position: absolute;top: -30px;right: 0;">
                  <span style="position: absolute;top: -26px;left: -7px;color:#999;font-size: 30px !important;">▽</span>
                </div>
                <p style="position: absolute;top: -15px;font-size: 12px">北斗/GPS天线</p>
              </div>
            </div>
            <div class="device-box block">
              <p>铷原子频率标准(含北斗/GNSS授时)B</p>
              <div class="line " style="width: 80px;height: 2px;background: #333;top: 80%;left:-80px;">
                <span style="color:#333;position: absolute;left: -6px;top: -8px;">◀</span>
                <p style="position: absolute;top: -15px;font-size: 12px">10MHZ,1pps,B码</p>
              </div>
              <div style="width: 20px;height: 2px;background: #333;top: 20%;left:-20px;position: absolute">
                <div style="height: 40px;width: 2px;background: #333333;position: absolute;top: -40px;">
                  <div style="width: 60px;height: 2px;background: #333;left:-60px;position: absolute;top: 0;">
                    <span style="color:#333;position: absolute;left: -6px;top: -8px;">◀</span>
                  </div>
                </div>
              </div>
              <div style="height: 30px;width: 2px;background: #333333;position: absolute;bottom: -30px;">
                <span style="position: absolute;top: -6px;left: -5px;">▲</span>
                <div style="width: 80px;height: 2px;background: #333333;position: absolute;bottom: 0;"></div>
              </div>
              <!--北斗GPS天线-->
              <div style="width: 180px;height: 2px;background: #666666;position: absolute;right: -180px;top: 90%;">
                <div style="height: 30px;width: 2px;background: #666666;position: absolute;top: -30px;right: 0;">
                  <span style="position: absolute;top: -26px;left: -7px;color:#999;font-size: 30px !important;">▽</span>
                </div>
                <p style="position: absolute;top: -15px;font-size: 12px">北斗/GPS天线</p>
              </div>
            </div>
          </div>
          <div class="inline-block">
            <div class="device-box block">
              <p>军用时码终端</p>
              <div style="height: 30px;width: 2px;background: #333333;position: absolute;bottom: -30px;left: 80%;">
                <div style="width: 80px;height: 2px;background: #333333;position: absolute;bottom: 0;left: -80px;">
                  <span style="position: absolute;left: -4px;top: -6px;">◀</span>
                  <p style="position: absolute;top: -15px;font-size: 12px">秒脉冲+TOD</p>
                </div>
              </div>
              <div style="height: 30px;width: 2px;background: #333333;position: absolute;top: -30px;left: 80%;">
                <div style="width: 80px;height: 2px;background: #333333;position: absolute;top: 0;left: -80px;">
                  <span style="position: absolute;left: -4px;top: -6px;">◀</span>
                  <p style="position: absolute;bottom: -15px;font-size: 12px">秒脉冲+TOD</p>
                </div>
              </div>
              <!--授时天线-->
              <div style="width: 180px;height: 2px;background: #666666;position: absolute;right: -180px;top: 50%;">
                <div style="height: 30px;width: 2px;background: #666666;position: absolute;top: -30px;right: 0;">
                  <span style="position: absolute;top: -26px;left: -7px;color:#999;font-size: 30px !important;">▽</span>
                </div>
                <p style="position: absolute;top: -15px;font-size: 12px">授时天线</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--最右侧-->
      <div class="flow-container inline-block" style="vertical-align: bottom;">
        <p>导航卫星授时</p>
        <div class="device-box" style="border:none">
          <img src="../assets/img/weixin.png" alt="">
          <p>北斗三号卫星</p>
        </div>
        <div class="device-box" style="border:none;position: relative">
          <img src="../assets/img/weixin.png" alt="">
          <div style="position: absolute;width: 300px;height: 2px;border-top:2px dashed #999;left: -300px;top: 120%;transform: rotateZ(-26deg);"></div>
          <div style="position: absolute;width: 300px;height: 2px;border-top:2px dashed #999;left: -300px;top: 207%;transform: rotateZ(-36deg);"></div>
          <p>GPS卫星</p>
        </div>
        <div style="margin-top: 80px;margin-bottom: 100px;position: relative">
          <p>无线授时</p>
          <img style="width: 100px;" src="../assets/img/shipin.png" alt="">
          <div style="position: absolute;width: 150px;height: 2px;border-top:2px dashed #999;left: -150px;top: 22%;transform: rotateZ(-16deg);"></div>
          <p>军用时频中心</p>
        </div>
      </div>
    </div>
    <!--设置-->
    <el-dialog
      title="参数设置"
      :visible.sync="dialogVisible.switch"
      width="30%"
      center>
      <component v-bind:is="currentTabComponent"></component>
    </el-dialog>
  </div>
</template>

<script>
import flow_zj from './flow_zj'
import flow_xdsp from './flow_xdsp'
import flow_xdzp from './flow_xdzp'
export default {
  name: 'flow',
  data () {
    return {
      Status: {
        StationInter_state_report: {},
        CenterFrequency_state_report: {},
        EmitFrequency_state_report: {}
      },
      line2: true,
      selected: '1',
      changeSwitch1: true,
      changeSwitch2: true,
      currentTabComponent: 'flow_zj' // 动态组件名称
    }
  },
  components: {
    flow_zj,
    flow_xdsp,
    flow_xdzp
  },
  computed: {
    device: function () {
      return {
        StationInter: this.$device.StationInter,
        EmitFrequency: this.$device.EmitFrequency,
        CenterFrequency: this.$device.CenterFrequency
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
        this.allGet()
      }
    }
  },
  mounted () {
    this.allGet()
  },
  methods: {
    // 三个设备依次获取数据,间隔400毫秒
    allGet () {
      let i = 0
      let deviceArr = ['StationInter', 'EmitFrequency', 'CenterFrequency']
      let timer = null
      timer = setInterval(() => {
        if (i === deviceArr.length - 1) {
          clearInterval(timer)
          timer = null
        }
        this.get(deviceArr[i])
        i++
      }, 500)
    },
    // 获取数据
    get (deviceName) {
      const Socket = this.Socket
      let self = this
      let $utils = this.$utils
      let $ws = this.$ws
      let structGet = ''
      if (deviceName === 'StationInter') {
        structGet = this.structGet('StationInter')
      }
      if (deviceName === 'EmitFrequency') {
        structGet = this.structGet('EmitFrequency')
      }
      if (deviceName === 'CenterFrequency') {
        structGet = this.structGet('CenterFrequency')
      }
      if (Socket) {
        // 请求数据
        $ws.sendKey(Socket, '/api/monitor/autoGet', structGet.keyArray)
        // 接收数据
        Socket.onmessage = function (response) {
          // 收到消息才关闭重新连接遮罩层
          $utils.readData(response.data, structGet, function (data) {
            if (data.type === 0) {
              for (let key in data.data) {
                self.Status[key] = data.data[key]
              }
            }
            if (data.type === 1) {
              if (structGet.keyArray.includes(data.key)) {
                self.allGet()
              }
            }
          })
        }
      } else {
        self.$store.commit('Socket', null)
      }
    },
    // 获取设备id和key数组、结构体信息
    structGet (deviceName) {
      let keyArray = []
      let detailed = []
      let id = this.device[deviceName].id
      let ifBaseband = this.device[deviceName].ifBaseband
      let structGetArray = this.device[deviceName].structGetArray
      for (let i = 0; i < structGetArray.length; i++) {
        let key = structGetArray[i]
        keyArray.push(this.device[deviceName].struct[key].key)
        // detailed[key] = this.device.struct[key]
        detailed.push({
          name: key,
          data: this.device[deviceName].struct[key]
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
    structSet (deviceName) {
      let keyArray = []
      let detailed = []
      let id = this.device[deviceName].id
      let ifBaseband = this.device[deviceName].ifBaseband
      let structSetArray = this.device[deviceName].structSetArray
      for (let i = 0; i < structSetArray.length; i++) {
        let key = structSetArray[i]
        keyArray.push(this.device[deviceName].struct[key].key)
        // detailed[key] = this.device.struct[key]
        detailed.push({
          name: key,
          data: this.device[deviceName].struct[key]
        })
      }
      return {
        id: id,
        ifBaseband: ifBaseband,
        keyArray: keyArray,
        detailed: detailed
      }
    },
    edit (name) {
      const Socket = this.Socket
      let self = this
      let $utils = this.$utils
      let $ws = this.$ws
      let device = ''
      let structGet = ''
      let structSet = ''
      // 站间中频设备信息、状态上报结构体、参数下发结构体
      if (name === 'flow_zj') {
        device = this.device.StationInter
        structGet = this.structGet('StationInter')
        structSet = this.structSet('StationInter')
      }
      // 星地射频设备信息、状态上报结构体、参数下发结构体
      if (name === 'flow_xdsp') {
        device = this.$device.EmitFrequency
        structGet = this.structGet('EmitFrequency')
        structSet = this.structSet('EmitFrequency')
      }
      // 星地中频设备信息、状态上报结构体、参数下发结构体
      if (name === 'flow_xdzp') {
        device = this.$device.CenterFrequency
        structGet = this.structGet('CenterFrequency')
        structSet = this.structSet('CenterFrequency')
      }
      // 模态框组件名
      this.currentTabComponent = name
      if (Socket) {
        // 请求设置数据
        $ws.sendKey(Socket, '/api/parameter/getParameter', structSet.id)
        self.$store.commit('modal', {switch: true, type: 0})
        self.$store.commit('device', device)
        // 接收数据
        Socket.onmessage = function (response) {
          $utils.readData(response.data, structSet, function (data) {
            if (data.type === 0) {
              if (Object.keys(data.data).length > 0) {
                self.$store.commit('components_data', data.data)
              }
            }
            if (data.type === 1) {
              if (structGet.keyArray.includes(data.key)) {
                self.allGet()
              }
            }
          })
        }
      }
    },
    move (e) {
      let self = this
      let flag = true
      let clientX = e.clientX - this.$refs.flow.offsetLeft
      let clientY = e.clientY - this.$refs.flow.offsetTop
      document.onmousemove = (event) => {
        if (!flag) return false
        let domX = event.clientX
        let domY = event.clientY
        let flowTop = domY - clientY
        let flowLeft = domX - clientX
        let flowWidth = self.$refs.flow.offsetWidth
        let flowHeight = self.$refs.flow.offsetHeight
        let windowWidth = document.documentElement.clientWidth
        let windowHeight = document.documentElement.clientHeight
        // 左侧边界
        if (flowLeft > 0) {
          flowLeft = 0
        }
        // 右侧边界
        if ((windowWidth - flowWidth) > flowLeft) {
          flowLeft = windowWidth - flowWidth
        }
        // 上方边界
        if (flowTop > 0) {
          flowTop = 0
        }
        // 下方边界
        if ((windowHeight - flowHeight) > flowTop) {
          flowTop = windowHeight - flowHeight
        }
        self.$refs.flow.style.top = flowTop + 'px'
        self.$refs.flow.style.left = flowLeft + 'px'
      }
      document.onmouseup = (e) => {
        flag = false
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

<style scoped>
  @import "../assets/css/flow.css";
</style>
