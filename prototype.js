ArrayBuffer.prototype = {
  setString (offset, string) {
    for (let i = 0; i < string.length; i++) {
      let c = string.charCodeAt(i)
      this.setUint8(i, c)
    }
  },
  setBinary (offset, binary) {
    for (let i = 0; i < binary.length; i++) {
      this.setUint8(i, binary[i])
    }
  }
}
