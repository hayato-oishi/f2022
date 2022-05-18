<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="calendar">
        <div class="month">
          <i class="mdi mdi-chevron-left prev" @click="prev"></i>
          <div class="date">
            <h1>{{ monthText }}</h1>
            <p>{{ today }}</p>
          </div>
          <i class="mdi mdi-chevron-right next" @click="next"></i>
        </div>
        <div class="weekdays">
          <div>日</div>
          <div>月</div>
          <div>火</div>
          <div>水</div>
          <div>木</div>
          <div>金</div>
          <div>土</div>
        </div>
        <div class="days">
          <div v-for="(day, index) in calendarDays" :key="`${index}day.day`" :class="{'prev-next-date': !day.sameMonth}">{{ day.day }}</div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      listOfDate: [],
      date: new Date(),
      today: new Date().toDateString()
    }
  },
  computed: {
    calendarDays () {
      const today = this.date
      return this.listOfDate.map((date) => {
        date = new Date(date)
        return {
          day: date.getDate(),
          sameMonth: date.getMonth() === today.getMonth()
        }
      })
    },
    year () {
      return this.date.getFullYear()
    },
    month () {
      return this.date.getMonth() + 1
    },
    monthText () {
      const months = [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ]
      return months[this.date.getMonth()]
    }
  },
  created() {
    this.getCalendar(this.year, this.month)
  },
  methods: {
    async getCalendar(year, month) {
      const response = await this.$axios.get(`/api/calendar/month?year=${year}&month=${month}`)
      this.listOfDate = response.data.days
    },
    prev () {
      const date = new Date(this.date)
      date.setMonth(date.getMonth() - 1)
      this.date = date
      this.getCalendar(this.year, this.month)
    },
    next () {
      const date = new Date(this.date)
      date.setMonth(date.getMonth() + 1)
      this.date = date
      this.getCalendar(this.year, this.month)
    }
  },
}
</script>
