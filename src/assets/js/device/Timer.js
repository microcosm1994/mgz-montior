/*时统监控协议*/
export const device_Timer={
	id:'15',
	sId:'0',
	ifBaseband:true,
	struct:{
		/*时统设置类别	*/
		Timer_set_type:{
			key:"101",
			orderBy:"0",
			fields:{

			/* 频标切换器 */
			Switch:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"Switch",
				"A",
				"B",
				"C"
			]
		},
		/*时统设置详细信息	*/
		Timer_term_infor:{
			key:"102",
			orderBy:"0",
			fields:{

			/* 频标选择 */
			choice:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"choice",
				"resource_choice",
				"clock_mode",
				"manual"
			]
		},
		/*时统设置项	*/
		Timer_set_term:{
			key:"103",
			orderBy:"0",
			fields:{

			/* 网络参数 */
			network:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"network",
				"edition",
				"clock_state",
				"delayed",
				"choice1_choice",
				"choice1_resource_choice",
				"choice1_clock_mode",
				"choice1_manual",
				"choice2_choice",
				"choice2_resource_choice",
				"choice2_clock_mode",
				"choice2_manual",
				"choice3_choice",
				"choice3_resource_choice",
				"choice3_clock_mode",
				"choice3_manual"
			]
		},
		/*时统设置内容--设置时钟	*/
		Timer_set_clock:{
			key:"104",
			orderBy:"0",
			fields:{

			/* 年 */
			year:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 闰年标识 */
			Leap:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"year",
				"month",
				"day",
				"hour",
				"minute",
				"second",
				"add_or_sub",
				"Leap",
				"time_bench",
				"frequency_bench",
				"Switch",
				"receiver",
				"delayed",
				"choice1_choice",
				"choice1_resource_choice",
				"choice1_clock_mode",
				"choice1_manual",
				"choice2_choice",
				"choice2_resource_choice",
				"choice2_clock_mode",
				"choice2_manual",
				"choice3_choice",
				"choice3_resource_choice",
				"choice3_clock_mode",
				"choice3_manual"
			]
		},
		/*时统设置内容	*/
		Timer_set_content:{
			key:"105",
			orderBy:"0",
			fields:{

			/* 获取 */
			recv:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 闰年标识 */
			tsc_Leap:{
				offset:200,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"recv",
				"IP",
				"port",
				"Multicast_port",
				"edition",
				"tsc_year",
				"tsc_month",
				"tsc_day",
				"tsc_hour",
				"tsc_minute",
				"tsc_second",
				"tsc_add_or_sub",
				"tsc_Leap",
				"tsc_time_bench",
				"tsc_frequency_bench",
				"tsc_Switch",
				"tsc_receiver",
				"tsc_delayed",
				"tsc_choice1_choice",
				"tsc_choice1_resource_choice",
				"tsc_choice1_clock_mode",
				"tsc_choice1_manual",
				"tsc_choice1_choice2_choice",
				"tsc_choice1_choice2_resource_choice",
				"tsc_choice1_choice2_clock_mode",
				"tsc_choice1_choice2_manual",
				"tsc_choice1_choice2_choice3_choice",
				"tsc_choice1_choice2_choice3_resource_choice",
				"tsc_choice1_choice2_choice3_clock_mode",
				"tsc_choice1_choice2_choice3_manual"
			]
		},
		/*时统参数设置帧	*/
		Timer_series:{
			key:"106",
			orderBy:"0",
			fields:{

			/* 帧头 */
			head:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 获取 */
			tscon_recv:{
				offset:168,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 闰年标识 */
			tscon_tsc_Leap:{
				offset:368,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"head",
				"tst_Switch",
				"tst_A",
				"tst_B",
				"tst_C",
				"tsm_network",
				"tsm_edition",
				"tsm_clock_state",
				"tsm_delayed",
				"tsm_choice1_choice",
				"tsm_choice1_resource_choice",
				"tsm_choice1_clock_mode",
				"tsm_choice1_manual",
				"tsm_choice1_choice2_choice",
				"tsm_choice1_choice2_resource_choice",
				"tsm_choice1_choice2_clock_mode",
				"tsm_choice1_choice2_manual",
				"tsm_choice1_choice2_choice3_choice",
				"tsm_choice1_choice2_choice3_resource_choice",
				"tsm_choice1_choice2_choice3_clock_mode",
				"tsm_choice1_choice2_choice3_manual",
				"tscon_recv",
				"tscon_IP",
				"tscon_port",
				"tscon_Multicast_port",
				"tscon_edition",
				"tscon_tsc_year",
				"tscon_tsc_month",
				"tscon_tsc_day",
				"tscon_tsc_hour",
				"tscon_tsc_minute",
				"tscon_tsc_second",
				"tscon_tsc_add_or_sub",
				"tscon_tsc_Leap",
				"tscon_tsc_time_bench",
				"tscon_tsc_frequency_bench",
				"tscon_tsc_Switch",
				"tscon_tsc_receiver",
				"tscon_tsc_delayed",
				"tscon_tsc_choice1_choice",
				"tscon_tsc_choice1_resource_choice",
				"tscon_tsc_choice1_clock_mode",
				"tscon_tsc_choice1_manual",
				"tscon_tsc_choice1_choice2_choice",
				"tscon_tsc_choice1_choice2_resource_choice",
				"tscon_tsc_choice1_choice2_clock_mode",
				"tscon_tsc_choice1_choice2_manual",
				"tscon_tsc_choice1_choice2_choice3_choice",
				"tscon_tsc_choice1_choice2_choice3_resource_choice",
				"tscon_tsc_choice1_choice2_choice3_clock_mode",
				"tscon_tsc_choice1_choice2_choice3_manual",
				"tail"
			]
		},
		/*时统工作状态上报--频标结构	*/
		Timer_frequency_struct:{
			key:"107",
			orderBy:"0",
			fields:{

			/* 铷钟状态 */
			state:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'铷钟未锁定，锁相环未同步',
					'01':'铷钟未锁定，锁相环已同步',
					'10':'铷钟已锁定，锁相环未同步',
					'11':'铷钟已锁定，锁相环已同步'
				}

			},
			/* 模拟锁相环 */
			simulation:{
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
			/* 输入状态 */
			input_state:{
				offset:16,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无输入',
					'01':'10MHz输入正常',
					'02':'1PPS-2输入正常',
					'04':'1PPS-1输入正常'
				}

			},
			/* 频标选择 */
			choice:{
				offset:24,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'输出频率标准为铷原子频标',
					'01':'输出频率标准为外频标'
				}

			},
			/* 参考选择 */
			resource_choice:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'参考源为 10MHz',
					'02':'参考源为 1PPS-2',
					'04':'参考源为 1PPS-1'
				}

			},
			/*  准确度 */
			accuracy:{
				offset:40,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:6,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 秒稳定度 */
			second_stability:{
				offset:56,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:5,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 压控电压(DA值) */
			DA:{
				offset:72,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 告警状态 */
			alarm_state:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无警告',
					'01':'警告'
				}

			},
			/* 故障码 */
			fault_number:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无故障',
					'01':'锁相环故障',
					'02':'10MHz频标模块故障',
					'04':'铷原子钟状态失锁'
				}

			}
			},
			fieldArray:[
				"state",
				"simulation",
				"input_state",
				"choice",
				"resource_choice",
				"accuracy",
				"second_stability",
				"DA",
				"alarm_state",
				"fault_number"
			]
		},
		/*时统工作状态上报	*/
		Timer_work_state:{
			key:"108",
			orderBy:"0",
			fields:{

			/* 帧头 */
			head:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 设备编号 */
			number:{
				offset:8,
				length:24,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 主备状态 */
			prepar_state:{
				offset:32,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'备用切换器',
					'01':'主用切换器'
				}

			},
			/* 告警状态 */
			alarm_state:{
				offset:40,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无警告',
					'01':'警告'
				}

			},
			/* 故障码 */
			fault_number:{
				offset:48,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无故障',
					'01':'信号检测模块故障',
					'02':'信号产生分配模块故障',
					'04':'测量切换模块故障',
					'08':'主控模块故障',
					'10':'网络授时模块故障',
					'20':'接收机模块故障'
				}

			},
			/* 外部信号输入 */
			signal_input:{
				offset:56,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'外时频10MHz输入有效',
					'02':'外时频1PPS输入有效',
					'04':'外时频B(DC)码输入有效',
					'08':'预留1PPS输入有效',
					'10':'预留B(DC)码输入有效',
					'20':'铷频标A 10MHz输入有效',
					'40':'铷频标B 10MHz输入有效',
					'80':'铷频标B 10MHz输入有效'
				}

			},
			/* 频率基准 */
			frequency_bench:{
				offset:64,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'自动，外时频',
					'10':'手动，外时频',
					'02':'自动，铷频标A',
					'12':'手动，铷频标B',
					'04':'自动，铷频标B',
					'14':'手动，铷频标B',
					'08':'自动，铷频标C',
					'18':'手动，铷频标C'
				}

			},
			/* 时间基准 */
			time_bench:{
				offset:72,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'自动，外时频',
					'11':'手动，外时频',
					'02':'自动，预留',
					'12':'手动，预留',
					'04':'自动，接收机',
					'14':'手动，接收机'
				}

			},
			/* 年 */
			year:{
				offset:80,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 月 */
			month:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 日 */
			day:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 时 */
			hour:{
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
			/* 分 */
			minute:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 秒 */
			second:{
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
			/* 闰秒标识 */
			Leap:{
				offset:128,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无闰秒',
					'01':'正闰秒',
					'02':'负闰秒'
				}

			},
			/* 模拟锁相环 */
			simulation:{
				offset:136,
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
			/* 工作主钟 */
			main_time:{
				offset:144,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'铷频标A',
					'01':'铷频标B',
					'02':'铷频标C'
				}

			},
			/* 工作模式 */
			work_mode:{
				offset:152,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'混合模式',
					'01':'北斗模式',
					'02':'GPS模式'
				}

			},
			/* 收星颗数 */
			star_count:{
				offset:160,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 有效状态 */
			effective_state:{
				offset:168,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'收星无效',
					'01':'收星有效'
				}

			},
			/* 铷钟状态 */
			fs1_state:{
				offset:176,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'铷钟未锁定，锁相环未同步',
					'01':'铷钟未锁定，锁相环已同步',
					'10':'铷钟已锁定，锁相环未同步',
					'11':'铷钟已锁定，锁相环已同步'
				}

			},
			/* 模拟锁相环 */
			fs1_simulation:{
				offset:184,
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
			/* 输入状态 */
			fs1_input_state:{
				offset:192,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无输入',
					'01':'10MHz输入正常',
					'02':'1PPS-2输入正常',
					'04':'1PPS-1输入正常'
				}

			},
			/* 频标选择 */
			fs1_choice:{
				offset:200,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'输出频率标准为铷原子频标',
					'01':'输出频率标准为外频标'
				}

			},
			/* 参考选择 */
			fs1_resource_choice:{
				offset:208,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'参考源为 10MHz',
					'02':'参考源为 1PPS-2',
					'04':'参考源为 1PPS-1'
				}

			},
			/*  准确度 */
			fs1_accuracy:{
				offset:216,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:6,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 秒稳定度 */
			fs1_second_stability:{
				offset:232,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:5,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 压控电压(DA值) */
			fs1_DA:{
				offset:248,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 告警状态 */
			fs1_alarm_state:{
				offset:280,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无警告',
					'01':'警告'
				}

			},
			/* 故障码 */
			fs1_fault_number:{
				offset:288,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无故障',
					'01':'锁相环故障',
					'02':'10MHz频标模块故障',
					'04':'铷原子钟状态失锁'
				}

			},
			/* 铷钟状态 */
			fs2_state:{
				offset:296,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'铷钟未锁定，锁相环未同步',
					'01':'铷钟未锁定，锁相环已同步',
					'10':'铷钟已锁定，锁相环未同步',
					'11':'铷钟已锁定，锁相环已同步'
				}

			},
			/* 模拟锁相环 */
			fs2_simulation:{
				offset:304,
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
			/* 输入状态 */
			fs2_input_state:{
				offset:312,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无输入',
					'01':'10MHz输入正常',
					'02':'1PPS-2输入正常',
					'04':'1PPS-1输入正常'
				}

			},
			/* 频标选择 */
			fs2_choice:{
				offset:320,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'输出频率标准为铷原子频标',
					'01':'输出频率标准为外频标'
				}

			},
			/* 参考选择 */
			fs2_resource_choice:{
				offset:328,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'参考源为 10MHz',
					'02':'参考源为 1PPS-2',
					'04':'参考源为 1PPS-1'
				}

			},
			/*  准确度 */
			fs2_accuracy:{
				offset:336,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:6,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 秒稳定度 */
			fs2_second_stability:{
				offset:352,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:5,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 压控电压(DA值) */
			fs2_DA:{
				offset:368,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 告警状态 */
			fs2_alarm_state:{
				offset:400,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无警告',
					'01':'警告'
				}

			},
			/* 故障码 */
			fs2_fault_number:{
				offset:408,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无故障',
					'01':'锁相环故障',
					'02':'10MHz频标模块故障',
					'04':'铷原子钟状态失锁'
				}

			},
			/* 铷钟状态 */
			fs3_state:{
				offset:416,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'铷钟未锁定，锁相环未同步',
					'01':'铷钟未锁定，锁相环已同步',
					'10':'铷钟已锁定，锁相环未同步',
					'11':'铷钟已锁定，锁相环已同步'
				}

			},
			/* 模拟锁相环 */
			fs3_simulation:{
				offset:424,
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
			/* 输入状态 */
			fs3_input_state:{
				offset:432,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无输入',
					'01':'10MHz输入正常',
					'02':'1PPS-2输入正常',
					'04':'1PPS-1输入正常'
				}

			},
			/* 频标选择 */
			fs3_choice:{
				offset:440,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'输出频率标准为铷原子频标',
					'01':'输出频率标准为外频标'
				}

			},
			/* 参考选择 */
			fs3_resource_choice:{
				offset:448,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'参考源为 10MHz',
					'02':'参考源为 1PPS-2',
					'04':'参考源为 1PPS-1'
				}

			},
			/*  准确度 */
			fs3_accuracy:{
				offset:456,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:6,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 秒稳定度 */
			fs3_second_stability:{
				offset:472,
				length:16,
				dimension:0.1,
				showType:1,
				encodeType:5,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 压控电压(DA值) */
			fs3_DA:{
				offset:488,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 告警状态 */
			fs3_alarm_state:{
				offset:520,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无警告',
					'01':'警告'
				}

			},
			/* 故障码 */
			fs3_fault_number:{
				offset:528,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无故障',
					'01':'锁相环故障',
					'02':'10MHz频标模块故障',
					'04':'铷原子钟状态失锁'
				}

			},
			/* 帧尾 */
			tail:{
				offset:536,
				length:8,
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
				"head",
				"number",
				"prepar_state",
				"alarm_state",
				"fault_number",
				"signal_input",
				"frequency_bench",
				"time_bench",
				"year",
				"month",
				"day",
				"hour",
				"minute",
				"second",
				"Leap",
				"simulation",
				"main_time",
				"work_mode",
				"star_count",
				"effective_state",
				"fs1_state",
				"fs1_simulation",
				"fs1_input_state",
				"fs1_choice",
				"fs1_resource_choice",
				"fs1_accuracy",
				"fs1_second_stability",
				"fs1_DA",
				"fs1_alarm_state",
				"fs1_fault_number",
				"fs2_state",
				"fs2_simulation",
				"fs2_input_state",
				"fs2_choice",
				"fs2_resource_choice",
				"fs2_accuracy",
				"fs2_second_stability",
				"fs2_DA",
				"fs2_alarm_state",
				"fs2_fault_number",
				"fs3_state",
				"fs3_simulation",
				"fs3_input_state",
				"fs3_choice",
				"fs3_resource_choice",
				"fs3_accuracy",
				"fs3_second_stability",
				"fs3_DA",
				"fs3_alarm_state",
				"fs3_fault_number",
				"tail"
			]
		},
		/*星地分系统信道发射校零变频器设备通信结构	*/
		SendZero_communication:{
			key:"433",
			orderBy:"25",
			fields:{

			/* 组播地址 */
			Multicast_IP:{
				offset:0,
				length:120,
				dimension:1.0,
				showType:0,
				encodeType:0,
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
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
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"Multicast_IP",
				"recv_port",
				"send_port",
				"system_num"
			]
		},
		/*获取网络参数	*/
		Time_set_messagei_1:{
			key:"409",
			orderBy:"1",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"11",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
					'00':'获取',
					'01':'IP地址',
					'02':'自身端口',
					'03':'目标端口'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*网络参数IP地址	*/
		Time_set_messagei_2:{
			key:"410",
			orderBy:"2",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"14",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"11",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"01",
				option:{
					'00':'获取',
					'01':'IP地址',
					'02':'自身端口',
					'03':'目标端口'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:96,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:208,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*网络参数自身端口	*/
		Time_set_messagei_3:{
			key:"411",
			orderBy:"3",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"4",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"11",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"02",
				option:{
					'00':'获取',
					'01':'IP地址',
					'02':'自身端口',
					'03':'目标端口'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:128,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*网络参数目标端口	*/
		Time_set_messagei_4:{
			key:"412",
			orderBy:"4",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"4",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"11",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"03",
				option:{
					'00':'获取',
					'01':'IP地址',
					'02':'自身端口',
					'03':'目标端口'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:128,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*获取版本信息	*/
		Time_set_messagei_5:{
			key:"413",
			orderBy:"5",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"12",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*置钟	*/
		Time_set_messagei_6:{
			key:"414",
			orderBy:"6",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"8",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"13",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"01",
				option:{
					'01':'置钟',
					'02':'加/减秒',
					'03':'闰秒标志',
					'04':'时间基准',
					'05':'评率基准',
					'06':'主备切换',
					'07':'接收机'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:48,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:160,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*加/减秒	*/
		Time_set_messagei_7:{
			key:"415",
			orderBy:"7",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"13",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"02",
				option:{
					'01':'置钟',
					'02':'加/减秒',
					'03':'闰秒标志',
					'04':'时间基准',
					'05':'评率基准',
					'06':'主备切换',
					'07':'接收机'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'加秒',
					'01':'减秒'
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*闰秒标识	*/
		Time_set_messagei_8:{
			key:"416",
			orderBy:"8",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"13",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"03",
				option:{
					'01':'置钟',
					'02':'加/减秒',
					'03':'闰秒标志',
					'04':'时间基准',
					'05':'评率基准',
					'06':'主备切换',
					'07':'接收机'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'无闰秒',
					'01':'正闰秒',
					'02':'负闰秒'
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*时间基准	*/
		Time_set_messagei_9:{
			key:"417",
			orderBy:"9",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"13",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"04",
				option:{
					'01':'置钟',
					'02':'加/减秒',
					'03':'闰秒标志',
					'04':'时间基准',
					'05':'评率基准',
					'06':'主备切换',
					'07':'接收机'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'自动',
					'01':'外时频',
					'02':'预留',
					'04':'接收机'
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*频率基准	*/
		Time_set_messagei_10:{
			key:"418",
			orderBy:"10",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"13",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"05",
				option:{
					'01':'置钟',
					'02':'加/减秒',
					'03':'闰秒标志',
					'04':'时间基准',
					'05':'评率基准',
					'06':'主备切换',
					'07':'接收机'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'自动',
					'01':'外时频',
					'02':'铷标A',
					'04':'铷标B',
					'08':'铷标C'
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*主备切换	*/
		Time_set_messagei_11:{
			key:"419",
			orderBy:"11",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"13",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"06",
				option:{
					'01':'置钟',
					'02':'加/减秒',
					'03':'闰秒标志',
					'04':'时间基准',
					'05':'评率基准',
					'06':'主备切换',
					'07':'接收机'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'备用',
					'01':'主用'
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*接收机	*/
		Time_set_messagei_12:{
			key:"420",
			orderBy:"12",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"13",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"07",
				option:{
					'01':'置钟',
					'02':'加/减秒',
					'03':'闰秒标志',
					'04':'时间基准',
					'05':'评率基准',
					'06':'主备切换',
					'07':'接收机'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'混合',
					'01':'北斗',
					'02':'GPS'
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*时延补偿	*/
		Time_set_messagei_13:{
			key:"421",
			orderBy:"13",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"4",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"14",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"01",
				option:{
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:16,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:128,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*频标选择（频标A）	*/
		Time_set_messagei_14:{
			key:"422",
			orderBy:"14",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"21",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'铷频标',
					'01':'外频标'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*参考选择（频标A）	*/
		Time_set_messagei_15:{
			key:"423",
			orderBy:"15",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"22",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'10MHz',
					'02':'1PPS-2',
					'04':'1PPS-1'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*时钟模式（频标A）	*/
		Time_set_messagei_16:{
			key:"424",
			orderBy:"16",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"23",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'自由运行',
					'01':'跟踪'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*手动调频（频标A）	*/
		Time_set_messagei_17:{
			key:"425",
			orderBy:"17",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"6",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"24",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:144,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*频标选择（频标B）	*/
		Time_set_messagei_18:{
			key:"426",
			orderBy:"18",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"31",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'铷频标',
					'01':'外频标'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*参考选择（频标B）	*/
		Time_set_messagei_19:{
			key:"427",
			orderBy:"19",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"32",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'10MHz',
					'02':'1PPS-2',
					'04':'1PPS-1'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*时钟模式（频标B）	*/
		Time_set_messagei_20:{
			key:"428",
			orderBy:"20",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"33",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'10MHz',
					'02':'1PPS-2',
					'04':'1PPS-1'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*手动调频（频标B）	*/
		Time_set_messagei_21:{
			key:"429",
			orderBy:"21",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"6",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"34",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:144,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*频标选择（频标C）	*/
		Time_set_messagei_22:{
			key:"430",
			orderBy:"22",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"41",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'铷频标',
					'01':'外频标'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*参考选择（频标C）	*/
		Time_set_messagei_23:{
			key:"431",
			orderBy:"23",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"42",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'01':'10MHz',
					'02':'1PPS-2',
					'04':'1PPS-1'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*时钟模式（频标C）	*/
		Time_set_messagei_24:{
			key:"432",
			orderBy:"24",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"3",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"43",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:1,
				encodeType:2,
				unitName:"",
				defaultValue:"",
				option:{
					'00':'自由运行',
					'01':'跟踪'
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:120,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*手动调频（频标C）	*/
		Time_set_messagei_25:{
			key:"434",
			orderBy:"25",
			fields:{

			/* 源分系统编号 */
			source_system_num:{
				offset:0,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0100",
				option:{
				}

			},
			/* 目标系统编号 */
			target_system_num:{
				offset:8,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0900",
				option:{
				}

			},
			/* 命令类型 */
			command_type:{
				offset:24,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"5232",
				option:{
				}

			},
			/* 同类命令序号 */
			command_mun:{
				offset:40,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定填0 */
			Res_zero:{
				offset:56,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"0000",
				option:{
				}

			},
			/* 数据字节数 */
			byte_num:{
				offset:72,
				length:16,
				dimension:1.0,
				showType:0,
				encodeType:1,
				unitName:"",
				defaultValue:"6",
				option:{
				}

			},
			/* 帧头 */
			head:{
				offset:88,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7b",
				option:{
				}

			},
			/* 设置类别 */
			tst:{
				offset:96,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"44",
				option:{
					'11':'网络参数',
					'12':'版本信息',
					'13':'始终状态',
					'14':'时延补偿',
					'21':'频标选择（频标A）',
					'22':'参考选择（频标A）',
					'23':'时钟模式（频标A）',
					'24':'手动调频（频标A）',
					'31':'频标选择（频标B）',
					'32':'参考选择（频标B）',
					'33':'时钟模式（频标B）',
					'34':'手动调频（频标B）',
					'41':'频标选择（频标C）',
					'42':'参考选择（频标C）',
					'43':'时钟模式（频标C）',
					'44':'手动调频（频标C）'
				}

			},
			/* 设置项 */
			tsm:{
				offset:104,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"00",
				option:{
				}

			},
			/* 设置内容 */
			tscon:{
				offset:112,
				length:32,
				dimension:1.0,
				showType:1,
				encodeType:7,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 帧尾 */
			tail:{
				offset:144,
				length:8,
				dimension:1.0,
				showType:0,
				encodeType:2,
				unitName:"",
				defaultValue:"7d",
				option:{
				}

			}
			},
			fieldArray:[
				"source_system_num",
				"target_system_num",
				"command_type",
				"command_mun",
				"Res_zero",
				"byte_num",
				"head",
				"tst",
				"tsm",
				"tscon",
				"tail"
			]
		},
		/*报文头	*/
		messageHead:{
			key:"387",
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
		"SendZero_communication",
		"Time_set_messagei_1",
		"Time_set_messagei_2",
		"Time_set_messagei_3",
		"Time_set_messagei_4",
		"Time_set_messagei_5",
		"Time_set_messagei_6",
		"Time_set_messagei_7",
		"Time_set_messagei_8",
		"Time_set_messagei_9",
		"Time_set_messagei_10",
		"Time_set_messagei_11",
		"Time_set_messagei_12",
		"Time_set_messagei_13",
		"Time_set_messagei_14",
		"Time_set_messagei_15",
		"Time_set_messagei_16",
		"Time_set_messagei_17",
		"Time_set_messagei_18",
		"Time_set_messagei_19",
		"Time_set_messagei_20",
		"Time_set_messagei_21",
		"Time_set_messagei_22",
		"Time_set_messagei_23",
		"Time_set_messagei_24",
		"Time_set_messagei_25"
	],
	/*状态结构体数组*/
	structGetArray:[
		"Timer_work_state"
	]
}
