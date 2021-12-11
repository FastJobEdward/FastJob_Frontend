<template>
  <div>
    <h1>Login page for Business</h1>
    <v-btn @click="Authenticate">Sign in Business</v-btn>
  </div>
</template>

<script>
export default {
  name: "login-business",
  methods: {
    Authenticate(){
      this.$router.push(`fastjob/business/1/work-offers`)
    }
  }
}
</script>

<style scoped>

</style>