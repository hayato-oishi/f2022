class Controller {
  responseDto(data, key = '') {
    const { error } = data
    const result = {}
    // 正常系エラー時
    if (error) {
      result.error = error
      return result
    }
    // 正常系
    if (data && key !== '') {
      result[key] = data
      result.error = ''
      return result
    }
  }
}

export default Controller
