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
    <!-- {{ 1000 | priceFormat }} -->
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
      // 今日
      const today = this.date
      // 
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
      this.getListOfWeather()
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

<style lang="scss">

.calendar {
  width: 45rem;
  height: auto;
  background-color: #222227;
  box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.4);
}

.month {
  width: 100%;
  height: 12rem;
  background-color: #2196f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  text-align: center;
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
}

.month i {
  font-size: 2.5rem;
  cursor: pointer;
}

.month h1 {
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 1rem;
}

.month p {
  font-size: 1.6rem;
}

.weekdays {
  width: 100%;
  height: 5rem;
  padding: 0 0.4rem;
  display: flex;
  align-items: center;
}

.weekdays div {
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  width: calc(44.2rem / 7);
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
}

.days {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.2rem;
}

.days div {
  font-size: 0.9rem;
  margin: 0.3rem;
  width: calc(40.2rem / 7);
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
  transition: background-color 0.2s;
}

.days div:hover:not(.today) {
  background-color: #262626;
  border: 0.2rem solid #777;
  cursor: pointer;
}

.prev-next-date {
  opacity: 0.5;
}

.sunny {
  background-color: #ffdf8c;
}

.cloudy {
  background-color: #e5e8e3;
}

.rainy {
  background-color: #9fb5d3;
}
</style>