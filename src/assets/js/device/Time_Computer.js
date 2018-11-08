/*时统监控计算机协议*/
export const device_Time_Computer={
	/* 时统监控计算机设置类别 */
	CTime_set_type:{
		key:"93",
		fields:{

			/* 频标切换器 */
			Switch:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标A */
			A:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标B */
			B:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标C */
			C:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 时统监控计算机设置详细信息 */
	CTime_term_infor:{
		key:"94",
		fields:{

			/* 频标选择 */
			choice:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			resource_choice:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			clock_mode:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			manual:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 时统监控计算机设置项 */
	CTime_set_term:{
		key:"95",
		fields:{

			/* 网络参数 */
			network:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 版本信息 */
			edition:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟状态 */
			clock_state:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时延补偿 */
			delayed:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			choice1_choice:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			choice1_resource_choice:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			choice1_clock_mode:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			choice1_manual:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			choice2_choice:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			choice2_resource_choice:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			choice2_clock_mode:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			choice2_manual:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			choice3_choice:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			choice3_resource_choice:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			choice3_clock_mode:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			choice3_manual:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 时统监控计算机设置内容--设置时钟 */
	CTime_set_clock:{
		key:"96",
		fields:{

			/* 年 */
			year:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 月 */
			month:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 日 */
			day:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时 */
			hour:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 分 */
			minute:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 秒 */
			second:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 加/减秒 */
			add_or_sub:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 闰秒标志 */
			Leap:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时间基准 */
			time_bench:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频率基准 */
			frequency_bench:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 主备切换 */
			Switch:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 接收机 */
			receiver:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时延补偿 */
			delayed:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			choice1_choice:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			choice1_resource_choice:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			choice1_clock_mode:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			choice1_manual:{
				offset:128,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			choice2_choice:{
				offset:136,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			choice2_resource_choice:{
				offset:144,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			choice2_clock_mode:{
				offset:152,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			choice2_manual:{
				offset:160,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			choice3_choice:{
				offset:168,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			choice3_resource_choice:{
				offset:176,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			choice3_clock_mode:{
				offset:184,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			choice3_manual:{
				offset:192,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 时统监控计算机设置内容 */
	CTime_set_content:{
		key:"97",
		fields:{

			/* 网络参数获取 */
			recv:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* IP地址 */
			IP:{
				offset:8,
				length:96,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 自身端口 */
			port:{
				offset:104,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 目标端口 */
			Multicast_port:{
				offset:120,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 版本信息 */
			edition:{
				offset:136,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 年 */
			tsc_year:{
				offset:144,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 月 */
			tsc_month:{
				offset:152,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 日 */
			tsc_day:{
				offset:160,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时 */
			tsc_hour:{
				offset:168,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 分 */
			tsc_minute:{
				offset:176,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 秒 */
			tsc_second:{
				offset:184,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 加/减秒 */
			tsc_add_or_sub:{
				offset:192,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 闰秒标志 */
			tsc_Leap:{
				offset:200,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时间基准 */
			tsc_time_bench:{
				offset:208,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频率基准 */
			tsc_frequency_bench:{
				offset:216,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 主备切换 */
			tsc_Switch:{
				offset:224,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 接收机 */
			tsc_receiver:{
				offset:232,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时延补偿 */
			tsc_delayed:{
				offset:240,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			tsc_choice1_choice:{
				offset:248,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			tsc_choice1_resource_choice:{
				offset:256,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			tsc_choice1_clock_mode:{
				offset:264,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			tsc_choice1_manual:{
				offset:272,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			tsc_choice1_choice2_choice:{
				offset:280,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			tsc_choice1_choice2_resource_choice:{
				offset:288,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			tsc_choice1_choice2_clock_mode:{
				offset:296,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			tsc_choice1_choice2_manual:{
				offset:304,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			tsc_choice1_choice2_choice3_choice:{
				offset:312,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			tsc_choice1_choice2_choice3_resource_choice:{
				offset:320,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			tsc_choice1_choice2_choice3_clock_mode:{
				offset:328,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			tsc_choice1_choice2_choice3_manual:{
				offset:336,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 时统监控计算机时统参数设置帧 */
	CTime_series:{
		key:"98",
		fields:{

			/* 帧头 */
			head:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标切换器 */
			tst_Switch:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标A */
			tst_A:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标B */
			tst_B:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标C */
			tst_C:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 网络参数 */
			tsm_network:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 版本信息 */
			tsm_edition:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟状态 */
			tsm_clock_state:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时延补偿 */
			tsm_delayed:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			tsm_choice1_choice:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			tsm_choice1_resource_choice:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			tsm_choice1_clock_mode:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			tsm_choice1_manual:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			tsm_choice1_choice2_choice:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			tsm_choice1_choice2_resource_choice:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			tsm_choice1_choice2_clock_mode:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			tsm_choice1_choice2_manual:{
				offset:128,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			tsm_choice1_choice2_choice3_choice:{
				offset:136,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			tsm_choice1_choice2_choice3_resource_choice:{
				offset:144,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			tsm_choice1_choice2_choice3_clock_mode:{
				offset:152,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			tsm_choice1_choice2_choice3_manual:{
				offset:160,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 网络参数获取 */
			tscon_recv:{
				offset:168,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* IP地址 */
			tscon_IP:{
				offset:176,
				length:96,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 自身端口 */
			tscon_port:{
				offset:272,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 目标端口 */
			tscon_Multicast_port:{
				offset:288,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 版本信息 */
			tscon_edition:{
				offset:304,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 年 */
			tscon_tsc_year:{
				offset:312,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 月 */
			tscon_tsc_month:{
				offset:320,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 日 */
			tscon_tsc_day:{
				offset:328,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时 */
			tscon_tsc_hour:{
				offset:336,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 分 */
			tscon_tsc_minute:{
				offset:344,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 秒 */
			tscon_tsc_second:{
				offset:352,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 加/减秒 */
			tscon_tsc_add_or_sub:{
				offset:360,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 闰秒标志 */
			tscon_tsc_Leap:{
				offset:368,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时间基准 */
			tscon_tsc_time_bench:{
				offset:376,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频率基准 */
			tscon_tsc_frequency_bench:{
				offset:384,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 主备切换 */
			tscon_tsc_Switch:{
				offset:392,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 接收机 */
			tscon_tsc_receiver:{
				offset:400,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时延补偿 */
			tscon_tsc_delayed:{
				offset:408,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			tscon_tsc_choice1_choice:{
				offset:416,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			tscon_tsc_choice1_resource_choice:{
				offset:424,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			tscon_tsc_choice1_clock_mode:{
				offset:432,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			tscon_tsc_choice1_manual:{
				offset:440,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			tscon_tsc_choice1_choice2_choice:{
				offset:448,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			tscon_tsc_choice1_choice2_resource_choice:{
				offset:456,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			tscon_tsc_choice1_choice2_clock_mode:{
				offset:464,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			tscon_tsc_choice1_choice2_manual:{
				offset:472,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			tscon_tsc_choice1_choice2_choice3_choice:{
				offset:480,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			tscon_tsc_choice1_choice2_choice3_resource_choice:{
				offset:488,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时钟模式 */
			tscon_tsc_choice1_choice2_choice3_clock_mode:{
				offset:496,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 手动调频 */
			tscon_tsc_choice1_choice2_choice3_manual:{
				offset:504,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:512,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 时统监控计算机工作状态上报--频标结构 */
	CTime_frequency_struct:{
		key:"99",
		fields:{

			/* 铷钟状态 */
			state:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 模拟锁相环 */
			simulation:{
				offset:8,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输入状态 */
			input_state:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			choice:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			resource_choice:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 准确度 */
			accuracy:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 秒稳定度 */
			second_stability:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 压控电压(DA值) */
			DA:{
				offset:72,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 告警状态 */
			alarm_state:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 故障码 */
			fault_number:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	},
	/* 时统监控计算机工作状态上报 */
	CTime_work_state:{
		key:"100",
		fields:{

			/* 帧头 */
			head:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 设备编号 */
			number:{
				offset:8,
				length:24,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 主备状态 */
			prepar_state:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 告警状态 */
			alarm_state:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 故障码 */
			fault_number:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 信号输入 */
			signal_input:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频率基准 */
			frequency_bench:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时间基准 */
			time_bench:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 年 */
			year:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 月 */
			month:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 日 */
			day:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 时 */
			hour:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 分 */
			minute:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 秒 */
			second:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 闰标志 */
			Leap:{
				offset:128,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 模拟锁相环 */
			simulation:{
				offset:136,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 工作主钟 */
			main_time:{
				offset:144,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 工作模式 */
			work_mode:{
				offset:152,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 收星颗数 */
			star_count:{
				offset:160,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 有效状态 */
			effective_state:{
				offset:168,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 铷钟状态 */
			fs1_state:{
				offset:176,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 模拟锁相环 */
			fs1_simulation:{
				offset:184,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输入状态 */
			fs1_input_state:{
				offset:192,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			fs1_choice:{
				offset:200,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			fs1_resource_choice:{
				offset:208,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 准确度 */
			fs1_accuracy:{
				offset:216,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 秒稳定度 */
			fs1_second_stability:{
				offset:232,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 压控电压(DA值) */
			fs1_DA:{
				offset:248,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 告警状态 */
			fs1_alarm_state:{
				offset:280,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 故障码 */
			fs1_fault_number:{
				offset:288,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 铷钟状态 */
			fs2_state:{
				offset:296,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 模拟锁相环 */
			fs2_simulation:{
				offset:304,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输入状态 */
			fs2_input_state:{
				offset:312,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			fs2_choice:{
				offset:320,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			fs2_resource_choice:{
				offset:328,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 准确度 */
			fs2_accuracy:{
				offset:336,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 秒稳定度 */
			fs2_second_stability:{
				offset:352,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 压控电压(DA值) */
			fs2_DA:{
				offset:368,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 告警状态 */
			fs2_alarm_state:{
				offset:400,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 故障码 */
			fs2_fault_number:{
				offset:408,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 铷钟状态 */
			fs3_state:{
				offset:416,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 模拟锁相环 */
			fs3_simulation:{
				offset:424,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 输入状态 */
			fs3_input_state:{
				offset:432,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 频标选择 */
			fs3_choice:{
				offset:440,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 参考选择 */
			fs3_resource_choice:{
				offset:448,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 准确度 */
			fs3_accuracy:{
				offset:456,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 秒稳定度 */
			fs3_second_stability:{
				offset:472,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 压控电压(DA值) */
			fs3_DA:{
				offset:488,
				length:32,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 告警状态 */
			fs3_alarm_state:{
				offset:520,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 故障码 */
			fs3_fault_number:{
				offset:528,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:536,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				option:{
				}

			}
		}
	}
}
