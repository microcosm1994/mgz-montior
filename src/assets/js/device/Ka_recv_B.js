/*Ka接收基带B协议*/
export const device_Ka_recv_B={
	id:'6',
	sId:'0',
	ifBaseband:true,
	struct:{
		/*Ka发送基带调制参数	*/
		KA_S_up_modulation:{
			key:"43",
			orderBy:"1",
			fields:{

			/* 工作模式 */
			WorkMode:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'连续体制',
					'01':'时分体制'
				}

			},
			/* 调制开关 */
			ModSwitch:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'关闭',
					'1':'开启'
				}

			},
			/* 调制电平 */
			Level:{
				offset:16,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 伪码加调/去调 */
			ModuPN:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'加调',
					'00':'去调'
				}

			},
			/* 数据加调/去调 */
			ModuData:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'加调',
					'00':'去调'
				}

			},
			/* 调制伪码序号 */
			PRN:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 调制伪码类型 */
			PNsel:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'非周期码',
					'01':'周期码'
				}

			},
			/* 输出载波中频 */
			CarIF:{
				offset:64,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 多普勒动态模拟开关 */
			SimSw:{
				offset:96,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'关闭',
					'1':'开启'
				}

			},
			/* 上行多普勒预置 */
			Offset:{
				offset:112,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 多普勒模拟频率范围 */
			FreRange:{
				offset:128,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'关闭',
					'1':'开启'
				}

			},
			/* 最大多普勒变化率 */
			MaxDop1st:{
				offset:144,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 调制数据速率 */
			Data_rate:{
				offset:160,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'4.096',
					'1':'20.48',
					'2':'51.2',
					'3':'102.4',
					'4':'204.8'
				}

			},
			/* LDPC开关 */
			LDPC_EN:{
				offset:168,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'关闭',
					'1':'开启'
				}

			},
			/* 保留 */
			Res:{
				offset:176,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 保留 */
			Resd:{
				offset:192,
				length:64,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"WorkMode",
				"ModSwitch",
				"Level",
				"ModuPN",
				"ModuData",
				"PRN",
				"PNsel",
				"CarIF",
				"SimSw",
				"Offset",
				"FreRange",
				"MaxDop1st",
				"Data_rate",
				"LDPC_EN",
				"Res",
				"Resd"
			]
		},
		/*Ka发送基带接收参数	*/
		KA_S_recv_param:{
			key:"44",
			orderBy:"2",
			fields:{

			/* 输入选择 */
			Input:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'左旋入',
					'01':'右旋入'
				}

			},
			/* 接收开关 */
			RecSwitch:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'关闭',
					'1':'开启'
				}

			},
			/* 接收伪码序号 */
			PRN:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 接收伪码类型 */
			PNsel:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'非周期码',
					'01':'周期码'
				}

			},
			/* 载波频率捕获范围 */
			AcquRange:{
				offset:32,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 时间不确定度捕获范围 */
			TimeRange:{
				offset:48,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 时间滑动范围 */
			TimeunsureRange:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 载波环路带宽 */
			PllBw:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'5',
					'01':'10',
					'02':'100',
					'03':'500',
					'04':'1k',
					'05':'2k'
				}

			},
			/* 接收数据速率 */
			Data_rate:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'4.096',
					'1':'20.48',
					'2':'51.2',
					'3':'102.4',
					'4':'204.8'
				}

			},
			/* LDPC开关 */
			LDPC_EN:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'关闭',
					'1':'开启'
				}

			},
			/* 保留 */
			Resd:{
				offset:96,
				length:160,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"Input",
				"RecSwitch",
				"PRN",
				"PNsel",
				"AcquRange",
				"TimeRange",
				"TimeunsureRange",
				"PllBw",
				"Data_rate",
				"LDPC_EN",
				"Resd"
			]
		},
		/*Ka发送基带时码单元参数	*/
		KA_S_time_unit:{
			key:"45",
			orderBy:"3",
			fields:{

			/* 内/外时频选择 */
			Mode:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'内时频',
					'01':'外时频'
				}

			},
			/* 保留 */
			Res1:{
				offset:8,
				length:24,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 年 */
			Year:{
				offset:32,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 天 */
			Day:{
				offset:48,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 时 */
			Hour:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 分 */
			Minute:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 秒 */
			Second:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 闰年标识 */
			Leap:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'是',
					'0':'否'
				}

			},
			/* 保留 */
			Res2:{
				offset:96,
				length:160,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"Mode",
				"Res1",
				"Year",
				"Day",
				"Hour",
				"Minute",
				"Second",
				"Leap",
				"Res2"
			]
		},
		/*Ka发送基带调制状态元素	*/
		KA_S_up_status:{
			key:"46",
			orderBy:"1",
			fields:{

			/* 多普勒频偏 */
			DopINco:{
				offset:0,
				length:32,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"Hz",
				defaultValue:"",
				option:{
				}

			},
			/* 数据类型标志 */
			DataSign:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'空帧',
					'01':'注入'
				}

			},
			/* 小环比对结果 */
			CmdFrmloop:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无效',
					'01':'比对正确',
					'02':'比对错误'
				}

			},
			/* 发送周计数 */
			Wnup:{
				offset:48,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 发送周内毫秒 */
			Sowup:{
				offset:64,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 生成周计数 */
			Wngn:{
				offset:96,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 生成周内毫秒 */
			Sowgn:{
				offset:112,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 比对错帧数 */
			CmdFrmerrnum:{
				offset:144,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 错帧序号 */
			CmdFrmerrID:{
				offset:160,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 保留 */
			RES:{
				offset:176,
				length:96,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"DopINco",
				"DataSign",
				"CmdFrmloop",
				"Wnup",
				"Sowup",
				"Wngn",
				"Sowgn",
				"CmdFrmerrnum",
				"CmdFrmerrID",
				"RES"
			]
		},
		/*Ka发送基带接收状态元素	*/
		KA_S_recv_status:{
			key:"47",
			orderBy:"2",
			fields:{

			/* 测量伪码锁定状态 */
			RecStaus_RecStatus_B0:{
				offset:0,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'锁定',
					'0':'未锁定'
				}

			},
			/* 测量载波锁定状态 */
			RecStaus_RecStatus_B1:{
				offset:1,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'锁定',
					'0':'未锁定'
				}

			},
			/* 通信伪码锁定状态 */
			RecStaus_RecStatus_B2:{
				offset:2,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'锁定',
					'0':'未锁定'
				}

			},
			/* 通信载波锁定状态 */
			RecStaus_RecStatus_B3:{
				offset:3,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'锁定',
					'0':'未锁定'
				}

			},
			/* 通信位同步锁定状态 */
			RecStaus_RecStatus_B4:{
				offset:4,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'锁定',
					'0':'未锁定'
				}

			},
			/* 通信通信帧同步锁定状态 */
			RecStaus_RecStatus_B5:{
				offset:5,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'锁定',
					'0':'未锁定'
				}

			},
			/* 保留 */
			RecStaus_Res_B7:{
				offset:6,
				length:1,
				dimension:1.0,
				showType:0,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 保留 */
			RecStaus_Res_B6:{
				offset:7,
				length:1,
				dimension:1.0,
				showType:0,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 干扰状态 */
			InterState:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无干扰',
					'01':'存在干扰'
				}

			},
			/* 信号功率 */
			Level:{
				offset:16,
				length:16,
				dimension:0.01,
				showType:1,
				encodeType:7,
				unitName:"dBm",
				defaultValue:"",
				option:{
				}

			},
			/* AGC电压 */
			AgcVolt:{
				offset:32,
				length:16,
				dimension:0.001,
				showType:1,
				encodeType:1,
				unitName:"V",
				defaultValue:"",
				option:{
				}

			},
			/* 载噪比 */
			C_N0:{
				offset:48,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"dBHz",
				defaultValue:"",
				option:{
				}

			},
			/* 载波多普勒 */
			CarrDopp:{
				offset:64,
				length:32,
				dimension:0.001,
				showType:1,
				encodeType:7,
				unitName:"Hz",
				defaultValue:"",
				option:{
				}

			},
			/* 伪码多普勒 */
			PNDopp:{
				offset:96,
				length:32,
				dimension:0.001,
				showType:1,
				encodeType:7,
				unitName:"Hz",
				defaultValue:"",
				option:{
				}

			},
			/* 捕获时差 */
			TimeDiff:{
				offset:128,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:7,
				unitName:"ms",
				defaultValue:"",
				option:{
				}

			},
			/* 捕获时间 */
			AcquTimeS:{
				offset:144,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"ms",
				defaultValue:"",
				option:{
				}

			},
			/* 保留 */
			Res:{
				offset:160,
				length:96,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"RecStaus_RecStatus_B0",
				"RecStaus_RecStatus_B1",
				"RecStaus_RecStatus_B2",
				"RecStaus_RecStatus_B3",
				"RecStaus_RecStatus_B4",
				"RecStaus_RecStatus_B5",
				"RecStaus_Res_B7",
				"RecStaus_Res_B6",
				"InterState",
				"Level",
				"AgcVolt",
				"C_N0",
				"CarrDopp",
				"PNDopp",
				"TimeDiff",
				"AcquTimeS",
				"Res"
			]
		},
		/*Ka发送基带跟踪接收机时频状态	*/
		KA_S_time_status:{
			key:"48",
			orderBy:"3",
			fields:{

			/* 外秒脉冲同步状态 */
			PpsStatus:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'不同步',
					'01':'同步'
				}

			},
			/* 外时统锁定状态 */
			TimeLockFlag:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'失锁',
					'01':'锁定'
				}

			},
			/* 时码信息低16位 */
			B000L16:{
				offset:16,
				length:16,
				dimension:25.0,
				showType:1,
				encodeType:1,
				unitName:"us",
				defaultValue:"",
				option:{
				}

			},
			/* 时码信息高32位 */
			B000H32:{
				offset:32,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:4,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 年 */
			Year:{
				offset:64,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 周计数 */
			WeekCount:{
				offset:80,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 周内毫秒计数 */
			SecondCount:{
				offset:96,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 锁定指示 */
			VcoLock:{
				offset:128,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'失锁',
					'01':'锁定'
				}

			},
			/* 保留 */
			Res:{
				offset:136,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 收发状态 */
			ModorRec:{
				offset:144,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'待机',
					'01':'接收',
					'02':'发送'
				}

			},
			/* 供电状态 */
			PowerSta:{
				offset:152,
				length:8,
				dimension:1.0,
				showType:2,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'status-error',
					'0':'status-success'
				}

			},
			/* 基带板状态 */
			PowerStaJD:{
				offset:160,
				length:8,
				dimension:1.0,
				showType:2,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'status-error',
					'1':'status-success'
				}

			},
			/* 硬件温度 */
			Temprature:{
				offset:168,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"℃",
				defaultValue:"",
				option:{
				}

			},
			/* 参数比对结果 */
			CmdErr:{
				offset:176,
				length:8,
				dimension:1.0,
				showType:2,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'status-error',
					'0':'status-success'
				}

			},
			/* 取码接口通信状态 */
			PRNSta:{
				offset:184,
				length:8,
				dimension:1.0,
				showType:2,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'status-error',
					'0':'status-success'
				}

			},
			/* 保留 */
			RES:{
				offset:192,
				length:64,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"PpsStatus",
				"TimeLockFlag",
				"B000L16",
				"B000H32",
				"Year",
				"WeekCount",
				"SecondCount",
				"VcoLock",
				"Res",
				"ModorRec",
				"PowerSta",
				"PowerStaJD",
				"Temprature",
				"CmdErr",
				"PRNSta",
				"RES"
			]
		},
		/*Ka发送基带时隙表	*/
		KA_S_time_slots:{
			key:"49",
			orderBy:"4",
			fields:{

			/* 时隙表数据 */
			Data:{
				offset:0,
				length:8192,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"Data"
			]
		},
		/*Ka发送基带调制数据	*/
		KA_S_modulation_data:{
			key:"50",
			orderBy:"5",
			fields:{

			/* 调制数据 */
			Word:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"Word"
			]
		},
		/*Ka发送基带解调数据	*/
		KA_S_demodulation_data:{
			key:"51",
			orderBy:"6",
			fields:{

			/* 整周计数 */
			B000_week_count:{
				offset:0,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 周内毫秒数 */
			B000_milliseconds:{
				offset:16,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 保留 */
			RES:{
				offset:48,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 解调数据N(帧长)个字 */
			Word:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"B000_week_count",
				"B000_milliseconds",
				"RES",
				"Word"
			]
		},
		/*Ka发送基带测量数据	*/
		KA_S_measure_data:{
			key:"52",
			orderBy:"7",
			fields:{

			/* 整周计数 */
			B000_week_count:{
				offset:0,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 周内毫秒数 */
			B000_milliseconds:{
				offset:16,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 保留 */
			RES:{
				offset:48,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 伪距 */
			PRG:{
				offset:64,
				length:64,
				dimension:0.01,
				showType:1,
				encodeType:1,
				unitName:"m",
				defaultValue:"",
				option:{
				}

			},
			/* 发射时延 */
			Detrs:{
				offset:128,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"ns",
				defaultValue:"",
				option:{
				}

			},
			/* 接收时延 */
			Dercv:{
				offset:160,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"ns",
				defaultValue:"",
				option:{
				}

			},
			/* 收发状态 */
			ModorRec:{
				offset:192,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'待机',
					'01':'接收',
					'02':'发送'
				}

			},
			/* 保留 */
			Res:{
				offset:200,
				length:192,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"B000_week_count",
				"B000_milliseconds",
				"RES",
				"PRG",
				"Detrs",
				"Dercv",
				"ModorRec",
				"Res"
			]
		},
		/*Ka发送基带小环数据	*/
		KA_S_smallring_data:{
			key:"53",
			orderBy:"8",
			fields:{

			/* 保留 */
			Res:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 小环比对结果 */
			CmdFrmloop:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无效',
					'01':'比对正确',
					'02':'比对错误'
				}

			},
			/* 发送周计数 */
			Wnup:{
				offset:16,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 发送周内毫秒 */
			Sowup:{
				offset:32,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 生成周计数 */
			Wngn:{
				offset:64,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 生成周内毫秒 */
			Sowgn:{
				offset:80,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 错帧序号 */
			CmdFrmerrID:{
				offset:112,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 比对错帧数 */
			CmdFrmerrnum:{
				offset:128,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"Res",
				"CmdFrmloop",
				"Wnup",
				"Sowup",
				"Wngn",
				"Sowgn",
				"CmdFrmerrID",
				"CmdFrmerrnum"
			]
		},
		/*Ka发送基带内存显示数据	*/
		KA_S_memory_data:{
			key:"54",
			orderBy:"9",
			fields:{

			/* 内存显示数据 */
			Data:{
				offset:0,
				length:8192,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"Data"
			]
		},
		/*报文头	*/
		messageHead:{
			key:"378",
			orderBy:"0",
			fields:{

			/* 应用标识号 */
			flag:{
				offset:0,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 信息报文帧序号 */
			seq:{
				offset:32,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 任务代号 */
			missionId:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 信息报文帧类型 */
			missionType:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 信息报文长度 */
			missionLenth:{
				offset:80,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 优先级 */
			priority:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 信息代号 */
			messageId:{
				offset:104,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 附加字 */
			addition:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 信源 */
			source:{
				offset:128,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 新宿 */
			target:{
				offset:144,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 保留字 */
			Rev:{
				offset:160,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 源分系统编号 */
			SourceSubsystemNumber:{
				offset:176,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 目的分系统编号 */
			TargetSubsystemNumber:{
				offset:192,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 命令类型 */
			commandType:{
				offset:208,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 同类命令序号 */
			commandSeq:{
				offset:224,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			fixed0:{
				offset:240,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 数据所占字节数 */
			byteNum:{
				offset:256,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"flag",
				"seq",
				"missionId",
				"missionType",
				"missionLenth",
				"priority",
				"messageId",
				"addition",
				"source",
				"target",
				"Rev",
				"SourceSubsystemNumber",
				"TargetSubsystemNumber",
				"commandType",
				"commandSeq",
				"fixed0",
				"byteNum"
			]
		}
	},
	/*设置结构体数组*/
	structSetArray:[
		"KA_S_up_modulation",
		"KA_S_recv_param",
		"KA_S_time_unit"
	],
	/*状态结构体数组*/
	structGetArray:[
		"KA_S_up_status",
		"KA_S_recv_status",
		"KA_S_time_status",
		"KA_S_time_slots",
		"KA_S_modulation_data",
		"KA_S_demodulation_data",
		"KA_S_measure_data",
		"KA_S_smallring_data",
		"KA_S_memory_data"
	]
}
