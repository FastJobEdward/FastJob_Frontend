<template>
  <div>
    <h1>Login page</h1>
    <v-btn @click="Authenticate">Sign in</v-btn>
  </div>
</template>

<script>
export default {
  name: "login-applicants",
  methods: {
    Authenticate(){
      this.$router.push(`fastjob/applicants/1`)
    }
  }
}
</script>

<style scoped>

</style>