class Controller {
  responseDto(data) {
    const { error } = data
    const result = {
      data: {},
      error: '',
    }
    // 正常系エラー時
    if (error) {
      result.error = error
      return result
    }
    // 正常系
    if (data) {
      result.data = data
      return result
    }
  }
}

export default Controller
