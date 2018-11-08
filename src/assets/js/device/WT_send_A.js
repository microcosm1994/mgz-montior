/*卫通发射基带A协议*/
export const device_WT_send_A={
	id:'16',
	sId:'0',
	ifBaseband:true,
	struct:{
		/*卫通发射基带发射命令	*/
		WT_S_Send_command:{
			key:"111",
			orderBy:"3",
			fields:{

			/* 调制数据速率 */
			cmd1_Data_rate:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'62.5',
					'0':'500'
				}

			},
			/* 数据类型选择 */
			cmd1_Data_en:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'随机数',
					'1':'摸飞数据'
				}

			},
			/* 调制开关 */
			cmd1_ModeSwitch:{
				offset:16,
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
			/* 通道号 */
			cmd1_PRM_number:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 站号 */
			cmd1_StationID:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 范围 */
			cmd1_Level:{
				offset:40,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* LDPC开关 */
			cmd1_LDPC_EN:{
				offset:56,
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
			/* 中心频率 */
			cmd1_FREQ_IF:{
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
			/* 调制数据速率 */
			cmd2_Data_rate:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'62.5',
					'0':'500'
				}

			},
			/* 数据类型选择 */
			cmd2_Data_en:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'随机数',
					'1':'摸飞数据'
				}

			},
			/* 调制开关 */
			cmd2_ModeSwitch:{
				offset:112,
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
			/* 通道号 */
			cmd2_PRM_number:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 站号 */
			cmd2_StationID:{
				offset:128,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 范围 */
			cmd2_Level:{
				offset:136,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* LDPC开关 */
			cmd2_LDPC_EN:{
				offset:152,
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
			/* 中心频率 */
			cmd2_FREQ_IF:{
				offset:160,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* RECV */
			RECV:{
				offset:192,
				length:32,
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
				"cmd1_Data_rate",
				"cmd1_Data_en",
				"cmd1_ModeSwitch",
				"cmd1_PRM_number",
				"cmd1_StationID",
				"cmd1_Level",
				"cmd1_LDPC_EN",
				"cmd1_FREQ_IF",
				"cmd2_Data_rate",
				"cmd2_Data_en",
				"cmd2_ModeSwitch",
				"cmd2_PRM_number",
				"cmd2_StationID",
				"cmd2_Level",
				"cmd2_LDPC_EN",
				"cmd2_FREQ_IF",
				"RECV"
			]
		},
		/*卫通发射基带接收命令	*/
		WT_S_Recv_command:{
			key:"112",
			orderBy:"4",
			fields:{

			/* 接收数据速率 */
			Data_rate:{
				offset:0,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'62.5',
					'0':'500'
				}

			},
			/* 环路带宽自动手动设置 */
			autosel:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'自动',
					'01':'手动'
				}

			},
			/* 通道号 */
			ChannelID:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 入锁帧计数 */
			Frmpara1:{
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
			/* 失锁帧计数 */
			Frmpara2:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 入锁容错比特数 */
			Frmpara3:{
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
			/* 校验容错比特数 */
			Frmpara4:{
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
			/* 失锁容错比特数 */
			Frmpara5:{
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
			/* 载波环路带宽 */
			CarrLoopBn:{
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
			/* 伪码环路带宽 */
			PnLoopBn:{
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
			/* 保留 */
			Res2:{
				offset:128,
				length:128,
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
				"Data_rate",
				"autosel",
				"ChannelID",
				"Frmpara1",
				"Frmpara2",
				"Frmpara3",
				"Frmpara4",
				"Frmpara5",
				"LDPC_EN",
				"CarrLoopBn",
				"PnLoopBn",
				"Res2"
			]
		},
		/*卫通发射基带时频命令	*/
		WT_S_Time_command:{
			key:"113",
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
			/* 年 */
			Year:{
				offset:8,
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
				offset:24,
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
				offset:40,
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
			/* 秒 */
			Second:{
				offset:56,
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
				offset:64,
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
			/* 采样延迟 */
			Delay:{
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
			/* 内外参考设置 */
			REF9520Se1:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'内参考',
					'01':'外参考'
				}

			},
			/* 保留 */
			Rsv:{
				offset:88,
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
				"Mode",
				"Year",
				"Day",
				"Hour",
				"Minute",
				"Second",
				"Leap",
				"Delay",
				"REF9520Se1",
				"Rsv"
			]
		},
		/*卫通发射基带硬件状态	*/
		WT_S_Hardware_state:{
			key:"115",
			orderBy:"1",
			fields:{

			/* 站间业务处理计算机通信状态 */
			base_sta:{
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
			/* 参数比对结果 */
			para_sta:{
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
			/* 基带在线状态 */
			host_slave:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'status-error',
					'1':'status-success'
				}

			},
			/* 基带板工作状态 */
			bb_sta:{
				offset:24,
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
			/* 供电状态 */
			power_sta:{
				offset:32,
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
			Temprature_sta:{
				offset:40,
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
			/* PRM模块通信状态 */
			prm_sta:{
				offset:48,
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
			/* 保留 */
			Rsv:{
				offset:56,
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
				"base_sta",
				"para_sta",
				"host_slave",
				"bb_sta",
				"power_sta",
				"Temprature_sta",
				"prm_sta",
				"Rsv"
			]
		},
		/*卫通发射基带发送状态	*/
		WT_S_Send_state:{
			key:"116",
			orderBy:"2",
			fields:{

			/* 调制数据速率 */
			TXCommand_cmd1_Data_rate:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'62.5',
					'0':'500'
				}

			},
			/* 数据类型选择 */
			TXCommand_cmd1_Data_en:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'随机数',
					'1':'摸飞数据'
				}

			},
			/* 调制开关 */
			TXCommand_cmd1_ModeSwitch:{
				offset:16,
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
			/* 通道号 */
			TXCommand_cmd1_PRM_number:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 站号 */
			TXCommand_cmd1_StationID:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 范围 */
			TXCommand_cmd1_Level:{
				offset:40,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* LDPC开关 */
			TXCommand_cmd1_LDPC_EN:{
				offset:56,
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
			/* 中心频率 */
			TXCommand_cmd1_FREQ_IF:{
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
			/* 调制数据速率 */
			TXCommand_cmd1_cmd2_Data_rate:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'62.5',
					'0':'500'
				}

			},
			/* 数据类型选择 */
			TXCommand_cmd1_cmd2_Data_en:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'随机数',
					'1':'摸飞数据'
				}

			},
			/* 调制开关 */
			TXCommand_cmd1_cmd2_ModeSwitch:{
				offset:112,
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
			/* 通道号 */
			TXCommand_cmd1_cmd2_PRM_number:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 站号 */
			TXCommand_cmd1_cmd2_StationID:{
				offset:128,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 范围 */
			TXCommand_cmd1_cmd2_Level:{
				offset:136,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* LDPC开关 */
			TXCommand_cmd1_cmd2_LDPC_EN:{
				offset:152,
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
			/* 中心频率 */
			TXCommand_cmd1_cmd2_FREQ_IF:{
				offset:160,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* RECV */
			TXCommand_cmd1_cmd2_RECV:{
				offset:192,
				length:32,
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
				"TXCommand_cmd1_Data_rate",
				"TXCommand_cmd1_Data_en",
				"TXCommand_cmd1_ModeSwitch",
				"TXCommand_cmd1_PRM_number",
				"TXCommand_cmd1_StationID",
				"TXCommand_cmd1_Level",
				"TXCommand_cmd1_LDPC_EN",
				"TXCommand_cmd1_FREQ_IF",
				"TXCommand_cmd1_cmd2_Data_rate",
				"TXCommand_cmd1_cmd2_Data_en",
				"TXCommand_cmd1_cmd2_ModeSwitch",
				"TXCommand_cmd1_cmd2_PRM_number",
				"TXCommand_cmd1_cmd2_StationID",
				"TXCommand_cmd1_cmd2_Level",
				"TXCommand_cmd1_cmd2_LDPC_EN",
				"TXCommand_cmd1_cmd2_FREQ_IF",
				"TXCommand_cmd1_cmd2_RECV"
			]
		},
		/*卫通发射基带接收状态	*/
		WT_S_Recv_state:{
			key:"117",
			orderBy:"6",
			fields:{

			/* 伪码锁定状态 */
			Pn_lock:{
				offset:0,
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
			/* 载波锁定状态 */
			Carr_lock:{
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
			/* 位同步锁定状态 */
			Bit_lock:{
				offset:16,
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
			/* 载波捕获状态 */
			Carr_capture:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'未捕获',
					'01':'载波捕获'
				}

			},
			/* 载噪比 */
			C_N0:{
				offset:32,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"dBHz",
				defaultValue:"",
				option:{
				}

			},
			/* 信号幅度 */
			AmpI:{
				offset:48,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"mv",
				defaultValue:"",
				option:{
				}

			},
			/* 载波多普勒 */
			CarrDopp:{
				offset:64,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"Hz",
				defaultValue:"",
				option:{
				}

			},
			/* 伪码多普勒 */
			PNDopp:{
				offset:80,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"Hz",
				defaultValue:"",
				option:{
				}

			},
			/* 总接收bit数 */
			Bit_cnt:{
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
			/* 错误bit数 */
			ErrBit_cnt:{
				offset:128,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* AGC电压 */
			AgcVolt:{
				offset:160,
				length:16,
				dimension:0.001,
				showType:1,
				encodeType:1,
				unitName:"V",
				defaultValue:"",
				option:{
				}

			},
			/* 帧同步锁定状态 */
			Frm_lock:{
				offset:176,
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
			Res2:{
				offset:184,
				length:104,
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
				"Pn_lock",
				"Carr_lock",
				"Bit_lock",
				"Carr_capture",
				"C_N0",
				"AmpI",
				"CarrDopp",
				"PNDopp",
				"Bit_cnt",
				"ErrBit_cnt",
				"AgcVolt",
				"Frm_lock",
				"Res2"
			]
		},
		/*卫通发射基带时频状态	*/
		WT_S_Time_state:{
			key:"118",
			orderBy:"7",
			fields:{

			/* 内/外时统选择 */
			TimeCodeCommand_Mode:{
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
			/* 年 */
			TimeCodeCommand_Year:{
				offset:8,
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
			TimeCodeCommand_Day:{
				offset:24,
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
			TimeCodeCommand_Hour:{
				offset:40,
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
			TimeCodeCommand_Minute:{
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
			/* 秒 */
			TimeCodeCommand_Second:{
				offset:56,
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
			TimeCodeCommand_Leap:{
				offset:64,
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
			/* 采样延迟 */
			TimeCodeCommand_Delay:{
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
			/* 内外参考设置 */
			TimeCodeCommand_REF9520Se1:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'内参考',
					'01':'外参考'
				}

			},
			/* 保留 */
			TimeCodeCommand_Rsv:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 外秒脉冲同步状态 */
			PpsStatus:{
				offset:96,
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
				offset:104,
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
				offset:112,
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
				offset:128,
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
			/* 周计数 */
			WeekCount:{
				offset:176,
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
				offset:192,
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
				"TimeCodeCommand_Mode",
				"TimeCodeCommand_Year",
				"TimeCodeCommand_Day",
				"TimeCodeCommand_Hour",
				"TimeCodeCommand_Minute",
				"TimeCodeCommand_Second",
				"TimeCodeCommand_Leap",
				"TimeCodeCommand_Delay",
				"TimeCodeCommand_REF9520Se1",
				"TimeCodeCommand_Rsv",
				"PpsStatus",
				"TimeLockFlag",
				"B000L16",
				"B000H32",
				"Year",
				"WeekCount",
				"SecondCount"
			]
		},
		/*卫通发射基带状态元素表	*/
		WT_S_State:{
			key:"119",
			orderBy:"8",
			fields:{

			/* 站间业务处理计算机通信状态 */
			MachineStatus_base_sta:{
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
			/* 参数比对结果 */
			MachineStatus_para_sta:{
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
			/* 基带在线状态 */
			MachineStatus_host_slave:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'status-error',
					'1':'status-success'
				}

			},
			/* 基带板工作状态 */
			MachineStatus_bb_sta:{
				offset:24,
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
			/* 供电状态 */
			MachineStatus_power_sta:{
				offset:32,
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
			MachineStatus_Temprature_sta:{
				offset:40,
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
			/* PRM模块通信状态 */
			MachineStatus_prm_sta:{
				offset:48,
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
			/* 保留 */
			MachineStatus_Rsv:{
				offset:56,
				length:72,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 调制数据速率 */
			TxStatus_TXCommand_cmd1_Data_rate:{
				offset:128,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'62.5',
					'0':'500'
				}

			},
			/* 数据类型选择 */
			TxStatus_TXCommand_cmd1_Data_en:{
				offset:136,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'随机数',
					'1':'摸飞数据'
				}

			},
			/* 调制开关 */
			TxStatus_TXCommand_cmd1_ModeSwitch:{
				offset:144,
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
			/* 通道号 */
			TxStatus_TXCommand_cmd1_PRM_number:{
				offset:152,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 站号 */
			TxStatus_TXCommand_cmd1_StationID:{
				offset:160,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 范围 */
			TxStatus_TXCommand_cmd1_Level:{
				offset:168,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* LDPC开关 */
			TxStatus_TXCommand_cmd1_LDPC_EN:{
				offset:184,
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
			/* 中心频率 */
			TxStatus_TXCommand_cmd1_FREQ_IF:{
				offset:192,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 调制数据速率 */
			TxStatus_TXCommand_cmd1_cmd2_Data_rate:{
				offset:224,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'62.5',
					'0':'500'
				}

			},
			/* 数据类型选择 */
			TxStatus_TXCommand_cmd1_cmd2_Data_en:{
				offset:232,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'随机数',
					'1':'摸飞数据'
				}

			},
			/* 调制开关 */
			TxStatus_TXCommand_cmd1_cmd2_ModeSwitch:{
				offset:240,
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
			/* 通道号 */
			TxStatus_TXCommand_cmd1_cmd2_PRM_number:{
				offset:248,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 站号 */
			TxStatus_TXCommand_cmd1_cmd2_StationID:{
				offset:256,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 范围 */
			TxStatus_TXCommand_cmd1_cmd2_Level:{
				offset:264,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* LDPC开关 */
			TxStatus_TXCommand_cmd1_cmd2_LDPC_EN:{
				offset:280,
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
			/* 中心频率 */
			TxStatus_TXCommand_cmd1_cmd2_FREQ_IF:{
				offset:288,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* RECV */
			TxStatus_TXCommand_cmd1_cmd2_RECV:{
				offset:320,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 伪码锁定状态 */
			RxStatus_Pn_lock:{
				offset:352,
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
			/* 载波锁定状态 */
			RxStatus_Carr_lock:{
				offset:360,
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
			/* 位同步锁定状态 */
			RxStatus_Bit_lock:{
				offset:368,
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
			/* 载波捕获状态 */
			RxStatus_Carr_capture:{
				offset:376,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'未捕获',
					'01':'载波捕获'
				}

			},
			/* 载噪比 */
			RxStatus_C_N0:{
				offset:384,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"dBHz",
				defaultValue:"",
				option:{
				}

			},
			/* 信号幅度 */
			RxStatus_AmpI:{
				offset:400,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"mv",
				defaultValue:"",
				option:{
				}

			},
			/* 载波多普勒 */
			RxStatus_CarrDopp:{
				offset:416,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"Hz",
				defaultValue:"",
				option:{
				}

			},
			/* 伪码多普勒 */
			RxStatus_PNDopp:{
				offset:432,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"Hz",
				defaultValue:"",
				option:{
				}

			},
			/* 总接收bit数 */
			RxStatus_Bit_cnt:{
				offset:448,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 错误bit数 */
			RxStatus_ErrBit_cnt:{
				offset:480,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* AGC电压 */
			RxStatus_AgcVolt:{
				offset:512,
				length:16,
				dimension:0.001,
				showType:1,
				encodeType:1,
				unitName:"V",
				defaultValue:"",
				option:{
				}

			},
			/* 帧同步锁定状态 */
			RxStatus_Frm_lock:{
				offset:528,
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
			RxStatus_Res2:{
				offset:536,
				length:104,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 外秒脉冲同步状态 */
			TimeCodeStatus_PpsStatus:{
				offset:640,
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
			TimeCodeStatus_TimeLockFlag:{
				offset:648,
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
			TimeCodeStatus_B000L16:{
				offset:656,
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
			TimeCodeStatus_B000H32:{
				offset:672,
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
			TimeCodeStatus_Year:{
				offset:704,
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
			TimeCodeStatus_WeekCount:{
				offset:720,
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
			TimeCodeStatus_SecondCount:{
				offset:736,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 内/外时统选择 */
			TimeCodeStatus_TimeCodeCommand_Mode:{
				offset:768,
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
			/* 年 */
			TimeCodeStatus_TimeCodeCommand_Year:{
				offset:776,
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
			TimeCodeStatus_TimeCodeCommand_Day:{
				offset:792,
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
			TimeCodeStatus_TimeCodeCommand_Hour:{
				offset:808,
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
			TimeCodeStatus_TimeCodeCommand_Minute:{
				offset:816,
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
			TimeCodeStatus_TimeCodeCommand_Second:{
				offset:824,
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
			TimeCodeStatus_TimeCodeCommand_Leap:{
				offset:832,
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
			/* 采样延迟 */
			TimeCodeStatus_TimeCodeCommand_Delay:{
				offset:840,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 内外参考设置 */
			TimeCodeStatus_TimeCodeCommand_REF9520Se1:{
				offset:848,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'内参考',
					'01':'外参考'
				}

			},
			/* 保留 */
			TimeCodeStatus_TimeCodeCommand_Rsv:{
				offset:856,
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
				"MachineStatus_base_sta",
				"MachineStatus_para_sta",
				"MachineStatus_host_slave",
				"MachineStatus_bb_sta",
				"MachineStatus_power_sta",
				"MachineStatus_Temprature_sta",
				"MachineStatus_prm_sta",
				"MachineStatus_Rsv",
				"TxStatus_TXCommand_cmd1_Data_rate",
				"TxStatus_TXCommand_cmd1_Data_en",
				"TxStatus_TXCommand_cmd1_ModeSwitch",
				"TxStatus_TXCommand_cmd1_PRM_number",
				"TxStatus_TXCommand_cmd1_StationID",
				"TxStatus_TXCommand_cmd1_Level",
				"TxStatus_TXCommand_cmd1_LDPC_EN",
				"TxStatus_TXCommand_cmd1_FREQ_IF",
				"TxStatus_TXCommand_cmd1_cmd2_Data_rate",
				"TxStatus_TXCommand_cmd1_cmd2_Data_en",
				"TxStatus_TXCommand_cmd1_cmd2_ModeSwitch",
				"TxStatus_TXCommand_cmd1_cmd2_PRM_number",
				"TxStatus_TXCommand_cmd1_cmd2_StationID",
				"TxStatus_TXCommand_cmd1_cmd2_Level",
				"TxStatus_TXCommand_cmd1_cmd2_LDPC_EN",
				"TxStatus_TXCommand_cmd1_cmd2_FREQ_IF",
				"TxStatus_TXCommand_cmd1_cmd2_RECV",
				"RxStatus_Pn_lock",
				"RxStatus_Carr_lock",
				"RxStatus_Bit_lock",
				"RxStatus_Carr_capture",
				"RxStatus_C_N0",
				"RxStatus_AmpI",
				"RxStatus_CarrDopp",
				"RxStatus_PNDopp",
				"RxStatus_Bit_cnt",
				"RxStatus_ErrBit_cnt",
				"RxStatus_AgcVolt",
				"RxStatus_Frm_lock",
				"RxStatus_Res2",
				"TimeCodeStatus_PpsStatus",
				"TimeCodeStatus_TimeLockFlag",
				"TimeCodeStatus_B000L16",
				"TimeCodeStatus_B000H32",
				"TimeCodeStatus_Year",
				"TimeCodeStatus_WeekCount",
				"TimeCodeStatus_SecondCount",
				"TimeCodeStatus_TimeCodeCommand_Mode",
				"TimeCodeStatus_TimeCodeCommand_Year",
				"TimeCodeStatus_TimeCodeCommand_Day",
				"TimeCodeStatus_TimeCodeCommand_Hour",
				"TimeCodeStatus_TimeCodeCommand_Minute",
				"TimeCodeStatus_TimeCodeCommand_Second",
				"TimeCodeStatus_TimeCodeCommand_Leap",
				"TimeCodeStatus_TimeCodeCommand_Delay",
				"TimeCodeStatus_TimeCodeCommand_REF9520Se1",
				"TimeCodeStatus_TimeCodeCommand_Rsv"
			]
		},
		/*报文头	*/
		messageHead:{
			key:"388",
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
		"WT_S_Send_command",
		"WT_S_Recv_command",
		"WT_S_Time_command"
	],
	/*状态结构体数组*/
	structGetArray:[
		"WT_S_Send_command",
		"WT_S_Recv_command",
		"WT_S_Time_command",
		"WT_S_Hardware_state",
		"WT_S_Send_state",
		"WT_S_Recv_state",
		"WT_S_Time_state",
		"WT_S_State"
	]
}
