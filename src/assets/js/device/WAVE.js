/*波控器协议*/
export const device_WAVE={
	id:'8',
	sId:'0',
	ifBaseband:false,
	struct:{
		/*波控器参数设置	*/
		WAVE_control_setting:{
			key:"61",
			orderBy:"0",
			fields:{

			/* 主备机状态 */
			state:{
				offset:0,
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
			/* 控制方式 */
			control_mode:{
				offset:8,
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
			/* 任务时间 */
			start_time:{
				offset:16,
				length:48,
				dimension:1.0,
				showType:1,
				encodeType:4,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 卫星编号设置 */
			number:{
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
					'1':'定点',
					'2':'程序跟踪',
					'3':'数引',
					'4':'天线定位',
					'5':'待机',
					'6':'极大值跟踪'
				}

			},
			/* 工作模式控制码 */
			Operation_control:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'任务模式',
					'02':'幅相自校准模式',
					'03':'参数加载模式修正码写入',
					'f3':'参数加载模式修正码读取',
					'0a':'模式切换',
					'ff':'非法模式返回'
				}

			},
			/* 备用保留字段 */
			RECV:{
				offset:88,
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
				"state",
				"control_mode",
				"start_time",
				"number",
				"Operation_mode",
				"Operation_control",
				"RECV"
			]
		},
		/*波控器时统信息	*/
		WAVE_time_series:{
			key:"62",
			orderBy:"1",
			fields:{

			/* 实时时间 */
			real_time:{
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
			time_series:{
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

			}
			},
			fieldArray:[
				"real_time",
				"time_series"
			]
		},
		/*波控器Ka波控器	*/
		WAVE_Ka_wave:{
			key:"63",
			orderBy:"2",
			fields:{

			/* 卫星编号 */
			number:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 控制方式 */
			control:{
				offset:8,
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
				offset:16,
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
			/* 工作模式 */
			word_pattern:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'任务模式',
					'02':'幅相自校准模式',
					'03':'参数加载模式修正码写入',
					'f3':'参数加载模式修正码读取',
					'0a':'模式切换',
					'ff':'非法模式返回'
				}

			},
			/* 工作方式 */
			word_mode:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
					'1':'定点',
					'2':'程序跟踪',
					'3':'数引',
					'4':'天线定位',
					'5':'待机',
					'6':'极大值跟踪'
				}

			},
			/* 方位实时角 */
			azimuth_angle:{
				offset:40,
				length:16,
				dimension:0.01,
				showType:1,
				encodeType:1,
				unitName:"°",
				defaultValue:"",
				option:{
				}

			},
			/* 离轴角 */
			axis_angle:{
				offset:56,
				length:16,
				dimension:0.01,
				showType:1,
				encodeType:1,
				unitName:"°",
				defaultValue:"",
				option:{
				}

			},
			/* 接收波控器数据通信状态 */
			fault_state_falure_state_D0:{
				offset:72,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'故障',
					'1':'正常'
				}

			},
			/* 接收多功能数字基带信息状态 */
			fault_state_failure_state_D1:{
				offset:73,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'故障',
					'1':'正常'
				}

			},
			/* 接收时码信息状态 */
			fault_state_failure_state_D2:{
				offset:74,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'故障',
					'1':'正常'
				}

			},
			/* 波控机FPGA状态 */
			fault_state_failure_state_D3:{
				offset:75,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'故障',
					'1':'正常'
				}

			},
			/* 波控机DSP状态 */
			fault_state_failure_state_D4:{
				offset:76,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'故障',
					'1':'正常'
				}

			},
			/* 保留 */
			fault_state_Rec1:{
				offset:77,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'故障',
					'1':'正常'
				}

			},
			/* 保留 */
			fault_state_Rec2:{
				offset:78,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'故障',
					'1':'正常'
				}

			},
			/* 保留 */
			fault_state_Rec3:{
				offset:79,
				length:1,
				dimension:1.0,
				showType:1,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
					'0':'故障',
					'1':'正常'
				}

			}
			},
			fieldArray:[
				"number",
				"control",
				"state",
				"word_pattern",
				"word_mode",
				"azimuth_angle",
				"axis_angle",
				"fault_state_falure_state_D0",
				"fault_state_failure_state_D1",
				"fault_state_failure_state_D2",
				"fault_state_failure_state_D3",
				"fault_state_failure_state_D4",
				"fault_state_Rec1",
				"fault_state_Rec2",
				"fault_state_Rec3"
			]
		},
		/*波控器	*/
		WAVE_controller:{
			key:"64",
			orderBy:"3",
			fields:{

			/* 波控机软件版本号 */
			edition_number:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 波控机FPGA状态 */
			FPGA_state:{
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
			/* 天线指向状态 */
			antenna_state:{
				offset:16,
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

			}
			},
			fieldArray:[
				"edition_number",
				"FPGA_state",
				"antenna_state"
			]
		},
		/*波控器相控阵天线	*/
		WAVE_phased_array_antenna:{
			key:"65",
			orderBy:"4",
			fields:{

			/* 天线TR组件温度状态1 */
			TR_state1:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"℃",
				defaultValue:"",
				option:{
				}

			},
			/* 天线TR组件温度状态2 */
			TR_state2:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"℃",
				defaultValue:"",
				option:{
				}

			},
			/* 天线TR组件温度状态3 */
			TR_state3:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"℃",
				defaultValue:"",
				option:{
				}

			},
			/* 交流1故障指示模块1 */
			power_state_power_state_D1:{
				offset:24,
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
			/* 交流1故障指示模块2 */
			power_state_power_state_D2:{
				offset:25,
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
			/* 交流1故障指示模块3 */
			power_state_power_state_D3:{
				offset:26,
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
			/* 交流1故障指示模块4 */
			power_state_power_state_D4:{
				offset:27,
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
			/* 交流1故障指示模块5 */
			power_state_power_state_D5:{
				offset:28,
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
			/* 交流1故障指示模块6 */
			power_state_power_state_D6:{
				offset:29,
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
			/* 交流1故障指示模块7 */
			power_state_power_state_D7:{
				offset:30,
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
			/* 交流1故障指示模块8 */
			power_state_power_state_D8:{
				offset:31,
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
			/* 交流2故障指示模块9 */
			power_state_power_state_D9:{
				offset:32,
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
			/* 交流2故障指示模块10 */
			power_state_power_state_D10:{
				offset:33,
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
			/* 交流2故障指示模块11 */
			power_state_power_state_D11:{
				offset:34,
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
			/* 交流2故障指示模块12 */
			power_state_power_state_D12:{
				offset:35,
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
			/* 交流2故障指示模块13 */
			power_state_power_state_D13:{
				offset:36,
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
			/* 交流2故障指示模块14 */
			power_state_power_state_D14:{
				offset:37,
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
			/* 交流2故障指示模块15 */
			power_state_power_state_D15:{
				offset:38,
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
			/* 交流2故障指示模块16 */
			power_state_power_state_D16:{
				offset:39,
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
			/* 保留 */
			power_state_power_state_Res:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:3,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 天线TR组件单元1电流采样 */
			TR_TR_Power_1:{
				offset:48,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元2电流采样 */
			TR_TR_Power_2:{
				offset:56,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元3电流采样 */
			TR_TR_Power_3:{
				offset:64,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元4电流采样 */
			TR_TR_Power_4:{
				offset:72,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元5电流采样 */
			TR_TR_Power_5:{
				offset:80,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元6电流采样 */
			TR_TR_Power_6:{
				offset:88,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元7电流采样 */
			TR_TR_Power_7:{
				offset:96,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元8电流采样 */
			TR_TR_Power_8:{
				offset:104,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元9电流采样 */
			TR_TR_Power_9:{
				offset:112,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元10电流采样 */
			TR_TR_Power_10:{
				offset:120,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元11电流采样 */
			TR_TR_Power_11:{
				offset:128,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元12电流采样 */
			TR_TR_Power_12:{
				offset:136,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元13电流采样 */
			TR_TR_Power_13:{
				offset:144,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元14电流采样 */
			TR_TR_Power_14:{
				offset:152,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元15电流采样 */
			TR_TR_Power_15:{
				offset:160,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元16电流采样 */
			TR_TR_Power_16:{
				offset:168,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元17电流采样 */
			TR_TR_Power_17:{
				offset:176,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元18电流采样 */
			TR_TR_Power_18:{
				offset:184,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元19电流采样 */
			TR_TR_Power_19:{
				offset:192,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元20电流采样 */
			TR_TR_Power_20:{
				offset:200,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元21电流采样 */
			TR_TR_Power_21:{
				offset:208,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元22电流采样 */
			TR_TR_Power_22:{
				offset:216,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元23电流采样 */
			TR_TR_Power_23:{
				offset:224,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元24电流采样 */
			TR_TR_Power_24:{
				offset:232,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元25电流采样 */
			TR_TR_Power_25:{
				offset:240,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元26电流采样 */
			TR_TR_Power_26:{
				offset:248,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元27电流采样 */
			TR_TR_Power_27:{
				offset:256,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元28电流采样 */
			TR_TR_Power_28:{
				offset:264,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元29电流采样 */
			TR_TR_Power_29:{
				offset:272,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元30电流采样 */
			TR_TR_Power_30:{
				offset:280,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元31电流采样 */
			TR_TR_Power_31:{
				offset:288,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元32电流采样 */
			TR_TR_Power_32:{
				offset:296,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元33电流采样 */
			TR_TR_Power_33:{
				offset:304,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元34电流采样 */
			TR_TR_Power_34:{
				offset:312,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元35电流采样 */
			TR_TR_Power_35:{
				offset:320,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元36电流采样 */
			TR_TR_Power_36:{
				offset:328,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元37电流采样 */
			TR_TR_Power_37:{
				offset:336,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元38电流采样 */
			TR_TR_Power_38:{
				offset:344,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元39电流采样 */
			TR_TR_Power_39:{
				offset:352,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元40电流采样 */
			TR_TR_Power_40:{
				offset:360,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元41电流采样 */
			TR_TR_Power_41:{
				offset:368,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元42电流采样 */
			TR_TR_Power_42:{
				offset:376,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元43电流采样 */
			TR_TR_Power_43:{
				offset:384,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元44电流采样 */
			TR_TR_Power_44:{
				offset:392,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元45电流采样 */
			TR_TR_Power_45:{
				offset:400,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元46电流采样 */
			TR_TR_Power_46:{
				offset:408,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元47电流采样 */
			TR_TR_Power_47:{
				offset:416,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元48电流采样 */
			TR_TR_Power_48:{
				offset:424,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元49电流采样 */
			TR_TR_Power_49:{
				offset:432,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元50电流采样 */
			TR_TR_Power_50:{
				offset:440,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元51电流采样 */
			TR_TR_Power_51:{
				offset:448,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元52电流采样 */
			TR_TR_Power_52:{
				offset:456,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元53电流采样 */
			TR_TR_Power_53:{
				offset:464,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元54电流采样 */
			TR_TR_Power_54:{
				offset:472,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元55电流采样 */
			TR_TR_Power_55:{
				offset:480,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元56电流采样 */
			TR_TR_Power_56:{
				offset:488,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元57电流采样 */
			TR_TR_Power_57:{
				offset:496,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元58电流采样 */
			TR_TR_Power_58:{
				offset:504,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元59电流采样 */
			TR_TR_Power_59:{
				offset:512,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元60电流采样 */
			TR_TR_Power_60:{
				offset:520,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元61电流采样 */
			TR_TR_Power_61:{
				offset:528,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元62电流采样 */
			TR_TR_Power_62:{
				offset:536,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元63电流采样 */
			TR_TR_Power_63:{
				offset:544,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元64电流采样 */
			TR_TR_Power_64:{
				offset:552,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元65电流采样 */
			TR_TR_Power_65:{
				offset:560,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元66电流采样 */
			TR_TR_Power_66:{
				offset:568,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元67电流采样 */
			TR_TR_Power_67:{
				offset:576,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元68电流采样 */
			TR_TR_Power_68:{
				offset:584,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元69电流采样 */
			TR_TR_Power_69:{
				offset:592,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元70电流采样 */
			TR_TR_Power_70:{
				offset:600,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元71电流采样 */
			TR_TR_Power_71:{
				offset:608,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元72电流采样 */
			TR_TR_Power_72:{
				offset:616,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元73电流采样 */
			TR_TR_Power_73:{
				offset:624,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元74电流采样 */
			TR_TR_Power_74:{
				offset:632,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元75电流采样 */
			TR_TR_Power_75:{
				offset:640,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元76电流采样 */
			TR_TR_Power_76:{
				offset:648,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元77电流采样 */
			TR_TR_Power_77:{
				offset:656,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元78电流采样 */
			TR_TR_Power_78:{
				offset:664,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元79电流采样 */
			TR_TR_Power_79:{
				offset:672,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元80电流采样 */
			TR_TR_Power_80:{
				offset:680,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元81电流采样 */
			TR_TR_Power_81:{
				offset:688,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元82电流采样 */
			TR_TR_Power_82:{
				offset:696,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元83电流采样 */
			TR_TR_Power_83:{
				offset:704,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元84电流采样 */
			TR_TR_Power_84:{
				offset:712,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元85电流采样 */
			TR_TR_Power_85:{
				offset:720,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元86电流采样 */
			TR_TR_Power_86:{
				offset:728,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元87电流采样 */
			TR_TR_Power_87:{
				offset:736,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元88电流采样 */
			TR_TR_Power_88:{
				offset:744,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元89电流采样 */
			TR_TR_Power_89:{
				offset:752,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元90电流采样 */
			TR_TR_Power_90:{
				offset:760,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元91电流采样 */
			TR_TR_Power_91:{
				offset:768,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元92电流采样 */
			TR_TR_Power_92:{
				offset:776,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元93电流采样 */
			TR_TR_Power_93:{
				offset:784,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元94电流采样 */
			TR_TR_Power_94:{
				offset:792,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元95电流采样 */
			TR_TR_Power_95:{
				offset:800,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			},
			/* 天线TR组件单元96电流采样 */
			TR_TR_Power_96:{
				offset:808,
				length:8,
				dimension:0.1,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"1",
				option:{
				}

			}
			},
			fieldArray:[
				"TR_state1",
				"TR_state2",
				"TR_state3",
				"power_state_power_state_D1",
				"power_state_power_state_D2",
				"power_state_power_state_D3",
				"power_state_power_state_D4",
				"power_state_power_state_D5",
				"power_state_power_state_D6",
				"power_state_power_state_D7",
				"power_state_power_state_D8",
				"power_state_power_state_D9",
				"power_state_power_state_D10",
				"power_state_power_state_D11",
				"power_state_power_state_D12",
				"power_state_power_state_D13",
				"power_state_power_state_D14",
				"power_state_power_state_D15",
				"power_state_power_state_D16",
				"power_state_power_state_Res",
				"TR_TR_Power_1",
				"TR_TR_Power_2",
				"TR_TR_Power_3",
				"TR_TR_Power_4",
				"TR_TR_Power_5",
				"TR_TR_Power_6",
				"TR_TR_Power_7",
				"TR_TR_Power_8",
				"TR_TR_Power_9",
				"TR_TR_Power_10",
				"TR_TR_Power_11",
				"TR_TR_Power_12",
				"TR_TR_Power_13",
				"TR_TR_Power_14",
				"TR_TR_Power_15",
				"TR_TR_Power_16",
				"TR_TR_Power_17",
				"TR_TR_Power_18",
				"TR_TR_Power_19",
				"TR_TR_Power_20",
				"TR_TR_Power_21",
				"TR_TR_Power_22",
				"TR_TR_Power_23",
				"TR_TR_Power_24",
				"TR_TR_Power_25",
				"TR_TR_Power_26",
				"TR_TR_Power_27",
				"TR_TR_Power_28",
				"TR_TR_Power_29",
				"TR_TR_Power_30",
				"TR_TR_Power_31",
				"TR_TR_Power_32",
				"TR_TR_Power_33",
				"TR_TR_Power_34",
				"TR_TR_Power_35",
				"TR_TR_Power_36",
				"TR_TR_Power_37",
				"TR_TR_Power_38",
				"TR_TR_Power_39",
				"TR_TR_Power_40",
				"TR_TR_Power_41",
				"TR_TR_Power_42",
				"TR_TR_Power_43",
				"TR_TR_Power_44",
				"TR_TR_Power_45",
				"TR_TR_Power_46",
				"TR_TR_Power_47",
				"TR_TR_Power_48",
				"TR_TR_Power_49",
				"TR_TR_Power_50",
				"TR_TR_Power_51",
				"TR_TR_Power_52",
				"TR_TR_Power_53",
				"TR_TR_Power_54",
				"TR_TR_Power_55",
				"TR_TR_Power_56",
				"TR_TR_Power_57",
				"TR_TR_Power_58",
				"TR_TR_Power_59",
				"TR_TR_Power_60",
				"TR_TR_Power_61",
				"TR_TR_Power_62",
				"TR_TR_Power_63",
				"TR_TR_Power_64",
				"TR_TR_Power_65",
				"TR_TR_Power_66",
				"TR_TR_Power_67",
				"TR_TR_Power_68",
				"TR_TR_Power_69",
				"TR_TR_Power_70",
				"TR_TR_Power_71",
				"TR_TR_Power_72",
				"TR_TR_Power_73",
				"TR_TR_Power_74",
				"TR_TR_Power_75",
				"TR_TR_Power_76",
				"TR_TR_Power_77",
				"TR_TR_Power_78",
				"TR_TR_Power_79",
				"TR_TR_Power_80",
				"TR_TR_Power_81",
				"TR_TR_Power_82",
				"TR_TR_Power_83",
				"TR_TR_Power_84",
				"TR_TR_Power_85",
				"TR_TR_Power_86",
				"TR_TR_Power_87",
				"TR_TR_Power_88",
				"TR_TR_Power_89",
				"TR_TR_Power_90",
				"TR_TR_Power_91",
				"TR_TR_Power_92",
				"TR_TR_Power_93",
				"TR_TR_Power_94",
				"TR_TR_Power_95",
				"TR_TR_Power_96"
			]
		},
		/*波控器相控阵天线执行情况	*/
		WAVE_mode_control:{
			key:"66",
			orderBy:"5",
			fields:{

			/* 当前模式控制码 */
			mode_number:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'任务模式',
					'02':'幅相自校准模式',
					'03':'参数加载模式修正码写入',
					'f3':'参数加载模式修正码读取',
					'0a':'模式切换',
					'ff':'非法模式返回'
				}

			},
			/* 模式控制码_0A */
			cmd_number_control_code_0A:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'任务模式',
					'02':'幅相自校准模式',
					'03':'参数加载模式修正码写入',
					'f3':'参数加载模式修正码读取',
					'0a':'模式切换',
					'ff':'非法模式返回'
				}

			},
			/* 时标数据 */
			cmd_number_time_data:{
				offset:16,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 功率控制模式 */
			cmd_number_power_control:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'阵面选通控制方式',
					'02':'T输入衰减控制方式'
				}

			},
			/* 收发模式选择开关 */
			cmd_number_model_switch:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'T开R关',
					'02':'T关R开',
					'03':'T关R关'
				}

			},
			/* 功率衰减值 */
			cmd_number_power_attenuation:{
				offset:48,
				length:8,
				dimension:0.5,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 方位角 */
			cmd_number_azimuth:{
				offset:56,
				length:16,
				dimension:0.001,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 离轴角 */
			cmd_number_Off_axis:{
				offset:72,
				length:16,
				dimension:0.001,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* TR组件校准选择 */
			cmd_number_tr_check:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'T组件校准选择',
					'02':'R组件校准选择'
				}

			},
			/* TR组件通道号 */
			cmd_number_TR_channel:{
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
			/* TR组件参数加载选择 */
			cmd_number_TR_para_choose:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'T组件参数加载',
					'02':'R组件参数加载'
				}

			},
			/* TR组件通道号2 */
			cmd_number_TR_channel_2:{
				offset:120,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 相位修复码 */
			cmd_number_phase_code:{
				offset:136,
				length:6144,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 幅度修正码 */
			cmd_number_amplitude_code:{
				offset:6280,
				length:6144,
				dimension:8.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 备用保留字段 */
			res:{
				offset:12424,
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
				"mode_number",
				"cmd_number_control_code_0A",
				"cmd_number_time_data",
				"cmd_number_power_control",
				"cmd_number_model_switch",
				"cmd_number_power_attenuation",
				"cmd_number_azimuth",
				"cmd_number_Off_axis",
				"cmd_number_tr_check",
				"cmd_number_TR_channel",
				"cmd_number_TR_para_choose",
				"cmd_number_TR_channel_2",
				"cmd_number_phase_code",
				"cmd_number_amplitude_code",
				"res"
			]
		},
		/*报文头	*/
		messageHead:{
			key:"380",
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
		"WAVE_control_setting"
	],
	/*状态结构体数组*/
	structGetArray:[
		"WAVE_time_series",
		"WAVE_Ka_wave",
		"WAVE_controller",
		"WAVE_phased_array_antenna",
		"WAVE_mode_control"
	]
}
