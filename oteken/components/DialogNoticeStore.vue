<template>
  <v-dialog v-model="dialog" width="500">
    <v-card class="pa-3">
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        {{ text }}
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('dialog', {
      isOpen: state => state.isOpen,
      title: state => state.title,
      text: state => state.text,
    }),
    dialog: {
      get () {
        return this.isOpen
      },
      set (newValue) {
        if (!newValue) {
          this.close()
        }
      }
    }
  },
  methods: {
    ...mapActions('dialog', {
      close: 'close'
    })
  },
}
</script>
