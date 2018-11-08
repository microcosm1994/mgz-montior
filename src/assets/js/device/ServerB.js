/*伺服B协议*/
export const device_ServerB={
	id:'10',
	sId:'0',
	ifBaseband:false,
	struct:{
		/*伺服参数设置	*/
		Server_parameter_setting:{
			key:"69",
			orderBy:"0",
			fields:{

			/* 任务时间 */
			Start_Time:{
				offset:0,
				length:48,
				dimension:1.0,
				showType:1,
				encodeType:4,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 控制方式 */
			control_mode:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'未指定',
					'aa':'分控',
					'bb':'本控'
				}

			},
			/* 主备机状态 */
			state:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'aa':'主机',
					'bb':'备机',
					'00':'未指定'
				}

			},
			/* 工作方式 */
			Operation_mode:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'4':'定点',
					'7':'程序跟踪',
					'8':'数引',
					'9':'天线定位',
					'10':'待机',
					'13':'极大值跟踪'
				}

			},
			/* 方位指令角 */
			Azimuth:{
				offset:72,
				length:16,
				dimension:0.01,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 俯仰指令角 */
			Pitch:{
				offset:88,
				length:16,
				dimension:0.01,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 目标卫星编号 */
			Target_number:{
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
			/* 保留 */
			RECV:{
				offset:112,
				length:256,
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
				"Start_Time",
				"control_mode",
				"state",
				"Operation_mode",
				"Azimuth",
				"Pitch",
				"Target_number",
				"RECV"
			]
		},
		/*伺服状态上报信息	*/
		Server_state_report:{
			key:"70",
			orderBy:"0",
			fields:{

			/* 实时时间 */
			Real_time:{
				offset:0,
				length:48,
				dimension:1.0,
				showType:1,
				encodeType:4,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 时统状态 */
			Time_State:{
				offset:48,
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
			/* 控制方式 */
			control_mode:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'未指定',
					'aa':'分控',
					'bb':'本控'
				}

			},
			/* 主备机状态 */
			state:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'aa':'主机',
					'bb':'备机',
					'00':'未指定'
				}

			},
			/* 工作方式 */
			Operation_mode:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'4':'定点',
					'7':'程序跟踪',
					'8':'数引',
					'9':'天线定位',
					'10':'待机',
					'13':'极大值跟踪'
				}

			},
			/* 方位指令角 */
			Azimuth:{
				offset:80,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"°",
				defaultValue:"",
				option:{
				}

			},
			/* 俯仰指令角 */
			Pitch:{
				offset:96,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"°",
				defaultValue:"",
				option:{
				}

			},
			/* ACU接收ACU数据状态 */
			Failure_state_ACU_D0:{
				offset:112,
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
			/* ACU接收多功能数字基带状态 */
			Failure_state_ACU_D1:{
				offset:113,
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
			/* ACU接收时码状态 */
			Failure_state_ACU_D2:{
				offset:114,
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
			/* ACU控制器状态 */
			Failure_state_ACU_D3:{
				offset:115,
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
			/* ACU接收ACU收据状态 */
			Failure_state_ACU_D4:{
				offset:116,
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
			/* ACU驱动器状态 */
			Failure_state_ACU_D5:{
				offset:117,
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
			/* 预留位 */
			Failure_state_ACU_D6:{
				offset:118,
				length:1,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 预留位 */
			Failure_state_ACU_D7:{
				offset:119,
				length:1,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 目标卫星编号 */
			Target_number:{
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
			/* 限位状态 */
			Limit_state:{
				offset:128,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'EL上限位',
					'2':'EL下限位',
					'4':'AZ顺限位',
					'8':'AZ逆限位'
				}

			},
			/* 保留 */
			RECV:{
				offset:136,
				length:256,
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
				"Real_time",
				"Time_State",
				"control_mode",
				"state",
				"Operation_mode",
				"Azimuth",
				"Pitch",
				"Failure_state_ACU_D0",
				"Failure_state_ACU_D1",
				"Failure_state_ACU_D2",
				"Failure_state_ACU_D3",
				"Failure_state_ACU_D4",
				"Failure_state_ACU_D5",
				"Failure_state_ACU_D6",
				"Failure_state_ACU_D7",
				"Target_number",
				"Limit_state",
				"RECV"
			]
		},
		/*报文头	*/
		messageHead:{
			key:"382",
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
		"Server_parameter_setting"
	],
	/*状态结构体数组*/
	structGetArray:[
		"Server_state_report"
	]
}
