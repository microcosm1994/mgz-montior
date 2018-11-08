/*Ka监控计算机协议*/
export const device_Ka_Computer={
	/* 模拟源上行调制参数 */
	KAC_up_modulation:{
		key:"81",
		fields:{

			/* 工作模式 */
			WorkMode:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 调制开关 */
			ModSwitch:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 调制电平 */
			Level:{
				offset:16,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 伪码加调/去调 */
			ModuPN:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 数据加调/去调 */
			ModuData:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 调制伪码序号 */
			PRN:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 调制伪码类型 */
			PNsel:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输出载波中频 */
			CarIF:{
				offset:64,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 多普勒动态模拟开关 */
			SimSw:{
				offset:96,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 上行多普勒预置 */
			Offset:{
				offset:112,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 多普勒模拟频率范围 */
			FreRange:{
				offset:128,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 最大多普勒变化率 */
			MaxDop1st:{
				offset:144,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 调制数据速率 */
			Data_rate:{
				offset:160,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* LDPC开关 */
			LDPC_EN:{
				offset:168,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			Res:{
				offset:176,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			Resd:{
				offset:192,
				length:64,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 模拟源接收参数 */
	KAC_recv_param:{
		key:"82",
		fields:{

			/* 输入选择 */
			Input:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 接收开关 */
			RecSwitch:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 接收伪码序号 */
			PRN:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 接收伪码类型 */
			PNsel:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 载波频率捕获范围 */
			AcquRange:{
				offset:32,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时间不确定度捕获范围 */
			TimeRange:{
				offset:48,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时间滑动范围 */
			TimeunsureRange:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 载波环路带宽 */
			PllBw:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 接收数据速率 */
			Data_rate:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* LDPC开关 */
			LDPC_EN:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			Resd:{
				offset:96,
				length:160,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 模拟源时码单元参数 */
	KAC_time_unit:{
		key:"83",
		fields:{

			/* 内/外时频选择 */
			Mode:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			Res1:{
				offset:8,
				length:24,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 年 */
			Year:{
				offset:32,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 天 */
			Day:{
				offset:48,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时 */
			Hour:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 分 */
			Minute:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 秒 */
			Second:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 闰年标识 */
			Leap:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			Res2:{
				offset:96,
				length:160,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 模拟源上行调制状态 */
	KAC_up_status:{
		key:"84",
		fields:{

			/* 多普勒频偏 */
			DopINco:{
				offset:0,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 数据类型标志 */
			DataSign:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 校换比对结果 */
			CmdFrmloop:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 发送周计数 */
			Wnup:{
				offset:48,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 发送周内毫秒 */
			Sowup:{
				offset:64,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 生成周计数 */
			Wngn:{
				offset:96,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 生成周内毫秒 */
			Sowgn:{
				offset:112,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 比对错帧数 */
			CmdFrmerrnum:{
				offset:144,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			RES:{
				offset:160,
				length:96,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 错帧序号 */
			CmdFrmerrID:{
				offset:256,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 模拟源接收状态 */
	KAC_recv_status:{
		key:"85",
		fields:{

			/* 接收状态 */
			RecStaus:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 干扰状态 */
			InterState:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 信号功率 */
			Level:{
				offset:16,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* AGC电压 */
			AgcVolt:{
				offset:32,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 载噪比 */
			C_N0:{
				offset:48,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 载波多普勒 */
			CarrDopp:{
				offset:64,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 伪码多普勒 */
			PNDopp:{
				offset:96,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 捕获时差 */
			TimeDiff:{
				offset:128,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 捕获时间 */
			AcquTimeS:{
				offset:144,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			Res:{
				offset:160,
				length:96,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 模拟源时频跟踪接收机状态 */
	KAC_time_status:{
		key:"86",
		fields:{

			/* 外秒脉冲同步状态 */
			PpsStatus:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 外时统锁定状态 */
			TimeLockFlag:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时码信息低16位 */
			B000L16:{
				offset:16,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时码信息高32位 */
			B000H32:{
				offset:32,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 年 */
			Year:{
				offset:64,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 周计数 */
			WeekCount:{
				offset:80,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 周内毫秒计数 */
			SecondCount:{
				offset:96,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 锁定指示 */
			VcoLock:{
				offset:128,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			Res1:{
				offset:136,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 收发状态 */
			ModorRec:{
				offset:144,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 供电状态 */
			PowerSta:{
				offset:152,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 基带板状态 */
			PowerStaJD:{
				offset:160,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 硬件温度 */
			Temprature:{
				offset:168,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参数比对结果 */
			CmdErr:{
				offset:176,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 取码接口通信状态 */
			PRNSta:{
				offset:184,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			RES2:{
				offset:192,
				length:64,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 模拟源时隙表 */
	KAC_time_slots:{
		key:"87",
		fields:{

			/* 时隙表数据 */
			Data:{
				offset:0,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 模拟源调制数据 */
	KAC_modulation_data:{
		key:"88",
		fields:{

			/* 调制数据 */
			Word:{
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
	/* 模拟源解调数据 */
	KAC_demodulation_data:{
		key:"89",
		fields:{

			/* 时码 */
			B000:{
				offset:0,
				length:48,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			RES:{
				offset:48,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 解调数据N(帧长)个字 */
			Word:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 模拟源测量数据 */
	KAC_measure_data:{
		key:"90",
		fields:{

			/* 时码 */
			B000:{
				offset:0,
				length:48,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			RES1:{
				offset:48,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 伪距 */
			PRG:{
				offset:64,
				length:64,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 发射时延 */
			Detrs:{
				offset:128,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 接收时延 */
			Dercv:{
				offset:160,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 收发状态 */
			ModorRec:{
				offset:192,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 保留 */
			Res2:{
				offset:200,
				length:192,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 模拟源小环数据 */
	KAC_smallring_data:{
		key:"91",
		fields:{

			/* 小环比对结果 */
			CmdFrmloop:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 发送周计数 */
			Wnup:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 发送周内毫秒 */
			Sowup:{
				offset:24,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 生成周计数 */
			Wngn:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 生成周内毫秒 */
			Sowgn:{
				offset:72,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 比对错帧数 */
			CmdFrmerrnum:{
				offset:104,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 错帧序号 */
			CmdFrmerrID:{
				offset:120,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 模拟源内存显示数据 */
	KAC_memory_data:{
		key:"92",
		fields:{

			/* 内存显示数据 */
			Data:{
				offset:0,
				length:8192,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	}
}
