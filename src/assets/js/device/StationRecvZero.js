/*站间接收校零协议*/
export const device_StationRecvZero={
	id:'31',
	sId:'2e05',
	ifBaseband:false,
	struct:{
		/*站间分系统信道C频段接收校零变频器参数设置	*/
		StationRecvZero_parameter_setting:{
			key:"287",
			orderBy:"0",
			fields:{

			/* 本分控状态 */
			State:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'本控',
					'1':'分控'
				}

			},
			/* 在线/不在线状态 */
			onLine:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'不在线',
					'1':'在线'
				}

			},
			/* 群时延本振测试 */
			loTest:{
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
			/* 中频输出选择 */
			output:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无源通道',
					'01':'有源通道'
				}

			},
			/* 保留 */
			RECV:{
				offset:32,
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
				"State",
				"onLine",
				"loTest",
				"output",
				"RECV"
			]
		},
		/*站间分系统信道C频段接收校零变频器状态上报信息	*/
		StationRecvZero_state_report:{
			key:"288",
			orderBy:"0",
			fields:{

			/* 本分控状态 */
			State:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'本控',
					'1':'分控'
				}

			},
			/* 自检状态 */
			examination_state:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'正常',
					'01':'故障'
				}

			},
			/* 在线/不在线状态 */
			onLine:{
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
			/* 群时延本振测试 */
			loTest:{
				offset:24,
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
			/* 本振锁定状态 */
			Local_locking:{
				offset:32,
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
			/* 内外参考状态 */
			reference:{
				offset:40,
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
			/* 参考锁定状态 */
			lock_state:{
				offset:48,
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
			/* 中频输出状态 */
			output:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无源通道1(X3:连接收耦合器)',
					'01':'无源通道2（X4:连接校验天线）',
					'02':'有源通道'
				}

			},
			/* 温度 */
			temperature:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"℃",
				defaultValue:"",
				option:{
				}

			},
			/* 湿度 */
			humidity:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"%",
				defaultValue:"",
				option:{
				}

			},
			/* RECV */
			RECV:{
				offset:80,
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
				"State",
				"examination_state",
				"onLine",
				"loTest",
				"Local_locking",
				"reference",
				"lock_state",
				"output",
				"temperature",
				"humidity",
				"RECV"
			]
		},
		/*报文头	*/
		messageHead:{
			key:"403",
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
		"StationRecvZero_parameter_setting"
	],
	/*状态结构体数组*/
	structGetArray:[
		"StationRecvZero_state_report"
	]
}
