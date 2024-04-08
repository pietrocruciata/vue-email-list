const { createApp } = Vue

createApp({
  data() {
    return {
      emails: [],
      nEmails:10
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
    this.newEmail(this.nEmails)
  }

}).mount('#app')