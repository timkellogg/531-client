<template>
  <nav class="navbar">
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>

export default {
  name: 'navbar',
  data () {},
  methods: {
    logout() {
      this.$store.dispatch('logout')
          .then(() => {
            console.log('logged out')
          })
          .catch(err => {
            console.error(err)
          })
    }
  }
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
