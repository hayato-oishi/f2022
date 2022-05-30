import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/ja.json'

extend('required', {
  ...required,
  message: messages.required,
})

extend('email', {
  ...email,
  message: messages.email,
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
