/*GNSS侧向定位接收结构体*/
export const device_GNSS={
	id:'37',
	sId:'0',
	ifBaseband:false,
	struct:{
		/*GNSS侧向定位接收结构体	*/
		GNSS:{
			key:"457",
			orderBy:"0",
			fields:{

			/* GNSS协议头 */
			$GPHPD:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"$GPHPD",
				option:{
				}

			},
			/* 接收机时间（星期数） */
			GPSWeek:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 接收机时间（星期内毫秒数） */
			GPSTime:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 偏航角 */
			Heading:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"0",
				option:{
				}

			},
			/* 俯仰角 */
			Pitch:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 地速相对真北方向的夹角 */
			Track:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 纬度 */
			Latitude:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 经度 */
			Longitude:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 高度 */
			Altitude:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 东向位置坐标 */
			PosE:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 北向位置坐标 */
			PosN:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 天向位置坐标 */
			PosU:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 东向速度 */
			Ve:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 北向速度 */
			Vn:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 天向速度 */
			Vu:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 两次测量值之间的东向速度差 */
			Ae:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 两次测量值之间的北向速度差 */
			An:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 两次测量值之间的天向速度差 */
			Au:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 基线长度 */
			Baseline:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 前天线可用星数 */
			NSV1:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 后天线可用星数 */
			NSV2:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* RTK标志位 */
			RTKStatue:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 校验 */
			CS:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			},
			/* 固定包尾 */
			CR_LF:{
				offset:0,
				length:0,
				dimension:1.0,
				showType:1,
				encodeType:8,
				unitName:"",
				defaultValue:"",
				option:{
				}

			}
			},
			fieldArray:[
				"$GPHPD",
				"GPSWeek",
				"GPSTime",
				"Heading",
				"Pitch",
				"Track",
				"Latitude",
				"Longitude",
				"Altitude",
				"PosE",
				"PosN",
				"PosU",
				"Ve",
				"Vn",
				"Vu",
				"Ae",
				"An",
				"Au",
				"Baseline",
				"NSV1",
				"NSV2",
				"RTKStatue",
				"CS",
				"CR_LF"
			]
		}
	},
	/*设置结构体数组*/
	structSetArray:[
		"GNSS"
	],
	/*状态结构体数组*/
	structGetArray:[
		"GNSS"
	]
}
