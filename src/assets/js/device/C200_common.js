/*C200功放协议*/
export const device_C200_common={
	id:'2',
	sId:'0',
	ifBaseband:false,
	struct:{
		/*C200功放网络命令帧DAT1字段详细定义	*/
		C_common_command_frame:{
			key:"5",
			orderBy:"0",
			fields:{

			/* 设置输出功率 */
			set_power:{
				offset:0,
				length:8,
				dimension:0.5,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 功放使能 */
			amplifier:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'加电',
					'01':'去电'
				}

			}
			},
			fieldArray:[
				"set_power",
				"amplifier"
			]
		},
		/*C200功放网络状态上报帧DAT1字段详细定义	*/
		C_common_state_report:{
			key:"6",
			orderBy:"0",
			fields:{

			/* 功放工作电压 */
			voltage:{
				offset:0,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"V",
				defaultValue:"",
				option:{
				}

			},
			/* 功放工作电流 */
			current:{
				offset:16,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"A",
				defaultValue:"",
				option:{
				}

			},
			/* 工作温度 */
			temperature:{
				offset:24,
				length:8,
				dimension:0.5,
				showType:1,
				encodeType:7,
				unitName:"℃",
				defaultValue:"",
				option:{
				}

			},
			/* 设置输出功率 */
			set_power:{
				offset:32,
				length:8,
				dimension:0.5,
				showType:1,
				encodeType:1,
				unitName:"dBm",
				defaultValue:"",
				option:{
				}

			},
			/* 功放输出功率 */
			out_power:{
				offset:40,
				length:8,
				dimension:0.5,
				showType:1,
				encodeType:1,
				unitName:"dBm",
				defaultValue:"",
				option:{
				}

			},
			/* 功放输入功率 */
			in_power:{
				offset:48,
				length:8,
				dimension:0.5,
				showType:1,
				encodeType:7,
				unitName:"dBm",
				defaultValue:"",
				option:{
				}

			},
			/* 过电压指示 */
			Voltage_indication:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'未过电压',
					'1':'过电压'
				}

			},
			/* 过电流指示 */
			Current_indication:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'未过电流',
					'1':'过电流'
				}

			},
			/* 过温度指示 */
			temper_indication:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'未过温',
					'1':'过温'
				}

			},
			/* 输入功率 */
			power:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'正常',
					'1':'异常'
				}

			},
			/* 输出驻波 */
			stand_wave:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'正常',
					'1':'异常'
				}

			},
			/* 故障提示 */
			fault_indication:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'正常',
					'1':'AC/DC电源故障',
					'2':'功放故障',
					'3':'功放输入故障',
					'4':'输出驻波故障'
				}

			}
			},
			fieldArray:[
				"voltage",
				"current",
				"temperature",
				"set_power",
				"out_power",
				"in_power",
				"Voltage_indication",
				"Current_indication",
				"temper_indication",
				"power",
				"stand_wave",
				"fault_indication"
			]
		},
		/*报文头	*/
		messageHead:{
			key:"374",
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
		"C_common_command_frame"
	],
	/*状态结构体数组*/
	structGetArray:[
		"C_common_state_report"
	]
}
