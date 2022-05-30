<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-btn to="/" nuxt icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn to="/weather/input" nuxt icon>
        <v-icon>mdi-weather-sunny</v-icon>
      </v-btn>
      <template v-if="user.token == null">
        <v-btn to="/login" nuxt icon>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </template>
      <template v-else>
        <v-btn nuxt icon @click="logout">
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <span>{{ user.userName }}</span>
      </template>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }} 研修-お天気</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'DefaultLayout',
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    logout () {
      this.$store.commit('user/logout')
    }
  }
}
</script>
