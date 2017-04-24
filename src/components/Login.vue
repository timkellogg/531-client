<template>
  <div class="register">
    <h2>Register</h2>

    <div class="form">
      <div class="form__group">
        <label for="email">Email:</label>
        <input v-model="email" type="email" v-bind:class="{ error: emailError }">
      </div>

      <div class="form__group">
        <label for="password">Password</label>
        <input v-model="password" type="password" v-bind:class="{ error: passwordError }">
      </div>

      <div class="form__group-button">
        <button @click="login" class="form__button">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
    }
  },
  methods: {
    login () {
      const valid = this.validate()

      const payload = {
        email: this.email,
        password: this.password,
      }

      if (valid) {
        this.$store.dispatch('login', payload)
            .then(() => {
              this.$router.push({ path: '/' })
            })
            .catch(err => console.error(err))
      }
    },
    validate () {
      const errors = ['email', 'password'].map(field => {
        const model = this[field]

        if (model === null || model === '') {
          this[`${field}Error`] = true
        } else {
          this[`${field}Error`] = false
        }

        return this[`${field}Error`]
      })

      if (errors.indexOf(true) !== -1) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style scoped>
  .error {
    border: 1px solid red;
  }
</style>
