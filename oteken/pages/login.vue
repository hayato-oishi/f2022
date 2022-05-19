<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6">
        <h1 class="text-h4 mb-4 text-center">Login</h1>
        <v-form>
          <v-text-field v-model="email" width="300" label="email" />
          <v-text-field v-model="password" width="300" label="password" />
          <v-btn color="blue mt-4" block>Login</v-btn>
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
}
</script>
