<template>
  <v-dialog v-model="dialog" width="500">
    <v-card class="pa-3">
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        {{ text }}
      </v-card-text>
      <v-btn @click="close">閉じる</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    title: '',
    text: '',
  }),
  methods: {
    open(title, text) {
      this.title = title
      this.text = text
      this.dialog = true
    },
    close() {
      this.dialog = false
      // 親にイベントを渡す
      this.$emit('click')
    }
  },
}
</script>
