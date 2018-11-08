/*星地中频分路组合协议*/
export const device_CenterFrequency = {
  id: '28',
  sId: '2f06',
  ifBaseband: false,
  struct: {
    /*星地分系统信道中频分路组合设备网络地址定义	*/
    CenterFrequency_equipment_attribute: {
      key: '249',
      orderBy: '0',
      fields: {

        /* 设备名称 */
        ea_name: {
          offset: 0,
          length: 400,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 设备IP地址 */
        ea_IP: {
          offset: 400,
          length: 120,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 设备组播地址 */
        ea_Multicast_IP: {
          offset: 520,
          length: 120,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 设备接收端口号 */
        ea_report: {
          offset: 640,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 设备发送端口号 */
        ea_seport: {
          offset: 656,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        }
      },
      fieldArray: [
        'ea_name',
        'ea_IP',
        'ea_Multicast_IP',
        'ea_report',
        'ea_seport'
      ]
    },
    /*星地分系统信道中频分路组合设备通信结构	*/
    CenterFrequency_communication: {
      key: '250',
      orderBy: '0',
      fields: {

        /* 组播地址 */
        Multicast_IP: {
          offset: 0,
          length: 120,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 接收端口 */
        recv_port: {
          offset: 120,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 发送端口 */
        send_port: {
          offset: 136,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 本机分系统号 */
        system_num: {
          offset: 152,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        }
      },
      fieldArray: [
        'Multicast_IP',
        'recv_port',
        'send_port',
        'system_num'
      ]
    },
    /*星地分系统信道中频分路组合信息报文首部	*/
    CenterFrequency_information_header: {
      key: '251',
      orderBy: '0',
      fields: {

        /* 应用标识号 */
        H: {
          offset: 0,
          length: 32,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 信息报文帧序号 */
        SEQ: {
          offset: 32,
          length: 32,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 任务代号 */
        M: {
          offset: 64,
          length: 8,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 信息报文帧类型 */
        T: {
          offset: 72,
          length: 8,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 信息报文帧长度 */
        L: {
          offset: 80,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 优先级 */
        P: {
          offset: 96,
          length: 8,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 信息代号 */
        C: {
          offset: 104,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 附加字 */
        A: {
          offset: 120,
          length: 8,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 信源 */
        S: {
          offset: 128,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 信宿 */
        D: {
          offset: 144,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 保留字 */
        R: {
          offset: 160,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        }
      },
      fieldArray: [
        'H',
        'SEQ',
        'M',
        'T',
        'L',
        'P',
        'C',
        'A',
        'S',
        'D',
        'R'
      ]
    },
    /*星地分系统信道中频分路组合子报文首部	*/
    CenterFrequency_sub_information_header: {
      key: '252',
      orderBy: '0',
      fields: {

        /* 源分系统编号 */
        S1: {
          offset: 0,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 目的分系统编号 */
        D1: {
          offset: 16,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 命令类型 */
        T1: {
          offset: 32,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 同类命令序号 */
        I1: {
          offset: 48,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 操作字 */
        O1: {
          offset: 64,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* Data1数据长度 */
        L1: {
          offset: 80,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 数据字段 */
        Data1: {
          offset: 96,
          length: 2048,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        }
      },
      fieldArray: [
        'S1',
        'D1',
        'T1',
        'I1',
        'O1',
        'L1',
        'Data1'
      ]
    },
    /*星地分系统信道中频分路组合设置应答信息	*/
    CenterFrequency_response_information: {
      key: '253',
      orderBy: '0',
      fields: {

        /* 设置应答信息 */
        ANSWER_FLAG: {
          offset: 0,
          length: 8,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        }
      },
      fieldArray: [
        'ANSWER_FLAG'
      ]
    },
    /*星地分系统信道中频分路组合命令类型号定义	*/
    CenterFrequency_command_type: {
      key: '254',
      orderBy: '0',
      fields: {

        /* 参数设置帧 */
        ct_set: {
          offset: 0,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 应答帧 */
        ct_answer: {
          offset: 16,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 状态帧 */
        ct_state: {
          offset: 32,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        }
      },
      fieldArray: [
        'ct_set',
        'ct_answer',
        'ct_state'
      ]
    },
    /*星地分系统信道中频分路组合参数设置	*/
    CenterFrequency_parameter_setting: {
      key: '255',
      orderBy: '0',
      fields: {

        /* 本分控状态 */
        State: {
          offset: 0,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 1,
          unitName: '',
          defaultValue: '',
          option: {
            '0': '本控',
            '1': '分控'
          }

        },
        /* 输出1对应输入选择 */
        OUT1_SEL: {
          offset: 8,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {
            '00': '输入1(ka发射基带A)',
            '01': '输入2(ka发射基带B)'
          }

        },
        /* 输出2对应输入选择 */
        OUT2_SEL: {
          offset: 16,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {
            '00': '输入2(ka发射基带B)',
            '01': '输入1(ka发射基带A)'
          }

        },
        /* 输出3对应输入选择 */
        OUT3_SEL: {
          offset: 24,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {
            '00': '输入3(ka发射校零中频出)'
          }

        },
        /* 输出4对应输入选择 */
        OUT4_SEL: {
          offset: 32,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {
            '00': '输入3(ka发射校零中频出)'
          }

        },
        /* 输出5对应输入选择 */
        OUT5_SEL: {
          offset: 40,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {
            '00': '输入1(ka发射基带A)',
            '01': '输入2(ka发射基带B)',
            '02': '输入3(ka发射校零中频出)',
            '03': '输入4(暂预留无定义)',
            '04': '输入5(站间中频监测1)',
            '05': '输入6(站间中频监测2)',
            '06': '输入7(ka下变频器A)',
            '07': '输入8(ka下变频器B)',
            '08': '输入9(ka接收基带A)',
            '09': '输入10(ka接收基带B)',
            '0A': '输入11(暂预留无定义)',
            '0B': '输入12(暂预留无定义)'
          }

        },
        /* 输出6对应输入选择 */
        OUT6_SEL: {
          offset: 48,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {
            '00': '输入1(ka发射基带A)',
            '01': '输入2(ka发射基带B)',
            '02': '输入3(ka发射校零中频出)',
            '03': '输入4(暂预留无定义)',
            '04': '输入5(站间中频监测1)',
            '05': '输入6(站间中频监测2)',
            '06': '输入7(ka下变频器A)',
            '07': '输入8(ka下变频器B)',
            '08': '输入9(ka接收基带A)',
            '09': '输入10(ka接收基带B)',
            '0A': '输入11(暂预留无定义)',
            '0B': '输入12(暂预留无定义)'
          }

        },
        /* 输出7对应输入选择 */
        OUT7_SEL: {
          offset: 56,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {
            '00': '输入7(ka下变频器A)',
            '01': '输入8(ka下变频器B)'
          }

        },
        /* 输出8对应输入选择 */
        OUT8_SEL: {
          offset: 64,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {
            '00': '输入8(ka下变频器B)',
            '01': '输入7(ka下变频器A)'
          }

        },
        /* 输出9对应输入选择 */
        OUT9_SEL: {
          offset: 72,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {
            '00': '输入9(ka接收基带A)',
            '01': '输入10(ka接受基带B)'
          }

        },
        /* 输出10对应输入选择 */
        OUT10_SEL: {
          offset: 80,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {
            '00': '输入1(ka发射基带A)',
            '01': '输入2(ka发射基带B)',
            '02': '输入3(ka发射校零中频出)',
            '03': '输入4(暂预留无定义)',
            '04': '输入5(站间中频监测1)',
            '05': '输入6(站间中频监测2)',
            '06': '输入7(ka下变频器A)',
            '07': '输入8(ka下变频器B)',
            '08': '输入9(ka接收基带A)',
            '09': '输入10(ka接收基带B)',
            '0A': '输入11(暂预留无定义)',
            '0B': '输入12(暂预留无定义)'
          }

        },
        /* 输出11对应输入选择 */
        OUT11_SEL: {
          offset: 88,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {
            '00': '输入1(ka发射基带A)',
            '01': '输入2(ka发射基带B)',
            '02': '输入3(ka发射校零中频出)',
            '03': '输入4(暂预留无定义)',
            '04': '输入5(站间中频监测1)',
            '05': '输入6(站间中频监测2)',
            '06': '输入7(ka下变频器A)',
            '07': '输入8(ka下变频器B)',
            '08': '输入9(ka接收基带A)',
            '09': '输入10(ka接收基带B)',
            '0A': '输入11(暂预留无定义)',
            '0B': '输入12(暂预留无定义)'
          }

        },
        /* 输出12对应输入选择 */
        OUT12_SEL: {
          offset: 96,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {
            '00': '输入1(ka发射基带A)',
            '01': '输入2(ka发射基带B)',
            '02': '输入3(ka发射校零中频出)',
            '03': '输入4(暂预留无定义)',
            '04': '输入5(站间中频监测1)',
            '05': '输入6(站间中频监测2)',
            '06': '输入7(ka下变频器A)',
            '07': '输入8(ka下变频器B)',
            '08': '输入9(ka接收基带A)',
            '09': '输入10(ka接收基带B)',
            '0A': '输入11(暂预留无定义)',
            '0B': '输入12(暂预留无定义)'
          }

        },
        /* 保存 */
        RECV: {
          offset: 104,
          length: 256,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        }
      },
      fieldArray: [
        'State',
        'OUT1_SEL',
        'OUT2_SEL',
        'OUT3_SEL',
        'OUT4_SEL',
        'OUT5_SEL',
        'OUT6_SEL',
        'OUT7_SEL',
        'OUT8_SEL',
        'OUT9_SEL',
        'OUT10_SEL',
        'OUT11_SEL',
        'OUT12_SEL',
        'RECV'
      ]
    },
    /*星地分系统信道中频分路组合状态上报信息	*/
    CenterFrequency_state_report: {
      key: '256',
      orderBy: '0',
      fields: {

        /* 本分控状态 */
        State: {
          offset: 0,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 1,
          unitName: '',
          defaultValue: '',
          option: {
            '0': '本控',
            '1': '分控'
          }

        },
        /* 自检状态 */
        examination_state: {
          offset: 8,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {
            '00': '正常',
            '01': '故障'
          }

        },
        /* 输出1对应输入选择 */
        OUT1_SEL: {
          offset: 16,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 输出2对应输入选择 */
        OUT2_SEL: {
          offset: 24,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 输出3对应输入选择 */
        OUT3_SEL: {
          offset: 32,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 输出4对应输入选择 */
        OUT4_SEL: {
          offset: 40,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 输出5对应输入选择 */
        OUT5_SEL: {
          offset: 48,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 输出6对应输入选择 */
        OUT6_SEL: {
          offset: 56,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 输出7对应输入选择 */
        OUT7_SEL: {
          offset: 64,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 输出8对应输入选择 */
        OUT8_SEL: {
          offset: 72,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 输出9对应输入选择 */
        OUT9_SEL: {
          offset: 80,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 输出10对应输入选择 */
        OUT10_SEL: {
          offset: 88,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 输出11对应输入选择 */
        OUT11_SEL: {
          offset: 96,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 输出12对应输入选择 */
        OUT12_SEL: {
          offset: 104,
          length: 8,
          dimension: 1.0,
          showType: 1,
          encodeType: 2,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 保留 */
        RECV: {
          offset: 112,
          length: 256,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        }
      },
      fieldArray: [
        'State',
        'examination_state',
        'OUT1_SEL',
        'OUT2_SEL',
        'OUT3_SEL',
        'OUT4_SEL',
        'OUT5_SEL',
        'OUT6_SEL',
        'OUT7_SEL',
        'OUT8_SEL',
        'OUT9_SEL',
        'OUT10_SEL',
        'OUT11_SEL',
        'OUT12_SEL',
        'RECV'
      ]
    },
    /*报文头	*/
    messageHead: {
      key: '400',
      orderBy: '0',
      fields: {

        /* 应用标识号 */
        flag: {
          offset: 0,
          length: 32,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 信息报文帧序号 */
        seq: {
          offset: 32,
          length: 32,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 任务代号 */
        missionId: {
          offset: 64,
          length: 8,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 信息报文帧类型 */
        missionType: {
          offset: 72,
          length: 8,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 信息报文长度 */
        missionLenth: {
          offset: 80,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 优先级 */
        priority: {
          offset: 96,
          length: 8,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 信息代号 */
        messageId: {
          offset: 104,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 附加字 */
        addition: {
          offset: 120,
          length: 8,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 信源 */
        source: {
          offset: 128,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 新宿 */
        target: {
          offset: 144,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 保留字 */
        Rev: {
          offset: 160,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 源分系统编号 */
        SourceSubsystemNumber: {
          offset: 176,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 目的分系统编号 */
        TargetSubsystemNumber: {
          offset: 192,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 命令类型 */
        commandType: {
          offset: 208,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 同类命令序号 */
        commandSeq: {
          offset: 224,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 固定填0 */
        fixed0: {
          offset: 240,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        },
        /* 数据所占字节数 */
        byteNum: {
          offset: 256,
          length: 16,
          dimension: 1.0,
          showType: 0,
          encodeType: 0,
          unitName: '',
          defaultValue: '',
          option: {}

        }
      },
      fieldArray: [
        'flag',
        'seq',
        'missionId',
        'missionType',
        'missionLenth',
        'priority',
        'messageId',
        'addition',
        'source',
        'target',
        'Rev',
        'SourceSubsystemNumber',
        'TargetSubsystemNumber',
        'commandType',
        'commandSeq',
        'fixed0',
        'byteNum'
      ]
    }
  },
  /*设置结构体数组*/
  structSetArray: [
    'CenterFrequency_parameter_setting'
  ],
  /*状态结构体数组*/
  structGetArray: [
    'CenterFrequency_state_report'
  ]
}
