/*伺服监控计算机协议*/
export const device_ServerComputer={
	/* 伺服监控计算机参数设置 */
	ServerComputer_parameter_setting:{
		key:"71",
		fields:{

			/* 任务时间 */
			Start_Time:{
				offset:0,
				length:48,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 控制方式 */
			control_mode:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 主备机状态 */
			state:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 工作方式 */
			Operation_mode:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 方位指令角 */
			Azimuth:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 俯仰指令角 */
			Pitch:{
				offset:88,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 目标卫星编号 */
			Target_number:{
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
	},
	/* 伺服监控计算机状态上报信息 */
	ServerComputer_state_report:{
		key:"72",
		fields:{

			/* 实时时间 */
			Real_time:{
				offset:0,
				length:48,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时统状态 */
			Time_State:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 控制方式 */
			control_mode:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 主备机状态 */
			state:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 工作方式 */
			Operation_mode:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 方位指令角 */
			Azimuth:{
				offset:80,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 俯仰指令角 */
			Pitch:{
				offset:96,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 故障状态 */
			Failure_state:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 目标卫星编号 */
			Target_number:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 限位状态 */
			Limit_state:{
				offset:128,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
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
				option:{
				}

			}
		}
	}
}
