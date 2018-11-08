import $utils from './utils'
export default {
  utils: $utils,
  /**
   * 将页面数据转成byte发给后台
   * @data：页面数据
   * @device：数据对应的设备
   * @callback：解析完数据所执行的回调函数
   * */
  writeData (device, data, callback) {
    const Data = data
    const structArray = device.detailed
    let result = []
    let id = device.id
    let order = 0
    result[1] = id % 256
    result[0] = (id - result[1]) / Math.pow(256, 1)
    for (let key in Data) {
      order++
      for (let i = 0; i < structArray.length; i++) {
        const name = structArray[i].name
        if (name === key) {
          const struct = structArray[i].data
          const fieldData = Data[key]
          let byte = this.fieldByte(struct, order, fieldData)
          result = result.concat(byte)
        }
      }
    }
    console.log(result)
    callback(result)
  },
  fieldByte (device, order, data) {
    const fieldArray = device.fieldArray // 结构体中所有字段
    const fields = device.fields // 结构体中所有字段
    const Data = data // 页面结构体数据
    const orde = order // 页面结构体数据
    let result = []
    let bit = ''
    for (let i = 0; i < fieldArray.length; i++) {
      const key = fieldArray[i] // 字段名称
      const index = fields[key].offset / 8 // 字段的下标
      const length = fields[key].length / 8 // 字段的长度
      const showType = fields[key].showType // 字段的显示类型
      const encodeType = fields[key].encodeType // 字段的解析类型
      const dimension = fields[key].dimension // 字段的解析类型
      const option = fields[key].option // 字段的选项配置
      let defaultValue = fields[key].defaultValue // 字段的默认值
      if (defaultValue === '') {
        defaultValue = orde
      }
      let temp = Data[key] ? Data[key] : defaultValue // 页面的字段数据
      if (Data[key]) {
        // 如果字段有option就把页面数据转换成2进制
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
             * @0:无
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
          if (encodeType === 0) {
            for (let i = 0; i < length; i++) {
              result[index + i] = 0
            }
          }
          if (encodeType === 1) {
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
          if (encodeType === 2) {
            for (let i = 0; i < length; i++) {
              result[index + i] = this.utils.str_16ToBytes(temp)[0]
            }
          }
          if (encodeType === 3) {
            for (let i = 0; i < length; i++) {
              result[index + i] = temp - 0
            }
          }
          if (encodeType === 4) {
            if (length === 6) {
              let arr = this.utils.timeToBCD_48(temp)
              for (let i = 0; i < length; i++) {
                result[index + i] = arr[i]
              }
            }
            if (length === 4) {
              let arr = this.utils.timeToBCD_32(temp)
              for (let i = 0; i < length; i++) {
                result[index + i] = arr[i]
              }
            }
          }
          if (encodeType === 5) {
            for (let i = 0; i < length; i++) {
              result[index + i] = temp - 0
            }
          }
          if (encodeType === 6) {
            for (let i = 0; i < length; i++) {
              result[index + i] = temp
            }
          }
          if (encodeType === 7) {
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
          if (encodeType === 0) {
            result[index] = 0
          }
          if (encodeType === 1) {
            let byte = temp
            if (Object.keys(option).length > 0) {
              byte = this.utils.analyzeReverse(temp, option) - 0
            }
            byte = byte / dimension
            result[index] = byte
          }
          if (encodeType === 2) {
            if (Object.keys(option).length > 0) {
              result[index] = this.utils.str_16ToBytes(temp)[0]
            } else {
              result[index] = this.utils.str_16ToBytes(temp)[0]
            }
          }
          if (encodeType === 3) {
            result[index] = temp - 0
          }
          if (encodeType === 4) {
            result[index] = temp - 0
          }
          if (encodeType === 5) {
            result[index] = temp - 0
          }
          if (encodeType === 6) {
            result[index] = temp - 0
          }
          if (encodeType === 7) {
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
            temp = this.utils.plus0(temp, 2) // 进行补0
            result[i] = this.utils.str_16ToBytes(temp)[0] // 结果
          }
        }
      }
    }
    return result
  }
}
