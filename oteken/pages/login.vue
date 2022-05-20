<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6">
        <h1 class="text-h4 mb-4 text-center">Login</h1>
        <v-form @submit.prevent="login">
          <v-text-field v-model="email" width="300" label="email" />
          <v-text-field v-model="password" type="password" width="300" label="password" />
          <v-btn color="blue mt-4" block type="submit">Login</v-btn>
        </v-form>
      </v-col>
    </v-row>
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
    async login () {
      const response = await this.$axios.post('/api/user/login', {
        email: this.email,
        password: this.password
      })
      sessionStorage.setItem('token', response.token)
    }
  }
}
</script>
