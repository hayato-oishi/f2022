class Controller {
  responseDto(data) {
    const { error } = data
    const result = {}
    // 正常系エラー時
    if (error) {
      result.error = error
      return result
    }
    // 正常系
    if (data) {
      Object.entries(data).forEach(([key, value]) => {
        result[key] = value
      })
      result.error = null
      return result
    }
  }
}

export default Controller
