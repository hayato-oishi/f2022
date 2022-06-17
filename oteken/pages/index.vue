<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div class="calendar">
          <div class="month">
            <v-btn icon @click="prev">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <div class="date">
              <h1>{{ monthText }}</h1>
              <p>{{ today }}</p>
            </div>
            <v-btn icon @click="next">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
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
            <div
              v-for="(day, index) in calendarDays"
              :key="`${index}day.day`"
              :class="calendarClass(day)"
            >
              {{ day.day }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      days: [],
      listOfWeather: [],
      date: new Date(),
      today: new Date().toDateString(),
    }
  },
  computed: {
    calendarDays() {
      const today = this.date
      return this.days.map((date) => {
        const weather = this.listOfWeather.find((weather) => {
          return weather.weatherDate === date
        })
        date = new Date(date)
        return {
          day: date.getDate(),
          weather: weather !== undefined ? weather.weatherCode : null,
          sameMonth: date.getMonth() === today.getMonth(),
        }
      })
    },
    year() {
      return this.date.getFullYear()
    },
    month() {
      return this.date.getMonth() + 1
    },
    monthText() {
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
    },
  },
  created() {
    this.getCalendar(this.year, this.month)
  },
  methods: {
    async getCalendar(year, month) {
      const response = await this.$axios.get('/api/calendar/month', {
        params: {
          year,
          month
        }
      })
      this.days = response.data.days
      await this.getListOfWeather()
    },
    async getListOfWeather() {
      const response = await this.$axios.get('/api/weather', {
        params: {
          start: this.days[0],
          end: this.days[this.days.length - 1]
        }
      })
      this.listOfWeather = response.data.listOfWeather
    },
    prev() {
      const date = new Date(this.date)
      date.setMonth(date.getMonth() - 1)
      this.date = date
      this.getCalendar(this.year, this.month)
    },
    next() {
      const date = new Date(this.date)
      date.setMonth(date.getMonth() + 1)
      this.date = date
      this.getCalendar(this.year, this.month)
    },
    calendarClass (day) {
      return {
        'prev-next-date': !day.sameMonth,
        'sunny': day.weather === 0,
        'cloudy': day.weather === 1,
        'rainy': day.weather === 2,
      }
    }
  },
}
</script>
