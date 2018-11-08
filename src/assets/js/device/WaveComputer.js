/*波控监控计算机协议*/
export const device_WaveComputer={
	/* 波控监控计算机参数设置 */
	WaveComputer_control_setting:{
		key:"55",
		fields:{

			/* 主备机状态 */
			state:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 控制方式 */
			control_mode:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 任务时间 */
			start_time:{
				offset:16,
				length:48,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 卫星编号设置 */
			number:{
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
			/* 工作模式控制码 */
			Operation_control:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 备用保留字段 */
			RECV:{
				offset:88,
				length:256,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 波控监控计算机时统信息 */
	WaveComputer_time_series:{
		key:"56",
		fields:{

			/* 实时时间 */
			real_time:{
				offset:0,
				length:48,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时统状态 */
			time_series:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 波控监控计算机Ka波控机 */
	WaveComputer_Ka_wave:{
		key:"57",
		fields:{

			/* 卫星编号 */
			number:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 控制方式 */
			control:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 主备机状态 */
			state:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 工作模式 */
			word_pattern:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 工作方式 */
			word_mode:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 方位实时角 */
			azimuth_angle:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 离轴角 */
			axis_angle:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 故障状态 */
			fault_state:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 波控监控计算机波控器 */
	WaveComputer_controller:{
		key:"58",
		fields:{

			/* 波控机软件版本号 */
			edition_number:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 波控机FPGA状态 */
			FPGA_state:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 天线指向状态 */
			antenna_state:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 波控监控计算机相控阵天线 */
	WaveComputer_phased_array_antenna:{
		key:"59",
		fields:{

			/* 天线TR组件温度状态1 */
			TR_state1:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 天线TR组件温度状态2 */
			TR_state2:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 天线TR组件温度状态3 */
			TR_state3:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 电源模块状态 */
			power_state:{
				offset:24,
				length:24,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 天线TR组件单元电流采样 */
			TR:{
				offset:48,
				length:768,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 波控监控计算机相控阵天线执行情况 */
	WaveComputer_mode_control:{
		key:"60",
		fields:{

			/* 当前模式控制码 */
			mode_number:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 当前模式执行结果 */
			cmd_number:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 备用保留字段 */
			res:{
				offset:16,
				length:160,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	}
}
