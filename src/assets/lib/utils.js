import monitor from './monitor'
export default{
  /**
   * 解析socket返回数据
   * @data：后台返回的数据
   * @device：数据对应的设备
   * @callback：解析完数据所执行的回调函数
   * */
  readData (data, device, callback) {
    // 判断数据类型，分发不同的处理方法
    if (typeof data === 'string') {
      this.readString(data, callback) // 返回内容为字符串JSON
    }
    if (typeof data !== 'string') {
      this.readBlob(data, device, callback) // 返回内容为byte数据
    }
  },
  /**
   * 解析socket返回数据
   * @String：后台返回的String类型数据
   * @callback：解析完数据所执行的回调函数
   * */
  readString (String, callback) {
    let result = {} // 结果集合
    // 设备在线状态
    if (String.includes('deviceOnLine')) {
      monitor.onLine(JSON.parse(String)) // JSON数据
    } else {
      result.status = String.substr(0, String.indexOf('{')).replace('HTTP/1.1', '').replace(/^\s+|\s+$/g, '')
      let data = String.substr(String.indexOf('{'))
      result.status = result.status - 0 // 状态码
      result.data = JSON.parse(data) // json数据
      callback(result) // 回调返回数据
    }
  },
  /**
   * 读取Blob数据解析为byte
   * @Blob：后台返回的byte类型数据，可能为Blob格式
   * @device:{当前设备的所有结构体集合
   *   keyArray:[]当前集合中所有key值
   *   detailed:{}当前集合中的结构体数据
   * }
   * @callback：解析完数据所执行的回调函数
   * */
  readBlob (Blob, device, callback) {
    let read = new FileReader() // 创建读取BLOB/byte格式数据的实例
    let resultData = {}
    // 读取数据
    read.readAsArrayBuffer(Blob)
    read.onload = (event) => {
      let arrayBuffer = event.target.result
      let result = new Uint8Array(arrayBuffer) // 把byte转为无符号整形byte
      if (result.length === 0) {
        return false
      }
      // 判断数据是推送还是请求回来的，0为接收数据，非0为推送数据
      let type = result[0]
      if (type === 1) {
        // 截取数据的key值
        let key = this.byteToString(result.slice(1, result.length))
        resultData = {
          type: type, // 数据类型（推送/接收）
          key: key // 数据更新的key
        }
      }
      if (type === 0) {
        let status = result[1] + result[2] // 状态码
        let url = this.byteToString(result.slice(3, result.indexOf(10))) // 返回url
        let data = result.slice(result.indexOf(10) - 0 + 1, result.length) // 返回的byte数据
        resultData = {
          type: type, // 数据类型（推送/接收）
          status: status, // 状态码
          url: url, // 接口url
          data: data // byte数据
        }
      }
    }
    read.onloadend = () => {
      let res = {} // 返回结果
      let statusMark = '/api/monitor/autoGet' // 状态url
      let settingMark = '/api/parameter/getParameter' // 设置url
      let macroGetMark = '/api/macroFile/quaryMacroFile' // 宏配置url
      console.log(resultData)
      // 1为推送数据
      if (resultData.type === 1) {
        res = resultData
        // 返回解析完成的数据
        callback(res)
      }
      // 0为接收数据
      if (resultData.type === 0) {
        res.type = resultData.type // 返回结果的数据类型
        if (resultData.data.length === 0) {
          res = resultData
        } else {
          // 如果是状态数据直接进行解析
          if (resultData.url === statusMark) {
            // 分割数据的方法
            resultData.data = this.sliceData(resultData.data)
            // GNSS协议解析
            if (resultData.data[0].key === 457) {
              res.data = this.GNSS(resultData, device)
            } else {
              // 其他设备数据解析
              res.data = this.deviceAnalyze(device, resultData) // 进行数据解析
            }
          }
          // 如果是设置参数需要分割成以结构体为中心的数据格式再进行解析
          if (resultData.url === settingMark || resultData.url === macroGetMark) {
            resultData.data = this.dataSplic(device, resultData) // 分割数据的方法
            res.data = this.deviceAnalyze(device, resultData) // 进行数据解析
          }
        }
        /**
         * 返回解析完成的数据
         * res: {
         *   type: '', 数据类型
         *   data: '' 数据
         * }
         * */
        callback(res)
      }
    }
  },
  /**
   * 截取数据
   * 截取byte中的key和数据
   * @data:byte数据
   * */
  sliceData (data) {
    let result = []
    let arrData = data // 每次截取得数据
    while (true) {
      let obj = {}
      let length = arrData[0] * 256 + arrData[1] // 数据长度
      let arr = arrData.slice(2, length + 2) // 本次处理截取的数据
      arrData = arrData.slice(length + 2) // 截取下次待处理的数组
      obj.key = arr[0] * 256 + arr[1] // 数据的key
      obj.data = arr.slice(2) // 数据
      result.push(obj)
      if (arrData.length < 1) {
        break
      }
      let lastLength = arrData[0] * 256 + arrData[1]
      // 如果length大于0则代表还有数据待处理
      if (lastLength < 1) {
        break
      }
    }
    return result
  },
  /**
   * 分割数据
   * 请求回来的设置数据为多个结构体完整拼接，分割成单个结构体数据
   * @device：当前设备的所有结构体集合
   * @data：请求回来的数据
   * */
  dataSplic (_device, _data) {
    let data = _data.data
    // 如果是基带设备就截掉前7位
    if (_device.ifBaseband) {
      data = data.slice(7, data.length) // 截取id前俩位
    } else {
      data = data.slice(3, data.length) // 截取id前俩位
    }
    let result = [] // 返回结果
    let device = _device.detailed // 设备的结构体信息
    let index = 0 // 截取数据的起始下标
    for (let i = 0; i < device.length; i++) {
      let obj = {}
      let fields = device[i].data.fields // 结构体的所有字段
      let length = 0 // 结构体的数据长度
      obj.key = device[i].data.key - 0 // 结构体key
      // 遍历结构体的所有字段，得出结构体长度
      for (let item in fields) {
        length += fields[item].length
      }
      let dataByte = data.slice(index, index + Math.ceil(length / 8)) // 要合并的数据
      obj.data = dataByte
      index += Math.ceil(length / 8) // 此次数据处理完成，把下标位置等于下一截数据的起始位置
      result.push(obj) // 添加到结果数组
    }
    return result
  },
  /**
   * 把多个TypedArray(byte)数组进行合并
   * */
  concatenate (resultConstructor, ...arrays) {
    let totalLength = 0
    for (let arr of arrays) {
      totalLength += arr.length
    }
    let result = new resultConstructor(totalLength)
    let offset = 0
    for (let arr of arrays) {
      result.set(arr, offset)
      offset += arr.length
    }
    return result
  },
  /**
   * 把16进制转换为展示数据
   * @value：解析完成的数据
   * @obj：解析完数据所对应的描述信息
   * */
  analyze (value, obj) {
    let val = value
    for (let key in obj) {
      if (typeof val !== 'string') {
        val = String(val)
      }
      if (val === key) {
        return obj[key]
      }
    }
  },
  /**
   * 把16进制转换为展示数据
   * @value：解析完成的数据
   * @obj：解析完数据所对应的描述信息
   * */
  analyzeReverse (value, obj) {
    let val = value
    for (let key in obj) {
      if (typeof val !== 'string') {
        val = String(val)
      }
      if (val === key) {
        return key
      }
    }
  },
  // 把byte数组转化为字符串
  byteToString (arr) {
    if (typeof arr === 'string') {
      return arr
    }
    let str = ''
    let _arr = arr
    for (let i = 0; i < _arr.length; i++) {
      let one = _arr[i].toString(2)
      let v = one.match(/^1+?(?=0)/)
      if (v && one.length === 8) {
        let bytesLength = v[0].length
        let store = _arr[i].toString(2).slice(7 - bytesLength)
        for (let st = 1; st < bytesLength; st++) {
          store += _arr[st + i].toString(2).slice(2)
        }
        str += String.fromCharCode(parseInt(store, 2))
        i += bytesLength - 1
      } else {
        str += String.fromCharCode(_arr[i])
      }
    }
    return str
  },
  // 把byte数组转化为16进制字符串
  byteToStr_16 (arr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
      let tmp = arr[i].toString(16)
      if (tmp.length === 1) {
        tmp = '0' + tmp
      }
      str += tmp
    }
    return str
  },
  // 把16进制字符串转为byte数组
  str_16ToBytes (str) {
    let pos = 0
    let len = str.length
    if (len % 2 !== 0) {
      return null
    }
    len /= 2
    let hexA = []
    for (let i = 0; i < len; i++) {
      let s = str.substr(pos, 2)
      let v = parseInt(s, 16)
      hexA.push(v)
      pos += 2
    }
    return hexA
  },
  /**
   * 解析设备数据
   * @device:{当前设备的所有结构体集合
   *   keyArray:[]当前集合中所有key值
   *   detailed:{}当前集合中的结构体数据
   * }
   * @data：解析完的
   * @callback：解析完数据所执行的回调函数
   * */
  deviceAnalyze (device, data) {
    const self = this
    const detailed = device.detailed // 设备的所有结构体数据
    const ifBaseband = device.ifBaseband // 设备是否是基带设备
    let result = {} // 解析结果
    let byteData = [] // 未解析的数据
    if (Object.keys(data).length === 0) {
      return false
    }
    // 遍历结构体数组
    for (let k = 0; k < detailed.length; k++) {
      const item = detailed[k].name // 结构体名称
      const struct = detailed[k].data // 结构体内容
      for (let i = 0; i < data.data.length; i++) {
        if (struct.key - 0 === data.data[i].key - 0) {
          // 如果没有数据跳过此次循环
          if (!data.data[i].data) {
            return
          }
          byteData = data.data[i].data
          result[item] = {} // 结构体解析结果
          const itemData = struct.fields // 设备具体结构体字段数据
          // 遍历结构体中的每个字段
          for (let key in itemData) {
            /*
            * @0:无
            * @1:十进制
            * @2:十六进制
            * @3:2进制
            * @4:BCD
            * @5:二进制数字对应信息
            * @6:二进制数
            * @7:有符号数
            * */
            const encodeType = itemData[key].encodeType // 每个字段的解析类型
            const option = itemData[key].option // 字段对应的描述
            const offset = itemData[key].offset // 字段偏移量
            const length = itemData[key].length // 字段长度
            const dimension = itemData[key].dimension // 字段量纲
            const unitName = itemData[key].unitName // 字段单位
            let temp = '' // 字段解析后的byte数据
            if (length % 8 !== 0) {
              let num = Math.floor(offset / 8)
              // byte为为每个字段的具体数据
              let byte = byteData.slice(num, num + 1)
              // 转成bit
              let bit = self.BitParse(self.byteToStr_16(byte))
              // bit数据下标
              let index = offset % 8
              let sum = 0 // 具体代表的值
              for (let i = 0; i < length; i++) {
                sum += bit[index + i] * Math.pow(2, length - i - 1)
              }
              // 如果option中有选项就替换
              if (Object.keys(option).length > 0) {
                temp = self.analyze(sum, option)
              }
            } else {
              let start = offset / 8
              let end = offset / 8 + length / 8
              // byte为为每个字段的具体数据
              let byte = byteData.slice(start, end)
              // encodeType为0通常为保留字段，不需要解析
              if (encodeType === 0) {
                temp = byte
              }
              // type为1表示byte数据按十进制解析
              if (encodeType === 1) {
                // byte数组转十进制数，将数组每一位的值 * 256的次方再相加
                let num = 0
                for (let i = 0; i < byte.length; i++) {
                  num += byte[i] * Math.pow(256, byte.length - i - 1)
                }
                temp = num * dimension
                if (Math.round(dimension) !== dimension) {
                  temp = (num * dimension).toFixed(2)
                }
                // 如果option里有属性存在，则代表此字段对应描述解析
                if (Object.keys(option).length > 0) {
                  temp = self.analyze(num, option)
                }
              }
              // type为2表示byte数据按十六进制对应描述解析
              if (encodeType === 2) {
                if (Object.keys(option).length > 0) {
                  temp = self.analyze(self.byteToStr_16(byte), option)
                } else {
                  temp = self.byteToStr_16(byte)
                }
              }
              // type为3表示byte数据按2进制数字解析
              if (encodeType === 3) {
                temp = self.analyze(byte[0], option)
              }
              // type为4表示byte数据按BCD码解析
              if (encodeType === 4) {
                byte = byte.reverse()
                if (byte.length === 6) {
                  temp = self.BCD_48(byte)
                }
                if (byte.length === 4) {
                  temp = self.BCD_32(byte)
                }
              }
              // type为5表示byte数据无符号BCD码
              if (encodeType === 5) {
                byte = self.byteToStr_16(byte)
                temp = ((byte - 0) * dimension).toFixed(2)
                if (!temp) {
                  temp = '无数据'
                }
              }
              // type为6表示byte数据有符号BCD码
              if (encodeType === 6) {
                byte = self.byteToStr_16(byte)
                if (byte[0] === '1') {
                  temp = ((('-' + byte) - 0) * dimension).toFixed(2)
                } else {
                  temp = ((byte - 0) * dimension).toFixed(2)
                }
                if (!temp) {
                  temp = '无数据'
                }
              }
              // type为7表示byte数据按有符号数解析
              if (encodeType === 7) {
                let num = 0
                byte = new Int8Array(byte)
                for (let i = 0; i < byte.length; i++) {
                  num += byte[i] * Math.pow(256, byte.length - i - 1)
                }
                temp = (num * dimension).toFixed(2)
              }
            }
            // 加单位
            if (unitName) {
              temp += ' ' + unitName
            }
            // 如果值为空或者undefind，页面显示为‘---’
            if ((temp - 0) !== 0 && !temp) {
              temp = '---'
            }
            result[item][key] = temp // 把字段解析结果赋值给结构体字段
          }
        }
      }
    }
    return result // 返回结果
  },
  /*
 * 16进制数转BCD时码格式
 * @bytearray: 时码字段的byte数组
 * */
  BCD_48 (byte) {
    let self = this
    let bitstr = self.BitParse(self.byteToStr_16(byte.slice(4, 6).reverse()))
    let ms = self.BCD_ms(self.byteToStr_16(byte.slice(0, 2)))
    let s = self.BCD_s(self.byteToStr_16(byte.slice(2, 3)))
    let m = self.BCD_m(self.byteToStr_16(byte.slice(3, 4)))
    let h = self.BitCal(bitstr)[3] + self.BitCal(bitstr)[4]
    let d = self.BitCal(bitstr)[0] + self.BitCal(bitstr)[1] + self.BitCal(bitstr)[2]
    return d + 'd' + h + 'h' + m + 'm' + s + 's' + ms + 'ms'
  },
  BCD_32 (byte) {
    let self = this
    let bitstr = self.BitParse(self.byteToStr_16(byte.slice(2, 4).reverse()))
    let s = self.BCD_s(self.byteToStr_16(byte.slice(0, 1)))
    let m = self.BCD_m(self.byteToStr_16(byte.slice(1, 2)))
    let h = self.BitCal(bitstr)[3] + self.BitCal(bitstr)[4]
    let d = self.BitCal(bitstr)[0] + self.BitCal(bitstr)[1] + self.BitCal(bitstr)[2]
    return d + 'd' + h + 'h' + m + 'm' + s + 's'
  },
  /*
 * 16进制数转BCD时码格式ms
 * @str16: 十六进制字符串
 * */
  BCD_ms (str16) {
    return (str16[2] - 0) * 100 + (str16[3] - 0) * 10 + (str16[0] - 0) + (str16[1] - 0) / 10
  },
  /*
 * 16进制数转BCD时码格式s
 * @str16: 十六进制字符串
 * */
  BCD_s (str16) {
    return (str16[0] - 0) * 10 + (str16[1] - 0)
  },
  /*
 * 16进制数转BCD时码格式m
 * @str16: 十六进制字符串
 * */
  BCD_m (str16) {
    return (str16[0] - 0) * 10 + (str16[1] - 0)
  },
  /*
  * 16进制数转bit（8位）
  * @str16: 十六进制字符串
  * */
  BitParse (str16) {
    let map = {
      '0': '0000',
      '1': '0001',
      '2': '0010',
      '3': '0011',
      '4': '0100',
      '5': '0101',
      '6': '0110',
      '7': '0111',
      '8': '1000',
      '9': '1001',
      'a': '1010',
      'b': '1011',
      'c': '1100',
      'd': '1101',
      'e': '1110',
      'f': '1111'
    }
    let bit = []
    for (let key in map) {
      if (str16[0] === key) {
        bit[0] = map[key]
      }
      if (str16[1] === key) {
        bit[1] = map[key]
      }
      if (str16[2] === key) {
        bit[2] = map[key]
      }
      if (str16[3] === key) {
        bit[3] = map[key]
      }
    }
    return bit.join('')
  },
  /*
  * bit转换BCD时码格式（8位）
  * @bitstr: bit（位）字符串
  * */
  BitCal (bitstr) {
    let bitarray = []
    let result = []
    bitarray[0] = bitstr.slice(0, 2)
    bitarray[1] = bitstr.slice(2, 6)
    bitarray[2] = bitstr.slice(6, 10)
    bitarray[3] = bitstr.slice(10, 12)
    bitarray[4] = bitstr.slice(12, 16)
    for (let i = 0; i < bitarray.length; i++) {
      let item = bitarray[i]
      let num = 0
      for (let k = 0; k < item.length; k++) {
        num += (item[k] - 0) * Math.pow(2, (item.length - 1) - k)
      }
      if (i === 0) {
        result[i] = num * 100
      }
      if (i === 1) {
        result[i] = num * 10
      }
      if (i === 2) {
        result[i] = num
      }
      if (i === 3) {
        result[i] = num * 10
      }
      if (i === 4) {
        result[i] = num
      }
    }
    return result
  },
  /**
   * 参数设置，页面数据转成byte数组
   * */
  writeByte (_device, _data, callback) {
    let device = _device.detailed
    let data = _data
    let result = []
    let id = _device.id
    let mun = 0
    let command = 0x0000F002 // 控制命令类别
    console.log(command)
    let commandByte = [] // 控制命令转成的byte数组
    // 是否是基带设备
    result[0] = 0
    if (_device.ifBaseband) {
      result[0] = 1
      let lastvalue = command % 256
      // 控制命令类别
      for (let i = 0; i < 4; i++) {
        if (i === 3) {
          commandByte[3] = lastvalue
          break
        }
        commandByte[i] = (command - lastvalue) / Math.pow(256, 4 - i - 1)
      }
    }
    // 设备id
    result[2] = id % 256
    result[1] = (id - result[2]) / Math.pow(256, 1)
    // 合并数据头
    result = [...result, ...commandByte]
    for (let i = 0; i < device.length; i++) {
      let key = device[i].name // 结构体名称
      let struct = device[i].data // 结构体数据
      let dataArr = this.fieldByte(struct, data[key], mun) // byte数据
      // 合并数据区
      result = [...result, ...dataArr] // 当前结构体的参数下发数据
    }
    console.log(result)
    callback(result)
  },
  fieldByte (_device, data) {
    let result = []
    let fieldArray = _device.fieldArray
    let device = _device.fields
    let bit = '' // 按位运算
    for (let item of fieldArray) {
      let key = item // 获取字段名称
      if (data[key] === '') break // 如果字段为undefind就跳出此次循环
      let type = device[key].encodeType // 解析类型
      let option = device[key].option // 字段中的选项组
      let dimension = device[key].dimension // 字段量纲
      let index = device[key].offset / 8 // 字段在byte数组中的下标
      let length = device[key].length / 8 // 字段长度
      let temp = data[key] // data字段数据
      // 如果option中有属性存在，则替换数据为option中的key
      if (data[key]) {
        if (Object.keys(option).length > 0) {
          for (let item in option) {
            if (temp === option[item]) {
              temp = item
            }
          }
        }
      }
      /*
              *type类型
              * @0:无,保留位
              * @1:十进制
              * @2:十六进制
              * @3:2进制
              * @4:BCD
              * @5:二进制数字对应信息
              * @6:二进制数
              * @7:有符号数
              * */
      // 如果length取整之后还是自己，则length为整数
      if (Math.round(length) === length) {
        // 大于1表示此字段值长度大于一
        if (length > 1) {
          if (type === 0) {
            for (let i = 0; i < length; i++) {
              result[index + i] = 0
            }
          }
          if (type === 1) {
            let byte = temp / dimension
            let lastvalue = byte % 256
            for (let i = 0; i < length; i++) {
              if (i === length - 1) {
                result[index + i] = lastvalue
                break
              }
              result[index + i] = (byte - lastvalue) / Math.pow(256, length - i - 1)
            }
          }
          if (type === 2) {
            for (let i = 0; i < length; i++) {
              result[index + i] = this.str_16ToBytes(temp)[0]
            }
          }
          if (type === 3) {
            for (let i = 0; i < length; i++) {
              result[index + i] = temp - 0
            }
          }
          if (type === 4) {
            if (length === 6) {
              let arr = this.timeToBCD_48(temp)
              for (let i = 0; i < length; i++) {
                result[index + i] = arr[i]
              }
            }
            if (length === 4) {
              let arr = this.timeToBCD_32(temp)
              for (let i = 0; i < length; i++) {
                result[index + i] = arr[i]
              }
            }
          }
          if (type === 5) {
            for (let i = 0; i < length; i++) {
              result[index + i] = temp - 0
            }
          }
          if (type === 6) {
            for (let i = 0; i < length; i++) {
              result[index + i] = temp
            }
          }
          if (type === 7) {
            let byte = temp / dimension
            let lastvalue = byte % 256
            for (let i = 0; i < length; i++) {
              if (i === length - 1) {
                result[index + i] = lastvalue
                // result[index + i] = new Int8Array([result[index + i]])[0]
                break
              }
              result[index + i] = (byte - lastvalue) / Math.pow(256, length - i - 1)
              // result[index + i] = new Int8Array([result[index + i]])[0]
            }
          }
        }
        if (length === 1) {
          // 此字段值长度为一
          if (type === 0) {
            result[index] = 0
          }
          if (type === 1) {
            let byte = temp
            if (Object.keys(option).length > 0) {
              byte = this.analyzeReverse(temp, option) - 0
            }
            byte = byte / dimension
            result[index] = byte
          }
          if (type === 2) {
            if (Object.keys(option).length > 0) {
              result[index] = this.str_16ToBytes(temp)[0]
            } else {
              result[index] = this.str_16ToBytes(temp)[0]
            }
          }
          if (type === 3) {
            result[index] = temp - 0
          }
          if (type === 4) {
            result[index] = temp - 0
          }
          if (type === 5) {
            result[index] = temp - 0
          }
          if (type === 6) {
            result[index] = temp - 0
          }
          if (type === 7) {
            let byte = temp / dimension
            result[index] = byte % 256
          }
        }
      } else {
        // 如果length不是整数，则代表不能被8整除，需要按位运算
        for (let i = 0; i < device[key].length; i++) {
          temp = temp ? temp.toString() : '0'
          bit += temp
        }
        // 如果数据为4字节则进行转换
        if (bit.length === 32) {
          // 每8位bit为一个字节
          let byte = []
          byte[0] = bit.slice(0, 8)
          byte[1] = bit.slice(8, 16)
          byte[2] = bit.slice(16, 24)
          byte[3] = bit.slice(24, 32)
          for (let i = 0; i < byte.length; i++) {
            // 把每一个字节转换成16进制
            let temp = parseInt(byte[i], 2).toString(16)
            temp = this.plus0(temp, 2) // 进行补0
            result[i] = this.str_16ToBytes(temp)[0] // 结果
          }
        }
      }
    }
    for (let i = 0; i < result.length; i++) {
      result[i] = Math.floor(result[i])
    }
    return result
  },
  timeToBCD_48 (timeString) {
    let indexD = timeString.indexOf('d')
    let indexH = timeString.indexOf('h')
    let indexM = timeString.indexOf('m')
    let indexS = timeString.indexOf('s')
    let indexMS = timeString.indexOf('ms')
    // let indexDecimal = timeString.indexOf('.')
    // 第1-2 byte
    let timeD = timeString.slice(0, indexD)
    let d100 = Math.floor(timeD / 100).toString(2) // 转成2进制
    d100 = this.plus0(d100, 2) // 补零

    timeD = timeD % 100
    let d10 = Math.floor(timeD / 10).toString(2)// 转成2进制
    d10 = this.plus0(d10, 4) // 补零

    timeD = timeD % 10
    let d1 = (timeD).toString(2) // 转成2进制
    d1 = this.plus0(d1, 4) // 补零

    let timeH = timeString.slice(indexD + 1, indexH)
    let h10 = Math.floor(timeH / 10).toString(2) // 转成2进制
    h10 = this.plus0(h10, 2) // 补零

    timeH = timeH % 10
    // console.log('timeD----' + timeD)
    let h1 = timeH.toString(2) // 转成2进制
    h1 = this.plus0(h1, 4) // 补零
    // 转16进制字符串
    let temp12 = d100 + d10 + d1 + h10 + h1
    temp12 = parseInt(temp12, 2).toString(16)
    temp12 = this.plus0(temp12, 4) // 补零
    // 第3-6 byte
    let timeM = timeString.slice(indexH + 1, indexM)
    timeM = this.plus0(timeM, 2) // 补零

    let timeS = timeString.slice(indexM + 1, indexS)
    timeS = this.plus0(timeS, 2) // 补零

    let timeMs = timeString.slice(indexS + 1, indexMS)
    let msX10 = parseInt(timeMs) * 10
    let ms100s10 = this.plus0(Math.floor((msX10 / 100)) + '', 2)
    let ms1Decimal = this.plus0((msX10 % 100) + '', 2)

    let str16 = temp12 + timeM + timeS + ms100s10 + ms1Decimal
    let bytes = this.str_16ToBytes(str16)
    return bytes
  },
  timeToBCD_32 (timeString) {
    let indexD = timeString.indexOf('d')
    let indexH = timeString.indexOf('h')
    let indexM = timeString.indexOf('m')
    let indexS = timeString.indexOf('s')
    // let indexDecimal = timeString.indexOf('.')
    // 第1-2 byte
    let timeD = timeString.slice(0, indexD)
    let d100 = Math.floor(timeD / 100).toString(2) // 转成2进制
    d100 = this.plus0(d100, 2) // 补零

    timeD = timeD % 100
    let d10 = Math.floor(timeD / 10).toString(2)// 转成2进制
    d10 = this.plus0(d10, 4) // 补零

    timeD = timeD % 10
    let d1 = (timeD).toString(2) // 转成2进制
    d1 = this.plus0(d1, 4) // 补零

    let timeH = timeString.slice(indexD + 1, indexH)
    let h10 = (timeH / 10).toString(2) // 转成2进制
    h10 = this.plus0(h10, 2) // 补零

    timeD = timeD % 10
    let h1 = timeH.toString(2) // 转成2进制
    h1 = this.plus0(h1, 4) // 补零
    // 转16进制字符串
    let temp12 = d100 + d10 + d1 + h10 + h1
    temp12 = parseInt(temp12, 2).toString(16)
    temp12 = this.plus0(temp12, 4) // 补零
    // 第3-6 byte
    let timeM = timeString.slice(indexH + 1, indexM)
    timeM = this.plus0(timeM, 2) // 补零

    let timeS = timeString.slice(indexM + 1, indexS)
    timeS = this.plus0(timeS, 2) // 补零

    let str16 = temp12 + timeM + timeS
    let bytes = this.str_16ToBytes(str16)
    return bytes
  },
  // 补零到指定长度
  plus0 (Str, lenth) {
    while (lenth - Str.length > 0) {
      Str = '0' + Str
    }
    return Str
  },
  // 转有符号byte
  Value2Bytes (str) {
    str = parseInt(str)
    str = str.toString(16)
    let pos = 0
    let len = str.length
    if (len % 2 !== 0) {
      str = '0' + str
    }
    len /= 2
    let hexA = []
    for (let i = 0; i < len; i++) {
      let s = str.substr(pos, 2)
      let v = parseInt(s, 16)
      hexA.push(v)
      pos += 2
    }
    return hexA
  },
  // GNSS解析方法
  GNSS (data, device) {
    let str = this.byteToString(data.data[0].data)
    let dataArr = str.split(',')
    let fieldArr = device.detailed[0].data.fieldArray
    let result = {}
    let key = device.detailed[0].name
    result[key] = {}
    for (let i = 0; i < fieldArr.length; i++) {
      let item = fieldArr[i]
      result[key][item] = dataArr[i]
    }
    return result
  }
}
