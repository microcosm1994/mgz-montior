/*站间分系统下行变频器1协议*/
export const device_Station_DOWN_1={
	id:'34',
	sId:'2e02',
	ifBaseband:false,
	struct:{
		/*站间分系统信道C频段下变频器参数设置	*/
		StationDown_parameter_setting:{
			key:"311",
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
			/* 衰减 */
			attenuation:{
				offset:8,
				length:8,
				dimension:0.5,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
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
					'0':'不在线',
					'1':'在线'
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
			/* 28V1输出开启/关断 */
			_28V1_output:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'开启',
					'01':'关断'
				}

			},
			/* 28V2输出开启/关断 */
			_28V2_output:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'开启',
					'01':'关断'
				}

			},
			/* 9V1输出开启/关断 */
			_9V1_output:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'开启',
					'01':'关断'
				}

			},
			/* 9V2输出开启/关断 */
			_9V2_output:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'开启',
					'01':'关断'
				}

			},
			/* 控制切换开关 */
			Control_switch:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'LNA_A',
					'01':'LNA_B'
				}

			},
			/* 保留 */
			RECV:{
				offset:72,
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
				"attenuation",
				"onLine",
				"loTest",
				"_28V1_output",
				"_28V2_output",
				"_9V1_output",
				"_9V2_output",
				"Control_switch",
				"RECV"
			]
		},
		/*站间分系统信道C频段下变频器状态上报信息	*/
		StationDown_state_report:{
			key:"312",
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
			/* 衰减 */
			attenuation:{
				offset:16,
				length:8,
				dimension:0.5,
				showType:1,
				encodeType:1,
				unitName:"dB",
				defaultValue:"",
				option:{
				}

			},
			/* 在线/不在线状态 */
			onLine:{
				offset:24,
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
				offset:32,
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
				offset:40,
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
				offset:48,
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
				offset:56,
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
			/* 28V1输出开启/关断 */
			_28V1_output:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'开启',
					'01':'关断'
				}

			},
			/* 28V2输出开启/关断 */
			_28V2_output:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'开启',
					'01':'关断'
				}

			},
			/* 9V1输出开启/关断 */
			_9V1_output:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'开启',
					'01':'关断'
				}

			},
			/* 9V2输出开启/关断 */
			_9V2_output:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'开启',
					'01':'关断'
				}

			},
			/* 切换开关 */
			Control_switch:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'LNA_A',
					'01':'LNA_B'
				}

			},
			/* LNAA电流及状态 */
			LNAA_state:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'故障',
					'1':'正常'
				}

			},
			/* LNAB电流及状态 */
			LNAB_state:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'故障',
					'1':'正常'
				}

			},
			/* 温度 */
			temperature:{
				offset:120,
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
				offset:128,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"%",
				defaultValue:"",
				option:{
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
				"State",
				"examination_state",
				"attenuation",
				"onLine",
				"loTest",
				"Local_locking",
				"reference",
				"lock_state",
				"_28V1_output",
				"_28V2_output",
				"_9V1_output",
				"_9V2_output",
				"Control_switch",
				"LNAA_state",
				"LNAB_state",
				"temperature",
				"humidity",
				"RECV"
			]
		},
		/*报文头	*/
		messageHead:{
			key:"406",
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
		"StationDown_parameter_setting"
	],
	/*状态结构体数组*/
	structGetArray:[
		"StationDown_state_report"
	]
}
