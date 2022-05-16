// import HttpRequest from "../modules/http-requeat.js"
class Calendar {
  static NOTIFY_API_BASE_URL = 'https://notify-api.line.me'

  async month({ message }) {
    try {
      // const api = new HttpRequest(Line.NOTIFY_API_BASE_URL)
      // const res = await api.request(this.notifyDto(message))
      // return res.data
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new Calendar()
