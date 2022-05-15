import axios from 'axios'

class HttpRequest {
  constructor(baseUrl) {
    this.instance = axios.create({ baseURL: baseUrl })
  }

  // Method: GET用ラッパー関数
  async get(path, params, headers) {
    return await this.instance.get(path, { params, headers })
  }

  // Method: POST用ラッパー関数
  async post(path, payload, headers) {
    return await this.instance.post(path, payload, { headers })
  }

  // axios requestラッパー関数
  async request(config) {
    return await this.instance.request(config)
  }
}

export default HttpRequest
