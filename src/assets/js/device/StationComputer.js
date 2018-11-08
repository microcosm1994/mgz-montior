/*站间分系统监控计算机协议*/
export const device_StationComputer={
	/* 站间分系统监控计算机设备网络地址定义 */
	StationComputer_equipment_attribute:{
		key:"257",
		fields:{

			/* 设备名称 */
			ea_name:{
				offset:0,
				length:400,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 设备IP地址 */
			ea_IP:{
				offset:400,
				length:120,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 设备组播地址 */
			ea_Multicast_IP:{
				offset:520,
				length:120,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 设备接收端口号 */
			ea_report:{
				offset:640,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 设备发送端口号 */
			ea_seport:{
				offset:656,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 站间分系统监控计算机设备通信结构 */
	StationComputer_communication:{
		key:"258",
		fields:{

			/* 组播地址 */
			Multicast_IP:{
				offset:0,
				length:120,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 接收端口 */
			recv_port:{
				offset:120,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 发送端口 */
			send_port:{
				offset:136,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 本机分系统号 */
			system_num:{
				offset:152,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 站间分系统监控计算机信息报文首部 */
	StationComputer_information_header:{
		key:"259",
		fields:{

			/* 应用标识号 */
			H:{
				offset:0,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 信息报文帧序号 */
			SEQ:{
				offset:32,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 任务代号 */
			M:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 信息报文帧类型 */
			T:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 信息报文帧长度 */
			L:{
				offset:80,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 优先级 */
			P:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 信息代号 */
			C:{
				offset:104,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 附加字 */
			A:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 信源 */
			S:{
				offset:128,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 信宿 */
			D:{
				offset:144,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留字 */
			R:{
				offset:160,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 站间分系统监控计算机子报文首部 */
	StationComputer_sub_information_header:{
		key:"260",
		fields:{

			/* 源分系统编号 */
			S1:{
				offset:0,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 目的分系统编号 */
			D1:{
				offset:16,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 命令类型 */
			T1:{
				offset:32,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 同类命令序号 */
			I1:{
				offset:48,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 操作字 */
			O1:{
				offset:64,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* Data1数据长度 */
			L1:{
				offset:80,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 数据字段 */
			Data1:{
				offset:96,
				length:2048,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 站间分系统监控计算机设置应答信息 */
	StationComputer_response_information:{
		key:"261",
		fields:{

			/* 设置应答信息 */
			ANSWER_FLAG:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 站间分系统监控计算机命令类型号定义 */
	StationComputer_command_type:{
		key:"262",
		fields:{

			/* 参数设置帧 */
			ct_set:{
				offset:0,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 应答帧 */
			ct_answer:{
				offset:16,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 状态帧 */
			ct_state:{
				offset:32,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 站间分系统监控计算机与C上变频器参数设置 */
	StationComputer_up_parameter_setting:{
		key:"263",
		fields:{

			/* 本分控状态 */
			State:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 衰减 */
			attenuation:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			RECV:{
				offset:16,
				length:256,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 站间分系统监控计算机与C上变频器状态上报信息 */
	StationComputer_up_state_report:{
		key:"264",
		fields:{

			/* 本分控状态 */
			State:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 自检状态 */
			examination_state:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 衰减 */
			attenuation:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 本振锁定状态 */
			Local_locking:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 内外参考状态 */
			reference:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考锁定状态 */
			lock_state:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 温度 */
			temperature:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 湿度 */
			humidity:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			RECV:{
				offset:64,
				length:256,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 站间分系统监控计算机与C下变频器参数设置 */
	StationComputer_down_parameter_setting:{
		key:"265",
		fields:{

			/* 本分控状态 */
			State:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 衰减 */
			attenuation:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 28V1输出开启/关断 */
			_28V1_output:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 28V2输出开启/关断 */
			_28V2_output:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 9V1输出开启/关断 */
			_9V1_output:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 9V2输出开启/关断 */
			_9V2_output:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 控制切换开关 */
			Control_switch:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			RECV:{
				offset:56,
				length:256,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 站间分系统监控计算机与C下变频器状态上报信息 */
	StationComputer_down_state_report:{
		key:"266",
		fields:{

			/* 本分控状态 */
			State:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 自检状态 */
			examination_state:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 衰减 */
			attenuation:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 本振锁定状态 */
			Local_locking:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 内外参考状态 */
			reference:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考锁定状态 */
			lock_state:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 28V1输出开启/关断 */
			_28V1_output:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 28V2输出开启/关断 */
			_28V2_output:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 9V1输出开启/关断 */
			_9V1_output:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 9V2输出开启/关断 */
			_9V2_output:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 切换开关 */
			Control_switch:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* LNAA电流及状态 */
			LNAA_state:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* LNAB电流及状态 */
			LNAB_state:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 温度 */
			temperature:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 湿度 */
			humidity:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			RECV:{
				offset:120,
				length:256,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 站间分系统监控计算机与C发射校零变频器参数设置 */
	StationComputer_send_parameter_setting:{
		key:"267",
		fields:{

			/* 本分控状态 */
			State:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 射频输入选择 */
			input:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 中频输出选择 */
			output:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			RECV:{
				offset:24,
				length:256,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 站间分系统监控计算机与C发射校零变频器状态上报信息 */
	StationComputer_send_state_report:{
		key:"268",
		fields:{

			/* 本分控状态 */
			State:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 自检状态 */
			examination_state:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 本振锁定状态 */
			Local_locking:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 内外参考状态 */
			reference:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考锁定状态 */
			lock_state:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 射频输入状态 */
			input:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 中频输出状态 */
			output:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 温度 */
			temperature:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 湿度 */
			humidity:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			RECV:{
				offset:72,
				length:256,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 站间分系统监控计算机与C接收校零变频器参数设置 */
	StationComputer_recv_parameter_setting:{
		key:"269",
		fields:{

			/* 本分控状态 */
			State:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 中频输出选择 */
			output:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			RECV:{
				offset:16,
				length:256,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 站间分系统监控计算机与C接收校零变频器状态上报信息 */
	StationComputer_recv_state_report:{
		key:"270",
		fields:{

			/* 本分控状态 */
			State:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 自检状态 */
			examination_state:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 本振锁定状态 */
			Local_locking:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 内外参考状态 */
			reference:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考锁定状态 */
			lock_state:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 中频输出状态 */
			output:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 温度 */
			temperature:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 湿度 */
			humidity:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* RECV */
			RECV:{
				offset:64,
				length:256,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 站间分系统监控计算机与站间分路组合参数设置 */
	StationComputer_inter_parameter_setting:{
		key:"271",
		fields:{

			/* 本分控状态 */
			State:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				option:{
					'00':'未指定',
					'aa':'分控',
					'bb':'本控'
				}

			},
			/* 输出1对应输入选择 */
			OUT1_SEL:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出2对应输入选择 */
			OUT2_SEL:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出3对应输入选择 */
			OUT3_SEL:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出4对应输入选择 */
			OUT4_SEL:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出5对应输入选择 */
			OUT5_SEL:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出6对应输入选择 */
			OUT6_SEL:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出7对应输入选择 */
			OUT7_SEL:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出8对应输入选择 */
			OUT8_SEL:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出9对应输入选择 */
			OUT9_SEL:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出10对应输入选择 */
			OUT10_SEL:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出11对应输入选择 */
			OUT11_SEL:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出12对应输入选择 */
			OUT12_SEL:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保存 */
			RECV:{
				offset:104,
				length:256,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 站间分系统监控计算机与站间分路组合状态上报信息 */
	StationComputer_inter_state_report:{
		key:"272",
		fields:{

			/* 本分控状态 */
			State:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				option:{
					'00':'未指定',
					'aa':'分控',
					'bb':'本控'
				}

			},
			/* 自检状态 */
			examination_state:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				option:{
					'00':'正常',
					'ff':'故障'
				}

			},
			/* 输出1对应输入选择 */
			OUT1_SEL:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出2对应输入选择 */
			OUT2_SEL:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出3对应输入选择 */
			OUT3_SEL:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出4对应输入选择 */
			OUT4_SEL:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出5对应输入选择 */
			OUT5_SEL:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出6对应输入选择 */
			OUT6_SEL:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出7对应输入选择 */
			OUT7_SEL:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出8对应输入选择 */
			OUT8_SEL:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出9对应输入选择 */
			OUT9_SEL:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出10对应输入选择 */
			OUT10_SEL:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出11对应输入选择 */
			OUT11_SEL:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出12对应输入选择 */
			OUT12_SEL:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
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
				option:{
				}

			}
		}
	}
}
