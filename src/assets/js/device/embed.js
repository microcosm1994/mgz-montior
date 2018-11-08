/*嵌入式设备协议*/
export const device_embed={
	id:'12',
	struct:{
		/*嵌入式网络自定义帧格式	*/
		embed_network:{
			key:"73",
			type:"other",
			orderBy:"1",
			fields:{

			/* 信源地址 */
			SID:{
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
			/* 目的地址 */
			DID:{
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
			/* 信息类别 */
			BID:{
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
			/* 保留字 */
			Reserved:{
				offset:96,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 发送时间 */
			Time:{
				offset:128,
				length:48,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 数据域长度 */
			Datalen:{
				offset:176,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 数据域 */
			DataField:{

			}
			},
			fieldArray:[
				"SID",
				"DID",
				"BID",
				"Reserved",
				"Time",
				"Datalen",
				"DataField"
			]
		},
		/*嵌入式单元参数设置	*/
		embed_sign:{
			key:"74",
			type:"set",
			orderBy:"1",
			fields:{

			/* 单元标识 */
			sign:{
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
			/* 顺序号 */
			count:{
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
				"sign",
				"count"
			]
		},
		/*嵌入式控制命令相应格式	*/
		embed_CMD_response:{
			key:"75",
			type:"get",
			orderBy:"1",
			fields:{

			/* 信息类别 */
			data_type:{
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
			/* 标识 */
			sign:{
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
			/* 顺序号 */
			count:{
				offset:64,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 控制结果 */
			cmd_end:{
				offset:80,
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
				"data_type",
				"sign",
				"count",
				"cmd_end"
			]
		},
		/*嵌入式分机状态信息上报	*/
		embed_state_infor:{
			key:"76",
			type:"get",
			orderBy:"2",
			fields:{

			/* 顺序号 */
			count:{
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
			/* 单元开始标识 */
			start:{
				offset:16,
				length:24,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 参数数据 */
			data:{
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
			/* 单元结束标识 */
			end:{
				offset:48,
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
				"count",
				"start",
				"data",
				"end"
			]
		},
		/*嵌入式系统状态通知格式	*/
		embed_system_state:{
			key:"77",
			type:"other",
			orderBy:"0",
			fields:{

			/* 顺序号 */
			count:{
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
			/* 数据包 */
			data:{
				offset:16,
				length:32768,
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
				"count",
				"data"
			]
		},
		/*嵌入式数据请求	*/
		embed_data_request:{
			key:"78",
			type:"other",
			orderBy:"0",
			fields:{

			/* 单元标识 */
			sign:{
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
			/* 顺序号 */
			count:{
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
			/* 命令有效指令 */
			cmd_instructions:{
				offset:32,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 请求长度 */
			len:{
				offset:48,
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
				"sign",
				"count",
				"cmd_instructions",
				"len"
			]
		},
		/*嵌入式数据下发	*/
		embed_data_down:{
			key:"79",
			type:"set",
			orderBy:"2",
			fields:{

			/* 单元标识 */
			sign:{
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
			/* 顺序号 */
			count:{
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
				"sign",
				"count"
			]
		},
		/*嵌入式数据上报	*/
		embed_data_up:{
			key:"80",
			type:"get",
			orderBy:"3",
			fields:{

			/* 单元标识 */
			sign:{
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
			/* 顺序号 */
			count:{
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
				"sign",
				"count"
			]
		},
		/*时统工作状态上报	*/
		Timer_work_state:{
			key:"357",
			type:"other",
			orderBy:"1",
			fields:{

			/* 帧头 */
			head:{
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
			/* 设备编号 */
			number:{
				offset:8,
				length:24,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 主备状态 */
			prepar_state:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'备用切换器',
					'01':'主用切换器'
				}

			},
			/* 告警状态 */
			alarm_state:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无警告',
					'01':'警告'
				}

			},
			/* 故障码 */
			fault_number:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无故障',
					'01':'信号检测模块故障',
					'02':'信号产生分配模块故障',
					'04':'测量切换模块故障',
					'08':'主控模块故障',
					'10':'网络授时模块故障',
					'20':'接收机模块故障'
				}

			},
			/* 外部信号输入 */
			signal_input:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'外时频10MHz输入有效',
					'02':'外时频1PPS输入有效',
					'04':'外时频B(DC)码输入有效',
					'08':'预留1PPS输入有效',
					'10':'预留B(DC)码输入有效',
					'20':'铷频标A 10MHz输入有效',
					'40':'铷频标B 10MHz输入有效',
					'80':'铷频标B 10MHz输入有效'
				}

			},
			/* 频率基准 */
			frequency_bench:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'自动，外时频',
					'10':'手动，外时频',
					'02':'自动，铷频标A',
					'12':'手动，铷频标B',
					'04':'自动，铷频标B',
					'14':'手动，铷频标B',
					'08':'自动，铷频标C',
					'18':'手动，铷频标C'
				}

			},
			/* 时间基准 */
			time_bench:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'自动，外时频',
					'11':'手动，外时频',
					'02':'自动，预留',
					'12':'手动，预留',
					'04':'自动，接收机',
					'14':'手动，接收机'
				}

			},
			/* 年 */
			year:{
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
			/* 月 */
			month:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 日 */
			day:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 时 */
			hour:{
				offset:104,
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
			minute:{
				offset:112,
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
			second:{
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
			/* 闰秒标识 */
			Leap:{
				offset:128,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无闰秒',
					'01':'正闰秒',
					'02':'负闰秒'
				}

			},
			/* 模拟锁相环 */
			simulation:{
				offset:136,
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
			/* 工作主钟 */
			main_time:{
				offset:144,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'铷频标A',
					'01':'铷频标B',
					'02':'铷频标C'
				}

			},
			/* 工作模式 */
			work_mode:{
				offset:152,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'混合模式',
					'01':'北斗模式',
					'02':'GPS模式'
				}

			},
			/* 收星颗数 */
			star_count:{
				offset:160,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 有效状态 */
			effective_state:{
				offset:168,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'收星无效',
					'01':'收星有效'
				}

			},
			/* 铷钟状态 */
			fs1_state:{
				offset:176,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'铷钟未锁定，锁相环未同步',
					'01':'铷钟未锁定，锁相环已同步',
					'10':'铷钟已锁定，锁相环未同步',
					'11':'铷钟已锁定，锁相环已同步'
				}

			},
			/* 模拟锁相环 */
			fs1_simulation:{
				offset:184,
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
			/* 输入状态 */
			fs1_input_state:{
				offset:192,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无输入',
					'01':'10MHz输入正常',
					'02':'1PPS-2输入正常',
					'04':'1PPS-1输入正常'
				}

			},
			/* 频标选择 */
			fs1_choice:{
				offset:200,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'输出频率标准为铷原子频标',
					'01':'输出频率标准为外频标'
				}

			},
			/* 参考选择 */
			fs1_resource_choice:{
				offset:208,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'参考源为 10MHz',
					'02':'参考源为 1PPS-2',
					'04':'参考源为 1PPS-1'
				}

			},
			/*  准确度 */
			fs1_accuracy:{
				offset:216,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:6,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 秒稳定度 */
			fs1_second_stability:{
				offset:232,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:5,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 压控电压(DA值) */
			fs1_DA:{
				offset:248,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 告警状态 */
			fs1_alarm_state:{
				offset:280,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无警告',
					'01':'警告'
				}

			},
			/* 故障码 */
			fs1_fault_number:{
				offset:288,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无故障',
					'01':'锁相环故障',
					'02':'10MHz频标模块故障',
					'04':'铷原子钟状态失锁'
				}

			},
			/* 铷钟状态 */
			fs2_state:{
				offset:296,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'铷钟未锁定，锁相环未同步',
					'01':'铷钟未锁定，锁相环已同步',
					'10':'铷钟已锁定，锁相环未同步',
					'11':'铷钟已锁定，锁相环已同步'
				}

			},
			/* 模拟锁相环 */
			fs2_simulation:{
				offset:304,
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
			/* 输入状态 */
			fs2_input_state:{
				offset:312,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无输入',
					'01':'10MHz输入正常',
					'02':'1PPS-2输入正常',
					'04':'1PPS-1输入正常'
				}

			},
			/* 频标选择 */
			fs2_choice:{
				offset:320,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'输出频率标准为铷原子频标',
					'01':'输出频率标准为外频标'
				}

			},
			/* 参考选择 */
			fs2_resource_choice:{
				offset:328,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'参考源为 10MHz',
					'02':'参考源为 1PPS-2',
					'04':'参考源为 1PPS-1'
				}

			},
			/*  准确度 */
			fs2_accuracy:{
				offset:336,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:6,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 秒稳定度 */
			fs2_second_stability:{
				offset:352,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:5,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 压控电压(DA值) */
			fs2_DA:{
				offset:368,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 告警状态 */
			fs2_alarm_state:{
				offset:400,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无警告',
					'01':'警告'
				}

			},
			/* 故障码 */
			fs2_fault_number:{
				offset:408,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无故障',
					'01':'锁相环故障',
					'02':'10MHz频标模块故障',
					'04':'铷原子钟状态失锁'
				}

			},
			/* 铷钟状态 */
			fs3_state:{
				offset:416,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'铷钟未锁定，锁相环未同步',
					'01':'铷钟未锁定，锁相环已同步',
					'10':'铷钟已锁定，锁相环未同步',
					'11':'铷钟已锁定，锁相环已同步'
				}

			},
			/* 模拟锁相环 */
			fs3_simulation:{
				offset:424,
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
			/* 输入状态 */
			fs3_input_state:{
				offset:432,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无输入',
					'01':'10MHz输入正常',
					'02':'1PPS-2输入正常',
					'04':'1PPS-1输入正常'
				}

			},
			/* 频标选择 */
			fs3_choice:{
				offset:440,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'输出频率标准为铷原子频标',
					'01':'输出频率标准为外频标'
				}

			},
			/* 参考选择 */
			fs3_resource_choice:{
				offset:448,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'参考源为 10MHz',
					'02':'参考源为 1PPS-2',
					'04':'参考源为 1PPS-1'
				}

			},
			/*  准确度 */
			fs3_accuracy:{
				offset:456,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:6,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 秒稳定度 */
			fs3_second_stability:{
				offset:472,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:5,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 压控电压(DA值) */
			fs3_DA:{
				offset:488,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 告警状态 */
			fs3_alarm_state:{
				offset:520,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无警告',
					'01':'警告'
				}

			},
			/* 故障码 */
			fs3_fault_number:{
				offset:528,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无故障',
					'01':'锁相环故障',
					'02':'10MHz频标模块故障',
					'04':'铷原子钟状态失锁'
				}

			},
			/* 帧尾 */
			tail:{
				offset:536,
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
				"head",
				"number",
				"prepar_state",
				"alarm_state",
				"fault_number",
				"signal_input",
				"frequency_bench",
				"time_bench",
				"year",
				"month",
				"day",
				"hour",
				"minute",
				"second",
				"Leap",
				"simulation",
				"main_time",
				"work_mode",
				"star_count",
				"effective_state",
				"fs1_state",
				"fs1_simulation",
				"fs1_input_state",
				"fs1_choice",
				"fs1_resource_choice",
				"fs1_accuracy",
				"fs1_second_stability",
				"fs1_DA",
				"fs1_alarm_state",
				"fs1_fault_number",
				"fs2_state",
				"fs2_simulation",
				"fs2_input_state",
				"fs2_choice",
				"fs2_resource_choice",
				"fs2_accuracy",
				"fs2_second_stability",
				"fs2_DA",
				"fs2_alarm_state",
				"fs2_fault_number",
				"fs3_state",
				"fs3_simulation",
				"fs3_input_state",
				"fs3_choice",
				"fs3_resource_choice",
				"fs3_accuracy",
				"fs3_second_stability",
				"fs3_DA",
				"fs3_alarm_state",
				"fs3_fault_number",
				"tail"
			]
		},
		/*报文头	*/
		messageHead:{
			key:"395",
			type:"other",
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
		"embed_sign",
		"embed_data_down"
	],
	/*状态结构体数组*/
	structGetArray:[
		"embed_CMD_response",
		"embed_state_infor",
		"embed_data_up"
	]
}
