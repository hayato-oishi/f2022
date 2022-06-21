import Vue from 'vue'

Vue.filter('priceFormat', (value) => {
  return value.toLocaleString()
})