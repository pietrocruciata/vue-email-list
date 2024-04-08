const { createApp } = Vue

createApp({
  data() {
    return {
      emails: []
    }
  },
  methods: {
    newEmail(nEmails) {
      for (let i = 0; i < nEmails; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((res) => {
            const createEmail = res.data.response
            this.emails.push(createEmail)
          })
      }

    },
  },
  created() {
    this.newEmail(10)
  }

}).mount('#app')