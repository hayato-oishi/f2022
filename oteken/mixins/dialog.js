export const dialog = {
  methods: {
    openDialog(title, text) {
      this.$store.dispatch('dialog/open', { title, text })
    },
  },
}