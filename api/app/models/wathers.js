import moment from 'moment'

class Wathers {
  constructor(params) {
    this.id = params.id
    this.watherDate = moment(params.wather_date).format('YYYY-MM-DD')
    this.watherCode = params.wather_code
    this.createdAt = params.created_at
  }

  get() {
    return {
      id: this.id,
      watherDate: this.watherDate,
      watherCode: this.watherCode,
      createdAt: this.createdAt
    }
  }
}

export default Wathers
