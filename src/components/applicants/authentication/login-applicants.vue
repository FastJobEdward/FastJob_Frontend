<template>
  <div>
    <h1>Login page for Applicants</h1>
    <v-btn @click="Authenticate">Sign in Applicants</v-btn>
  </div>
</template>

<script>
export default {
  name: "login-applicants",
  methods: {
    Authenticate(){
      this.$router.push(`fastjob/applicants/1/job-portal`)
    }
  }
}
</script>

<style scoped>

</style>