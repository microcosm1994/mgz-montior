/*卫通接收基带B协议*/
export const device_WT_recv_B={
	id:'19',
	sId:'0',
	ifBaseband:true,
	struct:{
		/*Ka发送基带B调制参数	*/
		KA_SB_up_modulation:{
			key:"345",
			orderBy:"0",
			fields:{

			/* 工作模式 */
			WorkMode:{
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
			/* 调制开关 */
			ModSwitch:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 调制电平 */
			Level:{
				offset:16,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
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
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 数据加调/去调 */
			ModuData:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 调制伪码序号 */
			PRN:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
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
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 输出载波中频 */
			CarIF:{
				offset:64,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
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
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 上行多普勒预置 */
			Offset:{
				offset:112,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
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
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 最大多普勒变化率 */
			MaxDop1st:{
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
			/* 调制数据速率 */
			Data_rate:{
				offset:160,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* LDPC开关 */
			LDPC_EN:{
				offset:168,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
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
		/*卫通接收通道解调参数设置	*/
		WT_R_Channel_demodulation:{
			key:"346",
			orderBy:"2",
			fields:{

			/* 接收通道载波中频频率 */
			RecCarrFreq:{
				offset:0,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 接收通道PRM编号 */
			Channel_ID:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 接收通道数据速率 */
			DataRateSel:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'12.5',
					'2':'62.5',
					'0':'500'
				}

			},
			/* 接收通道选择 */
			Channel_Sel:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'1',
					'1':'2',
					'2':'3',
					'3':'4',
					'4':'5',
					'5':'6',
					'6':'7',
					'7':'8',
					'8':'9',
					'9':'10',
					'10':'11',
					'11':'12',
					'12':'13',
					'13':'14',
					'14':'15',
					'15':'16',
					'16':'17',
					'17':'18',
					'18':'19',
					'19':'20'
				}

			},
			/* 保留 */
			Rsv1:{
				offset:56,
				length:8,
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
				"RecCarrFreq",
				"Channel_ID",
				"DataRateSel",
				"Channel_Sel",
				"Rsv1"
			]
		},
		/*卫通接收接收相关参数设置	*/
		WT_R_Related_parameters:{
			key:"347",
			orderBy:"3",
			fields:{

			/* 接收信号捕获门限 */
			AcqTh:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'强信号',
					'1':'中信号',
					'2':'弱信号'
				}

			},
			/* 译码输出通道选择 */
			LdpcSel:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'1',
					'1':'2',
					'2':'3',
					'3':'4',
					'4':'5',
					'5':'6',
					'6':'7',
					'7':'8',
					'8':'9',
					'9':'10',
					'10':'11',
					'11':'12',
					'12':'13',
					'13':'14',
					'14':'15',
					'15':'16',
					'16':'17',
					'17':'18',
					'18':'19',
					'19':'20'
				}

			},
			/* 伪码时间不缺定度 */
			TimeDiffRange:{
				offset:16,
				length:16,
				dimension:100.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 天线跟踪输出通道选择 */
			TrackSel:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'1',
					'1':'2',
					'2':'3',
					'3':'4',
					'4':'5',
					'5':'6',
					'6':'7',
					'7':'8',
					'8':'9',
					'9':'10',
					'10':'11',
					'11':'12',
					'12':'13',
					'13':'14',
					'14':'15',
					'15':'16',
					'16':'17',
					'17':'18',
					'18':'19',
					'19':'20'
				}

			},
			/* 内外参考选择 */
			RefSel:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'内参考',
					'1':'外参考'
				}

			},
			/* 保留 */
			Rsv2:{
				offset:48,
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
				"AcqTh",
				"LdpcSel",
				"TimeDiffRange",
				"TrackSel",
				"RefSel",
				"Rsv2"
			]
		},
		/*卫通接收时间设置	*/
		WT_R_Time_setting:{
			key:"348",
			orderBy:"5",
			fields:{

			/* 内/外时统选择 */
			Mode:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'外时统',
					'01':'内时统'
				}

			},
			/* 保留 */
			Rsv:{
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
			/* 闰年标志 */
			Leap:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:2,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'是',
					'0':'否'
				}

			}
			},
			fieldArray:[
				"Mode",
				"Rsv",
				"Year",
				"Day",
				"Hour",
				"Minute",
				"Second",
				"Leap"
			]
		},
		/*卫通接收校验发射控制设置	*/
		WT_R_Checkout_control:{
			key:"349",
			orderBy:"6",
			fields:{

			/* 调制开关 */
			ModSwich:{
				offset:0,
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
			/* 单载波开关 */
			SingleCarrSwich:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'单载波',
					'00':'扩频'
				}

			},
			/* 数据开关 */
			DataSwitch:{
				offset:16,
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
			/* 数据速率 */
			DataRateSel:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'12.5',
					'2':'62.5',
					'0':'500'
				}

			},
			/* 初始功率 */
			Power:{
				offset:32,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* PRM编号 */
			ChannelID:{
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
			/* 保留 */
			Rsv4:{
				offset:56,
				length:8,
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
				"ModSwich",
				"SingleCarrSwich",
				"DataSwitch",
				"DataRateSel",
				"Power",
				"ChannelID",
				"Rsv4"
			]
		},
		/*卫通接收数据采集通道设置	*/
		WT_R_Data_acquisition_channel:{
			key:"350",
			orderBy:"9",
			fields:{

			/* 62.5K数据采集通道设置 */
			DTMDSelect:{
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
			/* 5K数据采集通道设置 */
			DTEDSelect:{
				offset:16,
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
				"DTMDSelect",
				"DTEDSelect"
			]
		},
		/*卫通接收时统状态	*/
		WT_R_Time_state:{
			key:"352",
			orderBy:"10",
			fields:{

			/* 外秒脉冲同步状态 */
			PpsStatus:{
				offset:0,
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
			/* 外时统锁定状态 */
			TimeLockFlag:{
				offset:8,
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
			/* 时码信息低16位 */
			B000L16:{
				offset:16,
				length:16,
				dimension:25.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 时码信息高32位 */
			B000H32:{
				offset:32,
				length:32,
				dimension:1.0,
				showType:4,
				encodeType:2,
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
			/* 周内秒计数 */
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

			}
			},
			fieldArray:[
				"PpsStatus",
				"TimeLockFlag",
				"B000L16",
				"B000H32",
				"Year",
				"WeekCount",
				"SecondCount"
			]
		},
		/*卫通接收通道状态	*/
		WT_R_Receiving_channel_state:{
			key:"353",
			orderBy:"12",
			fields:{

			/* 接收状态B0 */
			RecStaus_Rec_Status_B0:{
				offset:0,
				length:1,
				dimension:1.0,
				showType:2,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'status-error',
					'1':'status-success'
				}

			},
			/* 接收状态B1 */
			RecStaus_Rec_Status_B1:{
				offset:1,
				length:1,
				dimension:1.0,
				showType:2,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'status-error',
					'1':'status-success'
				}

			},
			/* 接收状态B2 */
			RecStaus_Rec_Status_B2:{
				offset:2,
				length:1,
				dimension:1.0,
				showType:2,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'status-error',
					'1':'status-success'
				}

			},
			/* 接收状态B3 */
			RecStaus_Rec_Status_B3:{
				offset:3,
				length:1,
				dimension:1.0,
				showType:2,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'status-error',
					'1':'status-success'
				}

			},
			/* 接受状态B4 */
			RecStaus_Rec_Status_B4:{
				offset:4,
				length:1,
				dimension:1.0,
				showType:2,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'status-error',
					'1':'status-success'
				}

			},
			/* 保留位 */
			RecStaus_Rec_Status_Rsv_1:{
				offset:5,
				length:1,
				dimension:1.0,
				showType:0,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 保留位 */
			RecStaus_Rec_Status_Rsv_2:{
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
			/* 保留位 */
			RecStaus_Rec_Status_Rsv_3:{
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
			/* 数据速率 */
			DataRateSel:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'12.5',
					'2':'62.5',
					'0':'500'
				}

			},
			/* 保留 */
			Rsv:{
				offset:16,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
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
				encodeType:1,
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
				encodeType:1,
				unitName:"Hz",
				defaultValue:"",
				option:{
				}

			},
			/* 信号幅度 */
			AmpI:{
				offset:128,
				length:32,
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
				"RecStaus_Rec_Status_B0",
				"RecStaus_Rec_Status_B1",
				"RecStaus_Rec_Status_B2",
				"RecStaus_Rec_Status_B3",
				"RecStaus_Rec_Status_B4",
				"RecStaus_Rec_Status_Rsv_1",
				"RecStaus_Rec_Status_Rsv_2",
				"RecStaus_Rec_Status_Rsv_3",
				"DataRateSel",
				"Rsv",
				"AgcVolt",
				"C_N0",
				"CarrDopp",
				"PNDopp",
				"AmpI"
			]
		},
		/*卫通接收通道PRM编号状态	*/
		WT_R_Channel_number:{
			key:"354",
			orderBy:"13",
			fields:{

			/* 接收通道PRM编号 */
			Channel_ID:{
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
			/* 保留 */
			Rsv:{
				offset:16,
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
				"Channel_ID",
				"Rsv"
			]
		},
		/*卫通接收校验发射状态	*/
		WT_R_Checkout_test:{
			key:"355",
			orderBy:"15",
			fields:{

			/* 发射通道功率 */
			PowerControl:{
				offset:0,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"dBm",
				defaultValue:"",
				option:{
				}

			},
			/* 保留 */
			Rsv:{
				offset:16,
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
				"PowerControl",
				"Rsv"
			]
		},
		/*卫通接收硬件状态	*/
		WT_R_Hardware_state:{
			key:"356",
			orderBy:"16",
			fields:{

			/* 供电状态 */
			PowerSta:{
				offset:0,
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
			/* 硬件温度 */
			Temprature:{
				offset:8,
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
			/* 基带板工作状态 */
			VcoLock:{
				offset:16,
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
			/* 参数比对结果 */
			CmdErr:{
				offset:24,
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
			/* 与PRM模块通信状态 */
			PRMSta:{
				offset:32,
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
			Rsv:{
				offset:40,
				length:24,
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
				"PowerSta",
				"Temprature",
				"VcoLock",
				"CmdErr",
				"PRMSta",
				"Rsv"
			]
		},
		/*抗干扰状态	*/
		WT_R_anti_interference_status:{
			key:"367",
			orderBy:"14",
			fields:{

			/* 狭带干扰电平评估值 */
			Interfere_valuation:{
				offset:0,
				length:16,
				dimension:0.01,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 保留 */
			Rsv:{
				offset:16,
				length:12,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 干扰类型检测 */
			Interference_detection:{
				offset:28,
				length:2,
				dimension:1.0,
				showType:0,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'窄带干扰',
					'3':'扫频干扰',
					'1':'无干扰',
					'2':'无干扰'
				}

			},
			/* 多用户检测开关状态 */
			many_open_status:{
				offset:30,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'关闭',
					'1':'开启'
				}

			},
			/* 抗狭道干扰功能开关状态 */
			interfer_open_status:{
				offset:31,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'关闭',
					'1':'开启'
				}

			}
			},
			fieldArray:[
				"Interfere_valuation",
				"Rsv",
				"Interference_detection",
				"many_open_status",
				"interfer_open_status"
			]
		},
		/*接收信号功率状态	*/
		WT_R_Rec_status:{
			key:"368",
			orderBy:"11",
			fields:{

			/* 保留 */
			Rsv:{
				offset:0,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 信号功率 */
			signal_power:{
				offset:16,
				length:16,
				dimension:0.01,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"Rsv",
				"signal_power"
			]
		},
		/*接收通道复位设置	*/
		WT_R_ChReset:{
			key:"334",
			orderBy:"1",
			fields:{

			/* 保留 */
			Rec:{
				offset:0,
				length:12,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 接收通道20 */
			ChReset20:{
				offset:12,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道19 */
			ChReset19:{
				offset:13,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道18 */
			ChReset18:{
				offset:14,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道17 */
			ChReset17:{
				offset:15,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道16 */
			ChReset16:{
				offset:16,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道15 */
			ChReset15:{
				offset:17,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道14 */
			ChReset14:{
				offset:18,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道13 */
			ChReset13:{
				offset:19,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道12 */
			ChReset12:{
				offset:20,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道11 */
			ChReset11:{
				offset:21,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道10 */
			ChReset10:{
				offset:22,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道9 */
			ChReset9:{
				offset:23,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道8 */
			ChReset8:{
				offset:24,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道7 */
			ChReset7:{
				offset:25,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道6 */
			ChReset6:{
				offset:26,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道5 */
			ChReset5:{
				offset:27,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道4 */
			ChReset4:{
				offset:28,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道3 */
			ChReset3:{
				offset:29,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道2 */
			ChReset2:{
				offset:30,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			},
			/* 接收通道1 */
			ChReset1:{
				offset:31,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不复位',
					'1':'复位'
				}

			}
			},
			fieldArray:[
				"Rec",
				"ChReset20",
				"ChReset19",
				"ChReset18",
				"ChReset17",
				"ChReset16",
				"ChReset15",
				"ChReset14",
				"ChReset13",
				"ChReset12",
				"ChReset11",
				"ChReset10",
				"ChReset9",
				"ChReset8",
				"ChReset7",
				"ChReset6",
				"ChReset5",
				"ChReset4",
				"ChReset3",
				"ChReset2",
				"ChReset1"
			]
		},
		/*抗干扰功能设置	*/
		WT_R_inter_Set:{
			key:"337",
			orderBy:"4",
			fields:{

			/* 多用户检测开关 */
			detectionSwitch:{
				offset:0,
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
			/* 抗窄带干扰功能使能开关 */
			makeCanSwitch:{
				offset:16,
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

			}
			},
			fieldArray:[
				"detectionSwitch",
				"makeCanSwitch"
			]
		},
		/*报文头	*/
		messageHead:{
			key:"391",
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
		},
		/*设置有效标志	*/
		WT_Set_Valid_Flag:{
			key:"332",
			orderBy:"7",
			fields:{

			/* 保留字段 */
			Res:{
				offset:0,
				length:26,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 参数设置帧 */
			ValidFlag_V5_ct_set:{
				offset:26,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 应答帧 */
			ValidFlag_V5_ct_answer:{
				offset:42,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 状态帧 */
			ValidFlag_V5_ct_state:{
				offset:58,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 时间设置有效性 */
			ValidFlag_B4:{
				offset:74,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'无效',
					'1':'有效'
				}

			},
			/* 抗干扰功能有效性 */
			ValidFlag_B3:{
				offset:75,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'无效',
					'1':'有效'
				}

			},
			/* 接收相关参数有效性 */
			ValidFlag_B2:{
				offset:76,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'无效',
					'1':'有效'
				}

			},
			/* 接收通道解调参数有效 */
			ValidFlag_B1:{
				offset:77,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'无效',
					'1':'有效'
				}

			},
			/* 接收通道复位设置有效性 */
			ValidFlag_B0:{
				offset:78,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"Res",
				"ValidFlag_V5_ct_set",
				"ValidFlag_V5_ct_answer",
				"ValidFlag_V5_ct_state",
				"ValidFlag_B4",
				"ValidFlag_B3",
				"ValidFlag_B2",
				"ValidFlag_B1",
				"ValidFlag_B0"
			]
		},
		/*保留	*/
		Res72:{
			key:"372",
			orderBy:"8",
			fields:{

			/* 保留72字节 */
			Rec72:{
				offset:0,
				length:72,
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
				"Rec72"
			]
		}
	},
	/*设置结构体数组*/
	structSetArray:[
		"WT_R_Channel_demodulation",
		"WT_R_Related_parameters",
		"WT_R_Time_setting",
		"WT_R_Checkout_control",
		"WT_R_Data_acquisition_channel",
		"Res72"
	],
	/*状态结构体数组*/
	structGetArray:[
		"WT_R_Channel_demodulation",
		"WT_R_Related_parameters",
		"WT_R_Time_setting",
		"WT_R_Checkout_control",
		"WT_R_Data_acquisition_channel",
		"WT_R_Time_state",
		"WT_R_Receiving_channel_state",
		"WT_R_Channel_number",
		"WT_R_Checkout_test",
		"WT_R_Hardware_state",
		"WT_R_anti_interference_status",
		"WT_R_Rec_status",
		"Res72"
	]
}
