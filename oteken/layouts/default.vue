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
      <v-btn to="/login" nuxt icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>
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
export default {
  name: 'DefaultLayout',
}
</script>
