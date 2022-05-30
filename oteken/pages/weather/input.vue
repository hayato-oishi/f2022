<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <h1 class="text-h5 mb-4">お天気登録</h1>
        <validation-observer
          ref="observer"
          v-slot="{ invalid }"
          tag="form"
          @submit.prevent="insert"
        >
          <validation-provider
            v-slot="{ errors }"
            name="年月日"
            rules="required"
          >
            <v-text-field
              v-model="date"
              required
              width="300"
              label="年月日"
              :error-messages="errors[0]"
            />
          </validation-provider>
          <v-select
            v-model="code"
            :items="weatherCodes"
            item-text="text"
            item-value="value"
            width="300"
          />
          <div class="mt-4">
            <v-btn color="blue" block type="submit" :disabled="invalid">
              登録
            </v-btn>
          </div>
        </validation-observer>
      </v-col>
    </v-row>
    <dialog-notice ref="dialog-notice" />
  </v-container>
</template>

<script>
export default {
  name: 'WeatherInputPage',
  data() {
    return {
      date: '',
      code: null,
      weatherCodes: [
        {
          text: '晴れ',
          value: 0,
        },
        {
          text: 'くもり',
          value: 1,
        },
        {
          text: '雨',
          value: 2,
        },
      ],
    }
  },
  methods: {
    async insert() {
      const response = await this.$axios.post('/api/weather', {
        date: this.date,
        code: this.code,
      })
      const { error } = response.data
      if (error) {
        this.$refs['dialog-notice'].open('ERROR', error)
        return
      }
      this.date = ''
      this.code = null
      this.$refs.observer.reset()
      this.$refs['dialog-notice'].open('SUCCESS', '登録に成功しました')
    },
  },
}
</script>
