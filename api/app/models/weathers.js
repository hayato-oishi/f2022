import moment from 'moment'

class Weathers {
  constructor(params) {
    this.id = params.id
    this.weatherDate = moment(params.weather_date).format('YYYY-MM-DD')
    this.weatherCode = params.weather_code
    this.createdAt = params.created_at
  }

  get() {
    return {
      id: this.id,
      weatherDate: this.weatherDate,
      weatherCode: this.weatherCode,
      createdAt: this.createdAt
    }
  }
}

export default Weathers
