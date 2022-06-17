<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6">
        <h1 class="text-h4 mb-4 text-center">Login</h1>
        <validation-observer
          ref="observer"
          v-slot="{ invalid }"
          tag="form"
          @submit.prevent="login"
        >
          <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
          >
            <v-text-field
              v-model="email"
              required
              width="300"
              label="email"
              :error-messages="errors[0]"
            />
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="password"
            rules="required"
          >
            <v-text-field
              v-model="password"
              type="password"
              width="300"
              label="password"
              :error-messages="errors[0]"
            />
          </validation-provider>
          <div class="mt-4">
            <v-btn color="blue" block type="submit" :disabled="invalid">
              Login
            </v-btn>
          </div>
        </validation-observer>
      </v-col>
    </v-row>
    <div class="mt-4">
      <v-btn color="blue" block @click="openDialog">
        モーダル
      </v-btn>
    </div>
  <dialog-notice ref="dialog-notice" @click="dialogEvent" />
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      const response = await this.$axios.post('/api/user/login', {
        email: this.email,
        password: this.password,
      })
      const { error } = response.data
      if (error) {
        this.$refs['dialog-notice'].open('ERROR', error)
        return
      }
      this.$store.dispatch('user/login', response.data)
      this.$router.push('/')
    },
    openDialog () {
      this.$store.dispatch('dialog/open', { title: 'タイトル', text: 'テキスト'})
    },
    dialogEvent () {
      console.log('好きな処理実行できますよ')
    }
  },
}
</script>
